"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[117],{5117:(y,u,o)=>{o.r(u),o.d(u,{AproposRoutingModule:()=>T,ROUTES:()=>h});var c=o(6952),g=o(9808),p=o(2382),m=o(2539),d=o(5592),t=o(5e3);const f=[(()=>{class e{constructor(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()];var v=o(5212),n=o(1777),A=o(7751),Z=o(9444);function S(e,s){if(1&e&&t._UZ(0,"img",19),2&e){const i=t.oxw();t.s9C("src",i.imgSelect,t.LSH)}}const r=function(){return["fas","envelope"]};let U=(()=>{class e{constructor(i){this.modal=i,this.choice=2,this.choice2=2,this.choice3=2,this.state="in",this.state2="in",this.state3="in",this.counter=0,this.counter2=0,this.counter3=0,this.enableAnimation=!1,this.enableAnimation2=!1,this.enableAnimation3=!1,this.imageSource="",this.imageSource2="",this.imageSource3="",this.imgSteph1="../../../assets/img/profil/steph1.JPG",this.imgSteph2="../../../assets/img/profil/steph2.JPG",this.imgSteph3="../../../assets/img/profil/steph3.JPG",this.imgSeb1="../../../assets/img/profil/default.png",this.imgSeb2="../../../assets/img/profil/default.png",this.imgSeb3="../../../assets/img/profil/default.png",this.imgFred="../../../assets/img/profil/fred.jpg",this.imgYves1="../../../assets/img/profil/default.png",this.imgYves2="../../../assets/img/profil/default.png",this.gifCel1="../../../assets/img/profil/cel1.gif",this.imgSelect=""}ngOnInit(){this.imageSource=this.imgSteph1,this.imageSource2=this.imgYves1,this.imageSource3=this.imgSeb1}changeStephPicture(){this.enableAnimation=!0,this.counter=0,this.toggleState()}changeYvesPicture(){this.enableAnimation2=!0,this.counter2=0,this.toggleState2()}changeSebPicture(){this.enableAnimation3=!0,this.counter3=0,this.toggleState3()}toggleImg(){1===this.choice?(this.imageSource=this.imgSteph1,this.choice=2):2===this.choice?(this.imageSource=this.imgSteph2,this.choice=3):(this.imageSource=this.imgSteph3,this.choice=1)}toggleImgYves(){1===this.choice2?(this.imageSource2=this.imgYves1,this.choice2=2):(this.imageSource2=this.imgYves2,this.choice2=1)}toggleImgSeb(){1===this.choice3?(this.imageSource3=this.imgSeb1,this.choice3=2):2===this.choice3?(this.imageSource3=this.imgSeb2,this.choice3=3):(this.imageSource3=this.imgSeb3,this.choice3=1)}onDone(i){this.enableAnimation&&(1===this.counter&&this.toggleImg(),this.toggleState())}onDone2(i){this.enableAnimation2&&(1===this.counter2&&this.toggleImgYves(),this.toggleState2())}onDone3(i){this.enableAnimation3&&(1===this.counter3&&this.toggleImgSeb(),this.toggleState3())}toggleState(){this.counter<2&&(this.state="in"===this.state?"out":"in",this.counter++)}toggleState2(){this.counter2<2&&(this.state2="in"===this.state2?"out":"in",this.counter2++)}toggleState3(){this.counter3<2&&(this.state3="in"===this.state3?"out":"in",this.counter3++)}playAudio(){let i=new Audio;i.src="../../../assets/star-wars-chewbacca-sound-effect_LF9zOetY.mp3",i.load(),i.play()}playAudioYves(){let i=new Audio;i.src="../../../assets/car_sound.wav",i.pause(),i.load(),i.play()}open(i){this.modal.open(i,{centered:!0})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(A.FF))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-apropos-team"]],decls:76,vars:14,consts:[[1,"py-5","team4"],[1,"container"],[1,"row","justify-content-center","mb-4"],[1,"col-md-7","text-center"],[1,"mb-3"],[1,"subtitle"],[1,"row"],[1,"col-lg-3","mb-4"],[1,"col-md-12","text-center"],["src","https://execo.cogitis.fr/wp-content/uploads/avatars/79/2211e6c0d51683151fc0451471616b60-bpfull.jpg","alt","wrapkit",1,"img-fluid","rounded-circle"],[1,"pt-2"],[1,"mt-4","font-weight-medium","mb-0"],[1,"subtitle","mb-3"],[1,"mr-1",3,"icon"],["src","https://execo.cogitis.fr/wp-content/uploads/avatars/98/57fb421c32b5f-bpfull.jpg","alt","wrapkit",1,"img-fluid","rounded-circle"],["alt","wrapkit",1,"img-fluid","rounded-circle",3,"src","mouseenter"],["alt","wrapkit","id","sebastien",1,"img-fluid","rounded-circle",3,"src"],["alt","wrapkit",1,"img-fluid","rounded-circle",3,"src"],["modalImg",""],[3,"src"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5,"Contributeurs du projet de d\xe9veloppement"),t.qZA(),t.TgZ(6,"h6",5),t._uU(7,"Le projet du patch management s'inscrit dans le cadre de la collaboration entre le d\xe9partement informatique de la fac des sciences de montpellier et Cogitis."),t.qZA()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",6)(11,"div",8),t._UZ(12,"img",9),t.qZA(),t.TgZ(13,"div",8)(14,"div",10)(15,"h5",11),t._uU(16,"Frederic Claramunt"),t.qZA(),t.TgZ(17,"h6",12),t._uU(18,"Ing\xe9nieur Infrastructure et Syst\xe8mes - Responsable de la Gestion de la Production DIP H\xe9rault"),t.qZA(),t.TgZ(19,"div"),t._UZ(20,"fa-icon",13),t._uU(21,"fclaramunt@cogitis.fr"),t.qZA()()()()(),t.TgZ(22,"div",7)(23,"div",6)(24,"div",8),t._UZ(25,"img",14),t.qZA(),t.TgZ(26,"div",8)(27,"div",10)(28,"h5",11),t._uU(29,"Celine Duguet"),t.qZA(),t.TgZ(30,"h6",12),t._uU(31," Responsable Infog\xe9rance - DIP HERAULT"),t.qZA(),t.TgZ(32,"div"),t._UZ(33,"fa-icon",13),t._uU(34,"cduguet@cogitis.fr"),t.qZA()()()()(),t.TgZ(35,"div",7)(36,"div",6)(37,"div",8)(38,"img",15),t.NdJ("@fade.done",function(_){return a.onDone(_)})("mouseenter",function(){return a.changeStephPicture()}),t.qZA()(),t.TgZ(39,"div",8)(40,"div",10)(41,"h5",11),t._uU(42,"Stephane Moulins"),t.qZA(),t.TgZ(43,"h6",12),t._uU(44,"Administrateur Syst\xe8mes - DIP HERAULT / Gestion de la Production"),t.qZA(),t.TgZ(45,"div"),t._UZ(46,"fa-icon",13),t._uU(47,"smoulins@cogitis.fr"),t.qZA()()()()(),t.TgZ(48,"div",7)(49,"div",6)(50,"div",8),t._UZ(51,"img",16),t.qZA(),t.TgZ(52,"div",8)(53,"div",10)(54,"h5",11),t._uU(55,"Sebastien Ollivier"),t.qZA(),t.TgZ(56,"h6",12),t._uU(57,"Administrateur Syst\xe8mes - DIP HERAULT / Gestion de la Production"),t.qZA(),t.TgZ(58,"div"),t._UZ(59,"fa-icon",13),t._uU(60,"sollivier@cogitis.fr"),t.qZA()()()()(),t.TgZ(61,"div",7)(62,"div",6)(63,"div",8),t._UZ(64,"img",17),t.qZA(),t.TgZ(65,"div",8)(66,"div",10)(67,"h5",11),t._uU(68,"Yves Guillemant"),t.qZA(),t.TgZ(69,"h6",12),t._uU(70,"Administrateur Syst\xe8mes - DIP HERAULT / Gestion de la Production"),t.qZA(),t.TgZ(71,"div"),t._UZ(72,"fa-icon",13),t._uU(73,"yguillemant@cogitis.fr"),t.qZA()()()()()()()(),t.YNc(74,S,1,1,"ng-template",null,18,t.W1O)),2&i&&(t.xp6(20),t.Q6J("icon",t.DdM(9,r)),t.xp6(13),t.Q6J("icon",t.DdM(10,r)),t.xp6(5),t.Q6J("@fade",a.state)("src",a.imageSource,t.LSH),t.xp6(8),t.Q6J("icon",t.DdM(11,r)),t.xp6(5),t.Q6J("src",a.imageSource3,t.LSH),t.xp6(8),t.Q6J("icon",t.DdM(12,r)),t.xp6(5),t.Q6J("src",a.imageSource2,t.LSH),t.xp6(8),t.Q6J("icon",t.DdM(13,r)))},directives:[Z.BN],styles:[".rounded-circle[_ngcontent-%COMP%]{width:150px;height:150px}"],data:{animation:[(0,n.X$)("fade",[(0,n.SB)("in",(0,n.oB)({opacity:"1"})),(0,n.SB)("out",(0,n.oB)({opacity:"0"})),(0,n.eR)("* <=> *",[(0,n.jt)(1e3)])])]}}),e})(),l=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-apropos"]],decls:37,vars:1,consts:[["title","\xc0 propos",3,"hideBreadcrumbs"],[1,"container"],[1,"table","table-condensed"],["href","http://www.cogitis.fr"],["src","../../../assets/img/COGITIS-Logo-blocmarque-quadri.jpg"],[1,"mt-3"],[1,"text-center"],["href","mailto:assistance@cogitis.fr",2,"color","black"]],template:function(i,a){1&i&&(t._UZ(0,"sb-dashboard-head",0),t.TgZ(1,"div",1)(2,"table",2)(3,"tbody")(4,"tr")(5,"th")(6,"h3"),t._uU(7,"Patch Management V1.0 2022"),t.qZA()(),t.TgZ(8,"td"),t._uU(9,"D\xe9velopp\xe9 par "),t.TgZ(10,"a",3),t._uU(11,"Cogitis "),t.qZA(),t._UZ(12,"img",4),t.qZA()(),t.TgZ(13,"tr")(14,"th")(15,"h3"),t._uU(16,"D\xe9veloppeur:"),t.qZA()(),t.TgZ(17,"td"),t._UZ(18,"br"),t._uU(19,"BONNEAUD Ma\xebl (Cogitis)"),t.qZA()(),t.TgZ(20,"tr")(21,"th")(22,"h3"),t._uU(23,"Chef de projet:"),t.qZA()(),t.TgZ(24,"td"),t._UZ(25,"br"),t._uU(26,"CLARAMUNT Frederic (Cogitis)"),t.qZA()()()()(),t._UZ(27,"app-apropos-team",5),t.TgZ(28,"p",6),t._uU(29,"Pour toute d\xe9claration d\u2019incident technique ou mauvais fonctionnement du portail, vous pouvez contacter l\u2019assistance cogitis au "),t.TgZ(30,"u"),t._uU(31,"04.67.67.64.64"),t.qZA(),t._uU(32," ou par mail \xe0 "),t.TgZ(33,"a",7)(34,"u"),t._uU(35,"assistance@cogitis.fr"),t.qZA()(),t._uU(36," ."),t.qZA()),2&i&&t.Q6J("hideBreadcrumbs",!1)},directives:[v.T,U],styles:[""]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[g.JJ,...f],imports:[[g.ez,c.Bz,p.UX,p.u5,m.n,d.A]]}),e})();const h=[{path:"",data:{title:"A propos - Patch Management",breadcrumbs:[{text:"Dashboard",link:"/dashboard"},{text:"A propos",active:!0}]},canActivate:[],component:l}];let T=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[b,c.Bz.forChild(h)],c.Bz]}),e})()}}]);