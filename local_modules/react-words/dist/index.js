!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.words=e(require("react")):t.words=e(t.react)}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=r(2),f=function(t){return t&&t.__esModule?t:{default:t}}(a);r(3);var u=function(t){function e(t){n(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.state={},r}return i(e,t),s(e,[{key:"_init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,n=String(t);if(!n)return null;var o=Array.from(n);return o.map(function(t,n){var i={opacity:0,transition:"all "+r+"ms"};return" "===t&&(i.width=".5em"),1===e?(i.transform="scale(2, 2)",i.filter="blur(3px)"):2===e?i.transform="scale(0, 0)":3===e?i.transform="translateX(20px)":4===e?i.transform="translateY(-10px)":5===e&&(i.transform="rotateX(90deg)"),i.transitionDelay=n*(r?r/o.length:300/o.length)+"ms",f.default.createElement("i",{key:n,style:i},t)})}},{key:"render",value:function(){var t=this;return f.default.createElement("span",{ref:function(e){return t.span=e},className:this.props.show?"react-words "+(this.props.className||"")+" show":"react-words "+(this.props.className||"")},this._init(this.props.children,this.props.type,this.props.speed))}}]),e}(f.default.Component);e.default=u},function(e,r){e.exports=t},function(t,e,r){var n=r(4);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0};o.transform=void 0;r(6)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){e=t.exports=r(5)(void 0),e.push([t.i,".react-words{\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tperspective:600px;\r\n\t-webkit-perspective:600px;\r\n\t-moz-perspective:600px;\r\n\t-ms-perspective:600px;\r\n\t-o-perspective:600px;\r\n}\r\n.react-words>i{\r\n\tdisplay: inline;\r\n\tfont-style: normal;\r\n\ttransform-style: preserve-3d;\r\n    -webkit-transform-style: preserve-3d;\r\n    -moz--transform-style: preserve-3d;\r\n    -ms--transform-style: preserve-3d;\r\n    -o--transform-style: preserve-3d;\r\n}\r\n.react-words.show>i{\r\n\topacity: 1 !important;\r\n\ttransform: none !important;\r\n\ttext-shadow: none !important;\r\n\t-webkit-fliter: none !important;\r\n\tfilter: none !important;\r\n}",""])},function(t,e){function r(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=h[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(c(n.parts[i],e))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(c(n.parts[i],e));h[n.id]={id:n.id,refs:1,parts:s}}}}function o(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a=i[1],f=i[2],u=i[3],c={css:a,media:f,sourceMap:u};n[s]?n[s].parts.push(c):r.push(n[s]={id:s,parts:[c]})}return r}function i(t,e){var r=m(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=w[w.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),w.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(t.insertInto+" "+t.insertAt.before);r.insertBefore(e,o)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",u(e,t.attrs),i(t,e),e}function f(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(e,t.attrs),i(t,e),e}function u(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function c(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=b++;r=y||(y=a(e)),n=l.bind(null,r,u,!1),o=l.bind(null,r,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=f(e),n=d.bind(null,r,e),o=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(e),n=p.bind(null,r),o=function(){s(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function l(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function p(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function d(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=g(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(r){if(void 0===e[r]){var n=t.call(this,r);if(n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[r]=n}return e[r]}}(function(t){return document.querySelector(t)}),y=null,b=0,w=[],g=r(7);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=o(t,e);return n(r,e),function(t){for(var i=[],s=0;s<r.length;s++){var a=r[s],f=h[a.id];f.refs--,i.push(f)}if(t){n(o(t,e),e)}for(var s=0;s<i.length;s++){var f=i[s];if(0===f.refs){for(var u=0;u<f.parts.length;u++)f.parts[u]();delete h[f.id]}}}};var x=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}])});