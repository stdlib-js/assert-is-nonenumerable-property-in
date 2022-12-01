// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).isNonEnumerablePropertyIn=r()}(this,(function(){"use strict";var t=void 0!==Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyDescriptor;var e,n=Object.prototype.hasOwnProperty;function o(t,r){return null!=t&&n.call(t,r)}e=t?function(t,e){var n;return null==t||void 0===(n=r(t,e))?null:n}:function(t,r){return o(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};var u=e,i=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var c,f=Object.defineProperty,a=Object.prototype,p=a.toString,y=a.__defineGetter__,b=a.__defineSetter__,s=a.__lookupGetter__,v=a.__lookupSetter__;c=function(){try{return l({},"x",{}),!0}catch(t){return!1}}()?f:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===p.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===p.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(s.call(t,r)||v.call(t,r)?(n=t.__proto__,t.__proto__=a,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&y&&y.call(t,r,e.get),i&&b&&b.call(t,r,e.set),t};var d=c;function j(t,r,e){d(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"boolean"==typeof t}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return g&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var O="function"==typeof Symbol?Symbol.toStringTag:"";var h=m()?function(t){var r,e,n;if(null==t)return w.call(t);e=t[O],r=o(t,O);try{t[O]=void 0}catch(r){return w.call(t)}return n=w.call(t),r?t[O]=e:delete t[O],n}:function(t){return w.call(t)},S=Boolean.prototype.toString;var P=m();function E(t){return"object"==typeof t&&(t instanceof Boolean||(P?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function A(t){return _(t)||E(t)}function T(){return new Function("return this;")()}j(A,"isPrimitive",_),j(A,"isObject",E);var B="object"==typeof self?self:null,x="object"==typeof window?window:null,V="object"==typeof global?global:null;var k=function(t){if(arguments.length){if(!_(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(B)return B;if(x)return x;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),C=k.document&&k.document.childNodes,F=Int8Array;function G(){return/^\s*function\s*([^(]*)/i}var L,D=/^\s*function\s*([^(]*)/i;j(G,"REGEXP",D),L=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};var I=L;function M(t){return null!==t&&"object"==typeof t}var N=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!I(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(M);function R(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=D.exec(n.toString()))return r[1]}return M(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}j(M,"isObjectLikeArray",N);var U="function"==typeof i||"object"==typeof F||"function"==typeof C?function(t){return R(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?R(t).toLowerCase():r};var X,q,z=Object.getPrototypeOf;q=Object.getPrototypeOf,X="function"===U(q)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var H=X;function J(t){return null==t?null:(t=Object(t),H(t))}return function(t,r){var e=function(t,r){var e,n;if(null==t)return null;n=Object(t);do{if(e=u(n,r))return e;n=J(n)}while(n);return null}(t,r);return null!==e&&!1===e.enumerable}}));
//# sourceMappingURL=index.js.map
