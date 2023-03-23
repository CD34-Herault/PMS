"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[440],{6333:(y,b,s)=>{s.d(b,{A:()=>h});var _=s(5e3),c=s(9808);const S=[[["",8,"card-header"]],[["",8,"card-body"]],[["",8,"card-footer"]]],e=[".card-header",".card-body",".card-footer"];let h=(()=>{class d{constructor(){this.customClasses=[]}ngOnInit(){this.background&&this.customClasses.push(this.background),this.color&&this.customClasses.push(this.color)}}return d.\u0275fac=function(u){return new(u||d)},d.\u0275cmp=_.Xpm({type:d,selectors:[["sb-card"]],inputs:{background:"background",color:"color"},ngContentSelectors:e,decls:4,vars:1,consts:[[1,"card","mb-4",3,"ngClass"]],template:function(u,g){1&u&&(_.F$t(S),_.TgZ(0,"div",0),_.Hsn(1),_.Hsn(2,1),_.Hsn(3,2),_.qZA()),2&u&&_.Q6J("ngClass",g.customClasses)},directives:[c.mk],styles:[""],changeDetection:0}),d})()},1674:(y,b,s)=>{s.d(b,{g:()=>d,u:()=>v});var _=s(520),c=s(1438),S=s(5e3),e=s(4890);const h={headers:new _.WM({"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let d=(()=>{class u{constructor(i,l){this.http=i,this.ExceptionnelService=l,this.baseURL="https://"+c.F+"/"}get_calendrier(){try{return this.http.get(this.baseURL+"servNode/getCalendriers/",h)}catch(i){throw{msg:"Erreur get_calendrier(): "+i}}}get_oneCalendrier(i){try{return this.http.get(this.baseURL+"servNode/getCalendrier/"+i,h)}catch(l){throw{msg:"Erreur get_oneCalendrier(): "+l}}}put_calendrier(i){try{return this.http.put(this.baseURL+"servNode/putCalendriers/",JSON.stringify(i),h)}catch(l){throw{msg:"Erreur get_calendrier(): "+l}}}put_dates(i,l){try{return this.http.put(this.baseURL+"servNode/putDate/"+l,JSON.stringify(i),h)}catch(C){throw{msg:"Erreur get_calendrier(): "+C}}}supressionCalendrier(i){try{return this.http.delete(this.baseURL+"servNode/deleteCalendriers/"+i,h)}catch(l){throw{msg:"Erreur supression calendrier: "+l}}}updateCalendrier(i,l){try{return this.http.put(this.baseURL+"servNode/updateCalendriers/"+i,JSON.stringify(l),h)}catch(C){throw{msg:"Erreur update calendrier: "+C}}}get_tasks(i){try{return this.http.get(this.baseURL+"servNode/getTasks/"+i,h)}catch(l){throw{msg:"Erreur get_tasks(): "+l}}}deleteEvent(i){try{return this.http.delete(this.baseURL+"servNode/deleteDate/"+i.start,h)}catch(l){throw{msg:"Erreur deleteEvent(): "+l}}}deleteEventById(i){try{return this.http.delete(this.baseURL+"servNode/deleteDateById/"+i,h)}catch(l){throw{msg:"Erreur deleteEventById(): "+l}}}}return u.\u0275fac=function(i){return new(i||u)(S.LFG(_.eN),S.LFG(e.n))},u.\u0275prov=S.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})();const v=[d]},9524:(y,b,s)=>{s.d(b,{z:()=>h,u:()=>d});var _=s(520),c=s(1438),S=s(5e3);const e={headers:new _.WM({"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let h=(()=>{class v{constructor(g){this.http=g,this.baseURL="https://"+c.F+"/"}ajout(g,i){try{return this.http.put(i.length<=2?this.baseURL+"servNode/exclusions_add/0":this.baseURL+"servNode/exclusions_add/"+i,JSON.stringify(g),e)}catch(l){throw{msg:"Erreur envoie des exclusions: "+l}}}getExclusions(){try{return this.http.get(this.baseURL+"servNode/exclusions",e)}catch(g){throw{msg:"Erreur r\xe9cup\xe9ration des exclusions: "+g}}}deleteExclusions(g,i,l){try{return this.http.delete(l.length<=2?this.baseURL+"servNode/exclusions_delete/"+g+"/"+i+"/0":this.baseURL+"servNode/exclusions_delete/"+g+"/"+i+"/"+l,e)}catch(C){throw{msg:"Erreur supression des exclusions: "+C}}}}return v.\u0275fac=function(g){return new(g||v)(S.LFG(_.eN))},v.\u0275prov=S.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})();const d=[h]},3154:(y,b,s)=>{s.d(b,{w:()=>h});var _=s(520),c=s(1438),S=s(5e3);const e={headers:new _.WM({"Access-Control-Allow-Methods":"GET,POST,PUT","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let h=(()=>{class d{constructor(u){this.http=u,this.baseURL="https://"+c.F+"/"}getHoraireMaj(){try{return this.http.get(this.baseURL+"servNode/config_serveur_horaire_maj",e)}catch(u){throw{msg:u}}}}return d.\u0275fac=function(u){return new(u||d)(S.LFG(_.eN))},d.\u0275prov=S.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},4890:(y,b,s)=>{s.d(b,{u:()=>c,n:()=>_.n});var _=s(984);const c=[_.n]},984:(y,b,s)=>{s.d(b,{n:()=>v});var _=s(9808),c=s(520),S=s(1438),e=s(5e3),h=s(4667);const d={headers:new c.WM({"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let v=(()=>{class u{constructor(i,l){this.authService=i,this.http=l,this.baseURL="https://"+S.F+"/",this.plannif={date_plannif:(0,_.p6)(new Date,"dd/MM/yyyy","en"),horaire_debut:"19:00",horaire_fin:"23:00",user:"",plannifs:[],_id:void 0}}plannification(i,l,C,m,T){try{return this.plannif.plannifs=i,this.plannif.user=l,this.plannif.horaire_debut=C,this.plannif.horaire_fin=m,null!=T&&(this.plannif.date_plannif=T.day.toString().padStart(2,"0")+"/"+T.month.toString().padStart(2,"0")+"/"+T.year.toString().padStart(2,"0")),this.http.put(this.baseURL+"servNode/plannificationExceptionnel_add",JSON.stringify(this.plannif),d)}catch(M){throw{msg:"Erreur plannification() "+M}}}getPlannifications(){try{return this.http.get(this.baseURL+"servNode/plannificationExceptionnel",d)}catch(i){throw{msg:"Erreur r\xe9cup\xe9ration des plannifs: "+i}}}supressionPlannification(i){try{return console.log("Test supp: "+i),this.http.delete(this.baseURL+"servNode/deletePlannificationExceptionnel/"+i,d)}catch(l){throw{msg:"Erreur supression plannif: "+l}}}modificationPlannification(i,l,C,m,T,M){try{return this.plannif.plannifs=l,this.plannif.user=C,this.plannif.horaire_debut=m,this.plannif.horaire_fin=T,null!=M&&(this.plannif.date_plannif=M.day.toString().padStart(2,"0")+"/"+M.month.toString().padStart(2,"0")+"/"+M.year.toString().padStart(2,"0")),this.http.put(this.baseURL+"servNode/PlannificationExceptionnel_modify/"+i,JSON.stringify(this.plannif),d)}catch(I){throw{msg:"Erreur modification Plannification: "+I}}}}return u.\u0275fac=function(i){return new(i||u)(e.LFG(h.g),e.LFG(c.eN))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},996:(y,b,s)=>{s.d(b,{m:()=>me});var _=s(3158),c=s(7751),S=s(1135),e=s(5e3),h=s(9524),d=s(3305),v=s(984),u=s(1674),g=s(4667),i=s(2382),l=s(9444),C=s(9808),m=s(1938);const T=function(){return["fas","chevron-up"]};function M(n,a){1&n&&(e.ynx(0),e._UZ(1,"fa-icon",1),e.BQk()),2&n&&(e.xp6(1),e.Q6J("icon",e.DdM(1,T)))}const I=function(){return["fas","chevron-down"]};function k(n,a){1&n&&(e.ynx(0),e._UZ(1,"fa-icon",1),e.BQk()),2&n&&(e.xp6(1),e.Q6J("icon",e.DdM(1,I)))}let B=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sb-sort-icon"]],inputs:{direction:"direction"},decls:2,vars:2,consts:[[4,"ngIf"],[1,"sort-icon",3,"icon"]],template:function(t,r){1&t&&(e.YNc(0,M,2,2,"ng-container",0),e.YNc(1,k,2,2,"ng-container",0)),2&t&&(e.Q6J("ngIf","asc"===r.direction),e.xp6(1),e.Q6J("ngIf","desc"===r.direction))},directives:[C.O5,l.BN],styles:[".sort-icon[_ngcontent-%COMP%]{height:.9rem;width:.9rem;margin-left:.25rem;margin-top:-.125rem;vertical-align:middle}"],changeDetection:0}),n})();function x(n,a){if(1&n&&(e.TgZ(0,"div",11)(1,"label",12),e._uU(2),e.qZA(),e.TgZ(3,"ul",23)(4,"li",24),e._uU(5," Serveur PROD "),e.TgZ(6,"span",25),e._uU(7),e.qZA()(),e.TgZ(8,"li",24),e._uU(9," Serveur Pre-Prod "),e.TgZ(10,"span",25),e._uU(11),e.qZA()(),e.TgZ(12,"li",24),e._uU(13," Serveur Rec-Form "),e.TgZ(14,"span",25),e._uU(15),e.qZA()(),e.TgZ(16,"li",24),e._uU(17," Serveur BDD "),e.TgZ(18,"span",25),e._uU(19),e.qZA()(),e.TgZ(20,"li",24),e._uU(21," Serveur BDD-Rec "),e.TgZ(22,"span",25),e._uU(23),e.qZA()(),e.TgZ(24,"li",24),e._uU(25," Serveur DMZ "),e.TgZ(26,"span",25),e._uU(27),e.qZA()()()()),2&n){const t=a.ngIf,r=e.oxw(2);e.xp6(2),e.AsE("Derni\xe8re Plannification le ",t[t.length-1].date_plannif," par ",t[t.length-1].user,": "),e.xp6(5),e.Oqu(r.count_prod(t[t.length-1])),e.xp6(4),e.Oqu(r.count_pre(t[t.length-1])),e.xp6(4),e.Oqu(r.count_rec(t[t.length-1])),e.xp6(4),e.Oqu(r.count_bdd(t[t.length-1])),e.xp6(4),e.Oqu(r.count_bdd_rec(t[t.length-1])),e.xp6(4),e.Oqu(r.count_dmz(t[t.length-1]))}}const Z=function(){return["fas","table"]};function f(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",7)(1,"h4",8),e._uU(2,"Plannification Exceptionnel"),e.qZA(),e.TgZ(3,"button",9),e.NdJ("click",function(){return e.CHM(t).$implicit.dismiss("Cross click")}),e.qZA()(),e.TgZ(4,"div",10)(5,"form")(6,"div",11)(7,"label",12),e._uU(8,"Date de plannification"),e.qZA(),e.TgZ(9,"div",13)(10,"input",14,15),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().date_plannif=o}),e.qZA(),e.TgZ(12,"button",16),e.NdJ("click",function(){return e.CHM(t),e.MAs(11).toggle()}),e._UZ(13,"fa-icon",17),e.qZA()(),e._UZ(14,"br"),e.TgZ(15,"label",12),e._uU(16,"Horaire Debut/fin"),e.qZA(),e.TgZ(17,"div",13)(18,"input",18),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().horaire_debut=o}),e.qZA(),e.TgZ(19,"input",19),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().horaire_fin=o}),e.qZA()()(),e.YNc(20,x,28,8,"div",20),e.ALo(21,"async"),e.qZA()(),e.TgZ(22,"div",21)(23,"button",22),e.NdJ("click",function(){const p=e.CHM(t).$implicit,w=e.oxw();return p.close("Save click"),w.plannification()}),e._uU(24,"Plannifier"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(10),e.Q6J("ngModel",t.date_plannif),e.xp6(3),e.Q6J("icon",e.DdM(9,Z)),e.xp6(5),e.s9C("value",t.horaire_debut),e.Q6J("ngModel",t.horaire_debut),e.xp6(1),e.s9C("value",t.horaire_fin),e.Q6J("ngModel",t.horaire_fin),e.xp6(1),e.Q6J("ngIf",e.lcZ(21,7,t.plannifs$))}}const O=function(){return["fab","windows"]};function E(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",37)(1,"button",38),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="windows"}),e._UZ(2,"fa-icon",17),e._uU(3,"Windows"),e.qZA(),e.TgZ(4,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="Production"}),e._uU(5,"Prod"),e.qZA(),e.TgZ(6,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="Pre-production"}),e._uU(7,"Pre-Prod"),e.qZA(),e.TgZ(8,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="Recette-Formation"}),e._uU(9,"Rec-Form"),e.qZA(),e.TgZ(10,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD"}),e._uU(11,"BDD"),e.qZA(),e.TgZ(12,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD-Recette"}),e._uU(13,"BDD-Rec"),e.qZA(),e.TgZ(14,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="DMZ"}),e._uU(15,"DMZ"),e.qZA()()}2&n&&(e.xp6(2),e.Q6J("icon",e.DdM(1,O)))}const D=function(){return["fab","linux"]};function U(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",39)(1,"button",40),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="linux"}),e._UZ(2,"fa-icon",17),e._uU(3,"Linux"),e.qZA(),e.TgZ(4,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD-PRODPRE"}),e._uU(5,"BDD-ProPre"),e.qZA(),e.TgZ(6,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD-RECFOR"}),e._uU(7,"BDD-RECFOR"),e.qZA(),e.TgZ(8,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="PROD-PRE"}),e._uU(9,"PROD-PRE"),e.qZA(),e.TgZ(10,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="REC-FOR"}),e._uU(11,"REC-FOR"),e.qZA()()}2&n&&(e.xp6(2),e.Q6J("icon",e.DdM(1,D)))}function L(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",37)(1,"button",38),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="windows"}),e._UZ(2,"fa-icon",17),e._uU(3,"Windows"),e.qZA(),e.TgZ(4,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="Production"}),e._uU(5,"Production"),e.qZA()()}2&n&&(e.xp6(2),e.Q6J("icon",e.DdM(1,O)))}function P(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",32)(1,"div",33)(2,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).serveurService.typeselected="Tous"}),e._uU(3,"Tous"),e.qZA()(),e.YNc(4,E,16,2,"div",35),e.YNc(5,U,12,2,"div",36),e.YNc(6,L,6,2,"div",35),e.qZA()}if(2&n){const t=a.ngIf;e.xp6(4),e.Q6J("ngIf","Alco_Windows"==t),e.xp6(1),e.Q6J("ngIf","Alco_Linux"==t),e.xp6(1),e.Q6J("ngIf","Heberge_Windows"==t)}}function A(n,a){if(1&n&&(e.TgZ(0,"span",41),e._uU(1),e.ALo(2,"async"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("Total: ",e.lcZ(2,1,t.serveurService.total$),"")}}function Y(n,a){if(1&n&&(e.TgZ(0,"span",41),e._uU(1),e.ALo(2,"async"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("Maj n\xe9cessaire: ",e.lcZ(2,1,t.serveurService.total_maj$),"")}}function Q(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3),p=e.MAs(1);return o.open(p)}),e._uU(1,"Mettre \xe0 jour"),e.qZA()}}function J(n,a){if(1&n&&(e.TgZ(0,"div",42),e.YNc(1,Q,2,0,"button",43),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.auth.isAdmin)}}function j(n,a){if(1&n&&(e.TgZ(0,"span",48),e._uU(1),e.qZA()),2&n){const t=e.oxw().ngIf;e.xp6(1),e.Oqu(t)}}function F(n,a){if(1&n&&(e.TgZ(0,"span",49),e._uU(1),e.qZA()),2&n){const t=e.oxw().ngIf;e.xp6(1),e.Oqu(t)}}function $(n,a){if(1&n&&(e.TgZ(0,"div",45),e.YNc(1,j,2,1,"span",46),e.YNc(2,F,2,1,"span",47),e.qZA()),2&n){const t=a.ngIf;e.xp6(1),e.Q6J("ngIf","Ajout OK"==t),e.xp6(1),e.Q6J("ngIf","Ajout OK"!=t)}}function q(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",26),e._uU(2,"Recherche: "),e.TgZ(3,"input",27),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().serveurService.searchTerm=o}),e.qZA(),e.YNc(4,P,7,3,"div",28),e.ALo(5,"async"),e.YNc(6,A,3,3,"span",29),e.ALo(7,"async"),e.YNc(8,Y,3,3,"span",29),e.ALo(9,"async"),e.YNc(10,J,2,1,"div",30),e.YNc(11,$,3,2,"div",31),e.ALo(12,"async"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.serveurService.searchTerm),e.xp6(1),e.Q6J("ngIf",e.lcZ(5,6,t.osSelected)),e.xp6(2),e.Q6J("ngIf",e.lcZ(7,8,t.serveurService.total$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,10,t.serveurService.total_maj$)),e.xp6(2),e.Q6J("ngIf",t.checkedList.length>0),e.xp6(1),e.Q6J("ngIf",e.lcZ(12,12,t.reponse_maj))}}function W(n,a){1&n&&(e.TgZ(0,"div",50)(1,"div",51),e._uU(2," Chargement ... "),e.qZA()())}function K(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"span")(1,"input",62),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(3).masterSelected=o})("change",function(){return e.CHM(t),e.oxw(3).checkUncheckAll()}),e.qZA()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("ngModel",t.masterSelected)}}function z(n,a){if(1&n&&(e.TgZ(0,"th",61),e.YNc(1,K,2,1,"span",1),e.qZA()),2&n){const t=a.ngIf,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",1==t&&r.checkbox)}}function G(n,a){if(1&n&&e._UZ(0,"sb-sort-icon",63),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function X(n,a){if(1&n&&e._UZ(0,"sb-sort-icon",63),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function V(n,a){if(1&n&&e._UZ(0,"sb-sort-icon",63),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function ee(n,a){if(1&n&&e._UZ(0,"sb-sort-icon",63),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function te(n,a){if(1&n&&e._UZ(0,"sb-sort-icon",63),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function ne(n,a){if(1&n&&e._UZ(0,"sb-sort-icon",63),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function re(n,a){if(1&n&&e._UZ(0,"sb-sort-icon",63),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function oe(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.YNc(1,z,2,1,"th",52),e.ALo(2,"async"),e._UZ(3,"th"),e.TgZ(4,"th",53),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(5,"span"),e._uU(6,"Nom"),e.qZA(),e.YNc(7,G,1,1,"sb-sort-icon",54),e.qZA(),e.TgZ(8,"th",55),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(9,"span"),e._uU(10,"Environnement"),e.qZA(),e.YNc(11,X,1,1,"sb-sort-icon",54),e.qZA(),e.TgZ(12,"th",56),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(13,"span"),e._uU(14,"Maj restantes"),e.qZA(),e.YNc(15,V,1,1,"sb-sort-icon",54),e.qZA(),e.TgZ(16,"th",57),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(17,"span"),e._uU(18,"IP"),e.qZA(),e.YNc(19,ee,1,1,"sb-sort-icon",54),e.qZA(),e.TgZ(20,"th",58),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(21,"span"),e._uU(22,"OS"),e.qZA(),e.YNc(23,te,1,1,"sb-sort-icon",54),e.qZA(),e.TgZ(24,"th",59),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(25,"span"),e._uU(26,"Dernier Rapport"),e.qZA(),e.YNc(27,ne,1,1,"sb-sort-icon",54),e.qZA(),e.TgZ(28,"th",60),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(29,"span"),e._uU(30,"Description"),e.qZA(),e.YNc(31,re,1,1,"sb-sort-icon",54),e.qZA(),e._UZ(32,"th"),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,8,t.auth.isAdmin)),e.xp6(6),e.Q6J("ngIf","name"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","type"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","kb_manquantes"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","ip"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","OS"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","date_last_rapport"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","description"===t.sortedColumn)}}function se(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"span")(1,"input",62),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(3).masterSelected=o})("change",function(){return e.CHM(t),e.oxw(3).checkUncheckAll()}),e.qZA()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("ngModel",t.masterSelected)}}function ie(n,a){if(1&n&&(e.TgZ(0,"th",61),e.YNc(1,se,2,1,"span",1),e.qZA()),2&n){const t=a.ngIf,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",1==t&&r.checkbox)}}function ce(n,a){if(1&n&&(e.TgZ(0,"tr"),e.YNc(1,ie,2,1,"th",52),e.ALo(2,"async"),e._UZ(3,"th"),e.TgZ(4,"th",64)(5,"span"),e._uU(6,"Nom"),e.qZA()(),e.TgZ(7,"th",65)(8,"span"),e._uU(9,"Environnement"),e.qZA()(),e.TgZ(10,"th",66)(11,"span"),e._uU(12,"Maj restantes"),e.qZA()(),e.TgZ(13,"th",67)(14,"span"),e._uU(15,"IP"),e.qZA()(),e.TgZ(16,"th",68)(17,"span"),e._uU(18,"OS"),e.qZA()(),e.TgZ(19,"th",69)(20,"span"),e._uU(21,"Dernier Rapport"),e.qZA()(),e.TgZ(22,"th",70)(23,"span"),e._uU(24,"Description"),e.qZA()(),e._UZ(25,"th"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,t.auth.isAdmin))}}function ae(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"input",79),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(2).$implicit.isSelected=o})("change",function(){return e.CHM(t),e.oxw(3).isAllSelected()}),e.qZA()}if(2&n){const t=e.oxw(2).$implicit;e.s9C("id",t.serveur.id),e.s9C("value",t.serveur.fullName),e.Q6J("ngModel",t.isSelected)}}function le(n,a){if(1&n&&(e.TgZ(0,"th",77),e.YNc(1,ae,1,3,"input",78),e.qZA()),2&n){const t=a.ngIf,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",1==t&&r.checkbox)}}const _e=function(){return["fas","exclamation"]};function ue(n,a){1&n&&e._UZ(0,"fa-icon",17),2&n&&e.Q6J("icon",e.DdM(1,_e))}const de=function(){return["fas","ban"]};function pe(n,a){1&n&&(e.TgZ(0,"p",80),e._UZ(1,"fa-icon",17),e._uU(2,"exclu"),e.qZA()),2&n&&(e.xp6(1),e.Q6J("icon",e.DdM(1,de)))}const he=function(n){return{"background-color":n}};function ge(n,a){if(1&n&&(e.TgZ(0,"tr",71),e.YNc(1,le,2,1,"th",72),e.ALo(2,"async"),e.TgZ(3,"td"),e.YNc(4,ue,1,2,"fa-icon",73),e.qZA(),e.TgZ(5,"td",74),e._UZ(6,"ngb-highlight",75),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"ngb-highlight",75),e.qZA(),e.TgZ(9,"td"),e._UZ(10,"ngb-highlight",75),e.ALo(11,"number"),e.qZA(),e.TgZ(12,"td"),e._UZ(13,"ngb-highlight",75),e.qZA(),e.TgZ(14,"td"),e._UZ(15,"ngb-highlight",75),e.qZA(),e.TgZ(16,"td"),e._UZ(17,"ngb-highlight",75),e.qZA(),e.TgZ(18,"td"),e._UZ(19,"ngb-highlight",75),e.qZA(),e.TgZ(20,"td"),e.YNc(21,pe,3,2,"p",76),e.qZA()()),2&n){const t=a.$implicit,r=e.oxw();e.Q6J("ngStyle",e.VKq(22,he,t.serveur.kb_manquantes>=50?"rgba(255, 0, 0,"+t.serveur.kb_manquantes/3+"%)":t.serveur.kb_manquantes>=20&&t.serveur.kb_manquantes<50?"rgba(255, 251, 0, 0.29)":t.serveur.kb_manquantes<20&&t.serveur.kb_manquantes>=1?"rgba(0, 255, 21,0.19)":"rgba(6, 226, 24, 0.4)")),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,18,r.auth.isAdmin)),e.xp6(3),e.Q6J("ngIf",r.getNbrJoursRapport(t.serveur.date_last_rapport)>7),e.xp6(2),e.Q6J("result",t.serveur.name)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.type)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",e.lcZ(11,20,t.serveur.kb_manquantes))("term",r.serveurService.searchTerm),e.xp6(3),e.Q6J("result",t.serveur.ip.split("fe")[0])("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.OS)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.date_last_rapport)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.description)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("ngIf",r.checkExclu(t.serveur))}}function ve(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",81)(1,"ngb-pagination",82),e.NdJ("pageChange",function(o){return e.CHM(t),e.oxw().serveurService.page=o}),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"select",83),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().serveurService.pageSize=o}),e.TgZ(4,"option",84),e._uU(5,"20 objets par page"),e.qZA(),e.TgZ(6,"option",84),e._uU(7,"50 objets par page"),e.qZA(),e.TgZ(8,"option",84),e._uU(9,"Tous"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("collectionSize",e.lcZ(2,8,t.total$)||0)("page",t.serveurService.page)("maxSize",10)("pageSize",t.serveurService.pageSize),e.xp6(2),e.Q6J("ngModel",t.serveurService.pageSize),e.xp6(1),e.Q6J("ngValue",20),e.xp6(2),e.Q6J("ngValue",50),e.xp6(2),e.Q6J("ngValue",-1)}}let me=(()=>{class n{constructor(t,r,o,p,w,N,R){this.exclusionsService=t,this.serveurService=r,this.plannificationService=o,this.calendrierService=p,this.auth=w,this.changeDetectorRef=N,this.modalService=R,this.pageSize=4,this.serveurs_exclu=[],this.searchBar=!0,this.pageBar=!0,this.checkbox=!0,this.sortable=!0,this.reponse_maj=new S.X(""),this.closeResult="",this.horaire_debut="19:00",this.horaire_fin="23:00",this.masterSelected=!1,this.checklist=[],this.checkedList=[]}ngOnInit(){this.exclusionsService.getExclusions().subscribe(t=>{this.serveurs_exclu=t}),null!=this.sort&&this.onSort(this.sort),this.osSelected.subscribe(t=>{this.serveurService.OSSelected=t,null!=t.split("_")[1]&&(this.serveurService.typeselected=t.split("_")[1])}),this.serveurService.pageSize=this.pageSize,this.serveurs$=this.serveurService.serveurs$,this.total$=this.serveurService.total$,this.total_maj$=this.serveurService.total_maj$,this.plannifs$=this.plannificationService.getPlannifications(),this.serveurs$.subscribe(t=>{this.checklist=[],this.masterSelected=!1,t.forEach(r=>{this.checklist.push({serveur:r,isSelected:!1})}),this.getCheckedItemList()})}onSort({column:t,direction:r}){this.sortedColumn=t,this.sortedDirection=r,this.serveurService.sortColumn=t,this.serveurService.sortDirection=r,this.changeDetectorRef.detectChanges()}checkUncheckAll(){console.log("dans checkuncheckAll"),console.log("Taille: "+this.checklist.length);for(var t=0;t<this.checklist.length;t++)this.checklist[t].isSelected=this.masterSelected;this.getCheckedItemList()}isAllSelected(){this.masterSelected=this.checklist.every(function(t){return 1==t.isSelected}),this.getCheckedItemList()}getCheckedItemList(){this.checkedList=[];for(var t=0;t<this.checklist.length;t++)this.checklist[t].isSelected&&this.checkedList.push(this.checklist[t].serveur)}plannification(){this.plannificationService.plannification(this.checkedList,this.auth.user.value.name,this.horaire_debut,this.horaire_fin,this.date_plannif).subscribe(t=>{this.calendrierService.get_calendrier().subscribe(r=>{let o=r.find(p=>p.name.match("Exceptionnel"));if(null!=o){let p=new Date(this.date_plannif.year,this.date_plannif.month-1,this.date_plannif.day);p.setHours(1);let w=new Date(this.date_plannif.year,this.date_plannif.month-1,this.date_plannif.day);w.setHours(6),this.calendrierService.put_dates({title:"Planification Exceptionnel",start:p,resizable:{beforeStart:!0,afterEnd:!0},end:w,color:{primary:o.couleurs.primaire,secondary:o.couleurs.secondaire},actions:[{label:"<small>supprimer</small>",a11yLabel:"Delete",onClick({}){}}]},o._id).subscribe(R=>{this.reponse_maj.next(t)})}})})}getNbrJoursRapport(t){var r=t.split("/"),o=new Date,p=o.getMonth()+1,w=o.getDate(),N=o.getFullYear(),R=new Date(N+"/"+p+"/"+w),H=new Date(r[2]+"/"+r[1]+"/"+r[0]),fe=R.getTime()-H.getTime();return Math.round(fe/864e5)}open(t){this.modalService.open(t,{centered:!0}).result.then(r=>{this.closeResult=`Closed with: ${r}`},r=>{this.closeResult=`Dismissed ${this.getDismissReason(r)}`})}getDismissReason(t){return t===c.If.ESC?"by pressing ESC":t===c.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}count_prod(t){let r=0;return t.plannifs.forEach(o=>{"Production"==o.type&&r++}),r}count_pre(t){let r=0;return t.plannifs.forEach(o=>{"Pre-production"==o.type&&r++}),r}count_rec(t){let r=0;return t.plannifs.forEach(o=>{"Recette-Formation"==o.type&&r++}),r}count_bdd(t){let r=0;return t.plannifs.forEach(o=>{"BDD"==o.type&&r++}),r}count_bdd_rec(t){let r=0;return t.plannifs.forEach(o=>{"BDD-Recette"==o.type&&r++}),r}count_dmz(t){let r=0;return t.plannifs.forEach(o=>{"DMZ"==o.type&&r++}),r}checkExclu(t){return null!=this.serveurs_exclu.find(r=>r.name.match(t.fullName))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.z),e.Y36(d.t),e.Y36(v.n),e.Y36(u.g),e.Y36(g.g),e.Y36(e.sBO),e.Y36(c.FF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["serveur-table"]],viewQuery:function(t,r){if(1&t&&e.Gf(_.Y,5),2&t){let o;e.iGM(o=e.CRH())&&(r.headers=o)}},inputs:{pageSize:"pageSize",sortedColumn:"sortedColumn",osSelected:"osSelected",searchBar:"searchBar",pageBar:"pageBar",checkbox:"checkbox",sortable:"sortable",sort:"sort"},decls:14,vars:8,consts:[["content",""],[4,"ngIf"],["class","progress ml-1",4,"ngIf"],[1,"table-responsive"],[1,"table","table-striped"],[3,"ngStyle",4,"ngFor","ngForOf"],["class","d-flex justify-content-between p-2",4,"ngIf"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"mb-3"],["for","dateOfBirth"],[1,"input-group"],["id","datePlannif","placeholder","yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control",3,"ngModel","ngModelChange"],["dp","ngbDatepicker"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"mr-1",3,"icon"],["type","time","id","appt","name","horaireMaj",1,"form-control",3,"ngModel","value","ngModelChange"],["type","time","id","appt","name","horaireMaj2",1,"form-control",3,"ngModel","value","ngModelChange"],["class","mb-3",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"list-group"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","badge-primary","badge-pill"],[1,"form-group","form-inline"],["type","text","name","searchTerm",1,"form-control","ml-1",3,"ngModel","ngModelChange"],["class","ml-2 btn-toolbar","role","toolbar","aria-label","Toolbar with button groups",4,"ngIf"],["class","ml-3",4,"ngIf"],["class","ml-4",4,"ngIf"],["class","ml-5","id","test",4,"ngIf"],["role","toolbar","aria-label","Toolbar with button groups",1,"ml-2","btn-toolbar"],["role","group","aria-label","First group",1,"btn-group","me-2"],["type","button",1,"btn","btn-outline-info",3,"click"],["class","btn-group me-2 ml-2","role","group","aria-label","Second group",4,"ngIf"],["class","btn-group me-2 ml-2","role","group","aria-label","Third group",4,"ngIf"],["role","group","aria-label","Second group",1,"btn-group","me-2","ml-2"],["type","button",1,"btn","btn-outline-windows",3,"click"],["role","group","aria-label","Third group",1,"btn-group","me-2","ml-2"],["type","button",1,"btn","btn-outline-linux",3,"click"],[1,"ml-3"],[1,"ml-4"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["id","test",1,"ml-5"],["id","rep_ok",4,"ngIf"],["id","rep_error",4,"ngIf"],["id","rep_ok"],["id","rep_error"],[1,"progress","ml-1"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","100%"],["scope","col",4,"ngIf"],["scope","col","sbSortable","name",3,"sort"],[3,"direction",4,"ngIf"],["scope","col","sbSortable","type",3,"sort"],["scope","col","sbSortable","kb_manquantes",3,"sort"],["scope","col","sbSortable","ip",3,"sort"],["scope","col","sbSortable","OS",3,"sort"],["scope","col","sbSortable","date_last_rapport",3,"sort"],["scope","col","sbSortable","description",3,"sort"],["scope","col"],["type","checkbox","id","inlineCheckbox-master","name","master","value","option1",3,"ngModel","ngModelChange","change"],[3,"direction"],["scope","col","sbSortable","name"],["scope","col","sbSortable","type"],["scope","col","sbSortable","kb_manquantes"],["scope","col","sbSortable","ip"],["scope","col","sbSortable","OS"],["scope","col","sbSortable","date_last_rapport"],["scope","col","sbSortable","description"],[3,"ngStyle"],["scope","row",4,"ngIf"],["class","mr-1",3,"icon",4,"ngIf"],[1,"ml-2"],[3,"result","term"],["style","color: red;",4,"ngIf"],["scope","row"],["class","check","type","checkbox","name","list_name",3,"ngModel","id","value","ngModelChange","change",4,"ngIf"],["type","checkbox","name","list_name",1,"check",3,"ngModel","id","value","ngModelChange","change"],[2,"color","red"],[1,"d-flex","justify-content-between","p-2"],[3,"collectionSize","page","maxSize","pageSize","pageChange"],["name","pageSize",1,"custom-select",2,"width","auto",3,"ngModel","ngModelChange"],[3,"ngValue"]],template:function(t,r){1&t&&(e.YNc(0,f,25,10,"ng-template",null,0,e.W1O),e.TgZ(2,"form"),e.YNc(3,q,13,14,"div",1),e.YNc(4,W,3,0,"div",2),e.ALo(5,"async"),e.TgZ(6,"div",3)(7,"table",4)(8,"thead"),e.YNc(9,oe,33,10,"tr",1),e.YNc(10,ce,26,3,"tr",1),e.qZA(),e.TgZ(11,"tbody"),e.YNc(12,ge,22,24,"tr",5),e.qZA()()(),e.YNc(13,ve,10,10,"div",6),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",r.searchBar),e.xp6(1),e.Q6J("ngIf",e.lcZ(5,6,r.serveurService.loading$)),e.xp6(5),e.Q6J("ngIf",r.sortable),e.xp6(1),e.Q6J("ngIf",!r.sortable),e.xp6(2),e.Q6J("ngForOf",r.checklist),e.xp6(1),e.Q6J("ngIf",r.pageBar))},directives:[i._Y,i.JL,i.F,c.J4,i.Fj,i.JJ,i.On,l.BN,C.O5,i.Wl,m.Y,B,C.sg,C.PC,c._h,c.N9,i.EJ,i.YN,i.Kr],pipes:[C.Ov,C.JJ],styles:["thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{cursor:pointer}tr[_ngcontent-%COMP%]{line-height:auto;min-height:8px}button[_ngcontent-%COMP%]:focus{color:#fff;background-color:#17a2b8;box-shadow:none}button[_ngcontent-%COMP%]{border:.5px solid #17a2b8!important}#rep_ok[_ngcontent-%COMP%]{color:green}#rep_error[_ngcontent-%COMP%]{color:red}.btn-outline-linux[_ngcontent-%COMP%]{border-color:#7164a2;color:#7164a2}.btn-outline-linux[_ngcontent-%COMP%]:not(:disabled){background-color:#7164a2}.btn-outline-linux[_ngcontent-%COMP%]:not(:active), .btn-outline-linux[_ngcontent-%COMP%]:disabled, .btn-outline-linux.disabled[_ngcontent-%COMP%]{background-color:#7164a2;color:#fff}.btn-outline-windows[_ngcontent-%COMP%]{border-color:#3500f3;color:#3500f3}.btn-outline-windows[_ngcontent-%COMP%]:not(:disabled){background-color:#3500f3}.btn-outline-windows[_ngcontent-%COMP%]:not(:active), .btn-outline-windows[_ngcontent-%COMP%]:disabled, .btn-outline-windows.disabled[_ngcontent-%COMP%]{background-color:#3500f3;color:#fff}"],changeDetection:0}),n})()},4397:(y,b,s)=>{s.d(b,{m:()=>i});var _=s(1135),c=s(5e3),S=s(3154),e=s(6952),h=s(5212),d=s(6333),v=s(9808),u=s(996);function g(l,C){if(1&l&&(c.TgZ(0,"div"),c._uU(1),c.qZA()),2&l){const m=C.ngIf;c.xp6(1),c.hij("La liste des serveurs est mise \xe0 jour \xe0 ",m,"h")}}let i=(()=>{class l{constructor(m,T){this.horaireMajService=m,this.route=T,this.horaireMaj=new _.X(""),this.osSelect=new _.X("All")}ngOnInit(){this.horaireMajService.getHoraireMaj().subscribe(m=>{this.horaireMaj.next(m)}),this.route.params.subscribe(m=>{null!=m.OSSelected&&this.osSelect.next(m.OSSelected)})}}return l.\u0275fac=function(m){return new(m||l)(c.Y36(S.w),c.Y36(e.gz))},l.\u0275cmp=c.Xpm({type:l,selectors:[["app-serveurs"]],decls:9,vars:6,consts:[[3,"hideBreadcrumbs"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[4,"ngIf"],[1,"card-body"],[3,"pageSize","osSelected"]],template:function(m,T){1&m&&(c._UZ(0,"sb-dashboard-head",0),c.TgZ(1,"sb-card")(2,"div",1)(3,"div"),c._uU(4,"Serveurs Alco"),c.qZA(),c.YNc(5,g,2,1,"div",2),c.ALo(6,"async"),c.qZA(),c.TgZ(7,"div",3),c._UZ(8,"serveur-table",4),c.qZA()()),2&m&&(c.Q6J("hideBreadcrumbs",!1),c.xp6(5),c.Q6J("ngIf",c.lcZ(6,4,T.horaireMaj)),c.xp6(3),c.Q6J("pageSize",20)("osSelected",T.osSelect))},directives:[h.T,d.A,v.O5,u.m],pipes:[v.Ov],styles:["#header-serveurs[_ngcontent-%COMP%]{display:flex}"]}),l})()},3158:(y,b,s)=>{s.d(b,{$:()=>c,Y:()=>_.Y});var _=s(1938);const c=[_.Y]},1938:(y,b,s)=>{s.d(b,{Y:()=>S});var _=s(5e3);const c={asc:"desc",desc:"","":"asc"};let S=(()=>{class e{constructor(){this.direction="",this.sort=new _.vpe}get isAscending(){return"asc"===this.direction}get isDescending(){return"desc"===this.direction}rotate(){this.direction=c[this.direction],this.sort.emit({column:this.sbSortable,direction:this.direction})}}return e.\u0275fac=function(d){return new(d||e)},e.\u0275dir=_.lG2({type:e,selectors:[["th","sbSortable",""]],hostVars:4,hostBindings:function(d,v){1&d&&_.NdJ("click",function(){return v.rotate()}),2&d&&_.ekj("asc",v.isAscending)("desc",v.isDescending)},inputs:{sbSortable:"sbSortable",direction:"direction"},outputs:{sort:"sort"}}),e})()},6440:(y,b,s)=>{s.d(b,{J:()=>C});var _=s(9808),c=s(6952),S=s(2382),e=s(2539),h=s(5592),d=s(3158),v=s(3305),u=s(5e3);s(4397),s(996),s(1938);let C=(()=>{class m{}return m.\u0275fac=function(M){return new(M||m)},m.\u0275mod=u.oAB({type:m}),m.\u0275inj=u.cJS({providers:[_.JJ,...v.u,...d.$],imports:[[_.ez,c.Bz,S.UX,S.u5,e.n,h.A]]}),m})()},3305:(y,b,s)=>{s.d(b,{t:()=>k,u:()=>B});var _=s(520),c=s(1135),S=s(7579),e=s(9646),h=s(8505),d=s(8372),v=s(3900),u=s(4825),g=s(1438),i=s(5e3),l=s(9808);const C={headers:new _.WM({"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};function m(x,Z){return x<Z?-1:x>Z?1:0}let k=(()=>{class x{constructor(f,O){this.pipe=f,this.http=O,this._loading$=new c.X(!0),this._search$=new S.x,this._mesServ$=new c.X([]),this._serveurs$=new c.X([]),this._total$=new c.X(0),this._total_maj$=new c.X(0),this.baseURL="https://"+g.F+"/",this._state={page:1,pageSize:20,searchTerm:"",sortColumn:"",sortDirection:"",typeSelected:"Tous",OSSelected:"Alco_Windows"},this._search$.pipe((0,h.b)(()=>this._loading$.next(!0)),(0,d.b)(120),(0,v.w)(()=>this.get_serveurs()),(0,u.g)(120),(0,h.b)(()=>this._loading$.next(!1))).subscribe(E=>{this._mesServ$.next(E)}),this._mesServ$.pipe((0,h.b)(()=>this._loading$.next(!0)),(0,d.b)(120),(0,v.w)(E=>this._search(E)),(0,u.g)(120),(0,h.b)(()=>this._loading$.next(!1))).subscribe(E=>{this._serveurs$.next(E.serveurs),this._total$.next(E.total),this._total_maj$.next(E.total_maj)}),this._search$.next()}get messerveurs$(){return this._mesServ$.asObservable()}get serveurs$(){return this._serveurs$.asObservable()}get total$(){return this._total$.asObservable()}get total_maj$(){return this._total_maj$.asObservable()}get loading$(){return this._loading$.asObservable()}get page(){return this._state.page}set page(f){this._set({page:f})}get pageSize(){return this._state.pageSize}set pageSize(f){this._set({pageSize:f})}get typeselected(){return this._state.typeSelected}set typeselected(f){this._set({typeSelected:f})}get searchTerm(){return this._state.searchTerm}set searchTerm(f){this._set({searchTerm:f})}set sortColumn(f){this._set({sortColumn:f})}set sortDirection(f){this._set({sortDirection:f})}set OSSelected(f){this._set({OSSelected:f})}_set(f){Object.assign(this._state,f),this._search$.next()}_search(f){const{sortColumn:O,sortDirection:E,pageSize:D,page:U,searchTerm:L,typeSelected:P}=this._state;let A=function T(x,Z,f){return""===f?x:[...x].sort((O,E)=>{var D=null;if("date_last_rapport"==Z){let U=O[Z].split("/"),L=new Date(U[2]+"/"+U[1]+"/"+U[0]),P=E[Z].split("/");D=m(L,new Date(P[2]+"/"+P[1]+"/"+P[0]))}else D=m(O[Z],E[Z]);return"asc"===f?D:-D})}(f,O,E);A=A.filter(J=>function I(x,Z,f){return x.name.toLowerCase().includes(Z.toLowerCase())||x.type.toLowerCase().includes(Z.toLowerCase())||x.ip.toLowerCase().includes(Z.toLowerCase())||x.OS.toLowerCase().includes(Z.toLowerCase())||x.description.toLowerCase().includes(Z.toLowerCase())||f.transform(x.kb_manquantes).includes(Z)||x.date_last_rapport.toLowerCase().includes(Z.toLowerCase())}(J,L,this.pipe)),A=A.filter(J=>function M(x,Z){return"Tous"==Z||x.type==Z||x.os_quick.toLocaleLowerCase().includes(Z.toLocaleLowerCase())}(J,P));const Y=A.length;let Q=0;return A.forEach(J=>{Q+=J.kb_manquantes}),A=A.slice((U-1)*D,(U-1)*D+D),(0,e.of)({serveurs:A,total:Y,total_maj:Q})}get_serveurs(){try{return this.http.get(this.baseURL+"servNode/serveurs/"+this._state.OSSelected,C)}catch(f){throw{msg:"Erreur get_serveurs(): "+f}}}}return x.\u0275fac=function(f){return new(f||x)(i.LFG(l.JJ),i.LFG(_.eN))},x.\u0275prov=i.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),x})();const B=[k]},8372:(y,b,s)=>{s.d(b,{b:()=>e});var _=s(4986),c=s(4482),S=s(5403);function e(h,d=_.z){return(0,c.e)((v,u)=>{let g=null,i=null,l=null;const C=()=>{if(g){g.unsubscribe(),g=null;const T=i;i=null,u.next(T)}};function m(){const T=l+h,M=d.now();if(M<T)return g=this.schedule(void 0,T-M),void u.add(g);C()}v.subscribe((0,S.x)(u,T=>{i=T,l=d.now(),g||(g=d.schedule(m,h),u.add(g))},()=>{C(),u.complete()},void 0,()=>{i=g=null}))})}}}]);