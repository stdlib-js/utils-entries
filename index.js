// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).objectEntries=e()}(this,(function(){"use strict";function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&o.call(r,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var f,l=n()?function(r){var e,t,n;if(null==r)return i.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return i.call(r)}return n=i.call(r),e?r[c]=t:delete r[c],n}:function(r){return i.call(r)};function s(r){return"[object Arguments]"===l(r)}f=function(){return s(arguments)}();var p=f,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var h=Object.defineProperty;function d(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function b(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!d(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=b(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=b(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===w.call(r.specifier)?w.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function j(r){return"string"==typeof r}var S=Math.abs,E=String.prototype.toLowerCase,O=String.prototype.toUpperCase,_=String.prototype.replace,T=/e\+(\d)$/,k=/e-(\d)$/,x=/^(\d+)$/,I=/^(\d+)e/,A=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function F(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!d(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":S(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_.call(t,V,"$1e"),t=_.call(t,P,"e"),t=_.call(t,A,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_.call(t,T,"e+0$1"),t=_.call(t,k,"e-0$1"),r.alternate&&(t=_.call(t,x,"$1."),t=_.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===O.call(r.specifier)?O.call(t):E.call(t)}function N(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function C(r,e,t){var n=e-r.length;return n<0?r:r=t?r+N(n):N(n)+r}var $=String.fromCharCode,B=isNaN,L=Array.isArray;function R(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function G(r){var e,t,n,i,o,a,u,c,f;if(!L(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(j(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!B(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(o)?String(n.arg):$(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=C(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Z(r){var e,t,n,i;for(t=[],i=0,n=W.exec(r);n;)(e=r.slice(i,W.lastIndex-n[0].length)).length&&t.push(e),t.push(X(n)),i=W.lastIndex,n=W.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function M(r){return"string"==typeof r}function U(r){var e,t,n;if(!M(r))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Z(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return G.apply(null,t)}var Y,H=Object.prototype,z=H.toString,D=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,K=H.__lookupSetter__;Y=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?h:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||K.call(r,e)?(n=r.__proto__,r.__proto__=H,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var Q=Y;function rr(r,e,t){Q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function er(r){return"string"==typeof r}var tr=String.prototype.valueOf;var nr=n();function ir(r){return"object"==typeof r&&(r instanceof String||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function or(r){return er(r)||ir(r)}function ar(r){return"number"==typeof r}rr(or,"isPrimitive",er),rr(or,"isObject",ir);var ur=Number,cr=ur.prototype.toString;var fr=n();function lr(r){return"object"==typeof r&&(r instanceof ur||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function sr(r){return ar(r)||lr(r)}function pr(r){return r!=r}function gr(r){return ar(r)&&pr(r)}function hr(r){return lr(r)&&pr(r.valueOf())}function dr(r){return gr(r)||hr(r)}rr(sr,"isPrimitive",ar),rr(sr,"isObject",lr),rr(dr,"isPrimitive",gr),rr(dr,"isObject",hr);var yr=Number.POSITIVE_INFINITY,br=ur.NEGATIVE_INFINITY,vr=Math.floor;function wr(r){return vr(r)===r}function mr(r){return r<yr&&r>br&&wr(r)}function jr(r){return ar(r)&&mr(r)}function Sr(r){return lr(r)&&mr(r.valueOf())}function Er(r){return jr(r)||Sr(r)}rr(Er,"isPrimitive",jr),rr(Er,"isObject",Sr);var Or=Object.prototype.propertyIsEnumerable;var _r=!Or.call("beep","0");function Tr(r,e){var t;return null!=r&&(!(t=Or.call(r,e))&&_r&&or(r)?!gr(e=+e)&&jr(e)&&e>=0&&e<r.length:t)}var kr=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};var xr=p?s:function(r){return null!==r&&"object"==typeof r&&!kr(r)&&"number"==typeof r.length&&wr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!Tr(r,"callee")},Ir=Array.prototype.slice;function Ar(r){return null!==r&&"object"==typeof r}rr(Ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!kr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ar));var Pr=Tr((function(){}),"prototype"),Vr=!Tr({toString:null},"toString");function Fr(r){return r!=r}function Nr(r){return ar(r)&&Fr(r)}function Cr(r){return lr(r)&&Fr(r.valueOf())}function $r(r){return Nr(r)||Cr(r)}rr($r,"isPrimitive",Nr),rr($r,"isObject",Cr);function Br(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&wr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Lr(r){return"string"==typeof r}var Rr=String.prototype.valueOf;var Gr=n();function Wr(r){return"object"==typeof r&&(r instanceof String||(Gr?function(r){try{return Rr.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function Xr(r){return Lr(r)||Wr(r)}function Zr(r,e,t){var n,i;if(!Br(r)&&!Lr(r))throw new TypeError(U("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!jr(t))throw new TypeError(U("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if($r(e)){for(;i<n;i++)if($r(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}rr(Xr,"isPrimitive",Lr),rr(Xr,"isObject",Wr);var Mr=/./;function Ur(r){return"boolean"==typeof r}var Yr=Boolean,Hr=Boolean.prototype.toString;var zr=n();function Dr(r){return"object"==typeof r&&(r instanceof Yr||(zr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===l(r)))}function qr(r){return Ur(r)||Dr(r)}function Jr(){return new Function("return this;")()}rr(qr,"isPrimitive",Ur),rr(qr,"isObject",Dr);var Kr="object"==typeof self?self:null,Qr="object"==typeof window?window:null,re="object"==typeof global?global:null,ee="object"==typeof globalThis?globalThis:null;var te=function(r){if(arguments.length){if(!Ur(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Jr()}if(ee)return ee;if(Kr)return Kr;if(Qr)return Qr;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ne=te.document&&te.document.childNodes,ie=Int8Array;function oe(){return/^\s*function\s*([^(]*)/i}var ae=/^\s*function\s*([^(]*)/i;function ue(r){var e,t,n,i;if(("Object"===(t=l(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ae.exec(n.toString()))return e[1]}return Ar(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}rr(oe,"REGEXP",ae);var ce="function"==typeof Mr||"object"==typeof ie||"function"==typeof ne?function(r){return ue(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ue(r).toLowerCase():e};function fe(r){return r.constructor&&r.constructor.prototype===r}var le=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],se="undefined"==typeof window?void 0:window;var pe=function(){var r;if("undefined"===ce(se))return!1;for(r in se)try{-1===Zr(le,r)&&a(se,r)&&null!==se[r]&&"object"===ce(se[r])&&fe(se[r])}catch(r){return!0}return!1}(),ge="undefined"!=typeof window;var he,de=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];he=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return xr(e)?r(Ir.call(e)):r(e)}:r:function(r){var e,t,n,i,o,u,c;if(i=[],xr(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Ar(r))return i;t=Pr&&n}for(o in r)t&&"prototype"===o||!a(r,o)||i.push(String(o));if(Vr)for(e=function(r){if(!1===ge&&!pe)return fe(r);try{return fe(r)}catch(r){return!1}}(r),c=0;c<de.length;c++)u=de[c],e&&"constructor"===u||!a(r,u)||i.push(String(u));return i};var ye=he;return function(r){var e,t,n,i;if(!Ar(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1TPOk",r));for(n=(e=ye(r)).length,t=[],i=0;i<n;i++)t.push([e[i],r[e[i]]]);return t}}));
//# sourceMappingURL=index.js.map
