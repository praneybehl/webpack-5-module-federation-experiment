var app2;app2=(()=>{"use strict";var e,r,t,o,n,a,i,u,s,l,p,f,d,h={677:(e,r,t)=>{var o={"./Button":()=>Promise.all([t.e(369),t.e(940)]).then(()=>()=>t(940))},n=e=>t.o(o,e)?o[e]():Promise.resolve().then(()=>{throw new Error('Module "'+e+'" does not exist in container.')}),a=e=>{var r=t.S.default;if(r&&r!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S.default=e,t.I("default")};t.d(r,{get:()=>n,init:()=>a})}},c={};function v(e){if(c[e])return c[e].exports;var r=c[e]={exports:{}};return h[e](r,r.exports,v),r.exports}return v.m=h,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce((r,t)=>(v.f[t](e,r),r),[])),v.u=e=>e+".js",v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},v.l=(r,t,o)=>{if(e[r])e[r].push(t);else{var n,a;if(void 0!==o)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var s=i[u];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")=="@basic-host-remote/app2:"+o){n=s;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,v.nc&&n.setAttribute("nonce",v.nc),n.setAttribute("data-webpack","@basic-host-remote/app2:"+o),n.src=r),e[r]=[t];var l=(t,o)=>{n.onerror=n.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach(e=>e(o)),t)return t(o)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),a&&document.head.appendChild(n)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},v.p="http://localhost:3002/",(()=>{v.S={};var e={};v.I=r=>{if(e[r])return e[r];e[r]=1,v.o(v.S,r)||(v.S[r]={});var t=v.S[r],o=(e,r,o)=>{var n=t[e]=t[e]||{},a=n[r];(!a||!a.loaded&&"@basic-host-remote/app2">a.from)&&(n[r]={get:o,from:"@basic-host-remote/app2"})},n=[];switch(r){case"default":o("react-dom","16.13.1",()=>Promise.all([v.e(542),v.e(906)]).then(()=>()=>v(542))),o("react","16.13.1",()=>v.e(378).then(()=>()=>v(378)))}return n.length&&(e[r]=Promise.all(n).then(()=>e[r]=1))}})(),r=e=>{var r=e=>e.split(".").map(e=>+e==e?+e:e),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},t=(e,t)=>{e=r(e),t=r(t);for(var o=0;;){if(o>=e.length)return o<t.length&&"u"!=(typeof t[o])[0];var n=e[o],a=(typeof n)[0];if(o>=t.length)return"u"==a;var i=t[o],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},o=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(u=e[a]))[0]?"-":(n>0?".":"")+(n=2,u);return r}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+s()+")":1===u?"("+s()+" || "+s()+")":2===u?i.pop()+" "+i.pop():o(u))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(e,t)=>{if(0 in e){t=r(t);var o=e[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,s=!0;;u++,i++){var l,p,f=u<e.length?(typeof e[u])[0]:"";if(i>=t.length||"o"==(p=(typeof(l=t[i]))[0]))return!s||("u"==f?u>o&&!a:""==f!=a);if("u"==p){if(!s||"u"!=f)return!1}else if(s)if(f==p)if(u<=o){if(l!=e[u])return!1}else{if(a?l>e[u]:l<e[u])return!1;l!=e[u]&&(s=!1)}else if("s"!=f&&"n"!=f){if(a||u<=o)return!1;s=!1,u--}else{if(u<=o||p<f!=a)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,u--)}}var d=[],h=d.pop.bind(d);for(i=1;i<e.length;i++){var c=e[i];d.push(1==c?h()|h():2==c?h()&h():c?n(c,t):!h())}return!!h()},a=(e,r)=>{var o=e[r];return Object.keys(o).reduce((e,r)=>!e||!o[e].loaded&&t(e,r)?r:e,0)},i=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+o(t)+")",u=(e,r,t,o)=>{var u=a(e,t);return n(o,u)||"undefined"!=typeof console&&console.warn&&console.warn(i(t,u,o)),s(e[t][u])},s=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,o,n){var a=v.I(r);return a.then?a.then(e.bind(e,r,v.S[r],t,o,n)):e(r,v.S[r],t,o,n)})((e,r,t,o,n)=>r&&v.o(r,t)?u(r,0,t,o):n()),p={},f={369:()=>l("default","react",[1,16,13,0],()=>v.e(378).then(()=>()=>v(378))),906:()=>l("default","react",[1,16,13,1],()=>v.e(744).then(()=>()=>v(378)))},d={369:[369],906:[906]},v.f.consumes=(e,r)=>{v.o(d,e)&&d[e].forEach(e=>{if(v.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,h[e]=t=>{delete c[e],t.exports=r()}},o=r=>{delete p[e],h[e]=t=>{throw delete c[e],r}};try{var n=f[e]();n.then?r.push(p[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}})},(()=>{var e={334:0};v.f.j=(r,t)=>{var o=v.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(369|906)$/.test(r))e[r]=0;else{var n=new Promise((t,n)=>{o=e[r]=[t,n]});t.push(o[2]=n);var a=v.p+v.u(r),i=new Error;v.l(a,t=>{if(v.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}},"chunk-"+r)}};var r=window.webpackJsonp_basic_host_remote_app2=window.webpackJsonp_basic_host_remote_app2||[],t=r.push.bind(r);r.push=function(r){for(var t,n,a=r[0],i=r[1],u=r[3],s=0,l=[];s<a.length;s++)n=a[s],v.o(e,n)&&e[n]&&l.push(e[n][0]),e[n]=0;for(t in i)v.o(i,t)&&(v.m[t]=i[t]);for(u&&u(v),o&&o(r);l.length;)l.shift()()};var o=t})(),v(677)})();