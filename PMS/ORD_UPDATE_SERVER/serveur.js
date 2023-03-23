/*------------ Recupération des varibale du fichier de configuration -------------*/

const config_serv = require('config');

const limit_value = config_serv.get('HttpConfig.bodyparser.limit');
const parameterLimit_value = config_serv.get('HttpConfig.bodyparser.parameterLimit');

const maxAge_value = config_serv.get('Session.cookie.maxAge');
const mongoUrl_value = config_serv.get('Session.store.mongoUrl');

const ftpServer_url_value =  config_serv.get('Ftp.url');
const ftpServer_pathFtp_value =  config_serv.get('Ftp.pathFtp');

const wafUrl =  config_serv.get('Waf.urlApi');
const wafHebergeUrl =  config_serv.get('Waf.hebergeApi');

/*------------ Configuration pour Express -------------*/
const express = require('express');
const  { sso }  =  require ( 'node-expose-sspi' ) ;
const http = require('http');
var https = require('https');
var path = require('path');
const app  = express();
var cors = require('cors')
var session = require('express-session');
const bodyParser = require('body-parser')
var nodemailer = require('nodemailer'); 
const MongoStore = require('connect-mongo');

const Rx = require('rxjs');


// const dbConfig = config_serv.get('Customer.dbConfig');
// console.log(dbConfig);


app.use(bodyParser.json({limit: limit_value}));
app.use(bodyParser.urlencoded({limit: limit_value, extended: true, parameterLimit: parameterLimit_value}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(cookieParser());


app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secret-cookie",
    // secure: true,
    cookie: {
        secure: false,
        maxAge: maxAge_value // 1000 * 60 * 60 * 24 * 30 (1 Mois): herault.JSON
    },
    store: MongoStore.create({
        mongoUrl: mongoUrl_value
    })
})


);

app.set('trust proxy', 1)

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(cors({credentials: true, origin: true}))

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

/*------------ Requêtes vers l'API REST WAFAPI ------------*/ 
const request = require('request');

// const req_test_post = {
//   url: "https://admin:Wintel*34@172.17.2.120:3001/wafapi/tunnels?uid=q89232668768f29666dd44f0c5dd532e",
//   json: true,
 
// };

// // tunnels?uid=q89232668768f29666dd44f0c5dd532e'
// const json_test = '{"workflowParameters": [ {"name": "securityexception", "value": "securityExceptionConfigurationDefault"}, { "name": "maintenance.enable", "value": "false" }] }';
// req_test_post.body = JSON.parse(json_test)
// request.patch(req_test_post, (err, res, body) => {
//    if (err) {
//        return console.log(err);
//    }
//    console.log(`Status: ${res.statusCode}`);
//    console.log("json: %j", body);
//    fs.writeFileSync('sortie.js',JSON.stringify(body));
//  });

/*------------ Configuration pour FTP -------------*/
// Quick start, create an active ftp server.
// const FtpSrv = require('ftp-srv');

// const ftpServer = new FtpSrv({
//     url: ftpServer_url_value,
// });

// ftpServer.on('login', ({ connection, username, password }, resolve, reject) => { 
//     if(username === 'ftp' && password === 'wsus-cg34!'){
//       console.log("Nouvelle connexion de: "+connection['ip']+' avec le compte: '+username);
//       return resolve({ root: ftpServer_pathFtp_value });    
//     }
//     return reject(new errors.GeneralError('Invalid username or password', 401));
// });

// ftpServer.listen().then(() => { 
//     console.log('Ftp server is starting...')
// });


/*------------ Configuration pour MongoDB -------------*/
const MongoClient = require('mongodb').MongoClient;
const ObjectID    = require('mongodb').ObjectId;
const url         = config_serv.get('Mongodb.url');


/*------------ Configuration pour Active Directory -------------*/
var ActiveDirectory = require('activedirectory2');
var config = config_serv.get('ActiveDirectory.config');
var ad = new ActiveDirectory(config);

/*------------ Configuration service MAIL -------------*/
const nodemailer_value = config_serv.get('Nodemailer.config');
var transporter = nodemailer.createTransport(nodemailer_value);

function sendMailNotif(liste_user, sujet, contenu,attachments){
  
  var mailOptions = {
    from: config_serv.get('Nodemailer.from'),
    to: liste_user,
    subject: sujet,
    html: contenu,
    attachments: attachments
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
}


/* --------------- Recuperation du module pour éxécuter des processus -----------*/
const { exec } = require('child_process');

/* --------------- Recuperation du module pour faire des manipulations systèmes -------- */
var fs = require('fs');

/* --------------- Recuperation du module pour éxécuter des processus de manière récurente (cron tab)-----------*/
const cron = require("node-cron");
const { sleep } = require('node-expose-sspi/dist/sso/sleep');


/*------------ paramétrage TLS/SSL ----------*/
const options = {
  key: fs.readFileSync('.\\ssl\\pms.key'),
  cert: fs.readFileSync('.\\ssl\\pms.pem'),
  ca: [
    fs.readFileSync('.\\ssl\\pms.crt')      
  ],
  
};


/*--------------- Reception des demandes d'execution de scripts powershell -------------*/
const toolbox_path_script = config_serv.get('ToolBox.pathscript');
app.get('/execution_scripts/:scriptName/:arguments',(req,res)=>{
  if(req.session.sso){
    var scriptName = req.params.scriptName;
    var argument = req.params.arguments;

    var tab_args = argument.split("&");
    var chaine = scriptName;

    tab_args.forEach(element => {
      chaine+=" "+element;
    });
    console.log("execution du script: "+chaine);
    exec(toolbox_path_script+chaine, {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
      var sortie = "";
      if(error != null){
        sortie += "error: "+error+"\n";
        sortie+="error: "+stderr+"\n";
        res.end(JSON.stringify(sortie));
      }
      sortie += stdout+"\n";
      
      res.end(JSON.stringify(sortie));
    })
  }
});


/*------------ requêtes vers l'AD -------------*/


// var username = 'mbonneaud@herault.fr';


// ad.userExists(username, function(err, exists) {
//     if (err) {
//       console.log('ERROR: ' +JSON.stringify(err));
//       return;
//     }
   
//     console.log(username + ' exists: ' + exists);
//     return username;
// });




/*------------ Connexion et requêtes vers la BDD -------------*/
MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
  
  if (err) throw err;

  let db_patch = client.db("BDD_PATCH_MANAGEMENT");
  let db_tool = client.db("BDD_TOOLBOX");
   
  /*db_patch.collection("calendriers").updateMany({'dates.title': 'Recette & Formation'},{$set: {"dates.$[].actions": this.actions'}},(error)=> {
    if(error) console.log(error);
  })*/

  /* ----------- Fonction de log utilisateur ----------------*/
  function logActionUser(actionUser,loginUser,ip){
    var now = new Date().toISOString().slice(0, 19).replace("T"," ");
    db_patch.collection("users_profil").updateOne({login: loginUser},{$push: {actions: now+": "+actionUser+" @ip="+ip}})
  }

  /*------------ Récupération de la config serveur ----------*/

  class config_serveur {
    constructor(horaireMaj, dureeLogs, horaireMajMic){
      this.horaireMaj = horaireMaj;
      this.dureeLogs = dureeLogs;
      this.horaireMajMic = horaireMajMic;
    }
    get $horaireMaj(){
      return this.horaireMaj;
    }

    get $dureeLogs(){
      return this.dureeLogs;
    }

    get $horaireMajMic(){
      return this.horaireMajMic;
    }

    set $horaireMaj(val){
      this.horaireMaj = val;
    }

    set $dureeLogs(val){
      this.dureeLogs = val;
    }

    set $horaireMajMic(val){
      this.horaireMajMic = val;
    }
  }

  const horaireDefaultMaj_value = config_serv.get('ConfServ.horaireDefaultMaj');
  const joursLogs_value = config_serv.get('ConfServ.joursLogs');
  const horaireDefaultMajMic_value = config_serv.get('ConfServ.horaireDefaultMajMic');

  const conf_serv = new config_serveur(horaireDefaultMaj_value,joursLogs_value,horaireDefaultMajMic_value);


  
  /*------------ Authentification SSO ----------*/


  const GG_Admin = config_serv.get('ActiveDirectory.GroupSecurity.admin');
  const GG_Lecture = config_serv.get('ActiveDirectory.GroupSecurity.lecture');
  const GG_college = config_serv.get('ActiveDirectory.GroupSecurity.college');
  app.get('/mysso/connect-with-sso',sso.auth(), (req, res) => {
    console.log('sso method',req.sso.method);
    //Test si présence du jeton kerberos
    if (!req.sso) {
      return res.status(401).end();
    }
    if (req.session) {
      req.session.sso = req.sso;
      console.log("Session ID: "+req.sessionID);
    }

    
    // partie enregistrement dans la BDD si pas connu
    db_patch.collection("users_profil").findOne({login: req.sso.user.name}, function(err, item){
      if(err) throw err;
      
      if(req.sso.user.groups.includes(GG_Admin)){
        $type = "Admin";
      }
      else if(req.sso.user.groups.includes(GG_college)){
        $type = "College";
      }
      else if(req.sso.user.groups.includes(GG_Lecture)){
        $type = "Lecture";
      }
      else{
        $type = "Aucun";
      }

      if(item == null){
        console.log("nouvel utilisateur: "+req.sso.user.name+" ip: "+req.ip);

        if( req.sso.user.adUser.sn != null && req.sso.user.adUser.givenName != null &&  req.sso.user.adUser.mail != null ){
          db_patch.collection("users_profil").insertOne({nom:  req.sso.user.adUser.sn.toString(), prenom:  req.sso.user.adUser.givenName.toString(), mail:  req.sso.user.adUser.mail.toString(), login:  req.sso.user.name, alertMail: false,type: $type, actions: [], serveursAlerte: 50,serveursBon: 15, theme: "Dark" },() => logActionUser("Connexion",req.sso.user.name,req.ip));
        }
        else{
          db_patch.collection("users_profil").insertOne({login:  req.sso.user.name, alertMail: false,type: $type, actions: [], serveursAlerte: 50,serveursBon: 15,theme: "Dark"}, () => logActionUser("Connexion",req.sso.user.name,req.ip));
        }
      }
      else{
        db_patch.collection("users_profil").updateOne({login: req.sso.user.name}, {$set: {type: $type}});
        logActionUser("Connexion",req.sso.user.name,req.ip);
        console.log("utilisateur déjà dans la base: "+item.login+" ip: "+req.ip);
      }
    });


    // Je retourne le jeton Kerberos enregistré
    return res.json({
      sso: req.sso,
    });
  });


  app.get('/mysso/disconnect', (req, res) => {
    console.log("disconnected"); 
    if (req.session) {
      delete req.session.sso;
    }
    return res.json({});
  });

  app.get('/mysso/is-connected', (req, res) => {
    //console.log(req.sessionID);
    if (req.session.sso) {
      console.log("check ok");
      return res.json({sso: req.session.sso});
    }
    console.log("check pas ok");
    return res.status(401).end();
  });







  /*--------- PATCH MANAGEMENT -----------*/
  /* initialisation de la BDD */
  /* Recupération tous les jours des infos sur les serveurs*/

  // Récupération de l'horaire de mAj a partir de la config serveur
  let tab_horaire = conf_serv.$horaireMaj.split(":");
  let horaire = '0 '+tab_horaire[1]+' '+tab_horaire[0]+' * * *';

  let tab_horaire_mic = conf_serv.$horaireMajMic.split(":");
  let horaire_mic = '0 '+tab_horaire_mic[1]+' '+tab_horaire_mic[0]+' * * *';

  const pathSave_value = config_serv.get('ConfServ.pathSave');
  const pathScript_value = config_serv.get('ConfServ.pathScript');
  const pathScriptLinux_value = config_serv.get('ConfServ.pathScriptLinux');

  db_patch.collection("serveur_config").findOne(function(err,item){

    if(err){
      let tab_horaire = conf_serv.$horaireMaj.split(":");
      let horaire = '0 '+tab_horaire[1]+' '+tab_horaire[0]+' * * *';
    
      let tab_horaire_mic = conf_serv.$horaireMajMic.split(":");
      let horaire_mic = '0 '+tab_horaire_mic[1]+' '+tab_horaire_mic[0]+' * * *';
  
      var task_serv = plannifMaj(horaire);
      task_serv.start();
      
      var task_mic = plannifMajMic(horaire_mic);
      task_mic.start();
    }
    conf_serv.$horaireMaj =  item['horaireMaj'];
    conf_serv.$dureeLogs = item['dureeLogs'];
    conf_serv.$horaireMajMic =  item['horaireMajMic'];  

    let tab_horaire = conf_serv.$horaireMaj.split(":");
    let horaire = '0 '+tab_horaire[1]+' '+tab_horaire[0]+' * * *';
  
    let tab_horaire_mic = conf_serv.$horaireMajMic.split(":");
    let horaire_mic = '0 '+tab_horaire_mic[1]+' '+tab_horaire_mic[0]+' * * *';

    var task_serv = plannifMaj(horaire);
    task_serv.start();
    
    var task_mic = plannifMajMic(horaire_mic);
    task_mic.start();
  });

  // Définition de la fonction qui met à jour les infos serveur
  function majServ(){
    /* Export en .JSON + supression + création de la collection vide pour remplissage */
    console.log("Export de la collection");
    var now = new Date().toISOString().slice(0, 10);
    db_patch.collection("serveurs").find().toArray(function(err,result){
      try {

        fs.writeFile(pathSave_value+now+'.json', JSON.stringify(result),function(err){
          if(err) console.log(err);

            db_patch.collection("serveurs").countDocuments({}).then((Count) => {
              if(Count >0){
              console.log("Supression de "+Count+" docs");
              db_patch.collection("serveurs").drop();
              }
            });
            
          console.log('Fin sauvegarde.');
        });
        
      }
      catch(err) {
          console.log('Error writing to file', err)
      }
    });
    
    exec('chcp 65001 | '+pathScript_value+'List_serv_avec_infos_check_wsus.ps1 ',{'shell':'powershell.exe'},(error,stdout,stderr)=>{
      var sortie = "";
      if(error != null){
        sortie += "error: "+error+"\n";
        sortie+="error: "+stderr+"\n";
        console.log("Erreur: "+sortie);
      }

      sortie += stdout+"\n";
      let tab_serveurs = sortie.split("\n");
      /*  Si la récupération se passe mal on récupère et réintègre la sauvegarde */
      if( tab_serveurs.length < 20){
        console.log("Erreur dans la récupération, seulement "+tab_serveurs.length+"docs récupérés.");
        const data = fs.readFileSync(pathSave_value+now+'.json');
        const docs = JSON.parse(data.toString());

        db.collection('serveurs')
        .insertMany(docs, function(err, result) {
            if (err) throw err;
            console.log('docs insérés:', result.insertedCount);
        });
      }
      else{
        console.log("taille -1: "+tab_serveurs.length);  
        let cpt = 1;    
        tab_serveurs.forEach((serveur)=>{
          infos_serveurs = serveur.split("|");
          console.log("cpt: "+cpt);
          if(cpt == tab_serveurs.length){
            console.log("je passe 1er if");
            if(infos_serveurs[1] != null && infos_serveurs[1] != "null"){
              console.log("je passe dans le dernier");
              var objet = { id: parseInt(infos_serveurs[0]), name: infos_serveurs[1].split("_")[0], fullName: infos_serveurs[2], type: infos_serveurs[3], kb_manquantes: parseInt(infos_serveurs[4]), ip: infos_serveurs[5], OS: infos_serveurs[6], date_last_rapport:  infos_serveurs[7], description: infos_serveurs[8], kb_inconnus: parseInt(infos_serveurs[9]), kb_failed: parseInt(infos_serveurs[10]), date_dernier_update: infos_serveurs[11], os_quick: infos_serveurs[12], position: infos_serveurs[13]};
              db_patch.collection("serveurs").updateOne({name: objet.name},{ $set: { id: parseInt(infos_serveurs[0]), name: infos_serveurs[1].split("_")[0], fullName: infos_serveurs[2], type: infos_serveurs[3], kb_manquantes: parseInt(infos_serveurs[4]), ip: infos_serveurs[5], OS: infos_serveurs[6], date_last_rapport:  infos_serveurs[7], description: infos_serveurs[8], kb_inconnus: parseInt(infos_serveurs[9]), kb_failed: parseInt(infos_serveurs[10]), date_dernier_update: infos_serveurs[11], os_quick: infos_serveurs[12], position: infos_serveurs[13]}},{ upsert: true },function(err,res){
                if (err) throw err;
                console.log("Partie Windows terminée")
              });
            }
            else{
                console.log("Partie Windows terminée");
            }
          }
          else if(infos_serveurs[1] != null && infos_serveurs[1] != "null"){
            var objet = { id: parseInt(infos_serveurs[0]), name: infos_serveurs[1].split("_")[0], fullName: infos_serveurs[2], type: infos_serveurs[3], kb_manquantes: parseInt(infos_serveurs[4]), ip: infos_serveurs[5], OS: infos_serveurs[6], date_last_rapport:  infos_serveurs[7], description: infos_serveurs[8], kb_inconnus: parseInt(infos_serveurs[9]), kb_failed: parseInt(infos_serveurs[10]), date_dernier_update: infos_serveurs[11], os_quick: infos_serveurs[12], position: infos_serveurs[13]};
            db_patch.collection("serveurs").updateOne({name: objet.name},{ $set: { id: parseInt(infos_serveurs[0]), name: infos_serveurs[1].split("_")[0], fullName: infos_serveurs[2], type: infos_serveurs[3], kb_manquantes: parseInt(infos_serveurs[4]), ip: infos_serveurs[5], OS: infos_serveurs[6], date_last_rapport:  infos_serveurs[7], description: infos_serveurs[8], kb_inconnus: parseInt(infos_serveurs[9]), kb_failed: parseInt(infos_serveurs[10]), date_dernier_update: infos_serveurs[11], os_quick: infos_serveurs[12], position: infos_serveurs[13]}},{ upsert: true },function(err,res){
              if (err) throw err;
              applyFixedServer();
            });
          }
          cpt++;
        });

      }

      // PARTIE MAJ LINUX 
      exec('chcp 65001 | '+pathScriptLinux_value+'Rapport_Linux_Alco_Redhat.ps1 ',{'shell':'powershell.exe'},(error,stdout,stderr)=>{
        var sortie = "";
        if(error != null){
          sortie += "error: "+error+"\n";
          sortie+="error: "+stderr+"\n";
          console.log("Erreur: "+sortie);
        }
  
        
        sortie += stdout+"\n";

        exec('chcp 65001 | '+pathScriptLinux_value+'Rapport_Linux_Alco_Ubuntu.ps1 ',{'shell':'powershell.exe'},(error2,stdout2,stderr2)=>{
          var sortie2 = "";
          if(error2 != null){
            sortie2 += "error: "+error2+"\n";
            sortie2+="error: "+stderr2+"\n";
            console.log("Erreur: "+sortie2);
          }
    
          
          sortie2 += stdout2+"\n";
        
          
          exec('chcp 65001 | '+pathScriptLinux_value+'Rapport_Linux_Orange.ps1 ',{'shell':'powershell.exe'},(error3,stdout3,stderr3)=>{
            var sortie3 = "";
            if(error3 != null){
              sortie3 += "error: "+error3+"\n";
              sortie3+="error: "+stderr3+"\n";
              console.log("Erreur: "+sortie3);
            }
      
            
            sortie3 += stdout3+"\n";
            console.log("Recupération Maj linux terminé");
          
            //Historisation
            db_patch.collection("serveurs").find().toArray(function(err,result){
              db_patch.collection("historique_serveur").insertOne({date: now, serveurs: result});
            });
            applyFixedServer();
            console.log("mise à jour terminé");
          
  
          });

        });
      });
    });
    
  } 

  // Définition de la fonction qui met à jour les infos serveur
  function majServMic(){
    /* Export en .JSON + supression + création de la collection vide pour remplissage */
    console.log("Export de la collection MIC");
    var now = new Date().toISOString().slice(0, 10);
    db_patch.collection("serveurs_mic").find().toArray(function(err,result){
      try {

        fs.writeFile(pathSave_value+now+"_MIC"+'.json', JSON.stringify(result),function(err){
          if(err) console.log(err);

            db_patch.collection("serveurs_mic").countDocuments({}).then((Count) => {
              if(Count >0){
              console.log("Supression de "+Count+" docs");
              db_patch.collection("serveurs_mic").drop();
              }
            });
            
          console.log('Fin sauvegarde.');
        });
        
      }
      catch(err) {
          console.log('Error writing to file', err)
      }
    });
    
    exec('chcp 65001 | '+pathScript_value+'List_serv_avec_infos_check_wsus_MIC.ps1 ',{'shell':'powershell.exe'},(error,stdout,stderr)=>{
      var sortie = "";
      if(error != null){
        sortie += "error: "+error+"\n";
        sortie+="error: "+stderr+"\n";
        console.log("Erreur: "+sortie);
      }

      sortie += stdout+"\n";
      console.log("sortie !: "+sortie);
      let tab_serveurs = sortie.split("\n");
      /*  Si la récupération se passe mal on récupère et réintègre la sauvegarde */
      if( tab_serveurs.length < 20){
        console.log("Erreur dans la récupération, seulement "+tab_serveurs.length+"docs récupérés.");
        const data = fs.readFileSync(pathSave_value+now+"_MIC"+'.json');
        const docs = JSON.parse(data.toString());

        db_patch.collection('serveurs_mic')
        .insertMany(docs, function(err, result) {
            if (err) throw err;
            console.log('docs insérés:', result.insertedCount);
        });
      }
      else{
        console.log("taille -1: "+tab_serveurs.length);  
        let cpt = 1;    
        tab_serveurs.forEach((serveur)=>{
          infos_serveurs = serveur.split("|");
          console.log("cpt: "+cpt);
          if(cpt == tab_serveurs.length){
            console.log("je passe 1er if");
            if(infos_serveurs[1] != null && infos_serveurs[1] != "null"){
              console.log("je passe dans le dernier");
              var objet = { id: parseInt(infos_serveurs[0]), name: infos_serveurs[1].split("_")[0], fullName: infos_serveurs[2], type: infos_serveurs[3], kb_manquantes: parseInt(infos_serveurs[4]), ip: infos_serveurs[5], OS: infos_serveurs[6], date_last_rapport:  infos_serveurs[7], description: infos_serveurs[8], kb_inconnus: parseInt(infos_serveurs[9]), kb_failed: parseInt(infos_serveurs[10]), date_dernier_update: infos_serveurs[11], os_quick: infos_serveurs[12], position: infos_serveurs[13]};
              db_patch.collection("serveurs_mic").updateOne({name: objet.name},{ $set: { id: parseInt(infos_serveurs[0]), name: infos_serveurs[1].split("_")[0], fullName: infos_serveurs[2], type: infos_serveurs[3], kb_manquantes: parseInt(infos_serveurs[4]), ip: infos_serveurs[5], OS: infos_serveurs[6], date_last_rapport:  infos_serveurs[7], description: infos_serveurs[8], kb_inconnus: parseInt(infos_serveurs[9]), kb_failed: parseInt(infos_serveurs[10]), date_dernier_update: infos_serveurs[11], os_quick: infos_serveurs[12], position: infos_serveurs[13]}},{ upsert: true },function(err,res){
                if (err) throw err;
                console.log("Partie Windows terminée")
              });
            }
            else{
                console.log("Partie Windows terminée");
            }
          }
          else if(infos_serveurs[1] != null && infos_serveurs[1] != "null"){
            var objet = { id: parseInt(infos_serveurs[0]), name: infos_serveurs[1].split("_")[0], fullName: infos_serveurs[2], type: infos_serveurs[3], kb_manquantes: parseInt(infos_serveurs[4]), ip: infos_serveurs[5], OS: infos_serveurs[6], date_last_rapport:  infos_serveurs[7], description: infos_serveurs[8], kb_inconnus: parseInt(infos_serveurs[9]), kb_failed: parseInt(infos_serveurs[10]), date_dernier_update: infos_serveurs[11], os_quick: infos_serveurs[12], position: infos_serveurs[13]};
            db_patch.collection("serveurs_mic").updateOne({name: objet.name},{ $set: { id: parseInt(infos_serveurs[0]), name: infos_serveurs[1].split("_")[0], fullName: infos_serveurs[2], type: infos_serveurs[3], kb_manquantes: parseInt(infos_serveurs[4]), ip: infos_serveurs[5], OS: infos_serveurs[6], date_last_rapport:  infos_serveurs[7], description: infos_serveurs[8], kb_inconnus: parseInt(infos_serveurs[9]), kb_failed: parseInt(infos_serveurs[10]), date_dernier_update: infos_serveurs[11], os_quick: infos_serveurs[12], position: infos_serveurs[13]}},{ upsert: true },function(err,res){
              if (err) throw err;
              
            });
          }
          cpt++;
        });

      }

      // PARTIE MAJ LINUX 

      // exec('chcp 65001 | '+pathScriptLinux_value+'Linux_Alco_SSH_Rapport.ps1 ',{'shell':'powershell.exe'},(error,stdout,stderr)=>{
      //   var sortie = "";
      //   if(error != null){
      //     sortie += "error: "+error+"\n";
      //     sortie+="error: "+stderr+"\n";
      //     console.log("Erreur: "+sortie);
      //   }
  
      //   sortie += stdout+"\n";
      //   console.log("Recupération Maj linux terminé");
        
        //Historisation
        db_patch.collection("serveurs_mic").find().toArray(function(err,result){
          db_patch.collection("historique_serveur_mic").insertOne({date: now, serveurs: result});
        });
        console.log("mise à jour terminé");
      // });

    });
    
  } 
  

  // Changement de la collection serveur en fonction des serveurs fixés
  function applyFixedServer(){
    //console.log("Application des serveurs fixés");
    db_patch.collection("serveurs_fixed_env").find().toArray(function(err,result){
      if (err) throw err;
      result.forEach((serveur) => {
        db_patch.collection("serveurs").updateOne({name: serveur.name},{$set: {type: serveur.environnement}});
      });
    });
  }

  // Fonction qui ajoute le flad de destruction sur les exclusions temporaire après un patch
  function addDestroy(){
    let today = new Date();
    let chaineToday = today.getDate().toString().padStart(2, '0')+"/"+(today.getMonth()+1).toString().padStart(2, '0')+"/"+today.getFullYear().toString();

    db_patch.collection("Tasks").find({ jour: chaineToday}).toArray((err, documents) => {
      if(err) console.log(err);
      if(documents.length > 0){
        db_patch.collection("exclusions").updateMany({temporaire: true}, {$set: { willDestroy: true}});
      }
    });
  }


  // Définition de la fonction qui supprime les exclusions temporaire qui ont déjà passé un patch (= flag à true)
  function cleanExcluTemp(){
    db_patch.collection("exclusions").deleteMany({willDestroy: true});
  }


  // Définition de la fonction qui éfféctue la tâche d'hitorisation et MAJ des infos serveurs
  function plannifMaj(time){
    let task = cron.schedule(time,() => {
      console.log("Mise a jour de la BDD");
      majServ();
    });
    return task;
  }

  // Définition de la fonction qui éfféctue la tâche d'hitorisation et MAJ des infos serveurs MIC
  function plannifMajMic(time){
    let task = cron.schedule(time,() => {
      console.log("Mise a jour de la BDD MIC");
      majServMic();
    });
    return task;
  }

  // Nettoyage tous les dimanche de serveurs exclus temporaire (si il y a eu patch la semaine)
  function plannifClean(time){
    let task = cron.schedule(time,() => {
      console.log("Nettoyage des exclusions temporaire");
      cleanExcluTemp();
    });
    return task;
  }
  plannifClean("0 8 * * 0");

  // Ajout du champ (flag) "a detruire" sur les exclusions temporaire
  function plannifFieldDestroy(time){
    let task = cron.schedule(time,() => {
      console.log("Ajout de champ de destruction des exclusions");
      addDestroy();
    });
    return task;
  }
  plannifFieldDestroy("0 8 * * *");

  function ajoutDataInFile(req,res){
    /* partie fichier (asynchrone) */
    var fichiers = [];
    var type_serveur = [];
    var filePath =  config_serv.get('ConfServ.filePath');
    var filePathProd = config_serv.get('ConfServ.filePathProd');
    var filePathRec = config_serv.get('ConfServ.filePathRec');

    req.body.plannifs.forEach(serv => {
      if(!fichiers.includes(serv.type+'.txt')){
        fichiers.push(serv.type+'.txt');
      }
      if(!type_serveur.includes(serv.type)){
        type_serveur.push(serv.type);
      }
    });

    /* Supression */
    fichiers.forEach(fichier => {
        fs.unlink(filePath+fichier, function (err) {
        if (err) console.log("Fichier "+fichier+" erreur supression: "+err);
        if(fichiers.indexOf(fichier) == fichiers.length-1){   // Quand dernier fichier supprimé
          /* Ajout (création) */
          req.body.plannifs.forEach(serv => {
            fs.appendFile(filePath+serv.type+'.txt',serv.name+"\n", function (err) {
              if (err) throw err;
            });
          
          });

        }        
      });
      console.log("Ajout terminé");
    });

    // Ajout de la date dans le fihcier PM.txt de prod si présence de serveur de prod
    if(type_serveur.includes('Production') || type_serveur.includes('Pre-production') || type_serveur.includes('BDD') ){
      fs.readFile(filePathProd+'PM.txt',{encoding: 'utf8'},(err,data) =>{
        if(err){
          console.log("Fichier PM.txt non éxistant, créatio du fichier: ");
          fs.appendFile(filePathProd+'PM.txt',"\n"+ req.body.date_plannif+"\n", function (err) {
            if (err) throw err;
          });
        }
        else{
          let regex = new RegExp("[0-9]+\/[0-9]+\/[0-9]+");
          let formatted = data.replace(regex,req.body.date_plannif);

          fs.unlink(filePathProd+'PM.txt', function(err){
            if (err) throw err;
            fs.appendFile(filePathProd+'PM.txt',formatted, function (err) {
              if (err) throw err;
            });
          });
        }
      }); 
    }

    // Ajout de la date dans le fihcier PM.txt de Recette si présence de serveur de Recette
    if(type_serveur.includes('Recette-Formation') || type_serveur.includes('BDD-Recette') ){
      fs.readFile(filePathRec+'PM.txt',{encoding: 'utf8'},(err,data) =>{
        if(err){
          console.log("Fichier PM.txt non éxistant, créatio du fichier: ");
          fs.appendFile(filePathRec+'PM.txt',"\n"+ req.body.date_plannif+"\n", function (err) {
            if (err) throw err;
          });
        }
        let regex = new RegExp("[0-9]+\/[0-9]+\/[0-9]+");
        let formatted = data.replace(regex,req.body.date_plannif);
        
        fs.unlink(filePathRec+'PM.txt', function(err){
          if (err) throw err;
          fs.appendFile(filePathRec+'PM.txt',formatted, function (err) {
            if (err) throw err;
          });
        });

      }); 
    }
  }

  function exportExclusion(exclusions){
    var filePathProd = config_serv.get('ConfServ.filePathProd');
    var filePathRec = config_serv.get('ConfServ.filePathRec');

    fs.writeFile(filePathProd+'Exclusions.txt', exclusions, function (err) {
      if (err) throw err;
      console.log('Export exclusion Prod fait');
   });

   fs.writeFile(filePathRec+'Exclusions.txt', exclusions, function (err) {
    if (err) throw err;
    console.log('Export exclusion Rec fait');
   });
  }

  function exportDates(datesRec,datesProd,datesExc){
    var filePathProd = config_serv.get('ConfServ.filePathProd');
    var filePathRec = config_serv.get('ConfServ.filePathRec');
    var filePathExc = config_serv.get('ConfServ.filePathExc');

    fs.writeFile(filePathRec+'Planning_Rec.txt', datesRec, function (err) {
      if (err) throw err;
      console.log('Export dates Rec fait');
    });

    fs.writeFile(filePathProd+'Planning_Prod.txt', datesProd, function (err) {
      if (err) throw err;
      console.log('Export dates Prod fait');
    });

    fs.writeFile(filePathExc+'Planning_Exceptionnel.txt', datesExc, function (err) {
      if (err) throw err;
      console.log('Export dates Exceptionnel fait');
    });
  }

  // Planification de l'export des exclusions dans 2 fichiers .TXT
  cron.schedule("0 0 18 * * *",() => {
    db_patch.collection("exclusions").find().toArray((err, documents) => {
      if(err) console.log(err);
      let exclu = "";
      documents.forEach(element => {
        exclu = exclu + element.name+'\n';
      });
      exportExclusion(exclu);
    });

    db_patch.collection("calendriers").find().toArray((err, documents) => {
      if(err) throw err;
      let prod = documents.find(cal => cal.name == "Production");
      let rec = documents.find(cal => cal.name == "Recette");
      let Exc = documents.find(cal => cal.name == "Exceptionnel");
      var dateProd = "";
      var dateRec = "";
      var dateExc = "";
      prod.dates.forEach(elem => {
        dateProd= dateProd + elem.day;
        dateProd= dateProd +'\n';
      });
      rec.dates.forEach(elem => {
        dateRec= dateRec + elem.day;
        dateRec= dateRec +'\n';
      });
      Exc.dates.forEach(elem => {
        dateExc= dateExc + elem.day;
        dateExc= dateExc +'\n';
      });
      exportDates(dateRec,dateProd,dateExc);
      console.log('Export dates calendrier fait');
    });
  });
  
  // Crontab qui vérifie tous les jours à 1:00 si il s'agit d'un jour de patch de prod et met en maintenance des serveurs hébergés
  cron.schedule("0 0 2 * * *",() => {
    db_patch.collection("exclusions").find().toArray((err, documents) => {
      if(err) console.log(err);
      let exclu = [];
      documents.forEach(element => {
        if(element.name.match("h")){
          exclu.push(element.name);
        }
      });
      exclu.forEach(exc => { console.log("Exclu_H: "+exc)});
      db_patch.collection("calendriers").find().toArray((err, documents) => {
        if(err) throw err;
        let prod = documents.find(cal => cal.name == "Production");
        var dateProd = "";
  
        let today = new Date();
        today.setDate(today.getDate())
        let chaineToday = today.getDate().toString()+"/"+(today.getMonth()+1).toString()+"/"+today.getFullYear().toString();
        console.log("MA CHAINE: "+chaineToday);

        prod.dates.forEach(elem => {
          if(chaineToday.includes(elem.day) == true){
            console.log("Jour de patch ! => mise en maintenance des hébergés...");
  
            //Récupération de la liste des serveurs hébergés
            db_patch.collection("serveurs").find({position: { $regex: 'heberge'}, os_quick: 'windows', type: 'Production' }).toArray((err_serv, documents_serv) => {
              if(err_serv) throw err_serv;
              console.log("J'ai trouvé: "+documents_serv.length);
              let heberge_and_exclu = documents_serv.filter(function(serv) { return !exclu.includes(serv.name) });
              let ipTable = [];
              heberge_and_exclu.forEach(el => {
                ipTable.push(el.ip);
                // Aller récupérer la liste des tunnels comportant les ip des serveur hébergés non exclus

              })
              maintenanceWithIp(ipTable,true);
            });
          }
        });
  
      });
    });


  });

  // Crontab qui vérifie tous les jours à 6:00 si il s'agit d'un jour de patch de prod et lève la maintenance des serveurs hébergés
  cron.schedule("0 0 6 * * *",() => {
    db_patch.collection("exclusions").find().toArray((err, documents) => {
      if(err) console.log(err);
      let exclu = [];
      documents.forEach(element => {
        if(element.name.match("h")){
          exclu.push(element.name);
        }
      });
      exclu.forEach(exc => { console.log("Exclu_H: "+exc)});
      db_patch.collection("calendriers").find().toArray((err, documents) => {
        if(err) throw err;
        let prod = documents.find(cal => cal.name == "Production");
        var dateProd = "";
  
        let today = new Date();
        today.setDate(today.getDate())
        let chaineToday = today.getDate().toString()+"/"+(today.getMonth()+1).toString()+"/"+today.getFullYear().toString();
        console.log("MA CHAINE: "+chaineToday);
        let i = 0;
        prod.dates.forEach(elem => {
          if(chaineToday.includes(elem.day) == true ){
            i++;
            console.log("Jour de patch ! => mise en maintenance des hébergés...");
  
            //Récupération de la liste des serveurs hébergés
            db_patch.collection("serveurs").find({position: { $regex: 'heberge'}, os_quick: 'windows', type: 'Production' }).toArray((err_serv, documents_serv) => {
              if(err_serv) throw err_serv;
              console.log("J'ai trouvé: "+documents_serv.length);
              let heberge_and_exclu = documents_serv.filter(function(serv) { return !exclu.includes(serv.name) });
              let ipTable = [];
              heberge_and_exclu.forEach(el => {
                ipTable.push(el.ip);
                // Aller récupérer la liste des tunnels comportant les ip des serveur hébergés non exclus

              })
              leveeMaintenanceWithIp(ipTable,true);
            });
          }
        });
  
      });
    });
  });


  function deleteDataInFile(plannification){

    /* partie fichier (asynchrone) */
    var fichiers = [];
    var type_serveur = [];
    var filePath = config_serv.get('ConfServ.filePath');
    var filePathProd = config_serv.get('ConfServ.filePathProd');
    var filePathRec = config_serv.get('ConfServ.filePathRec');
 
    plannification.plannifs.forEach(serv => {
      if(!fichiers.includes(serv.type+'.txt')){
        fichiers.push(serv.type+'.txt');
      }
      if(!type_serveur.includes(serv.type)){
        type_serveur.push(serv.type);
      }
    });
 
    /* Supression */
    fichiers.forEach(fichier => {
        fs.unlink(filePath+fichier, function (err) {
        if (err) console.log("Fichier "+fichier+" déjà non éxistant");
        if(fichiers.indexOf(fichier) == fichiers.length-1){   // Quand dernier fichier supprimé
          /* Ajout (création) */
          plannification.plannifs.forEach(serv => {
            fs.appendFile(filePath+serv.type+'.txt',"", function (err) {
              if (err) throw err;
            });
           
          });
 
        }        
      });
      console.log("Supression terminé");
    });
 
    // Ajout de la date dans le fihcier PM.txt de prod si présence de serveur de prod
    if(type_serveur.includes('Production') || type_serveur.includes('Pre-production') || type_serveur.includes('BDD') ){
      fs.readFile(filePathProd+'PM.txt',{encoding: 'utf8'},(err,data) =>{
        if(err){
          console.log("Fichier PM.txt déjà non éxistant");

        }
 
        let regex = new RegExp("[0-9]+\/[0-9]+\/[0-9]+");
        
      
        let formatted = data.replace(regex,"01/01/1970");
         
        fs.unlink(filePathProd+'PM.txt', function(err){
          if (err) throw err;
          fs.appendFile(filePathProd+'PM.txt',formatted, function (err) {
            if (err) throw err;
          });
        });
 
      }); 
    }
 
    // Ajout de la date dans le fihcier PM.txt de Recette si présence de serveur de Recette
    if(type_serveur.includes('Recette-Formation') || type_serveur.includes('BDD-Recette') ){
      fs.readFile(filePathRec+'PM.txt',{encoding: 'utf8'},(err,data) =>{
        if(err){
          console.log("Fichier PM.txt déjà non éxistant");

        }
        let regex = new RegExp("[0-9]+\/[0-9]+\/[0-9]+");
        let formatted = data.replace(regex,"01/01/1970");
         
        fs.unlink(filePathRec+'PM.txt', function(err){
          if (err) throw err;
          fs.appendFile(filePathRec+'PM.txt',formatted, function (err) {
            if (err) throw err;
          });
        });
 
      }); 
    }
  }


  /* Liste des serveurs */
  app.get("/servNode/serveurs/:OSSelected", (req,res) => {
    
    console.log("/serveurs/"+req.params.OSSelected);
    try {
      if(req.session.sso && req.session.sso.user.groups.includes(GG_Lecture)){
        let pos = req.params.OSSelected.split("_")[0];
        let os = req.params.OSSelected.split("_")[1];
        if(req.params.OSSelected == "All"){
          db_patch.collection("serveurs").find().toArray((err, documents) => {
            res.end(JSON.stringify(documents));
          });
        }
        else if (pos == "Alco"){
          if(os == "All"){
            db_patch.collection("serveurs").find().toArray((err, documents) => {
              res.end(JSON.stringify(documents));
            });
          }
          else{
            db_patch.collection("serveurs").find({ position: { $regex: "alco"} , os_quick: os.toLowerCase()}).toArray((err, documents) => {
              res.end(JSON.stringify(documents));
            });
          }

        }
        else if (pos == "College"){
          if(os == "All"){
            db_patch.collection("serveurs_mic").find().toArray((err, documents) => {
              res.end(JSON.stringify(documents));
            });
          }
          else{
            db_patch.collection("serveurs_mic").find({ position: { $regex: "mic"} , os_quick: os.toLowerCase()}).toArray((err, documents) => {
              res.end(JSON.stringify(documents));
            });
          }
        }
        else if (pos == "Heberge"){
          if(os == "All"){
            db_patch.collection("serveurs").find().toArray((err, documents) => {
              res.end(JSON.stringify(documents));
            });
          }
          else{
            db_patch.collection("serveurs").find({ position: { $regex: "heberge"} , os_quick: os.toLowerCase()}).toArray((err, documents) => {
              res.end(JSON.stringify(documents));
            });
          }
        }
        else{
          res.end(JSON.stringify([]));
        }

      //logActionUser("va dans liste des serveurs",req.session.sso.user.name,req.ip);
      }
      

    } catch (error) {
      console.log("Erreur sur le /serveurs: " + error);
      res.end(JSON.stringify([]));
    }
  });

  /* Recupération config serveur */
  app.get("/servNode/config_serveur", (req,res) => {
    console.log("/config_serveur");
    try {
      if(req.session.sso.user.groups.includes(GG_Admin)){
        db_patch.collection("serveur_config").findOne(function(err,item){
          if (err) throw err;
          res.end(JSON.stringify(item));
        });
      }

    } catch (error) {
      console.log("Erreur sur le /config_serveur utilisateur non admin: " + error);
      res.end(JSON.stringify([]));
    }
  });

  /* Recupération horaire maj de la config serveur */
  app.get("/servNode/config_serveur_horaire_maj", (req,res) => {
    console.log("/config_serveur_horaire_maj");
    try {
      if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
        db_patch.collection("serveur_config").findOne(function(err,item){
          if (err) throw err;
          res.end(JSON.stringify(item.horaireMaj));
        });
      }

    } catch (error) {
      console.log("Erreur sur le /config_serveur utilisateur non admin: " + error);
      res.end(JSON.stringify([]));
    }
  });


  /* Modification config serveur */
  app.put("/servNode/config_serveur_ajout", (req,res) => {
    console.log("/config_serveur_ajout");
    try {
      if(req.session.sso.user.groups.includes(GG_Admin)){
        db_patch.collection("serveur_config").findOneAndDelete({}, () => {
          db_patch.collection("serveur_config").insertOne(req.body, () => {
            task_serv.stop();

            tab_h = req.body.horaireMaj.split(":");
            time = '0 '+tab_h[1]+' '+tab_h[0]+' * * *';
            task_serv = plannifMaj(time);
            task_serv.start();
            res.end(JSON.stringify(["modification faite" ]));
          });
        });
        
        logActionUser("Modification de la config serveur",req.session.sso.user.name,req.ip);
      }
      

    } catch (error) {
      console.log("Erreur sur le /config_serveur_ajout utilisateur non admin: " + error);
      res.end(JSON.stringify(["modification erreur: "+error]));
    }
  });



  /* récupération de l'user_profil */
  app.get("/servNode/users_profil", (req,res) => {
    console.log("/users_profil");
    try {
      if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
        db_patch.collection("users_profil").find({login: req.session.sso.user.name}).toArray((err, documents) => {
          res.end(JSON.stringify(documents[0]));
        });
      }

    } catch (error) {
      console.log("Erreur sur le /users_profil: " + error);
      res.end(JSON.stringify([]));
    }
  });

  /* récupération de tous les user_profil */
  app.get("/servNode/users_profil_all", (req,res) => {
    console.log("/users_profil_all");
    try {
      if(req.session.sso.user.groups.includes(GG_Admin)){
        db_patch.collection("users_profil").find().toArray((err, documents) => {
          res.end(JSON.stringify(documents));
        });
      }

    } catch (error) {
      console.log("Erreur sur le /users_profil utilisateur non admin: " + error);
      res.end(JSON.stringify([]));
    }
  });

  /* Modification de l'user_profil */
  app.put("/servNode/users_profil_ajout", (req,res) => {
    console.log("/users_profil_ajout");
    try {
      if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
        db_patch.collection("users_profil").updateOne({login: req.session.sso.user.name}, {$set: {alertMail: req.body.alertMail, serveursAlerte: req.body.serveursAlerte, serveursBon: req.body.serveursBon, theme: req.body.theme}}, () => {
          res.end(JSON.stringify(["modification faite" ]));
        });
        logActionUser("Modification du profil",req.session.sso.user.name,req.ip);
      }
      

    } catch (error) {
      console.log("Erreur sur le /users_profil_ajout: " + error);
      res.end(JSON.stringify(["modification erreur: "+error]));
    }
  });

  


  /* Liste des historiques */
  app.get("/servNode/historiques/:OSSelected", (req,res) => {
    console.log("/historiques/"+req.params.OSSelected);
    try {
      if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
        let pos = req.params.OSSelected.split("_")[0]
        let os = req.params.OSSelected.split("_")[1]
        if(req.params.OSSelected == "All"){
          db_patch.collection("historique_serveur").find().toArray((err, documents) => {
            res.end(JSON.stringify(documents));
          });
        }
        else if( pos == "College"){
          if( os == "All"){
            db_patch.collection("historique_serveur_mic").find().toArray((err, documents) => {
              res.end(JSON.stringify(documents));
            });
          }
          else{
            db_patch.collection("historique_serveur_mic").find().toArray((err, documents) => {
              documents.forEach(histo => {
                histo.serveurs = histo.serveurs.filter(function(serv) { return serv.position.includes("mic") && serv.os_quick.includes(os.toLowerCase())});
              });
             
              res.end(JSON.stringify(documents));
            });
          }
        }
        else{
          db_patch.collection("historique_serveur").find().toArray((err, documents) => {
            documents.forEach(histo => {
              histo.serveurs = histo.serveurs.filter(function(serv) { return serv.position.includes(pos.toLowerCase()) && serv.os_quick.includes(os.toLowerCase())});
            });
           
            res.end(JSON.stringify(documents));
          });
        }
      }  
    } catch (error) {
      console.log("Erreur sur le /historiques: " + error);
      res.end(JSON.stringify([]));
    }
  });


  /* Generation d'un rapport à partir de l'historique */
  app.put("/servNode/historiques_rapport/:env/:mail/:bdd/:maj_av/:maj_ap", (req,res) => {
    console.log("/historiques_rapport/"+req.params.env);
    let env = req.params.env;
    let bdd = req.params.bdd;
    let majAv = req.params.maj_av;
    let majAp = req.params.maj_ap;
    let majCalc = majAv - majAp;

    try {
      if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
        let HTML_text = "<p>Avant le patch management nous avions "+majAv+" MàJ en attentes, après nous en avons "+majAp+".Soit "+majCalc+" MàJ appliquées</p>";
        let images = [];

        var pie = req.body.pie.replace(/^data:image\/png;base64,/, "");
        fs.writeFileSync(__dirname +'\\temp\\pie.png',pie,'base64');
        images.push({
          filename: 'pie.png',
          path: __dirname +'\\temp\\pie.png',
          cid: 'pie' 
        });

        if(env == "Prod"){
          var areaProd = req.body.areaProd.replace(/^data:image\/png;base64,/, "");
          var areaPre = req.body.areaPre.replace(/^data:image\/png;base64,/, "");

          var barProd = req.body.barProd.replace(/^data:image\/png;base64,/, "");
          var barPre = req.body.barPre.replace(/^data:image\/png;base64,/, "");

          fs.writeFileSync(__dirname +'\\temp\\areaProd.png',areaProd,'base64');
          fs.writeFileSync(__dirname +'\\temp\\areaPre.png',areaPre,'base64');

          fs.writeFileSync(__dirname +'\\temp\\barProd.png',barProd,'base64');
          fs.writeFileSync(__dirname +'\\temp\\barPre.png',barPre,'base64');

          images.push({
            filename: 'areaProd.png',
            path: __dirname +'\\temp\\areaProd.png',
            cid: 'areaProd' 
          });
          images.push({
            filename: 'areaPre.png',
            path: __dirname +'\\temp\\areaPre.png',
            cid: 'areaPre' 
          });
          images.push({
            filename: 'barProd.png',
            path: __dirname +'\\temp\\barProd.png',
            cid: 'barProd' 
          });
          images.push({
            filename: 'barPre.png',
            path: __dirname +'\\temp\\barPre.png',
            cid: 'barPre' 
          });

          HTML_text += "<h3>Graphique Production Applicatif:</h3>";
          HTML_text += "<img src='cid:areaProd'><img src='cid:barProd'>";
          HTML_text += "<h3>Graphique Pre-Production Applicatif:</h3>";
          HTML_text += "<img src='cid:areaPre'><img src='cid:barPre'>";

          if(bdd == "true"){
            var areaBdd = req.body.areaBdd.replace(/^data:image\/png;base64,/, "");
            var areaProdBdd = req.body.areaProdBdd.replace(/^data:image\/png;base64,/, "");

            var barBdd = req.body.barBdd.replace(/^data:image\/png;base64,/, "");
            var barProdBdd = req.body.barProdBdd.replace(/^data:image\/png;base64,/, "");

            fs.writeFileSync(__dirname +'\\temp\\areaBdd.png',areaBdd,'base64');
            fs.writeFileSync(__dirname +'\\temp\\areaProdBdd.png',areaProdBdd,'base64');

            fs.writeFileSync(__dirname +'\\temp\\barBdd.png',barBdd,'base64');
            fs.writeFileSync(__dirname +'\\temp\\barProdBdd.png',barProdBdd,'base64');

            images.push({
              filename: 'areaBdd.png',
              path: __dirname +'\\temp\\areaBdd.png',
              cid: 'areaBdd' 
            });
            images.push({
              filename: 'areaProdBdd.png',
              path: __dirname +'\\temp\\areaProdBdd.png',
              cid: 'areaProdBdd' 
            });
            images.push({
              filename: 'barBdd.png',
              path: __dirname +'\\temp\\barBdd.png',
              cid: 'barBdd' 
            });
            images.push({
              filename: 'barProdBdd.png',
              path: __dirname +'\\temp\\barProdBdd.png',
              cid: 'barProdBdd' 
            });

            HTML_text += "<h3>Graphique Production BDD:</h3>";
            HTML_text += "<img src='cid:areaBdd'><img src='cid:barBdd'>";

            HTML_text += "<h3>Synthèse des serveurs Production (pre) Applicatif + BDD:</h3>";
            HTML_text += "<img src='cid:areaProdBdd'><img src='cid:barProdBdd'>";
          }

        }
        else if (env == 'Rec'){
          var areaRec = req.body.areaRec.replace(/^data:image\/png;base64,/, "");

          var barRec = req.body.barRec.replace(/^data:image\/png;base64,/, "");


          fs.writeFileSync(__dirname +'\\temp\\areaRec.png',areaRec,'base64');

          fs.writeFileSync(__dirname +'\\temp\\barRec.png',barRec,'base64');


          images.push({
            filename: 'areaRec.png',
            path: __dirname +'\\temp\\areaRec.png',
            cid: 'areaRec' 
          });
          images.push({
            filename: 'barRec.png',
            path: __dirname +'\\temp\\barRec.png',
            cid: 'barRec' 
          });

          HTML_text += "<h3>Graphique Recette-Formation Applicatif:</h3>";
          HTML_text += "<img src='cid:areaRec'><img src='cid:barRec'>";


          if(bdd == "true"){
            var areaBddRec = req.body.areaBddRec.replace(/^data:image\/png;base64,/, "");
            var areaRecBddRec = req.body.areaRecBddRec.replace(/^data:image\/png;base64,/, "");

            var barBddRec = req.body.barBddRec.replace(/^data:image\/png;base64,/, "");
            var barRecBddRec = req.body.barRecBddRec.replace(/^data:image\/png;base64,/, "");

            fs.writeFileSync(__dirname +'\\temp\\areaBddRec.png',areaBddRec,'base64');
            fs.writeFileSync(__dirname +'\\temp\\areaRecBddRec.png',areaRecBddRec,'base64');

            fs.writeFileSync(__dirname +'\\temp\\barBddRec.png',barBddRec,'base64');
            fs.writeFileSync(__dirname +'\\temp\\barRecBddRec.png',barRecBddRec,'base64');

            images.push({
              filename: 'areaBddRec.png',
              path: __dirname +'\\temp\\areaBddRec.png',
              cid: 'areaBddRec' 
            });
            images.push({
              filename: 'areaRecBddRec.png',
              path: __dirname +'\\temp\\areaRecBddRec.png',
              cid: 'areaRecBddRec' 
            });
            images.push({
              filename: 'barBddRec.png',
              path: __dirname +'\\temp\\barBddRec.png',
              cid: 'barBddRec' 
            });
            images.push({
              filename: 'barRecBddRec.png',
              path: __dirname +'\\temp\\barRecBddRec.png',
              cid: 'barRecBddRec' 
            });

            HTML_text += "<h3>Graphique Reccette-Formation BDD:</h3>";
            HTML_text += "<img src='cid:areaBddRec'><img src='cid:barBddRec'>";

            HTML_text += "<h3>Synthèse des serveurs Recette Applicatif + BDD:</h3>";
            HTML_text += "<img src='cid:areaRecBddRec'><img src='cid:barRecBddRec'>";
            HTML_text += "<h3>Commentaire:</h3>";
            HTML_text += "<p>Compléter ...</p>";
          }
        }

        HTML_text += "<h3>Synthèse des serveurs Alco :</h3>";
        HTML_text += "<img style='width:50%;heigth: auto' src='cid:pie'>";
        
        sendMailNotif(req.params.mail,"Rapport PatchManagement",HTML_text,images);
        logActionUser("Generation d'un rapport",req.session.sso.user.name,req.ip);
        res.end(JSON.stringify(["Rapport envoyé par mail"]));
      }
      

  } catch (error) {
      console.log("Erreur sur le /historiques_rapport: " + error);
      res.end(error);
    }
  });
  


  /* Plannification Exceptionnel Ajout*/
  app.put("/servNode/plannificationExceptionnel_add", (req,res) => {
    console.log("Nouvelle Plannif Exceptionnel_add: "+JSON.stringify(req.body.user));
    if(req.session.sso.user.groups.includes(GG_Admin)){
      let good = true;
      let auj = new Date();
      auj.setHours(0,0,0,0);
      let tab_date_split = req.body.date_plannif.split("/");
      let date = new Date(tab_date_split[2]+"/"+tab_date_split[1]+"/"+tab_date_split[0]+" 21:00:00");

      /* vérification qu'une plannification futur n'éxiste pas déjà*/
      db_patch.collection("plannifications_exceptionnel").find().forEach(function(doc){
        let tab_date_split = doc.date_plannif.split("/");
        let date = new Date(tab_date_split[2]+"/"+tab_date_split[1]+"/"+tab_date_split[0]+" 21:00:00");

        // if(date >= auj){
        //   console.log("Erreur plannification exceptionnel déjà existante");
        //   good = false;
        //   res.end(JSON.stringify(["Plannification Exceptionnel déjà éxistante"]));
          
        // }
      }).then(() => {
        
        /* Vérification que la date soit bien aujourd'hui ou futur */
        if( date.getTime() < auj.getTime()){
          console.log("Erreur date passé séléctionné");
          good = false;
          res.end(JSON.stringify(["Date séléctionner antérieur à aujourdd'hui"]));
        } 

        if(good == true){
          /* partie fichier (asynchrone) */
          ajoutDataInFile(req,res);

          /* partie journalisation dans la BDD */
          db_patch.collection("plannifications_exceptionnel").insertOne(req.body, function(error, response){
            if(error){
              console.log("Erreur lors de l'ajout de plannification Exceptionnel");
            } else {
              res.end(JSON.stringify([response.insertedId]));
            }
          });

          
          
          logActionUser("Creation d'une plannification exceptionnel",req.session.sso.user.name,req.ip);
        }

      });
      




    }
    else{
      console.log("plannif exceptionnel: Erreur non connecté");
      res.end(JSON.stringify(["Erreur non connecté"]));
    }
  });

  /* Récupération des plannifications Exceptionnels */
  app.get("/servNode/plannificationExceptionnel", (req,res) => {
    console.log("/plannificationExceptionnel");
    try {
      if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
        db_patch.collection("plannifications_exceptionnel").find().toArray((err, documents) => {
          res.end(JSON.stringify(documents));
        });
      }

    } catch (error) {
      console.log("Erreur sur le /plannifications_exceptionnel " + error);
      res.end(JSON.stringify([]));
    }
  });

    /* Récupération d'une plannification Exceptionnel */
    app.get("/servNode/plannificationExceptionnelByid/:id", (req,res) => {
      console.log("/plannificationExceptionnelByid");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
          db_patch.collection("plannifications_exceptionnel").findOne({"_id": ObjectID(req.params.id.toString())},(error,result)=>{
            if(err) throw error;
            res.end(JSON.stringify(result));
          });
        }
      } catch (error) {
        console.log("Erreur sur le /plannifications_exceptionnelByid " + error);
        res.end(JSON.stringify([]));
      }
    });

  /* Supression d'une plannification Exceptionnel */
  app.delete("/servNode/deletePlannificationExceptionnel/:id", (req,res) => {
    console.log("/servNode/deletePlannificationExceptionnel");
    try {
      if(req.session.sso.user.groups.includes(GG_Admin)){
        db_patch.collection("plannifications_exceptionnel").findOne({"_id": ObjectID(req.params.id.toString())},(error,result)=>{
          if(err) throw error
          deleteDataInFile(result);
          db_patch.collection("plannifications_exceptionnel").deleteOne({"_id": ObjectID(req.params.id.toString())},(error,result)=>{
            if(err) throw error
            res.end(JSON.stringify(["Supression faite"]));
          })
        })

      }
    } catch (error) {
      console.log("Erreur sur le /deletePlannificationExceptionnel utilisateur non admin: "+error);
      res.end(JSON.stringify([error]));
    }
  });

   /* Modification  d'une plannification Exceptionnel */
   app.put("/servNode/PlannificationExceptionnel_modify/:id", (req,res) => {
    console.log("/servNode/deletePlannificationExceptionnel_modify");
    try {
      if(req.session.sso.user.groups.includes(GG_Admin)){

        /* partie fichier (asynchrone) */
        ajoutDataInFile(req,res);

        /* partie BDD */
        db_patch.collection("plannifications_exceptionnel").updateOne({"_id": ObjectID(req.params.id.toString())},{$set: {date_plannif: req.body.date_plannif,user: req.body.user,horaire_debut: req.body.horaire_debut,horaire_fin: req.body.horaire_fin, plannifs: req.body.plannifs}},(error,result)=>{
          if(err) throw error
          res.end(JSON.stringify(["Modification faite"]));
        })
      }
    } catch (error) {
      console.log("Erreur sur le /deletePlannificationExceptionnel_modify utilisateur non admin: "+error);
      res.end(JSON.stringify([error]));
    }
  });

    /* Exclusions Ajout*/
    app.put("/servNode/exclusions_add/:urlKey", (req,res) => {
      console.log("Nouveau serveur Exclusions_add");
      if(req.session.sso.user.groups.includes(GG_Admin) || (req.params.urlKey == '$KzGxqD&hAEtB32')){
        
        /* partie journalisation dans la BDD */
        let liste_nom_serv= "<ul>"; 
        req.body.forEach(serv => {
          db_patch.collection("exclusions").find({name: serv.name}).toArray((error,result) => {
            if (error) throw error
            if(result.length > 0){
              res.end(JSON.stringify(["Erreur: ajout d'un doublon" ]));
            }
            else{
              db_patch.collection("exclusions").insertOne(serv);
              liste_nom_serv = liste_nom_serv +'<li>'+serv.name +'</li>';
            }
          });
  
        })
        liste_nom_serv = liste_nom_serv +'</ul>';
        res.end(JSON.stringify(["Ajout OK" ]));
        logActionUser("Ajout de serveurs en exclusions",req.session.sso.user.name,req.ip);
        
        // Envoie de mail aux personnes admins qui l'ont cochés dans leurs préférences
        db_patch.collection('users_profil').find({type: "Admin",alertMail: true}).toArray((err,documents)=> {
          let liste_mails = "";
          documents.forEach(user =>{
            if(user.mail != undefined){
              liste_mails = liste_mails + user.mail+',';
            }
          });
          sendMailNotif(liste_mails,"PatchManagment: Ajout de serveurs dans les exceptions","<h1>Attention "+req.session.sso.user.name+" a ajouté les serveurs suivants de la liste d'exclusion:</h1>"+liste_nom_serv,[]);
        });
      }
      else{
        console.log("exclusions: Erreur non connecté");
        res.end(JSON.stringify(["Erreur non connecté"]));
      }
    });
  
    /* Récupération des Exclusions */
    app.get("/servNode/exclusions", (req,res) => {
      console.log("/exclusions");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
          db_patch.collection("exclusions").find().toArray((err, documents) => {
            res.end(JSON.stringify(documents));
          });
        }
  
      } catch (error) {
        console.log("Erreur sur le /exclusions " + error);
        res.end(JSON.stringify([]));
      }
    });

    /* Récupération des Calendriers */
    app.get("/servNode/getCalendriers", (req,res) => {
      console.log("/calendriers");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
          db_patch.collection("calendriers").find().toArray((err, documents) => {
            res.end(JSON.stringify(documents));
          });
        }
  
      } catch (error) {
        console.log("Erreur sur le /calendriers " + error);
        res.end(JSON.stringify([]));
      }
    });

    /* Récupération d'un Calendrier */
    app.get("/servNode/getCalendrier/:id", (req,res) => {
      console.log("/get1calendrier");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
          db_patch.collection("calendriers").findOne({"_id": ObjectID(req.params.id.toString())}, (err,result) => {
            res.end(JSON.stringify(result));
          })
            
        }
  
      } catch (error) {
        console.log("Erreur sur le /get1calendriers " + error);
        res.end(JSON.stringify([]));
      }
    });

    /* Ajout de calendrier */
    app.put("/servNode/putCalendriers/", (req,res) => {
      console.log("/putCalendriers");
      try {
        if(req.session.sso.user.groups.includes(GG_Admin)){
          db_patch.collection("calendriers").insertOne( req.body , () => {
            res.end(JSON.stringify(["Ajout fait" ]));
          });
          logActionUser("Ajout d'un nouveau calendrier",req.session.sso.user.name,req.ip);
        }
        

      } catch (error) {
        console.log("Erreur sur le /putCalendrier: " + error);
        res.end(JSON.stringify(["Ajout erreur: "+error]));
      }
    });

    /* Ajout de calendrier */
    app.put("/servNode/updateCalendriers/:id", (req,res) => {
      console.log("/updateCalendriers");
      try {
        if(req.session.sso.user.groups.includes(GG_Admin)){

          db_patch.collection("calendriers").updateMany( {"_id": ObjectID(req.params.id.toString())} ,{$set:{ 'dates.$[].color': {primary: req.body.primaire, secondary: req.body.secondaire}  ,couleurs: req.body}}, () => {
            res.end(JSON.stringify(["OK" ]));
          });

          logActionUser("Modification couleur calendrier",req.session.sso.user.name,req.ip);
        }
        

      } catch (error) {
        console.log("Erreur sur le /updateCalendrier: " + error);
        res.end(JSON.stringify(["update erreur: "+error]));
      }
    });

    /* Supression d'un calendrier */
    app.delete("/servNode/deleteCalendriers/:id", (req,res) => {
      console.log("/servNode/deleteCalendriers");
      try {
        if(req.session.sso.user.groups.includes(GG_Admin)){

          db_patch.collection("calendriers").deleteOne({"_id": ObjectID(req.params.id.toString())},(error,result)=>{
            if(error) throw error
          
            res.end(JSON.stringify(["Supression faite"]));
          })
        }
      } catch (error) {
        console.log("Erreur sur le /deleteCalendriers utilisateur non admin: "+error);
        res.end(JSON.stringify([error]));
      }
    });
  
    /* Ajout de date dans calendrier */
    app.put("/servNode/putDate/:id", (req,res) => {
      console.log("/putDate");
      try {
        if(req.session.sso.user.groups.includes(GG_Admin)){
          let date = new Date(req.body.start);
          req.body.day = date.getDate()+'/'+(date.getMonth()+1) +'/'+date.getUTCFullYear();

          db_patch.collection("calendriers").updateOne({"_id": ObjectID(req.params.id.toString())},{$push:{dates: req.body}}, () => {
            res.end(JSON.stringify(["Ajout fait" ]));
          });
          logActionUser("Ajout d'une nouvelle date dans "+req.params.nameCalendar,req.session.sso.user.name,req.ip);
        }
        

      } catch (error) {
        console.log("Erreur sur le /putDate: " + error);
        res.end(JSON.stringify(["Ajout erreur: "+error]));
      }
    });
    
    /* Supression d'un serveur en exclusions */
    app.delete("/servNode/exclusions_delete/:id/:user/:urlKey", (req,res) => {
      console.log("/servNode/exclusions_delete");
      try {
        if(req.session.sso.user.groups.includes(GG_Admin) || (req.params.urlKey == '$KzGxqD&hAEtB32')){
          let nom_serv_delete;
          let description_serv_delete = "";
          db_patch.collection("exclusions").findOneAndDelete({"_id": ObjectID(req.params.id.toString())},(error,result)=>{
            if(error) throw error
            nom_serv_delete = result.value.name;
            description_serv_delete = result.value.description;
            res.end(JSON.stringify(["Supression faite"]));
            // Envoie de mail aux personnes admins qui l'ont cochés dans leurs préférences
            db_patch.collection('users_profil').find({type: "Admin",alertMail: true}).toArray((err,documents)=> {
              let liste_mails = "";
              documents.forEach(user =>{
                if(user.mail != undefined){
                  liste_mails = liste_mails + user.mail+',';
                }
              });
              sendMailNotif(liste_mails,"PatchManagment: Supression d'un serveur dans les exceptions","<h1>Attention "+req.params.user+" a supprimé le serveur "+nom_serv_delete+"("+description_serv_delete+") de la liste d'exclusion </h1>",[]);
            });
          })
        }
      } catch (error) {
        console.log("Erreur sur le /deleteExclusions utilisateur non admin: "+error);
        res.end(JSON.stringify([error]));
      }
    });

    /* Commenter une exclusion */
    app.put("/servNode/exclusions_comment/:id/:urlKey", (req,res) => {
      console.log("/servNode/exclusions_comment");
      try {
        if(req.session.sso.user.groups.includes(GG_Admin) || (req.params.urlKey == '$KzGxqD&hAEtB32')){
          db_patch.collection("exclusions").updateOne({"_id": ObjectID(req.params.id.toString())},{$set: {comment: req.body.commentaire}},(error,result)=>{
            if(error) throw error
            
            res.end(JSON.stringify(["Comment fait"]));
          })
        }
      } catch (error) {
        console.log("Erreur sur le /commentExclusions utilisateur non admin: "+error);
        res.end(JSON.stringify([error]));
      }
    });

    /* Récupération des Tasks */
    app.get("/servNode/getTasks/:date", (req,res) => {
      console.log("/Tasks");
      console.log(req.params.date);
      let date = new Date(req.params.date);

      var month = date.getMonth() + 1;
      if(month <= 9) month = '0'+month;

      var jour= date.getDate();
      if(jour <= 9) jour = '0'+jour;

      let day = jour+'/'+month+'/'+date.getUTCFullYear();
      let yesterday = new Date(date);
      yesterday.setDate(yesterday.getDate()-1);

      let month2 = yesterday.getMonth() + 1;
      if(month2 <= 9) month2 = '0'+month2;

      let jour2= yesterday.getDate();
      if(jour2 <= 9) jour2 = '0'+jour2;

      yesterday_string = jour2+'/'+month2+'/'+yesterday.getUTCFullYear();

      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
          db_patch.collection("Tasks").find({"jour": {$in: [day,yesterday_string]}}).toArray((err, documents) => {
            res.end(JSON.stringify(documents));
          });
        }
  
      } catch (error) {
        console.log("Erreur sur le /tasks " + error);
        res.end(JSON.stringify([error]));
      }
    });

    /* Supression d'une date dans calendrier */
    app.delete("/servNode/deleteDate/:start", (req,res) => {
      console.log("/servNode/créneauDelete");
      try {
        if(req.session.sso.user.groups.includes(GG_Admin)){
          let test = new Date(req.params.start).toISOString();
          db_patch.collection("calendriers").updateOne({'dates.start': test},{$pull : {'dates': {'start': test}}},(error,result)=>{
            if(error) throw error
            res.end(JSON.stringify(["Supression faite"]));
            logActionUser("Supression date calendrier",req.session.sso.user.name,req.ip);
          })
        }
      } catch (error) {
        console.log("Erreur sur le /deleteDate utilisateur non admin: "+error);
        res.end(JSON.stringify([error]));
      }
      
    });

    /* Supression d'une date dans calendrier à partir de son id */
    app.delete("/servNode/deleteDateById/:id", (req,res) => {
      console.log("/servNode/créneauDeleteById");
      try {
        if(req.session.sso.user.groups.includes(GG_Admin)){
          db_patch.collection("calendriers").updateOne({'dates.id': req.params.id},{$pull : {'dates': {'id': req.params.id}}},(error,result)=>{
            if(error) throw error
            res.end(JSON.stringify(["Supression faite"]));
            logActionUser("Supression date calendrier",req.session.sso.user.name,req.ip);
          })
        }
      } catch (error) {
        console.log("Erreur sur le /deleteDateById utilisateur non admin: "+error);
        res.end(JSON.stringify([error]));
      }
      
    });
        
    
    /* Execution de la maj serveur */
    app.get("/servNode/updateServ", (req,res) => {
      console.log("/updateServ");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Admin)){
          majServ();
          res.end(JSON.stringify(["Mise à jour lançé"]));
        }

      } catch (error) {
        console.log("Erreur sur le /updateServ" + error);
        res.end(JSON.stringify([]));
      }
    });

    /* Lecture des serverFixed */
    app.get("/servNode/FixedServer", (req,res) => {
      console.log("/FixedServer");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Lecture)){
          db_patch.collection("serveurs_fixed_env").find().toArray((err, documents) => {
            res.end(JSON.stringify(documents));
          });
        }

      } catch (error) {
        console.log("Erreur sur le /FixedServer" + error);
        res.end(JSON.stringify([]));
      }
    });

    /* Ajout/Modif d'un environnement fixé */
    app.put("/servNode/addFixedServer", (req,res) => {
      console.log("/addFixedServer");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Admin)){
          db_patch.collection("serveurs_fixed_env").updateOne({"name": req.body.name},{$set: {environnement: req.body.type}},{upsert: true},() => {
            applyFixedServer();
            res.end(JSON.stringify(["Ajout/Mofif fait" ]));
            logActionUser("Ajout d'un nouvel environnement fixé",req.session.sso.user.name,req.ip);
          });          
        }

      } catch (error) {
        console.log("Erreur sur le /addFixedServer" + error);
        res.end(JSON.stringify([]));
      }
    });

    


    
    /* Recupération des tunnels Waf */
    app.get("/servNode/waaf/tunnels/:heberge", (req,res) => {
      console.log("/waaf/tunnels");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Admin)){
          
          const req_get = {
            url: wafUrl+"wafapi/tunnels",
            json: true,
          };

          if(req.params.heberge == "true"){
            req_get.url = wafHebergeUrl+"wafapi/tunnels"
          }

          
      
          // tunnels?uid=q89232668768f29666dd44f0c5dd532e'
          //const json_test = '{"workflowParameters": [ {"name": "securityexception", "value": "securityExceptionConfigurationDefault"}, { "name": "maintenance.enable", "value": "false" }] }';
          //req_test_post.body = JSON.parse(json_test)
          request.get(req_get, (err, result, body) => {
             if (err) {
                 res.end(JSON.stringify(err));
                 return console.log(err);
             }
             console.log(`Status: ${res.statusCode}`);
             res.end(JSON.stringify(body));
           });
        }

      } catch (error) {
        console.log("Erreur sur le /waaf/tunnels" + error);
        res.end(JSON.stringify(["erreur: "+error]));
      }
    });

     /* Recupération des workflow d'un tunnel Waf */
    app.get("/servNode/waaf/workflow/:tunnel", (req,res) => {
      console.log("/waaf/workflow");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Admin)){

          const req_get = {
            url: wafUrl+"wafapi/tunnels?uid="+req.params.tunnel,
            json: true,
           
          };
          //const json_test = '{"workflowParameters": [ {"name": "securityexception", "value": "securityExceptionConfigurationDefault"}, { "name": "maintenance.enable", "value": "false" }] }';
          //req_test_post.body = JSON.parse(json_test)
          request.get(req_get, (err, result, body) => {
             if (err) {
                 res.end(JSON.stringify(err));
                 return console.log(err);
             }
             console.log(`Status: ${res.statusCode}`);
             res.end(JSON.stringify(body));
           });
        }

      } catch (error) {
        console.log("Erreur sur le /waaf/workflow" + error);
        res.end(JSON.stringify(["erreur: "+error]));
      }
    });

    /* Mise en maintenance d'un tunnel  */
    app.get("/servNode/waaf/maintenance/:urlTunnel/:idTunnel/:heberge", (req,res) => {
      console.log("/waaf/maintenance");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Admin)){
          let idTunnel = req.params.idTunnel
          let bool = true
          let waf = wafUrl
          let maintenance;
          if(req.params.heberge == "true"){
            waf = wafHebergeUrl;
          }

          const req_get = {
            url: waf+"wafapi/tunnels?uid="+idTunnel,
            json: true,
           
          };

          request.get(req_get, (err, result, body) => {
             if (err) {
                 res.end(JSON.stringify(err));
                 return console.log(err);
             }
             console.log(`Status: ${result.statusCode}`);
             console.log("JSON: "+idTunnel);
             maintenance = JSON.parse(JSON.stringify(body));
             maintenance.data[0].workflowParameters.forEach(parameter => {
              if(parameter.name == "maintenance.enable"){
                parameter.value = "true";
              }
            });

            let req_put = {
              url: waf+"wafapi/tunnels?uid="+idTunnel,
              json: true,
              body: maintenance.data[0]
            };
  
            request.put(req_put, (err2, result2, body2) =>{
              if(err2){
                res.end(JSON.stringify(err2));
                return console.log(err2);
              }
              console.log(`Status: ${result2.statusCode}`);
              console.log("res patch:" +JSON.stringify(body2));
        
              let req_apply = {
                url: waf+"wafapi/apply",
                json: true,
              };
  
  
              // requête apply
              req_apply.body = JSON.parse('{ "tunnels": [{ "uid": "'+idTunnel+'"}]}');
        
              request.post(req_apply,(err3,result3, body3) => {
                if(err3){
                  res.end(JSON.stringify(err3));
                  return console.log(err3);
                }
                console.log(`Status: ${result3.statusCode}`);
                console.log("apply res: "+JSON.stringify(body3))
                res.end(JSON.stringify("Terminé"));
               
              });
            });
          });
        


         
              
        }

      } catch (error) {
        console.log("Erreur sur le /waaf/workflow" + error);
        res.end(JSON.stringify(["erreur: "+error]));
        }

    });

    /* Mise en maintenance de multiple tunnels */
    app.put("/servNode/waaf/maintenanceMultiple/:heberge", (req,res) => {
      console.log("/waaf/maintenanceMultiple");
      console.log("taille: "+req.body.length);
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Admin)){
          
          let waf = wafUrl
          let taille = 0;
          if(req.params.heberge == "true"){
            waf = wafHebergeUrl;
          }
          let chaine_apply = '{ "tunnels": [';
          req.body.forEach( tunnel => {
            let idTunnel = tunnel.uid 
            let maintenance;

            const req_get = {
              url: waf+"wafapi/tunnels?uid="+idTunnel,
              json: true, 
            };

            request.get(req_get, (err, result, body) => {
              if (err) {
                  res.end(JSON.stringify(err));
                  return console.log(err);
              }
              console.log(`Status: ${result.statusCode}`);
              console.log("JSON: "+idTunnel);
              maintenance = JSON.parse(JSON.stringify(body));
              maintenance.data[0].workflowParameters.forEach(parameter => {
               if(parameter.name == "maintenance.enable"){
                 parameter.value = "true";
               }
              });
 
              let req_put = {
               url: waf+"wafapi/tunnels?uid="+idTunnel,
               json: true,
               body: maintenance.data[0]
              };
   
              request.put(req_put, (err2, result2, body2) =>{
               if(err2){
                 res.end(JSON.stringify(err2));
                 return console.log(err2);
               }
               console.log(`Status: ${result2.statusCode}`);
               taille = taille+1;
               console.log("test: "+taille+" : "+req.body.length)
               if(taille == req.body.length){
                chaine_apply += '{ "uid": "'+idTunnel+'"}]}'
                let req_apply = {
                  url: waf+"wafapi/apply",
                  json: true,
                };
      
                // requête apply
                req_apply.body = JSON.parse(chaine_apply);
                console.log("chaine apply: "+JSON.stringify(req_apply.body));
                request.post(req_apply,(err3,result3, body3) => {
                  if(err3){
                    res.end(JSON.stringify(err3));
                    return console.log(err3);
                  }
                  console.log(`Status: ${result3.statusCode}`);
                  console.log("apply res: "+JSON.stringify(body3))
                  res.end(JSON.stringify("Terminé"));
                 
                });
      
               }
               else{
                chaine_apply += '{ "uid": "'+idTunnel+'"},';
               }
               //console.log("res patch:" +JSON.stringify(body2));
         
             });
           }); 

          });
     
        }
      } catch (error) {
        console.log("Erreur sur le /waaf/workflow" + error);
        res.end(JSON.stringify(["erreur: "+error]));
        }

    });

    function maintenance(uid,heberge){
      let idTunnel = uid
      let bool = true
      let waf = wafUrl
      let maintenance;
      if(heberge == "true"){
        waf = wafHebergeUrl;
      }

      const req_get = {
        url: waf+"wafapi/tunnels?uid="+idTunnel,
        json: true,
        
      };

      request.get(req_get, (err, result, body) => {
          if (err) {
              res.end(JSON.stringify(err));
              return console.log(err);
          }
          console.log(`Status: ${result.statusCode}`);
          console.log("JSON: "+idTunnel);
          maintenance = JSON.parse(JSON.stringify(body));
          maintenance.data[0].workflowParameters.forEach(parameter => {
          if(parameter.name == "maintenance.enable"){
            parameter.value = "true";
          }
        });

        let req_put = {
          url: waf+"wafapi/tunnels?uid="+idTunnel,
          json: true,
          body: maintenance.data[0]
        };

        request.put(req_put, (err2, result2, body2) =>{
          if(err2){
            res.end(JSON.stringify(err2));
            return console.log(err2);
          }
          console.log(`Status: ${result2.statusCode}`);
          console.log("res patch:" +JSON.stringify(body2));
    
          let req_apply = {
            url: waf+"wafapi/apply",
            json: true,
          };


          // requête apply
          req_apply.body = JSON.parse('{ "tunnels": [{ "uid": "'+idTunnel+'"}]}');
    
          request.post(req_apply,(err3,result3, body3) => {
            if(err3){
              res.end(JSON.stringify(err3));
              return console.log(err3);
            }
            console.log(`Status: ${result3.statusCode}`);
            console.log("apply res: "+JSON.stringify(body3))
            
          });
        });
      });
    }

    function leveeMaintenance(uid,heberge){
      let idTunnel = uid
      let bool = true
      let waf = wafUrl
      let maintenance;
      if(heberge == "true"){
        waf = wafHebergeUrl;
      }

      const req_get = {
        url: waf+"wafapi/tunnels?uid="+idTunnel,
        json: true,
        
      };

      request.get(req_get, (err, result, body) => {
          if (err) {
              res.end(JSON.stringify(err));
              return console.log(err);
          }
          console.log(`Status: ${result.statusCode}`);
          console.log("JSON: "+idTunnel);
          maintenance = JSON.parse(JSON.stringify(body));
          maintenance.data[0].workflowParameters.forEach(parameter => {
          if(parameter.name == "maintenance.enable"){
            parameter.value = "false";
          }
        });

        let req_put = {
          url: waf+"wafapi/tunnels?uid="+idTunnel,
          json: true,
          body: maintenance.data[0]
        };

        request.put(req_put, (err2, result2, body2) =>{
          if(err2){
            res.end(JSON.stringify(err2));
            return console.log(err2);
          }
          console.log(`Status: ${result2.statusCode}`);
          console.log("res patch:" +JSON.stringify(body2));
    
          let req_apply = {
            url: waf+"wafapi/apply",
            json: true,
          };


          // requête apply
          req_apply.body = JSON.parse('{ "tunnels": [{ "uid": "'+idTunnel+'"}]}');
    
          request.post(req_apply,(err3,result3, body3) => {
            if(err3){
              res.end(JSON.stringify(err3));
              return console.log(err3);
            }
            console.log(`Status: ${result3.statusCode}`);
            console.log("apply res: "+JSON.stringify(body3))
            
          });
        });
      });
    }

    function maintenanceMultiple(tunnelTable,heberge){
      
      let taille = new Rx.BehaviorSubject(0);
      taille.subscribe(num => {
        console.log("num: "+num);
        let idTunnel = tunnelTable[num].uid
        let bool = true
        let waf = wafUrl
        let maintenance;
        if(heberge == true){
          waf = wafHebergeUrl;
        }
  
        const req_get = {
          url: waf+"wafapi/tunnels?uid="+idTunnel,
          json: true,
          
        };
  
        request.get(req_get, (err, result, body) => {
            if (err) {
                res.end(JSON.stringify(err));
                return console.log(err);
            }
            console.log(`Status: ${result.statusCode}`);
            console.log("JSON: "+idTunnel);
            maintenance = JSON.parse(JSON.stringify(body));
            maintenance.data[0].workflowParameters.forEach(parameter => {
            if(parameter.name == "maintenance.enable"){
              parameter.value = "true";
            }
          });
  
          let req_put = {
            url: waf+"wafapi/tunnels?uid="+idTunnel,
            json: true,
            body: maintenance.data[0]
          };
  
          request.put(req_put, (err2, result2, body2) =>{
            if(err2){
              res.end(JSON.stringify(err2));
              return console.log(err2);
            }
            console.log(`Status: ${result2.statusCode}`);
      
            let req_apply = {
              url: waf+"wafapi/apply",
              json: true,
            };
  
  
            // requête apply
            req_apply.body = JSON.parse('{ "tunnels": [{ "uid": "'+idTunnel+'"}]}');
      
            request.post(req_apply,(err3,result3, body3) => {
              if(err3){
                res.end(JSON.stringify(err3));
                return console.log(err3);
              }
              console.log(`Status: ${result3.statusCode}`);
              console.log("apply res: "+JSON.stringify(body3))
              if(num < tunnelTable.length -1){
                let incr = num +1;
                taille.next(incr);
              }
            });
          });
        });
      });


    }

    function leveeMaintenanceMultiple(tunnelTable,heberge){
      let taille = new Rx.BehaviorSubject(0);
      taille.subscribe(num => {
        let idTunnel = tunnelTable[num].uid
        let bool = true
        let waf = wafUrl
        let maintenance;
        if(heberge == true){
          waf = wafHebergeUrl;
        }
  
        const req_get = {
          url: waf+"wafapi/tunnels?uid="+idTunnel,
          json: true,
          
        };
  
        request.get(req_get, (err, result, body) => {
            if (err) {
                res.end(JSON.stringify(err));
                return console.log(err);
            }
            console.log(`Status: ${result.statusCode}`);
            console.log("JSON: "+idTunnel);
            maintenance = JSON.parse(JSON.stringify(body));
            maintenance.data[0].workflowParameters.forEach(parameter => {
            if(parameter.name == "maintenance.enable"){
              parameter.value = "false";
            }
          });
  
          let req_put = {
            url: waf+"wafapi/tunnels?uid="+idTunnel,
            json: true,
            body: maintenance.data[0]
          };
  
          request.put(req_put, (err2, result2, body2) =>{
            if(err2){
              res.end(JSON.stringify(err2));
              return console.log(err2);
            }
            console.log(`Status: ${result2.statusCode}`);
           
      
            let req_apply = {
              url: waf+"wafapi/apply",
              json: true,
            };
  
  
            // requête apply
            req_apply.body = JSON.parse('{ "tunnels": [{ "uid": "'+idTunnel+'"}]}');
      
            request.post(req_apply,(err3,result3, body3) => {
              if(err3){
                res.end(JSON.stringify(err3));
                return console.log(err3);
              }
              console.log(`Status: ${result3.statusCode}`);
              console.log("apply res: "+JSON.stringify(body3))
              if(num < tunnelTable.length -1){
                let incr = num +1;
                taille.next(incr);
              }
            });
          });
        });
      });

    }

    function maintenanceWithIp(ipTable,heberge){
      //Affichage des IP que seront mises en maintenances
      console.log("Mise en maintenance des tunnels ayants pour ip: ")
      let chaineIp = "";
      ipTable.forEach(ip => {chaineIp+=ip; chaineIp+= ","});
      console.log(chaineIp);

      // Récupération de tous les tunnels 
      const req_get = {
        url: wafUrl+"wafapi/tunnels",
        json: true,
      };

      if(heberge){
        req_get.url = wafHebergeUrl+"wafapi/tunnels"
      }

      request.get(req_get, (err, result, body) => {
         if (err) {
             return console.log(err);
         }
         console.log(`Status: ${result.statusCode}`);
         tunnels = JSON.parse(JSON.stringify(body));

         // Filtrage des tunnels pour n'avoir que ceux qui ont la bonne IP
         console.log("Parcour des tunnels et filtre sur les Ip des serveurs hébergés")
         let tableFiltre = tunnels.data.filter(function(tunnel) {
          //console.log(tunnel.network.outgoing.adress);
          return ipTable.includes(tunnel.network.outgoing.address)
          
         });
         console.log("res filtre: "+tableFiltre.length);
         maintenanceMultiple(tableFiltre,heberge);
      });
    }

    function leveeMaintenanceWithIp(ipTable,heberge){
      //Affichage des IP que seront mises en maintenances
      console.log("Mise en maintenance des tunnels ayants pour ip: ")
      let chaineIp = "";
      ipTable.forEach(ip => {chaineIp+=ip; chaineIp+= ","});
      console.log(chaineIp);

      // Récupération de tous les tunnels 
      const req_get = {
        url: wafUrl+"wafapi/tunnels",
        json: true,
      };

      if(heberge){
        req_get.url = wafHebergeUrl+"wafapi/tunnels"
      }

      request.get(req_get, (err, result, body) => {
         if (err) {
             return console.log(err);
         }
         console.log(`Status: ${result.statusCode}`);
         tunnels = JSON.parse(JSON.stringify(body));

         // Filtrage des tunnels pour n'avoir que ceux qui ont la bonne IP
         console.log("Parcour des tunnels et filtre sur les Ip des serveurs hébergés")
         let tableFiltre = tunnels.data.filter(function(tunnel) {
          //console.log(tunnel.network.outgoing.adress);
          return ipTable.includes(tunnel.network.outgoing.address)
         });
         console.log("res filtre: "+tableFiltre.length);
         
         // Levée de la maintenance de ces tunnels
         leveeMaintenanceMultiple(tableFiltre,heberge);
      });
    }

  
    //leveeMaintenanceWithIp(["10.64.68.3"],true);

    /* Lever la maintenance d'un tunnel  */
    app.get("/servNode/waaf/levermaintenance/:urlTunnel/:idTunnel/:heberge", (req,res) => {
      console.log("/waaf/levermaintenance");
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Admin)){

          let idTunnel = req.params.idTunnel
          let bool = false
          let waf = wafUrl
          let maintenance;
          if(req.params.heberge == "true"){
            waf = wafHebergeUrl;
          }

          const req_get = {
            url: waf+"wafapi/tunnels?uid="+idTunnel,
            json: true,
           
          };

          request.get(req_get, (err, result, body) => {
             if (err) {
                 res.end(JSON.stringify(err));
                 return console.log(err);
             }
             console.log(`Status: ${result.statusCode}`);
             maintenance = JSON.parse(JSON.stringify(body));
             maintenance.data[0].workflowParameters.forEach(parameter => {
              if(parameter.name == "maintenance.enable"){
                parameter.value = "false";
              }
            });

            let req_put = {
                url: waf+"wafapi/tunnels?uid="+idTunnel,
                json: true,
                body: maintenance.data[0]
              };
    
              request.put(req_put, (err2, result2, body2) =>{
                if(err2){
                  res.end(JSON.stringify(err2));
                  return console.log(err2);
                }
                console.log(`Status: ${result2.statusCode}`);
                console.log("res patch:" +JSON.stringify(body2));
          
                let req_apply = {
                  url: waf+"wafapi/apply",
                  json: true,
                };
    
    
                // requête apply
                req_apply.body = JSON.parse('{ "tunnels": [{ "uid": "'+idTunnel+'"}]}');
          
                request.post(req_apply,(err3,result3, body3) => {
                  if(err3){
                    res.end(JSON.stringify(err3));
                    return console.log(err3);
                  }
                  console.log(`Status: ${result3.statusCode}`);
                  console.log("apply res: "+JSON.stringify(body3))
                  res.end(JSON.stringify("Terminé"));
                
                });
              });
            });
    
        }
  
      } catch (error) {
        console.log("Erreur sur le /waaf/levermaintenance" + error);
        res.end(JSON.stringify(["erreur: "+error]));
      }
      
    });
    
    /* Lever la maintenance de multiple tunnels */
    app.put("/servNode/waaf/leverMaintenanceMultiple/:heberge", (req,res) => {
      console.log("/waaf/leverMaintenanceMultiple");
      console.log("taille: "+req.body.length);
      try {
        if(req.session.sso  && req.session.sso.user.groups.includes(GG_Admin)){
          
          let waf = wafUrl
          let taille = 0;
          if(req.params.heberge == "true"){
            waf = wafHebergeUrl;
          }
          let chaine_apply = '{ "tunnels": [';
          req.body.forEach( tunnel => {
            let idTunnel = tunnel.uid 
            let maintenance;

            const req_get = {
              url: waf+"wafapi/tunnels?uid="+idTunnel,
              json: true, 
            };

            request.get(req_get, (err, result, body) => {
              if (err) {
                  res.end(JSON.stringify(err));
                  return console.log(err);
              }
              console.log(`Status: ${result.statusCode}`);
              console.log("JSON: "+idTunnel);
              maintenance = JSON.parse(JSON.stringify(body));
              maintenance.data[0].workflowParameters.forEach(parameter => {
               if(parameter.name == "maintenance.enable"){
                 parameter.value = "false";
               }
              });
 
              let req_put = {
               url: waf+"wafapi/tunnels?uid="+idTunnel,
               json: true,
               body: maintenance.data[0]
              };
   
              request.put(req_put, (err2, result2, body2) =>{
               if(err2){
                 res.end(JSON.stringify(err2));
                 return console.log(err2);
               }
               console.log(`Status: ${result2.statusCode}`);
               taille = taille+1;
               console.log("test: "+taille+" : "+req.body.length)
               if(taille == req.body.length){
                chaine_apply += '{ "uid": "'+idTunnel+'"}]}'
                let req_apply = {
                  url: waf+"wafapi/apply",
                  json: true,
                };
      
      
                // requête apply
                req_apply.body = JSON.parse(chaine_apply);
                console.log("chaine apply: "+JSON.stringify(req_apply.body));
                request.post(req_apply,(err3,result3, body3) => {
                  if(err3){
                    res.end(JSON.stringify(err3));
                    return console.log(err3);
                  }
                  console.log(`Status: ${result3.statusCode}`);
                  console.log("apply res: "+JSON.stringify(body3))
                  res.end(JSON.stringify("Terminé"));
                 
                });
      
               }
               else{
                chaine_apply += '{ "uid": "'+idTunnel+'"},';
               }
               //console.log("res patch:" +JSON.stringify(body2));
         
             });
           }); 

          });
     
        }
      } catch (error) {
        console.log("Erreur sur le /waaf/workflow" + error);
        res.end(JSON.stringify(["erreur: "+error]));
        }

    });





  /* -------- TOOL BOX ---------- */
  /* Liste des catégories */
  app.get("/categories", (req,res) => {
    console.log("/categories");
    categories = [];
    try {
      //console.log("CAT: "+req.session.sso.user.groups);
      if(req.session.sso){
       
        db_tool.collection("categories").find().toArray((err, documents) => {
          for (let doc of documents) {
            console.log("----------------------");
            console.log("CAT: "+doc.nom);
            console.log("CAT: "+doc.authorized_groups);
            //console.log("DEPT34\\\\"+"GG Admin ToolBox");
            //console.log(req.session.sso.user.groups);
            if (req.session.sso.user.groups.includes("DEPT34\\"+doc.authorized_groups) || req.session.sso.user.groups.includes("DEPT34\\"+"GG A Admin ToolBox")) categories.push(doc); 
          }
        res.end(JSON.stringify(categories));
        });
      }
    } catch(e) {
        console.log("Erreur sur /categories : " + e);
        res.end(JSON.stringify([]));
    }
  });


  /* Liste des Tâches suivant une catégorie */
  app.get("/taches/:categorie", (req,res) => {
    let categorie = req.params.categorie;
    console.log("/taches/"+categorie);
      try {
          db_tool.collection("taches").find({categories:categorie}).toArray((err, documents) => {
              res.end(JSON.stringify(documents));
          });
      } catch(e) {
          console.log("Erreur sur /taches/"+categorie+" : "+ e);
          res.end(JSON.stringify([]));
      }
  });



    /* Liste des historiques */
    app.get("/historiques", (req,res) => {
        console.log("/historiques");
        try {
            db.collection("historiques").find().toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /historiques : " + e);
            res.end(JSON.stringify([]));
        }
    });


    /* Liste des produits */
    app.get("/produits", (req,res) => {
        console.log("/produits");
        try {
            db.collection("produits").find().toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /produits : " + e);
            res.end(JSON.stringify([]));
        }
    });

    /* Liste des produits suivant une catégorie */
    app.get("/produits/:categorie", (req,res) => {
	    let categorie = req.params.categorie;
        console.log("/produits/"+categorie);
        try {
            db.collection("produits").find({type:categorie}).toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /produits/"+categorie+" : "+ e);
            res.end(JSON.stringify([]));
        }
    });

    
    /* Liste des catégories de produits */
    app.get("/categories", (req,res) => {
        console.log("/categories");
	    categories = [];
        try {
            db.collection("produits").find().toArray((err, documents) => {
		    for (let doc of documents) {
                if (!categories.includes(doc.type)) categories.push(doc.type); 
		    }
            res.end(JSON.stringify(categories));
            });
        } catch(e) {
            console.log("Erreur sur /categories : " + e);
            res.end(JSON.stringify([]));
        }
    });

    /* Connexion */
    app.post("/membre/connexion", (req,res) => {
        try {
            db.collection("membres")
            .find(req.body)
            .toArray((err, documents) => {
                if (documents != undefined && documents.length == 1)
                    res.end(JSON.stringify({"resultat": 1, "message": "Authentification réussie"}));
                else res.end(JSON.stringify({"resultat": 0, "message": "Email et/ou mot de passe incorrect"}));
            });
        } catch (e) {
            res.end(JSON.stringify({"resultat": 0, "message": e}));
        }
    });
    

});

// Chargement des fichiers Html / Javascript du patch-management
app.use("/",express.static(path.join(__dirname,'ord-patch'),{redirect: false}));

// Redirection automatique vers l'application patch Management 
app.get('/patchManagement/*', async (req, res) => {
  res.sendFile(path.resolve(__dirname, 'ord-patch', 'index.html'));
});

// Instanciation du serveur sur le port 443 (port par défaut Https)
https.createServer(options, app).listen(443,()=> console.log("Serveur en écoute sur le port 443"));
