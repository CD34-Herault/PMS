"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[712],{6333:(U,h,r)=>{r.d(h,{A:()=>_});var l=r(5e3),d=r(9808);const c=[[["",8,"card-header"]],[["",8,"card-body"]],[["",8,"card-footer"]]],v=[".card-header",".card-body",".card-footer"];let _=(()=>{class e{constructor(){this.customClasses=[]}ngOnInit(){this.background&&this.customClasses.push(this.background),this.color&&this.customClasses.push(this.color)}}return e.\u0275fac=function(u){return new(u||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["sb-card"]],inputs:{background:"background",color:"color"},ngContentSelectors:v,decls:4,vars:1,consts:[[1,"card","mb-4",3,"ngClass"]],template:function(u,g){1&u&&(l.F$t(c),l.TgZ(0,"div",0),l.Hsn(1),l.Hsn(2,1),l.Hsn(3,2),l.qZA()),2&u&&l.Q6J("ngClass",g.customClasses)},directives:[d.mk],styles:[""],changeDetection:0}),e})()},3712:(U,h,r)=>{r.r(h),r.d(h,{ROUTES:()=>D,waafRoutingModule:()=>re});var l=r(6952),d=r(9808),c=r(2382),v=r(2539),_=r(5592),e=r(5e3);const T={asc:"desc",desc:"","":"asc"};let u=(()=>{class n{constructor(){this.direction="",this.sort=new e.vpe}get isAscending(){return"asc"===this.direction}get isDescending(){return"desc"===this.direction}rotate(){this.direction=T[this.direction],this.sort.emit({column:this.sbSortable,direction:this.direction})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["th","sbSortable",""]],hostVars:4,hostBindings:function(t,o){1&t&&e.NdJ("click",function(){return o.rotate()}),2&t&&e.ekj("asc",o.isAscending)("desc",o.isDescending)},inputs:{sbSortable:"sbSortable",direction:"direction"},outputs:{sort:"sort"}}),n})();const g=[u];var m=r(520),f=r(1135),A=r(7579),x=r(9646),p=r(8505),b=r(8372),J=r(3900),M=r(4825),I=r(1438);const E={headers:new m.WM({"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let w=(()=>{class n{constructor(t,o){this.http=t,this.pipe=o,this._loading$=new f.X(!0),this._search$=new A.x,this._tunnel$=new f.X([]),this._mesTunnel$=new f.X([]),this._total$=new f.X(0),this._state={page:1,pageSize:20,searchTerm:"",sortColumn:"",sortDirection:""},this.baseURL="https://"+I.F+"/",this._search$.pipe((0,p.b)(()=>this._loading$.next(!0)),(0,b.b)(200),(0,J.w)(()=>this.getTunnels()),(0,M.g)(200),(0,p.b)(()=>this._loading$.next(!1))).subscribe(s=>{this._mesTunnel$.next(s.data)}),this._mesTunnel$.pipe((0,p.b)(()=>this._loading$.next(!0)),(0,b.b)(120),(0,J.w)(s=>this._search(s)),(0,M.g)(120),(0,p.b)(()=>this._loading$.next(!1))).subscribe(s=>{this._tunnel$.next(s.tunnels),this._total$.next(s.total)}),this._search$.next()}get tunnels$(){return this._tunnel$.asObservable()}get total$(){return this._total$.asObservable()}get loading$(){return this._loading$.asObservable()}get page(){return this._state.page}get pageSize(){return this._state.pageSize}get searchTerm(){return this._state.searchTerm}set page(t){this._set({page:t})}set pageSize(t){this._set({pageSize:t})}set searchTerm(t){this._set({searchTerm:t})}set sortColumn(t){this._set({sortColumn:t})}set sortDirection(t){this._set({sortDirection:t})}_set(t){Object.assign(this._state,t),this._search$.next()}_search(t){const{sortColumn:o,sortDirection:s,pageSize:i,page:S,searchTerm:W}=this._state;let Z=function O(n,a,t){return""===t||""===a?n:[...n].sort((o,s)=>{const i=((n,a)=>n<a?-1:n>a?1:0)(o[a],s[a]);return"asc"===t?i:-i})}(t,o,s);Z=Z.filter(ce=>function Q(n,a,t){return n.name.toLowerCase().includes(a.toLowerCase())}(ce,W));const ie=Z.length;return Z=Z.slice((S-1)*i,(S-1)*i+i),(0,x.of)({tunnels:Z,total:ie})}getTunnels(){try{return this.http.get(this.baseURL+"servNode/waaf/tunnels",E)}catch(t){throw{msg:"Erreur r\xe9cup\xe9ration des tunnels: "+t}}}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(m.eN),e.LFG(d.JJ))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const N=[w];var F=r(5212),q=r(6333),C=r(7751),z=r(9444);const P=function(){return["fas","chevron-up"]};function R(n,a){1&n&&(e.ynx(0),e._UZ(1,"fa-icon",1),e.BQk()),2&n&&(e.xp6(1),e.Q6J("icon",e.DdM(1,P)))}const k=function(){return["fas","chevron-down"]};function B(n,a){1&n&&(e.ynx(0),e._UZ(1,"fa-icon",1),e.BQk()),2&n&&(e.xp6(1),e.Q6J("icon",e.DdM(1,k)))}let L=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sb-sort-icon"]],inputs:{direction:"direction"},decls:2,vars:2,consts:[[4,"ngIf"],[1,"sort-icon",3,"icon"]],template:function(t,o){1&t&&(e.YNc(0,R,2,2,"ng-container",0),e.YNc(1,B,2,2,"ng-container",0)),2&t&&(e.Q6J("ngIf","asc"===o.direction),e.xp6(1),e.Q6J("ngIf","desc"===o.direction))},directives:[d.O5,z.BN],styles:[".sort-icon[_ngcontent-%COMP%]{height:.9rem;width:.9rem;margin-left:.25rem;margin-top:-.125rem;vertical-align:middle}"],changeDetection:0}),n})();const Y=["modalWorkflow"];function j(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"p",21),e._uU(2,"Pas de maintenance"),e.qZA(),e.TgZ(3,"button",22),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).maintenance()}),e._uU(4,"Mettre en maintenance"),e.qZA()()}}function H(n,a){1&n&&(e.TgZ(0,"p",23),e._uU(1,"En maintenance"),e.qZA())}function X(n,a){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&n){const t=a.$implicit;e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.value)}}function G(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",11)(1,"h5",12),e._uU(2,"Workflow"),e.qZA(),e.TgZ(3,"button",13),e.NdJ("click",function(){return e.CHM(t).close()}),e.TgZ(4,"span",14),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"div",15)(7,"p")(8,"strong"),e._uU(9,"Statut Maintenance:"),e.qZA()(),e.YNc(10,j,5,0,"div",16),e.YNc(11,H,2,0,"p",17),e.TgZ(12,"p")(13,"strong"),e._uU(14,"Workflow Parameters"),e.qZA()(),e.TgZ(15,"table",18)(16,"thead")(17,"tr")(18,"th",19),e._uU(19,"Name"),e.qZA(),e.TgZ(20,"th",19),e._uU(21,"Value"),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,X,5,2,"tr",20),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(10),e.Q6J("ngIf",!t.enMaintenance),e.xp6(1),e.Q6J("ngIf",t.enMaintenance),e.xp6(12),e.Q6J("ngForOf",t.modalWorkflowData.parameters)}}function K(n,a){if(1&n&&(e.TgZ(0,"span",24),e._uU(1),e.ALo(2,"async"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij("Total: ",e.lcZ(2,1,t.waafService.total$),"")}}function V(n,a){1&n&&(e.TgZ(0,"div",25)(1,"div",26),e._uU(2," Chargement ... "),e.qZA()())}function ee(n,a){if(1&n&&e._UZ(0,"sb-sort-icon",31),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function te(n,a){if(1&n&&e._UZ(0,"sb-sort-icon",31),2&n){const t=e.oxw(2);e.Q6J("direction",t.sortedDirection)}}function ne(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td",32),e._UZ(2,"ngb-highlight",33),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"ngb-highlight",33),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"ngb-highlight",33),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"ngb-highlight",33),e.qZA(),e.TgZ(9,"td"),e._UZ(10,"ngb-highlight",33),e.qZA(),e.TgZ(11,"td")(12,"button",34),e.NdJ("click",function(){const i=e.CHM(t).$implicit,S=e.oxw(2),W=e.MAs(1);return S.open(W,i.workflowParameters)}),e._uU(13),e.qZA()(),e.TgZ(14,"td"),e._UZ(15,"ngb-highlight",33),e.qZA(),e.TgZ(16,"td"),e._UZ(17,"ngb-highlight",33),e.qZA(),e.TgZ(18,"td"),e._UZ(19,"ngb-highlight",33),e.qZA(),e.TgZ(20,"td"),e._UZ(21,"ngb-highlight",33),e.qZA()()}if(2&n){const t=a.$implicit,o=e.oxw(2);e.xp6(2),e.Q6J("result",t.name)("term",o.waafService.searchTerm),e.xp6(2),e.Q6J("result",t.appliance.name)("term",o.waafService.searchTerm),e.xp6(2),e.Q6J("result",t.network.incoming.serverName)("term",o.waafService.searchTerm),e.xp6(2),e.Q6J("result",t.network.incoming.port.toString())("term",o.waafService.searchTerm),e.xp6(2),e.Q6J("result",t.uid)("term",o.waafService.searchTerm),e.xp6(3),e.Oqu(t.workflow.name),e.xp6(2),e.Q6J("result",null==t.network.outgoing.ssl.profile?null:t.network.outgoing.ssl.profile.name)("term",o.waafService.searchTerm),e.xp6(2),e.Q6J("result",t.network.outgoing.address)("term",o.waafService.searchTerm),e.xp6(2),e.Q6J("result",t.network.outgoing.port.toString())("term",o.waafService.searchTerm),e.xp6(2),e.Q6J("result",t.enabled.toString())("term",o.waafService.searchTerm)}}function oe(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"table",27)(1,"thead")(2,"tr")(3,"th",28),e.NdJ("sort",function(s){return e.CHM(t),e.oxw().onSort(s)}),e.TgZ(4,"span"),e._uU(5,"Nom"),e.qZA(),e.YNc(6,ee,1,1,"sb-sort-icon",29),e.qZA(),e.TgZ(7,"th",19)(8,"span"),e._uU(9,"Appliance"),e.qZA()(),e.TgZ(10,"th",19)(11,"span"),e._uU(12,"Url"),e.qZA()(),e.TgZ(13,"th",19)(14,"span"),e._uU(15,"Port:In"),e.qZA()(),e.TgZ(16,"th",19)(17,"span"),e._uU(18,"Uid"),e.qZA()(),e.TgZ(19,"th",19)(20,"span"),e._uU(21,"Workflow"),e.qZA()(),e.TgZ(22,"th",19)(23,"span"),e._uU(24,"Cipher Profile"),e.qZA()(),e.TgZ(25,"th",19)(26,"span"),e._uU(27,"IP:out"),e.qZA()(),e.TgZ(28,"th",19)(29,"span"),e._uU(30,"Port:out"),e.qZA()(),e.TgZ(31,"th",30),e.NdJ("sort",function(s){return e.CHM(t),e.oxw().onSort(s)}),e.TgZ(32,"span"),e._uU(33,"Actif"),e.qZA(),e.YNc(34,te,1,1,"sb-sort-icon",29),e.qZA()()(),e.TgZ(35,"tbody"),e.YNc(36,ne,22,19,"tr",20),e.qZA()()}if(2&n){const t=a.ngIf,o=e.oxw();e.xp6(6),e.Q6J("ngIf","name"===o.sortedColumn),e.xp6(28),e.Q6J("ngIf","enabled"===o.sortedColumn),e.xp6(2),e.Q6J("ngForOf",t)}}let ae=(()=>{class n{constructor(t,o,s){this.waafService=t,this.changeDetectorRef=o,this.modalService=s,this.pagesize=20,this.enMaintenance=!1,this.modalWorkflowData={parameters:[]}}ngOnInit(){null!=this.sort&&this.onSort(this.sort),this.tunnels$=this.waafService.tunnels$,this.total$=this.waafService.total$}onSort({column:t,direction:o}){this.sortedColumn=t,this.sortedDirection=o,this.waafService.sortColumn=t,this.waafService.sortDirection=o,this.changeDetectorRef.detectChanges()}open(t,o){this.modalWorkflowData.parameters=o;const s=null==o?void 0:o.find(i=>i.name.includes("maintenance.enable"));this.enMaintenance=null!=s&&"true"==s.value,this.modalService.open(t,{centered:!0}).result.then(i=>{this.closeResult=`Closed with: ${i}`},i=>{this.closeResult=`Dismissed ${this.getDismissReason(i)}`})}getDismissReason(t){return t===C.If.ESC?"by pressing ESC":t===C.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}maintenance(){alert("Sebastien au tas")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(w),e.Y36(e.sBO),e.Y36(C.FF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["table-tunnels"]],viewQuery:function(t,o){if(1&t&&(e.Gf(Y,7),e.Gf(u,5)),2&t){let s;e.iGM(s=e.CRH())&&(o.modalWorkflow=s.first),e.iGM(s=e.CRH())&&(o.headers=s)}},inputs:{pagesize:"pagesize",sort:"sort",sortedColumn:"sortedColumn"},decls:24,vars:20,consts:[["modalWorkflow",""],[1,"form-group","form-inline"],["type","text","name","searchTerm",1,"form-control","ml-1",3,"ngModel","ngModelChange"],["class","ml-3",4,"ngIf"],["class","progress ml-1",4,"ngIf"],[1,"table-responsive"],["class","table table-striped table-dark",4,"ngIf"],[1,"d-flex","justify-content-between","p-2"],[3,"collectionSize","page","maxSize","pageSize","pageChange"],["name","pageSize",1,"custom-select",2,"width","auto",3,"ngModel","ngModelChange"],[3,"ngValue"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body",2,"background-color","aliceblue"],[4,"ngIf"],["style","color: red;",4,"ngIf"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[2,"color","green"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[2,"color","red"],[1,"ml-3"],[1,"progress","ml-1"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","100%"],[1,"table","table-striped","table-dark"],["scope","col","sbSortable","name",3,"sort"],[3,"direction",4,"ngIf"],["scope","col","sbSortable","enabled",3,"sort"],[3,"direction"],[1,"ml-2"],[3,"result","term"],[1,"btn","btn-sm","btn-outline-primary",3,"click"]],template:function(t,o){1&t&&(e.YNc(0,G,24,3,"ng-template",null,0,e.W1O),e.TgZ(2,"form")(3,"div")(4,"div",1),e._uU(5,"Recherche: "),e.TgZ(6,"input",2),e.NdJ("ngModelChange",function(i){return o.waafService.searchTerm=i}),e.qZA(),e.YNc(7,K,3,3,"span",3),e.ALo(8,"async"),e.qZA()(),e.YNc(9,V,3,0,"div",4),e.ALo(10,"async"),e.TgZ(11,"div",5),e.YNc(12,oe,37,3,"table",6),e.ALo(13,"async"),e.qZA(),e.TgZ(14,"div",7)(15,"ngb-pagination",8),e.NdJ("pageChange",function(i){return o.waafService.page=i}),e.ALo(16,"async"),e.qZA(),e.TgZ(17,"select",9),e.NdJ("ngModelChange",function(i){return o.waafService.pageSize=i}),e.TgZ(18,"option",10),e._uU(19,"20 objets par page"),e.qZA(),e.TgZ(20,"option",10),e._uU(21,"50 objets par page"),e.qZA(),e.TgZ(22,"option",10),e._uU(23,"Tous"),e.qZA()()()()),2&t&&(e.xp6(6),e.Q6J("ngModel",o.waafService.searchTerm),e.xp6(1),e.Q6J("ngIf",e.lcZ(8,12,o.waafService.total$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(10,14,o.waafService.loading$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,16,o.tunnels$)),e.xp6(3),e.Q6J("collectionSize",e.lcZ(16,18,o.total$)||0)("page",o.waafService.page)("maxSize",10)("pageSize",o.waafService.pageSize),e.xp6(2),e.Q6J("ngModel",o.waafService.pageSize),e.xp6(1),e.Q6J("ngValue",20),e.xp6(2),e.Q6J("ngValue",50),e.xp6(2),e.Q6J("ngValue",-1))},directives:[d.O5,d.sg,c._Y,c.JL,c.F,c.Fj,c.JJ,c.On,u,L,C._h,C.N9,c.EJ,c.YN,c.Kr],pipes:[d.Ov],styles:[""],changeDetection:0}),n})(),y=(()=>{class n{constructor(t){this.waafService=t}ngOnInit(){}getTunnels(){this.waafService.getTunnels().subscribe(t=>t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(w))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-waafPage"]],decls:9,vars:1,consts:[["title","WAF",3,"hideBreadcrumbs"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"card-body"]],template:function(t,o){1&t&&(e._UZ(0,"sb-dashboard-head",0),e.TgZ(1,"sb-card")(2,"div",1)(3,"div"),e._uU(4,"Tunnels WAF"),e.qZA(),e.TgZ(5,"div"),e._uU(6,"La liste des tunnels est r\xe9cup\xe9r\xe9 en direct"),e.qZA()(),e.TgZ(7,"div",2),e._UZ(8,"table-tunnels"),e.qZA()()),2&t&&e.Q6J("hideBreadcrumbs",!1)},directives:[F.T,q.A,ae],styles:[""]}),n})(),se=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[d.JJ,...N,...g],imports:[[d.ez,l.Bz,c.UX,c.u5,v.n,_.A]]}),n})();const D=[{path:"",canActivate:[],component:y,data:{title:"Waaf - Patch Management",breadcrumbs:[{text:"Dashboard",link:"/patchManagement/dashboard"},{text:"Waaf",active:!0}]}}];let re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[se,l.Bz.forChild(D)],l.Bz]}),n})()},8372:(U,h,r)=>{r.d(h,{b:()=>v});var l=r(4986),d=r(4482),c=r(5403);function v(_,e=l.z){return(0,d.e)((T,u)=>{let g=null,m=null,f=null;const A=()=>{if(g){g.unsubscribe(),g=null;const p=m;m=null,u.next(p)}};function x(){const p=f+_,b=e.now();if(b<p)return g=this.schedule(void 0,p-b),void u.add(g);A()}T.subscribe((0,c.x)(u,p=>{m=p,f=e.now(),g||(g=e.schedule(x,_),u.add(g))},()=>{A(),u.complete()},void 0,()=>{m=g=null}))})}}}]);