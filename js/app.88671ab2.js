(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about",art:"art",projects:"projects"}[t]||t)+"."+{about:"07e7d61a",art:"773236dc",projects:"aaa89375"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1,art:1,projects:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about",art:"art",projects:"projects"}[t]||t)+"."+{about:"b1ce6b6a",art:"cecb0f5d",projects:"96bc294a"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],d.parentNode.removeChild(d),r(s)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{attrs:{id:"navigation"}},[r("router-link",{staticClass:"nav-block",attrs:{to:"/"}},[t._v("About Me")]),r("router-link",{staticClass:"nav-block",attrs:{to:"/projects"}},[t._v("Featured Projects")]),r("router-link",{staticClass:"nav-block minor",attrs:{to:"/artworks"}},[t._v("Artworks")])],1),r("main",[r("router-view")],1),r("footer",[r("div",[t._v("CONTACT ME")]),r("div",{staticClass:"contact-me"},[r("div",{attrs:{id:"linkedin"}},[r("a",{attrs:{href:"https://www.linkedin.com/in/mdanlowski/"}},[r("svg",{staticClass:"svg-inline--fa fa-linkedin fa-w-14",attrs:{focusable:"false","data-prefix":"fab","data-icon":"linkedin",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[r("path",{attrs:{id:"path",fill:"red",d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}})])])]),t._m(0),t._m(1),t._m(2)])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"github"}},[r("a",{attrs:{href:"https://github.com/mdanlowski"}},[r("i",{staticClass:"devicon-github-plain"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"electronic-address"}},[r("a",{attrs:{href:"mailto:marcindanlowski@gmail.com"}},[t._v("✉")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"cv-download"}},[r("a",{attrs:{href:"/cv-oct-19.pdf"}},[t._v("cv")])])}],s={methods:{revealEaddress(){let t=document.getElementById("electronic-address").firstElementChild;t.innerText="marcindanlowski@gmail.com"}}},i=s,c=(r("5c0b"),r("2877")),u=Object(c["a"])(i,a,o,!1,null,null,null),l=u.exports,f=r("8c4f"),d=r("2f62");n["a"].use(d["a"]);var h=new d["a"].Store({state:{projects:[],about:{},artworks:[]},mutations:{saveProjectsData(t,e){let r=e.shift(),n=e,a=[];for(let o of n){let t={};for(let e in r)t[r[e]]=o[e];a.push(t)}t.projects=a},saveAboutData(t,e){let r=e.shift(),n=e,a={};for(let o in r)a[r[o]]=n[0][o];t.about=a},saveArtworksData(t,e){let r=e.shift(),n=e,a=[];for(let o of n){let t={};for(let e in r)t[r[e]]=o[e];a.push(t)}t.artworks=a}},actions:{},modules:{}});const p={SHEET_ID:"10YOTLGf803jrAFnugIMZJWg9pOFBAA6NtXJhllLzj3I",API_KEY:"AIzaSyAdCi7dpmqJ5XKMeoxKJXAL0x8822wsCBY",API_BASE:"https://sheets.googleapis.com/v4/spreadsheets/",url:function(t){return this.API_BASE+this.SHEET_ID+"/values/"+t+"?key="+this.API_KEY}};var v=p;n["a"].use(f["a"]);const m="Projects!B2:I9",b="About!B2:G3",g="Artworks!B2:G5",w=[{path:"/",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))},beforeEnter:(t,e,r)=>{if(Object.keys(h.state.about).length>0)return r();fetch(v.url(b)).then((function(t){return t.json()})).then((function(t){h.commit("saveAboutData",t.values),r()})).catch((function(t){alert("Server error or unreachable | "+t)})).finally((function(){}))}},{path:"/projects",name:"projects",component:function(){return r.e("projects").then(r.bind(null,"acca"))},beforeEnter:(t,e,r)=>{if(Object.keys(h.state.projects).length>0)return r();fetch(v.url(m)).then((function(t){return t.json()})).then((function(t){h.commit("saveProjectsData",t.values),r()})).catch((function(t){alert("Server error or unreachable | "+t)})).finally((function(){}))}},{path:"/artworks",name:"artworks",component:function(){return r.e("art").then(r.bind(null,"3c17"))},beforeEnter:(t,e,r)=>{if(Object.keys(h.state.artworks).length>0)return r();fetch(v.url(g)).then((function(t){return t.json()})).then((function(t){h.commit("saveArtworksData",t.values),r()})).catch((function(t){alert("Server error or unreachable | "+t)})).finally((function(){}))}}],j=new f["a"]({routes:w});var y=j;n["a"].config.productionTip=!1,new n["a"]({router:y,store:h,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.88671ab2.js.map