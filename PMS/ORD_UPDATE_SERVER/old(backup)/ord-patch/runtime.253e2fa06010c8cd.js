(()=>{"use strict";var e,v={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var a=h[e]={id:e,loaded:!1,exports:{}};return v[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=v,e=[],r.O=(n,a,d,i)=>{if(!a){var t=1/0;for(f=0;f<e.length;f++){for(var[a,d,i]=e[f],l=!0,o=0;o<a.length;o++)(!1&i||t>=i)&&Object.keys(r.O).every(p=>r.O[p](a[o]))?a.splice(o--,1):(l=!1,i<t&&(t=i));if(l){e.splice(f--,1);var u=d();void 0!==u&&(n=u)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[a,d,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var a in n)r.o(n,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,a)=>(r.f[a](e,n),n),[])),r.u=e=>e+"."+{117:"cb6cf8682f8dab2e",135:"ab7a89280bcb26fa",136:"8bd0ad5f12bfe626",160:"711a06780aace52a",274:"7bb9560203e5f006",440:"9016c0ee277540c0",528:"3037ed20d56f078a",625:"a3a613461a0ebfa9",690:"2eb9fa912616d075",721:"ae058c56dcb5de1d",738:"5e41fb6fad8e4318",766:"987aa7af97bf1a53",882:"8776437a5093c02f",891:"0abcff10b64c5622",947:"95ffa24ae632a5b8",956:"e5dfd5dcd700a075"}[e]+".js",r.miniCssF=e=>{},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="ord-patch:";r.l=(a,d,i,f)=>{if(e[a])e[a].push(d);else{var t,l;if(void 0!==i)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var c=o[u];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==n+i){t=c;break}}t||(l=!0,(t=document.createElement("script")).type="module",t.charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",n+i),t.src=r.tu(a)),e[a]=[d];var b=(g,p)=>{t.onerror=t.onload=null,clearTimeout(s);var m=e[a];if(delete e[a],t.parentNode&&t.parentNode.removeChild(t),m&&m.forEach(_=>_(p)),g)return g(p)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=b.bind(null,t.onerror),t.onload=b.bind(null,t.onload),l&&document.head.appendChild(t)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(d,i)=>{var f=r.o(e,d)?e[d]:void 0;if(0!==f)if(f)i.push(f[2]);else if(666!=d){var t=new Promise((c,b)=>f=e[d]=[c,b]);i.push(f[2]=t);var l=r.p+r.u(d),o=new Error;r.l(l,c=>{if(r.o(e,d)&&(0!==(f=e[d])&&(e[d]=void 0),f)){var b=c&&("load"===c.type?"missing":c.type),s=c&&c.target&&c.target.src;o.message="Loading chunk "+d+" failed.\n("+b+": "+s+")",o.name="ChunkLoadError",o.type=b,o.request=s,f[1](o)}},"chunk-"+d,d)}else e[d]=0},r.O.j=d=>0===e[d];var n=(d,i)=>{var o,u,[f,t,l]=i,c=0;if(f.some(s=>0!==e[s])){for(o in t)r.o(t,o)&&(r.m[o]=t[o]);if(l)var b=l(r)}for(d&&d(i);c<f.length;c++)r.o(e,u=f[c])&&e[u]&&e[u][0](),e[u]=0;return r.O(b)},a=self.webpackChunkord_patch=self.webpackChunkord_patch||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))})()})();