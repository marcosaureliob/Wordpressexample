!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=673)}({673:function(e,t,r){"use strict";r.r(t);var n,o,i,a;r(674);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var p=0;var f=GT3,s=(f.Hooks,(0,f.autobind)((i=o=function(e){var t,r;function n(){var t;return t=e.apply(this,arguments)||this,Object.defineProperty(u(t),a,{writable:!0,value:{$wrap_text:".text_wrap",$fake_space:".fake_space"}}),t.init(),t.extendUI(c(u(t),a)[a]),t.afterInit(),t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.resize=function(){this.ui.$wrap_text&&this.ui.$fake_space&&this.ui.$fake_space.height(this.ui.$wrap_text.height())},n}(f.ThemesCore.Widgets.BasicWidget),a="__private_"+p+++"_"+"ui",o.widgetName="gt3-core-flipbox",n=i))||n);GT3.ThemesCore.onWidgetRegisterHandler(s.widgetName,s)},674:function(e,t,r){}});