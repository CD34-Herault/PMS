"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[721],{2721:(M,s,i)=>{i.r(s),i.d(s,{ROUTES:()=>a,UtilityRoutingModule:()=>S});var r=i(2405),v=i(9808),c=i(2382),y=i(2539),d=i(5592),f=i(9646),n=i(5e3);const p=[(()=>{class t{canActivate(){return(0,f.of)(!0)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})()];var m=i(520);let l=(()=>{class t{constructor(o){this.http=o}get version$(){return this.http.get("/assets/version",{responseType:"text"})}}return t.\u0275fac=function(o){return new(o||t)(n.LFG(m.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})();const U=[l];var h=i(5698);let u=(()=>{class t{constructor(o){this.utilityService=o}ngOnInit(){this.utilityService.version$.pipe((0,h.q)(1)).subscribe(o=>this.version=o)}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(l))},t.\u0275cmp=n.Xpm({type:t,selectors:[["sb-version"]],decls:2,vars:1,template:function(o,C){1&o&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&o&&(n.xp6(1),n.Oqu(C.version))},styles:[""]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[...U,...p],imports:[[v.ez,r.Bz,c.UX,c.u5,y.n,d.A]]}),t})();const a=[{path:"",canActivate:[],component:u}];let S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[g,r.Bz.forChild(a)],r.Bz]}),t})()}}]);