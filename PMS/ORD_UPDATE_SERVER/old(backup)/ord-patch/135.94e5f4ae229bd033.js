"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[135],{3135:(ln,b,r)=>{r.r(b),r.d(b,{PlannificationExceptionnelRoutingModule:()=>nn,ROUTES:()=>C});var g=r(6952),f=r(9808),p=r(2382),d=r(7528),Z=r(2539),v=r(5592),h=r(4890),n=r(5e3),P=r(5212),m=r(1135),_=r(7751),A=r(1674),M=r(4667),y=r(3305),E=r(9444),q=r(6333);function k(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",6)(1,"h4",7),n._uU(2,"Supression Planification"),n.qZA(),n.TgZ(3,"button",8),n.NdJ("click",function(){return n.CHM(e).$implicit.dismiss("Cross click")}),n.qZA()(),n.TgZ(4,"div",9)(5,"p")(6,"strong"),n._uU(7,"\xcates-vous s\xfbr de vouloir supprimer la planification de "),n.TgZ(8,"span",10),n._uU(9),n.qZA(),n._uU(10," ?"),n.qZA()(),n.TgZ(11,"p"),n._uU(12,"Toutes les informations associ\xe9es \xe0 la plannification seront perdues. "),n.TgZ(13,"span",11),n._uU(14,"Attention cette op\xe9ration ne peut pas \xeatre annul\xe9."),n.qZA()()(),n.TgZ(15,"div",12)(16,"button",13),n.NdJ("click",function(){return n.CHM(e).$implicit.dismiss("cancel click")}),n._uU(17,"Annuler"),n.qZA(),n.TgZ(18,"button",14),n.NdJ("click",function(){const o=n.CHM(e).$implicit,c=n.oxw();return o.close("Ok click"),c.supressionPlannif(c.idModal)}),n._uU(19,"Supprimer"),n.qZA()()}if(2&t){const e=n.oxw();n.xp6(9),n.hij('"',e.userModal,'"')}}const T=function(){return["fas","table"]};function U(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",6)(1,"h4",7),n._uU(2,"Ajout d'une planification"),n.qZA(),n.TgZ(3,"button",8),n.NdJ("click",function(){return n.CHM(e).$implicit.dismiss("Cross click")}),n.qZA()(),n.TgZ(4,"div",9)(5,"p")(6,"strong"),n._uU(7,"Selection de la date: "),n.qZA()(),n.TgZ(8,"div",15)(9,"input",16,17),n.NdJ("ngModelChange",function(l){return n.CHM(e),n.oxw().date_plannif=l}),n.qZA(),n.TgZ(11,"button",13),n.NdJ("click",function(){return n.CHM(e),n.MAs(10).toggle()}),n._UZ(12,"fa-icon",18),n.qZA()(),n.TgZ(13,"label",19),n._uU(14,"Horaire Debut/fin"),n.qZA(),n.TgZ(15,"div",20)(16,"input",21),n.NdJ("ngModelChange",function(l){return n.CHM(e),n.oxw().horaire_debut=l}),n.qZA(),n.TgZ(17,"input",22),n.NdJ("ngModelChange",function(l){return n.CHM(e),n.oxw().horaire_fin=l}),n.qZA()(),n._UZ(18,"hr"),n.TgZ(19,"p")(20,"strong"),n._uU(21,"Selection des serveurs: "),n.qZA()(),n.TgZ(22,"ngx-treeview",23),n.NdJ("filterChange",function(l){return n.CHM(e),n.oxw().onFilterChange(l)})("selectedChange",function(l){return n.CHM(e),n.oxw().values=l}),n.qZA()(),n.TgZ(23,"div",12)(24,"button",13),n.NdJ("click",function(){return n.CHM(e).$implicit.dismiss("cancel click")}),n._uU(25,"Annuler"),n.qZA(),n.TgZ(26,"button",24),n.NdJ("click",function(){const o=n.CHM(e).$implicit,c=n.oxw();return o.close("Ok click"),c.creationPlannification()}),n._uU(27,"Cr\xe9er"),n.qZA()()}if(2&t){const e=n.oxw();n.xp6(9),n.Q6J("ngModel",e.date_plannif),n.xp6(3),n.Q6J("icon",n.DdM(8,T)),n.xp6(4),n.s9C("value",e.horaire_debut),n.Q6J("ngModel",e.horaire_debut),n.xp6(1),n.s9C("value",e.horaire_fin),n.Q6J("ngModel",e.horaire_fin),n.xp6(5),n.Q6J("config",e.config)("items",e.items_fullServeur)}}function J(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"button",26),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2),o=n.MAs(3);return l.open(o),l.getTreeItemsFullServeur(!1,null)}),n._uU(1,"Ajouter une planification"),n.qZA()}}function w(t,a){if(1&t&&(n.TgZ(0,"div"),n.YNc(1,J,2,0,"button",25),n.ALo(2,"async"),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,e.auth.isAdmin))}}function N(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"button",37),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2).$implicit,o=n.oxw(2);return o.planel="modify",o.getTreeItemsFullServeur(!0,l),o.setDatePlannif(l)}),n._uU(1,"Modifier"),n.qZA()}}function I(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"button",38),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2).$implicit,o=n.oxw(2),c=n.MAs(1);return o.open(c),o.userModal=l.user,o.idModal=l._id}),n._uU(1,"Annuler"),n.qZA()}}function S(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",31)(1,"strong",32),n._uU(2),n.qZA(),n.TgZ(3,"div",33)(4,"button",34),n.NdJ("click",function(){return n.CHM(e),n.oxw(3).planel="detail"}),n._uU(5,"D\xe9tail"),n.qZA(),n.YNc(6,N,2,0,"button",35),n.ALo(7,"async"),n.YNc(8,I,2,0,"button",36),n.ALo(9,"async"),n.qZA()()}if(2&t){const e=n.oxw().$implicit,i=n.oxw(2);n.xp6(2),n.lnq("",e.date_plannif," de ",e.horaire_debut," \xe0 ",e.horaire_fin,""),n.xp6(4),n.Q6J("ngIf",n.lcZ(7,5,i.auth.isAdmin)),n.xp6(2),n.Q6J("ngIf",n.lcZ(9,7,i.auth.isAdmin))}}function F(t,a){if(1&t&&(n.TgZ(0,"tr")(1,"th",43),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA()()),2&t){const e=a.$implicit,i=a.index;n.xp6(2),n.Oqu(i+1),n.xp6(2),n.hij(" ",e.name," "),n.xp6(2),n.Oqu(e.type),n.xp6(2),n.Oqu(e.description)}}function D(t,a){if(1&t&&(n.TgZ(0,"span",10),n._uU(1),n.qZA(),n.TgZ(2,"table",41)(3,"thead")(4,"tr")(5,"th",42),n._uU(6,"#"),n.qZA(),n.TgZ(7,"th",42),n._uU(8,"Nom"),n.qZA(),n.TgZ(9,"th",42),n._uU(10,"Type"),n.qZA(),n.TgZ(11,"th",42),n._uU(12,"Description"),n.qZA()()(),n.TgZ(13,"tbody"),n.YNc(14,F,9,4,"tr",29),n.qZA()()),2&t){const e=n.oxw(2).$implicit;n.xp6(1),n.lnq("Planifi\xe9 par ",e.user," de ",e.horaire_debut," \xe0 ",e.horaire_fin,""),n.xp6(13),n.Q6J("ngForOf",e.plannifs)}}function O(t,a){1&t&&n.YNc(0,D,15,4,"ng-template",39,40,n.W1O)}function H(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"div",44)(1,"div",15)(2,"input",45,17),n.NdJ("ngModelChange",function(l){return n.CHM(e),n.oxw(4).date_plannif=l}),n.qZA(),n.TgZ(4,"button",13),n.NdJ("click",function(){return n.CHM(e),n.MAs(3).toggle()}),n._UZ(5,"fa-icon",18),n.qZA()(),n.TgZ(6,"label",19),n._uU(7,"Horaire Debut/fin"),n.qZA(),n.TgZ(8,"div",20)(9,"input",21),n.NdJ("ngModelChange",function(l){return n.CHM(e),n.oxw(4).horaire_debut=l}),n.qZA(),n.TgZ(10,"input",22),n.NdJ("ngModelChange",function(l){return n.CHM(e),n.oxw(4).horaire_fin=l}),n.qZA()(),n._UZ(11,"hr"),n.TgZ(12,"label")(13,"strong"),n._uU(14),n.qZA()(),n.TgZ(15,"ngx-treeview",23),n.NdJ("filterChange",function(l){return n.CHM(e),n.oxw(4).onFilterChange(l)})("selectedChange",function(l){return n.CHM(e),n.oxw(4).values=l}),n.qZA(),n.TgZ(16,"button",46),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2).$implicit;return n.oxw(2).modificationPlannification(l._id)}),n._uU(17,"Modifier"),n.qZA()()}if(2&t){const e=n.oxw(2).$implicit,i=n.oxw(2);n.xp6(2),n.Q6J("ngModel",i.date_plannif),n.xp6(3),n.Q6J("icon",n.DdM(9,T)),n.xp6(4),n.s9C("value",i.horaire_debut),n.Q6J("ngModel",i.horaire_debut),n.xp6(1),n.s9C("value",i.horaire_fin),n.Q6J("ngModel",i.horaire_fin),n.xp6(4),n.hij("Liste serveurs planifi\xe9s par: ",e.user,""),n.xp6(1),n.Q6J("config",i.config)("items",i.items_fullServeur)}}function Y(t,a){1&t&&n.YNc(0,H,18,10,"ng-template",39,40,n.W1O)}function Q(t,a){if(1&t&&(n.TgZ(0,"ngb-panel"),n.YNc(1,S,10,9,"ng-template",30),n.YNc(2,O,2,0,null,4),n.YNc(3,Y,2,0,null,4),n.qZA()),2&t){const e=n.oxw(2);n.xp6(2),n.Q6J("ngIf","detail"==e.planel),n.xp6(1),n.Q6J("ngIf","modify"==e.planel)}}function $(t,a){if(1&t&&(n.TgZ(0,"ngb-accordion",27,28),n.YNc(2,Q,4,2,"ngb-panel",29),n.qZA()),2&t){const e=a.ngIf;n.Q6J("closeOthers",!0),n.xp6(2),n.Q6J("ngForOf",e)}}function j(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"button",26),n.NdJ("click",function(){n.CHM(e);const l=n.oxw(2),o=n.MAs(3);return l.open(o),l.getTreeItemsFullServeur(!1,null)}),n._uU(1,"Ajouter une planification"),n.qZA()}}function B(t,a){if(1&t&&(n.TgZ(0,"div")(1,"strong",47),n._uU(2,"Pas de planifications"),n.qZA(),n.YNc(3,j,2,0,"button",25),n.ALo(4,"async"),n.qZA()),2&t){const e=n.oxw();n.xp6(3),n.Q6J("ngIf",n.lcZ(4,1,e.auth.isAdmin))}}function R(t,a){if(1&t&&(n.TgZ(0,"div",49)(1,"p",32),n._uU(2),n.qZA(),n.TgZ(3,"button",50),n._uU(4,"D\xe9tail"),n.qZA()()),2&t){const e=n.oxw().$implicit;n.xp6(2),n.lnq("",e.date_plannif," de ",e.horaire_debut," \xe0 ",e.horaire_fin,"")}}function L(t,a){if(1&t&&(n.TgZ(0,"tr")(1,"th",43),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA()()),2&t){const e=a.$implicit,i=a.index;n.xp6(2),n.Oqu(i+1),n.xp6(2),n.hij(" ",e.name," "),n.xp6(2),n.Oqu(e.type),n.xp6(2),n.Oqu(e.description)}}function X(t,a){if(1&t&&(n._uU(0),n.TgZ(1,"table",41)(2,"thead")(3,"tr")(4,"th",42),n._uU(5,"#"),n.qZA(),n.TgZ(6,"th",42),n._uU(7,"Nom"),n.qZA(),n.TgZ(8,"th",42),n._uU(9,"Type"),n.qZA(),n.TgZ(10,"th",42),n._uU(11,"Description"),n.qZA()()(),n.TgZ(12,"tbody"),n.YNc(13,L,9,4,"tr",29),n.qZA()()),2&t){const e=n.oxw().$implicit;n.hij(" ",e.user," "),n.xp6(13),n.Q6J("ngForOf",e.plannifs)}}function z(t,a){1&t&&(n.TgZ(0,"ngb-panel"),n.YNc(1,R,5,3,"ng-template",30),n.YNc(2,X,14,2,"ng-template",48),n.qZA())}function W(t,a){if(1&t&&(n.TgZ(0,"ngb-accordion",null,28),n.YNc(2,z,3,0,"ngb-panel",29),n.qZA()),2&t){const e=a.ngIf;n.xp6(2),n.Q6J("ngForOf",e)}}let V=(()=>{class t{constructor(e,i,l,o,c){this.plannificationExceptionnelService=e,this.calendrierService=i,this.modalService=l,this.auth=o,this.serveursService=c,this.serv=[],this.mesPlannifs=new m.X([]),this.mesPlannifs_old=new m.X([]),this.mesPlannifs_futur=new m.X([]),this.planel="detail",this.userModal="",this.idModal="",this.dropdownEnabled=!0,this.config=d.VF.create({hasAllCheckBox:!1,hasFilter:!0,hasCollapseExpand:!0,decoupleChildFromParent:!1,maxHeight:400}),this.horaire_debut="19:00",this.horaire_fin="23:00"}ngOnInit(){this.plannificationExceptionnelService.getPlannifications().subscribe(e=>{this.mesPlannifs.next(e),this.trie()}),this.serveurs$=this.serveursService.messerveurs$}open(e){this.modalService.open(e,{centered:!0}).result.then(i=>{this.closeResult=`Closed with: ${i}`},i=>{this.closeResult=`Dismissed ${this.getDismissReason(i)}`})}getDismissReason(e){return e===_.If.ESC?"by pressing ESC":e===_.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${e}`}trie(){let e=[],i=[];this.mesPlannifs.getValue().forEach(l=>{let o=l.date_plannif.split("/"),c=new Date(o[2]+"/"+o[1]+"/"+o[0]+" 21:00:00"),s=new Date;c.getTime()>=s.getTime()?i.push(l):e.push(l)}),this.mesPlannifs_old.next(e),this.mesPlannifs_futur.next(i)}supressionPlannif(e){null!=e?this.plannificationExceptionnelService.supressionPlannification(e).subscribe(i=>{this.calendrierService.deleteEventById(e).subscribe(l=>{alert("Supression Termin\xe9e")}),this.ngOnInit()}):console.log("error: _ID unfined")}creationPlannification(){let e=this.getCheckedItem(this.items_fullServeur),i=[];this.serv.forEach(l=>{e.includes(l.name)&&i.push(l)}),this.plannificationExceptionnelService.plannification(i,this.auth.user.value.name,this.horaire_debut,this.horaire_fin,this.date_plannif).subscribe(l=>{this.calendrierService.get_calendrier().subscribe(o=>{let c=o.find(s=>s.name.match("Exceptionnel"));if(null!=c){let s=new Date(this.date_plannif.year,this.date_plannif.month-1,this.date_plannif.day);s.setHours(parseInt(this.horaire_debut.split(":")[0])),s.setMinutes(parseInt(this.horaire_debut.split(":")[1]));let u=new Date(this.date_plannif.year,this.date_plannif.month-1,this.date_plannif.day);u.setHours(parseInt(this.horaire_fin.split(":")[0])),u.setMinutes(parseInt(this.horaire_fin.split(":")[1])),this.calendrierService.put_dates({title:"Planification Exceptionnel",start:s,resizable:{beforeStart:!0,afterEnd:!0},end:u,color:{primary:c.couleurs.primaire,secondary:c.couleurs.secondaire},id:""+l,actions:[{label:"<small>supprimer</small>",a11yLabel:"Delete",onClick({}){}}]},c._id).subscribe(tn=>{this.ngOnInit(),setTimeout(function(){alert("Ajout Termin\xe9")},1e3)})}})})}modificationPlannification(e){let i=this.getCheckedItem(this.items_fullServeur),l=[];this.serv.forEach(o=>{i.includes(o.name)&&l.push(o)}),null!=e?this.plannificationExceptionnelService.modificationPlannification(e,l,this.auth.user.value.name,this.horaire_debut,this.horaire_fin,this.date_plannif).subscribe(o=>{this.ngOnInit(),setTimeout(function(){alert(o)},1e3)}):console.log("error: _ID unfined")}setDatePlannif(e){let i=e.date_plannif.split("/"),l=parseInt(i[0]),o=parseInt(i[1]),c=parseInt(i[2]);this.date_plannif=new _.qj(c,o,l)}getCheckedItem(e){let i=[];return e[0].children.forEach(l=>{l.children.forEach(o=>{o.checked&&i.push(o.text)})}),i}getTreeItemsFullServeur(e,i){const l=new d.cA({text:"serveurs",value:9,children:[{text:"Production",value:91,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0},{text:"Pre-production",value:92,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0},{text:"Recette-Formation",value:93,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0},{text:"BDD",value:94,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0},{text:"BDD-Recette",value:95,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0},{text:"DMZ",value:96,children:[{text:"",value:0,disabled:!0,checked:!1}],collapsed:!0}]});return this.serveurs$.subscribe(o=>{this.serv=o,o.forEach(c=>{l.children.forEach(s=>{s.text==c.type&&s.children.push(new d.cA({text:c.name,value:s.value+101,checked:!1}))})}),this.items_fullServeur=[l],1==e&&null!=i&&i.plannifs.forEach(c=>{this.items_fullServeur[0].children.forEach(s=>{s.text==c.type&&s.children.forEach(u=>{u.text==c.name&&(u.checked=!0)})})})}),[l]}onFilterChange(e){console.log("filter:",e)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(h.n),n.Y36(A.g),n.Y36(_.FF),n.Y36(M.g),n.Y36(y.t))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-table-plannif"]],decls:21,vars:8,consts:[["content",""],["content_addPlannif",""],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"card-body"],[4,"ngIf"],["activeIds","1",3,"closeOthers",4,"ngIf"],[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"btn-close",3,"click"],[1,"modal-body"],[1,"text-primary"],[1,"text-danger"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"input-group","mb-3"],["id","datePlannif","placeholder","yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control",3,"ngModel","ngModelChange"],["dp","ngbDatepicker"],[1,"mr-1",3,"icon"],["for","dateOfBirth"],[1,"input-group"],["type","time","id","appt","name","horaireMaj",1,"form-control",3,"ngModel","value","ngModelChange"],["type","time","id","appt","name","horaireMaj2",1,"form-control",3,"ngModel","value","ngModelChange"],[3,"config","items","filterChange","selectedChange"],["type","button",1,"btn","btn-success",3,"click"],["class","btn btn-sm btn-outline-primary mr-3",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-outline-primary","mr-3",3,"click"],["activeIds","1",3,"closeOthers"],["acc","ngbAccordion"],[4,"ngFor","ngForOf"],["ngbPanelHeader",""],[1,"accordion-button","custom-header","form-inline"],[1,"m-0"],[1,"ml-auto"],["ngbPanelToggle","",1,"btn","btn-sm","btn-outline-primary","mr-3",3,"click"],["ngbPanelToggle","","class","btn btn-sm btn-outline-warning mr-3",3,"click",4,"ngIf"],["class","btn btn-sm btn-outline-danger mr-3",3,"click",4,"ngIf"],["ngbPanelToggle","",1,"btn","btn-sm","btn-outline-warning","mr-3",3,"click"],[1,"btn","btn-sm","btn-outline-danger","mr-3",3,"click"],["ngbPanelContent","first"],["test",""],[1,"table","table-striped"],["scope","col"],["scope","row"],[1,"form-group"],["id","datePlannif","placeholder","yyyy-mm-dd","name","dp_modify","ngbDatepicker","",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-warning",3,"click"],[1,"mr-3"],["ngbPanelContent",""],[1,"accordion-button","custom-header","justify-content-between","form-inline"],["ngbPanelToggle","",1,"btn","btn-sm","btn-outline-primary","ms-2"]],template:function(e,i){1&e&&(n.YNc(0,k,20,1,"ng-template",null,0,n.W1O),n.YNc(2,U,28,9,"ng-template",null,1,n.W1O),n.TgZ(4,"sb-card")(5,"div",2)(6,"div"),n._uU(7,"planifications Futures"),n.qZA()(),n.TgZ(8,"div",3),n.YNc(9,w,3,3,"div",4),n._UZ(10,"br"),n.YNc(11,$,3,2,"ngb-accordion",5),n.ALo(12,"async"),n.YNc(13,B,5,3,"div",4),n.qZA()(),n.TgZ(14,"sb-card")(15,"div",2)(16,"div"),n._uU(17,"planifications pass\xe9es"),n.qZA()(),n.TgZ(18,"div",3),n.YNc(19,W,3,1,"ngb-accordion",4),n.ALo(20,"async"),n.qZA()()),2&e&&(n.xp6(9),n.Q6J("ngIf",i.mesPlannifs_futur.getValue().length>0),n.xp6(2),n.Q6J("ngIf",n.lcZ(12,4,i.mesPlannifs_futur)),n.xp6(2),n.Q6J("ngIf",0==i.mesPlannifs_futur.getValue().length),n.xp6(6),n.Q6J("ngIf",n.lcZ(20,6,i.mesPlannifs_old)))},directives:[_.J4,p.Fj,p.JJ,p.On,E.BN,d.GA,q.A,f.O5,_.gY,f.sg,_.Gk,_.k9,_.I_,_.gW],pipes:[f.Ov],styles:[""],changeDetection:0}),t})(),x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-plannification-exceptionnel"]],decls:2,vars:1,consts:[["title","Planifications",3,"hideBreadcrumbs"]],template:function(e,i){1&e&&n._UZ(0,"sb-dashboard-head",0)(1,"app-table-plannif"),2&e&&n.Q6J("hideBreadcrumbs",!1)},directives:[P.T,V],styles:[""]}),t})(),G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[...h.u],imports:[[f.ez,g.Bz,p.UX,p.u5,Z.n,v.A,d.X5.forRoot()]]}),t})();var K=r(6440);const C=[{path:"",canActivate:[],component:x,data:{title:"Plannifications - Patch Management",breadcrumbs:[{text:"Dashboard",link:"/patchManagement/dashboard"},{text:"Plannifications",active:!0}]}}];let nn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[G,g.Bz.forChild(C),K.J],g.Bz]}),t})()}}]);