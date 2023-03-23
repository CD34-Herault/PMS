"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[440],{6333:(E,b,s)=>{s.d(b,{A:()=>d});var _=s(5e3),i=s(9808);const f=[[["",8,"card-header"]],[["",8,"card-body"]],[["",8,"card-footer"]]],e=[".card-header",".card-body",".card-footer"];let d=(()=>{class u{constructor(){this.customClasses=[]}ngOnInit(){this.background&&this.customClasses.push(this.background),this.color&&this.customClasses.push(this.color)}}return u.\u0275fac=function(l){return new(l||u)},u.\u0275cmp=_.Xpm({type:u,selectors:[["sb-card"]],inputs:{background:"background",color:"color"},ngContentSelectors:e,decls:4,vars:1,consts:[[1,"card","mb-4",3,"ngClass"]],template:function(l,a){1&l&&(_.F$t(f),_.TgZ(0,"div",0),_.Hsn(1),_.Hsn(2,1),_.Hsn(3,2),_.qZA()),2&l&&_.Q6J("ngClass",a.customClasses)},directives:[i.mk],styles:[""],changeDetection:0}),u})()},9524:(E,b,s)=>{s.d(b,{z:()=>e,u:()=>d});var _=s(520),i=s(5e3);const f={headers:new _.WM({"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let e=(()=>{class u{constructor(l){this.http=l,this.baseURL="https://pms.it.herault.fr/"}ajout(l,a){try{return this.http.put(a.length<=2?this.baseURL+"servNode/exclusions_add/0":this.baseURL+"servNode/exclusions_add/"+a,JSON.stringify(l),f)}catch(x){throw{msg:"Erreur envoie des exclusions: "+x}}}getExclusions(){try{return this.http.get(this.baseURL+"servNode/exclusions",f)}catch(l){throw{msg:"Erreur r\xe9cup\xe9ration des exclusions: "+l}}}deleteExclusions(l,a,x){try{return this.http.delete(x.length<=2?this.baseURL+"servNode/exclusions_delete/"+l+"/"+a+"/0":this.baseURL+"servNode/exclusions_delete/"+l+"/"+a+"/"+x,f)}catch(h){throw{msg:"Erreur supression des exclusions: "+h}}}}return u.\u0275fac=function(l){return new(l||u)(i.LFG(_.eN))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})();const d=[e]},3154:(E,b,s)=>{s.d(b,{w:()=>e});var _=s(520),i=s(5e3);const f={headers:new _.WM({"Access-Control-Allow-Methods":"GET,POST,PUT","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let e=(()=>{class d{constructor(p){this.http=p,this.baseURL="https://pms.it.herault.fr/"}getHoraireMaj(){try{return this.http.get(this.baseURL+"servNode/config_serveur_horaire_maj",f)}catch(p){throw{msg:p}}}}return d.\u0275fac=function(p){return new(p||d)(i.LFG(_.eN))},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},984:(E,b,s)=>{s.d(b,{n:()=>u});var _=s(9808),i=s(520),f=s(5e3),e=s(4667);const d={headers:new i.WM({"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let u=(()=>{class p{constructor(a,x){this.authService=a,this.http=x,this.baseURL="https://pms.it.herault.fr/",this.plannif={date_plannif:(0,_.p6)(new Date,"dd/MM/yyyy","en"),user:"",plannifs:[],_id:void 0}}plannification(a,x,h){try{return this.plannif.plannifs=a,this.plannif.user=x,null!=h&&(this.plannif.date_plannif=h.day+"/"+h.month+"/"+h.year),this.http.put(this.baseURL+"servNode/plannificationExceptionnel_add",JSON.stringify(this.plannif),d)}catch(T){throw{msg:"Erreur plannification() "+T}}}getPlannifications(){try{return this.http.get(this.baseURL+"servNode/plannificationExceptionnel",d)}catch(a){throw{msg:"Erreur r\xe9cup\xe9ration des plannifs: "+a}}}supressionPlannification(a){try{return this.http.delete(this.baseURL+"servNode/deletePlannificationExceptionnel/"+a,d)}catch(x){throw{msg:"Erreur supression plannif: "+x}}}modificationPlannification(a,x,h,T){try{return this.plannif.plannifs=x,this.plannif.user=h,null!=T&&(this.plannif.date_plannif=T.day+"/"+T.month+"/"+T.year),this.http.put(this.baseURL+"servNode/PlannificationExceptionnel_modify/"+a,JSON.stringify(this.plannif),d)}catch(m){throw{msg:"Erreur modification Plannification: "+m}}}}return p.\u0275fac=function(a){return new(a||p)(f.LFG(e.g),f.LFG(i.eN))},p.\u0275prov=f.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},996:(E,b,s)=>{s.d(b,{m:()=>de});var _=s(3158),i=s(7751),f=s(1135),e=s(5e3),d=s(9524),u=s(3305),p=s(984),l=s(4667),a=s(2382),x=s(9444),h=s(9808),T=s(1938);const m=function(){return["fas","chevron-up"]};function Z(n,c){1&n&&(e.ynx(0),e._UZ(1,"fa-icon",1),e.BQk()),2&n&&(e.xp6(1),e.Q6J("icon",e.DdM(1,m)))}const D=function(){return["fas","chevron-down"]};function L(n,c){1&n&&(e.ynx(0),e._UZ(1,"fa-icon",1),e.BQk()),2&n&&(e.xp6(1),e.Q6J("icon",e.DdM(1,D)))}let k=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sb-sort-icon"]],inputs:{direction:"direction"},decls:2,vars:2,consts:[[4,"ngIf"],[1,"sort-icon",3,"icon"]],template:function(t,r){1&t&&(e.YNc(0,Z,2,2,"ng-container",0),e.YNc(1,L,2,2,"ng-container",0)),2&t&&(e.Q6J("ngIf","asc"===r.direction),e.xp6(1),e.Q6J("ngIf","desc"===r.direction))},directives:[h.O5,x.BN],styles:[".sort-icon[_ngcontent-%COMP%]{height:.9rem;width:.9rem;margin-left:.25rem;margin-top:-.125rem;vertical-align:middle}"],changeDetection:0}),n})();function S(n,c){if(1&n&&(e.TgZ(0,"div",11)(1,"label",12),e._uU(2),e.qZA(),e.TgZ(3,"ul",21)(4,"li",22),e._uU(5," Serveur PROD "),e.TgZ(6,"span",23),e._uU(7),e.qZA()(),e.TgZ(8,"li",22),e._uU(9," Serveur Pre-Prod "),e.TgZ(10,"span",23),e._uU(11),e.qZA()(),e.TgZ(12,"li",22),e._uU(13," Serveur Rec-Form "),e.TgZ(14,"span",23),e._uU(15),e.qZA()(),e.TgZ(16,"li",22),e._uU(17," Serveur BDD "),e.TgZ(18,"span",23),e._uU(19),e.qZA()(),e.TgZ(20,"li",22),e._uU(21," Serveur BDD-Rec "),e.TgZ(22,"span",23),e._uU(23),e.qZA()(),e.TgZ(24,"li",22),e._uU(25," Serveur DMZ "),e.TgZ(26,"span",23),e._uU(27),e.qZA()()()()),2&n){const t=c.ngIf,r=e.oxw(2);e.xp6(2),e.AsE("Derni\xe8re Plannification le ",t[t.length-1].date_plannif," par ",t[t.length-1].user,": "),e.xp6(5),e.Oqu(r.count_prod(t[t.length-1])),e.xp6(4),e.Oqu(r.count_pre(t[t.length-1])),e.xp6(4),e.Oqu(r.count_rec(t[t.length-1])),e.xp6(4),e.Oqu(r.count_bdd(t[t.length-1])),e.xp6(4),e.Oqu(r.count_bdd_rec(t[t.length-1])),e.xp6(4),e.Oqu(r.count_dmz(t[t.length-1]))}}const C=function(){return["fas","table"]};function g(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",7)(1,"h4",8),e._uU(2,"Plannification Exceptionnel"),e.qZA(),e.TgZ(3,"button",9),e.NdJ("click",function(){return e.CHM(t).$implicit.dismiss("Cross click")}),e.qZA()(),e.TgZ(4,"div",10)(5,"form")(6,"div",11)(7,"label",12),e._uU(8,"Date de plannification"),e.qZA(),e.TgZ(9,"div",13)(10,"input",14,15),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().date_plannif=o}),e.qZA(),e.TgZ(12,"button",16),e.NdJ("click",function(){return e.CHM(t),e.MAs(11).toggle()}),e._UZ(13,"fa-icon",17),e.qZA()()(),e.YNc(14,S,28,8,"div",18),e.ALo(15,"async"),e.qZA()(),e.TgZ(16,"div",19)(17,"button",20),e.NdJ("click",function(){const v=e.CHM(t).$implicit,I=e.oxw();return v.close("Save click"),I.plannification()}),e._uU(18,"Plannifier"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(10),e.Q6J("ngModel",t.date_plannif),e.xp6(3),e.Q6J("icon",e.DdM(5,C)),e.xp6(1),e.Q6J("ngIf",e.lcZ(15,3,t.plannifs$))}}const y=function(){return["fab","windows"]};function M(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",35)(1,"button",36),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="windows"}),e._UZ(2,"fa-icon",17),e._uU(3,"Windows"),e.qZA(),e.TgZ(4,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="Production"}),e._uU(5,"Prod"),e.qZA(),e.TgZ(6,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="Pre-production"}),e._uU(7,"Pre-Prod"),e.qZA(),e.TgZ(8,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="Recette-Formation"}),e._uU(9,"Rec-Form"),e.qZA(),e.TgZ(10,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD"}),e._uU(11,"BDD"),e.qZA(),e.TgZ(12,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD-Recette"}),e._uU(13,"BDD-Rec"),e.qZA(),e.TgZ(14,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="DMZ"}),e._uU(15,"DMZ"),e.qZA()()}2&n&&(e.xp6(2),e.Q6J("icon",e.DdM(1,y)))}const O=function(){return["fab","linux"]};function U(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",37)(1,"button",38),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="linux"}),e._UZ(2,"fa-icon",17),e._uU(3,"Linux"),e.qZA(),e.TgZ(4,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD-PRODPRE"}),e._uU(5,"BDD-ProPre"),e.qZA(),e.TgZ(6,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD-RECFOR"}),e._uU(7,"BDD-RECFOR"),e.qZA(),e.TgZ(8,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="PROD-PRE"}),e._uU(9,"PROD-PRE"),e.qZA(),e.TgZ(10,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="REC-FOR"}),e._uU(11,"REC-FOR"),e.qZA()()}2&n&&(e.xp6(2),e.Q6J("icon",e.DdM(1,O)))}function J(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",30)(1,"div",31)(2,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).serveurService.typeselected="Tous"}),e._uU(3,"Tous"),e.qZA()(),e.YNc(4,M,16,2,"div",33),e.YNc(5,U,12,2,"div",34),e.qZA()}if(2&n){const t=c.ngIf;e.xp6(4),e.Q6J("ngIf","Alco_Windows"==t),e.xp6(1),e.Q6J("ngIf","Alco_Linux"==t)}}function w(n,c){if(1&n&&(e.TgZ(0,"span",39),e._uU(1),e.ALo(2,"async"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("Total: ",e.lcZ(2,1,t.serveurService.total$),"")}}function A(n,c){if(1&n&&(e.TgZ(0,"span",39),e._uU(1),e.ALo(2,"async"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("Maj n\xe9cessaire: ",e.lcZ(2,1,t.serveurService.total_maj$),"")}}function R(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"button",42),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3),v=e.MAs(1);return o.open(v)}),e._uU(1,"Mettre \xe0 jour"),e.qZA()}}function N(n,c){if(1&n&&(e.TgZ(0,"div",40),e.YNc(1,R,2,0,"button",41),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.auth.isAdmin)}}function P(n,c){if(1&n&&(e.TgZ(0,"span",46),e._uU(1),e.qZA()),2&n){const t=e.oxw().ngIf;e.xp6(1),e.Oqu(t)}}function B(n,c){if(1&n&&(e.TgZ(0,"span",47),e._uU(1),e.qZA()),2&n){const t=e.oxw().ngIf;e.xp6(1),e.Oqu(t)}}function Y(n,c){if(1&n&&(e.TgZ(0,"div",43),e.YNc(1,P,2,1,"span",44),e.YNc(2,B,2,1,"span",45),e.qZA()),2&n){const t=c.ngIf;e.xp6(1),e.Q6J("ngIf","Ajout OK"==t),e.xp6(1),e.Q6J("ngIf","Ajout OK"!=t)}}function q(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",24),e._uU(2,"Recherche: "),e.TgZ(3,"input",25),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().serveurService.searchTerm=o}),e.qZA(),e.YNc(4,J,6,2,"div",26),e.ALo(5,"async"),e.YNc(6,w,3,3,"span",27),e.ALo(7,"async"),e.YNc(8,A,3,3,"span",27),e.ALo(9,"async"),e.YNc(10,N,2,1,"div",28),e.YNc(11,Y,3,2,"div",29),e.ALo(12,"async"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.serveurService.searchTerm),e.xp6(1),e.Q6J("ngIf",e.lcZ(5,6,t.osSelected)),e.xp6(2),e.Q6J("ngIf",e.lcZ(7,8,t.serveurService.total$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,10,t.serveurService.total_maj$)),e.xp6(2),e.Q6J("ngIf",t.checkedList.length>0),e.xp6(1),e.Q6J("ngIf",e.lcZ(12,12,t.reponse_maj))}}function j(n,c){1&n&&(e.TgZ(0,"div",48)(1,"div",49),e._uU(2," Chargement ... "),e.qZA()())}function $(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"span")(1,"input",60),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(3).masterSelected=o})("change",function(){return e.CHM(t),e.oxw(3).checkUncheckAll()}),e.qZA()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("ngModel",t.masterSelected)}}function H(n,c){if(1&n&&(e.TgZ(0,"th",59),e.YNc(1,$,2,1,"span",1),e.qZA()),2&n){const t=c.ngIf,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",1==t&&r.checkbox)}}function F(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function W(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function K(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function z(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function G(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function X(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function V(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function ee(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.YNc(1,H,2,1,"th",50),e.ALo(2,"async"),e._UZ(3,"th"),e.TgZ(4,"th",51),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(5,"span"),e._uU(6,"Nom"),e.qZA(),e.YNc(7,F,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(8,"th",53),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(9,"span"),e._uU(10,"Environnement"),e.qZA(),e.YNc(11,W,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(12,"th",54),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(13,"span"),e._uU(14,"Maj restantes"),e.qZA(),e.YNc(15,K,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(16,"th",55),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(17,"span"),e._uU(18,"IP"),e.qZA(),e.YNc(19,z,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(20,"th",56),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(21,"span"),e._uU(22,"OS"),e.qZA(),e.YNc(23,G,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(24,"th",57),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(25,"span"),e._uU(26,"Dernier Rapport"),e.qZA(),e.YNc(27,X,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(28,"th",58),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(29,"span"),e._uU(30,"Description"),e.qZA(),e.YNc(31,V,1,1,"sb-sort-icon",52),e.qZA(),e._UZ(32,"th"),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,8,t.auth.isAdmin)),e.xp6(6),e.Q6J("ngIf","name"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","type"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","kb_manquantes"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","ip"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","OS"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","date_last_rapport"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","description"===t.sortedColumn)}}function te(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"span")(1,"input",60),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(3).masterSelected=o})("change",function(){return e.CHM(t),e.oxw(3).checkUncheckAll()}),e.qZA()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("ngModel",t.masterSelected)}}function ne(n,c){if(1&n&&(e.TgZ(0,"th",59),e.YNc(1,te,2,1,"span",1),e.qZA()),2&n){const t=c.ngIf,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",1==t&&r.checkbox)}}function re(n,c){if(1&n&&(e.TgZ(0,"tr"),e.YNc(1,ne,2,1,"th",50),e.ALo(2,"async"),e._UZ(3,"th"),e.TgZ(4,"th",62)(5,"span"),e._uU(6,"Nom"),e.qZA()(),e.TgZ(7,"th",63)(8,"span"),e._uU(9,"Environnement"),e.qZA()(),e.TgZ(10,"th",64)(11,"span"),e._uU(12,"Maj restantes"),e.qZA()(),e.TgZ(13,"th",65)(14,"span"),e._uU(15,"IP"),e.qZA()(),e.TgZ(16,"th",66)(17,"span"),e._uU(18,"OS"),e.qZA()(),e.TgZ(19,"th",67)(20,"span"),e._uU(21,"Dernier Rapport"),e.qZA()(),e.TgZ(22,"th",68)(23,"span"),e._uU(24,"Description"),e.qZA()(),e._UZ(25,"th"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,t.auth.isAdmin))}}function oe(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"input",77),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(2).$implicit.isSelected=o})("change",function(){return e.CHM(t),e.oxw(3).isAllSelected()}),e.qZA()}if(2&n){const t=e.oxw(2).$implicit;e.s9C("id",t.serveur.id),e.s9C("value",t.serveur.fullName),e.Q6J("ngModel",t.isSelected)}}function se(n,c){if(1&n&&(e.TgZ(0,"th",75),e.YNc(1,oe,1,3,"input",76),e.qZA()),2&n){const t=c.ngIf,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",1==t&&r.checkbox)}}const ie=function(){return["fas","exclamation"]};function ce(n,c){1&n&&e._UZ(0,"fa-icon",17),2&n&&e.Q6J("icon",e.DdM(1,ie))}const ae=function(){return["fas","ban"]};function _e(n,c){1&n&&(e.TgZ(0,"p",78),e._UZ(1,"fa-icon",17),e._uU(2,"exclu"),e.qZA()),2&n&&(e.xp6(1),e.Q6J("icon",e.DdM(1,ae)))}const le=function(n){return{"background-color":n}};function ue(n,c){if(1&n&&(e.TgZ(0,"tr",69),e.YNc(1,se,2,1,"th",70),e.ALo(2,"async"),e.TgZ(3,"td"),e.YNc(4,ce,1,2,"fa-icon",71),e.qZA(),e.TgZ(5,"td",72),e._UZ(6,"ngb-highlight",73),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"ngb-highlight",73),e.qZA(),e.TgZ(9,"td"),e._UZ(10,"ngb-highlight",73),e.ALo(11,"number"),e.qZA(),e.TgZ(12,"td"),e._UZ(13,"ngb-highlight",73),e.qZA(),e.TgZ(14,"td"),e._UZ(15,"ngb-highlight",73),e.qZA(),e.TgZ(16,"td"),e._UZ(17,"ngb-highlight",73),e.qZA(),e.TgZ(18,"td"),e._UZ(19,"ngb-highlight",73),e.qZA(),e.TgZ(20,"td"),e.YNc(21,_e,3,2,"p",74),e.qZA()()),2&n){const t=c.$implicit,r=e.oxw();e.Q6J("ngStyle",e.VKq(22,le,t.serveur.kb_manquantes>=50?"rgba(255, 0, 0,"+t.serveur.kb_manquantes/3+"%)":t.serveur.kb_manquantes>=20&&t.serveur.kb_manquantes<50?"rgba(255, 251, 0, 0.29)":t.serveur.kb_manquantes<20&&t.serveur.kb_manquantes>=1?"rgba(0, 255, 21,0.19)":"rgba(6, 226, 24, 0.4)")),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,18,r.auth.isAdmin)),e.xp6(3),e.Q6J("ngIf",r.getNbrJoursRapport(t.serveur.date_last_rapport)>7),e.xp6(2),e.Q6J("result",t.serveur.name)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.type)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",e.lcZ(11,20,t.serveur.kb_manquantes))("term",r.serveurService.searchTerm),e.xp6(3),e.Q6J("result",t.serveur.ip.split("fe")[0])("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.OS)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.date_last_rapport)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.description)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("ngIf",r.checkExclu(t.serveur))}}function pe(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",79)(1,"ngb-pagination",80),e.NdJ("pageChange",function(o){return e.CHM(t),e.oxw().serveurService.page=o}),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"select",81),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().serveurService.pageSize=o}),e.TgZ(4,"option",82),e._uU(5,"20 objets par page"),e.qZA(),e.TgZ(6,"option",82),e._uU(7,"50 objets par page"),e.qZA(),e.TgZ(8,"option",82),e._uU(9,"Tous"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("collectionSize",e.lcZ(2,8,t.total$)||0)("page",t.serveurService.page)("maxSize",10)("pageSize",t.serveurService.pageSize),e.xp6(2),e.Q6J("ngModel",t.serveurService.pageSize),e.xp6(1),e.Q6J("ngValue",20),e.xp6(2),e.Q6J("ngValue",50),e.xp6(2),e.Q6J("ngValue",-1)}}let de=(()=>{class n{constructor(t,r,o,v,I,Q){this.exclusionsService=t,this.serveurService=r,this.plannificationService=o,this.auth=v,this.changeDetectorRef=I,this.modalService=Q,this.pageSize=4,this.searchBar=!0,this.pageBar=!0,this.checkbox=!0,this.sortable=!0,this.reponse_maj=new f.X(""),this.closeResult="",this.masterSelected=!1,this.checklist=[],this.checkedList=[]}ngOnInit(){this.exclusionsService.getExclusions().subscribe(t=>{this.serveurs_exclu=t}),null!=this.sort&&this.onSort(this.sort),this.osSelected.subscribe(t=>{this.serveurService.OSSelected=t,null!=t.split("_")[1]&&(this.serveurService.typeselected=t.split("_")[1])}),this.serveurService.pageSize=this.pageSize,this.serveurs$=this.serveurService.serveurs$,this.total$=this.serveurService.total$,this.total_maj$=this.serveurService.total_maj$,this.plannifs$=this.plannificationService.getPlannifications(),this.serveurs$.subscribe(t=>{this.checklist=[],this.masterSelected=!1,t.forEach(r=>{this.checklist.push({serveur:r,isSelected:!1})}),this.getCheckedItemList()})}onSort({column:t,direction:r}){this.sortedColumn=t,this.sortedDirection=r,this.serveurService.sortColumn=t,this.serveurService.sortDirection=r,this.changeDetectorRef.detectChanges()}checkUncheckAll(){console.log("dans checkuncheckAll"),console.log("Taille: "+this.checklist.length);for(var t=0;t<this.checklist.length;t++)this.checklist[t].isSelected=this.masterSelected;this.getCheckedItemList()}isAllSelected(){this.masterSelected=this.checklist.every(function(t){return 1==t.isSelected}),this.getCheckedItemList()}getCheckedItemList(){this.checkedList=[];for(var t=0;t<this.checklist.length;t++)this.checklist[t].isSelected&&this.checkedList.push(this.checklist[t].serveur)}plannification(){this.plannificationService.plannification(this.checkedList,this.auth.user.value.name,this.date_plannif).subscribe(t=>{this.reponse_maj.next(t)})}getNbrJoursRapport(t){var r=t.split("/"),o=new Date,v=o.getMonth()+1,I=o.getDate(),Q=o.getFullYear(),he=new Date(Q+"/"+v+"/"+I),ge=new Date(r[2]+"/"+r[1]+"/"+r[0]),ve=he.getTime()-ge.getTime();return Math.round(ve/864e5)}open(t){this.modalService.open(t,{centered:!0}).result.then(r=>{this.closeResult=`Closed with: ${r}`},r=>{this.closeResult=`Dismissed ${this.getDismissReason(r)}`})}getDismissReason(t){return t===i.If.ESC?"by pressing ESC":t===i.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}count_prod(t){let r=0;return t.plannifs.forEach(o=>{"Production"==o.type&&r++}),r}count_pre(t){let r=0;return t.plannifs.forEach(o=>{"Pre-production"==o.type&&r++}),r}count_rec(t){let r=0;return t.plannifs.forEach(o=>{"Recette-Formation"==o.type&&r++}),r}count_bdd(t){let r=0;return t.plannifs.forEach(o=>{"BDD"==o.type&&r++}),r}count_bdd_rec(t){let r=0;return t.plannifs.forEach(o=>{"BDD-Recette"==o.type&&r++}),r}count_dmz(t){let r=0;return t.plannifs.forEach(o=>{"DMZ"==o.type&&r++}),r}checkExclu(t){return null!=this.serveurs_exclu.find(r=>r.name.match(t.fullName))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.z),e.Y36(u.t),e.Y36(p.n),e.Y36(l.g),e.Y36(e.sBO),e.Y36(i.FF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["serveur-table"]],viewQuery:function(t,r){if(1&t&&e.Gf(_.Y,5),2&t){let o;e.iGM(o=e.CRH())&&(r.headers=o)}},inputs:{pageSize:"pageSize",sortedColumn:"sortedColumn",osSelected:"osSelected",searchBar:"searchBar",pageBar:"pageBar",checkbox:"checkbox",sortable:"sortable",sort:"sort"},decls:14,vars:8,consts:[["content",""],[4,"ngIf"],["class","progress ml-1",4,"ngIf"],[1,"table-responsive"],[1,"table","table-striped"],[3,"ngStyle",4,"ngFor","ngForOf"],["class","d-flex justify-content-between p-2",4,"ngIf"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"mb-3"],["for","dateOfBirth"],[1,"input-group"],["id","datePlannif","placeholder","yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control",3,"ngModel","ngModelChange"],["dp","ngbDatepicker"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"mr-1",3,"icon"],["class","mb-3",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"list-group"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","badge-primary","badge-pill"],[1,"form-group","form-inline"],["type","text","name","searchTerm",1,"form-control","ml-1",3,"ngModel","ngModelChange"],["class","ml-2 btn-toolbar","role","toolbar","aria-label","Toolbar with button groups",4,"ngIf"],["class","ml-3",4,"ngIf"],["class","ml-4",4,"ngIf"],["class","ml-5","id","test",4,"ngIf"],["role","toolbar","aria-label","Toolbar with button groups",1,"ml-2","btn-toolbar"],["role","group","aria-label","First group",1,"btn-group","me-2"],["type","button",1,"btn","btn-outline-info",3,"click"],["class","btn-group me-2 ml-2","role","group","aria-label","Second group",4,"ngIf"],["class","btn-group me-2 ml-2","role","group","aria-label","Third group",4,"ngIf"],["role","group","aria-label","Second group",1,"btn-group","me-2","ml-2"],["type","button",1,"btn","btn-outline-windows",3,"click"],["role","group","aria-label","Third group",1,"btn-group","me-2","ml-2"],["type","button",1,"btn","btn-outline-linux",3,"click"],[1,"ml-3"],[1,"ml-4"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["id","test",1,"ml-5"],["id","rep_ok",4,"ngIf"],["id","rep_error",4,"ngIf"],["id","rep_ok"],["id","rep_error"],[1,"progress","ml-1"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","100%"],["scope","col",4,"ngIf"],["scope","col","sbSortable","name",3,"sort"],[3,"direction",4,"ngIf"],["scope","col","sbSortable","type",3,"sort"],["scope","col","sbSortable","kb_manquantes",3,"sort"],["scope","col","sbSortable","ip",3,"sort"],["scope","col","sbSortable","OS",3,"sort"],["scope","col","sbSortable","date_last_rapport",3,"sort"],["scope","col","sbSortable","description",3,"sort"],["scope","col"],["type","checkbox","id","inlineCheckbox-master","name","master","value","option1",3,"ngModel","ngModelChange","change"],[3,"direction"],["scope","col","sbSortable","name"],["scope","col","sbSortable","type"],["scope","col","sbSortable","kb_manquantes"],["scope","col","sbSortable","ip"],["scope","col","sbSortable","OS"],["scope","col","sbSortable","date_last_rapport"],["scope","col","sbSortable","description"],[3,"ngStyle"],["scope","row",4,"ngIf"],["class","mr-1",3,"icon",4,"ngIf"],[1,"ml-2"],[3,"result","term"],["style","color: red;",4,"ngIf"],["scope","row"],["class","check","type","checkbox","name","list_name",3,"ngModel","id","value","ngModelChange","change",4,"ngIf"],["type","checkbox","name","list_name",1,"check",3,"ngModel","id","value","ngModelChange","change"],[2,"color","red"],[1,"d-flex","justify-content-between","p-2"],[3,"collectionSize","page","maxSize","pageSize","pageChange"],["name","pageSize",1,"custom-select",2,"width","auto",3,"ngModel","ngModelChange"],[3,"ngValue"]],template:function(t,r){1&t&&(e.YNc(0,g,19,6,"ng-template",null,0,e.W1O),e.TgZ(2,"form"),e.YNc(3,q,13,14,"div",1),e.YNc(4,j,3,0,"div",2),e.ALo(5,"async"),e.TgZ(6,"div",3)(7,"table",4)(8,"thead"),e.YNc(9,ee,33,10,"tr",1),e.YNc(10,re,26,3,"tr",1),e.qZA(),e.TgZ(11,"tbody"),e.YNc(12,ue,22,24,"tr",5),e.qZA()()(),e.YNc(13,pe,10,10,"div",6),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",r.searchBar),e.xp6(1),e.Q6J("ngIf",e.lcZ(5,6,r.serveurService.loading$)),e.xp6(5),e.Q6J("ngIf",r.sortable),e.xp6(1),e.Q6J("ngIf",!r.sortable),e.xp6(2),e.Q6J("ngForOf",r.checklist),e.xp6(1),e.Q6J("ngIf",r.pageBar))},directives:[a._Y,a.JL,a.F,i.J4,a.Fj,a.JJ,a.On,x.BN,h.O5,a.Wl,T.Y,k,h.sg,h.PC,i._h,i.N9,a.EJ,a.YN,a.Kr],pipes:[h.Ov,h.JJ],styles:["thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{cursor:pointer}tr[_ngcontent-%COMP%]{line-height:auto;min-height:8px}button[_ngcontent-%COMP%]:focus{color:#fff;background-color:#17a2b8;box-shadow:none}button[_ngcontent-%COMP%]{border:.5px solid #17a2b8!important}#rep_ok[_ngcontent-%COMP%]{color:green}#rep_error[_ngcontent-%COMP%]{color:red}.btn-outline-linux[_ngcontent-%COMP%]{border-color:#7164a2;color:#7164a2}.btn-outline-linux[_ngcontent-%COMP%]:not(:disabled){background-color:#7164a2}.btn-outline-linux[_ngcontent-%COMP%]:not(:active), .btn-outline-linux[_ngcontent-%COMP%]:disabled, .btn-outline-linux.disabled[_ngcontent-%COMP%]{background-color:#7164a2;color:#fff}.btn-outline-windows[_ngcontent-%COMP%]{border-color:#3500f3;color:#3500f3}.btn-outline-windows[_ngcontent-%COMP%]:not(:disabled){background-color:#3500f3}.btn-outline-windows[_ngcontent-%COMP%]:not(:active), .btn-outline-windows[_ngcontent-%COMP%]:disabled, .btn-outline-windows.disabled[_ngcontent-%COMP%]{background-color:#3500f3;color:#fff}"],changeDetection:0}),n})()},4397:(E,b,s)=>{s.d(b,{m:()=>x});var _=s(1135),i=s(5e3),f=s(3154),e=s(6952),d=s(5212),u=s(6333),p=s(9808),l=s(996);function a(h,T){if(1&h&&(i.TgZ(0,"div"),i._uU(1),i.qZA()),2&h){const m=T.ngIf;i.xp6(1),i.hij("La liste des serveurs est mise \xe0 jour \xe0 ",m,"h")}}let x=(()=>{class h{constructor(m,Z){this.horaireMajService=m,this.route=Z,this.horaireMaj=new _.X(""),this.osSelect=new _.X("All")}ngOnInit(){this.horaireMajService.getHoraireMaj().subscribe(m=>{this.horaireMaj.next(m)}),this.route.params.subscribe(m=>{null!=m.OSSelected&&this.osSelect.next(m.OSSelected)})}}return h.\u0275fac=function(m){return new(m||h)(i.Y36(f.w),i.Y36(e.gz))},h.\u0275cmp=i.Xpm({type:h,selectors:[["app-serveurs"]],decls:9,vars:6,consts:[[3,"hideBreadcrumbs"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[4,"ngIf"],[1,"card-body"],[3,"pageSize","osSelected"]],template:function(m,Z){1&m&&(i._UZ(0,"sb-dashboard-head",0),i.TgZ(1,"sb-card")(2,"div",1)(3,"div"),i._uU(4,"Serveurs Alco"),i.qZA(),i.YNc(5,a,2,1,"div",2),i.ALo(6,"async"),i.qZA(),i.TgZ(7,"div",3),i._UZ(8,"serveur-table",4),i.qZA()()),2&m&&(i.Q6J("hideBreadcrumbs",!1),i.xp6(5),i.Q6J("ngIf",i.lcZ(6,4,Z.horaireMaj)),i.xp6(3),i.Q6J("pageSize",20)("osSelected",Z.osSelect))},directives:[d.T,u.A,p.O5,l.m],pipes:[p.Ov],styles:["#header-serveurs[_ngcontent-%COMP%]{display:flex}"]}),h})()},3158:(E,b,s)=>{s.d(b,{$:()=>i,Y:()=>_.Y});var _=s(1938);const i=[_.Y]},1938:(E,b,s)=>{s.d(b,{Y:()=>f});var _=s(5e3);const i={asc:"desc",desc:"","":"asc"};let f=(()=>{class e{constructor(){this.direction="",this.sort=new _.vpe}get isAscending(){return"asc"===this.direction}get isDescending(){return"desc"===this.direction}rotate(){this.direction=i[this.direction],this.sort.emit({column:this.sbSortable,direction:this.direction})}}return e.\u0275fac=function(u){return new(u||e)},e.\u0275dir=_.lG2({type:e,selectors:[["th","sbSortable",""]],hostVars:4,hostBindings:function(u,p){1&u&&_.NdJ("click",function(){return p.rotate()}),2&u&&_.ekj("asc",p.isAscending)("desc",p.isDescending)},inputs:{sbSortable:"sbSortable",direction:"direction"},outputs:{sort:"sort"}}),e})()},6440:(E,b,s)=>{s.d(b,{J:()=>T});var _=s(9808),i=s(6952),f=s(2382),e=s(2539),d=s(5592),u=s(3158),p=s(3305),l=s(5e3);s(4397),s(996),s(1938);let T=(()=>{class m{}return m.\u0275fac=function(D){return new(D||m)},m.\u0275mod=l.oAB({type:m}),m.\u0275inj=l.cJS({providers:[_.JJ,...p.u,...u.$],imports:[[_.ez,i.Bz,f.UX,f.u5,e.n,d.A]]}),m})()},3305:(E,b,s)=>{s.d(b,{t:()=>L,u:()=>k});var _=s(520),i=s(1135),f=s(7579),e=s(9646),d=s(8505),u=s(8372),p=s(3900),l=s(4825),a=s(5e3),x=s(9808);const h={headers:new _.WM({"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};function T(S,C){return S<C?-1:S>C?1:0}let L=(()=>{class S{constructor(g,y){this.pipe=g,this.http=y,this._loading$=new i.X(!0),this._search$=new f.x,this._mesServ$=new i.X([]),this._serveurs$=new i.X([]),this._total$=new i.X(0),this._total_maj$=new i.X(0),this.baseURL="https://pms.it.herault.fr/",this._state={page:1,pageSize:20,searchTerm:"",sortColumn:"",sortDirection:"",typeSelected:"Tous",OSSelected:"Alco_Windows"},this._search$.pipe((0,d.b)(()=>this._loading$.next(!0)),(0,u.b)(120),(0,p.w)(()=>this.get_serveurs()),(0,l.g)(120),(0,d.b)(()=>this._loading$.next(!1))).subscribe(M=>{this._mesServ$.next(M)}),this._mesServ$.pipe((0,d.b)(()=>this._loading$.next(!0)),(0,u.b)(120),(0,p.w)(M=>this._search(M)),(0,l.g)(120),(0,d.b)(()=>this._loading$.next(!1))).subscribe(M=>{this._serveurs$.next(M.serveurs),this._total$.next(M.total),this._total_maj$.next(M.total_maj)}),this._search$.next()}get messerveurs$(){return this._mesServ$.asObservable()}get serveurs$(){return this._serveurs$.asObservable()}get total$(){return this._total$.asObservable()}get total_maj$(){return this._total_maj$.asObservable()}get loading$(){return this._loading$.asObservable()}get page(){return this._state.page}set page(g){this._set({page:g})}get pageSize(){return this._state.pageSize}set pageSize(g){this._set({pageSize:g})}get typeselected(){return this._state.typeSelected}set typeselected(g){this._set({typeSelected:g})}get searchTerm(){return this._state.searchTerm}set searchTerm(g){this._set({searchTerm:g})}set sortColumn(g){this._set({sortColumn:g})}set sortDirection(g){this._set({sortDirection:g})}set OSSelected(g){this._set({OSSelected:g})}_set(g){Object.assign(this._state,g),this._search$.next()}_search(g){const{sortColumn:y,sortDirection:M,pageSize:O,page:U,searchTerm:J,typeSelected:w}=this._state;let A=function m(S,C,g){return""===g?S:[...S].sort((y,M)=>{var O=null;if("date_last_rapport"==C){let U=y[C].split("/"),J=new Date(U[2]+"/"+U[1]+"/"+U[0]),w=M[C].split("/");O=T(J,new Date(w[2]+"/"+w[1]+"/"+w[0]))}else O=T(y[C],M[C]);return"asc"===g?O:-O})}(g,y,M);A=A.filter(P=>function D(S,C,g){return S.name.toLowerCase().includes(C.toLowerCase())||S.type.toLowerCase().includes(C.toLowerCase())||S.ip.toLowerCase().includes(C.toLowerCase())||S.OS.toLowerCase().includes(C.toLowerCase())||S.description.toLowerCase().includes(C.toLowerCase())||g.transform(S.kb_manquantes).includes(C)||S.date_last_rapport.toLowerCase().includes(C.toLowerCase())}(P,J,this.pipe)),A=A.filter(P=>function Z(S,C){return"Tous"==C||S.type==C||S.os_quick.toLocaleLowerCase().includes(C.toLocaleLowerCase())}(P,w));const R=A.length;let N=0;return A.forEach(P=>{N+=P.kb_manquantes}),A=A.slice((U-1)*O,(U-1)*O+O),(0,e.of)({serveurs:A,total:R,total_maj:N})}get_serveurs(){try{return this.http.get(this.baseURL+"servNode/serveurs/"+this._state.OSSelected,h)}catch(g){throw{msg:"Erreur get_serveurs(): "+g}}}}return S.\u0275fac=function(g){return new(g||S)(a.LFG(x.JJ),a.LFG(_.eN))},S.\u0275prov=a.Yz7({token:S,factory:S.\u0275fac,providedIn:"root"}),S})();const k=[L]},8372:(E,b,s)=>{s.d(b,{b:()=>e});var _=s(4986),i=s(4482),f=s(5403);function e(d,u=_.z){return(0,i.e)((p,l)=>{let a=null,x=null,h=null;const T=()=>{if(a){a.unsubscribe(),a=null;const Z=x;x=null,l.next(Z)}};function m(){const Z=h+d,D=u.now();if(D<Z)return a=this.schedule(void 0,Z-D),void l.add(a);T()}p.subscribe((0,f.x)(l,Z=>{x=Z,h=u.now(),a||(a=u.schedule(m,d),l.add(a))},()=>{T(),l.complete()},void 0,()=>{x=a=null}))})}}}]);