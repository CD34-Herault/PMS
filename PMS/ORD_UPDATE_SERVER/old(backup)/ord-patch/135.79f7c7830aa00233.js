"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[135],{3135:(G,g,c)=>{c.r(g),c.d(g,{PlannificationExceptionnelRoutingModule:()=>V,ROUTES:()=>T});var f=c(6952),d=c(9808),u=c(2382),p=c(7528),C=c(2539),v=c(5592),b=c(4890),n=c(5e3),P=c(5212),m=c(1135),s=c(7751),A=c(4667),k=c(3305),y=c(9444),M=c(6333);function E(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",6)(1,"h4",7),n._uU(2,"Supression Planification"),n.qZA(),n.TgZ(3,"button",8),n.NdJ("click",function(){return n.CHM(e).$implicit.dismiss("Cross click")}),n.qZA()(),n.TgZ(4,"div",9)(5,"p")(6,"strong"),n._uU(7,"\xcates-vous s\xfbr de vouloir supprimer la planification de "),n.TgZ(8,"span",10),n._uU(9),n.qZA(),n._uU(10," ?"),n.qZA()(),n.TgZ(11,"p"),n._uU(12,"Toutes les informations associ\xe9es \xe0 la plannification seront perdues. "),n.TgZ(13,"span",11),n._uU(14,"Attention cette op\xe9ration ne peut pas \xeatre annul\xe9."),n.qZA()()(),n.TgZ(15,"div",12)(16,"button",13),n.NdJ("click",function(){return n.CHM(e).$implicit.dismiss("cancel click")}),n._uU(17,"Annuler"),n.qZA(),n.TgZ(18,"button",14),n.NdJ("click",function(){const o=n.CHM(e).$implicit,r=n.oxw();return o.close("Ok click"),r.supressionPlannif(r.idModal)}),n._uU(19,"Supprimer"),n.qZA()()}if(2&t){const e=n.oxw();n.xp6(9),n.hij('"',e.userModal,'"')}}const h=function(){return["fas","table"]};function q(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",6)(1,"h4",7),n._uU(2,"Ajout d'une planification"),n.qZA(),n.TgZ(3,"button",8),n.NdJ("click",function(){return n.CHM(e).$implicit.dismiss("Cross click")}),n.qZA()(),n.TgZ(4,"div",9)(5,"p")(6,"strong"),n._uU(7,"Selection de la date: "),n.qZA()(),n.TgZ(8,"div",15)(9,"input",16,17),n.NdJ("ngModelChange",function(l){return n.CHM(e),n.oxw().date_plannif=l}),n.qZA(),n.TgZ(11,"button",13),n.NdJ("click",function(){return n.CHM(e),n.MAs(10).toggle()}),n._UZ(12,"fa-icon",18),n.qZA()(),n.TgZ(13,"p")(14,"strong"),n._uU(15,"Selection des serveurs: "),n.qZA()(),n.TgZ(16,"ngx-treeview",19),n.NdJ("filterChange",function(l){return n.CHM(e),n.oxw().onFilterChange(l)})("selectedChange",function(l){return n.CHM(e),n.oxw().values=l}),n.qZA()(),n.TgZ(17,"div",12)(18,"button",13),n.NdJ("click",function(){return n.CHM(e).$implicit.dismiss("cancel click")}),n._uU(19,"Annuler"),n.qZA(),n.TgZ(20,"button",20),n.NdJ("click",function(){const o=n.CHM(e).$implicit,r=n.oxw();return o.close("Ok click"),r.creationPlannification()}),n._uU(21,"Cr\xe9er"),n.qZA()()}if(2&t){const e=n.oxw();n.xp6(9),n.Q6J("ngModel",e.date_plannif),n.xp6(3),n.Q6J("icon",n.DdM(4,h)),n.xp6(4),n.Q6J("config",e.config)("items",e.items_fullServeur)}}function U(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"button",31),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2).$implicit,o=n.oxw(2);return o.planel="modify",o.getTreeItemsFullServeur(!0,l),o.setDatePlannif(l)}),n._uU(1,"Modifier"),n.qZA()}}function J(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"button",32),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2).$implicit,o=n.oxw(2),r=n.MAs(1);return o.open(r),o.userModal=l.user,o.idModal=l._id}),n._uU(1,"Annuler"),n.qZA()}}function w(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",25)(1,"strong",26),n._uU(2),n.qZA(),n.TgZ(3,"div",27)(4,"button",28),n.NdJ("click",function(){return n.CHM(e),n.oxw(3).planel="detail"}),n._uU(5,"D\xe9tail"),n.qZA(),n.YNc(6,U,2,0,"button",29),n.ALo(7,"async"),n.YNc(8,J,2,0,"button",30),n.ALo(9,"async"),n.qZA()()}if(2&t){const e=n.oxw().$implicit,i=n.oxw(2);n.xp6(2),n.Oqu(e.date_plannif),n.xp6(4),n.Q6J("ngIf",n.lcZ(7,3,i.auth.isAdmin)),n.xp6(2),n.Q6J("ngIf",n.lcZ(9,5,i.auth.isAdmin))}}function N(t,a){if(1&t&&(n.TgZ(0,"tr")(1,"th",37),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA()()),2&t){const e=a.$implicit,i=a.index;n.xp6(2),n.Oqu(i+1),n.xp6(2),n.hij(" ",e.name," "),n.xp6(2),n.Oqu(e.type),n.xp6(2),n.Oqu(e.description)}}function I(t,a){if(1&t&&(n._uU(0),n.TgZ(1,"table",35)(2,"thead")(3,"tr")(4,"th",36),n._uU(5,"#"),n.qZA(),n.TgZ(6,"th",36),n._uU(7,"Nom"),n.qZA(),n.TgZ(8,"th",36),n._uU(9,"Type"),n.qZA(),n.TgZ(10,"th",36),n._uU(11,"Description"),n.qZA()()(),n.TgZ(12,"tbody"),n.YNc(13,N,9,4,"tr",23),n.qZA()()),2&t){const e=n.oxw(2).$implicit;n.hij(" Planifi\xe9 par: ",e.user," "),n.xp6(13),n.Q6J("ngForOf",e.plannifs)}}function O(t,a){1&t&&n.YNc(0,I,14,2,"ng-template",33,34,n.W1O)}function F(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",38)(1,"div",15)(2,"input",39,17),n.NdJ("ngModelChange",function(l){return n.CHM(e),n.oxw(4).date_plannif=l}),n.qZA(),n.TgZ(4,"button",13),n.NdJ("click",function(){return n.CHM(e),n.MAs(3).toggle()}),n._UZ(5,"fa-icon",18),n.qZA()(),n.TgZ(6,"label")(7,"strong"),n._uU(8),n.qZA()(),n.TgZ(9,"ngx-treeview",19),n.NdJ("filterChange",function(l){return n.CHM(e),n.oxw(4).onFilterChange(l)})("selectedChange",function(l){return n.CHM(e),n.oxw(4).values=l}),n.qZA(),n.TgZ(10,"button",40),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2).$implicit;return n.oxw(2).modificationPlannification(l._id)}),n._uU(11,"Modifier"),n.qZA()()}if(2&t){const e=n.oxw(2).$implicit,i=n.oxw(2);n.xp6(2),n.Q6J("ngModel",i.date_plannif),n.xp6(3),n.Q6J("icon",n.DdM(5,h)),n.xp6(3),n.hij("Liste serveurs planifi\xe9s par: ",e.user,""),n.xp6(1),n.Q6J("config",i.config)("items",i.items_fullServeur)}}function S(t,a){1&t&&n.YNc(0,F,12,6,"ng-template",33,34,n.W1O)}function D(t,a){if(1&t&&(n.TgZ(0,"ngb-panel"),n.YNc(1,w,10,7,"ng-template",24),n.YNc(2,O,2,0,null,5),n.YNc(3,S,2,0,null,5),n.qZA()),2&t){const e=n.oxw(2);n.xp6(2),n.Q6J("ngIf","detail"==e.planel),n.xp6(1),n.Q6J("ngIf","modify"==e.planel)}}function Y(t,a){if(1&t&&(n.TgZ(0,"ngb-accordion",21,22),n.YNc(2,D,4,2,"ngb-panel",23),n.qZA()),2&t){const e=a.ngIf;n.Q6J("closeOthers",!0),n.xp6(2),n.Q6J("ngForOf",e)}}function $(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"button",43),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2),o=n.MAs(3);return l.open(o),l.getTreeItemsFullServeur(!1,null)}),n._uU(1,"Ajouter une planification"),n.qZA()}}function H(t,a){if(1&t&&(n.TgZ(0,"div")(1,"strong",41),n._uU(2,"Pas de planifications"),n.qZA(),n.YNc(3,$,2,0,"button",42),n.ALo(4,"async"),n.qZA()),2&t){const e=n.oxw();n.xp6(3),n.Q6J("ngIf",n.lcZ(4,1,e.auth.isAdmin))}}function Q(t,a){if(1&t&&(n.TgZ(0,"div",45)(1,"p",26),n._uU(2),n.qZA(),n.TgZ(3,"button",46),n._uU(4,"D\xe9tail"),n.qZA()()),2&t){const e=n.oxw().$implicit;n.xp6(2),n.Oqu(e.date_plannif)}}function j(t,a){if(1&t&&(n.TgZ(0,"tr")(1,"th",37),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA()()),2&t){const e=a.$implicit,i=a.index;n.xp6(2),n.Oqu(i+1),n.xp6(2),n.hij(" ",e.name," "),n.xp6(2),n.Oqu(e.type),n.xp6(2),n.Oqu(e.description)}}function B(t,a){if(1&t&&(n._uU(0),n.TgZ(1,"table",35)(2,"thead")(3,"tr")(4,"th",36),n._uU(5,"#"),n.qZA(),n.TgZ(6,"th",36),n._uU(7,"Nom"),n.qZA(),n.TgZ(8,"th",36),n._uU(9,"Type"),n.qZA(),n.TgZ(10,"th",36),n._uU(11,"Description"),n.qZA()()(),n.TgZ(12,"tbody"),n.YNc(13,j,9,4,"tr",23),n.qZA()()),2&t){const e=n.oxw().$implicit;n.hij(" ",e.user," "),n.xp6(13),n.Q6J("ngForOf",e.plannifs)}}function R(t,a){1&t&&(n.TgZ(0,"ngb-panel"),n.YNc(1,Q,5,1,"ng-template",24),n.YNc(2,B,14,2,"ng-template",44),n.qZA())}function L(t,a){if(1&t&&(n.TgZ(0,"ngb-accordion",null,22),n.YNc(2,R,3,0,"ngb-panel",23),n.qZA()),2&t){const e=a.ngIf;n.xp6(2),n.Q6J("ngForOf",e)}}let X=(()=>{class t{constructor(e,i,l,o){this.plannificationExceptionnelService=e,this.modalService=i,this.auth=l,this.serveursService=o,this.serv=[],this.mesPlannifs=new m.X([]),this.mesPlannifs_old=new m.X([]),this.mesPlannifs_futur=new m.X([]),this.planel="detail",this.userModal="",this.idModal="",this.dropdownEnabled=!0,this.config=p.VF.create({hasAllCheckBox:!1,hasFilter:!0,hasCollapseExpand:!0,decoupleChildFromParent:!1,maxHeight:400})}ngOnInit(){this.plannificationExceptionnelService.getPlannifications().subscribe(e=>{this.mesPlannifs.next(e),this.trie()}),this.serveurs$=this.serveursService.messerveurs$}open(e){this.modalService.open(e,{centered:!0}).result.then(i=>{this.closeResult=`Closed with: ${i}`},i=>{this.closeResult=`Dismissed ${this.getDismissReason(i)}`})}getDismissReason(e){return e===s.If.ESC?"by pressing ESC":e===s.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${e}`}trie(){let e=[],i=[];this.mesPlannifs.getValue().forEach(l=>{let o=l.date_plannif.split("/"),r=new Date(o[2]+"/"+o[1]+"/"+o[0]+" 21:00:00"),_=new Date;r.getTime()>=_.getTime()?i.push(l):e.push(l)}),this.mesPlannifs_old.next(e),this.mesPlannifs_futur.next(i)}supressionPlannif(e){null!=e?this.plannificationExceptionnelService.supressionPlannification(e).subscribe(i=>{this.ngOnInit()}):console.log("error: _ID unfined")}creationPlannification(){let e=this.getCheckedItem(this.items_fullServeur),i=[];this.serv.forEach(l=>{e.includes(l.name)&&i.push(l)}),this.plannificationExceptionnelService.plannification(i,this.auth.user.value.name,this.date_plannif).subscribe(l=>{this.ngOnInit(),setTimeout(function(){alert(l)},1e3)})}modificationPlannification(e){let i=this.getCheckedItem(this.items_fullServeur),l=[];this.serv.forEach(o=>{i.includes(o.name)&&l.push(o)}),null!=e?this.plannificationExceptionnelService.modificationPlannification(e,l,this.auth.user.value.name,this.date_plannif).subscribe(o=>{this.ngOnInit(),setTimeout(function(){alert(o)},1e3)}):console.log("error: _ID unfined")}setDatePlannif(e){let i=e.date_plannif.split("/"),l=parseInt(i[0]),o=parseInt(i[1]),r=parseInt(i[2]);this.date_plannif=new s.qj(r,o,l)}getCheckedItem(e){let i=[];return e[0].children.forEach(l=>{l.children.forEach(o=>{o.checked&&i.push(o.text)})}),i}getTreeItemsFullServeur(e,i){const l=new p.cA({text:"serveurs",value:9,children:[{text:"Production",value:91,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0},{text:"Pre-production",value:92,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0},{text:"Recette-Formation",value:93,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0},{text:"BDD",value:94,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0},{text:"BDD-Recette",value:95,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0},{text:"DMZ",value:96,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0}]});return this.serveurs$.subscribe(o=>{this.serv=o,o.forEach(r=>{l.children.forEach(_=>{_.text==r.type&&_.children.push(new p.cA({text:r.name,value:_.value+101,checked:!1}))})}),this.items_fullServeur=[l],1==e&&null!=i&&i.plannifs.forEach(r=>{this.items_fullServeur[0].children.forEach(_=>{_.text==r.type&&_.children.forEach(Z=>{Z.text==r.name&&(Z.checked=!0)})})})}),[l]}onFilterChange(e){console.log("filter:",e)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(b.n),n.Y36(s.FF),n.Y36(A.g),n.Y36(k.t))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-table-plannif"]],decls:19,vars:7,consts:[["content",""],["content_addPlannif",""],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"card-body"],["activeIds","1",3,"closeOthers",4,"ngIf"],[4,"ngIf"],[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"btn-close",3,"click"],[1,"modal-body"],[1,"text-primary"],[1,"text-danger"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"input-group","mb-3"],["id","datePlannif","placeholder","yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control",3,"ngModel","ngModelChange"],["dp","ngbDatepicker"],[1,"mr-1",3,"icon"],[3,"config","items","filterChange","selectedChange"],["type","button",1,"btn","btn-success",3,"click"],["activeIds","1",3,"closeOthers"],["acc","ngbAccordion"],[4,"ngFor","ngForOf"],["ngbPanelHeader",""],[1,"accordion-button","custom-header","form-inline"],[1,"m-0"],[1,"ml-auto"],["ngbPanelToggle","",1,"btn","btn-sm","btn-outline-primary","mr-3",3,"click"],["ngbPanelToggle","","class","btn btn-sm btn-outline-warning mr-3",3,"click",4,"ngIf"],["class","btn btn-sm btn-outline-danger mr-3",3,"click",4,"ngIf"],["ngbPanelToggle","",1,"btn","btn-sm","btn-outline-warning","mr-3",3,"click"],[1,"btn","btn-sm","btn-outline-danger","mr-3",3,"click"],["ngbPanelContent","first"],["test",""],[1,"table","table-striped"],["scope","col"],["scope","row"],[1,"form-group"],["id","datePlannif","placeholder","yyyy-mm-dd","name","dp_modify","ngbDatepicker","",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-warning",3,"click"],[1,"mr-3"],["class","btn btn-sm btn-outline-primary mr-3",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-outline-primary","mr-3",3,"click"],["ngbPanelContent",""],[1,"accordion-button","custom-header","justify-content-between","form-inline"],["ngbPanelToggle","",1,"btn","btn-sm","btn-outline-primary","ms-2"]],template:function(e,i){1&e&&(n.YNc(0,E,20,1,"ng-template",null,0,n.W1O),n.YNc(2,q,22,5,"ng-template",null,1,n.W1O),n.TgZ(4,"sb-card")(5,"div",2)(6,"div"),n._uU(7,"plannification Futur"),n.qZA()(),n.TgZ(8,"div",3),n.YNc(9,Y,3,2,"ngb-accordion",4),n.ALo(10,"async"),n.YNc(11,H,5,3,"div",5),n.qZA()(),n.TgZ(12,"sb-card")(13,"div",2)(14,"div"),n._uU(15,"planifications pass\xe9s"),n.qZA()(),n.TgZ(16,"div",3),n.YNc(17,L,3,1,"ngb-accordion",5),n.ALo(18,"async"),n.qZA()()),2&e&&(n.xp6(9),n.Q6J("ngIf",n.lcZ(10,3,i.mesPlannifs_futur)),n.xp6(2),n.Q6J("ngIf",0==i.mesPlannifs_futur.getValue().length),n.xp6(6),n.Q6J("ngIf",n.lcZ(18,5,i.mesPlannifs_old)))},directives:[s.J4,u.Fj,u.JJ,u.On,y.BN,p.GA,M.A,d.O5,s.gY,d.sg,s.Gk,s.k9,s.I_,s.gW],pipes:[d.Ov],styles:[""],changeDetection:0}),t})(),x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-plannification-exceptionnel"]],decls:2,vars:1,consts:[["title","Planifications",3,"hideBreadcrumbs"]],template:function(e,i){1&e&&n._UZ(0,"sb-dashboard-head",0)(1,"app-table-plannif"),2&e&&n.Q6J("hideBreadcrumbs",!1)},directives:[P.T,X],styles:[""]}),t})(),W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[...b.u],imports:[[d.ez,f.Bz,u.UX,u.u5,C.n,v.A,p.X5.forRoot()]]}),t})();var z=c(6440);const T=[{path:"",canActivate:[],component:x,data:{title:"Plannifications - Patch Management",breadcrumbs:[{text:"Dashboard",link:"/patchManagement/dashboard"},{text:"Plannifications",active:!0}]}}];let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[W,f.Bz.forChild(T),z.J],f.Bz]}),t})()}}]);