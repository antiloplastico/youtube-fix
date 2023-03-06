/// deskPolym23r.js
(function(){
/* HTML content inlined from HTML import */
const d=document.createElement("div");
d.setAttribute("inlined-html","");
const finalStyleText="html:not(.style-scope) {--primary-text-color: var(--light-theme-text-color);}";
d.appendChild(document.createElement("style"));
d.lastChild.setAttribute("css-build-single","");
d.lastChild.textContent=finalStyleText;
document.head.appendChild(d);
})();if(window["ytcsi"])window["ytcsi"]["tick"]("rses_dpj");(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/'use strict';var e,aaa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},baa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")},g=baa(this),fa=function(a,b){if(b)a:{var c=g;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}};fa("Symbol",function(a){if(a)return a;var b=function(h,l){this.$jscomp$symbol$id_=h;aa(this,"description",{configurable:!0,writable:!0,value:l})};b.prototype.toString=function(){return this.$jscomp$symbol$id_};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,f=function(h){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new b(c+(h||"")+"_"+d++,h)};return f});
fa("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=g[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&aa(d.prototype,a,{configurable:!0,writable:!0,value:function(){return caa(aaa(this))}})}return a});
