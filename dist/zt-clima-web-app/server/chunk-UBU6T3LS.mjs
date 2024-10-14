import './polyfills.server.mjs';
import{$ as d1,A as K1,B as l,C as f,D as M,E as P3,F as F3,G as $,H as u1,I as D3,J as _3,K as u,L as q2,M as Q1,N,O as T3,V as E3,W as U2,Y as B3,Z as J1,_ as R3,a as S3,aa as O3,b as w3,ba as I3,c as A3,ca as q3,d as Y1,e as X1,f as y1,fa as U3,g as S1,h as l1,i as w1,j as x,ja as G3,k as A1,l as I,m as f1,ma as W3,n as O2,o as k3,p as m1,q as k1,r as P1,s as d,t as g,u as I2,v as F1,w as c1,x as P,y as D1,z as H}from"./chunk-YZDN7T24.mjs";import{a as w,b as o1,h as Z}from"./chunk-VVCT4QZE.mjs";var j3=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=x({type:c,selectors:[["app-header"]],standalone:!0,features:[N],decls:17,vars:0,consts:[[1,"container"],[1,"header"],["href","#inicio"],["alt","logo","src","assets/logo-alt.svg","height","60px","width","233px"],[1,"items"],["href","#nosotros"],["href","#servicios"],["href","#como-trabajamos"],["href","#marcas"],["href","#contactanos"]],template:function(r,n){r&1&&(l(0,"nav",0)(1,"div",1)(2,"a",2),M(3,"img",3),f(),l(4,"div",4)(5,"a",2),u(6,"Inicio"),f(),l(7,"a",5),u(8,"\xBFQui\xE9nes somos?"),f(),l(9,"a",6),u(10,"Servicios"),f(),l(11,"a",7),u(12,"C\xF3mo Trabajos"),f(),l(13,"a",8),u(14,"Marcas"),f(),l(15,"a",9),u(16,"Contactanos"),f()()()())},styles:["[_nghost-%COMP%]{background-color:#fff;padding:1rem;box-shadow:0 3px 6px #22222229}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.header[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.header[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{display:flex;gap:20px}}"]});let a=c;return a})();function Z3(a,c){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);c&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),e.push.apply(e,i)}return e}function v(a){for(var c=1;c<arguments.length;c++){var e=arguments[c]!=null?arguments[c]:{};c%2?Z3(Object(e),!0).forEach(function(i){A(a,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):Z3(Object(e)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(e,i))})}return a}function m2(a){"@babel/helpers - typeof";return m2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},m2(a)}function e8(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function $3(a,c){for(var e=0;e<c.length;e++){var i=c[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function i8(a,c,e){return c&&$3(a.prototype,c),e&&$3(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function A(a,c,e){return c in a?Object.defineProperty(a,c,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[c]=e,a}function n3(a,c){return n8(a)||t8(a,c)||V4(a,c)||l8()}function U1(a){return r8(a)||s8(a)||V4(a)||o8()}function r8(a){if(Array.isArray(a))return $2(a)}function n8(a){if(Array.isArray(a))return a}function s8(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function t8(a,c){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var i=[],r=!0,n=!1,s,t;try{for(e=e.call(a);!(r=(s=e.next()).done)&&(i.push(s.value),!(c&&i.length===c));r=!0);}catch(o){n=!0,t=o}finally{try{!r&&e.return!=null&&e.return()}finally{if(n)throw t}}return i}}function V4(a,c){if(a){if(typeof a=="string")return $2(a,c);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $2(a,c)}}function $2(a,c){(c==null||c>a.length)&&(c=a.length);for(var e=0,i=new Array(c);e<c;e++)i[e]=a[e];return i}function o8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Y3=function(){},s3={},M4={},C4=null,g4={mark:Y3,measure:Y3};try{typeof window<"u"&&(s3=window),typeof document<"u"&&(M4=document),typeof MutationObserver<"u"&&(C4=MutationObserver),typeof performance<"u"&&(g4=performance)}catch{}var f8=s3.navigator||{},X3=f8.userAgent,K3=X3===void 0?"":X3,e1=s3,b=M4,Q3=C4,c2=g4,s7=!!e1.document,Q=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",L4=~K3.indexOf("MSIE")||~K3.indexOf("Trident/"),a2,e2,i2,r2,n2,Y="___FONT_AWESOME___",Y2=16,b4="fa",x4="svg-inline--fa",z1="data-fa-i2svg",X2="data-fa-pseudo-element",m8="data-fa-pseudo-element-pending",t3="data-prefix",o3="data-icon",J3="fontawesome-i2svg",h8="async",v8=["HTML","HEAD","STYLE","SCRIPT"],N4=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),L="classic",y="sharp",l3=[L,y];function G1(a){return new Proxy(a,{get:function(e,i){return i in e?e[i]:e[L]}})}var B1=G1((a2={},A(a2,L,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),A(a2,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),a2)),R1=G1((e2={},A(e2,L,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),A(e2,y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),e2)),O1=G1((i2={},A(i2,L,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),A(i2,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),i2)),z8=G1((r2={},A(r2,L,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),A(r2,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),r2)),p8=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,y4="fa-layers-text",u8=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,d8=G1((n2={},A(n2,L,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),A(n2,y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),n2)),S4=[1,2,3,4,5,6,7,8,9,10],H8=S4.concat([11,12,13,14,15,16,17,18,19,20]),V8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],h1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},I1=new Set;Object.keys(R1[L]).map(I1.add.bind(I1));Object.keys(R1[y]).map(I1.add.bind(I1));var M8=[].concat(l3,U1(I1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",h1.GROUP,h1.SWAP_OPACITY,h1.PRIMARY,h1.SECONDARY]).concat(S4.map(function(a){return"".concat(a,"x")})).concat(H8.map(function(a){return"w-".concat(a)})),T1=e1.FontAwesomeConfig||{};function C8(a){var c=b.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function g8(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}b&&typeof b.querySelector=="function"&&(c4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],c4.forEach(function(a){var c=n3(a,2),e=c[0],i=c[1],r=g8(C8(e));r!=null&&(T1[i]=r)}));var c4,w4={styleDefault:"solid",familyDefault:"classic",cssPrefix:b4,replacementClass:x4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};T1.familyPrefix&&(T1.cssPrefix=T1.familyPrefix);var C1=v(v({},w4),T1);C1.autoReplaceSvg||(C1.observeMutations=!1);var p={};Object.keys(w4).forEach(function(a){Object.defineProperty(p,a,{enumerable:!0,set:function(e){C1[a]=e,E1.forEach(function(i){return i(p)})},get:function(){return C1[a]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(c){C1.cssPrefix=c,E1.forEach(function(e){return e(p)})},get:function(){return C1.cssPrefix}});e1.FontAwesomeConfig=p;var E1=[];function L8(a){return E1.push(a),function(){E1.splice(E1.indexOf(a),1)}}var a1=Y2,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function b8(a){if(!(!a||!Q)){var c=b.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var e=b.head.childNodes,i=null,r=e.length-1;r>-1;r--){var n=e[r],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=n)}return b.head.insertBefore(c,i),a}}var x8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q1(){for(var a=12,c="";a-- >0;)c+=x8[Math.random()*62|0];return c}function g1(a){for(var c=[],e=(a||[]).length>>>0;e--;)c[e]=a[e];return c}function f3(a){return a.classList?g1(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function A4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function N8(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,'="').concat(A4(a[e]),'" ')},"").trim()}function z2(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,": ").concat(a[e].trim(),";")},"")}function m3(a){return a.size!==j.size||a.x!==j.x||a.y!==j.y||a.rotate!==j.rotate||a.flipX||a.flipY}function y8(a){var c=a.transform,e=a.containerWidth,i=a.iconWidth,r={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),s="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(n," ").concat(s," ").concat(t)},h={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:o,path:h}}function S8(a){var c=a.transform,e=a.width,i=e===void 0?Y2:e,r=a.height,n=r===void 0?Y2:r,s=a.startCentered,t=s===void 0?!1:s,o="";return t&&L4?o+="translate(".concat(c.x/a1-i/2,"em, ").concat(c.y/a1-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/a1,"em), calc(-50% + ").concat(c.y/a1,"em)) "):o+="translate(".concat(c.x/a1,"em, ").concat(c.y/a1,"em) "),o+="scale(".concat(c.size/a1*(c.flipX?-1:1),", ").concat(c.size/a1*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var w8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function k4(){var a=b4,c=x4,e=p.cssPrefix,i=p.replacementClass,r=w8;if(e!==a||i!==c){var n=new RegExp("\\.".concat(a,"\\-"),"g"),s=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");r=r.replace(n,".".concat(e,"-")).replace(s,"--".concat(e,"-")).replace(t,".".concat(i))}return r}var a4=!1;function G2(){p.autoAddCss&&!a4&&(b8(k4()),a4=!0)}var A8={mixout:function(){return{dom:{css:k4,insertCss:G2}}},hooks:function(){return{beforeDOMElementCreation:function(){G2()},beforeI2svg:function(){G2()}}}},X=e1||{};X[Y]||(X[Y]={});X[Y].styles||(X[Y].styles={});X[Y].hooks||(X[Y].hooks={});X[Y].shims||(X[Y].shims=[]);var U=X[Y],P4=[],k8=function a(){b.removeEventListener("DOMContentLoaded",a),h2=1,P4.map(function(c){return c()})},h2=!1;Q&&(h2=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),h2||b.addEventListener("DOMContentLoaded",k8));function P8(a){Q&&(h2?setTimeout(a,0):P4.push(a))}function W1(a){var c=a.tag,e=a.attributes,i=e===void 0?{}:e,r=a.children,n=r===void 0?[]:r;return typeof a=="string"?A4(a):"<".concat(c," ").concat(N8(i),">").concat(n.map(W1).join(""),"</").concat(c,">")}function e4(a,c,e){if(a&&a[c]&&a[c][e])return{prefix:c,iconName:e,icon:a[c][e]}}var F8=function(c,e){return function(i,r,n,s){return c.call(e,i,r,n,s)}},W2=function(c,e,i,r){var n=Object.keys(c),s=n.length,t=r!==void 0?F8(e,r):e,o,h,m;for(i===void 0?(o=1,m=c[n[0]]):(o=0,m=i);o<s;o++)h=n[o],m=t(m,c[h],h,c);return m};function D8(a){for(var c=[],e=0,i=a.length;e<i;){var r=a.charCodeAt(e++);if(r>=55296&&r<=56319&&e<i){var n=a.charCodeAt(e++);(n&64512)==56320?c.push(((r&1023)<<10)+(n&1023)+65536):(c.push(r),e--)}else c.push(r)}return c}function K2(a){var c=D8(a);return c.length===1?c[0].toString(16):null}function _8(a,c){var e=a.length,i=a.charCodeAt(c),r;return i>=55296&&i<=56319&&e>c+1&&(r=a.charCodeAt(c+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function i4(a){return Object.keys(a).reduce(function(c,e){var i=a[e],r=!!i.icon;return r?c[i.iconName]=i.icon:c[e]=i,c},{})}function Q2(a,c){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=e.skipHooks,r=i===void 0?!1:i,n=i4(c);typeof U.hooks.addPack=="function"&&!r?U.hooks.addPack(a,i4(c)):U.styles[a]=v(v({},U.styles[a]||{}),n),a==="fas"&&Q2("fa",c)}var s2,t2,o2,H1=U.styles,T8=U.shims,E8=(s2={},A(s2,L,Object.values(O1[L])),A(s2,y,Object.values(O1[y])),s2),h3=null,F4={},D4={},_4={},T4={},E4={},B8=(t2={},A(t2,L,Object.keys(B1[L])),A(t2,y,Object.keys(B1[y])),t2);function R8(a){return~M8.indexOf(a)}function O8(a,c){var e=c.split("-"),i=e[0],r=e.slice(1).join("-");return i===a&&r!==""&&!R8(r)?r:null}var B4=function(){var c=function(n){return W2(H1,function(s,t,o){return s[o]=W2(t,n,{}),s},{})};F4=c(function(r,n,s){if(n[3]&&(r[n[3]]=s),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=s})}return r}),D4=c(function(r,n,s){if(r[s]=s,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=s})}return r}),E4=c(function(r,n,s){var t=n[2];return r[s]=s,t.forEach(function(o){r[o]=s}),r});var e="far"in H1||p.autoFetchSvg,i=W2(T8,function(r,n){var s=n[0],t=n[1],o=n[2];return t==="far"&&!e&&(t="fas"),typeof s=="string"&&(r.names[s]={prefix:t,iconName:o}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});_4=i.names,T4=i.unicodes,h3=p2(p.styleDefault,{family:p.familyDefault})};L8(function(a){h3=p2(a.styleDefault,{family:p.familyDefault})});B4();function v3(a,c){return(F4[a]||{})[c]}function I8(a,c){return(D4[a]||{})[c]}function v1(a,c){return(E4[a]||{})[c]}function R4(a){return _4[a]||{prefix:null,iconName:null}}function q8(a){var c=T4[a],e=v3("fas",a);return c||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function i1(){return h3}var z3=function(){return{prefix:null,iconName:null,rest:[]}};function p2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.family,i=e===void 0?L:e,r=B1[i][a],n=R1[i][a]||R1[i][r],s=a in U.styles?a:null;return n||s||null}var r4=(o2={},A(o2,L,Object.keys(O1[L])),A(o2,y,Object.keys(O1[y])),o2);function u2(a){var c,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.skipLookups,r=i===void 0?!1:i,n=(c={},A(c,L,"".concat(p.cssPrefix,"-").concat(L)),A(c,y,"".concat(p.cssPrefix,"-").concat(y)),c),s=null,t=L;(a.includes(n[L])||a.some(function(h){return r4[L].includes(h)}))&&(t=L),(a.includes(n[y])||a.some(function(h){return r4[y].includes(h)}))&&(t=y);var o=a.reduce(function(h,m){var z=O8(p.cssPrefix,m);if(H1[m]?(m=E8[t].includes(m)?z8[t][m]:m,s=m,h.prefix=m):B8[t].indexOf(m)>-1?(s=m,h.prefix=p2(m,{family:t})):z?h.iconName=z:m!==p.replacementClass&&m!==n[L]&&m!==n[y]&&h.rest.push(m),!r&&h.prefix&&h.iconName){var V=s==="fa"?R4(h.iconName):{},C=v1(h.prefix,h.iconName);V.prefix&&(s=null),h.iconName=V.iconName||C||h.iconName,h.prefix=V.prefix||h.prefix,h.prefix==="far"&&!H1.far&&H1.fas&&!p.autoFetchSvg&&(h.prefix="fas")}return h},z3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===y&&(H1.fass||p.autoFetchSvg)&&(o.prefix="fass",o.iconName=v1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=i1()||"fas"),o}var U8=function(){function a(){e8(this,a),this.definitions={}}return i8(a,[{key:"add",value:function(){for(var e=this,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(t){e.definitions[t]=v(v({},e.definitions[t]||{}),s[t]),Q2(t,s[t]);var o=O1[L][t];o&&Q2(o,s[t]),B4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(n){var s=r[n],t=s.prefix,o=s.iconName,h=s.icon,m=h[2];e[t]||(e[t]={}),m.length>0&&m.forEach(function(z){typeof z=="string"&&(e[t][z]=h)}),e[t][o]=h}),e}}]),a}(),n4=[],V1={},M1={},G8=Object.keys(M1);function W8(a,c){var e=c.mixoutsTo;return n4=a,V1={},Object.keys(M1).forEach(function(i){G8.indexOf(i)===-1&&delete M1[i]}),n4.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(e[s]=r[s]),m2(r[s])==="object"&&Object.keys(r[s]).forEach(function(t){e[s]||(e[s]={}),e[s][t]=r[s][t]})}),i.hooks){var n=i.hooks();Object.keys(n).forEach(function(s){V1[s]||(V1[s]=[]),V1[s].push(n[s])})}i.provides&&i.provides(M1)}),e}function J2(a,c){for(var e=arguments.length,i=new Array(e>2?e-2:0),r=2;r<e;r++)i[r-2]=arguments[r];var n=V1[a]||[];return n.forEach(function(s){c=s.apply(null,[c].concat(i))}),c}function p1(a){for(var c=arguments.length,e=new Array(c>1?c-1:0),i=1;i<c;i++)e[i-1]=arguments[i];var r=V1[a]||[];r.forEach(function(n){n.apply(null,e)})}function K(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return M1[a]?M1[a].apply(null,c):void 0}function c3(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,e=a.prefix||i1();if(c)return c=v1(e,c)||c,e4(O4.definitions,e,c)||e4(U.styles,e,c)}var O4=new U8,j8=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,p1("noAuto")},Z8={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Q?(p1("beforeI2svg",c),K("pseudoElements2svg",c),K("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,P8(function(){Y8({autoReplaceSvgRoot:e}),p1("watch",c)})}},$8={icon:function(c){if(c===null)return null;if(m2(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:v1(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],i=p2(c[0]);return{prefix:i,iconName:v1(i,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(p.cssPrefix,"-"))>-1||c.match(p8))){var r=u2(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||i1(),iconName:v1(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var n=i1();return{prefix:n,iconName:v1(n,c)||c}}}},E={noAuto:j8,config:p,dom:Z8,parse:$8,library:O4,findIconDefinition:c3,toHtml:W1},Y8=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot,i=e===void 0?b:e;(Object.keys(U.styles).length>0||p.autoFetchSvg)&&Q&&p.autoReplaceSvg&&E.dom.i2svg({node:i})};function d2(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(i){return W1(i)})}}),Object.defineProperty(a,"node",{get:function(){if(Q){var i=b.createElement("div");return i.innerHTML=a.html,i.children}}}),a}function X8(a){var c=a.children,e=a.main,i=a.mask,r=a.attributes,n=a.styles,s=a.transform;if(m3(s)&&e.found&&!i.found){var t=e.width,o=e.height,h={x:t/o/2,y:.5};r.style=z2(v(v({},n),{},{"transform-origin":"".concat(h.x+s.x/16,"em ").concat(h.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function K8(a){var c=a.prefix,e=a.iconName,i=a.children,r=a.attributes,n=a.symbol,s=n===!0?"".concat(c,"-").concat(p.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},r),{},{id:s}),children:i}]}]}function p3(a){var c=a.icons,e=c.main,i=c.mask,r=a.prefix,n=a.iconName,s=a.transform,t=a.symbol,o=a.title,h=a.maskId,m=a.titleId,z=a.extra,V=a.watchable,C=V===void 0?!1:V,D=i.found?i:e,B=D.width,O=D.height,G=r==="fak",k=[p.replacementClass,n?"".concat(p.cssPrefix,"-").concat(n):""].filter(function(J){return z.classes.indexOf(J)===-1}).filter(function(J){return J!==""||!!J}).concat(z.classes).join(" "),_={children:[],attributes:v(v({},z.attributes),{},{"data-prefix":r,"data-icon":n,class:k,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(B," ").concat(O)})},W=G&&!~z.classes.indexOf("fa-fw")?{width:"".concat(B/O*16*.0625,"em")}:{};C&&(_.attributes[z1]=""),o&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(m||q1())},children:[o]}),delete _.attributes.title);var T=v(v({},_),{},{prefix:r,iconName:n,main:e,mask:i,maskId:h,transform:s,symbol:t,styles:v(v({},W),z.styles)}),s1=i.found&&e.found?K("generateAbstractMask",T)||{children:[],attributes:{}}:K("generateAbstractIcon",T)||{children:[],attributes:{}},t1=s1.children,R2=s1.attributes;return T.children=t1,T.attributes=R2,t?K8(T):X8(T)}function s4(a){var c=a.content,e=a.width,i=a.height,r=a.transform,n=a.title,s=a.extra,t=a.watchable,o=t===void 0?!1:t,h=v(v(v({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});o&&(h[z1]="");var m=v({},s.styles);m3(r)&&(m.transform=S8({transform:r,startCentered:!0,width:e,height:i}),m["-webkit-transform"]=m.transform);var z=z2(m);z.length>0&&(h.style=z);var V=[];return V.push({tag:"span",attributes:h,children:[c]}),n&&V.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),V}function Q8(a){var c=a.content,e=a.title,i=a.extra,r=v(v(v({},i.attributes),e?{title:e}:{}),{},{class:i.classes.join(" ")}),n=z2(i.styles);n.length>0&&(r.style=n);var s=[];return s.push({tag:"span",attributes:r,children:[c]}),e&&s.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),s}var j2=U.styles;function a3(a){var c=a[0],e=a[1],i=a.slice(4),r=n3(i,1),n=r[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(h1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(h1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(h1.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:e,icon:s}}var J8={found:!1,width:512,height:512};function c0(a,c){!N4&&!p.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function e3(a,c){var e=c;return c==="fa"&&p.styleDefault!==null&&(c=i1()),new Promise(function(i,r){var n={found:!1,width:512,height:512,icon:K("missingIconAbstract")||{}};if(e==="fa"){var s=R4(a)||{};a=s.iconName||a,c=s.prefix||c}if(a&&c&&j2[c]&&j2[c][a]){var t=j2[c][a];return i(a3(t))}c0(a,c),i(v(v({},J8),{},{icon:p.showMissingIcons&&a?K("missingIconAbstract")||{}:{}}))})}var t4=function(){},i3=p.measurePerformance&&c2&&c2.mark&&c2.measure?c2:{mark:t4,measure:t4},_1='FA "6.5.1"',a0=function(c){return i3.mark("".concat(_1," ").concat(c," begins")),function(){return I4(c)}},I4=function(c){i3.mark("".concat(_1," ").concat(c," ends")),i3.measure("".concat(_1," ").concat(c),"".concat(_1," ").concat(c," begins"),"".concat(_1," ").concat(c," ends"))},u3={begin:a0,end:I4},l2=function(){};function o4(a){var c=a.getAttribute?a.getAttribute(z1):null;return typeof c=="string"}function e0(a){var c=a.getAttribute?a.getAttribute(t3):null,e=a.getAttribute?a.getAttribute(o3):null;return c&&e}function i0(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(p.replacementClass)}function r0(){if(p.autoReplaceSvg===!0)return f2.replace;var a=f2[p.autoReplaceSvg];return a||f2.replace}function n0(a){return b.createElementNS("http://www.w3.org/2000/svg",a)}function s0(a){return b.createElement(a)}function q4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.ceFn,i=e===void 0?a.tag==="svg"?n0:s0:e;if(typeof a=="string")return b.createTextNode(a);var r=i(a.tag);Object.keys(a.attributes||[]).forEach(function(s){r.setAttribute(s,a.attributes[s])});var n=a.children||[];return n.forEach(function(s){r.appendChild(q4(s,{ceFn:i}))}),r}function t0(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var f2={replace:function(c){var e=c[0];if(e.parentNode)if(c[1].forEach(function(r){e.parentNode.insertBefore(q4(r),e)}),e.getAttribute(z1)===null&&p.keepOriginalSource){var i=b.createComment(t0(e));e.parentNode.replaceChild(i,e)}else e.remove()},nest:function(c){var e=c[0],i=c[1];if(~f3(e).indexOf(p.replacementClass))return f2.replace(c);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var n=i[0].attributes.class.split(" ").reduce(function(t,o){return o===p.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});i[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var s=i.map(function(t){return W1(t)}).join(`
`);e.setAttribute(z1,""),e.innerHTML=s}};function l4(a){a()}function U4(a,c){var e=typeof c=="function"?c:l2;if(a.length===0)e();else{var i=l4;p.mutateApproach===h8&&(i=e1.requestAnimationFrame||l4),i(function(){var r=r0(),n=u3.begin("mutate");a.map(r),n(),e()})}}var d3=!1;function G4(){d3=!0}function r3(){d3=!1}var v2=null;function f4(a){if(Q3&&p.observeMutations){var c=a.treeCallback,e=c===void 0?l2:c,i=a.nodeCallback,r=i===void 0?l2:i,n=a.pseudoElementsCallback,s=n===void 0?l2:n,t=a.observeMutationsRoot,o=t===void 0?b:t;v2=new Q3(function(h){if(!d3){var m=i1();g1(h).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!o4(z.addedNodes[0])&&(p.searchPseudoElements&&s(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&p.searchPseudoElements&&s(z.target.parentNode),z.type==="attributes"&&o4(z.target)&&~V8.indexOf(z.attributeName))if(z.attributeName==="class"&&e0(z.target)){var V=u2(f3(z.target)),C=V.prefix,D=V.iconName;z.target.setAttribute(t3,C||m),D&&z.target.setAttribute(o3,D)}else i0(z.target)&&r(z.target)})}}),Q&&v2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function o0(){v2&&v2.disconnect()}function l0(a){var c=a.getAttribute("style"),e=[];return c&&(e=c.split(";").reduce(function(i,r){var n=r.split(":"),s=n[0],t=n.slice(1);return s&&t.length>0&&(i[s]=t.join(":").trim()),i},{})),e}function f0(a){var c=a.getAttribute("data-prefix"),e=a.getAttribute("data-icon"),i=a.innerText!==void 0?a.innerText.trim():"",r=u2(f3(a));return r.prefix||(r.prefix=i1()),c&&e&&(r.prefix=c,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=I8(r.prefix,a.innerText)||v3(r.prefix,K2(a.innerText))),!r.iconName&&p.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function m0(a){var c=g1(a.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),e=a.getAttribute("title"),i=a.getAttribute("data-fa-title-id");return p.autoA11y&&(e?c["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(i||q1()):(c["aria-hidden"]="true",c.focusable="false")),c}function h0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function m4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=f0(a),i=e.iconName,r=e.prefix,n=e.rest,s=m0(a),t=J2("parseNodeAttributes",{},a),o=c.styleParser?l0(a):[];return v({iconName:i,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:s}},t)}var v0=U.styles;function W4(a){var c=p.autoReplaceSvg==="nest"?m4(a,{styleParser:!1}):m4(a);return~c.extra.classes.indexOf(y4)?K("generateLayersText",a,c):K("generateSvgReplacementMutation",a,c)}var r1=new Set;l3.map(function(a){r1.add("fa-".concat(a))});Object.keys(B1[L]).map(r1.add.bind(r1));Object.keys(B1[y]).map(r1.add.bind(r1));r1=U1(r1);function h4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q)return Promise.resolve();var e=b.documentElement.classList,i=function(z){return e.add("".concat(J3,"-").concat(z))},r=function(z){return e.remove("".concat(J3,"-").concat(z))},n=p.autoFetchSvg?r1:l3.map(function(m){return"fa-".concat(m)}).concat(Object.keys(v0));n.includes("fa")||n.push("fa");var s=[".".concat(y4,":not([").concat(z1,"])")].concat(n.map(function(m){return".".concat(m,":not([").concat(z1,"])")})).join(", ");if(s.length===0)return Promise.resolve();var t=[];try{t=g1(a.querySelectorAll(s))}catch{}if(t.length>0)i("pending"),r("complete");else return Promise.resolve();var o=u3.begin("onTree"),h=t.reduce(function(m,z){try{var V=W4(z);V&&m.push(V)}catch(C){N4||C.name==="MissingIcon"&&console.error(C)}return m},[]);return new Promise(function(m,z){Promise.all(h).then(function(V){U4(V,function(){i("active"),i("complete"),r("pending"),typeof c=="function"&&c(),o(),m()})}).catch(function(V){o(),z(V)})})}function z0(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;W4(a).then(function(e){e&&U4([e],c)})}function p0(a){return function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(c||{}).icon?c:c3(c||{}),r=e.mask;return r&&(r=(r||{}).icon?r:c3(r||{})),a(i,v(v({},e),{},{mask:r}))}}var u0=function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,r=i===void 0?j:i,n=e.symbol,s=n===void 0?!1:n,t=e.mask,o=t===void 0?null:t,h=e.maskId,m=h===void 0?null:h,z=e.title,V=z===void 0?null:z,C=e.titleId,D=C===void 0?null:C,B=e.classes,O=B===void 0?[]:B,G=e.attributes,k=G===void 0?{}:G,_=e.styles,W=_===void 0?{}:_;if(c){var T=c.prefix,s1=c.iconName,t1=c.icon;return d2(v({type:"icon"},c),function(){return p1("beforeDOMElementCreation",{iconDefinition:c,params:e}),p.autoA11y&&(V?k["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(D||q1()):(k["aria-hidden"]="true",k.focusable="false")),p3({icons:{main:a3(t1),mask:o?a3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:s1,transform:v(v({},j),r),symbol:s,title:V,maskId:m,titleId:D,extra:{attributes:k,styles:W,classes:O}})})}},d0={mixout:function(){return{icon:p0(u0)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=h4,e.nodeCallback=z0,e}}},provides:function(c){c.i2svg=function(e){var i=e.node,r=i===void 0?b:i,n=e.callback,s=n===void 0?function(){}:n;return h4(r,s)},c.generateSvgReplacementMutation=function(e,i){var r=i.iconName,n=i.title,s=i.titleId,t=i.prefix,o=i.transform,h=i.symbol,m=i.mask,z=i.maskId,V=i.extra;return new Promise(function(C,D){Promise.all([e3(r,t),m.iconName?e3(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(B){var O=n3(B,2),G=O[0],k=O[1];C([e,p3({icons:{main:G,mask:k},prefix:t,iconName:r,transform:o,symbol:h,maskId:z,title:n,titleId:s,extra:V,watchable:!0})])}).catch(D)})},c.generateAbstractIcon=function(e){var i=e.children,r=e.attributes,n=e.main,s=e.transform,t=e.styles,o=z2(t);o.length>0&&(r.style=o);var h;return m3(s)&&(h=K("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),i.push(h||n.icon),{children:i,attributes:r}}}},H0={mixout:function(){return{layer:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,n=r===void 0?[]:r;return d2({type:"layer"},function(){p1("beforeDOMElementCreation",{assembler:e,params:i});var s=[];return e(function(t){Array.isArray(t)?t.map(function(o){s=s.concat(o.abstract)}):s=s.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(U1(n)).join(" ")},children:s}]})}}}},V0={mixout:function(){return{counter:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,n=r===void 0?null:r,s=i.classes,t=s===void 0?[]:s,o=i.attributes,h=o===void 0?{}:o,m=i.styles,z=m===void 0?{}:m;return d2({type:"counter",content:e},function(){return p1("beforeDOMElementCreation",{content:e,params:i}),Q8({content:e.toString(),title:n,extra:{attributes:h,styles:z,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(U1(t))}})})}}}},M0={mixout:function(){return{text:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,n=r===void 0?j:r,s=i.title,t=s===void 0?null:s,o=i.classes,h=o===void 0?[]:o,m=i.attributes,z=m===void 0?{}:m,V=i.styles,C=V===void 0?{}:V;return d2({type:"text",content:e},function(){return p1("beforeDOMElementCreation",{content:e,params:i}),s4({content:e,transform:v(v({},j),n),title:t,extra:{attributes:z,styles:C,classes:["".concat(p.cssPrefix,"-layers-text")].concat(U1(h))}})})}}},provides:function(c){c.generateLayersText=function(e,i){var r=i.title,n=i.transform,s=i.extra,t=null,o=null;if(L4){var h=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();t=m.width/h,o=m.height/h}return p.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,s4({content:e.innerHTML,width:t,height:o,transform:n,title:r,extra:s,watchable:!0})])}}},C0=new RegExp('"',"ug"),v4=[1105920,1112319];function g0(a){var c=a.replace(C0,""),e=_8(c,0),i=e>=v4[0]&&e<=v4[1],r=c.length===2?c[0]===c[1]:!1;return{value:K2(r?c[0]:c),isSecondary:i||r}}function z4(a,c){var e="".concat(m8).concat(c.replace(":","-"));return new Promise(function(i,r){if(a.getAttribute(e)!==null)return i();var n=g1(a.children),s=n.filter(function(t1){return t1.getAttribute(X2)===c})[0],t=e1.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(u8),h=t.getPropertyValue("font-weight"),m=t.getPropertyValue("content");if(s&&!o)return a.removeChild(s),i();if(o&&m!=="none"&&m!==""){var z=t.getPropertyValue("content"),V=~["Sharp"].indexOf(o[2])?y:L,C=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?R1[V][o[2].toLowerCase()]:d8[V][h],D=g0(z),B=D.value,O=D.isSecondary,G=o[0].startsWith("FontAwesome"),k=v3(C,B),_=k;if(G){var W=q8(B);W.iconName&&W.prefix&&(k=W.iconName,C=W.prefix)}if(k&&!O&&(!s||s.getAttribute(t3)!==C||s.getAttribute(o3)!==_)){a.setAttribute(e,_),s&&a.removeChild(s);var T=h0(),s1=T.extra;s1.attributes[X2]=c,e3(k,C).then(function(t1){var R2=p3(v(v({},T),{},{icons:{main:t1,mask:z3()},prefix:C,iconName:_,extra:s1,watchable:!0})),J=b.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(J,a.firstChild):a.appendChild(J),J.outerHTML=R2.map(function(a8){return W1(a8)}).join(`
`),a.removeAttribute(e),i()}).catch(r)}else i()}else i()})}function L0(a){return Promise.all([z4(a,"::before"),z4(a,"::after")])}function b0(a){return a.parentNode!==document.head&&!~v8.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(X2)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function p4(a){if(Q)return new Promise(function(c,e){var i=g1(a.querySelectorAll("*")).filter(b0).map(L0),r=u3.begin("searchPseudoElements");G4(),Promise.all(i).then(function(){r(),r3(),c()}).catch(function(){r(),r3(),e()})})}var x0={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=p4,e}}},provides:function(c){c.pseudoElements2svg=function(e){var i=e.node,r=i===void 0?b:i;p.searchPseudoElements&&p4(r)}}},u4=!1,N0={mixout:function(){return{dom:{unwatch:function(){G4(),u4=!0}}}},hooks:function(){return{bootstrap:function(){f4(J2("mutationObserverCallbacks",{}))},noAuto:function(){o0()},watch:function(e){var i=e.observeMutationsRoot;u4?r3():f4(J2("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},d4=function(c){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(i,r){var n=r.toLowerCase().split("-"),s=n[0],t=n.slice(1).join("-");if(s&&t==="h")return i.flipX=!0,i;if(s&&t==="v")return i.flipY=!0,i;if(t=parseFloat(t),isNaN(t))return i;switch(s){case"grow":i.size=i.size+t;break;case"shrink":i.size=i.size-t;break;case"left":i.x=i.x-t;break;case"right":i.x=i.x+t;break;case"up":i.y=i.y-t;break;case"down":i.y=i.y+t;break;case"rotate":i.rotate=i.rotate+t;break}return i},e)},y0={mixout:function(){return{parse:{transform:function(e){return d4(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,i){var r=i.getAttribute("data-fa-transform");return r&&(e.transform=d4(r)),e}}},provides:function(c){c.generateAbstractTransformGrouping=function(e){var i=e.main,r=e.transform,n=e.containerWidth,s=e.iconWidth,t={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),h="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),z={transform:"".concat(o," ").concat(h," ").concat(m)},V={transform:"translate(".concat(s/2*-1," -256)")},C={outer:t,inner:z,path:V};return{tag:"g",attributes:v({},C.outer),children:[{tag:"g",attributes:v({},C.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:v(v({},i.icon.attributes),C.path)}]}]}}}},Z2={x:0,y:0,width:"100%",height:"100%"};function H4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function S0(a){return a.tag==="g"?a.children:[a]}var w0={hooks:function(){return{parseNodeAttributes:function(e,i){var r=i.getAttribute("data-fa-mask"),n=r?u2(r.split(" ").map(function(s){return s.trim()})):z3();return n.prefix||(n.prefix=i1()),e.mask=n,e.maskId=i.getAttribute("data-fa-mask-id"),e}}},provides:function(c){c.generateAbstractMask=function(e){var i=e.children,r=e.attributes,n=e.main,s=e.mask,t=e.maskId,o=e.transform,h=n.width,m=n.icon,z=s.width,V=s.icon,C=y8({transform:o,containerWidth:z,iconWidth:h}),D={tag:"rect",attributes:v(v({},Z2),{},{fill:"white"})},B=m.children?{children:m.children.map(H4)}:{},O={tag:"g",attributes:v({},C.inner),children:[H4(v({tag:m.tag,attributes:v(v({},m.attributes),C.path)},B))]},G={tag:"g",attributes:v({},C.outer),children:[O]},k="mask-".concat(t||q1()),_="clip-".concat(t||q1()),W={tag:"mask",attributes:v(v({},Z2),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[D,G]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:S0(V)},W]};return i.push(T,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(k,")")},Z2)}),{children:i,attributes:r}}}},A0={provides:function(c){var e=!1;e1.matchMedia&&(e=e1.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=v(v({},n),{},{attributeName:"opacity"}),t={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||t.children.push({tag:"animate",attributes:v(v({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(t),i.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:v(v({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||i.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},k0={hooks:function(){return{parseNodeAttributes:function(e,i){var r=i.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return e.symbol=n,e}}}},P0=[A8,d0,H0,V0,M0,x0,N0,y0,w0,A0,k0];W8(P0,{mixoutsTo:E});var t7=E.noAuto,o7=E.config,l7=E.library,f7=E.dom,j4=E.parse,m7=E.findIconDefinition,h7=E.toHtml,Z4=E.icon,v7=E.layer,F0=E.text,D0=E.counter;var _0=["*"],T0=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},E0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},B0=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(e=>c[e]?e:null).filter(e=>e)},R0=a=>a.prefix!==void 0&&a.iconName!==void 0,O0=(a,c)=>R0(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},I0=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=y1({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),q0=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...i){for(let r of i){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let n of r.icon[2])typeof n=="string"&&(this.definitions[r.prefix][n]=r)}}addIconPacks(...i){for(let r of i){let n=Object.keys(r).map(s=>r[s]);this.addIcons(...n)}}getIconDefinition(i,r){return i in this.definitions&&r in this.definitions[i]?this.definitions[i][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=y1({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),U0=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(i){if("size"in i)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=I({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[f1]});let a=c;return a})(),G0=(()=>{let c=class c{constructor(i,r){this.renderer=i,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(i){"size"in i&&(i.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${i.size.currentValue}`),i.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${i.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(g(P1),g(k1))},c.\u0275cmp=x({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[f1,N],ngContentSelectors:_0,decls:1,vars:0,template:function(r,n){r&1&&(D3(),_3(0))},encapsulation:2});let a=c;return a})(),H2=(()=>{let c=class c{set spin(i){this.animation=i?"spin":void 0}set pulse(i){this.animation=i?"spin-pulse":void 0}constructor(i,r,n,s,t){this.sanitizer=i,this.config=r,this.iconLibrary=n,this.stackItem=s,this.classes=[],t!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(i){if(this.icon==null&&this.config.fallbackIcon==null){E0();return}if(i){let r=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(r);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(i){let r=O0(i,this.config.defaultPrefix);if("icon"in r)return r;let n=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return n??(T0(r),null)}buildParams(){let i={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?j4.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...B0(i),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(i,r){let n=Z4(i,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(g(I3),g(I0),g(q0),g(U0,8),g(G0,8))},c.\u0275cmp=x({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,n){r&2&&(P3("innerHTML",n.renderedIconHTML,k3),D1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[f1,N],decls:0,vars:0,template:function(r,n){},encapsulation:2});let a=c;return a})();var V2=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=A1({type:c}),c.\u0275inj=S1({});let a=c;return a})();var Y4={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};var W0={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},X4=W0;var K4={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var Q4={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var j0={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},J4=j0;var Z0={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]},c6=Z0;var a6=(()=>{let c=class c{constructor(){this.faWhatsapp=Y4,this.faEnvelope=Q4,this.faPhone=K4,this.faMapMarkerAlt=J4}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=x({type:c,selectors:[["app-footer"]],standalone:!0,features:[N],decls:22,vars:3,consts:[[1,"container"],[1,"row","contact"],[1,"col-12","col-md-6","col-lg-8"],["alt","logo","src","assets/logo-alt-white.svg","height","60px","width","233px"],[1,"col-12","col-md-6","col-lg-4",2,"gap","0.5rem"],[1,"item"],[3,"icon"],[1,"info"],["href","tel:541131601069"],["href","mailto:info@ztclima.com.ar"],[1,"row",2,"color","white"]],template:function(r,n){r&1&&(l(0,"footer",0)(1,"div",1)(2,"div",2),M(3,"img",3),f(),l(4,"div",4)(5,"div",5),M(6,"fa-icon",6),l(7,"div",7)(8,"a",8),u(9,"11 3160 1069"),f()()(),l(10,"div",5),M(11,"fa-icon",6),l(12,"a",9),u(13,"info@ztclima.com.ar"),f()(),l(14,"div",5),M(15,"fa-icon",6),l(16,"p"),u(17,"Gdor. Marcelino Ugarte 3033, Olivos, Bs. As."),f()()()(),M(18,"hr"),l(19,"div",10)(20,"p"),u(21,"Copyright \xA9 2024 ZT Clima. Todos los derechos reservados."),f()()()),r&2&&(d(6),H("icon",n.faPhone),d(5),H("icon",n.faEnvelope),d(4),H("icon",n.faMapMarkerAlt))},dependencies:[V2,H2],styles:["[_nghost-%COMP%]{background-color:#0e4655;padding:1rem}p[_ngcontent-%COMP%]{font-size:14px}hr[_ngcontent-%COMP%]{margin:1rem 0;border:1px solid white}.contact[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.contact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:1rem}.contact[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.contact[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]});let a=c;return a})();var $0="https://api.whatsapp.com/send/?type=phone_number&app_absent=0",Y0="541131601069",X0="Hola ZT Clima, necesito asesoramiento.",e6=(()=>{let c=class c{constructor(){this.title="zt-clima-web-app",this.whatsappUrl=$0+`&phone=${Y0}&text=${X0}`}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=x({type:c,selectors:[["app-root"]],standalone:!0,features:[N],decls:7,vars:1,consts:[[1,"scroll"],[1,"content"],["target","_blank","rel","noopener noreferrer",1,"floating",3,"href"],["src","assets/images/whatsapp.png","alt","whatsapp","width","80px","height","80px"]],template:function(r,n){r&1&&(M(0,"app-header"),l(1,"div",0)(2,"main",1),M(3,"router-outlet"),f(),M(4,"app-footer"),f(),l(5,"a",2),M(6,"img",3),f()),r&2&&(d(5),H("href",n.whatsappUrl,m1))},dependencies:[G3,j3,a6],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.scroll[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow-y:auto}.scroll[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{background-color:#f1f1f1;flex-grow:1}.floating[_ngcontent-%COMP%]{position:fixed;bottom:1rem;right:1rem}"]});let a=c;return a})();function K0(a,c){if(a&1&&M(0,"img",6),a&2){let e=c.$implicit;H("src",e,m1)}}var M2=(()=>{let c=class c{constructor(){this.faChevronLeft=c6,this.faChevronRight=X4,this.currentIndex=0}prev(){this.currentIndex=((this.currentIndex-1)%this.galleryImages.length+this.galleryImages.length)%this.galleryImages.length}next(){this.currentIndex=(this.currentIndex+1)%this.galleryImages.length}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=x({type:c,selectors:[["app-gallery"]],inputs:{galleryImages:"galleryImages"},standalone:!0,features:[N],decls:7,vars:4,consts:[["alt","cover",3,"src"],[1,"arrow-control","left",3,"click"],[3,"icon"],[1,"arrow-control","right",3,"click"],[2,"display","none"],["alt","preload",3,"src",4,"ngFor","ngForOf"],["alt","preload",3,"src"]],template:function(r,n){r&1&&(M(0,"img",0),l(1,"button",1),$("click",function(){return n.prev()}),M(2,"fa-icon",2),f(),l(3,"button",3),$("click",function(){return n.next()}),M(4,"fa-icon",2),f(),l(5,"div",4),P(6,K0,1,1,"img",5),f()),r&2&&(H("src",n.galleryImages[n.currentIndex],m1),d(2),H("icon",n.faChevronLeft),d(2),H("icon",n.faChevronRight),d(2),H("ngForOf",n.galleryImages))},dependencies:[V2,H2,J1],styles:["[_nghost-%COMP%]{background-color:gray;width:100%;aspect-ratio:1320/680;position:relative}img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.arrow-control[_ngcontent-%COMP%]{background:none;padding:none;border:none;-webkit-user-select:none;user-select:none;cursor:pointer;position:absolute;top:50%;font-size:32px;transform:translateY(-50%);color:#fff}.arrow-control[_ngcontent-%COMP%]:hover{color:#f3f3f3}.arrow-control.left[_ngcontent-%COMP%]{left:1rem}.arrow-control.right[_ngcontent-%COMP%]{right:1rem}@media (min-width: 768px){.arrow-control[_ngcontent-%COMP%]{font-size:50px}}"]});let a=c;return a})();var i6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=x({type:c,selectors:[["app-services"]],standalone:!0,features:[N],decls:17,vars:0,consts:[["id","servicios",1,"title","text-center"],[1,"services"],[1,"card"],["src","assets/images/radiator.jpg","alt","","height","100%","width","100%"],[1,"title"],[1,"description"],["src","assets/images/accessories.jpg","alt","","height","100%","width","100%"]],template:function(r,n){r&1&&(l(0,"h2",0),u(1,"Servicios"),f(),l(2,"div",1)(3,"div",2),M(4,"img",3),l(5,"span",4),u(6,"Calefacci\xF3n"),f(),l(7,"div",5)(8,"span"),u(9," Nuestra amplia experiencia en el rubro nos permite ofrecer sistemas eficientes y confortables, mediante calefacci\xF3n por radiadores o piso radiante por agua, con la posibilidad de realizar las sectorizaciones deseadas. "),f()()(),l(10,"div",2),M(11,"img",6),l(12,"span",4),u(13,"Agua caliente"),f(),l(14,"div",5)(15,"span"),u(16," En b\xFAsqueda de optimizar el consumo de energ\xEDa ofrecemos distintas alternativas con acumuladores de agua caliente sanitaria sin consumo de gas propio, aprovechando siempre el uso de la caldera. "),f()()()())},styles:[".services[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:2rem;gap:3rem;flex-wrap:wrap}.services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:20rem;border-radius:8px;overflow:hidden;background-color:#fff}.services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover;max-height:20rem;margin-bottom:1rem}.services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:0 1rem;margin-bottom:1rem;text-transform:uppercase;font-weight:700;font-size:24px;text-align:center}.services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{padding:0 1rem;margin-bottom:1rem;font-size:18px;width:100%;color:#000}"]});let a=c;return a})();var r6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=x({type:c,selectors:[["app-about"]],standalone:!0,features:[N],decls:4,vars:0,consts:[["id","nosotros",1,"title","text-center"],[1,"description"]],template:function(r,n){r&1&&(l(0,"h2",0),u(1,"\xBFQui\xE9nes somos?"),f(),l(2,"p",1),u(3,` En ZT Clima, nos especializamos en proporcionar soluciones integrales en calefacci\xF3n y agua caliente sanitaria para uso residencial, comercial e industrial. Nuestro equipo est\xE1 conformado por profesionales con una vasta experiencia en el dise\xF1o de proyectos, instalaci\xF3n de equipamiento y mantenimiento de sistemas de climatizaci\xF3n. Nuestra mayor satisfacci\xF3n y compromiso es brindar un servicio personalizado y orientado al cliente, trabajando estrechamente con cada uno de ellos para entender sus necesidades y proporcionar soluciones \xF3ptimas, a medida y de alta calidad.
`),f())},dependencies:[d1],styles:["[_nghost-%COMP%]{display:block}.description[_ngcontent-%COMP%]{font-size:20px}"],changeDetection:0});let a=c;return a})();function Q0(a,c){if(a&1&&(l(0,"div",3)(1,"div",4)(2,"div",5),M(3,"img",6),f(),l(4,"div",7)(5,"h1"),u(6),f(),l(7,"p"),u(8),f()()()()),a&2){let e=c.$implicit;d(3),H("src",e.src,m1),d(3),q2(e.title),d(2),q2(e.description)}}var n6=(()=>{let c=class c{constructor(){this.images=[{src:"assets/images/products/AristonLogo.png",title:"Ariston",description:"Ariston, es una marca italiana con m\xE1s de 90 a\xF1os de experiencia en el mercado global, ofrece productos innovadores y eficientes para calefacci\xF3n y agua caliente, destacando por su calidad duradera, sostenibilidad y facilidad de uso."},{src:"assets/images/products/Baxi Logo.png",title:"Baxi",description:"Baxi, con m\xE1s de 150 a\xF1os de historia, proporciona productos de calefacci\xF3n y agua caliente conocidos por su fiabilidad y durabilidad. La marca combina una larga tradici\xF3n con tecnolog\xEDas modernas para asegurar el confort y el ahorro energ\xE9tico. "},{src:"assets/images/products/Ferroli Logo.png",title:"Ferroli",description:"Ferroli, con m\xE1s de 65 a\xF1os en Italia, se especializa en productos para calefacci\xF3n, los cuales son valorados por su robustez y capacidad para proporcionar un rendimiento constante, adapt\xE1ndose a las necesidades de los usuarios. "},{src:"assets/images/products/Giacomini Logo.png",title:"Giacomini",description:"Giacomini, es una empresa italiana con m\xE1s de 60 a\xF1os en el mercado, especializ\xE1ndose en la fabricaci\xF3n de ca\xF1os y accesorios para calefacci\xF3n, destacando por su precisi\xF3n, eficiencia y durabilidad."},{src:"assets/images/products/Peisa Logo.png",title:"Peisa",description:"Peisa, con m\xE1s de 40 a\xF1os de trayectoria en Argentina, es conocida por sus productos de climatizaci\xF3n que combinan dise\xF1o avanzado y rendimiento fiable."},{src:"assets/images/products/Rehau Logo.png",title:"Rehau",description:"Rehau, de origen alem\xE1n y con m\xE1s de 70 a\xF1os en el mercado, es l\xEDder en productos de climatizaci\xF3n y fontaner\xEDa. Sus productos son conocidos por ofrecer altos est\xE1ndares de calidad y sostenibilidad."}]}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=x({type:c,selectors:[["app-products"]],standalone:!0,features:[N],decls:4,vars:1,consts:[["id","marcas",1,"title","text-center"],[1,"products"],["class","flip-card",4,"ngFor","ngForOf"],[1,"flip-card"],[1,"flip-card-inner"],[1,"flip-card-front"],["alt","","height","100%","width","100%",3,"src"],[1,"flip-card-back"]],template:function(r,n){r&1&&(l(0,"h2",0),u(1,"Marcas"),f(),l(2,"div",1),P(3,Q0,9,3,"div",2),f()),r&2&&(d(3),H("ngForOf",n.images))},dependencies:[J1],styles:[".products[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:20px;gap:3rem}.products[_ngcontent-%COMP%]   .flip-card[_ngcontent-%COMP%]{perspective:1000px;position:relative;background-color:#fff;aspect-ratio:1;width:100%;max-width:20rem;border-radius:8px;padding:1rem}.products[_ngcontent-%COMP%]   .flip-card[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;text-align:center;transition:transform .8s;transform-style:preserve-3d}.products[_ngcontent-%COMP%]   .flip-card[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%]:hover{transform:rotateY(180deg)}.products[_ngcontent-%COMP%]   .flip-card[_ngcontent-%COMP%]   .flip-card-front[_ngcontent-%COMP%], .products[_ngcontent-%COMP%]   .flip-card[_ngcontent-%COMP%]   .flip-card-back[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;backface-visibility:hidden}.products[_ngcontent-%COMP%]   .flip-card[_ngcontent-%COMP%]   .flip-card-front[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.products[_ngcontent-%COMP%]   .flip-card[_ngcontent-%COMP%]   .flip-card-back[_ngcontent-%COMP%]{background-color:#fff;transform:rotateY(180deg)}"]});let a=c;return a})();var s6=(()=>{let c=class c{constructor(){this.obrasRealizadasGallery=["assets/images/obras/obras1.jpg","assets/images/obras/obras2.jpg","assets/images/obras/obras3.jpg","assets/images/obras/obras4.jpg","assets/images/obras/obras5.jpg","assets/images/obras/obras6.jpg","assets/images/obras/obras7.jpg"]}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=x({type:c,selectors:[["app-trabajos-realizados"]],standalone:!0,features:[N],decls:4,vars:1,consts:[["id","como-trabajamos",1,"title","text-center"],[1,"gallery"],[3,"galleryImages"]],template:function(r,n){r&1&&(l(0,"h2",0),u(1,"C\xF3mo trabajamos"),f(),l(2,"div",1),M(3,"app-gallery",2),f()),r&2&&(d(3),H("galleryImages",n.obrasRealizadasGallery))},dependencies:[d1,M2],styles:["[_nghost-%COMP%]{display:block}.gallery[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}@media (min-width: 768px){.gallery[_ngcontent-%COMP%]{margin-bottom:3rem}}"],changeDetection:0});let a=c;return a})();var p6=(()=>{let c=class c{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};c.\u0275fac=function(r){return new(r||c)(g(P1),g(k1))},c.\u0275dir=I({type:c});let a=c;return a})(),J0=(()=>{let c=class c extends p6{};c.\u0275fac=(()=>{let i;return function(n){return(i||(i=O2(c)))(n||c)}})(),c.\u0275dir=I({type:c,features:[c1]});let a=c;return a})(),u6=new l1("");var c5={provide:u6,useExisting:X1(()=>w2),multi:!0};function a5(){let a=U2()?U2().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var e5=new l1(""),w2=(()=>{let c=class c extends p6{constructor(i,r,n){super(i,r),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!a5())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};c.\u0275fac=function(r){return new(r||c)(g(P1),g(k1),g(e5,8))},c.\u0275dir=I({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,n){r&1&&$("input",function(t){return n._handleInput(t.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(t){return n._compositionEnd(t.target.value)})},features:[Q1([c5]),c1]});let a=c;return a})();function n1(a){return a==null||(typeof a=="string"||Array.isArray(a))&&a.length===0}function d6(a){return a!=null&&typeof a.length=="number"}var H6=new l1(""),V6=new l1(""),i5=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,F=class{static min(c){return r5(c)}static max(c){return n5(c)}static required(c){return s5(c)}static requiredTrue(c){return t5(c)}static email(c){return o5(c)}static minLength(c){return l5(c)}static maxLength(c){return f5(c)}static pattern(c){return m5(c)}static nullValidator(c){return M6(c)}static compose(c){return N6(c)}static composeAsync(c){return S6(c)}};function r5(a){return c=>{if(n1(c.value)||n1(a))return null;let e=parseFloat(c.value);return!isNaN(e)&&e<a?{min:{min:a,actual:c.value}}:null}}function n5(a){return c=>{if(n1(c.value)||n1(a))return null;let e=parseFloat(c.value);return!isNaN(e)&&e>a?{max:{max:a,actual:c.value}}:null}}function s5(a){return n1(a.value)?{required:!0}:null}function t5(a){return a.value===!0?null:{required:!0}}function o5(a){return n1(a.value)||i5.test(a.value)?null:{email:!0}}function l5(a){return c=>n1(c.value)||!d6(c.value)?null:c.value.length<a?{minlength:{requiredLength:a,actualLength:c.value.length}}:null}function f5(a){return c=>d6(c.value)&&c.value.length>a?{maxlength:{requiredLength:a,actualLength:c.value.length}}:null}function m5(a){if(!a)return M6;let c,e;return typeof a=="string"?(e="",a.charAt(0)!=="^"&&(e+="^"),e+=a,a.charAt(a.length-1)!=="$"&&(e+="$"),c=new RegExp(e)):(e=a.toString(),c=a),i=>{if(n1(i.value))return null;let r=i.value;return c.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function M6(a){return null}function C6(a){return a!=null}function g6(a){return F3(a)?S3(a):a}function L6(a){let c={};return a.forEach(e=>{c=e!=null?w(w({},c),e):c}),Object.keys(c).length===0?null:c}function b6(a,c){return c.map(e=>e(a))}function h5(a){return!a.validate}function x6(a){return a.map(c=>h5(c)?c:e=>c.validate(e))}function N6(a){if(!a)return null;let c=a.filter(C6);return c.length==0?null:function(e){return L6(b6(e,c))}}function y6(a){return a!=null?N6(x6(a)):null}function S6(a){if(!a)return null;let c=a.filter(C6);return c.length==0?null:function(e){let i=b6(e,c).map(g6);return A3(i).pipe(w3(L6))}}function w6(a){return a!=null?S6(x6(a)):null}function t6(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function A6(a){return a._rawValidators}function k6(a){return a._rawAsyncValidators}function H3(a){return a?Array.isArray(a)?a:[a]:[]}function L2(a,c){return Array.isArray(a)?a.includes(c):a===c}function o6(a,c){let e=H3(c);return H3(a).forEach(r=>{L2(e,r)||e.push(r)}),e}function l6(a,c){return H3(c).filter(e=>!L2(a,e))}var b2=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=y6(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=w6(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,e){return this.control?this.control.hasError(c,e):!1}getError(c,e){return this.control?this.control.getError(c,e):null}},b1=class extends b2{get formDirective(){return null}get path(){return null}},$1=class extends b2{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},x2=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},v5={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},s9=o1(w({},v5),{"[class.ng-submitted]":"isSubmitted"}),P6=(()=>{let c=class c extends x2{constructor(i){super(i)}};c.\u0275fac=function(r){return new(r||c)(g($1,2))},c.\u0275dir=I({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,n){r&2&&K1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[c1]});let a=c;return a})(),F6=(()=>{let c=class c extends x2{constructor(i){super(i)}};c.\u0275fac=function(r){return new(r||c)(g(b1,10))},c.\u0275dir=I({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,n){r&2&&K1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[c1]});let a=c;return a})();var j1="VALID",C2="INVALID",L1="PENDING",Z1="DISABLED";function C3(a){return(A2(a)?a.validators:a)||null}function z5(a){return Array.isArray(a)?y6(a):a||null}function g3(a,c){return(A2(c)?c.asyncValidators:a)||null}function p5(a){return Array.isArray(a)?w6(a):a||null}function A2(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function D6(a,c,e){let i=a.controls;if(!(c?Object.keys(i):i).length)throw new Y1(1e3,"");if(!i[e])throw new Y1(1001,"")}function _6(a,c,e){a._forEachChild((i,r)=>{if(e[r]===void 0)throw new Y1(1002,"")})}var x1=class{constructor(c,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===j1}get invalid(){return this.status===C2}get pending(){return this.status==L1}get disabled(){return this.status===Z1}get enabled(){return this.status!==Z1}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(o6(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(o6(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(l6(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(l6(c,this._rawAsyncValidators))}hasValidator(c){return L2(this._rawValidators,c)}hasAsyncValidator(c){return L2(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=L1,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let e=this._parentMarkedDirty(c.onlySelf);this.status=Z1,this.errors=null,this._forEachChild(i=>{i.disable(o1(w({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(o1(w({},c),{skipPristineCheck:e})),this._onDisabledChange.forEach(i=>i(!0))}enable(c={}){let e=this._parentMarkedDirty(c.onlySelf);this.status=j1,this._forEachChild(i=>{i.enable(o1(w({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(o1(w({},c),{skipPristineCheck:e})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===j1||this.status===L1)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Z1:j1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=L1,this._hasOwnPendingAsyncValidator=!0;let e=g6(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,e={}){this.errors=c,this._updateControlsErrors(e.emitEvent!==!1)}get(c){let e=c;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(c,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[c]:null}hasError(c,e){return!!this.getError(c,e)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new F1,this.statusChanges=new F1}_calculateStatus(){return this._allControlsDisabled()?Z1:this.errors?C2:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(L1)?L1:this._anyControlsHaveStatus(C2)?C2:j1}_anyControlsHaveStatus(c){return this._anyControls(e=>e.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){A2(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let e=this._parent&&this._parent.dirty;return!c&&!!e&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=z5(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=p5(this._rawAsyncValidators)}},N2=class extends x1{constructor(c,e,i){super(C3(e),g3(i,e)),this.controls=c,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,e){return this.controls[c]?this.controls[c]:(this.controls[c]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(c,e,i={}){this.registerControl(c,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(c,e={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(c,e,i={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],e&&this.registerControl(c,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,e={}){_6(this,!0,c),Object.keys(c).forEach(i=>{D6(this,!0,i),this.controls[i].setValue(c[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(c,e={}){c!=null&&(Object.keys(c).forEach(i=>{let r=this.controls[i];r&&r.patchValue(c[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(c={},e={}){this._forEachChild((i,r)=>{i.reset(c?c[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(c,e,i)=>(c[i]=e.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&c(i,e)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&c(i))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(c,e){let i=c;return this._forEachChild((r,n)=>{i=e(i,r,n)}),i}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var V3=class extends N2{};var T6=new l1("CallSetDisabledState",{providedIn:"root",factory:()=>L3}),L3="always";function u5(a,c){return[...c.path,a]}function f6(a,c,e=L3){b3(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||e==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),H5(a,c),M5(a,c),V5(a,c),d5(a,c)}function m6(a,c,e=!0){let i=()=>{};c.valueAccessor&&(c.valueAccessor.registerOnChange(i),c.valueAccessor.registerOnTouched(i)),S2(a,c),a&&(c._invokeOnDestroyCallbacks(),a._registerOnCollectionChange(()=>{}))}function y2(a,c){a.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(c)})}function d5(a,c){if(c.valueAccessor.setDisabledState){let e=i=>{c.valueAccessor.setDisabledState(i)};a.registerOnDisabledChange(e),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(e)})}}function b3(a,c){let e=A6(a);c.validator!==null?a.setValidators(t6(e,c.validator)):typeof e=="function"&&a.setValidators([e]);let i=k6(a);c.asyncValidator!==null?a.setAsyncValidators(t6(i,c.asyncValidator)):typeof i=="function"&&a.setAsyncValidators([i]);let r=()=>a.updateValueAndValidity();y2(c._rawValidators,r),y2(c._rawAsyncValidators,r)}function S2(a,c){let e=!1;if(a!==null){if(c.validator!==null){let r=A6(a);if(Array.isArray(r)&&r.length>0){let n=r.filter(s=>s!==c.validator);n.length!==r.length&&(e=!0,a.setValidators(n))}}if(c.asyncValidator!==null){let r=k6(a);if(Array.isArray(r)&&r.length>0){let n=r.filter(s=>s!==c.asyncValidator);n.length!==r.length&&(e=!0,a.setAsyncValidators(n))}}}let i=()=>{};return y2(c._rawValidators,i),y2(c._rawAsyncValidators,i),e}function H5(a,c){c.valueAccessor.registerOnChange(e=>{a._pendingValue=e,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&E6(a,c)})}function V5(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&E6(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function E6(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function M5(a,c){let e=(i,r)=>{c.valueAccessor.writeValue(i),r&&c.viewToModelUpdate(i)};a.registerOnChange(e),c._registerOnDestroy(()=>{a._unregisterOnChange(e)})}function C5(a,c){a==null,b3(a,c)}function g5(a,c){return S2(a,c)}function L5(a,c){if(!a.hasOwnProperty("model"))return!1;let e=a.model;return e.isFirstChange()?!0:!Object.is(c,e.currentValue)}function b5(a){return Object.getPrototypeOf(a.constructor)===J0}function x5(a,c){a._syncPendingControls(),c.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function N5(a,c){if(!c)return null;Array.isArray(c);let e,i,r;return c.forEach(n=>{n.constructor===w2?e=n:b5(n)?i=n:r=n}),r||i||e||null}function y5(a,c){let e=a.indexOf(c);e>-1&&a.splice(e,1)}function h6(a,c){let e=a.indexOf(c);e>-1&&a.splice(e,1)}function v6(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var g2=class extends x1{constructor(c=null,e,i){super(C3(e),g3(i,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),A2(e)&&(e.nonNullable||e.initialValueIsDefault)&&(v6(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,e={}){this.value=this._pendingValue=c,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(c,e={}){this.setValue(c,e)}reset(c=this.defaultValue,e={}){this._applyFormState(c),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){h6(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){h6(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){v6(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var S5=a=>a instanceof g2;var B6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=I({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let a=c;return a})();var R6=new l1("");var w5={provide:b1,useExisting:X1(()=>x3)},x3=(()=>{let c=class c extends b1{constructor(i,r,n){super(),this.callSetDisabledState=n,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new F1,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(S2(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return f6(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){m6(i.control||null,i,!1),y5(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,x5(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,n=this.form.get(i.path);r!==n&&(m6(r||null,i),S5(n)&&(f6(n,i,this.callSetDisabledState),i.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);C5(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&g5(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){b3(this.form,this),this._oldForm&&S2(this._oldForm,this)}_checkFormPresent(){this.form}};c.\u0275fac=function(r){return new(r||c)(g(H6,10),g(V6,10),g(T6,8))},c.\u0275dir=I({type:c,selectors:[["","formGroup",""]],hostBindings:function(r,n){r&1&&$("submit",function(t){return n.onSubmit(t)})("reset",function(){return n.onReset()})},inputs:{form:[w1.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[Q1([w5]),c1,f1]});let a=c;return a})();var A5={provide:$1,useExisting:X1(()=>N3)},N3=(()=>{let c=class c extends $1{set isDisabled(i){}constructor(i,r,n,s,t){super(),this._ngModelWarningConfig=t,this._added=!1,this.name=null,this.update=new F1,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(n),this.valueAccessor=N5(this,s)}ngOnChanges(i){this._added||this._setUpControl(),L5(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return u5(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};c._ngModelWarningSentOnce=!1,c.\u0275fac=function(r){return new(r||c)(g(b1,13),g(H6,10),g(V6,10),g(u6,10),g(R6,8))},c.\u0275dir=I({type:c,selectors:[["","formControlName",""]],inputs:{name:[w1.None,"formControlName","name"],isDisabled:[w1.None,"disabled","isDisabled"],model:[w1.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[Q1([A5]),c1,f1]});let a=c;return a})();var k5=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=A1({type:c}),c.\u0275inj=S1({});let a=c;return a})(),M3=class extends x1{constructor(c,e,i){super(C3(e),g3(i,e)),this.controls=c,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(c){return this.controls[this._adjustIndex(c)]}push(c,e={}){this.controls.push(c),this._registerControl(c),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(c,e,i={}){this.controls.splice(c,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(c,e={}){let i=this._adjustIndex(c);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(c,e,i={}){let r=this._adjustIndex(c);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(c,e={}){_6(this,!1,c),c.forEach((i,r)=>{D6(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(c,e={}){c!=null&&(c.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(c=[],e={}){this._forEachChild((i,r)=>{i.reset(c[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(c=>c.getRawValue())}clear(c={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:c.emitEvent}))}_adjustIndex(c){return c<0?c+this.length:c}_syncPendingControls(){let c=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){this.controls.forEach((e,i)=>{c(e,i)})}_updateValue(){this.value=this.controls.filter(c=>c.enabled||this.disabled).map(c=>c.value)}_anyControls(c){return this.controls.some(e=>e.enabled&&c(e))}_setUpControls(){this._forEachChild(c=>this._registerControl(c))}_allControlsDisabled(){for(let c of this.controls)if(c.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(c){c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)}_find(c){return this.at(c)??null}};function z6(a){return!!a&&(a.asyncValidators!==void 0||a.validators!==void 0||a.updateOn!==void 0)}var O6=(()=>{let c=class c{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new c;return i.useNonNullable=!0,i}group(i,r=null){let n=this._reduceControls(i),s={};return z6(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new N2(n,s)}record(i,r=null){let n=this._reduceControls(i);return new V3(n,r)}control(i,r,n){let s={};return this.useNonNullable?(z6(r)?s=r:(s.validators=r,s.asyncValidators=n),new g2(i,o1(w({},s),{nonNullable:!0}))):new g2(i,r,n)}array(i,r,n){let s=i.map(t=>this._createControl(t));return new M3(s,r,n)}_reduceControls(i){let r={};return Object.keys(i).forEach(n=>{r[n]=this._createControl(i[n])}),r}_createControl(i){if(i instanceof g2)return i;if(i instanceof x1)return i;if(Array.isArray(i)){let r=i[0],n=i.length>1?i[1]:null,s=i.length>2?i[2]:null;return this.control(r,n,s)}else return this.control(i)}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=y1({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();var I6=(()=>{let c=class c{static withConfig(i){return{ngModule:c,providers:[{provide:R6,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:T6,useValue:i.callSetDisabledState??L3}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=A1({type:c}),c.\u0275inj=S1({imports:[k5]});let a=c;return a})();var R=class{constructor(c=0,e="Network Error"){this.status=c,this.text=e}};var q6=()=>{if(!(typeof localStorage>"u"))return{get:a=>Promise.resolve(localStorage.getItem(a)),set:(a,c)=>Promise.resolve(localStorage.setItem(a,c)),remove:a=>Promise.resolve(localStorage.removeItem(a))}};var S={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:q6()};var N1=a=>a?typeof a=="string"?{publicKey:a}:a.toString()==="[object Object]"?a:{}:{};var U6=(a,c="https://api.emailjs.com")=>{if(!a)return;let e=N1(a);S.publicKey=e.publicKey,S.blockHeadless=e.blockHeadless,S.storageProvider=e.storageProvider,S.blockList=e.blockList,S.limitRate=e.limitRate,S.origin=e.origin||c};var k2=(i,r,...n)=>Z(void 0,[i,r,...n],function*(a,c,e={}){let s=yield fetch(S.origin+a,{method:"POST",headers:e,body:c}),t=yield s.text(),o=new R(s.status,t);if(s.ok)return o;throw o});var P2=(a,c,e)=>{if(!a||typeof a!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!c||typeof c!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!e||typeof e!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"};var G6=a=>{if(a&&a.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"};var F2=a=>a.webdriver||!a.languages||a.languages.length===0;var D2=()=>new R(451,"Unavailable For Headless Browser");var W6=(a,c)=>{if(!Array.isArray(a))throw"The BlockList list has to be an array";if(typeof c!="string")throw"The BlockList watchVariable has to be a string"};var F5=a=>!a.list?.length||!a.watchVariable,D5=(a,c)=>a instanceof FormData?a.get(c):a[c],_2=(a,c)=>{if(F5(a))return!1;W6(a.list,a.watchVariable);let e=D5(c,a.watchVariable);return typeof e!="string"?!1:a.list.includes(e)};var T2=()=>new R(403,"Forbidden");var j6=(a,c)=>{if(typeof a!="number"||a<0)throw"The LimitRate throttle has to be a positive number";if(c&&typeof c!="string")throw"The LimitRate ID has to be a non-empty string"};var _5=(a,c,e)=>Z(void 0,null,function*(){let i=Number((yield e.get(a))||0);return c-Date.now()+i}),E2=(a,c,e)=>Z(void 0,null,function*(){if(!c.throttle||!e)return!1;j6(c.throttle,c.id);let i=c.id||a;return(yield _5(i,c.throttle,e))>0?!0:(yield e.set(i,Date.now().toString()),!1)});var B2=()=>new R(429,"Too Many Requests");var Z6=(a,c,e,i)=>Z(void 0,null,function*(){let r=N1(i),n=r.publicKey||S.publicKey,s=r.blockHeadless||S.blockHeadless,t=r.storageProvider||S.storageProvider,o=w(w({},S.blockList),r.blockList),h=w(w({},S.limitRate),r.limitRate);return s&&F2(navigator)?Promise.reject(D2()):(P2(n,a,c),G6(e),e&&_2(o,e)?Promise.reject(T2()):(yield E2(location.pathname,h,t))?Promise.reject(B2()):k2("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:n,service_id:a,template_id:c,template_params:e}),{"Content-type":"application/json"}))});var $6=a=>{if(!a||a.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"};var T5=a=>typeof a=="string"?document.querySelector(a):a,Y6=(a,c,e,i)=>Z(void 0,null,function*(){let r=N1(i),n=r.publicKey||S.publicKey,s=r.blockHeadless||S.blockHeadless,t=S.storageProvider||r.storageProvider,o=w(w({},S.blockList),r.blockList),h=w(w({},S.limitRate),r.limitRate);if(s&&F2(navigator))return Promise.reject(D2());let m=T5(e);P2(n,a,c),$6(m);let z=new FormData(m);return _2(o,z)?Promise.reject(T2()):(yield E2(location.pathname,h,t))?Promise.reject(B2()):(z.append("lib_version","4.4.1"),z.append("service_id",a),z.append("template_id",c),z.append("user_id",n),k2("/api/v1.0/email/send-form",z))});var y3={init:U6,send:Z6,sendForm:Y6,EmailJSResponseStatus:R};function E5(a,c){a&1&&(l(0,"small"),u(1,"El nombre y apellido es obligatorio."),f())}function B5(a,c){a&1&&(l(0,"small"),u(1,"El nombre debe tener al menos 3 caracteres."),f())}function R5(a,c){a&1&&(l(0,"small"),u(1,"El nombre debe tener m\xE1ximo 500 caracteres."),f())}function O5(a,c){if(a&1&&(l(0,"div",22),P(1,E5,2,0,"small",19)(2,B5,2,0,"small",19)(3,R5,2,0,"small",19),f()),a&2){let e=u1();d(),H("ngIf",e.name==null||e.name.errors==null?null:e.name.errors.required),d(),H("ngIf",e.name==null||e.name.errors==null?null:e.name.errors.minlength),d(),H("ngIf",e.name==null||e.name.errors==null?null:e.name.errors.maxlength)}}function I5(a,c){a&1&&(l(0,"small"),u(1,"El email es obligatorio."),f())}function q5(a,c){a&1&&(l(0,"small"),u(1,"El formato del email no es v\xE1lido."),f())}function U5(a,c){if(a&1&&(l(0,"div",22),P(1,I5,2,0,"small",19)(2,q5,2,0,"small",19),f()),a&2){let e=u1();d(),H("ngIf",e.email==null||e.email.errors==null?null:e.email.errors.required),d(),H("ngIf",e.email==null||e.email.errors==null?null:e.email.errors.email)}}function G5(a,c){a&1&&(l(0,"small"),u(1,"El c\xF3digo de \xE1rea es obligatorio."),f())}function W5(a,c){a&1&&(l(0,"small"),u(1,"El c\xF3digo de \xE1rea no es v\xE1lido."),f())}function j5(a,c){if(a&1&&(l(0,"div",22),P(1,G5,2,0,"small",19)(2,W5,2,0,"small",19),f()),a&2){let e=u1();d(),H("ngIf",e.areaCode==null||e.areaCode.errors==null?null:e.areaCode.errors.required),d(),H("ngIf",e.areaCode==null||e.areaCode.errors==null?null:e.areaCode.errors.pattern)}}function Z5(a,c){a&1&&(l(0,"small"),u(1,"El n\xFAmero de tel\xE9fono es obligatorio."),f())}function $5(a,c){a&1&&(l(0,"small"),u(1,"El n\xFAmero de tel\xE9fono no es v\xE1lido."),f())}function Y5(a,c){a&1&&(l(0,"small"),u(1,"El n\xFAmero de tel\xE9fono debe ser menor a diez digitos."),f())}function X5(a,c){if(a&1&&(l(0,"div",22),P(1,Z5,2,0,"small",19)(2,$5,2,0,"small",19)(3,Y5,2,0,"small",19),f()),a&2){let e=u1();d(),H("ngIf",e.phone==null||e.phone.errors==null?null:e.phone.errors.required),d(),H("ngIf",e.phone==null||e.phone.errors==null?null:e.phone.errors.pattern),d(),H("ngIf",e.phone==null||e.phone.errors==null?null:e.phone.errors.maxlength)}}function K5(a,c){a&1&&(l(0,"small"),u(1,"El mensaje es obligatorio."),f())}function Q5(a,c){a&1&&(l(0,"small"),u(1,"El mensaje debe tener al menos 10 caracteres."),f())}function J5(a,c){if(a&1&&(l(0,"div",22),P(1,K5,2,0,"small",19)(2,Q5,2,0,"small",19),f()),a&2){let e=u1();d(),H("ngIf",e.message==null||e.message.errors==null?null:e.message.errors.required),d(),H("ngIf",e.message==null||e.message.errors==null?null:e.message.errors.minlength)}}function c7(a,c){a&1&&(l(0,"span"),u(1,"Enviar Mensaje"),f())}function a7(a,c){a&1&&(l(0,"span"),u(1,"Enviando..."),f())}var e7=a=>({loading:a}),X6=(()=>{let c=class c{constructor(i,r){this.fb=i,this.cdr=r,this.isLoading=!1,this.isDialogOpen=!1,this.contactForm=this.fb.group({name:["",[F.required,F.minLength(3),F.maxLength(500)]],email:["",[F.required,F.email]],areaCode:["",[F.required,F.pattern(/^\d{1,4}$/)]],phone:["",[F.required,F.pattern(/^[\d\s]+$/),F.maxLength(10)]],message:["",[F.required,F.minLength(10),F.maxLength(1e3)]]}),y3.init({publicKey:"6MCw1hLeM0g5EdMnV"})}onSubmit(){if(this.contactForm.valid){this.isLoading=!0;let i=this.contactForm.value,r={name:i.name,email:i.email,phone:i.phone,message:i.message};y3.send("service_xmv6zfe","template_r6h2za9",r).then(n=>{console.log("SUCCESS!",n.status,n.text),this.contactForm.reset(),this.isLoading=!1,this.isDialogOpen=!0,this.cdr.detectChanges()},n=>{this.isLoading=!1,console.error("FAILED...",n),alert("Ocurri\xF3 un error al enviar el mensaje.")})}else console.log("Form not valid")}closeDialog(){this.isDialogOpen=!1,this.cdr.detectChanges()}get name(){return this.contactForm.get("name")}get email(){return this.contactForm.get("email")}get areaCode(){return this.contactForm.get("areaCode")}get phone(){return this.contactForm.get("phone")}get message(){return this.contactForm.get("message")}};c.\u0275fac=function(r){return new(r||c)(g(O6),g(I2))},c.\u0275cmp=x({type:c,selectors:[["app-contact-form"]],standalone:!0,features:[N],decls:40,vars:13,consts:[["id","contactanos",1,"title","text-center"],[1,"contact-container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["id","name","formControlName","name","placeholder","Tu nombre y apellido"],["class","error-message",4,"ngIf"],["for","email"],["id","email","formControlName","email","placeholder","ejemplo@email.com"],[2,"display","flex","gap","16px"],[1,"form-group",2,"max-width","40%"],["for","areaCode"],["id","areaCode","formControlName","areaCode","placeholder","011"],[1,"form-group",2,"flex-grow","1"],["for","phone"],["id","phone","formControlName","phone","placeholder","45894589"],["for","message"],["id","message","formControlName","message","placeholder","Tu mensaje ac\xE1..."],["type","submit",1,"submit-btn",3,"disabled","ngClass"],[4,"ngIf"],[1,"email-headline"],[1,"submit-btn",3,"click"],[1,"error-message"]],template:function(r,n){r&1&&(l(0,"h2",0),u(1,"Contactanos"),f(),l(2,"div",1)(3,"form",2),$("ngSubmit",function(){return n.onSubmit()}),l(4,"div",3)(5,"label",4),u(6,"Nombre y Apellido"),f(),M(7,"input",5),P(8,O5,4,3,"div",6),f(),l(9,"div",3)(10,"label",7),u(11,"Email"),f(),M(12,"input",8),P(13,U5,3,2,"div",6),f(),l(14,"div",9)(15,"div",10)(16,"label",11),u(17,"C\xF3digo postal"),f(),M(18,"input",12),P(19,j5,3,2,"div",6),f(),l(20,"div",13)(21,"label",14),u(22,"N\xFAmero de Tel\xE9fono"),f(),M(23,"input",15),P(24,X5,4,3,"div",6),f()(),l(25,"div",3)(26,"label",16),u(27,"Mensaje"),f(),M(28,"textarea",17),P(29,J5,3,2,"div",6),f(),l(30,"button",18),P(31,c7,2,0,"span",19)(32,a7,2,0,"span",19),f(),l(33,"dialog")(34,"p",20),u(35,"Correo enviado exitosamente."),f(),l(36,"p"),u(37,"En breve nos contactaremos!"),f(),l(38,"button",21),$("click",function(){return n.closeDialog()}),u(39,"Cerrar"),f()()()()),r&2&&(d(3),H("formGroup",n.contactForm),d(5),H("ngIf",(n.name==null?null:n.name.invalid)&&(n.name==null?null:n.name.touched)),d(5),H("ngIf",(n.email==null?null:n.email.invalid)&&(n.email==null?null:n.email.touched)),d(6),H("ngIf",(n.areaCode==null?null:n.areaCode.invalid)&&(n.areaCode==null?null:n.areaCode.touched)),d(5),H("ngIf",(n.phone==null?null:n.phone.invalid)&&(n.phone==null?null:n.phone.touched)),d(5),H("ngIf",(n.message==null?null:n.message.invalid)&&(n.message==null?null:n.message.touched)),d(),H("disabled",n.contactForm.invalid||n.isLoading)("ngClass",T3(11,e7,n.isLoading)),d(),H("ngIf",!n.isLoading),d(),H("ngIf",n.isLoading),d(),D1("open",n.isDialogOpen))},dependencies:[d1,B3,R3,I6,B6,w2,P6,F6,x3,N3],styles:["[_nghost-%COMP%]{display:block}form[_ngcontent-%COMP%]{position:relative}.contact-container[_ngcontent-%COMP%]{max-width:500px;margin:0 auto;padding:20px;background-color:#fff;border-radius:8px}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}label[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:5px}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:16px;box-sizing:border-box;margin-bottom:5px}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{color:#888}textarea[_ngcontent-%COMP%]{resize:vertical;min-height:100px}.error-message[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:red;font-size:12px}.submit-btn[_ngcontent-%COMP%]{width:100%;padding:12px;background-color:#000;color:#fff;border:none;border-radius:4px;font-size:16px;cursor:pointer;transition:background-color .3s ease}.submit-btn[_ngcontent-%COMP%]:hover{background-color:#333}.submit-btn[_ngcontent-%COMP%]:disabled{background-color:#999;cursor:not-allowed}.submit-btn.loading[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blink 1s infinite}@keyframes _ngcontent-%COMP%_blink{0%,to{opacity:1}50%{opacity:.5}}dialog[_ngcontent-%COMP%]{padding:20px;border:none;border-radius:8px;box-shadow:0 4px 8px #0003;display:flex;flex-direction:column;justify-content:center;gap:8px;position:absolute;top:50%;transform:translateY(-50%)}dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;padding:8px 16px;cursor:pointer}dialog[_ngcontent-%COMP%]   .email-headline[_ngcontent-%COMP%]{font-size:24px;font-weight:700}dialog[_ngcontent-%COMP%]:not([open=true]){display:none}"]});let a=c;return a})();var K6=(()=>{let c=class c{constructor(){this.mainGallery=["assets/images/1.jpg","assets/images/2.jpg","assets/images/3.jpg","assets/images/4.jpg","assets/images/5.jpg","assets/images/6.jpg","assets/images/7.jpg","assets/images/8.jpg"]}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=x({type:c,selectors:[["app-home"]],standalone:!0,features:[N],decls:10,vars:1,consts:[["id","inicio",1,"gallery"],[3,"galleryImages"],[1,"container"]],template:function(r,n){r&1&&(l(0,"h1"),u(1,"ZT Clima"),f(),l(2,"div",0),M(3,"app-gallery",1),f(),l(4,"div",2),M(5,"app-about")(6,"app-services")(7,"app-trabajos-realizados")(8,"app-products")(9,"app-contact-form"),f()),r&2&&(d(3),H("galleryImages",n.mainGallery))},dependencies:[M2,r6,i6,n6,s6,X6],styles:["h1[_ngcontent-%COMP%]{position:absolute;z-index:-1;color:transparent}.gallery[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}@media (min-width: 768px){.gallery[_ngcontent-%COMP%]{margin-bottom:3rem}}.container[_ngcontent-%COMP%]{margin-bottom:3rem;padding:1rem;gap:2rem}"]});let a=c;return a})();var Q6=[{path:"",component:K6}];var J6={providers:[W3(Q6),q3()]};var i7={providers:[U3()]},c8=E3(J6,i7);var r7=()=>O3(e6,c8),Gc=r7;export{Gc as a};
