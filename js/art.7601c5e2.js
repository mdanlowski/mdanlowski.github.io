(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["art"],{"1cd2":function(t,e,r){},"2f84":function(t,e,r){t.exports=r.p+"img/da_traveller.d522735d.jpg"},"3c17":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"animated fadeIn",attrs:{id:"artworks"}},[t._m(0),i("div",{attrs:{id:"md-artworks-grid"}},t._l(t.artworks,(function(e){return i("div",{staticClass:"artwork-tile"},[i("OverlayTile",{staticClass:"overlay-tile",attrs:{overlayText:"",sizeX:"600",sizeY:"600",clickAction:e.fullUrl,imgAsBackground:!0,imgSrc:r("db74")("./"+e.thumbUrl)}},[i("div",{staticClass:"artwork-meta"},[i("div",[i("h1",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.description))]),i("p"),i("h4",[t._v("Tools and techniques:")]),t._v(t._s(e.technique)),i("p"),i("p",{staticClass:"date"},[t._v(t._s(e.date))])])])])],1)})),0)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section-info"},[r("header",[t._v("Dear Visitor, thank you for your interest in this section. One of my hobbies is drawing. I'm also beginning my adventure with digital drawing and graphics. I've decided to share with you artworks presented here.")])])}],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"tile",staticClass:"md-overlay-tile"},[r("div",{staticClass:"md-hoverable-overlay",on:{click:t.handleClick}},[r("div",{staticClass:"overlay-text"},[t._v(t._s(t.overlayText))]),r("div",{ref:"content",staticClass:"md-hoverable-content"},[t._t("default")],2)])])},n=[],o={props:["overlayText","sizeX","sizeY","clickAction","imgAsBackground","imgSrc","filter"],data(){return{}},methods:{handleClick(){}},mounted(){this.$refs.tile.style.height=this.$props.sizeY+"px",this.$refs.tile.style.width=this.$props.sizeX+"px",Array.isArray(this.$props.filter)&&(this.$refs.tile.style.filter=`${this.$props.filter[0]}(${this.$props.filter[1]})`),this.$props.imgAsBackground&&(this.$refs.tile.style.background=`url('${this.$props.imgSrc}')`)}},l=o,c=(r("a88d"),r("2877")),d=Object(c["a"])(l,a,n,!1,null,"86bf0d4a",null),u=d.exports,p={name:"projects",components:{OverlayTile:u},data(){return{artworks:this.$store.state.artworks}}},f=p,v=(r("e078"),Object(c["a"])(f,i,s,!1,null,"5d7db757",null));e["default"]=v.exports},"465e":function(t,e,r){t.exports=r.p+"img/creature.bcc8813a.jpg"},"61fe":function(t,e,r){},6279:function(t,e,r){t.exports=r.p+"img/da_nightmare_1.ec186b99.jpg"},a88d:function(t,e,r){"use strict";var i=r("1cd2"),s=r.n(i);s.a},b874:function(t,e,r){t.exports=r.p+"img/da_nov19_1_min.62875490.jpg"},db74:function(t,e,r){var i={"./creature.jpg":"465e","./da_nightmare_1.jpg":"6279","./da_nov19_1_min.jpg":"b874","./da_traveller.jpg":"2f84"};function s(t){var e=a(t);return r(e)}function a(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="db74"},e078:function(t,e,r){"use strict";var i=r("61fe"),s=r.n(i);s.a}}]);
//# sourceMappingURL=art.7601c5e2.js.map