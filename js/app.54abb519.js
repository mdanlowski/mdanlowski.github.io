(function(t){function e(e){for(var n,a,s=e[0],i=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o={app:0},c=[];function s(t){return i.p+"js/"+({about:"about",projects:"projects"}[t]||t)+"."+{about:"64edbde5",projects:"31e56cec"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about",projects:"projects"}[t]||t)+"."+{about:"7de9f96e",projects:"31d6cfe0"}[t]+".css",o=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[t],p.parentNode.removeChild(p),r(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"04ec":function(t,e,r){},1771:function(t,e,r){var n={"./01_blog.jpg":"da1b","./02_RSSrails.jpg":"e51c","./03_gnarl.jpg":"857f","./04_paintchat.jpg":"c320","./05_shooter.jpg":"f1a1","./06_quotes.jpg":"89ac","./animate.css":"641b","./variables.scss":"7133"};function a(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="1771"},"1ba7":function(t,e,r){"use strict";var n=r("dd2c"),a=r.n(n);a.a},"2c5e":function(t,e,r){"use strict";var n=r("6086"),a=r.n(n);a.a},"3b24":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"featured-projects"}},[r("div",{attrs:{id:"md-revolver"}},t._l(t.projectData,(function(t){return r("div",{staticClass:"md-project"},[r("div",{staticClass:"face"},[r("project",{attrs:{projectDataObject:t}})],1),r("div",{staticClass:"depth"})])})),0)])},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"md-project-box"},[r("div",{staticClass:"project-content"},[r("div",{staticClass:"proj-header"},[r("h3",[t._v(t._s(t.projectDataObject.name))]),r("div",[t._v(t._s(t.projectDataObject.tech))])]),r("div",[t._v(t._s(t.projectDataObject.date))]),r("div",[r("ul",t._l(t.computedBullets,(function(e){return r("li",[t._v(t._s(e))])})),0)]),r("div",{staticClass:"proj-links"},[r("a",{attrs:{href:t.projectDataObject.repoUrl}},[t._v("Repository")]),r("a",{attrs:{href:t.projectDataObject.demoUrl}},[t._v("Live Demo")])]),r("div",{staticClass:"proj-image"},[r("div",{staticClass:"overlay"}),r("img",{attrs:{src:t.safeImgSrc}})])]),r("div",{staticClass:"footer"},[r("div",{staticClass:"tech-icons"},t._l(t.computedIconClasses,(function(t){return r("i",{class:t})})),0)])])},c=[],s={name:"project",props:["projectDataObject"],data(){return{}},mounted(){},methods:{},computed:{computedBullets(){return this.projectDataObject.bullets.split(";")},computedIconClasses(){return this.projectDataObject.techIcons.split(";")},safeImgSrc(){return this.projectDataObject.imgPath.hasOwnProperty("length")&&this.projectDataObject.imgPath.length>4?r("1771")(`./${this.projectDataObject.imgPath}`):""}}},i=s,u=(r("1ba7"),r("2877")),l=Object(u["a"])(i,o,c,!1,null,"1d7dab58",null),f=l.exports,p=(r("8fb0"),{name:"projects-gallery",components:{Project:f},data(){return{projectData:this.$store.state.projects}},mounted(){setTimeout(()=>{document.getElementById("md-revolver").scrollTo(100,0)},200)}}),d=p,h=(r("2c5e"),Object(u["a"])(d,n,a,!1,null,"a544a69a",null));e["a"]=h.exports},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{attrs:{id:"navigation"}},[r("router-link",{staticClass:"nav-block",attrs:{to:"/"}},[t._v("About Me")]),r("router-link",{staticClass:"nav-block",attrs:{to:"/projects"}},[t._v("Featured Projects")])],1),r("main",[r("router-view")],1),r("footer",[r("div",[t._v("CONTACT ME")]),r("div",{staticClass:"contact-me"},[r("div",{attrs:{id:"linkedin"}},[r("a",{attrs:{href:"https://www.linkedin.com/in/mdanlowski/"}},[r("svg",{staticClass:"svg-inline--fa fa-linkedin fa-w-14",attrs:{focusable:"false","data-prefix":"fab","data-icon":"linkedin",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[r("path",{attrs:{id:"path",fill:"red",d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}})])])]),t._m(0),t._m(1),t._m(2)])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"github"}},[r("a",{attrs:{href:"https://github.com/mdanlowski"}},[r("i",{staticClass:"devicon-github-plain"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"electronic-address"}},[r("a",{attrs:{href:"mailto:marcindanlowski@gmail.com"}},[t._v("✉")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"cv-download"}},[r("a",{attrs:{href:"/cv-oct-19.pdf"}},[t._v("cv")])])}],c={methods:{revealEaddress(){let t=document.getElementById("electronic-address").firstElementChild;t.innerText="marcindanlowski@gmail.com"}}},s=c,i=(r("5c0b"),r("2877")),u=Object(i["a"])(s,a,o,!1,null,null,null),l=u.exports,f=r("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"animated fadeIn",attrs:{id:"home"}},[r("div",{staticClass:"md-home-header"},[t._v("Hujaja")])])}],h=(r("3b24"),{name:"home",data(){return{}}}),v=h,m=(r("6c28"),Object(i["a"])(v,p,d,!1,null,"d7994e32",null)),b=(m.exports,r("2f62"));n["a"].use(b["a"]);var j=new b["a"].Store({state:{projects:[],about:{}},mutations:{saveProjectsData(t,e){let r=e.shift(),n=e,a=[];for(let o of n){let t={};for(let e in r)t[r[e]]=o[e];a.push(t)}t.projects=a},saveAboutData(t,e){let r=e.shift(),n=e,a={};for(let o in r)a[r[o]]=n[0][o];t.about=a}},actions:{},modules:{}});const g={SHEET_ID:"10YOTLGf803jrAFnugIMZJWg9pOFBAA6NtXJhllLzj3I",API_KEY:"AIzaSyAdCi7dpmqJ5XKMeoxKJXAL0x8822wsCBY",API_BASE:"https://sheets.googleapis.com/v4/spreadsheets/",url:function(t){return this.API_BASE+this.SHEET_ID+"/values/"+t+"?key="+this.API_KEY}};var _=g;n["a"].use(f["a"]);const y="Projects!B2:I9",O="About!B2:G3",w=[{path:"/",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))},beforeEnter:(t,e,r)=>{if(Object.keys(j.state.about).length>0)return r();fetch(_.url(O)).then((function(t){return t.json()})).then((function(t){j.commit("saveAboutData",t.values),r()})).catch((function(t){alert("Server error or unreachable | "+t)})).finally((function(){}))}},{path:"/projects",name:"projects",component:function(){return r.e("projects").then(r.bind(null,"acca"))},beforeEnter:(t,e,r)=>{if(Object.keys(j.state.projects).length>0)return r();fetch(_.url(y)).then((function(t){return t.json()})).then((function(t){j.commit("saveProjectsData",t.values),r()})).catch((function(t){alert("Server error or unreachable | "+t)})).finally((function(){}))}}],C=new f["a"]({routes:w});var E=C;n["a"].config.productionTip=!1,new n["a"]({router:E,store:j,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},6086:function(t,e,r){},"641b":function(t,e,r){},"6c28":function(t,e,r){"use strict";var n=r("04ec"),a=r.n(n);a.a},7133:function(t,e,r){},"857f":function(t,e,r){t.exports=r.p+"img/03_gnarl.99c053ca.jpg"},"89ac":function(t,e,r){t.exports=r.p+"img/06_quotes.67aaec19.jpg"},"8fb0":function(t){t.exports=JSON.parse("{}")},"9c0c":function(t,e,r){},c320:function(t,e,r){t.exports=r.p+"img/04_paintchat.07b7ac1b.jpg"},da1b:function(t,e,r){t.exports=r.p+"img/01_blog.a60e16f6.jpg"},dd2c:function(t,e,r){},e51c:function(t,e,r){t.exports=r.p+"img/02_RSSrails.dcf0fb51.jpg"},f1a1:function(t,e,r){t.exports=r.p+"img/05_shooter.68e5d5a3.jpg"}});
//# sourceMappingURL=app.54abb519.js.map