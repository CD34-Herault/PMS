(()=>{"use strict";var e,v={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,d,i)=>{if(!t){var a=1/0;for(f=0;f<e.length;f++){for(var[t,d,i]=e[f],l=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every(p=>r.O[p](t[c]))?t.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(f--,1);var u=d();void 0!==u&&(n=u)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[t,d,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{117:"d51ce2ad760b9080",136:"81cb1f95d030265e",160:"c4614502c3b80691",274:"7bb9560203e5f006",387:"8b9ca81c8f3748f4",440:"2cd478c2e751a979",528:"317b9079bfdf07f7",690:"3e75d1560149070a",721:"aa9f555f64c66841",738:"ae3e5fb00ca9df60",766:"3ba4014c7eb12a95",882:"2189ca74114ca110",947:"9e6d790ecad547f8",956:"ab7d3b3d83b080d9",986:"66549929fb00ba0a"}[e]+".js",r.miniCssF=e=>{},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="ord-patch:";r.l=(t,d,i,f)=>{if(e[t])e[t].push(d);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var o=c[u];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==n+i){a=o;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=r.tu(t)),e[t]=[d];var s=(g,p)=>{a.onerror=a.onload=null,clearTimeout(b);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(_=>_(p)),g)return g(p)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(d,i)=>{var f=r.o(e,d)?e[d]:void 0;if(0!==f)if(f)i.push(f[2]);else if(666!=d){var a=new Promise((o,s)=>f=e[d]=[o,s]);i.push(f[2]=a);var l=r.p+r.u(d),c=new Error;r.l(l,o=>{if(r.o(e,d)&&(0!==(f=e[d])&&(e[d]=void 0),f)){var s=o&&("load"===o.type?"missing":o.type),b=o&&o.target&&o.target.src;c.message="Loading chunk "+d+" failed.\n("+s+": "+b+")",c.name="ChunkLoadError",c.type=s,c.request=b,f[1](c)}},"chunk-"+d,d)}else e[d]=0},r.O.j=d=>0===e[d];var n=(d,i)=>{var c,u,[f,a,l]=i,o=0;if(f.some(b=>0!==e[b])){for(c in a)r.o(a,c)&&(r.m[c]=a[c]);if(l)var s=l(r)}for(d&&d(i);o<f.length;o++)r.o(e,u=f[o])&&e[u]&&e[u][0](),e[u]=0;return r.O(s)},t=self.webpackChunkord_patch=self.webpackChunkord_patch||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();