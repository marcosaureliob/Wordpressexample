!function(t){var e={};function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=274)}({274:function(t,e,r){"use strict";r.r(e);r(275),r(276),r(277)},275:function(t,e){var r,o,i,n,s,a;function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var u=0;function p(t){return"__private_"+u+++"_"+t}var f=GT3.Gallery.Modules.Basic,d=(0,GT3.autobind)((o=p("ui"),i=p("settings"),n=p("loadMoreComplete"),s=function(t){var e,r;function s(){var e;return e=t.apply(this,arguments)||this,Object.defineProperty(l(e),n,{value:a}),e.waitingForImage=!1,e.isotope=null,Object.defineProperty(l(e),o,{writable:!0,value:{isotope:".gallery-isotope-wrapper",view_more:".view_more_link"}}),e.stagger=120,Object.defineProperty(l(e),i,{writable:!0,value:{isotopeOptions:{transformsEnabled:!0,transitionDuration:350,percentPosition:!0,stagger:50,itemSelector:".gt3pg-isotope-item",resize:!1}}}),e.items=[],e.failed?l(e):(e.extendUI(c(l(e),o)[o]),e.extendSettings(c(l(e),i)[i]),e.items=e.settings.items,e.hooks.addAction("filter/updated","IsotopeGallery",(function(){e.isotope&&e.isotope.arrange()})),e.hooks.addAction("loadMore/complete","IsotopeGallery",c(l(e),n)[n].bind(l(e))),e)}r=t,(e=s).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var u=s.prototype;return u.removeLoading=function(t){var e=this;t.classList.remove("loading"),setTimeout((function(){e.waitingForImage=!1,e.showImages()}),this.stagger)},u.startObserver=function(t){var e=this;t.classList.add("waiting-load");var r=new MutationObserver((function(o){o.some((function(o){return!!o.target.classList.contains("lazyLoaded")&&(r.disconnect(),t.classList.remove("waiting-load"),e.removeLoading(o.target),!0)}))}));r.observe(t,{attributes:!0})},u.showImages=function(){if(this.showPreloader&&this.hidePreloader(),!this.waitingForImage){var t=this.ui.isotope.querySelector(".gt3pg-isotope-item.loading.inViewport");t&&(this.waitingForImage=!0,t.classList.contains("lazyLoaded")?this.removeLoading(t):this.startObserver(t))}},u.lazyErrorHandler=function(t,e){e=e.closest(".gt3pg-isotope-item"),this.isotope.remove(e),e&&e.remove(),this.isotope.layout()},u.lazyLoadHandler=function(t,e){(e=e.closest(".gt3pg-isotope-item"))&&e.classList.add("lazyLoaded"),this.showImages()},u.lazyIntersectionHandler=function(t){(t=t.closest(".gt3pg-isotope-item"))&&t.classList.add("inViewport"),this.showImages()},u.getChildNumber=function(t){return this.isotope?this.isotope.filteredItems.findIndex((function(e){return e.element===t})):Array.prototype.indexOf.call(t.parentNode.children,t)},u.resizeOnce=function(){},s}(f),a=function(t){var e=this,r=t.html,o=t.items,i=document.createElement("div");i.innerHTML=r,o instanceof Array&&o.forEach((function(t){return e.items.push(t)})),this.isotope.once("insertComplete",(function(){e.resize(),e.resizeOnce()})),this.isotope.once("layoutComplete",(function(){e.firstStart()})),this.isotope.insert(i)},r=s))||r;GT3.Gallery.Modules.IsotopeGallery=d},276:function(t,e){var r;function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a=GT3,l=a.Gallery.Modules.IsotopeGallery,c=a.Isotope,u=a.Hooks,p=a.LazyLoad,f=(0,GT3.autobind)(r=function(t){var e,r;function o(){var e;return(e=t.apply(this,arguments)||this).restName="masonry",e.resizeOnce(),e.failed?s(e):(e.init(),e.ui.isotope?(e.isotope=new c(e.ui.isotope,i(i({},e.settings.isotopeOptions),{},{layoutMode:"masonry"})),e.isotope.arrange({transitionDuration:e.settings.isotopeOptions.transitionDuration}),setTimeout((function(){e.firstStart()}),300),e.afterInit(),e):s(e))}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var n=o.prototype;return n.firstStart=function(){p(this.ui.isotope.children,{loadHandle:this.lazyLoadHandler,errorHandler:this.lazyErrorHandler,intersectionHandler:this.lazyIntersectionHandler,force:this.force})},n.resize=function(){this.isotope&&this.isotope.layout()},n.resizeOnce=function(){this.blockAlign&&this.resizeBlockAlign();var t,e,r,o=this.ui.isotope.children;if(this.ui.isotope&&this.ui.isotope.childElementCount)for(var i=0;i<this.ui.isotope.childElementCount;i++)(t=(r=o[i]).querySelector("img"))&&r.classList.contains("loading")?t&&t.attributes&&t.attributes.width&&t.attributes.height&&(e=parseInt(t.attributes.width.value)/parseInt(t.attributes.height.value),t.style.setProperty("height",Math.ceil(t.width/e)+"px")):t&&t.style&&t.style.getPropertyValue("height")&&t.style.removeProperty("height")},o}(l))||r;GT3.Gallery.Modules.Masonry=f,u.doAction("widget_register","masonry",f)},277:function(t,e){var r;function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw s}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c=GT3,u=c.Gallery.Modules.IsotopeGallery,p=c.Isotope,f=c.Hooks,d=c.LazyLoad,y=(0,c.autobind)(r=function(t){var e,r;function i(){var e;return(e=t.apply(this,arguments)||this).restName="grid",e.failed?l(e):(e.init(),e.ui.isotope?(e.isotope=new p(e.ui.isotope,s(s({},e.settings.isotopeOptions),{},{layoutMode:"fitRows",transitionDuration:0})),e.resizeOnce(),e.isotope.arrange({transitionDuration:e.settings.isotopeOptions.transitionDuration}),setTimeout((function(){e.firstStart()}),300),e.afterInit(),e):l(e))}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var n=i.prototype;return n.firstStart=function(){d(this.ui.isotope.children,{loadHandle:this.lazyLoadHandler,errorHandler:this.lazyErrorHandler,intersectionHandler:this.lazyIntersectionHandler,force:this.force})},n.resize=function(){this.isotope.layout()},n.resizeOnce=function(){var t,e=1;if(["rectangle-16x9","rectangle","square","circle","rectangle-3x2"].includes(this.settings.grid_type)){switch(this.settings.grid_type){case"rectangle-16x9":e=1.78;break;case"rectangle":e=1.33;break;case"rectangle-3x2":e=1.5}var r,i=o(this.ui.isotope.children);try{for(i.s();!(r=i.n()).done;){var n=r.value;if(null===n.getAttribute("data-align")){var s="align-height",a=n.querySelector("img");switch(e>(t=(a.getAttribute("width")||1)/(a.getAttribute("height")||1))&&(t=.5),!0){case e>=1:switch(!0){case e>=t:s="align-width"}}n.setAttribute("data-align",s)}}}catch(t){i.e(t)}finally{i.f()}}},i}(u))||r;GT3.Gallery.Modules.Grid=y,f.doAction("widget_register","grid",y)}});