"use strict";(self.webpackChunkord_patch=self.webpackChunkord_patch||[]).push([[592],{1674:(l,o,s)=>{s.d(o,{g:()=>d,u:()=>u});var a=s(520),i=s(1438),h=s(5e3);const t={headers:new a.WM({"Access-Control-Allow-Methods":"GET,POST,PUT,DELETE","Access-Control-Allow-Headers":"Content-type","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}),withCredentials:!0};let d=(()=>{class n{constructor(e){this.http=e,this.baseURL="https://"+i.F+"/"}get_calendrier(){try{return this.http.get(this.baseURL+"servNode/getCalendriers/",t)}catch(e){throw{msg:"Erreur get_calendrier(): "+e}}}get_oneCalendrier(e){try{return this.http.get(this.baseURL+"servNode/getCalendrier/"+e,t)}catch(r){throw{msg:"Erreur get_oneCalendrier(): "+r}}}put_calendrier(e){try{return this.http.put(this.baseURL+"servNode/putCalendriers/",JSON.stringify(e),t)}catch(r){throw{msg:"Erreur get_calendrier(): "+r}}}put_dates(e,r){try{return console.log("laaa: "+e.start+" :: "+e.end),this.http.put(this.baseURL+"servNode/putDate/"+r,JSON.stringify(e),t)}catch(c){throw{msg:"Erreur get_calendrier(): "+c}}}supressionCalendrier(e){try{return this.http.delete(this.baseURL+"servNode/deleteCalendriers/"+e,t)}catch(r){throw{msg:"Erreur supression calendrier: "+r}}}updateCalendrier(e,r){try{return this.http.put(this.baseURL+"servNode/updateCalendriers/"+e,JSON.stringify(r),t)}catch(c){throw{msg:"Erreur update calendrier: "+c}}}get_tasks(e){try{return this.http.get(this.baseURL+"servNode/getTasks/"+e,t)}catch(r){throw{msg:"Erreur get_tasks(): "+r}}}deleteEvent(e){try{return this.http.delete(this.baseURL+"servNode/deleteDate/"+e.start,t)}catch(r){throw{msg:"Erreur deleteEvent(): "+r}}}}return n.\u0275fac=function(e){return new(e||n)(h.LFG(a.eN))},n.\u0275prov=h.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const u=[d]},4890:(l,o,s)=>{s.d(o,{u:()=>i,n:()=>a.n});var a=s(984);const i=[a.n]}}]);