"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[731],{6731:(D,l,e)=>{e.r(l),e.d(l,{ErrorRoutingModule:()=>B,ROUTES:()=>v});var c=e(7979),E=e(9808),d=e(2382),g=e(2539),y=e(5592),m=e(9646),r=e(1223);const h=[(()=>{class o{canActivate(){return(0,m.of)(!0)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac}),o})()],Z=[(()=>{class o{constructor(){}getError$(){return(0,m.of)({})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac}),o})()];let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({providers:[...Z,...h],imports:[[E.ez,c.Bz,d.UX,d.u5,g.n,y.A]]}),o})();var C=e(2436);const T=["*"];let a=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=r.Xpm({type:o,selectors:[["sb-layout-error"]],ngContentSelectors:T,decls:6,vars:0,consts:[["id","layoutError"],["id","layoutError_content"],["id","layoutError_footer"]],template:function(t,u){1&t&&(r.F$t(),r.TgZ(0,"div",0)(1,"div",1)(2,"main"),r.Hsn(3),r.qZA()(),r.TgZ(4,"div",2),r._UZ(5,"sb-footer"),r.qZA()())},directives:[C.c],styles:[""],changeDetection:0}),o})();var s=e(9444);const U=function(){return["fas","arrow-left"]};let p=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=r.Xpm({type:o,selectors:[["sb-error-401"]],decls:14,vars:2,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6"],[1,"text-center","mt-4"],[1,"display-1"],[1,"lead"],["routerLink","/dashboard"],[1,"mr-1",3,"icon"]],template:function(t,u){1&t&&(r.TgZ(0,"sb-layout-error")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1",4),r._uU(6,"401"),r.qZA(),r.TgZ(7,"p",5),r._uU(8,"Unauthorized"),r.qZA(),r.TgZ(9,"p"),r._uU(10,"Access to this resource is denied."),r.qZA(),r.TgZ(11,"a",6),r._UZ(12,"fa-icon",7),r._uU(13,"Return to Dashboard"),r.qZA()()()()()()),2&t&&(r.xp6(12),r.Q6J("icon",r.DdM(1,U)))},directives:[a,c.yS,s.BN],styles:[""],changeDetection:0}),o})();const S=function(){return["fas","arrow-left"]};let i=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=r.Xpm({type:o,selectors:[["sb-error-404"]],decls:11,vars:2,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6"],[1,"text-center","mt-4"],["src","assets/img/error-404-monochrome.svg",1,"mb-4","img-error"],[1,"lead"],["routerLink","/dashboard"],[1,"mr-1",3,"icon"]],template:function(t,u){1&t&&(r.TgZ(0,"sb-layout-error")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3),r._UZ(5,"img",4),r.TgZ(6,"p",5),r._uU(7,"This requested URL was not found on this server."),r.qZA(),r.TgZ(8,"a",6),r._UZ(9,"fa-icon",7),r._uU(10,"Return to Dashboard"),r.qZA()()()()()()),2&t&&(r.xp6(9),r.Q6J("icon",r.DdM(1,S)))},directives:[a,c.yS,s.BN],styles:[""],changeDetection:0}),o})();const M=function(){return["fas","arrow-left"]};const v=[{path:"",pathMatch:"full",redirectTo:"404"},{path:"401",canActivate:[],component:p,data:{title:"Error 401 - SB Admin Angular"}},{path:"404",canActivate:[],component:i,data:{title:"Error 404 - SB Admin Angular"}},{path:"500",canActivate:[],component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=r.Xpm({type:o,selectors:[["sb-error-500"]],decls:12,vars:2,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6"],[1,"text-center","mt-4"],[1,"display-1"],[1,"lead"],["routerLink","/dashboard"],[1,"mr-1",3,"icon"]],template:function(t,u){1&t&&(r.TgZ(0,"sb-layout-error")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1",4),r._uU(6,"500"),r.qZA(),r.TgZ(7,"p",5),r._uU(8,"Internal Server Error"),r.qZA(),r.TgZ(9,"a",6),r._UZ(10,"fa-icon",7),r._uU(11,"Return to Dashboard"),r.qZA()()()()()()),2&t&&(r.xp6(10),r.Q6J("icon",r.DdM(1,M)))},directives:[a,c.yS,s.BN],styles:[""],changeDetection:0}),o})(),data:{title:"Error 500 - SB Admin Angular"}},{path:"**",pathMatch:"full",component:i}];let B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[[A,c.Bz.forChild(v)],c.Bz]}),o})()}}]);