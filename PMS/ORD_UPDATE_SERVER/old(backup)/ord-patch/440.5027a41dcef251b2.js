"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[440],{6333:(D,T,s)=>{s.d(T,{A:()=>g});var a=s(5e3),i=s(9808);const C=[[["",8,"card-header"]],[["",8,"card-body"]],[["",8,"card-footer"]]],e=[".card-header",".card-body",".card-footer"];let g=(()=>{class h{constructor(){this.customClasses=[]}ngOnInit(){this.background&&this.customClasses.push(this.background),this.color&&this.customClasses.push(this.color)}}return h.\u0275fac=function(_){return new(_||h)},h.\u0275cmp=a.Xpm({type:h,selectors:[["sb-card"]],inputs:{background:"background",color:"color"},ngContentSelectors:e,decls:4,vars:1,consts:[[1,"card","mb-4",3,"ngClass"]],template:function(_,u){1&_&&(a.F$t(C),a.TgZ(0,"div",0),a.Hsn(1),a.Hsn(2,1),a.Hsn(3,2),a.qZA()),2&_&&a.Q6J("ngClass",u.customClasses)},directives:[i.mk],styles:[""],changeDetection:0}),h})()},3154:(D,T,s)=>{s.d(T,{w:()=>e});var a=s(520),i=s(5e3);const C={headers:new a.WM({"Access-Control-Allow-Methods":"GET,POST,PUT","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let e=(()=>{class g{constructor(l){this.http=l,this.baseURL="https://172.17.2.130/"}getHoraireMaj(){try{return this.http.get(this.baseURL+"servNode/config_serveur_horaire_maj",C)}catch(l){throw{msg:l}}}}return g.\u0275fac=function(l){return new(l||g)(i.LFG(a.eN))},g.\u0275prov=i.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},984:(D,T,s)=>{s.d(T,{n:()=>h});var a=s(9808),i=s(520),C=s(5e3),e=s(4667);const g={headers:new i.WM({"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let h=(()=>{class l{constructor(u,f){this.authService=u,this.http=f,this.baseURL="https://172.17.2.130/",this.plannif={date_plannif:(0,a.p6)(new Date,"dd/MM/yyyy","en"),user:"",plannifs:[],_id:void 0}}plannification(u,f,S){try{return this.plannif.plannifs=u,this.plannif.user=f,null!=S&&(this.plannif.date_plannif=S.day+"/"+S.month+"/"+S.year),this.http.put(this.baseURL+"servNode/plannificationExceptionnel_add",JSON.stringify(this.plannif),g)}catch(x){throw{msg:"Erreur plannification() "+x}}}getPlannifications(){try{return this.http.get(this.baseURL+"servNode/plannificationExceptionnel",g)}catch(u){throw{msg:"Erreur r\xe9cup\xe9ration des plannifs: "+u}}}supressionPlannification(u){try{return this.http.delete(this.baseURL+"servNode/deletePlannificationExceptionnel/"+u,g)}catch(f){throw{msg:"Erreur supression plannif: "+f}}}modificationPlannification(u,f,S,x){try{return this.plannif.plannifs=f,this.plannif.user=S,null!=x&&(this.plannif.date_plannif=x.day+"/"+x.month+"/"+x.year),this.http.put(this.baseURL+"servNode/PlannificationExceptionnel_modify/"+u,JSON.stringify(this.plannif),g)}catch(v){throw{msg:"Erreur modification Plannification: "+v}}}}return l.\u0275fac=function(u){return new(u||l)(C.LFG(e.g),C.LFG(i.eN))},l.\u0275prov=C.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},996:(D,T,s)=>{s.d(T,{m:()=>_e});var a=s(3158),i=s(7751),C=s(1135),e=s(5e3),g=s(3305),h=s(984),l=s(4667),_=s(2382),u=s(9444),f=s(9808),S=s(1938);const x=function(){return["fas","chevron-up"]};function v(n,c){1&n&&(e.ynx(0),e._UZ(1,"fa-icon",1),e.BQk()),2&n&&(e.xp6(1),e.Q6J("icon",e.DdM(1,x)))}const Z=function(){return["fas","chevron-down"]};function O(n,c){1&n&&(e.ynx(0),e._UZ(1,"fa-icon",1),e.BQk()),2&n&&(e.xp6(1),e.Q6J("icon",e.DdM(1,Z)))}let N=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sb-sort-icon"]],inputs:{direction:"direction"},decls:2,vars:2,consts:[[4,"ngIf"],[1,"sort-icon",3,"icon"]],template:function(t,r){1&t&&(e.YNc(0,v,2,2,"ng-container",0),e.YNc(1,O,2,2,"ng-container",0)),2&t&&(e.Q6J("ngIf","asc"===r.direction),e.xp6(1),e.Q6J("ngIf","desc"===r.direction))},directives:[f.O5,u.BN],styles:[".sort-icon[_ngcontent-%COMP%]{height:.9rem;width:.9rem;margin-left:.25rem;margin-top:-.125rem;vertical-align:middle}"],changeDetection:0}),n})();function m(n,c){if(1&n&&(e.TgZ(0,"div",11)(1,"label",12),e._uU(2),e.qZA(),e.TgZ(3,"ul",21)(4,"li",22),e._uU(5," Serveur PROD "),e.TgZ(6,"span",23),e._uU(7),e.qZA()(),e.TgZ(8,"li",22),e._uU(9," Serveur Pre-Prod "),e.TgZ(10,"span",23),e._uU(11),e.qZA()(),e.TgZ(12,"li",22),e._uU(13," Serveur Rec-Form "),e.TgZ(14,"span",23),e._uU(15),e.qZA()(),e.TgZ(16,"li",22),e._uU(17," Serveur BDD "),e.TgZ(18,"span",23),e._uU(19),e.qZA()(),e.TgZ(20,"li",22),e._uU(21," Serveur BDD-Rec "),e.TgZ(22,"span",23),e._uU(23),e.qZA()(),e.TgZ(24,"li",22),e._uU(25," Serveur DMZ "),e.TgZ(26,"span",23),e._uU(27),e.qZA()()()()),2&n){const t=c.ngIf,r=e.oxw(2);e.xp6(2),e.AsE("Derni\xe8re Plannification le ",t[t.length-1].date_plannif," par ",t[t.length-1].user,": "),e.xp6(5),e.Oqu(r.count_prod(t[t.length-1])),e.xp6(4),e.Oqu(r.count_pre(t[t.length-1])),e.xp6(4),e.Oqu(r.count_rec(t[t.length-1])),e.xp6(4),e.Oqu(r.count_bdd(t[t.length-1])),e.xp6(4),e.Oqu(r.count_bdd_rec(t[t.length-1])),e.xp6(4),e.Oqu(r.count_dmz(t[t.length-1]))}}const b=function(){return["fas","table"]};function p(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",7)(1,"h4",8),e._uU(2,"Plannification Exceptionnel"),e.qZA(),e.TgZ(3,"button",9),e.NdJ("click",function(){return e.CHM(t).$implicit.dismiss("Cross click")}),e.qZA()(),e.TgZ(4,"div",10)(5,"form")(6,"div",11)(7,"label",12),e._uU(8,"Date de plannification"),e.qZA(),e.TgZ(9,"div",13)(10,"input",14,15),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().date_plannif=o}),e.qZA(),e.TgZ(12,"button",16),e.NdJ("click",function(){return e.CHM(t),e.MAs(11).toggle()}),e._UZ(13,"fa-icon",17),e.qZA()()(),e.YNc(14,m,28,8,"div",18),e.ALo(15,"async"),e.qZA()(),e.TgZ(16,"div",19)(17,"button",20),e.NdJ("click",function(){const d=e.CHM(t).$implicit,J=e.oxw();return d.close("Save click"),J.plannification()}),e._uU(18,"Plannifier"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(10),e.Q6J("ngModel",t.date_plannif),e.xp6(3),e.Q6J("icon",e.DdM(5,b)),e.xp6(1),e.Q6J("ngIf",e.lcZ(15,3,t.plannifs$))}}const y=function(){return["fab","windows"]};function M(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",35)(1,"button",36),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="windows"}),e._UZ(2,"fa-icon",17),e._uU(3,"Windows"),e.qZA(),e.TgZ(4,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="Production"}),e._uU(5,"Prod"),e.qZA(),e.TgZ(6,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="Pre-production"}),e._uU(7,"Pre-Prod"),e.qZA(),e.TgZ(8,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="Recette-Formation"}),e._uU(9,"Rec-Form"),e.qZA(),e.TgZ(10,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD"}),e._uU(11,"BDD"),e.qZA(),e.TgZ(12,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD-Recette"}),e._uU(13,"BDD-Rec"),e.qZA(),e.TgZ(14,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="DMZ"}),e._uU(15,"DMZ"),e.qZA()()}2&n&&(e.xp6(2),e.Q6J("icon",e.DdM(1,y)))}const E=function(){return["fab","linux"]};function U(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",37)(1,"button",38),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="linux"}),e._UZ(2,"fa-icon",17),e._uU(3,"Linux"),e.qZA(),e.TgZ(4,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD-PRODPRE"}),e._uU(5,"BDD-ProPre"),e.qZA(),e.TgZ(6,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="BDD-RECFOR"}),e._uU(7,"BDD-RECFOR"),e.qZA(),e.TgZ(8,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="PROD-PRE"}),e._uU(9,"PROD-PRE"),e.qZA(),e.TgZ(10,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).serveurService.typeselected="REC-FOR"}),e._uU(11,"REC-FOR"),e.qZA()()}2&n&&(e.xp6(2),e.Q6J("icon",e.DdM(1,E)))}function I(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",30)(1,"div",31)(2,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).serveurService.typeselected="Tous"}),e._uU(3,"Tous"),e.qZA()(),e.YNc(4,M,16,2,"div",33),e.YNc(5,U,12,2,"div",34),e.qZA()}if(2&n){const t=c.ngIf;e.xp6(4),e.Q6J("ngIf","Alco_Windows"==t),e.xp6(1),e.Q6J("ngIf","Alco_Linux"==t)}}function P(n,c){if(1&n&&(e.TgZ(0,"span",39),e._uU(1),e.ALo(2,"async"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("Total: ",e.lcZ(2,1,t.serveurService.total$),"")}}function A(n,c){if(1&n&&(e.TgZ(0,"span",39),e._uU(1),e.ALo(2,"async"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("Maj n\xe9cessaire: ",e.lcZ(2,1,t.serveurService.total_maj$),"")}}function k(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"button",42),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3),d=e.MAs(1);return o.open(d)}),e._uU(1,"Mettre \xe0 jour"),e.qZA()}}function L(n,c){if(1&n&&(e.TgZ(0,"div",40),e.YNc(1,k,2,0,"button",41),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.auth.isAdmin)}}function w(n,c){if(1&n&&(e.TgZ(0,"span",46),e._uU(1),e.qZA()),2&n){const t=e.oxw().ngIf;e.xp6(1),e.Oqu(t)}}function R(n,c){if(1&n&&(e.TgZ(0,"span",47),e._uU(1),e.qZA()),2&n){const t=e.oxw().ngIf;e.xp6(1),e.Oqu(t)}}function Q(n,c){if(1&n&&(e.TgZ(0,"div",43),e.YNc(1,w,2,1,"span",44),e.YNc(2,R,2,1,"span",45),e.qZA()),2&n){const t=c.ngIf;e.xp6(1),e.Q6J("ngIf","Ajout OK"==t),e.xp6(1),e.Q6J("ngIf","Ajout OK"!=t)}}function B(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"div",24),e._uU(2,"Recherche: "),e.TgZ(3,"input",25),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().serveurService.searchTerm=o}),e.qZA(),e.YNc(4,I,6,2,"div",26),e.ALo(5,"async"),e.YNc(6,P,3,3,"span",27),e.ALo(7,"async"),e.YNc(8,A,3,3,"span",27),e.ALo(9,"async"),e.YNc(10,L,2,1,"div",28),e.YNc(11,Q,3,2,"div",29),e.ALo(12,"async"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.serveurService.searchTerm),e.xp6(1),e.Q6J("ngIf",e.lcZ(5,6,t.osSelected)),e.xp6(2),e.Q6J("ngIf",e.lcZ(7,8,t.serveurService.total$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,10,t.serveurService.total_maj$)),e.xp6(2),e.Q6J("ngIf",t.checkedList.length>0),e.xp6(1),e.Q6J("ngIf",e.lcZ(12,12,t.reponse_maj))}}function q(n,c){1&n&&(e.TgZ(0,"div",48)(1,"div",49),e._uU(2," Chargement ... "),e.qZA()())}function Y(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"span")(1,"input",60),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(3).masterSelected=o})("change",function(){return e.CHM(t),e.oxw(3).checkUncheckAll()}),e.qZA()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("ngModel",t.masterSelected)}}function $(n,c){if(1&n&&(e.TgZ(0,"th",59),e.YNc(1,Y,2,1,"span",1),e.qZA()),2&n){const t=c.ngIf,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",1==t&&r.checkbox)}}function j(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function H(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function F(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function W(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function K(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function z(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function X(n,c){if(1&n&&e._UZ(0,"sb-sort-icon",61),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function G(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.YNc(1,$,2,1,"th",50),e.ALo(2,"async"),e._UZ(3,"th"),e.TgZ(4,"th",51),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(5,"span"),e._uU(6,"Nom"),e.qZA(),e.YNc(7,j,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(8,"th",53),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(9,"span"),e._uU(10,"Environnement"),e.qZA(),e.YNc(11,H,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(12,"th",54),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(13,"span"),e._uU(14,"Maj restantes"),e.qZA(),e.YNc(15,F,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(16,"th",55),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(17,"span"),e._uU(18,"IP"),e.qZA(),e.YNc(19,W,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(20,"th",56),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(21,"span"),e._uU(22,"OS"),e.qZA(),e.YNc(23,K,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(24,"th",57),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(25,"span"),e._uU(26,"Dernier Rapport"),e.qZA(),e.YNc(27,z,1,1,"sb-sort-icon",52),e.qZA(),e.TgZ(28,"th",58),e.NdJ("sort",function(o){return e.CHM(t),e.oxw().onSort(o)}),e.TgZ(29,"span"),e._uU(30,"Description"),e.qZA(),e.YNc(31,X,1,1,"sb-sort-icon",52),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,8,t.auth.isAdmin)),e.xp6(6),e.Q6J("ngIf","name"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","type"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","kb_manquantes"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","ip"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","OS"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","date_last_rapport"===t.sortedColumn),e.xp6(4),e.Q6J("ngIf","description"===t.sortedColumn)}}function V(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"span")(1,"input",60),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(3).masterSelected=o})("change",function(){return e.CHM(t),e.oxw(3).checkUncheckAll()}),e.qZA()()}if(2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("ngModel",t.masterSelected)}}function ee(n,c){if(1&n&&(e.TgZ(0,"th",59),e.YNc(1,V,2,1,"span",1),e.qZA()),2&n){const t=c.ngIf,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",1==t&&r.checkbox)}}function te(n,c){if(1&n&&(e.TgZ(0,"tr"),e.YNc(1,ee,2,1,"th",50),e.ALo(2,"async"),e._UZ(3,"th"),e.TgZ(4,"th",62)(5,"span"),e._uU(6,"Nom"),e.qZA()(),e.TgZ(7,"th",63)(8,"span"),e._uU(9,"Environnement"),e.qZA()(),e.TgZ(10,"th",64)(11,"span"),e._uU(12,"Maj restantes"),e.qZA()(),e.TgZ(13,"th",65)(14,"span"),e._uU(15,"IP"),e.qZA()(),e.TgZ(16,"th",66)(17,"span"),e._uU(18,"OS"),e.qZA()(),e.TgZ(19,"th",67)(20,"span"),e._uU(21,"Dernier Rapport"),e.qZA()(),e.TgZ(22,"th",68)(23,"span"),e._uU(24,"Description"),e.qZA()()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,t.auth.isAdmin))}}function ne(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"input",76),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(2).$implicit.isSelected=o})("change",function(){return e.CHM(t),e.oxw(3).isAllSelected()}),e.qZA()}if(2&n){const t=e.oxw(2).$implicit;e.s9C("id",t.serveur.id),e.s9C("value",t.serveur.fullName),e.Q6J("ngModel",t.isSelected)}}function re(n,c){if(1&n&&(e.TgZ(0,"th",74),e.YNc(1,ne,1,3,"input",75),e.qZA()),2&n){const t=c.ngIf,r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",1==t&&r.checkbox)}}const oe=function(){return["fas","exclamation"]};function se(n,c){1&n&&e._UZ(0,"fa-icon",17),2&n&&e.Q6J("icon",e.DdM(1,oe))}const ie=function(n){return{"background-color":n}};function ce(n,c){if(1&n&&(e.TgZ(0,"tr",69),e.YNc(1,re,2,1,"th",70),e.ALo(2,"async"),e.TgZ(3,"td"),e.YNc(4,se,1,2,"fa-icon",71),e.qZA(),e.TgZ(5,"td",72),e._UZ(6,"ngb-highlight",73),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"ngb-highlight",73),e.qZA(),e.TgZ(9,"td"),e._UZ(10,"ngb-highlight",73),e.ALo(11,"number"),e.qZA(),e.TgZ(12,"td"),e._UZ(13,"ngb-highlight",73),e.qZA(),e.TgZ(14,"td"),e._UZ(15,"ngb-highlight",73),e.qZA(),e.TgZ(16,"td"),e._UZ(17,"ngb-highlight",73),e.qZA(),e.TgZ(18,"td"),e._UZ(19,"ngb-highlight",73),e.qZA()()),2&n){const t=c.$implicit,r=e.oxw();e.Q6J("ngStyle",e.VKq(21,ie,t.serveur.kb_manquantes>=50?"rgba(255, 0, 0,"+t.serveur.kb_manquantes/3+"%)":t.serveur.kb_manquantes>=20&&t.serveur.kb_manquantes<50?"rgba(255, 251, 0, 0.29)":t.serveur.kb_manquantes<20&&t.serveur.kb_manquantes>=1?"rgba(0, 255, 21,0.19)":"rgba(6, 226, 24, 0.4)")),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,17,r.auth.isAdmin)),e.xp6(3),e.Q6J("ngIf",r.getNbrJoursRapport(t.serveur.date_last_rapport)>7),e.xp6(2),e.Q6J("result",t.serveur.name)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.type)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",e.lcZ(11,19,t.serveur.kb_manquantes))("term",r.serveurService.searchTerm),e.xp6(3),e.Q6J("result",t.serveur.ip.split("fe")[0])("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.OS)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.date_last_rapport)("term",r.serveurService.searchTerm),e.xp6(2),e.Q6J("result",t.serveur.description)("term",r.serveurService.searchTerm)}}function ae(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",77)(1,"ngb-pagination",78),e.NdJ("pageChange",function(o){return e.CHM(t),e.oxw().serveurService.page=o}),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"select",79),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().serveurService.pageSize=o}),e.TgZ(4,"option",80),e._uU(5,"20 objets par page"),e.qZA(),e.TgZ(6,"option",80),e._uU(7,"50 objets par page"),e.qZA(),e.TgZ(8,"option",80),e._uU(9,"Tous"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("collectionSize",e.lcZ(2,8,t.total$)||0)("page",t.serveurService.page)("maxSize",10)("pageSize",t.serveurService.pageSize),e.xp6(2),e.Q6J("ngModel",t.serveurService.pageSize),e.xp6(1),e.Q6J("ngValue",20),e.xp6(2),e.Q6J("ngValue",50),e.xp6(2),e.Q6J("ngValue",-1)}}let _e=(()=>{class n{constructor(t,r,o,d,J){this.serveurService=t,this.plannificationService=r,this.auth=o,this.changeDetectorRef=d,this.modalService=J,this.pageSize=4,this.searchBar=!0,this.pageBar=!0,this.checkbox=!0,this.sortable=!0,this.reponse_maj=new C.X(""),this.closeResult="",this.masterSelected=!1,this.checklist=[],this.checkedList=[]}ngOnInit(){null!=this.sort&&this.onSort(this.sort),this.osSelected.subscribe(t=>{this.serveurService.OSSelected=t,null!=t.split("_")[1]&&(this.serveurService.typeselected=t.split("_")[1])}),this.serveurService.pageSize=this.pageSize,this.serveurs$=this.serveurService.serveurs$,this.total$=this.serveurService.total$,this.total_maj$=this.serveurService.total_maj$,this.plannifs$=this.plannificationService.getPlannifications(),this.serveurs$.subscribe(t=>{this.checklist=[],this.masterSelected=!1,t.forEach(r=>{this.checklist.push({serveur:r,isSelected:!1})}),this.getCheckedItemList()})}onSort({column:t,direction:r}){this.sortedColumn=t,this.sortedDirection=r,this.serveurService.sortColumn=t,this.serveurService.sortDirection=r,this.changeDetectorRef.detectChanges()}checkUncheckAll(){console.log("dans checkuncheckAll"),console.log("Taille: "+this.checklist.length);for(var t=0;t<this.checklist.length;t++)this.checklist[t].isSelected=this.masterSelected;this.getCheckedItemList()}isAllSelected(){this.masterSelected=this.checklist.every(function(t){return 1==t.isSelected}),this.getCheckedItemList()}getCheckedItemList(){this.checkedList=[];for(var t=0;t<this.checklist.length;t++)this.checklist[t].isSelected&&this.checkedList.push(this.checklist[t].serveur)}plannification(){this.plannificationService.plannification(this.checkedList,this.auth.user.value.name,this.date_plannif).subscribe(t=>{this.reponse_maj.next(t)})}getNbrJoursRapport(t){var r=t.split("/"),o=new Date,d=o.getMonth()+1,J=o.getDate(),le=o.getFullYear(),ue=new Date(le+"/"+d+"/"+J),pe=new Date(r[2]+"/"+r[1]+"/"+r[0]),de=ue.getTime()-pe.getTime();return Math.round(de/864e5)}open(t){this.modalService.open(t,{centered:!0}).result.then(r=>{this.closeResult=`Closed with: ${r}`},r=>{this.closeResult=`Dismissed ${this.getDismissReason(r)}`})}getDismissReason(t){return t===i.If.ESC?"by pressing ESC":t===i.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}count_prod(t){let r=0;return t.plannifs.forEach(o=>{"Production"==o.type&&r++}),r}count_pre(t){let r=0;return t.plannifs.forEach(o=>{"Pre-production"==o.type&&r++}),r}count_rec(t){let r=0;return t.plannifs.forEach(o=>{"Recette-Formation"==o.type&&r++}),r}count_bdd(t){let r=0;return t.plannifs.forEach(o=>{"BDD"==o.type&&r++}),r}count_bdd_rec(t){let r=0;return t.plannifs.forEach(o=>{"BDD-Recette"==o.type&&r++}),r}count_dmz(t){let r=0;return t.plannifs.forEach(o=>{"DMZ"==o.type&&r++}),r}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.t),e.Y36(h.n),e.Y36(l.g),e.Y36(e.sBO),e.Y36(i.FF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["serveur-table"]],viewQuery:function(t,r){if(1&t&&e.Gf(a.Y,5),2&t){let o;e.iGM(o=e.CRH())&&(r.headers=o)}},inputs:{pageSize:"pageSize",sortedColumn:"sortedColumn",osSelected:"osSelected",searchBar:"searchBar",pageBar:"pageBar",checkbox:"checkbox",sortable:"sortable",sort:"sort"},decls:14,vars:8,consts:[["content",""],[4,"ngIf"],["class","progress ml-1",4,"ngIf"],[1,"table-responsive"],[1,"table","table-striped"],[3,"ngStyle",4,"ngFor","ngForOf"],["class","d-flex justify-content-between p-2",4,"ngIf"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"mb-3"],["for","dateOfBirth"],[1,"input-group"],["id","datePlannif","placeholder","yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control",3,"ngModel","ngModelChange"],["dp","ngbDatepicker"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"mr-1",3,"icon"],["class","mb-3",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"list-group"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","badge-primary","badge-pill"],[1,"form-group","form-inline"],["type","text","name","searchTerm",1,"form-control","ml-1",3,"ngModel","ngModelChange"],["class","ml-2 btn-toolbar","role","toolbar","aria-label","Toolbar with button groups",4,"ngIf"],["class","ml-3",4,"ngIf"],["class","ml-4",4,"ngIf"],["class","ml-5","id","test",4,"ngIf"],["role","toolbar","aria-label","Toolbar with button groups",1,"ml-2","btn-toolbar"],["role","group","aria-label","First group",1,"btn-group","me-2"],["type","button",1,"btn","btn-outline-info",3,"click"],["class","btn-group me-2 ml-2","role","group","aria-label","Second group",4,"ngIf"],["class","btn-group me-2 ml-2","role","group","aria-label","Third group",4,"ngIf"],["role","group","aria-label","Second group",1,"btn-group","me-2","ml-2"],["type","button",1,"btn","btn-outline-windows",3,"click"],["role","group","aria-label","Third group",1,"btn-group","me-2","ml-2"],["type","button",1,"btn","btn-outline-linux",3,"click"],[1,"ml-3"],[1,"ml-4"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["id","test",1,"ml-5"],["id","rep_ok",4,"ngIf"],["id","rep_error",4,"ngIf"],["id","rep_ok"],["id","rep_error"],[1,"progress","ml-1"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","100%"],["scope","col",4,"ngIf"],["scope","col","sbSortable","name",3,"sort"],[3,"direction",4,"ngIf"],["scope","col","sbSortable","type",3,"sort"],["scope","col","sbSortable","kb_manquantes",3,"sort"],["scope","col","sbSortable","ip",3,"sort"],["scope","col","sbSortable","OS",3,"sort"],["scope","col","sbSortable","date_last_rapport",3,"sort"],["scope","col","sbSortable","description",3,"sort"],["scope","col"],["type","checkbox","id","inlineCheckbox-master","name","master","value","option1",3,"ngModel","ngModelChange","change"],[3,"direction"],["scope","col","sbSortable","name"],["scope","col","sbSortable","type"],["scope","col","sbSortable","kb_manquantes"],["scope","col","sbSortable","ip"],["scope","col","sbSortable","OS"],["scope","col","sbSortable","date_last_rapport"],["scope","col","sbSortable","description"],[3,"ngStyle"],["scope","row",4,"ngIf"],["class","mr-1",3,"icon",4,"ngIf"],[1,"ml-2"],[3,"result","term"],["scope","row"],["class","check","type","checkbox","name","list_name",3,"ngModel","id","value","ngModelChange","change",4,"ngIf"],["type","checkbox","name","list_name",1,"check",3,"ngModel","id","value","ngModelChange","change"],[1,"d-flex","justify-content-between","p-2"],[3,"collectionSize","page","maxSize","pageSize","pageChange"],["name","pageSize",1,"custom-select",2,"width","auto",3,"ngModel","ngModelChange"],[3,"ngValue"]],template:function(t,r){1&t&&(e.YNc(0,p,19,6,"ng-template",null,0,e.W1O),e.TgZ(2,"form"),e.YNc(3,B,13,14,"div",1),e.YNc(4,q,3,0,"div",2),e.ALo(5,"async"),e.TgZ(6,"div",3)(7,"table",4)(8,"thead"),e.YNc(9,G,32,10,"tr",1),e.YNc(10,te,25,3,"tr",1),e.qZA(),e.TgZ(11,"tbody"),e.YNc(12,ce,20,23,"tr",5),e.qZA()()(),e.YNc(13,ae,10,10,"div",6),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",r.searchBar),e.xp6(1),e.Q6J("ngIf",e.lcZ(5,6,r.serveurService.loading$)),e.xp6(5),e.Q6J("ngIf",r.sortable),e.xp6(1),e.Q6J("ngIf",!r.sortable),e.xp6(2),e.Q6J("ngForOf",r.checklist),e.xp6(1),e.Q6J("ngIf",r.pageBar))},directives:[_._Y,_.JL,_.F,i.J4,_.Fj,_.JJ,_.On,u.BN,f.O5,_.Wl,S.Y,N,f.sg,f.PC,i._h,i.N9,_.EJ,_.YN,_.Kr],pipes:[f.Ov,f.JJ],styles:["thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{cursor:pointer}tr[_ngcontent-%COMP%]{line-height:auto;min-height:8px}button[_ngcontent-%COMP%]:focus{color:#fff;background-color:#17a2b8;box-shadow:none}button[_ngcontent-%COMP%]{border:.5px solid #17a2b8!important}#rep_ok[_ngcontent-%COMP%]{color:green}#rep_error[_ngcontent-%COMP%]{color:red}.btn-outline-linux[_ngcontent-%COMP%]{border-color:#7164a2;color:#7164a2}.btn-outline-linux[_ngcontent-%COMP%]:not(:disabled){background-color:#7164a2}.btn-outline-linux[_ngcontent-%COMP%]:not(:active), .btn-outline-linux[_ngcontent-%COMP%]:disabled, .btn-outline-linux.disabled[_ngcontent-%COMP%]{background-color:#7164a2;color:#fff}.btn-outline-windows[_ngcontent-%COMP%]{border-color:#3500f3;color:#3500f3}.btn-outline-windows[_ngcontent-%COMP%]:not(:disabled){background-color:#3500f3}.btn-outline-windows[_ngcontent-%COMP%]:not(:active), .btn-outline-windows[_ngcontent-%COMP%]:disabled, .btn-outline-windows.disabled[_ngcontent-%COMP%]{background-color:#3500f3;color:#fff}"],changeDetection:0}),n})()},4397:(D,T,s)=>{s.d(T,{m:()=>f});var a=s(1135),i=s(5e3),C=s(3154),e=s(9168),g=s(5212),h=s(6333),l=s(9808),_=s(996);function u(S,x){if(1&S&&(i.TgZ(0,"div"),i._uU(1),i.qZA()),2&S){const v=x.ngIf;i.xp6(1),i.hij("La liste des serveurs est mise \xe0 jour \xe0 ",v,"h")}}let f=(()=>{class S{constructor(v,Z){this.horaireMajService=v,this.route=Z,this.horaireMaj=new a.X(""),this.osSelect=new a.X("All")}ngOnInit(){this.horaireMajService.getHoraireMaj().subscribe(v=>{this.horaireMaj.next(v)}),this.route.params.subscribe(v=>{null!=v.OSSelected&&this.osSelect.next(v.OSSelected)})}}return S.\u0275fac=function(v){return new(v||S)(i.Y36(C.w),i.Y36(e.gz))},S.\u0275cmp=i.Xpm({type:S,selectors:[["app-serveurs"]],decls:9,vars:6,consts:[[3,"hideBreadcrumbs"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[4,"ngIf"],[1,"card-body"],[3,"pageSize","osSelected"]],template:function(v,Z){1&v&&(i._UZ(0,"sb-dashboard-head",0),i.TgZ(1,"sb-card")(2,"div",1)(3,"div"),i._uU(4,"Serveurs Alco"),i.qZA(),i.YNc(5,u,2,1,"div",2),i.ALo(6,"async"),i.qZA(),i.TgZ(7,"div",3),i._UZ(8,"serveur-table",4),i.qZA()()),2&v&&(i.Q6J("hideBreadcrumbs",!1),i.xp6(5),i.Q6J("ngIf",i.lcZ(6,4,Z.horaireMaj)),i.xp6(3),i.Q6J("pageSize",20)("osSelected",Z.osSelect))},directives:[g.T,h.A,l.O5,_.m],pipes:[l.Ov],styles:["#header-serveurs[_ngcontent-%COMP%]{display:flex}"]}),S})()},3158:(D,T,s)=>{s.d(T,{$:()=>i,Y:()=>a.Y});var a=s(1938);const i=[a.Y]},1938:(D,T,s)=>{s.d(T,{Y:()=>C});var a=s(5e3);const i={asc:"desc",desc:"","":"asc"};let C=(()=>{class e{constructor(){this.direction="",this.sort=new a.vpe}get isAscending(){return"asc"===this.direction}get isDescending(){return"desc"===this.direction}rotate(){this.direction=i[this.direction],this.sort.emit({column:this.sbSortable,direction:this.direction})}}return e.\u0275fac=function(h){return new(h||e)},e.\u0275dir=a.lG2({type:e,selectors:[["th","sbSortable",""]],hostVars:4,hostBindings:function(h,l){1&h&&a.NdJ("click",function(){return l.rotate()}),2&h&&a.ekj("asc",l.isAscending)("desc",l.isDescending)},inputs:{sbSortable:"sbSortable",direction:"direction"},outputs:{sort:"sort"}}),e})()},6440:(D,T,s)=>{s.d(T,{J:()=>x});var a=s(9808),i=s(9168),C=s(2382),e=s(2539),g=s(5592),h=s(3158),l=s(3305),_=s(5e3);s(4397),s(996),s(1938);let x=(()=>{class v{}return v.\u0275fac=function(O){return new(O||v)},v.\u0275mod=_.oAB({type:v}),v.\u0275inj=_.cJS({providers:[a.JJ,...l.u,...h.$],imports:[[a.ez,i.Bz,C.UX,C.u5,e.n,g.A]]}),v})()},3305:(D,T,s)=>{s.d(T,{t:()=>O,u:()=>N});var a=s(1135),i=s(7579),C=s(9646),e=s(8505),g=s(8372),h=s(3900),l=s(4825),_=s(5e3),u=s(9808),f=s(520);function S(m,b){return m<b?-1:m>b?1:0}let O=(()=>{class m{constructor(p,y){this.pipe=p,this.http=y,this._loading$=new a.X(!0),this._search$=new i.x,this._mesServ$=new a.X([]),this._serveurs$=new a.X([]),this._total$=new a.X(0),this._total_maj$=new a.X(0),this.baseURL="https://172.17.2.130/",this._state={page:1,pageSize:20,searchTerm:"",sortColumn:"",sortDirection:"",typeSelected:"Tous",OSSelected:"Alco_Windows"},this._search$.pipe((0,e.b)(()=>this._loading$.next(!0)),(0,g.b)(120),(0,h.w)(()=>this.get_serveurs()),(0,l.g)(120),(0,e.b)(()=>this._loading$.next(!1))).subscribe(M=>{this._mesServ$.next(M)}),this._mesServ$.pipe((0,e.b)(()=>this._loading$.next(!0)),(0,g.b)(120),(0,h.w)(M=>this._search(M)),(0,l.g)(120),(0,e.b)(()=>this._loading$.next(!1))).subscribe(M=>{this._serveurs$.next(M.serveurs),this._total$.next(M.total),this._total_maj$.next(M.total_maj)}),this._search$.next()}get messerveurs$(){return this._mesServ$.asObservable()}get serveurs$(){return this._serveurs$.asObservable()}get total$(){return this._total$.asObservable()}get total_maj$(){return this._total_maj$.asObservable()}get loading$(){return this._loading$.asObservable()}get page(){return this._state.page}set page(p){this._set({page:p})}get pageSize(){return this._state.pageSize}set pageSize(p){this._set({pageSize:p})}get typeselected(){return this._state.typeSelected}set typeselected(p){this._set({typeSelected:p})}get searchTerm(){return this._state.searchTerm}set searchTerm(p){this._set({searchTerm:p})}set sortColumn(p){this._set({sortColumn:p})}set sortDirection(p){this._set({sortDirection:p})}set OSSelected(p){this._set({OSSelected:p})}_set(p){Object.assign(this._state,p),this._search$.next()}_search(p){const{sortColumn:y,sortDirection:M,pageSize:E,page:U,searchTerm:I,typeSelected:P}=this._state;let A=function x(m,b,p){return""===p?m:[...m].sort((y,M)=>{var E=null;if("date_last_rapport"==b){let U=y[b].split("/"),I=new Date(U[2]+"/"+U[1]+"/"+U[0]),P=M[b].split("/");E=S(I,new Date(P[2]+"/"+P[1]+"/"+P[0]))}else E=S(y[b],M[b]);return"asc"===p?E:-E})}(p,y,M);A=A.filter(w=>function Z(m,b,p){return m.name.toLowerCase().includes(b.toLowerCase())||m.type.toLowerCase().includes(b.toLowerCase())||m.ip.toLowerCase().includes(b.toLowerCase())||m.OS.toLowerCase().includes(b.toLowerCase())||m.description.toLowerCase().includes(b.toLowerCase())||p.transform(m.kb_manquantes).includes(b)||m.date_last_rapport.toLowerCase().includes(b.toLowerCase())}(w,I,this.pipe)),A=A.filter(w=>function v(m,b){return"Tous"==b||m.type==b||m.os_quick.toLocaleLowerCase().includes(b.toLocaleLowerCase())}(w,P));const k=A.length;let L=0;return A.forEach(w=>{L+=w.kb_manquantes}),A=A.slice((U-1)*E,(U-1)*E+E),(0,C.of)({serveurs:A,total:k,total_maj:L})}get_serveurs(){try{return this.http.get(this.baseURL+"servNode/serveurs/"+this._state.OSSelected,{withCredentials:!0})}catch(p){throw{msg:"Erreur get_serveurs(): "+p}}}}return m.\u0275fac=function(p){return new(p||m)(_.LFG(u.JJ),_.LFG(f.eN))},m.\u0275prov=_.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const N=[O]},8372:(D,T,s)=>{s.d(T,{b:()=>e});var a=s(4986),i=s(4482),C=s(5403);function e(g,h=a.z){return(0,i.e)((l,_)=>{let u=null,f=null,S=null;const x=()=>{if(u){u.unsubscribe(),u=null;const Z=f;f=null,_.next(Z)}};function v(){const Z=S+g,O=h.now();if(O<Z)return u=this.schedule(void 0,Z-O),void _.add(u);x()}l.subscribe((0,C.x)(_,Z=>{f=Z,S=h.now(),u||(u=h.schedule(v,g),_.add(u))},()=>{x(),_.complete()},void 0,()=>{f=u=null}))})}}}]);