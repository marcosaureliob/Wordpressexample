!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=661)}({661:function(e,r,t){"use strict";t.r(r);var n,o,i,c;t(662);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,r){if(!Object.prototype.hasOwnProperty.call(e,r))throw new TypeError("attempted to use private field on non-instance");return e}var p=0;var d=GT3,f=(d.Hooks,(0,d.autobind)((i=o=function(e){var r,t;function n(){var r;return r=e.apply(this,arguments)||this,Object.defineProperty(a(r),c,{writable:!0,value:{$accordionWrapper:".accordion_wrapper"}}),r.init(),r.extendUI(u(a(r),c)[c]),r.ui.$accordionWrapper.accordion({classes:{"ui-accordion":"highlight"},header:".item_title",icons:{header:" ui-icon-copy",activeHeader:" ui-icon-alert"}}),r}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t,n.prototype.resize=function(){this.ui.$accordionWrapper.accordion("refresh")},n}(d.ThemesCore.Widgets.BasicWidget),c="__private_"+p+++"_"+"ui",o.widgetName="gt3-core-accordion",n=i))||n);GT3.ThemesCore.onWidgetRegisterHandler(f.widgetName,f)},662:function(e,r,t){}});