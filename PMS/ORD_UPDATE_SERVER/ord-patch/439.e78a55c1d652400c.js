"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[439],{5690:(ne,x,n)=>{n.r(x),n.d(x,{DashboardRoutingModule:()=>ae,ROUTES:()=>Q});var l=n(6952),i=n(9808),C=n(2382),M=n(2539),_=n(5592),B=n(9136),q=n(6440),A=n(9646),e=n(5e3);const L=[(()=>{class t{canActivate(){return(0,A.of)(!0)}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})()],E=[(()=>{class t{constructor(){}getDashboard$(){return(0,A.of)({})}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})()];var c=n(1135),v=n(5212),F=n(4890),O=n(3305),I=n(9524),X=n(1674),h=n(9444);const N=[[["",8,"card-body"]]],Y=function(){return["fas","angle-right"]},j=[".card-body"];let P=(()=>{class t{constructor(){this.link="",this.customClasses=[]}ngOnInit(){this.background&&this.customClasses.push(this.background),this.color&&this.customClasses.push(this.color)}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sb-card-view-details"]],inputs:{background:"background",color:"color",link:"link"},ngContentSelectors:j,decls:7,vars:4,consts:[[1,"card","text-white","mb-4",3,"ngClass"],[1,"card-footer","d-flex","align-items-center","justify-content-between"],[1,"small","text-white","stretched-link",3,"routerLink"],[1,"small","text-white"],[3,"icon"]],template:function(s,o){1&s&&(e.F$t(N),e.TgZ(0,"div",0),e.Hsn(1),e.TgZ(2,"div",1)(3,"a",2),e._uU(4,"Voir D\xe9tails"),e.qZA(),e.TgZ(5,"div",3),e._UZ(6,"fa-icon",4),e.qZA()()()),2&s&&(e.Q6J("ngClass",o.background),e.xp6(3),e.Q6J("routerLink",o.link),e.xp6(3),e.Q6J("icon",e.DdM(3,Y)))},directives:[i.mk,l.yS,h.BN],styles:[""],changeDetection:0}),t})(),m=(()=>{class t{constructor(s,o,r,d){this.plannifService=s,this.serveursService=o,this.exclusionsService=r,this.calendrierService=d,this.plannifFutur=new c.X(!1),this.serveursExclus=new c.X(0),this.serveurs=new c.X(0),this.jourRestant=new c.X(0)}ngOnInit(){this.plannifService.getPlannifications().subscribe(s=>{1==this.testFutur(s)&&this.plannifFutur.next(!0)}),this.serveursService.total$.subscribe(s=>{this.serveurs.next(s)}),this.exclusionsService.getExclusions().subscribe(s=>{this.serveursExclus.next(s.length)}),this.calendrierService.get_calendrier().subscribe(s=>{this.jourRestant.next(this.prochainPatch(s))})}prochainPatch(s){let r,o=new Date;s.forEach(D=>{D.dates.forEach(oe=>{let p=new Date(oe.start);(p>=o&&p<=r||null==r&&p>=o)&&(r=p)})});let d=r.getTime()-o.getTime();return Math.round(d/864e5)}testFutur(s){let o=!1;return s.forEach(r=>{let d=r.date_plannif.split("/"),w=new Date(d[2]+"/"+d[1]+"/"+d[0]+" 21:00:00"),D=new Date;w.getTime()>=D.getTime()&&(o=!0)}),o}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(F.n),e.Y36(O.t),e.Y36(I.z),e.Y36(X.g))},t.\u0275cmp=e.Xpm({type:t,selectors:[["sb-dashboard-cards"]],decls:21,vars:12,consts:[[1,"row"],[1,"col-xl-3","col-md-6"],["link","/patchManagement/plannificationExceptionnel","background","bg-primary"],[1,"card-body"],["link","/patchManagement/exclusions","background","bg-warning"],["link","/patchManagement/serveurs/Alco_Windows","background","bg-success"],["link","/patchManagement/calendrier","background","bg-danger"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"sb-card-view-details",2)(3,"div",3),e._uU(4),e.ALo(5,"async"),e.qZA()()(),e.TgZ(6,"div",1)(7,"sb-card-view-details",4)(8,"div",3),e._uU(9),e.ALo(10,"async"),e.qZA()()(),e.TgZ(11,"div",1)(12,"sb-card-view-details",5)(13,"div",3),e._uU(14),e.ALo(15,"async"),e.qZA()()(),e.TgZ(16,"div",1)(17,"sb-card-view-details",6)(18,"div",3),e._uU(19),e.ALo(20,"async"),e.qZA()()()()),2&s&&(e.xp6(4),e.hij("Planification Exceptionnelle Future: ",e.lcZ(5,4,o.plannifFutur),""),e.xp6(5),e.hij("Serveurs Exclus: ",e.lcZ(10,6,o.serveursExclus),""),e.xp6(5),e.hij("Nombre de Serveurs: ",e.lcZ(15,8,o.serveurs),""),e.xp6(5),e.hij("Prochain Patch dans: ",e.lcZ(20,10,o.jourRestant)," jours"))},directives:[P],pipes:[i.Ov],styles:[""],changeDetection:0}),t})();var g=n(6333),z=n(996);const k=function(){return["fas","table"]},R=function(){return{column:"kb_manquantes",direction:"desc"}};let f=(()=>{class t{constructor(){this.os=new c.X("All")}ngOnInit(){this.site.subscribe(s=>{this.os.next("mic"==s?"College_All":"All")})}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sb-dashboard-tables"]],inputs:{site:"site"},decls:6,vars:10,consts:[[1,"card-header"],[1,"mr-1",3,"icon"],[1,"card-body"],[3,"pageSize","osSelected","searchBar","pageBar","sort","checkbox","sortable"]],template:function(s,o){1&s&&(e.TgZ(0,"sb-card")(1,"div",0),e._UZ(2,"fa-icon",1),e._uU(3,"Top 10 Serveurs Critiques"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"serveur-table",3),e.qZA()()),2&s&&(e.xp6(2),e.Q6J("icon",e.DdM(8,k)),e.xp6(3),e.Q6J("pageSize",10)("osSelected",o.os)("searchBar",!1)("pageBar",!1)("sort",e.DdM(9,R))("checkbox",!1)("sortable",!1))},directives:[g.A,h.BN,z.m],styles:[""],changeDetection:0}),t})();var $=n(4267),S=n(9410),V=n(6021);function G(t,a){1&t&&(e.TgZ(0,"div",7)(1,"div",8),e._uU(2," Chargement ... "),e.qZA()())}function H(t,a){1&t&&(e.TgZ(0,"div",7)(1,"div",8),e._uU(2," Chargement ... "),e.qZA()())}function W(t,a){1&t&&(e.TgZ(0,"div",7)(1,"div",8),e._uU(2," Chargement ... "),e.qZA()())}function K(t,a){1&t&&(e.TgZ(0,"div",7)(1,"div",8),e._uU(2," Chargement ... "),e.qZA()())}const u=function(){return["fas","chart-pie"]},b=function(){return["fas","chart-bar"]};let Z=(()=>{class t{constructor(s){this.historiqueService=s}ngOnInit(){this.site.subscribe(s=>{this.historiqueService.OSSelected="mic"==s?"College_All":"All"})}}return t.\u0275fac=function(s){return new(s||t)(e.Y36($.J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["sb-dashboard-charts"]],inputs:{site:"site"},decls:68,vars:36,consts:[[1,"row"],[1,"col-xl-6"],[1,"card-header"],[1,"mr-1",3,"icon"],[1,"card-body"],[3,"osSelected"],["class","progress ml-1",4,"ngIf"],[1,"progress","ml-1"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","100%"]],template:function(s,o){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"sb-card")(3,"div",2),e._UZ(4,"fa-icon",3),e._uU(5,"Etat des serveurs Alco Windows"),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"sb-charts-pie",5),e.qZA()()(),e.TgZ(8,"div",1)(9,"sb-card")(10,"div",2),e._UZ(11,"fa-icon",3),e._uU(12,"Nombres de patchs /mois"),e.qZA(),e.TgZ(13,"div",4),e.YNc(14,G,3,0,"div",6),e.ALo(15,"async"),e._UZ(16,"sb-charts-bar",5),e.qZA()()()(),e.TgZ(17,"div",0)(18,"div",1)(19,"sb-card")(20,"div",2),e._UZ(21,"fa-icon",3),e._uU(22,"Etat des serveurs Alco Linux"),e.qZA(),e.TgZ(23,"div",4),e._UZ(24,"sb-charts-pie",5),e.qZA()()(),e.TgZ(25,"div",1)(26,"sb-card")(27,"div",2),e._UZ(28,"fa-icon",3),e._uU(29,"Nombres de patchs /mois"),e.qZA(),e.TgZ(30,"div",4),e.YNc(31,H,3,0,"div",6),e.ALo(32,"async"),e._UZ(33,"sb-charts-bar",5),e.qZA()()()(),e.TgZ(34,"div",0)(35,"div",1)(36,"sb-card")(37,"div",2),e._UZ(38,"fa-icon",3),e._uU(39,"Etat des serveurs Heberge Windows"),e.qZA(),e.TgZ(40,"div",4),e._UZ(41,"sb-charts-pie",5),e.qZA()()(),e.TgZ(42,"div",1)(43,"sb-card")(44,"div",2),e._UZ(45,"fa-icon",3),e._uU(46,"Nombres de patchs /mois"),e.qZA(),e.TgZ(47,"div",4),e.YNc(48,W,3,0,"div",6),e.ALo(49,"async"),e._UZ(50,"sb-charts-bar",5),e.qZA()()()(),e.TgZ(51,"div",0)(52,"div",1)(53,"sb-card")(54,"div",2),e._UZ(55,"fa-icon",3),e._uU(56,"Etat des Heberge Linux"),e.qZA(),e.TgZ(57,"div",4),e._UZ(58,"sb-charts-pie",5),e.qZA()()(),e.TgZ(59,"div",1)(60,"sb-card")(61,"div",2),e._UZ(62,"fa-icon",3),e._uU(63,"Nombres de patchs /mois"),e.qZA(),e.TgZ(64,"div",4),e.YNc(65,K,3,0,"div",6),e.ALo(66,"async"),e._UZ(67,"sb-charts-bar",5),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("icon",e.DdM(28,u)),e.xp6(3),e.Q6J("osSelected","alco_windows"),e.xp6(4),e.Q6J("icon",e.DdM(29,b)),e.xp6(3),e.Q6J("ngIf",e.lcZ(15,20,o.historiqueService.loading$)),e.xp6(2),e.Q6J("osSelected","alco_windows"),e.xp6(5),e.Q6J("icon",e.DdM(30,u)),e.xp6(3),e.Q6J("osSelected","alco_linux"),e.xp6(4),e.Q6J("icon",e.DdM(31,b)),e.xp6(3),e.Q6J("ngIf",e.lcZ(32,22,o.historiqueService.loading$)),e.xp6(2),e.Q6J("osSelected","alco_linux"),e.xp6(5),e.Q6J("icon",e.DdM(32,u)),e.xp6(3),e.Q6J("osSelected","heberge_windows"),e.xp6(4),e.Q6J("icon",e.DdM(33,b)),e.xp6(3),e.Q6J("ngIf",e.lcZ(49,24,o.historiqueService.loading$)),e.xp6(2),e.Q6J("osSelected","heberge_windows"),e.xp6(5),e.Q6J("icon",e.DdM(34,u)),e.xp6(3),e.Q6J("osSelected","heberge_linux"),e.xp6(4),e.Q6J("icon",e.DdM(35,b)),e.xp6(3),e.Q6J("ngIf",e.lcZ(66,26,o.historiqueService.loading$)),e.xp6(2),e.Q6J("osSelected","heberge_linux"))},directives:[g.A,h.BN,S.y,i.O5,V.e],pipes:[i.Ov],styles:[""],changeDetection:0}),t})();function ee(t,a){1&t&&e._UZ(0,"sb-dashboard-head",2),2&t&&(e.s9C("title",a.ngIf),e.Q6J("hideBreadcrumbs",!1))}let T=(()=>{class t{constructor(s){this.route=s,this.osSelect=new c.X("All"),this.title=new c.X("Dashboard Alco")}ngOnInit(){this.route.params.subscribe(s=>{null!=s.Site&&(this.osSelect.next(s.Site),"alco"==s.Site?this.title.next("Dashboard Alco"):"mic"==s.Site&&this.title.next("Dashboard Mic"))})}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(l.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["sb-dashboard"]],decls:5,vars:5,consts:[[3,"title","hideBreadcrumbs",4,"ngIf"],[3,"site"],[3,"title","hideBreadcrumbs"]],template:function(s,o){1&s&&(e.YNc(0,ee,1,2,"sb-dashboard-head",0),e.ALo(1,"async"),e._UZ(2,"sb-dashboard-cards")(3,"sb-dashboard-tables",1)(4,"sb-dashboard-charts",1)),2&s&&(e.Q6J("ngIf",e.lcZ(1,3,o.title)),e.xp6(3),e.Q6J("site",o.osSelect),e.xp6(1),e.Q6J("site",o.osSelect))},directives:[i.O5,v.T,m,f,Z],pipes:[i.Ov],styles:[""],changeDetection:0}),t})();var y=n(5278);const te=function(){return["fas","chart-pie"]};let U=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sb-static"]],decls:13,vars:4,consts:[[3,"static"],["title","Dashboard Static",3,"hideBreadcrumbs"],[1,"card-header"],[1,"mr-1",3,"icon"],[1,"card-body"],[1,"card-footer","small","text-muted"]],template:function(s,o){1&s&&(e.TgZ(0,"sb-layout-dashboard",0),e._UZ(1,"sb-dashboard-head",1)(2,"sb-dashboard-cards")(3,"sb-dashboard-charts")(4,"sb-dashboard-tables"),e.TgZ(5,"sb-card")(6,"div",2),e._UZ(7,"fa-icon",3),e._uU(8,"Pie Chart Example"),e.qZA(),e.TgZ(9,"div",4),e._UZ(10,"sb-charts-pie"),e.qZA(),e.TgZ(11,"div",5),e._uU(12,"Updated yesterday at 11:59 PM"),e.qZA()()()),2&s&&(e.Q6J("static",!0),e.xp6(1),e.Q6J("hideBreadcrumbs",!1),e.xp6(6),e.Q6J("icon",e.DdM(3,te)))},directives:[y.Q,v.T,m,Z,f,g.A,h.BN,S.y],styles:[""],changeDetection:0}),t})(),J=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["sb-light"]],decls:5,vars:2,consts:[[3,"light"],["title","Dashboard Light",3,"hideBreadcrumbs"]],template:function(s,o){1&s&&(e.TgZ(0,"sb-layout-dashboard",0),e._UZ(1,"sb-dashboard-head",1)(2,"sb-dashboard-cards")(3,"sb-dashboard-charts")(4,"sb-dashboard-tables"),e.qZA()),2&s&&(e.Q6J("light",!0),e.xp6(1),e.Q6J("hideBreadcrumbs",!1))},directives:[y.Q,v.T,m,Z,f],styles:[""],changeDetection:0}),t})(),se=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[...E,...L],imports:[[i.ez,l.Bz,C.UX,C.u5,M.n,_.A,B.e,q.J]]}),t})();const Q=[{path:"",data:{title:"Dashboard - Patch Management",breadcrumbs:[{text:"Dashboard",active:!0}]},canActivate:[],component:T},{path:"static",data:{title:"Dashboard Static - Patch Management",breadcrumbs:[{text:"Dashboard",link:"/patchManagement/dashboard"},{text:"Static",active:!0}]},canActivate:[],component:U},{path:"light",data:{title:"Dashboard Light - Patch Management",breadcrumbs:[{text:"Dashboard",link:"/patchManagement/dashboard"},{text:"Light",active:!0}]},canActivate:[],component:J}];let ae=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[se,l.Bz.forChild(Q)],l.Bz]}),t})()}}]);