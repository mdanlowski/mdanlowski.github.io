(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["art"],{"2f84":function(t,e,i){t.exports=i.p+"img/da_traveller.d522735d.jpg"},"3c17":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"animated fadeIn",attrs:{id:"artworks"}},[t._m(0),s("div",{attrs:{id:"md-artworks"}},t._l(t.artworks,(function(e){return s("div",{staticClass:"artwork-tile"},[s("div",{staticClass:"artwork-meta"},[s("div",[s("h1",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.description))]),s("p"),s("h4",[t._v("Tools and techniques:")]),t._v(t._s(e.technique)),s("p"),s("p",{staticClass:"date"},[t._v(t._s(e.date))])])]),s("OverlayTile",{staticClass:"overlay-tile",attrs:{overlayText:"Click here to open full size image",sizeX:"600",sizeY:"600",clickAction:e.fullUrl}},[s("img",{attrs:{src:i("db74")("./"+e.thumbUrl)}})])],1)})),0)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-info"},[i("header"),t._v("Dear Visitor, thank you for your interest in this section. One of my hobbies is drawing. I'm also beginning my adventure with digital drawing and graphics. I've decided to share with you artworks presented here.")])}],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"tile",staticClass:"md-overlay-tile"},[i("div",{staticClass:"md-hoverable-overlay",on:{click:t.handleClick}},[i("div",{staticClass:"overlay-text"},[t._v(t._s(t.overlayText))])]),i("div",{staticClass:"md-hoverable-content"},[t._t("default")],2)])},n=[],o={props:["overlayText","sizeX","sizeY","clickAction"],data(){return{}},methods:{handleClick(){this.$props.clickAction.includes("Comming soon")?location.replace(this.$props.clickAction):window.open(this.$props.clickAction)}},mounted(){this.$refs.tile.style.maxHeight=this.$props.sizeY+"px",this.$refs.tile.style.maxWidth=this.$props.sizeX+"px"}},c=o,l=(i("c05f"),i("2877")),d=Object(l["a"])(c,a,n,!1,null,"5235f5da",null),u=d.exports,p={name:"projects",components:{OverlayTile:u},data(){return{artworks:this.$store.state.artworks}}},v=p,f=(i("61be"),Object(l["a"])(v,s,r,!1,null,"cbdb1868",null));e["default"]=f.exports},"518a":function(t,e,i){},"61be":function(t,e,i){"use strict";var s=i("518a"),r=i.n(s);r.a},6279:function(t,e,i){t.exports=i.p+"img/da_nightmare_1.ec186b99.jpg"},"759d":function(t,e,i){},b874:function(t,e,i){t.exports=i.p+"img/da_nov19_1_min.62875490.jpg"},c05f:function(t,e,i){"use strict";var s=i("759d"),r=i.n(s);r.a},db74:function(t,e,i){var s={"./da_nightmare_1.jpg":"6279","./da_nov19_1_min.jpg":"b874","./da_traveller.jpg":"2f84"};function r(t){var e=a(t);return i(e)}function a(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=a,t.exports=r,r.id="db74"}}]);
//# sourceMappingURL=art.773236dc.js.map