"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[160],{1160:(T,l,n)=>{n.r(l),n.d(l,{AuthRoutingModule:()=>U,ROUTES:()=>p});var i=n(7979),g=n(9808),a=n(2382),f=n(2539),v=n(5592),h=n(9646),t=n(4893);const y=[(()=>{class o{canActivate(){return(0,h.of)(!0)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})()];var A=n(4929);let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[...A.uZ,...y],imports:[[g.ez,i.Bz,a.UX,a.u5,f.n,v.A]]}),o})();var b=n(2436);const w=["*"];let s=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["sb-layout-auth"]],ngContentSelectors:w,decls:6,vars:0,consts:[["id","layoutAuthentication",1,"bg-primary"],["id","layoutAuthentication_content"],["id","layoutAuthentication_footer"]],template:function(e,d){1&e&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1)(2,"main"),t.Hsn(3),t.qZA()(),t.TgZ(4,"div",2),t._UZ(5,"sb-footer"),t.qZA()())},directives:[b.c],styles:[""],changeDetection:0}),o})(),c=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["sb-forgot-password"]],decls:25,vars:0,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5"],[1,"card","shadow-lg","border-0","rounded-lg","mt-5"],[1,"card-header"],[1,"text-center","font-weight-light","my-4"],[1,"card-body"],[1,"small","mb-3","text-muted"],[1,"form-group"],["for","inputEmailAddress",1,"small","mb-1"],["id","inputEmailAddress","type","email","aria-describedby","emailHelp","placeholder","Enter email address",1,"form-control","py-4"],[1,"form-group","d-flex","align-items-center","justify-content-between","mt-4","mb-0"],["routerLink","/auth/login",1,"small"],["routerLink","/auth/login",1,"btn","btn-primary"],[1,"card-footer","text-center"],[1,"small"],["routerLink","/auth/register"]],template:function(e,d){1&e&&(t.TgZ(0,"sb-layout-auth")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h3",5),t._uU(7,"Password Recovery"),t.qZA()(),t.TgZ(8,"div",6)(9,"div",7),t._uU(10,"Enter your email address and we will send you a link to reset your password."),t.qZA(),t.TgZ(11,"form")(12,"div",8)(13,"label",9),t._uU(14,"Email"),t.qZA(),t._UZ(15,"input",10),t.qZA(),t.TgZ(16,"div",11)(17,"a",12),t._uU(18,"Return to login"),t.qZA(),t.TgZ(19,"a",13),t._uU(20,"Reset Password"),t.qZA()()()(),t.TgZ(21,"div",14)(22,"div",15)(23,"a",16),t._uU(24,"Need an account? Sign up!"),t.qZA()()()()()()()())},directives:[s,a._Y,a.JL,a.F,i.yS],styles:[""],changeDetection:0}),o})();const p=[{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",canActivate:[],component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["sb-login"]],decls:32,vars:0,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5"],[1,"card","shadow-lg","border-0","rounded-lg","mt-5"],[1,"card-header"],[1,"text-center","font-weight-light","my-4"],[1,"card-body"],[1,"form-group"],["for","inputEmailAddress",1,"small","mb-1"],["id","inputEmailAddress","type","email","placeholder","Enter email address",1,"form-control","py-4"],["for","inputPassword",1,"small","mb-1"],["id","inputPassword","type","password","placeholder","Enter password",1,"form-control","py-4"],[1,"custom-control","custom-checkbox"],["id","rememberPasswordCheck","type","checkbox",1,"custom-control-input"],["for","rememberPasswordCheck",1,"custom-control-label"],[1,"form-group","d-flex","align-items-center","justify-content-between","mt-4","mb-0"],["routerLink","/auth/forgot-password",1,"small"],["routerLink","/dashboard",1,"btn","btn-primary"],[1,"card-footer","text-center"],[1,"small"],["routerLink","/auth/register"]],template:function(e,d){1&e&&(t.TgZ(0,"sb-layout-auth")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h3",5),t._uU(7,"Login"),t.qZA()(),t.TgZ(8,"div",6)(9,"form")(10,"div",7)(11,"label",8),t._uU(12,"Email"),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",7)(15,"label",10),t._uU(16,"Password"),t.qZA(),t._UZ(17,"input",11),t.qZA(),t.TgZ(18,"div",7)(19,"div",12),t._UZ(20,"input",13),t.TgZ(21,"label",14),t._uU(22,"Remember password"),t.qZA()()(),t.TgZ(23,"div",15)(24,"a",16),t._uU(25,"Forgot Password?"),t.qZA(),t.TgZ(26,"a",17),t._uU(27,"Login"),t.qZA()()()(),t.TgZ(28,"div",18)(29,"div",19)(30,"a",20),t._uU(31,"Need an account? Sign up!"),t.qZA()()()()()()()())},directives:[s,a._Y,a.JL,a.F,i.yS],styles:[""],changeDetection:0}),o})(),data:{title:"Pages Login - SB Admin Angular"}},{path:"register",canActivate:[],component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["sb-register"]],decls:43,vars:0,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-7"],[1,"card","shadow-lg","border-0","rounded-lg","mt-5"],[1,"card-header"],[1,"text-center","font-weight-light","my-4"],[1,"card-body"],[1,"form-row"],[1,"col-md-6"],[1,"form-group"],["for","inputFirstName",1,"small","mb-1"],["id","inputFirstName","type","text","placeholder","Enter first name",1,"form-control","py-4"],["for","inputLastName",1,"small","mb-1"],["id","inputLastName","type","text","placeholder","Enter last name",1,"form-control","py-4"],["for","inputEmailAddress",1,"small","mb-1"],["id","inputEmailAddress","type","email","aria-describedby","emailHelp","placeholder","Enter email address",1,"form-control","py-4"],["for","inputPassword",1,"small","mb-1"],["id","inputPassword","type","password","placeholder","Enter password",1,"form-control","py-4"],["for","inputConfirmPassword",1,"small","mb-1"],["id","inputConfirmPassword","type","password","placeholder","Confirm password",1,"form-control","py-4"],[1,"form-group","mt-4","mb-0"],["routerLink","/dashboard",1,"btn","btn-primary","btn-block"],[1,"card-footer","text-center"],[1,"small"],["routerLink","/auth/login"]],template:function(e,d){1&e&&(t.TgZ(0,"sb-layout-auth")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h3",5),t._uU(7,"Create Account"),t.qZA()(),t.TgZ(8,"div",6)(9,"form")(10,"div",7)(11,"div",8)(12,"div",9)(13,"label",10),t._uU(14,"First Name"),t.qZA(),t._UZ(15,"input",11),t.qZA()(),t.TgZ(16,"div",8)(17,"div",9)(18,"label",12),t._uU(19,"Last Name"),t.qZA(),t._UZ(20,"input",13),t.qZA()()(),t.TgZ(21,"div",9)(22,"label",14),t._uU(23,"Email"),t.qZA(),t._UZ(24,"input",15),t.qZA(),t.TgZ(25,"div",7)(26,"div",8)(27,"div",9)(28,"label",16),t._uU(29,"Password"),t.qZA(),t._UZ(30,"input",17),t.qZA()(),t.TgZ(31,"div",8)(32,"div",9)(33,"label",18),t._uU(34,"Confirm Password"),t.qZA(),t._UZ(35,"input",19),t.qZA()()(),t.TgZ(36,"div",20)(37,"a",21),t._uU(38,"Create Account"),t.qZA()()()(),t.TgZ(39,"div",22)(40,"div",23)(41,"a",24),t._uU(42,"Have an account? Go to login"),t.qZA()()()()()()()())},directives:[s,a._Y,a.JL,a.F,i.yS],styles:[""],changeDetection:0}),o})(),data:{title:"Pages Register - SB Admin Angular"}},{path:"forgot-password",canActivate:[],component:c,data:{title:"Pages Forgot Password - SB Admin Angular"}}];let U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[Z,i.Bz.forChild(p)],i.Bz]}),o})()}}]);