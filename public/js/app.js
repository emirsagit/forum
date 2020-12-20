/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@editorjs/editorjs/dist/editor.js":
/*!********************************************************!*\
  !*** ./node_modules/@editorjs/editorjs/dist/editor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! For license information please see editor.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=183)}([function(t,e,n){var o=n(9),r=n(17),i=n(27),a=n(23),s=n(30),c=function(t,e,n){var l,u,f,d,p=t&c.F,h=t&c.G,v=t&c.S,y=t&c.P,g=t&c.B,b=h?o:v?o[e]||(o[e]={}):(o[e]||{}).prototype,m=h?r:r[e]||(r[e]={}),k=m.prototype||(m.prototype={});for(l in h&&(n=e),n)f=((u=!p&&b&&void 0!==b[l])?b:n)[l],d=g&&u?s(f,o):y&&"function"==typeof f?s(Function.call,f):f,b&&a(b,l,f,t&c.U),m[l]!=f&&i(m,l,d),y&&k[l]!=f&&(k[l]=f)};o.core=r,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var o=n(108);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e,n){var o=n(52),r=n(368);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3)],void 0===(i="function"==typeof(o=function(o,r,i){"use strict";var a=n(1);function s(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=a(r),i=a(i);var l=function(){function t(e){var n=this,o=e.config;if((0,r.default)(this,t),this.nodes={},this.readOnlyMutableListeners={on:function(t,e,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=n.Editor.Listeners;n.mutableListenerIds.push(i.on(t,e,o,r))},clearAll:function(){var t,e=n.Editor.Listeners,o=s(n.mutableListenerIds);try{for(o.s();!(t=o.n()).done;){var r=t.value;e.offById(r)}}catch(t){o.e(t)}finally{o.f()}n.mutableListenerIds=[]}},this.mutableListenerIds=[],(this instanceof t?this.constructor:void 0)===t)throw new TypeError("Constructors for abstract class Module are not allowed.");this.config=o}return(0,i.default)(t,[{key:"removeAllNodes",value:function(){for(var t in this.nodes){var e=this.nodes[t];e instanceof HTMLElement&&e.remove()}}},{key:"state",set:function(t){this.Editor=t}},{key:"isRtl",get:function(){return"rtl"===this.config.i18n.direction}}]),t}();o.default=l,l.displayName="Module",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(367),n(22),n(15)],void 0===(i="function"==typeof(o=function(t,e,o,r,i){"use strict";var a,s=n(1);function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log",o=arguments.length>3?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"color: inherit";if("console"in window&&window.console[n]){var i=["info","log","warn","error"].includes(n),s=[];switch(c.logLevel){case a.ERROR:if("error"!==n)return;break;case a.WARN:if(!["error","warn"].includes(n))return;break;case a.INFO:if(!i||t)return}o&&s.push(o);var l="Editor.js ".concat("2.19.0"),u="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";t&&(i?(s.unshift(u,r),e="%c".concat(l,"%c ").concat(e)):e="( ".concat(l," )").concat(e));try{if(i)if(o){var f;(f=console)[n].apply(f,["".concat(e," %o")].concat(s))}else{var d;(d=console)[n].apply(d,[e].concat(s))}else console[n](e)}catch(t){}}}Object.defineProperty(t,"__esModule",{value:!0}),t.setLogLevel=function(t){c.logLevel=t},t.isPrintableKey=function(t){return t>47&&t<58||32===t||13===t||229===t||t>64&&t<91||t>95&&t<112||t>185&&t<193||t>218&&t<223},t.sequence=function(t){return f.apply(this,arguments)},t.array=function(t){return Array.prototype.slice.call(t)},t.isFunction=d,t.isClass=function(t){return d(t)&&/^\s*class\s+/.test(t.toString())},t.isEmpty=function(t){return!t||0===Object.keys(t).length&&t.constructor===Object},t.isPromise=function(t){return Promise.resolve(t)===t},t.delay=function(t,e){return function(){var n=this,o=arguments;window.setTimeout((function(){return t.apply(n,o)}),e)}},t.getFileExtension=function(t){return t.name.split(".").pop()},t.isValidMimeType=function(t){return/^[-\w]+\/([-+\w]+|\*)$/.test(t)},t.debounce=function(t,e,n){var o,r=arguments,i=this;return function(){var a=i,s=r,c=n&&!o;window.clearTimeout(o),o=window.setTimeout((function(){o=null,n||t.apply(a,s)}),e),c&&t.apply(a,s)}},t.copyTextToClipboard=function(t){var e=i.default.make("div","codex-editor-clipboard",{innerHTML:t});document.body.appendChild(e);var n=window.getSelection(),o=document.createRange();o.selectNode(e),window.getSelection().removeAllRanges(),n.addRange(o),document.execCommand("copy"),document.body.removeChild(e)},t.getUserOS=p,t.capitalize=function(t){return t[0].toUpperCase()+t.slice(1)},t.typeOf=h,t.deepMerge=function t(e){for(var n=function(t){return t&&"object"===h(t)},r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(!i.length)return e;var s=i.shift();if(n(e)&&n(s))for(var c in s)n(s[c])?(e[c]||Object.assign(e,(0,o.default)({},c,{})),t(e[c],s[c])):Object.assign(e,(0,o.default)({},c,s[c]));return t.apply(void 0,[e].concat(i))},t.beautifyShortcut=function(t){var e=p();return t=t.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi," + "),t=e.mac?t.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):t.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN")},t.getValidUrl=function(t){try{return new URL(t).href}catch(t){}return"//"===t.substring(0,2)?window.location.protocol+t:window.location.origin+t},t.openTab=function(t){window.open(t,"_blank")},t.generateId=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(t).concat(Math.floor(1e8*Math.random()).toString(16))},t.deprecationAssert=function(t,e,n){var o="«".concat(e,"» is deprecated and will be removed in the next major release. Please use the «").concat(n,"» instead.");t&&u(o,"warn")},t.isTouchSupported=t.logLabeled=t.log=t.mouseButtons=t.keyCodes=t.LogLevels=void 0,e=s(e),o=s(o),r=s(r),i=s(i),t.LogLevels=a,function(t){t.VERBOSE="VERBOSE",t.INFO="INFO",t.WARN="WARN",t.ERROR="ERROR"}(a||(t.LogLevels=a={})),t.keyCodes={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91},t.mouseButtons={LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4},c.logLevel=a.VERBOSE;var l=c.bind(window,!1);t.log=l;var u=c.bind(window,!0);function f(){return(f=(0,r.default)(e.default.mark((function t(n){var o,i,a,s,c=arguments;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){return(s=(0,r.default)(e.default.mark((function t(n,o,r){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.function(n.data);case 3:return t.next=5,o(void 0!==n.data?n.data:{});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(void 0!==n.data?n.data:{});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},a=function(t,e,n){return s.apply(this,arguments)},o=c.length>1&&void 0!==c[1]?c[1]:function(){},i=c.length>2&&void 0!==c[2]?c[2]:function(){},t.abrupt("return",n.reduce(function(){var t=(0,r.default)(e.default.mark((function t(n,r){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:return t.abrupt("return",a(r,o,i));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Promise.resolve()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return"function"==typeof t}function p(){var t={win:!1,mac:!1,x11:!1,linux:!1},e=Object.keys(t).find((function(t){return-1!==navigator.appVersion.toLowerCase().indexOf(t)}));return e?(t[e]=!0,t):t}function h(t){return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}t.logLabeled=u;var v="ontouchstart"in document.documentElement;t.isTouchSupported=v})?o.apply(e,r):o)||(t.exports=i)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(12);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(52);function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var e=r();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var s=i?Object.getOwnPropertyDescriptor(t,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=t[a]}return n.default=t,e&&e.set(t,n),n}},function(t,e,n){var o=n(68)("wks"),r=n(43),i=n(9).Symbol,a="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=a&&i[t]||(a?i:r)("Symbol."+t))}).store=o},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(52),n(66),n(2),n(3),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(13),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=l(c);var f=function(){function t(){(0,a.default)(this,t)}return(0,s.default)(t,null,[{key:"isSingleTag",value:function(t){return t.tagName&&["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(t.tagName)}},{key:"isLineBreakTag",value:function(t){return t&&t.tagName&&["BR","WBR"].includes(t.tagName)}},{key:"make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=document.createElement(t);for(var a in Array.isArray(n)?(e=r.classList).add.apply(e,(0,i.default)(n)):n&&r.classList.add(n),o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a]);return r}},{key:"text",value:function(t){return document.createTextNode(t)}},{key:"svg",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.classList.add("icon","icon--"+t),o.setAttribute("width",e+"px"),o.setAttribute("height",n+"px"),o.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t,'"></use>'),o}},{key:"append",value:function(t,e){Array.isArray(e)?e.forEach((function(e){return t.appendChild(e)})):t.appendChild(e)}},{key:"prepend",value:function(t,e){Array.isArray(e)?(e=e.reverse()).forEach((function(e){return t.prepend(e)})):t.prepend(e)}},{key:"swap",value:function(t,e){var n=document.createElement("div"),o=t.parentNode;o.insertBefore(n,t),o.insertBefore(t,e),o.insertBefore(e,n),o.removeChild(n)}},{key:"find",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelector(e)}},{key:"get",value:function(t){return document.getElementById(t)}},{key:"findAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelectorAll(e)}},{key:"findAllInputs",value:function(e){return c.array(e.querySelectorAll(t.allInputsSelector)).reduce((function(e,n){return t.isNativeInput(n)||t.containsOnlyInlineElements(n)?[].concat((0,i.default)(e),[n]):[].concat((0,i.default)(e),(0,i.default)(t.getDeepestBlockElements(n)))}),[])}},{key:"getDeepestNode",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=n?"lastChild":"firstChild",r=n?"previousSibling":"nextSibling";if(e&&e.nodeType===Node.ELEMENT_NODE&&e[o]){var i=e[o];if(t.isSingleTag(i)&&!t.isNativeInput(i)&&!t.isLineBreakTag(i))if(i[r])i=i[r];else{if(!i.parentNode[r])return i.parentNode;i=i.parentNode[r]}return this.getDeepestNode(i,n)}return e}},{key:"isElement",value:function(t){return t&&"object"===(0,r.default)(t)&&t.nodeType&&t.nodeType===Node.ELEMENT_NODE}},{key:"isFragment",value:function(t){return t&&"object"===(0,r.default)(t)&&t.nodeType&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE}},{key:"isContentEditable",value:function(t){return"true"===t.contentEditable}},{key:"isNativeInput",value:function(t){return!(!t||!t.tagName)&&["INPUT","TEXTAREA"].includes(t.tagName)}},{key:"canSetCaret",value:function(e){var n=!0;if(t.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":n=!1}else n=t.isContentEditable(e);return n}},{key:"isNodeEmpty",value:function(t){return!(this.isSingleTag(t)&&!this.isLineBreakTag(t))&&0===(this.isElement(t)&&this.isNativeInput(t)?t.value:t.textContent.replace("​","")).trim().length}},{key:"isLeaf",value:function(t){return!!t&&0===t.childNodes.length}},{key:"isEmpty",value:function(t){t.normalize();for(var e=[t];e.length>0;)if(t=e.shift()){if(this.isLeaf(t)&&!this.isNodeEmpty(t))return!1;t.childNodes&&e.push.apply(e,(0,i.default)(Array.from(t.childNodes)))}return!0}},{key:"isHTMLString",value:function(e){var n=t.make("div");return n.innerHTML=e,n.childElementCount>0}},{key:"getContentLength",value:function(e){return t.isNativeInput(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:e.textContent.length}},{key:"containsOnlyInlineElements",value:function(e){var n;return"string"==typeof e?(n=document.createElement("div")).innerHTML=e:n=e,Array.from(n.children).every((function e(n){return!t.blockElements.includes(n.tagName.toLowerCase())&&Array.from(n.children).every(e)}))}},{key:"getDeepestBlockElements",value:function(e){return t.containsOnlyInlineElements(e)?[e]:Array.from(e.children).reduce((function(e,n){return[].concat((0,i.default)(e),(0,i.default)(t.getDeepestBlockElements(n)))}),[])}},{key:"getHolder",value:function(t){return"string"==typeof t?document.getElementById(t):t}},{key:"isExtensionNode",value:function(t){return t&&["GRAMMARLY-EXTENSION"].includes(t.nodeName)}},{key:"isAnchor",value:function(t){return"a"===t.tagName.toLowerCase()}},{key:"allInputsSelector",get:function(){return"[contenteditable], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((function(t){return'input[type="'.concat(t,'"]')})).join(", ")}},{key:"blockElements",get:function(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tr","tfoot","ul","video"]}}]),t}();o.default=f,f.displayName="Dom",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(32),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(10)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(11),r=n(109),i=n(40),a=Object.defineProperty;e.f=n(18)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(37);t.exports=function(t){return Object(o(t))}},function(t,e,n){t.exports=n(140)},function(t,e){function n(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,r)}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise((function(r,i){var a=t.apply(e,o);function s(t){n(a,r,i,s,c,"next",t)}function c(t){n(a,r,i,s,c,"throw",t)}s(void 0)}))}}},function(t,e,n){var o=n(9),r=n(27),i=n(26),a=n(43)("src"),s=n(188),c=(""+s).split("toString");n(17).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var l="function"==typeof n;l&&(i(n,"name")||r(n,"name",e)),t[e]!==n&&(l&&(i(n,a)||r(n,a,t[e]?""+t[e]:c.join(String(e)))),t===o?t[e]=n:s?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},function(t,e,n){var o=n(0),r=n(10),i=n(37),a=/"/g,s=function(t,e,n,o){var r=String(i(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),s+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),o(o.P+o.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(8),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var c=n(13),l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=l(r),i=l(i),a=c(a),s=l(s);var u=function(){function t(){(0,r.default)(this,t),this.instance=null,this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}return(0,i.default)(t,[{key:"removeFakeBackground",value:function(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}},{key:"setFakeBackground",value:function(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}},{key:"save",value:function(){this.savedSelectionRange=t.range}},{key:"restore",value:function(){if(this.savedSelectionRange){var t=window.getSelection();t.removeAllRanges(),t.addRange(this.savedSelectionRange)}}},{key:"clearSaved",value:function(){this.savedSelectionRange=null}},{key:"collapseToEnd",value:function(){var t=window.getSelection(),e=document.createRange();e.selectNodeContents(t.focusNode),e.collapse(!1),t.removeAllRanges(),t.addRange(e)}},{key:"findParentTag",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=window.getSelection(),r=null;if(!o||!o.anchorNode||!o.focusNode)return null;var i=[o.anchorNode,o.focusNode];return i.forEach((function(o){for(var i=n;i>0&&o.parentNode&&(o.tagName!==t||(r=o,e&&o.classList&&!o.classList.contains(e)&&(r=null),!r));)o=o.parentNode,i--})),r}},{key:"expandToTag",value:function(t){var e=window.getSelection();e.removeAllRanges();var n=document.createRange();n.selectNodeContents(t),e.addRange(n)}}],[{key:"get",value:function(){return window.getSelection()}},{key:"setCursor",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=document.createRange(),o=window.getSelection();if(s.default.isNativeInput(t)){if(!s.default.canSetCaret(t))return;return t.focus(),t.selectionStart=t.selectionEnd=e,t.getBoundingClientRect()}return n.setStart(t,e),n.setEnd(t,e),o.removeAllRanges(),o.addRange(n),n.getBoundingClientRect()}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}},{key:"anchorNode",get:function(){var t=window.getSelection();return t?t.anchorNode:null}},{key:"anchorElement",get:function(){var t=window.getSelection();if(!t)return null;var e=t.anchorNode;return e?s.default.isElement(e)?e:e.parentElement:null}},{key:"anchorOffset",get:function(){var t=window.getSelection();return t?t.anchorOffset:null}},{key:"isCollapsed",get:function(){var t=window.getSelection();return t?t.isCollapsed:null}},{key:"isAtEditor",get:function(){var e=t.get(),n=e.anchorNode||e.focusNode;n&&n.nodeType===Node.TEXT_NODE&&(n=n.parentNode);var o=null;return n&&(o=n.closest(".".concat(t.CSS.editorZone))),o&&o.nodeType===Node.ELEMENT_NODE}},{key:"isSelectionExists",get:function(){return!!t.get().anchorNode}},{key:"range",get:function(){var t=window.getSelection();return t&&t.rangeCount?t.getRangeAt(0):null}},{key:"rect",get:function(){var t,e=document.selection,n={x:0,y:0,width:0,height:0};if(e&&"Control"!==e.type)return t=(e=e).createRange(),n.x=t.boundingLeft,n.y=t.boundingTop,n.width=t.boundingWidth,n.height=t.boundingHeight,n;if(!window.getSelection)return a.log("Method window.getSelection is not supported","warn"),n;if(null===(e=window.getSelection()).rangeCount||isNaN(e.rangeCount))return a.log("Method SelectionUtils.rangeCount is not supported","warn"),n;if(0===e.rangeCount)return n;if((t=e.getRangeAt(0).cloneRange()).getBoundingClientRect&&(n=t.getBoundingClientRect()),0===n.x&&0===n.y){var o=document.createElement("span");if(o.getBoundingClientRect){o.appendChild(document.createTextNode("​")),t.insertNode(o),n=o.getBoundingClientRect();var r=o.parentNode;r.removeChild(o),r.normalize()}}return n}},{key:"text",get:function(){return window.getSelection?window.getSelection().toString():""}}]),t}();o.default=u,u.displayName="SelectionUtils",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(19),r=n(42);t.exports=n(18)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(62),r=n(37);t.exports=function(t){return o(r(t))}},function(t,e,n){"use strict";var o=n(10);t.exports=function(t,e){return!!t&&o((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){var o=n(31);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(63),r=n(42),i=n(28),a=n(40),s=n(26),c=n(109),l=Object.getOwnPropertyDescriptor;e.f=n(18)?l:function(t,e){if(t=i(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},function(t,e,n){var o=n(0),r=n(17),i=n(10);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i((function(){n(1)})),"Object",a)}},function(t,e,n){var o=n(30),r=n(62),i=n(20),a=n(16),s=n(125);t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f,p=e||s;return function(e,s,h){for(var v,y,g=i(e),b=r(g),m=o(s,h,3),k=a(b.length),x=0,S=n?p(e,k):c?p(e,0):void 0;k>x;x++)if((d||x in b)&&(y=m(v=b[x],x,g),t))if(n)S[x]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:S.push(v)}else if(u)return!1;return f?-1:l||u?u:S}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";if(n(18)){var o=n(44),r=n(9),i=n(10),a=n(0),s=n(79),c=n(107),l=n(30),u=n(57),f=n(42),d=n(27),p=n(58),h=n(32),v=n(16),y=n(136),g=n(46),b=n(40),m=n(26),k=n(64),x=n(12),S=n(20),w=n(99),E=n(47),T=n(49),C=n(48).f,B=n(101),_=n(43),O=n(14),I=n(35),N=n(69),R=n(65),M=n(103),L=n(55),A=n(72),P=n(56),D=n(102),j=n(127),F=n(19),U=n(33),H=F.f,z=U.f,W=r.RangeError,G=r.TypeError,X=r.Uint8Array,V=Array.prototype,Y=c.ArrayBuffer,K=c.DataView,Z=I(0),q=I(2),J=I(3),$=I(4),Q=I(5),tt=I(6),et=N(!0),nt=N(!1),ot=M.values,rt=M.keys,it=M.entries,at=V.lastIndexOf,st=V.reduce,ct=V.reduceRight,lt=V.join,ut=V.sort,ft=V.slice,dt=V.toString,pt=V.toLocaleString,ht=O("iterator"),vt=O("toStringTag"),yt=_("typed_constructor"),gt=_("def_constructor"),bt=s.CONSTR,mt=s.TYPED,kt=s.VIEW,xt=I(1,(function(t,e){return Ct(R(t,t[gt]),e)})),St=i((function(){return 1===new X(new Uint16Array([1]).buffer)[0]})),wt=!!X&&!!X.prototype.set&&i((function(){new X(1).set({})})),Et=function(t,e){var n=h(t);if(n<0||n%e)throw W("Wrong offset!");return n},Tt=function(t){if(x(t)&&mt in t)return t;throw G(t+" is not a typed array!")},Ct=function(t,e){if(!x(t)||!(yt in t))throw G("It is not a typed array constructor!");return new t(e)},Bt=function(t,e){return _t(R(t,t[gt]),e)},_t=function(t,e){for(var n=0,o=e.length,r=Ct(t,o);o>n;)r[n]=e[n++];return r},Ot=function(t,e,n){H(t,e,{get:function(){return this._d[n]}})},It=function(t){var e,n,o,r,i,a,s=S(t),c=arguments.length,u=c>1?arguments[1]:void 0,f=void 0!==u,d=B(s);if(null!=d&&!w(d)){for(a=d.call(s),o=[],e=0;!(i=a.next()).done;e++)o.push(i.value);s=o}for(f&&c>2&&(u=l(u,arguments[2],2)),e=0,n=v(s.length),r=Ct(this,n);n>e;e++)r[e]=f?u(s[e],e):s[e];return r},Nt=function(){for(var t=0,e=arguments.length,n=Ct(this,e);e>t;)n[t]=arguments[t++];return n},Rt=!!X&&i((function(){pt.call(new X(1))})),Mt=function(){return pt.apply(Rt?ft.call(Tt(this)):Tt(this),arguments)},Lt={copyWithin:function(t,e){return j.call(Tt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return $(Tt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return D.apply(Tt(this),arguments)},filter:function(t){return Bt(this,q(Tt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Tt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Tt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z(Tt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return nt(Tt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(Tt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return lt.apply(Tt(this),arguments)},lastIndexOf:function(t){return at.apply(Tt(this),arguments)},map:function(t){return xt(Tt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return st.apply(Tt(this),arguments)},reduceRight:function(t){return ct.apply(Tt(this),arguments)},reverse:function(){for(var t,e=Tt(this).length,n=Math.floor(e/2),o=0;o<n;)t=this[o],this[o++]=this[--e],this[e]=t;return this},some:function(t){return J(Tt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ut.call(Tt(this),t)},subarray:function(t,e){var n=Tt(this),o=n.length,r=g(t,o);return new(R(n,n[gt]))(n.buffer,n.byteOffset+r*n.BYTES_PER_ELEMENT,v((void 0===e?o:g(e,o))-r))}},At=function(t,e){return Bt(this,ft.call(Tt(this),t,e))},Pt=function(t){Tt(this);var e=Et(arguments[1],1),n=this.length,o=S(t),r=v(o.length),i=0;if(r+e>n)throw W("Wrong length!");for(;i<r;)this[e+i]=o[i++]},Dt={entries:function(){return it.call(Tt(this))},keys:function(){return rt.call(Tt(this))},values:function(){return ot.call(Tt(this))}},jt=function(t,e){return x(t)&&t[mt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Ft=function(t,e){return jt(t,e=b(e,!0))?f(2,t[e]):z(t,e)},Ut=function(t,e,n){return!(jt(t,e=b(e,!0))&&x(n)&&m(n,"value"))||m(n,"get")||m(n,"set")||n.configurable||m(n,"writable")&&!n.writable||m(n,"enumerable")&&!n.enumerable?H(t,e,n):(t[e]=n.value,t)};bt||(U.f=Ft,F.f=Ut),a(a.S+a.F*!bt,"Object",{getOwnPropertyDescriptor:Ft,defineProperty:Ut}),i((function(){dt.call({})}))&&(dt=pt=function(){return lt.call(this)});var Ht=p({},Lt);p(Ht,Dt),d(Ht,ht,Dt.values),p(Ht,{slice:At,set:Pt,constructor:function(){},toString:dt,toLocaleString:Mt}),Ot(Ht,"buffer","b"),Ot(Ht,"byteOffset","o"),Ot(Ht,"byteLength","l"),Ot(Ht,"length","e"),H(Ht,vt,{get:function(){return this[mt]}}),t.exports=function(t,e,n,c){var l=t+((c=!!c)?"Clamped":"")+"Array",f="get"+t,p="set"+t,h=r[l],g=h||{},b=h&&T(h),m=!h||!s.ABV,S={},w=h&&h.prototype,B=function(t,n){H(t,n,{get:function(){return function(t,n){var o=t._d;return o.v[f](n*e+o.o,St)}(this,n)},set:function(t){return function(t,n,o){var r=t._d;c&&(o=(o=Math.round(o))<0?0:o>255?255:255&o),r.v[p](n*e+r.o,o,St)}(this,n,t)},enumerable:!0})};m?(h=n((function(t,n,o,r){u(t,h,l,"_d");var i,a,s,c,f=0,p=0;if(x(n)){if(!(n instanceof Y||"ArrayBuffer"==(c=k(n))||"SharedArrayBuffer"==c))return mt in n?_t(h,n):It.call(h,n);i=n,p=Et(o,e);var g=n.byteLength;if(void 0===r){if(g%e)throw W("Wrong length!");if((a=g-p)<0)throw W("Wrong length!")}else if((a=v(r)*e)+p>g)throw W("Wrong length!");s=a/e}else s=y(n),i=new Y(a=s*e);for(d(t,"_d",{b:i,o:p,l:a,e:s,v:new K(i)});f<s;)B(t,f++)})),w=h.prototype=E(Ht),d(w,"constructor",h)):i((function(){h(1)}))&&i((function(){new h(-1)}))&&A((function(t){new h,new h(null),new h(1.5),new h(t)}),!0)||(h=n((function(t,n,o,r){var i;return u(t,h,l),x(n)?n instanceof Y||"ArrayBuffer"==(i=k(n))||"SharedArrayBuffer"==i?void 0!==r?new g(n,Et(o,e),r):void 0!==o?new g(n,Et(o,e)):new g(n):mt in n?_t(h,n):It.call(h,n):new g(y(n))})),Z(b!==Function.prototype?C(g).concat(C(b)):C(g),(function(t){t in h||d(h,t,g[t])})),h.prototype=w,o||(w.constructor=h));var _=w[ht],O=!!_&&("values"==_.name||null==_.name),I=Dt.values;d(h,yt,!0),d(w,mt,l),d(w,kt,!0),d(w,gt,h),(c?new h(1)[vt]==l:vt in w)||H(w,vt,{get:function(){return l}}),S[l]=h,a(a.G+a.W+a.F*(h!=g),S),a(a.S,l,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*i((function(){g.of.call(h,1)})),l,{from:It,of:Nt}),"BYTES_PER_ELEMENT"in w||d(w,"BYTES_PER_ELEMENT",e),a(a.P,l,Lt),P(l),a(a.P+a.F*wt,l,{set:Pt}),a(a.P+a.F*!O,l,Dt),o||w.toString==dt||(w.toString=dt),a(a.P+a.F*i((function(){new h(1).slice()})),l,{slice:At}),a(a.P+a.F*(i((function(){return[1,2].toLocaleString()!=new h([1,2]).toLocaleString()}))||!i((function(){w.toLocaleString.call([1,2])}))),l,{toLocaleString:Mt}),L[l]=O?_:I,o||O||d(w,ht,I)}}else t.exports=function(){}},function(t,e,n){var o=n(357),r=n(358),i=n(141),a=n(359);t.exports=function(t,e){return o(t)||r(t,e)||i(t,e)||a()}},function(t,e,n){var o=n(12);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(43)("meta"),r=n(12),i=n(26),a=n(19).f,s=0,c=Object.isExtensible||function(){return!0},l=!n(10)((function(){return c(Object.preventExtensions({}))})),u=function(t){a(t,o,{value:{i:"O"+ ++s,w:{}}})},f=t.exports={KEY:o,NEED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[o].i},getWeak:function(t,e){if(!i(t,o)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[o].w},onFreeze:function(t){return l&&f.NEED&&c(t)&&!i(t,o)&&u(t),t}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports=!1},function(t,e,n){var o=n(111),r=n(86);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(32),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(11),r=n(112),i=n(86),a=n(85)("IE_PROTO"),s=function(){},c=function(){var t,e=n(83)("iframe"),o=i.length;for(e.style.display="none",n(87).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;o--;)delete c.prototype[i[o]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=o(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(111),r=n(86).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e,n){var o=n(26),r=n(20),i=n(85)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var o=n(14)("unscopables"),r=Array.prototype;null==r[o]&&n(27)(r,o,{}),t.exports=function(t){r[o][t]=!0}},function(t,e,n){var o=n(12);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){var o=n(19).f,r=n(26),i=n(14)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(0),r=n(37),i=n(10),a=n(89),s="["+a+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),u=function(t,e,n){var r={},s=i((function(){return!!a[t]()||"​"!="​"[t]()})),c=r[t]=s?e(f):a[t];n&&(r[n]=c),o(o.P+o.F*s,"String",r)},f=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},function(t,e){t.exports={}},function(t,e,n){"use strict";var o=n(9),r=n(19),i=n(18),a=n(14)("species");t.exports=function(t){var e=o[t];i&&e&&!e[a]&&r.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var o=n(23);t.exports=function(t,e,n){for(var r in e)o(t,r,e[r],n);return t}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(143)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,null,[{key:"ui",value:function(e,n){return t._t(e,n)}},{key:"t",value:function(e,n){return t._t(e,n)}},{key:"setDictionary",value:function(e){t.currentDictionary=e}},{key:"_t",value:function(e,n){var o=t.getNamespace(e);return o&&o[n]?o[n]:n}},{key:"getNamespace",value:function(e){return e.split(".").reduce((function(t,e){return t&&Object.keys(t).length?t[e]:{}}),t.currentDictionary)}}]),t}();o.default=c,c.displayName="I18n",c.currentDictionary=a.default,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(379),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var c=n(13),l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=l(r),i=l(i),a=l(a),s=c(s);var u=function(){function t(e){var n=this;(0,r.default)(this,t),this.iterator=null,this.activated=!1,this.allowArrows=!0,this.onKeyDown=function(e){if(n.isEventReadyForHandling(e))switch(t.usedKeys.includes(e.keyCode)&&e.preventDefault(),e.keyCode){case s.keyCodes.TAB:n.handleTabPress(e);break;case s.keyCodes.LEFT:case s.keyCodes.UP:n.flipLeft();break;case s.keyCodes.RIGHT:case s.keyCodes.DOWN:n.flipRight();break;case s.keyCodes.ENTER:n.handleEnterPress(e)}},this.allowArrows="boolean"!=typeof e.allowArrows||e.allowArrows,this.iterator=new a.default(e.items,e.focusedItemClass),this.activateCallback=e.activateCallback}return(0,i.default)(t,[{key:"activate",value:function(t){this.activated=!0,t&&this.iterator.setItems(t),document.addEventListener("keydown",this.onKeyDown)}},{key:"deactivate",value:function(){this.activated=!1,this.dropCursor(),document.removeEventListener("keydown",this.onKeyDown)}},{key:"focusFirst",value:function(){this.dropCursor(),this.flipRight()}},{key:"flipLeft",value:function(){this.iterator.previous()}},{key:"flipRight",value:function(){this.iterator.next()}},{key:"dropCursor",value:function(){this.iterator.dropCursor()}},{key:"isEventReadyForHandling",value:function(t){var e=[s.keyCodes.TAB,s.keyCodes.ENTER],n=this.iterator.currentItem==document.activeElement;return this.allowArrows&&!n&&e.push(s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.UP,s.keyCodes.DOWN),this.activated&&-1!==e.indexOf(t.keyCode)}},{key:"handleTabPress",value:function(t){switch(t.shiftKey?a.default.directions.LEFT:a.default.directions.RIGHT){case a.default.directions.RIGHT:this.flipRight();break;case a.default.directions.LEFT:this.flipLeft()}}},{key:"handleEnterPress",value:function(t){this.activated&&(this.iterator.currentItem&&this.iterator.currentItem.click(),s.isFunction(this.activateCallback)&&this.activateCallback(this.iterator.currentItem),t.preventDefault(),t.stopPropagation())}},{key:"currentItem",get:function(){return this.iterator.currentItem}}],[{key:"usedKeys",get:function(){return[s.keyCodes.TAB,s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.ENTER,s.keyCodes.UP,s.keyCodes.DOWN]}}]),t}();o.default=u,u.displayName="Flipper",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(15),n(8),n(146),n(67),n(380),n(381),n(382),n(25)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a,s,c,l,u,f,d,p){"use strict";var h,v=n(13),y=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BlockToolAPI=void 0,e=y(e),o=y(o),r=y(r),i=y(i),a=y(a),s=v(s),c=y(c),u=y(u),f=y(f),d=y(d),p=y(p),t.BlockToolAPI=h,function(t){t.APPEND_CALLBACK="appendCallback",t.RENDERED="rendered",t.MOVED="moved",t.UPDATED="updated",t.REMOVED="removed",t.ON_PASTE="onPaste"}(h||(t.BlockToolAPI=h={}));var g=function(){function t(e){var n=this,o=e.name,i=e.data,a=e.Tool,u=e.settings,f=e.api,d=e.readOnly;(0,r.default)(this,t),this.cachedInputs=[],this.inputIndex=0,this.modificationDebounceTimer=450,this.didMutated=s.debounce((function(){n.cachedInputs=[],n.updateCurrentInput(),n.call(h.UPDATED)}),this.modificationDebounceTimer),this.handleFocus=function(){n.cachedInputs=[],n.updateCurrentInput()},this.name=o,this.class=a,this.settings=u,this.config=u.config||{},this.api=f,this.blockAPI=new c.default(this),this.mutationObserver=new MutationObserver(this.didMutated),this.tool=new a({data:i,config:this.config,api:this.api.getMethodsForTool(o,l.ToolType.Block),block:this.blockAPI,readOnly:d}),this.holder=this.compose(),this.tunes=this.makeTunes()}var n,v,y;return(0,i.default)(t,[{key:"mergeable",value:function(){return s.isFunction(this.tool.merge)}},{key:"call",value:function(t,e){if(this.tool[t]&&this.tool[t]instanceof Function){t===h.APPEND_CALLBACK&&s.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead","warn");try{this.tool[t].call(this.tool,e)}catch(e){s.log("Error during '".concat(t,"' call: ").concat(e.message),"error")}}}},{key:"mergeWith",value:(y=(0,o.default)(e.default.mark((function t(n){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tool.merge(n);case 2:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)})},{key:"save",value:(v=(0,o.default)(e.default.mark((function t(){var n,o,r,i=this;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tool.save(this.pluginsContent);case 2:return n=t.sent,o=window.performance.now(),t.abrupt("return",Promise.resolve(n).then((function(t){return r=window.performance.now(),{tool:i.name,data:t,time:r-o}})).catch((function(t){s.log("Saving proccess for ".concat(i.name," tool failed due to the ").concat(t),"log","red")})));case 5:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})},{key:"validate",value:(n=(0,o.default)(e.default.mark((function t(n){var o;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!0,!(this.tool.validate instanceof Function)){t.next=5;break}return t.next=4,this.tool.validate(n);case 4:o=t.sent;case 5:return t.abrupt("return",o);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"makeTunes",value:function(){var t=this;return[{name:"moveUp",Tune:u.default},{name:"delete",Tune:f.default},{name:"moveDown",Tune:d.default}].map((function(e){var n=e.name;return new(0,e.Tune)({api:t.api.getMethodsForTool(n,l.ToolType.Tune),settings:t.config})}))}},{key:"renderTunes",value:function(){var t=document.createDocumentFragment();return this.tunes.forEach((function(e){a.default.append(t,e.render())})),t}},{key:"updateCurrentInput",value:function(){this.currentInput=a.default.isNativeInput(document.activeElement)||!p.default.anchorNode?document.activeElement:p.default.anchorNode}},{key:"willSelect",value:function(){this.mutationObserver.observe(this.holder.firstElementChild,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.addInputEvents()}},{key:"willUnselect",value:function(){this.mutationObserver.disconnect(),this.removeInputEvents()}},{key:"compose",value:function(){var e=a.default.make("div",t.CSS.wrapper),n=a.default.make("div",t.CSS.content),o=this.tool.render();return n.appendChild(o),e.appendChild(n),e}},{key:"addInputEvents",value:function(){var t=this;this.inputs.forEach((function(e){e.addEventListener("focus",t.handleFocus)}))}},{key:"removeInputEvents",value:function(){var t=this;this.inputs.forEach((function(e){e.removeEventListener("focus",t.handleFocus)}))}},{key:"inputs",get:function(){if(0!==this.cachedInputs.length)return this.cachedInputs;var t=a.default.findAllInputs(this.holder);return this.inputIndex>t.length-1&&(this.inputIndex=t.length-1),this.cachedInputs=t,t}},{key:"currentInput",get:function(){return this.inputs[this.inputIndex]},set:function(t){var e=this.inputs.findIndex((function(e){return e===t||e.contains(t)}));-1!==e&&(this.inputIndex=e)}},{key:"firstInput",get:function(){return this.inputs[0]}},{key:"lastInput",get:function(){var t=this.inputs;return t[t.length-1]}},{key:"nextInput",get:function(){return this.inputs[this.inputIndex+1]}},{key:"previousInput",get:function(){return this.inputs[this.inputIndex-1]}},{key:"data",get:function(){return this.save().then((function(t){return t&&!s.isEmpty(t.data)?t.data:{}}))}},{key:"sanitize",get:function(){return this.tool.sanitize}},{key:"isEmpty",get:function(){var t=a.default.isEmpty(this.pluginsContent),e=!this.hasMedia;return t&&e}},{key:"hasMedia",get:function(){return!!this.holder.querySelector(["img","iframe","video","audio","source","input","textarea","twitterwidget"].join(","))}},{key:"focused",set:function(e){this.holder.classList.toggle(t.CSS.focused,e)},get:function(){return this.holder.classList.contains(t.CSS.focused)}},{key:"selected",set:function(e){e?this.holder.classList.add(t.CSS.selected):this.holder.classList.remove(t.CSS.selected)},get:function(){return this.holder.classList.contains(t.CSS.selected)}},{key:"stretched",set:function(e){this.holder.classList.toggle(t.CSS.wrapperStretched,e)},get:function(){return this.holder.classList.contains(t.CSS.wrapperStretched)}},{key:"dropTarget",set:function(e){this.holder.classList.toggle(t.CSS.dropTarget,e)}},{key:"pluginsContent",get:function(){var e=this.holder.querySelector(".".concat(t.CSS.content));if(e&&e.childNodes.length)for(var n=e.childNodes.length-1;n>=0;n--){var o=e.childNodes[n];if(!a.default.isExtensionNode(o))return o}return null}}],[{key:"CSS",get:function(){return{wrapper:"ce-block",wrapperStretched:"ce-block--stretched",content:"ce-block__content",focused:"ce-block--focused",selected:"ce-block--selected",dropTarget:"ce-block--drop-target"}}}]),t}();t.default=g,g.displayName="Block"})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(36);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var o=n(36),r=n(14)("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:i?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var o=n(11),r=n(31),i=n(14)("species");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||null==(n=o(a)[i])?e:r(n)}},function(t,e,n){var o=n(364),r=n(365),i=n(141),a=n(366);t.exports=function(t){return o(t)||r(t)||i(t)||a()}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(21),n(22),n(52),n(2),n(3),n(5),n(6),n(4),n(374),n(7),n(8),n(375),n(376),n(377),n(378)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a,s,c,l,u,f,d,p,h,v,y,g){"use strict";var b=n(13),m=n(1);function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.ToolType=t.default=void 0,e=m(e),o=m(o),r=m(r),i=m(i),a=m(a),s=m(s),c=m(c),l=m(l),u=m(u),f=m(f),d=m(d),p=b(p),h=m(h),v=m(v),y=m(y),g=m(g);var x,S=function(t){(0,c.default)(b,t);var n,d=(n=b,function(){var t,e=(0,u.default)(n);if(k()){var o=(0,u.default)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return(0,l.default)(this,t)});function b(t){var e,n=t.config;return(0,a.default)(this,b),(e=d.call(this,{config:n})).stubTool="stub",e.toolsClasses={},e.toolsAvailable={},e.toolsUnavailable={},e.toolsSettings={},e._inlineTools={},e.toolsClasses={},e.toolsSettings={},e.toolsAvailable={},e.toolsUnavailable={},e._inlineTools=null,e}return(0,s.default)(b,[{key:"prepare",value:function(){var t=this;if(this.validateTools(),this.config.tools=p.deepMerge({},this.internalTools,this.config.tools),!Object.prototype.hasOwnProperty.call(this.config,"tools")||0===Object.keys(this.config.tools).length)throw Error("Can't start without tools");for(var e in this.config.tools)"object"===(0,i.default)(this.config.tools[e])?(this.toolsClasses[e]=this.config.tools[e].class,this.toolsSettings[e]=this.config.tools[e],delete this.toolsSettings[e].class):(this.toolsClasses[e]=this.config.tools[e],this.toolsSettings[e]={class:this.config.tools[e]});var n=this.getListOfPrepareFunctions();return 0===n.length?Promise.resolve():p.sequence(n,(function(e){t.success(e)}),(function(e){t.fallback(e)}))}},{key:"success",value:function(t){this.toolsAvailable[t.toolName]=this.toolsClasses[t.toolName]}},{key:"fallback",value:function(t){this.toolsUnavailable[t.toolName]=this.toolsClasses[t.toolName]}},{key:"constructInline",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o={api:this.Editor.API.getMethodsForTool(e),config:n[this.USER_SETTINGS.CONFIG]||{}};return new t(o)}},{key:"isDefault",value:function(t){return t instanceof this.available[this.config.defaultBlock]}},{key:"getToolSettings",value:function(t){var e=this.toolsSettings[t],n=e[this.USER_SETTINGS.CONFIG]||{};return t!==this.config.defaultBlock||n.placeholder||(n.placeholder=this.config.placeholder,e[this.USER_SETTINGS.CONFIG]=n),e}},{key:"isReadOnlySupported",value:function(t){return!0===t[this.INTERNAL_SETTINGS.IS_READ_ONLY_SUPPORTED]}},{key:"destroy",value:function(){Object.values(this.available).forEach(function(){var t=(0,r.default)(o.default.mark((function t(e){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!p.isFunction(e.reset)){t.next=3;break}return t.next=3,e.reset();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getListOfPrepareFunctions",value:function(){var t=[];for(var e in this.toolsClasses)if(Object.prototype.hasOwnProperty.call(this.toolsClasses,e)){var n=this.toolsClasses[e],o=this.toolsSettings[e][this.USER_SETTINGS.CONFIG];t.push({function:p.isFunction(n.prepare)?n.prepare:function(){},data:{toolName:e,config:o}})}return t}},{key:"validateTools",value:function(){for(var t in this.config.tools)if(Object.prototype.hasOwnProperty.call(this.config.tools,t)){if(t in this.internalTools)return;var e=this.config.tools[t];if(!p.isFunction(e)&&!p.isFunction(e.class))throw Error("Tool «".concat(t,"» must be a constructor function or an object with function in the «class» property"))}}},{key:"available",get:function(){return this.toolsAvailable}},{key:"unavailable",get:function(){return this.toolsUnavailable}},{key:"inline",get:function(){var t=this;if(this._inlineTools)return this._inlineTools;var n=Object.entries(this.available).filter((function(n){var o=(0,e.default)(n,2),r=o[0],i=o[1];if(!i[t.INTERNAL_SETTINGS.IS_INLINE])return!1;var a=["render","surround","checkState"].filter((function(e){return!t.constructInline(i,r)[e]}));return!a.length||(p.log("Incorrect Inline Tool: ".concat(i.name,". Some of required methods is not implemented %o"),"warn",a),!1)})),o={};return n.forEach((function(t){var n=(0,e.default)(t,2),r=n[0],i=n[1];o[r]=i})),this._inlineTools=o,this._inlineTools}},{key:"blockTools",get:function(){var t=this,n=Object.entries(this.available).filter((function(n){return!(0,e.default)(n,2)[1][t.INTERNAL_SETTINGS.IS_INLINE]})),o={};return n.forEach((function(t){var n=(0,e.default)(t,2),r=n[0],i=n[1];o[r]=i})),o}},{key:"INTERNAL_SETTINGS",get:function(){return{IS_ENABLED_LINE_BREAKS:"enableLineBreaks",IS_INLINE:"isInline",TITLE:"title",SHORTCUT:"shortcut",TOOLBOX:"toolbox",SANITIZE_CONFIG:"sanitize",CONVERSION_CONFIG:"conversionConfig",IS_READ_ONLY_SUPPORTED:"isReadOnlySupported"}}},{key:"USER_SETTINGS",get:function(){return{SHORTCUT:"shortcut",TOOLBOX:"toolbox",ENABLED_INLINE_TOOLS:"inlineToolbar",CONFIG:"config"}}},{key:"internalTools",get:function(){return{bold:{class:h.default},italic:{class:v.default},link:{class:y.default},paragraph:{class:f.default,inlineToolbar:!0},stub:{class:g.default}}}}]),b}(d.default);t.default=S,S.displayName="Tools",t.ToolType=x,function(t){t[t.Block=0]="Block",t[t.Inline=1]="Inline",t[t.Tune=2]="Tune"}(x||(t.ToolType=x={}))})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(17),r=n(9),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(44)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var o=n(28),r=n(16),i=n(46);t.exports=function(t){return function(e,n,a){var s,c=o(e),l=r(c.length),u=i(a,l);if(t&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(36);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(14)("iterator"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],a=i[o]();a.next=function(){return{done:n=!0}},i[o]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var o=n(11);t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var o=n(64),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},function(t,e,n){"use strict";n(129);var o=n(23),r=n(27),i=n(10),a=n(37),s=n(14),c=n(104),l=s("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=s(t),p=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=p?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e})):void 0;if(!p||!h||"replace"===t&&!u||"split"===t&&!f){var v=/./[d],y=n(a,d,""[t],(function(t,e,n,o,r){return e.exec===c?p&&!r?{done:!0,value:v.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}})),g=y[0],b=y[1];o(String.prototype,t,g),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},function(t,e,n){var o=n(30),r=n(124),i=n(99),a=n(11),s=n(16),c=n(101),l={},u={};(e=t.exports=function(t,e,n,f,d){var p,h,v,y,g=d?function(){return t}:c(t),b=o(n,f,e?2:1),m=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(p=s(t.length);p>m;m++)if((y=e?b(a(h=t[m])[0],h[1]):b(t[m]))===l||y===u)return y}else for(v=g.call(t);!(h=v.next()).done;)if((y=r(v,b,h.value,e))===l||y===u)return y}).BREAK=l,e.RETURN=u},function(t,e,n){var o=n(9).navigator;t.exports=o&&o.userAgent||""},function(t,e,n){"use strict";var o=n(9),r=n(0),i=n(23),a=n(58),s=n(41),c=n(76),l=n(57),u=n(12),f=n(10),d=n(72),p=n(53),h=n(90);t.exports=function(t,e,n,v,y,g){var b=o[t],m=b,k=y?"set":"add",x=m&&m.prototype,S={},w=function(t){var e=x[t];i(x,t,"delete"==t||"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof m&&(g||x.forEach&&!f((function(){(new m).entries().next()})))){var E=new m,T=E[k](g?{}:-0,1)!=E,C=f((function(){E.has(1)})),B=d((function(t){new m(t)})),_=!g&&f((function(){for(var t=new m,e=5;e--;)t[k](e,e);return!t.has(-0)}));B||((m=e((function(e,n){l(e,m,t);var o=h(new b,e,m);return null!=n&&c(n,y,o[k],o),o}))).prototype=x,x.constructor=m),(C||_)&&(w("delete"),w("has"),y&&w("get")),(_||T)&&w(k),g&&x.clear&&delete x.clear}else m=v.getConstructor(e,t,y,k),a(m.prototype,n),s.NEED=!0;return p(m,t),S[t]=m,r(r.G+r.W+r.F*(m!=b),S),g||v.setStrong(m,t,y),m}},function(t,e,n){for(var o,r=n(9),i=n(27),a=n(43),s=a("typed_array"),c=a("view"),l=!(!r.ArrayBuffer||!r.DataView),u=l,f=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(o=r[d[f++]])?(i(o.prototype,s,!0),i(o.prototype,c,!0)):u=!1;t.exports={ABV:l,CONSTR:u,TYPED:s,VIEW:c}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(67)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"getMethodsForTool",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.ToolType.Block;return Object.assign(this.methods,{i18n:this.Editor.I18nAPI.getMethodsForTool(t,e)})}},{key:"methods",get:function(){return{blocks:this.Editor.BlocksAPI.methods,caret:this.Editor.CaretAPI.methods,events:this.Editor.EventsAPI.methods,listeners:this.Editor.ListenersAPI.methods,notifier:this.Editor.NotifierAPI.methods,sanitizer:this.Editor.SanitizerAPI.methods,saver:this.Editor.SaverAPI.methods,selection:this.Editor.SelectionAPI.methods,styles:this.Editor.StylesAPI.classes,toolbar:this.Editor.ToolbarAPI.methods,inlineToolbar:this.Editor.InlineToolbarAPI.methods,tooltip:this.Editor.TooltipAPI.methods,i18n:this.Editor.I18nAPI.methods,readOnly:this.Editor.ReadOnlyAPI.methods}}}]),o}((l=f(l)).default);o.default=p,p.displayName="API",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8),n(59),n(82)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(13),v=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),c=v(c),l=v(l),u=v(u),f=h(f),d=v(d);var g=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(y()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"toggleReadOnly",value:function(t){t?(this.destroy(),this.disableModuleBindings()):(this.drawUI(),this.enableModuleBindings())}},{key:"move",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&(this.Editor.Toolbox.close(),this.Editor.BlockSettings.close());var e=this.Editor.BlockManager.currentBlock.holder;if(e){var n=this.Editor.UI.isMobile,o=e.offsetHeight,r=e.offsetTop;if(n)r+=o;else{var i=Math.floor(o/2);this.nodes.plusButton.style.transform="translate3d(0, calc(".concat(i,"px - 50%), 0)"),this.Editor.Toolbox.nodes.toolbox.style.transform="translate3d(0, calc(".concat(i,"px - 50%), 0)")}this.nodes.wrapper.style.transform="translate3D(0, ".concat(Math.floor(r),"px, 0)")}}},{key:"open",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];f.delay((function(){t.move(n),t.nodes.wrapper.classList.add(t.CSS.toolbarOpened),e?t.blockActions.show():t.blockActions.hide()}),50)()}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened),this.blockActions.hide(),this.Editor.Toolbox.close(),this.Editor.BlockSettings.close()}},{key:"make",value:function(){var t=this;this.nodes.wrapper=u.default.make("div",this.CSS.toolbar),["content","actions"].forEach((function(e){t.nodes[e]=u.default.make("div",t.CSS[e])})),u.default.append(this.nodes.wrapper,this.nodes.content),u.default.append(this.nodes.content,this.nodes.actions),this.nodes.plusButton=u.default.make("div",this.CSS.plusButton),u.default.append(this.nodes.plusButton,u.default.svg("plus",14,14)),u.default.append(this.nodes.content,this.nodes.plusButton),this.readOnlyMutableListeners.on(this.nodes.plusButton,"click",(function(){t.plusButtonClicked()}),!1);var e=u.default.make("div");e.appendChild(document.createTextNode(d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox,"Add"))),e.appendChild(u.default.make("div",this.CSS.plusButtonShortcut,{textContent:"⇥ Tab"})),this.Editor.Tooltip.onHover(this.nodes.plusButton,e),this.nodes.blockActionsButtons=u.default.make("div",this.CSS.blockActionsButtons),this.nodes.settingsToggler=u.default.make("span",this.CSS.settingsToggler);var n=u.default.svg("dots",8,8);u.default.append(this.nodes.settingsToggler,n),u.default.append(this.nodes.blockActionsButtons,this.nodes.settingsToggler),u.default.append(this.nodes.actions,this.nodes.blockActionsButtons),this.Editor.Tooltip.onHover(this.nodes.settingsToggler,d.default.ui(p.I18nInternalNS.ui.blockTunes.toggler,"Click to tune"),{placement:"top"}),u.default.append(this.nodes.content,this.Editor.Toolbox.nodes.toolbox),u.default.append(this.nodes.actions,this.Editor.BlockSettings.nodes.wrapper),u.default.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper)}},{key:"plusButtonClicked",value:function(){this.Editor.Toolbox.toggle()}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(this.nodes.settingsToggler,"click",(function(){t.settingsTogglerClicked()}))}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"settingsTogglerClicked",value:function(){this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.BlockSettings.open()}},{key:"drawUI",value:function(){this.Editor.BlockSettings.make(),this.Editor.Toolbox.make(),this.make()}},{key:"destroy",value:function(){this.Editor.Toolbox.destroy(),this.Editor.BlockSettings.destroy(),this.removeAllNodes()}},{key:"CSS",get:function(){return{toolbar:"ce-toolbar",content:"ce-toolbar__content",actions:"ce-toolbar__actions",actionsOpened:"ce-toolbar__actions--opened",toolbarOpened:"ce-toolbar--opened",plusButton:"ce-toolbar__plus",plusButtonShortcut:"ce-toolbar__plus-shortcut",plusButtonHidden:"ce-toolbar__plus--hidden",blockActionsButtons:"ce-toolbar__actions-buttons",settingsToggler:"ce-toolbar__settings-btn"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened)}},{key:"plusButton",get:function(){var t=this;return{hide:function(){return t.nodes.plusButton.classList.add(t.CSS.plusButtonHidden)},show:function(){t.Editor.Toolbox.isEmpty||t.nodes.plusButton.classList.remove(t.CSS.plusButtonHidden)}}}},{key:"blockActions",get:function(){var t=this;return{hide:function(){t.nodes.actions.classList.remove(t.CSS.actionsOpened)},show:function(){t.nodes.actions.classList.add(t.CSS.actionsOpened)}}}}]),o}(l.default);o.default=g,g.displayName="Toolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(143),n(8)],void 0===(i="function"==typeof(o=function(t,e,o,r){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nInternalNS=void 0,e=i(e);var a=function t(n,o){var i={};return Object.entries(n).forEach((function(n){var a=(0,e.default)(n,2),s=a[0],c=a[1];if("object"!==(0,r.typeOf)(c))i[s]=c;else{var l=o?"".concat(o,".").concat(s):s,u=Object.values(c).every((function(t){return"string"===(0,r.typeOf)(t)}));i[s]=u?l:t(c,l)}})),i}((o=i(o)).default);t.I18nInternalNS=a})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(12),r=n(9).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){e.f=n(14)},function(t,e,n){var o=n(68)("keys"),r=n(43);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(9).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(12),r=n(11),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(30)(Function.call,n(33).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var o=n(12),r=n(88).set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&o(i)&&r&&r(t,i),t}},function(t,e,n){"use strict";var o=n(32),r=n(37);t.exports=function(t){var e=String(r(this)),n="",i=o(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},function(t,e,n){var o=n(32),r=n(37);t.exports=function(t){return function(e,n){var i,a,s=String(r(e)),c=o(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var o=n(44),r=n(0),i=n(23),a=n(27),s=n(55),c=n(123),l=n(53),u=n(49),f=n(14)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,h,v,y,g){c(n,e,h);var b,m,k,x=function(t){if(!d&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",w="values"==v,E=!1,T=t.prototype,C=T[f]||T["@@iterator"]||v&&T[v],B=C||x(v),_=v?w?x("entries"):B:void 0,O="Array"==e&&T.entries||C;if(O&&(k=u(O.call(new t)))!==Object.prototype&&k.next&&(l(k,S,!0),o||"function"==typeof k[f]||a(k,f,p)),w&&C&&"values"!==C.name&&(E=!0,B=function(){return C.call(this)}),o&&!g||!d&&!E&&T[f]||a(T,f,B),s[e]=B,s[S]=p,v)if(b={values:w?B:x("values"),keys:y?B:x("keys"),entries:_},g)for(m in b)m in T||i(T,m,b[m]);else r(r.P+r.F*(d||E),e,b);return b}},function(t,e,n){var o=n(97),r=n(37);t.exports=function(t,e,n){if(o(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},function(t,e,n){var o=n(12),r=n(36),i=n(14)("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},function(t,e,n){var o=n(14)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){var o=n(55),r=n(14)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},function(t,e,n){"use strict";var o=n(19),r=n(42);t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var o=n(64),r=n(14)("iterator"),i=n(55);t.exports=n(17).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||i[o(t)]}},function(t,e,n){"use strict";var o=n(20),r=n(46),i=n(16);t.exports=function(t){for(var e=o(this),n=i(e.length),a=arguments.length,s=r(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,l=void 0===c?n:r(c,n);l>s;)e[s++]=t;return e}},function(t,e,n){"use strict";var o=n(50),r=n(128),i=n(55),a=n(28);t.exports=n(95)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){"use strict";var o,r,i=n(73),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,l=(o=/a/,r=/b*/g,a.call(o,"a"),a.call(r,"a"),0!==o.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(c=function(t){var e,n,o,r,c=this;return u&&(n=new RegExp("^"+c.source+"$(?!\\s)",i.call(c))),l&&(e=c.lastIndex),o=a.call(c,t),l&&o&&(c.lastIndex=c.global?o.index+o[0].length:e),u&&o&&o.length>1&&s.call(o[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(o[r]=void 0)})),o}),t.exports=c},function(t,e,n){"use strict";var o=n(94)(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},function(t,e,n){var o,r,i,a=n(30),s=n(117),c=n(87),l=n(83),u=n(9),f=u.process,d=u.setImmediate,p=u.clearImmediate,h=u.MessageChannel,v=u.Dispatch,y=0,g={},b=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},m=function(t){b.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++y]=function(){s("function"==typeof t?t:Function(t),e)},o(y),y},p=function(t){delete g[t]},"process"==n(36)(f)?o=function(t){f.nextTick(a(b,t,1))}:v&&v.now?o=function(t){v.now(a(b,t,1))}:h?(i=(r=new h).port2,r.port1.onmessage=m,o=a(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function(t){u.postMessage(t+"","*")},u.addEventListener("message",m,!1)):o="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),b.call(t)}}:function(t){setTimeout(a(b,t,1),0)}),t.exports={set:d,clear:p}},function(t,e,n){"use strict";var o=n(9),r=n(18),i=n(44),a=n(79),s=n(27),c=n(58),l=n(10),u=n(57),f=n(32),d=n(16),p=n(136),h=n(48).f,v=n(19).f,y=n(102),g=n(53),b=o.ArrayBuffer,m=o.DataView,k=o.Math,x=o.RangeError,S=o.Infinity,w=b,E=k.abs,T=k.pow,C=k.floor,B=k.log,_=k.LN2,O=r?"_b":"buffer",I=r?"_l":"byteLength",N=r?"_o":"byteOffset";function R(t,e,n){var o,r,i,a=new Array(n),s=8*n-e-1,c=(1<<s)-1,l=c>>1,u=23===e?T(2,-24)-T(2,-77):0,f=0,d=t<0||0===t&&1/t<0?1:0;for((t=E(t))!=t||t===S?(r=t!=t?1:0,o=c):(o=C(B(t)/_),t*(i=T(2,-o))<1&&(o--,i*=2),(t+=o+l>=1?u/i:u*T(2,1-l))*i>=2&&(o++,i/=2),o+l>=c?(r=0,o=c):o+l>=1?(r=(t*i-1)*T(2,e),o+=l):(r=t*T(2,l-1)*T(2,e),o=0));e>=8;a[f++]=255&r,r/=256,e-=8);for(o=o<<e|r,s+=e;s>0;a[f++]=255&o,o/=256,s-=8);return a[--f]|=128*d,a}function M(t,e,n){var o,r=8*n-e-1,i=(1<<r)-1,a=i>>1,s=r-7,c=n-1,l=t[c--],u=127&l;for(l>>=7;s>0;u=256*u+t[c],c--,s-=8);for(o=u&(1<<-s)-1,u>>=-s,s+=e;s>0;o=256*o+t[c],c--,s-=8);if(0===u)u=1-a;else{if(u===i)return o?NaN:l?-S:S;o+=T(2,e),u-=a}return(l?-1:1)*o*T(2,u-e)}function L(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function A(t){return[255&t]}function P(t){return[255&t,t>>8&255]}function D(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function j(t){return R(t,52,8)}function F(t){return R(t,23,4)}function U(t,e,n){v(t.prototype,e,{get:function(){return this[n]}})}function H(t,e,n,o){var r=p(+n);if(r+e>t[I])throw x("Wrong index!");var i=t[O]._b,a=r+t[N],s=i.slice(a,a+e);return o?s:s.reverse()}function z(t,e,n,o,r,i){var a=p(+n);if(a+e>t[I])throw x("Wrong index!");for(var s=t[O]._b,c=a+t[N],l=o(+r),u=0;u<e;u++)s[c+u]=l[i?u:e-u-1]}if(a.ABV){if(!l((function(){b(1)}))||!l((function(){new b(-1)}))||l((function(){return new b,new b(1.5),new b(NaN),"ArrayBuffer"!=b.name}))){for(var W,G=(b=function(t){return u(this,b),new w(p(t))}).prototype=w.prototype,X=h(w),V=0;X.length>V;)(W=X[V++])in b||s(b,W,w[W]);i||(G.constructor=b)}var Y=new m(new b(2)),K=m.prototype.setInt8;Y.setInt8(0,2147483648),Y.setInt8(1,2147483649),!Y.getInt8(0)&&Y.getInt8(1)||c(m.prototype,{setInt8:function(t,e){K.call(this,t,e<<24>>24)},setUint8:function(t,e){K.call(this,t,e<<24>>24)}},!0)}else b=function(t){u(this,b,"ArrayBuffer");var e=p(t);this._b=y.call(new Array(e),0),this[I]=e},m=function(t,e,n){u(this,m,"DataView"),u(t,b,"DataView");var o=t[I],r=f(e);if(r<0||r>o)throw x("Wrong offset!");if(r+(n=void 0===n?o-r:d(n))>o)throw x("Wrong length!");this[O]=t,this[N]=r,this[I]=n},r&&(U(b,"byteLength","_l"),U(m,"buffer","_b"),U(m,"byteLength","_l"),U(m,"byteOffset","_o")),c(m.prototype,{getInt8:function(t){return H(this,1,t)[0]<<24>>24},getUint8:function(t){return H(this,1,t)[0]},getInt16:function(t){var e=H(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=H(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return L(H(this,4,t,arguments[1]))},getUint32:function(t){return L(H(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return M(H(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return M(H(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){z(this,1,t,A,e)},setUint8:function(t,e){z(this,1,t,A,e)},setInt16:function(t,e){z(this,2,t,P,e,arguments[2])},setUint16:function(t,e){z(this,2,t,P,e,arguments[2])},setInt32:function(t,e){z(this,4,t,D,e,arguments[2])},setUint32:function(t,e){z(this,4,t,D,e,arguments[2])},setFloat32:function(t,e){z(this,4,t,F,e,arguments[2])},setFloat64:function(t,e){z(this,8,t,j,e,arguments[2])}});g(b,"ArrayBuffer"),g(m,"DataView"),s(m.prototype,a.VIEW,!0),e.ArrayBuffer=b,e.DataView=m},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e,n){t.exports=!n(18)&&!n(10)((function(){return 7!=Object.defineProperty(n(83)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(9),r=n(17),i=n(44),a=n(84),s=n(19).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){var o=n(26),r=n(28),i=n(69)(!1),a=n(85)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),c=0,l=[];for(n in s)n!=a&&o(s,n)&&l.push(n);for(;e.length>c;)o(s,n=e[c++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){var o=n(19),r=n(11),i=n(45);t.exports=n(18)?Object.defineProperties:function(t,e){r(t);for(var n,a=i(e),s=a.length,c=0;s>c;)o.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var o=n(28),r=n(48).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return r(t)}catch(t){return a.slice()}}(t):r(o(t))}},function(t,e,n){"use strict";var o=n(18),r=n(45),i=n(70),a=n(63),s=n(20),c=n(62),l=Object.assign;t.exports=!l||n(10)((function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=o}))?function(t,e){for(var n=s(t),l=arguments.length,u=1,f=i.f,d=a.f;l>u;)for(var p,h=c(arguments[u++]),v=f?r(h).concat(f(h)):r(h),y=v.length,g=0;y>g;)p=v[g++],o&&!d.call(h,p)||(n[p]=h[p]);return n}:l},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){"use strict";var o=n(31),r=n(12),i=n(117),a=[].slice,s={},c=function(t,e,n){if(!(e in s)){for(var o=[],r=0;r<e;r++)o[r]="a["+r+"]";s[e]=Function("F,a","return new F("+o.join(",")+")")}return s[e](t,n)};t.exports=Function.bind||function(t){var e=o(this),n=a.call(arguments,1),s=function(){var o=n.concat(a.call(arguments));return this instanceof s?c(e,o.length,o):i(e,o,t)};return r(e.prototype)&&(s.prototype=e.prototype),s}},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var o=n(9).parseInt,r=n(54).trim,i=n(89),a=/^[-+]?0[xX]/;t.exports=8!==o(i+"08")||22!==o(i+"0x16")?function(t,e){var n=r(String(t),3);return o(n,e>>>0||(a.test(n)?16:10))}:o},function(t,e,n){var o=n(9).parseFloat,r=n(54).trim;t.exports=1/o(n(89)+"-0")!=-1/0?function(t){var e=r(String(t),3),n=o(e);return 0===n&&"-"==e.charAt(0)?-0:n}:o},function(t,e,n){var o=n(36);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=o(t))throw TypeError(e);return+t}},function(t,e,n){var o=n(12),r=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&r(t)===t}},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,e,n){"use strict";var o=n(47),r=n(42),i=n(53),a={};n(27)(a,n(14)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(a,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var o=n(11);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},function(t,e,n){var o=n(278);t.exports=function(t,e){return new(o(t))(e)}},function(t,e,n){var o=n(31),r=n(20),i=n(62),a=n(16);t.exports=function(t,e,n,s,c){o(e);var l=r(t),u=i(l),f=a(l.length),d=c?f-1:0,p=c?-1:1;if(n<2)for(;;){if(d in u){s=u[d],d+=p;break}if(d+=p,c?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;c?d>=0:f>d;d+=p)d in u&&(s=e(s,u[d],d,l));return s}},function(t,e,n){"use strict";var o=n(20),r=n(46),i=n(16);t.exports=[].copyWithin||function(t,e){var n=o(this),a=i(n.length),s=r(t,a),c=r(e,a),l=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===l?a:r(l,a))-c,a-s),f=1;for(c<s&&s<c+u&&(f=-1,c+=u-1,s+=u-1);u-- >0;)c in n?n[s]=n[c]:delete n[s],s+=f,c+=f;return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var o=n(104);n(0)({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},function(t,e,n){n(18)&&"g"!=/./g.flags&&n(19).f(RegExp.prototype,"flags",{configurable:!0,get:n(73)})},function(t,e,n){"use strict";var o,r,i,a,s=n(44),c=n(9),l=n(30),u=n(64),f=n(0),d=n(12),p=n(31),h=n(57),v=n(76),y=n(65),g=n(106).set,b=n(298)(),m=n(132),k=n(299),x=n(77),S=n(133),w=c.TypeError,E=c.process,T=E&&E.versions,C=T&&T.v8||"",B=c.Promise,_="process"==u(E),O=function(){},I=r=m.f,N=!!function(){try{var t=B.resolve(1),e=(t.constructor={})[n(14)("species")]=function(t){t(O,O)};return(_||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof e&&0!==C.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},M=function(t,e){if(!t._n){t._n=!0;var n=t._c;b((function(){for(var o=t._v,r=1==t._s,i=0,a=function(e){var n,i,a,s=r?e.ok:e.fail,c=e.resolve,l=e.reject,u=e.domain;try{s?(r||(2==t._h&&P(t),t._h=1),!0===s?n=o:(u&&u.enter(),n=s(o),u&&(u.exit(),a=!0)),n===e.promise?l(w("Promise-chain cycle")):(i=R(n))?i.call(n,c,l):c(n)):l(o)}catch(t){u&&!a&&u.exit(),l(t)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&L(t)}))}},L=function(t){g.call(c,(function(){var e,n,o,r=t._v,i=A(t);if(i&&(e=k((function(){_?E.emit("unhandledRejection",r,t):(n=c.onunhandledrejection)?n({promise:t,reason:r}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",r)})),t._h=_||A(t)?2:1),t._a=void 0,i&&e.e)throw e.v}))},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},P=function(t){g.call(c,(function(){var e;_?E.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},D=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),M(e,!0))},j=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw w("Promise can't be resolved itself");(e=R(t))?b((function(){var o={_w:n,_d:!1};try{e.call(t,l(j,o,1),l(D,o,1))}catch(t){D.call(o,t)}})):(n._v=t,n._s=1,M(n,!1))}catch(t){D.call({_w:n,_d:!1},t)}}};N||(B=function(t){h(this,B,"Promise","_h"),p(t),o.call(this);try{t(l(j,this,1),l(D,this,1))}catch(t){D.call(this,t)}},(o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(58)(B.prototype,{then:function(t,e){var n=I(y(this,B));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=_?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&M(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new o;this.promise=t,this.resolve=l(j,t,1),this.reject=l(D,t,1)},m.f=I=function(t){return t===B||t===a?new i(t):r(t)}),f(f.G+f.W+f.F*!N,{Promise:B}),n(53)(B,"Promise"),n(56)("Promise"),a=n(17).Promise,f(f.S+f.F*!N,"Promise",{reject:function(t){var e=I(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!N),"Promise",{resolve:function(t){return S(s&&this===a?B:this,t)}}),f(f.S+f.F*!(N&&n(72)((function(t){B.all(t).catch(O)}))),"Promise",{all:function(t){var e=this,n=I(e),o=n.resolve,r=n.reject,i=k((function(){var n=[],i=0,a=1;v(t,!1,(function(t){var s=i++,c=!1;n.push(void 0),a++,e.resolve(t).then((function(t){c||(c=!0,n[s]=t,--a||o(n))}),r)})),--a||o(n)}));return i.e&&r(i.v),n.promise},race:function(t){var e=this,n=I(e),o=n.reject,r=k((function(){v(t,!1,(function(t){e.resolve(t).then(n.resolve,o)}))}));return r.e&&o(r.v),n.promise}})},function(t,e,n){"use strict";var o=n(31);function r(t){var e,n;this.promise=new t((function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o})),this.resolve=o(e),this.reject=o(n)}t.exports.f=function(t){return new r(t)}},function(t,e,n){var o=n(11),r=n(12),i=n(132);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var o=n(19).f,r=n(47),i=n(58),a=n(30),s=n(57),c=n(76),l=n(95),u=n(128),f=n(56),d=n(18),p=n(41).fastKey,h=n(51),v=d?"_s":"size",y=function(t,e){var n,o=p(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,o){s(t,u,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[v]=0,null!=o&&c(o,n,t[l],t)}));return i(u.prototype,{clear:function(){for(var t=h(this,e),n=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete n[o.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=h(this,e),o=y(n,t);if(o){var r=o.n,i=o.p;delete n._i[o.i],o.r=!0,i&&(i.n=r),r&&(r.p=i),n._f==o&&(n._f=r),n._l==o&&(n._l=i),n[v]--}return!!o},forEach:function(t){h(this,e);for(var n,o=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!y(h(this,e),t)}}),d&&o(u.prototype,"size",{get:function(){return h(this,e)[v]}}),u},def:function(t,e,n){var o,r,i=y(t,e);return i?i.v=n:(t._l=i={i:r=p(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=i),o&&(o.n=i),t[v]++,"F"!==r&&(t._i[r]=i)),t},getEntry:y,setStrong:function(t,e,n){l(t,e,(function(t,n){this._t=h(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),f(e)}}},function(t,e,n){"use strict";var o=n(58),r=n(41).getWeak,i=n(11),a=n(12),s=n(57),c=n(76),l=n(35),u=n(26),f=n(51),d=l(5),p=l(6),h=0,v=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},g=function(t,e){return d(t.a,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=g(this,t);if(e)return e[1]},has:function(t){return!!g(this,t)},set:function(t,e){var n=g(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=p(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,i){var l=t((function(t,o){s(t,l,e,"_i"),t._t=e,t._i=h++,t._l=void 0,null!=o&&c(o,n,t[i],t)}));return o(l.prototype,{delete:function(t){if(!a(t))return!1;var n=r(t);return!0===n?v(f(this,e)).delete(t):n&&u(n,this._i)&&delete n[this._i]},has:function(t){if(!a(t))return!1;var n=r(t);return!0===n?v(f(this,e)).has(t):n&&u(n,this._i)}}),l},def:function(t,e,n){var o=r(i(e),!0);return!0===o?v(t).set(e,n):o[t._i]=n,t},ufstore:v}},function(t,e,n){var o=n(32),r=n(16);t.exports=function(t){if(void 0===t)return 0;var e=o(t),n=r(e);if(e!==n)throw RangeError("Wrong length!");return n}},function(t,e,n){var o=n(48),r=n(70),i=n(11),a=n(9).Reflect;t.exports=a&&a.ownKeys||function(t){var e=o.f(i(t)),n=r.f;return n?e.concat(n(t)):e}},function(t,e,n){var o=n(16),r=n(91),i=n(37);t.exports=function(t,e,n,a){var s=String(i(t)),c=s.length,l=void 0===n?" ":String(n),u=o(e);if(u<=c||""==l)return s;var f=u-c,d=r.call(l,Math.ceil(f/l.length));return d.length>f&&(d=d.slice(0,f)),a?d+s:s+d}},function(t,e,n){var o=n(18),r=n(45),i=n(28),a=n(63).f;t.exports=function(t){return function(e){for(var n,s=i(e),c=r(s),l=c.length,u=0,f=[];l>u;)n=c[u++],o&&!a.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}}},function(t,e,n){var o=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,n,o){var r=e&&e.prototype instanceof u?e:u,i=Object.create(r.prototype),a=new S(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return E()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=m(a,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var u=c(t,e,n);if("normal"===u.type){if(o=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function u(){}function f(){}function d(){}var p={};p[r]=function(){return this};var h=Object.getPrototypeOf,v=h&&h(h(w([])));v&&v!==e&&n.call(v,r)&&(p=v);var y=d.prototype=u.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(t,e){var o;this._invoke=function(r,i){function a(){return new e((function(o,a){!function o(r,i,a,s){var l=c(t[r],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(l.arg)}(r,i,o,a)}))}return o=o?o.then(a,a):a()}}function m(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,m(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var o=c(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,l;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function w(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=y.constructor=d,d.constructor=f,d[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new b(s(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[a]="Generator",y[r]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=w,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:w(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}},function(t,e,n){var o=n(142);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},function(t){t.exports=JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}')},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(5),n(6),n(4),n(369)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a){"use strict";var s=n(1);function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.CriticalError=void 0,e=s(e),o=s(o),r=s(r),i=s(i);var l=function(t){(0,o.default)(s,t);var n,a=(n=s,function(){var t,e=(0,i.default)(n);if(c()){var o=(0,i.default)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return(0,r.default)(this,t)});function s(){return(0,e.default)(this,s),a.apply(this,arguments)}return s}((0,(a=s(a)).default)(Error));t.CriticalError=l,l.displayName="CriticalError"})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(8),n(146),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f){"use strict";var d=n(13),p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=d(l),u=p(u);var v=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(h()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).insert=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.config.defaultBlock,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3?arguments[3]:void 0),r=arguments.length>4?arguments[4]:void 0;t.Editor.BlockManager.insert({tool:e,data:n,index:o,needToFocus:r})},t}return(0,i.default)(o,[{key:"getBlocksCount",value:function(){return this.Editor.BlockManager.blocks.length}},{key:"getCurrentBlockIndex",value:function(){return this.Editor.BlockManager.currentBlockIndex}},{key:"getBlockByIndex",value:function(t){var e=this.Editor.BlockManager.getBlockByIndex(t);if(void 0!==e)return new u.default(e);l.logLabeled("There is no block at index `"+t+"`","warn")}},{key:"swap",value:function(t,e){l.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead","info"),this.Editor.BlockManager.swap(t,e),this.Editor.Toolbar.move(!1)}},{key:"move",value:function(t,e){this.Editor.BlockManager.move(t,e),this.Editor.Toolbar.move(!1)}},{key:"delete",value:function(t){try{this.Editor.BlockManager.removeBlock(t)}catch(t){return void l.logLabeled(t,"warn")}0===this.Editor.BlockManager.blocks.length&&this.Editor.BlockManager.insert(),this.Editor.BlockManager.currentBlock&&this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END),this.Editor.Toolbar.close()}},{key:"clear",value:function(){this.Editor.BlockManager.clear(!0),this.Editor.InlineToolbar.close()}},{key:"render",value:function(t){return this.Editor.BlockManager.clear(),this.Editor.Renderer.render(t.blocks)}},{key:"renderFromHTML",value:function(t){return this.Editor.BlockManager.clear(),this.Editor.Paste.processText(t,!0)}},{key:"stretchBlock",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.deprecationAssert(!0,"blocks.stretchBlock()","BlockAPI");var n=this.Editor.BlockManager.getBlockByIndex(t);n&&(n.stretched=e)}},{key:"insertNewBlock",value:function(){l.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.","warn"),this.insert()}},{key:"methods",get:function(){var t=this;return{clear:function(){return t.clear()},render:function(e){return t.render(e)},renderFromHTML:function(e){return t.renderFromHTML(e)},delete:function(e){return t.delete(e)},swap:function(e,n){return t.swap(e,n)},move:function(e,n){return t.move(e,n)},getBlockByIndex:function(e){return t.getBlockByIndex(e)},getCurrentBlockIndex:function(){return t.getCurrentBlockIndex()},getBlocksCount:function(){return t.getBlocksCount()},stretchBlock:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.stretchBlock(e,n)},insertNewBlock:function(){return t.insertNewBlock()},insert:this.insert}}}]),o}((f=p(f)).default);o.default=v,v.displayName="BlocksAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e],void 0===(i="function"==typeof(o=function(n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(t){var e={get name(){return t.name},get config(){return t.config},get holder(){return t.holder},get isEmpty(){return t.isEmpty},get selected(){return t.selected},set stretched(e){t.stretched=e},get stretched(){return t.stretched},call:function(e,n){return t.call(e,n)},save:function(){return t.save()},validate:function(e){return t.validate(e)}};Object.setPrototypeOf(this,e)};n.default=o,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).setToFirstBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.firstBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock,e,n),!0)},t.setToLastBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.lastBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock,e,n),!0)},t.setToPreviousBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.previousBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock,e,n),!0)},t.setToNextBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.nextBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock,e,n),!0)},t.setToBlock=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.Editor.Caret.positions.DEFAULT,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!!t.Editor.BlockManager.blocks[e]&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e],n,o),!0)},t.focus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?t.setToLastBlock(t.Editor.Caret.positions.END):t.setToFirstBlock(t.Editor.Caret.positions.START)},t}return(0,i.default)(o,[{key:"methods",get:function(){return{setToFirstBlock:this.setToFirstBlock,setToLastBlock:this.setToLastBlock,setToPreviousBlock:this.setToPreviousBlock,setToNextBlock:this.setToNextBlock,setToBlock:this.setToBlock,focus:this.focus}}}]),o}((l=u(l)).default);o.default=d,d.displayName="CaretAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"on",value:function(t,e){this.Editor.Events.on(t,e)}},{key:"emit",value:function(t,e){this.Editor.Events.emit(t,e)}},{key:"off",value:function(t,e){this.Editor.Events.off(t,e)}},{key:"methods",get:function(){var t=this;return{emit:function(e,n){return t.emit(e,n)},off:function(e,n){return t.off(e,n)},on:function(e,n){return t.on(e,n)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="EventsAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(59),n(67),n(8),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l);var v=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(h()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"getMethodsForTool",value:function(t,e){return Object.assign(this.methods,{t:function(n){return l.default.t(o.getNamespace(t,e),n)}})}},{key:"methods",get:function(){return{t:function(){(0,f.logLabeled)("I18n.t() method can be accessed only from Tools","warn")}}}}],[{key:"getNamespace",value:function(t,e){switch(e){case u.ToolType.Block:case u.ToolType.Inline:return"tools.".concat(t);case u.ToolType.Tune:return"blockTunes.".concat(t)}}}]),o}((d=p(d)).default);o.default=v,v.displayName="I18nAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"open",value:function(){this.Editor.InlineToolbar.tryToShow()}},{key:"close",value:function(){this.Editor.InlineToolbar.close()}},{key:"methods",get:function(){var t=this;return{close:function(){return t.close()},open:function(){return t.open()}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="InlineToolbarAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"on",value:function(t,e,n,o){this.Editor.Listeners.on(t,e,n,o)}},{key:"off",value:function(t,e,n,o){this.Editor.Listeners.off(t,e,n,o)}},{key:"methods",get:function(){var t=this;return{on:function(e,n,o,r){return t.on(e,n,o,r)},off:function(e,n,o,r){return t.off(e,n,o,r)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="ListenersAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"show",value:function(t){return this.Editor.Notifier.show(t)}},{key:"methods",get:function(){var t=this;return{show:function(e){return t.show(e)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="NotifierAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"toggle",value:function(t){return this.Editor.ReadOnly.toggle(t)}},{key:"methods",get:function(){var t=this;return{toggle:function(e){return t.toggle(e)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="ReadOnlyAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"clean",value:function(t,e){return this.Editor.Sanitizer.clean(t,e)}},{key:"methods",get:function(){var t=this;return{clean:function(e,n){return t.clean(e,n)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="SanitizerAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(8),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(13),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),c=d(c),l=f(l);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(p()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"save",value:function(){var t="Editor's content can not be saved in read-only mode";return this.Editor.ReadOnly.isEnabled?(l.logLabeled(t,"warn"),Promise.reject(new Error(t))):this.Editor.Saver.save()}},{key:"methods",get:function(){var t=this;return{save:function(){return t.save()}}}}]),o}((u=d(u)).default);o.default=h,h.displayName="SaverAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(25),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"findParentTag",value:function(t,e){return(new l.default).findParentTag(t,e)}},{key:"expandToTag",value:function(t){(new l.default).expandToTag(t)}},{key:"methods",get:function(){var t=this;return{findParentTag:function(e,n){return t.findParentTag(e,n)},expandToTag:function(e){return t.expandToTag(e)}}}}]),o}((u=f(u)).default);o.default=p,p.displayName="SelectionAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"classes",get:function(){return{block:"cdx-block",inlineToolButton:"ce-inline-tool",inlineToolButtonActive:"ce-inline-tool--active",input:"cdx-input",loader:"cdx-loader",button:"cdx-button",settingsButton:"cdx-settings-button",settingsButtonActive:"cdx-settings-button--active"}}}]),o}((l=u(l)).default);o.default=d,d.displayName="StylesAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"open",value:function(){this.Editor.Toolbar.open()}},{key:"close",value:function(){this.Editor.Toolbar.close()}},{key:"methods",get:function(){var t=this;return{close:function(){return t.close()},open:function(){return t.open()}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="ToolbarAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"show",value:function(t,e,n){this.Editor.Tooltip.show(t,e,n)}},{key:"hide",value:function(){this.Editor.Tooltip.hide()}},{key:"onHover",value:function(t,e,n){this.Editor.Tooltip.onHover(t,e,n)}},{key:"methods",get:function(){var t=this;return{show:function(e,n,o){return t.show(e,n,o)},hide:function(){return t.hide()},onHover:function(e,n,o){return t.onHover(e,n,o)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="TooltipAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(25),n(60)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(13),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=p(u),f=h(f),d=h(d);var y=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(v()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"keydown",value:function(t){switch(this.beforeKeydownProcessing(t),t.keyCode){case u.keyCodes.BACKSPACE:this.backspace(t);break;case u.keyCodes.ENTER:this.enter(t);break;case u.keyCodes.DOWN:case u.keyCodes.RIGHT:this.arrowRightAndDown(t);break;case u.keyCodes.UP:case u.keyCodes.LEFT:this.arrowLeftAndUp(t);break;case u.keyCodes.TAB:this.tabPressed(t)}}},{key:"beforeKeydownProcessing",value:function(t){this.needToolbarClosing(t)&&u.isPrintableKey(t.keyCode)&&(this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close(),t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||(this.Editor.BlockManager.clearFocused(),this.Editor.BlockSelection.clearSelection(t)))}},{key:"keyup",value:function(t){t.shiftKey||this.Editor.UI.checkEmptiness()}},{key:"tabPressed",value:function(t){this.Editor.BlockSelection.clearSelection(t);var e=this.Editor,n=e.BlockManager,o=e.Tools,r=e.InlineToolbar,i=e.ConversionToolbar,a=n.currentBlock;if(a){var s=o.isDefault(a.tool)&&a.isEmpty,c=!a.isEmpty&&i.opened,l=!a.isEmpty&&!f.default.isCollapsed&&r.opened;s?this.activateToolbox():c||l||this.activateBlockSettings()}}},{key:"dragOver",value:function(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!0}},{key:"dragLeave",value:function(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!1}},{key:"handleCommandC",value:function(t){var e=this.Editor.BlockSelection;e.anyBlockSelected&&e.copySelectedBlocks(t)}},{key:"handleCommandX",value:function(t){var e=this.Editor,n=e.BlockSelection,o=e.BlockManager,r=e.Caret;if(n.anyBlockSelected){n.copySelectedBlocks(t);var i=o.removeSelectedBlocks();r.setToBlock(o.insertDefaultBlockAtIndex(i,!0),r.positions.START),n.clearSelection(t)}}},{key:"enter",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.Tools,r=e.UI,i=n.currentBlock,a=o.available[i.name];if(!(a&&a[o.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS]||r.someToolbarOpened&&r.someFlipperButtonFocused||t.shiftKey)){var s=this.Editor.BlockManager.currentBlock;this.Editor.Caret.isAtStart&&!this.Editor.BlockManager.currentBlock.hasMedia?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex):s=this.Editor.BlockManager.split(),this.Editor.Caret.setToBlock(s),this.Editor.Tools.isDefault(s.tool)&&s.isEmpty&&(this.Editor.Toolbar.open(!1),this.Editor.Toolbar.plusButton.show()),t.preventDefault()}}},{key:"backspace",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret,i=n.currentBlock,a=this.Editor.Tools.available[i.name];if(i.selected||i.isEmpty&&i.currentInput===i.firstInput){t.preventDefault();var s=n.currentBlockIndex;return n.previousBlock&&0===n.previousBlock.inputs.length?n.removeBlock(s-1):n.removeBlock(),r.setToBlock(n.currentBlock,s?r.positions.END:r.positions.START),this.Editor.Toolbar.close(),void o.clearSelection(t)}if(!a||!a[this.Editor.Tools.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS]||r.isAtStart){var c=0===n.currentBlockIndex;r.isAtStart&&f.default.isCollapsed&&i.currentInput===i.firstInput&&!c&&(t.preventDefault(),this.mergeBlocks())}}},{key:"mergeBlocks",value:function(){var t=this.Editor,e=t.BlockManager,n=t.Caret,o=t.Toolbar,r=e.previousBlock,i=e.currentBlock;if(i.name!==r.name||!r.mergeable)return 0===r.inputs.length||r.isEmpty?(e.removeBlock(e.currentBlockIndex-1),n.setToBlock(e.currentBlock),void o.close()):void(n.navigatePrevious()&&o.close());n.createShadow(r.pluginsContent),e.mergeBlocks(r,i).then((function(){n.restoreCaret(r.pluginsContent),r.pluginsContent.normalize(),o.close()}))}},{key:"arrowRightAndDown",value:function(t){var e=this,n=d.default.usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===u.keyCodes.TAB);if(!this.Editor.UI.someToolbarOpened||!n){this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var o=this.Editor.Caret.isAtEnd||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===u.keyCodes.DOWN&&o?this.Editor.CrossBlockSelection.toggleBlockSelectedState():((t.keyCode===u.keyCodes.DOWN||t.keyCode===u.keyCodes.RIGHT&&!this.isRtl?this.Editor.Caret.navigateNext():this.Editor.Caret.navigatePrevious())?t.preventDefault():u.delay((function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(t))}}},{key:"arrowLeftAndUp",value:function(t){var e=this;if(this.Editor.UI.someToolbarOpened){if(d.default.usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===u.keyCodes.TAB))return;this.Editor.UI.closeAllToolbars()}this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var n=this.Editor.Caret.isAtStart||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===u.keyCodes.UP&&n?this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1):((t.keyCode===u.keyCodes.UP||t.keyCode===u.keyCodes.LEFT&&!this.isRtl?this.Editor.Caret.navigatePrevious():this.Editor.Caret.navigateNext())?t.preventDefault():u.delay((function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(t))}},{key:"needToolbarClosing",value:function(t){var e=t.keyCode===u.keyCodes.ENTER&&this.Editor.Toolbox.opened,n=t.keyCode===u.keyCodes.ENTER&&this.Editor.BlockSettings.opened,o=t.keyCode===u.keyCodes.ENTER&&this.Editor.InlineToolbar.opened,r=t.keyCode===u.keyCodes.ENTER&&this.Editor.ConversionToolbar.opened,i=t.keyCode===u.keyCodes.TAB;return!(t.shiftKey||i||e||n||o||r)}},{key:"activateToolbox",value:function(){this.Editor.Toolbar.opened||(this.Editor.Toolbar.open(!1,!1),this.Editor.Toolbar.plusButton.show()),this.Editor.Toolbox.open()}},{key:"activateBlockSettings",value:function(){this.Editor.Toolbar.opened||(this.Editor.BlockManager.currentBlock.focused=!0,this.Editor.Toolbar.open(!0,!1),this.Editor.Toolbar.plusButton.hide()),this.Editor.BlockSettings.opened||this.Editor.BlockSettings.open()}}]),o}(l.default);o.default=y,y.displayName="BlockEvents",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(61),n(7),n(15),n(8),n(383)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v){"use strict";var y=n(13),g=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),c=g(c),l=g(l),u=g(u),f=y(f),d=g(d),p=g(p),h=y(h),v=g(v);var m=function(t){(0,c.default)(y,t);var e,n,o,d=(e=y,function(){var t,n=(0,u.default)(e);if(b()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function y(){var t;return(0,a.default)(this,y),(t=d.apply(this,arguments))._currentBlockIndex=-1,t._blocks=null,t}return(0,s.default)(y,[{key:"prepare",value:function(){var t=this,e=new v.default(this.Editor.UI.nodes.redactor);this._blocks=new Proxy(e,{set:v.default.set,get:v.default.get}),this.Editor.Listeners.on(document,"copy",(function(e){return t.Editor.BlockEvents.handleCommandC(e)}))}},{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"composeBlock",value:function(t){var e=t.tool,n=t.data,o=void 0===n?{}:n,r=this.Editor.ReadOnly.isEnabled,i=this.Editor.Tools.getToolSettings(e),a=this.Editor.Tools.available[e],s=new f.default({name:e,data:o,Tool:a,settings:i,api:this.Editor.API,readOnly:r});return r||this.bindBlockEvents(s),s}},{key:"insert",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.tool,n=void 0===e?this.config.defaultBlock:e,o=t.data,r=void 0===o?{}:o,i=t.index,a=t.needToFocus,s=void 0===a||a,c=t.replace,l=void 0!==c&&c,u=i;void 0===u&&(u=this.currentBlockIndex+(l?0:1));var f=this.composeBlock({tool:n,data:r});return this._blocks.insert(u,f,l),s?this.currentBlockIndex=u:u<=this.currentBlockIndex&&this.currentBlockIndex++,f}},{key:"replace",value:function(t){var e=t.tool,n=void 0===e?this.config.defaultBlock:e,o=t.data,r=void 0===o?{}:o;return this.insert({tool:n,data:r,index:this.currentBlockIndex,replace:!0})}},{key:"paste",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.insert({tool:t,replace:n});try{o.call(f.BlockToolAPI.ON_PASTE,e)}catch(e){h.log("".concat(t,": onPaste callback call is failed"),"error",e)}return o}},{key:"insertDefaultBlockAtIndex",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.composeBlock({tool:this.config.defaultBlock});return this._blocks[t]=n,e?this.currentBlockIndex=t:t<=this.currentBlockIndex&&this.currentBlockIndex++,n}},{key:"insertAtEnd",value:function(){return this.currentBlockIndex=this.blocks.length-1,this.insert()}},{key:"mergeBlocks",value:(o=(0,i.default)(r.default.mark((function t(e,n){var o,i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=this._blocks.indexOf(n),!n.isEmpty){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,n.data;case 5:if(i=t.sent,h.isEmpty(i)){t.next=9;break}return t.next=9,e.mergeWith(i);case 9:this.removeBlock(o),this.currentBlockIndex=this._blocks.indexOf(e);case 11:case"end":return t.stop()}}),t,this)}))),function(t,e){return o.apply(this,arguments)})},{key:"removeBlock",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentBlockIndex;if(!this.validateIndex(t))throw new Error("Can't find a Block to remove");this._blocks.remove(t),this.currentBlockIndex>=t&&this.currentBlockIndex--,this.blocks.length?0===t&&(this.currentBlockIndex=0):(this.currentBlockIndex=-1,this.insert())}},{key:"removeSelectedBlocks",value:function(){for(var t,e=this.blocks.length-1;e>=0;e--)this.blocks[e].selected&&(this.removeBlock(e),t=e);return t}},{key:"removeAllBlocks",value:function(){for(var t=this.blocks.length-1;t>=0;t--)this._blocks.remove(t);this.currentBlockIndex=-1,this.insert(),this.currentBlock.firstInput.focus()}},{key:"split",value:function(){var t=this.Editor.Caret.extractFragmentFromCaretPosition(),e=p.default.make("div");e.appendChild(t);var n={text:p.default.isEmpty(e)?"":e.innerHTML};return this.insert({data:n})}},{key:"getBlockByIndex",value:function(t){return this._blocks[t]}},{key:"getBlock",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=this._blocks.nodes,n=t.closest(".".concat(f.default.CSS.wrapper)),o=e.indexOf(n);if(o>=0)return this._blocks[o]}},{key:"highlightCurrentNode",value:function(){this.clearFocused(),this.currentBlock.focused=!0}},{key:"clearFocused",value:function(){this.blocks.forEach((function(t){t.focused=!1}))}},{key:"setCurrentBlockByChildNode",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(f.default.CSS.wrapper));if(e)return this.currentBlockIndex=this._blocks.nodes.indexOf(e),this.currentBlock.updateCurrentInput(),this.currentBlock;throw new Error("Can not find a Block from this child Node")}},{key:"getBlockByChildNode",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(f.default.CSS.wrapper));return this.blocks.find((function(t){return t.holder===e}))}},{key:"swap",value:function(t,e){this._blocks.swap(t,e),this.currentBlockIndex=e}},{key:"move",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentBlockIndex;isNaN(t)||isNaN(e)?h.log("Warning during 'move' call: incorrect indices provided.","warn"):this.validateIndex(t)&&this.validateIndex(e)?(this._blocks.move(t,e),this.currentBlockIndex=t):h.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.","warn")}},{key:"dropPointer",value:function(){this.currentBlockIndex=-1,this.clearFocused()}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._blocks.removeAll(),this.dropPointer(),t&&this.insert(),this.Editor.UI.checkEmptiness()}},{key:"destroy",value:(n=(0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(this.blocks.map((function(t){if(h.isFunction(t.tool.destroy))return t.tool.destroy()})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"bindBlockEvents",value:function(t){var e=this.Editor.BlockEvents;this.readOnlyMutableListeners.on(t.holder,"keydown",(function(t){e.keydown(t)}),!0),this.readOnlyMutableListeners.on(t.holder,"keyup",(function(t){e.keyup(t)})),this.readOnlyMutableListeners.on(t.holder,"dragover",(function(t){e.dragOver(t)})),this.readOnlyMutableListeners.on(t.holder,"dragleave",(function(t){e.dragLeave(t)}))}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(document,"cut",(function(e){return t.Editor.BlockEvents.handleCommandX(e)})),this.blocks.forEach((function(e){t.bindBlockEvents(e)}))}},{key:"validateIndex",value:function(t){return!(t<0||t>=this._blocks.length)}},{key:"currentBlockIndex",get:function(){return this._currentBlockIndex},set:function(t){this._blocks[this._currentBlockIndex]&&this._blocks[this._currentBlockIndex].willUnselect(),this._blocks[t]&&this._blocks[t].willSelect(),this._currentBlockIndex=t}},{key:"firstBlock",get:function(){return this._blocks[0]}},{key:"lastBlock",get:function(){return this._blocks[this._blocks.length-1]}},{key:"currentBlock",get:function(){return this._blocks[this.currentBlockIndex]}},{key:"nextBlock",get:function(){return this.currentBlockIndex===this._blocks.length-1?null:this._blocks[this.currentBlockIndex+1]}},{key:"nextContentfulBlock",get:function(){return this.blocks.slice(this.currentBlockIndex+1).find((function(t){return!!t.inputs.length}))}},{key:"previousContentfulBlock",get:function(){return this.blocks.slice(0,this.currentBlockIndex).reverse().find((function(t){return!!t.inputs.length}))}},{key:"previousBlock",get:function(){return 0===this.currentBlockIndex?null:this._blocks[this.currentBlockIndex-1]}},{key:"blocks",get:function(){return this._blocks.array}},{key:"isEditorEmpty",get:function(){return this.blocks.every((function(t){return t.isEmpty}))}}]),y}(d.default);o.default=m,m.displayName="BlockManager",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(15),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h){"use strict";var v=n(13),y=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=y(r),i=y(i),a=y(a),s=y(s),c=y(c),l=y(l),u=y(u),f=y(f),d=v(d),p=y(p),h=y(h);var b=function(t){(0,c.default)(f,t);var e,n,o=(e=f,function(){var t,n=(0,u.default)(e);if(g()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function f(){var t;return(0,a.default)(this,f),(t=o.apply(this,arguments)).anyBlockSelectedCache=null,t.needToSelectAll=!1,t.nativeInputSelected=!1,t.readyToBlockSelection=!1,t}return(0,s.default)(f,[{key:"prepare",value:function(){var t=this,e=this.Editor.Shortcuts;this.selection=new h.default,e.add({name:"CMD+A",handler:function(e){var n=t.Editor,o=n.BlockManager;if(n.ReadOnly.isEnabled)return e.preventDefault(),void t.selectAllBlocks();o.currentBlock&&t.handleCommandA(e)}})}},{key:"toggleReadOnly",value:function(t){h.default.get().removeAllRanges(),this.allBlocksSelected=!1}},{key:"unSelectBlockByIndex",value:function(t){var e=this.Editor.BlockManager;(isNaN(t)?e.currentBlock:e.getBlockByIndex(t)).selected=!1,this.clearCache()}},{key:"clearSelection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.Editor,o=n.BlockManager,r=n.Caret,i=n.RectangleSelection;this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1;var a=t&&t instanceof KeyboardEvent,s=a&&d.isPrintableKey(t.keyCode);if(this.anyBlockSelected&&a&&s&&!h.default.isSelectionExists){var c=o.removeSelectedBlocks();o.insertDefaultBlockAtIndex(c,!0),r.setToBlock(o.currentBlock),d.delay((function(){var e=t.key;r.insertContentAtCaretPosition(e.length>1?"":e)}),20)()}this.Editor.CrossBlockSelection.clear(t),this.anyBlockSelected&&!i.isRectActivated()?(e&&this.selection.restore(),this.allBlocksSelected=!1):this.Editor.RectangleSelection.clearSelection()}},{key:"copySelectedBlocks",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=p.default.make("div"),this.selectedBlocks.forEach((function(t){var e=s.Editor.Sanitizer.clean(t.holder.innerHTML,s.sanitizerConfig),o=p.default.make("p");o.innerHTML=e,n.appendChild(o)})),t.next=5,Promise.all(this.selectedBlocks.map((function(t){return t.save()})));case 5:o=t.sent,i=Array.from(n.childNodes).map((function(t){return t.textContent})).join("\n\n"),a=n.innerHTML,e.clipboardData.setData("text/plain",i),e.clipboardData.setData("text/html",a),e.clipboardData.setData(this.Editor.Paste.MIME_TYPE,JSON.stringify(o));case 11:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"selectBlockByIndex",value:function(t){var e,n=this.Editor.BlockManager;n.clearFocused(),e=isNaN(t)?n.currentBlock:n.getBlockByIndex(t),this.selection.save(),h.default.get().removeAllRanges(),e.selected=!0,this.clearCache(),this.Editor.InlineToolbar.close()}},{key:"clearCache",value:function(){this.anyBlockSelectedCache=null}},{key:"destroy",value:function(){this.Editor.Shortcuts.remove("CMD+A")}},{key:"handleCommandA",value:function(t){if(this.Editor.RectangleSelection.clearSelection(),!p.default.isNativeInput(t.target)||this.readyToBlockSelection){var e=this.Editor.BlockManager.getBlock(t.target).inputs;e.length>1&&!this.readyToBlockSelection?this.readyToBlockSelection=!0:1!==e.length||this.needToSelectAll?this.needToSelectAll?(t.preventDefault(),this.selectAllBlocks(),this.needToSelectAll=!1,this.readyToBlockSelection=!1,this.Editor.ConversionToolbar.close()):this.readyToBlockSelection&&(t.preventDefault(),this.selectBlockByIndex(),this.needToSelectAll=!0):this.needToSelectAll=!0}else this.readyToBlockSelection=!0}},{key:"selectAllBlocks",value:function(){this.selection.save(),h.default.get().removeAllRanges(),this.allBlocksSelected=!0,this.Editor.InlineToolbar.close()}},{key:"sanitizerConfig",get:function(){return{p:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},ol:{},ul:{},li:{},br:!0,img:{src:!0,width:!0,height:!0},a:{href:!0},b:{},i:{},u:{}}}},{key:"allBlocksSelected",get:function(){return this.Editor.BlockManager.blocks.every((function(t){return!0===t.selected}))},set:function(t){this.Editor.BlockManager.blocks.forEach((function(e){e.selected=t})),this.clearCache()}},{key:"anyBlockSelected",get:function(){var t=this.Editor.BlockManager;return null===this.anyBlockSelectedCache&&(this.anyBlockSelectedCache=t.blocks.some((function(t){return!0===t.selected}))),this.anyBlockSelectedCache}},{key:"selectedBlocks",get:function(){return this.Editor.BlockManager.blocks.filter((function(t){return t.selected}))}}]),f}(f.default);o.default=b,b.displayName="BlockSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(25),n(7),n(15),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(13),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f),d=p(d);var y=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(v()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"setToBlock",value:function(t){var e,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this.Editor.BlockManager;switch(o){case this.positions.START:e=t.firstInput;break;case this.positions.END:e=t.lastInput;break;default:e=t.currentInput}if(e){var a=f.default.getDeepestNode(e,o===this.positions.END),s=f.default.getContentLength(a);switch(!0){case o===this.positions.START:r=0;break;case o===this.positions.END:case r>s:r=s}d.delay((function(){n.set(a,r)}),20)(),i.setCurrentBlockByChildNode(t.holder),i.currentBlock.currentInput=e}}},{key:"setToInput",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.Editor.BlockManager.currentBlock,r=f.default.getDeepestNode(t);switch(e){case this.positions.START:this.set(r,0);break;case this.positions.END:this.set(r,f.default.getContentLength(r));break;default:n&&this.set(r,n)}o.currentInput=t}},{key:"set",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=l.default.setCursor(t,e),o=n.top,r=n.bottom,i=window,a=i.innerHeight;o<0&&window.scrollBy(0,o),r>a&&window.scrollBy(0,r-a)}},{key:"setToTheLastBlock",value:function(){var t=this.Editor.BlockManager.lastBlock;if(t)if(this.Editor.Tools.isDefault(t.tool)&&t.isEmpty)this.setToBlock(t);else{var e=this.Editor.BlockManager.insertAtEnd();this.setToBlock(e)}}},{key:"extractFragmentFromCaretPosition",value:function(){var t=l.default.get();if(t.rangeCount){var e=t.getRangeAt(0),n=this.Editor.BlockManager.currentBlock.currentInput;if(e.deleteContents(),n){if(f.default.isNativeInput(n)){var o=n,r=document.createDocumentFragment(),i=o.value.substring(0,o.selectionStart),a=o.value.substring(o.selectionStart);return r.textContent=a,o.value=i,r}var s=e.cloneRange();return s.selectNodeContents(n),s.setStart(e.endContainer,e.endOffset),s.extractContents()}}}},{key:"navigateNext",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.Editor,n=e.BlockManager,o=e.Tools,r=n.currentBlock,i=n.nextContentfulBlock,a=r.nextInput,s=i;if(!s&&!a){if(o.isDefault(r.tool))return!1;s=n.insertAtEnd()}return!(!t&&!this.isAtEnd||(a?this.setToInput(a,this.positions.START):this.setToBlock(s,this.positions.START),0))}},{key:"navigatePrevious",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.Editor.BlockManager,n=e.currentBlock,o=e.previousContentfulBlock;if(!n)return!1;var r=n.previousInput;return!(!o&&!r||!t&&!this.isAtStart||(r?this.setToInput(r,this.positions.END):this.setToBlock(o,this.positions.END),0))}},{key:"createShadow",value:function(t){var e=document.createElement("span");e.classList.add(o.CSS.shadowCaret),t.insertAdjacentElement("beforeend",e)}},{key:"restoreCaret",value:function(t){var e=t.querySelector(".".concat(o.CSS.shadowCaret));e&&((new l.default).expandToTag(e),setTimeout((function(){var t=document.createRange();t.selectNode(e),t.extractContents()}),50))}},{key:"insertContentAtCaretPosition",value:function(t){var e=document.createDocumentFragment(),n=document.createElement("div"),o=l.default.get(),r=l.default.range;n.innerHTML=t,Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)})),0===e.childNodes.length&&e.appendChild(new Text(""));var i=e.lastChild;r.deleteContents(),r.insertNode(e);var a=document.createRange();a.setStart(i,i.textContent.length),o.removeAllRanges(),o.addRange(a)}},{key:"getHigherLevelSiblings",value:function(t,e){for(var n=t,o=[];n.parentNode&&"true"!==n.parentNode.contentEditable;)n=n.parentNode;for(var r="left"===e?"previousSibling":"nextSibling";n[r];)n=n[r],o.push(n);return o}},{key:"positions",get:function(){return{START:"start",END:"end",DEFAULT:"default"}}},{key:"isAtStart",get:function(){var t=l.default.get(),e=f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),n=t.focusNode;if(f.default.isNativeInput(e))return 0===e.selectionEnd;if(!t.anchorNode)return!1;var o=n.textContent.search(/\S/);-1===o&&(o=0);var r=t.focusOffset;return n.nodeType!==Node.TEXT_NODE&&n.childNodes.length&&(n.childNodes[r]?(n=n.childNodes[r],r=0):r=(n=n.childNodes[r-1]).textContent.length),!(!f.default.isLineBreakTag(e)&&!f.default.isEmpty(e)||!this.getHigherLevelSiblings(n,"left").every((function(t){var e=f.default.isLineBreakTag(t),n=1===t.children.length&&f.default.isLineBreakTag(t.children[0]),o=e||n;return f.default.isEmpty(t)&&!o}))||r!==o)||(null===e||n===e&&r<=o)}},{key:"isAtEnd",get:function(){var t=l.default.get(),e=t.focusNode,n=f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput,!0);if(f.default.isNativeInput(n))return n.selectionEnd===n.value.length;if(!t.focusNode)return!1;var o=t.focusOffset;if(e.nodeType!==Node.TEXT_NODE&&e.childNodes.length&&(e.childNodes[o-1]?o=(e=e.childNodes[o-1]).textContent.length:(e=e.childNodes[0],o=0)),f.default.isLineBreakTag(n)||f.default.isEmpty(n)){var r=this.getHigherLevelSiblings(e,"right");if(r.every((function(t,e){return e===r.length-1&&f.default.isLineBreakTag(t)||f.default.isEmpty(t)&&!f.default.isLineBreakTag(t)}))&&o===e.textContent.length)return!0}var i=n.textContent.replace(/\s+$/,"");return e===n&&o>=i.length}}],[{key:"CSS",get:function(){return{shadowCaret:"cdx-shadow-caret"}}}]),o}(u.default);o.default=y,y.displayName="Caret",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(25),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(13),v=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),c=v(c),l=v(l),u=v(u),f=v(f),d=v(d),p=h(p);var g=function(t){(0,c.default)(f,t);var e,n,o=(e=f,function(){var t,n=(0,u.default)(e);if(y()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function f(){var t;return(0,a.default)(this,f),(t=o.apply(this,arguments)).onMouseUp=function(){var e=t.Editor.Listeners;e.off(document,"mouseover",t.onMouseOver),e.off(document,"mouseup",t.onMouseUp)},t.onMouseOver=function(e){var n=t.Editor,o=n.BlockManager,r=n.BlockSelection,i=o.getBlockByChildNode(e.relatedTarget)||t.lastSelectedBlock,a=o.getBlockByChildNode(e.target);if(i&&a&&a!==i){if(i===t.firstSelectedBlock)return d.default.get().removeAllRanges(),i.selected=!0,a.selected=!0,void r.clearCache();if(a===t.firstSelectedBlock)return i.selected=!1,a.selected=!1,void r.clearCache();t.Editor.InlineToolbar.close(),t.toggleBlocksSelectedState(i,a),t.lastSelectedBlock=a}},t}return(0,s.default)(f,[{key:"prepare",value:(n=(0,i.default)(r.default.mark((function t(){var e=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Editor.Listeners.on(document,"mousedown",(function(t){e.enableCrossBlockSelection(t)}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"watchSelection",value:function(t){if(t.button===p.mouseButtons.LEFT){var e=this.Editor,n=e.BlockManager,o=e.Listeners;this.firstSelectedBlock=n.getBlock(t.target),this.lastSelectedBlock=this.firstSelectedBlock,o.on(document,"mouseover",this.onMouseOver),o.on(document,"mouseup",this.onMouseUp)}}},{key:"toggleBlockSelectedState",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.Editor,n=e.BlockManager,o=e.BlockSelection;this.lastSelectedBlock||(this.lastSelectedBlock=this.firstSelectedBlock=n.currentBlock),this.firstSelectedBlock===this.lastSelectedBlock&&(this.firstSelectedBlock.selected=!0,o.clearCache(),d.default.get().removeAllRanges());var r=n.blocks.indexOf(this.lastSelectedBlock)+(t?1:-1),i=n.blocks[r];i&&(this.lastSelectedBlock.selected!==i.selected?(i.selected=!0,o.clearCache()):(this.lastSelectedBlock.selected=!1,o.clearCache()),this.lastSelectedBlock=i,this.Editor.InlineToolbar.close())}},{key:"clear",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret,i=n.blocks.indexOf(this.firstSelectedBlock),a=n.blocks.indexOf(this.lastSelectedBlock);if(o.anyBlockSelected&&i>-1&&a>-1)if(t&&t instanceof KeyboardEvent)switch(t.keyCode){case p.keyCodes.DOWN:case p.keyCodes.RIGHT:r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);break;case p.keyCodes.UP:case p.keyCodes.LEFT:r.setToBlock(n.blocks[Math.min(i,a)],r.positions.START);break;default:r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END)}else r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);this.firstSelectedBlock=this.lastSelectedBlock=null}},{key:"enableCrossBlockSelection",value:function(t){var e=this.Editor.UI;d.default.isCollapsed||this.Editor.BlockSelection.clearSelection(t),e.nodes.redactor.contains(t.target)?this.watchSelection(t):this.Editor.BlockSelection.clearSelection(t)}},{key:"toggleBlocksSelectedState",value:function(t,e){for(var n=this.Editor,o=n.BlockManager,r=n.BlockSelection,i=o.blocks.indexOf(t),a=o.blocks.indexOf(e),s=t.selected!==e.selected,c=Math.min(i,a);c<=Math.max(i,a);c++){var l=o.blocks[c];l!==this.firstSelectedBlock&&l!==(s?t:e)&&(o.blocks[c].selected=!o.blocks[c].selected,r.clearCache())}}},{key:"isCrossBlockSelectionStarted",get:function(){return!!this.firstSelectedBlock&&!!this.lastSelectedBlock}}]),f}(f.default);o.default=g,g.displayName="CrossBlockSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(25),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l),u=p(u),f=p(f);var v=function(t){(0,c.default)(d,t);var e,n,o=(e=d,function(){var t,n=(0,u.default)(e);if(h()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function d(){var t;return(0,a.default)(this,d),(t=o.apply(this,arguments)).isStartedAtEditor=!1,t}return(0,s.default)(d,[{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"enableModuleBindings",value:function(){var t=this,e=this.Editor.UI;this.readOnlyMutableListeners.on(e.nodes.holder,"drop",function(){var e=(0,i.default)(r.default.mark((function e(n){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.processDrop(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!0),this.readOnlyMutableListeners.on(e.nodes.holder,"dragstart",(function(){t.processDragStart()})),this.readOnlyMutableListeners.on(e.nodes.holder,"dragover",(function(e){t.processDragOver(e)}),!0)}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"processDrop",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s,c;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=this.Editor,o=n.BlockManager,i=n.Caret,a=n.Paste,e.preventDefault(),o.blocks.forEach((function(t){t.dropTarget=!1})),f.default.isAtEditor&&!f.default.isCollapsed&&this.isStartedAtEditor&&document.execCommand("delete"),this.isStartedAtEditor=!1;try{s=o.setCurrentBlockByChildNode(e.target),this.Editor.Caret.setToBlock(s,i.positions.END)}catch(t){c=o.setCurrentBlockByChildNode(o.lastBlock.holder),this.Editor.Caret.setToBlock(c,i.positions.END)}return t.next=8,a.processDataTransfer(e.dataTransfer,!0);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"processDragStart",value:function(){f.default.isAtEditor&&!f.default.isCollapsed&&(this.isStartedAtEditor=!0),this.Editor.InlineToolbar.close()}},{key:"processDragOver",value:function(t){t.preventDefault()}}]),d}((d=p(d)).default);o.default=v,v.displayName="DragNDrop",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).subscribers={},t}return(0,i.default)(o,[{key:"on",value:function(t,e){t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push(e)}},{key:"once",value:function(t,e){var n=this;t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push((function o(r){var i=e(r),a=n.subscribers[t].indexOf(o);return-1!==a&&n.subscribers[t].splice(a,1),i}))}},{key:"emit",value:function(t,e){this.subscribers[t]&&this.subscribers[t].reduce((function(t,e){return e(t)||t}),e)}},{key:"off",value:function(t,e){for(var n=0;n<this.subscribers[t].length;n++)if(this.subscribers[t][n]===e){delete this.subscribers[t][n];break}}},{key:"destroy",value:function(){this.subscribers=null}}]),o}((l=u(l)).default);o.default=d,d.displayName="Events",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(13),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),c=d(c),l=d(l),u=f(u);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(p()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).allListeners=[],t}return(0,i.default)(o,[{key:"on",value:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=u.generateId("l"),i={id:r,element:t,eventType:e,handler:n,options:o},a=this.findOne(t,e,n);if(!a)return this.allListeners.push(i),t.addEventListener(e,n,o),r}},{key:"off",value:function(t,e,n,o){var r=this,i=this.findAll(t,e,n);i.forEach((function(t,e){var n=r.allListeners.indexOf(i[e]);n>0&&(r.allListeners.splice(n,1),t.element.removeEventListener(t.eventType,t.handler,t.options))}))}},{key:"offById",value:function(t){var e=this.findById(t);e&&e.element.removeEventListener(e.eventType,e.handler,e.options)}},{key:"findOne",value:function(t,e,n){var o=this.findAll(t,e,n);return o.length>0?o[0]:null}},{key:"findAll",value:function(t,e,n){var o=t?this.findByEventTarget(t):[];return t&&e&&n?o.filter((function(t){return t.eventType===e&&t.handler===n})):t&&e?o.filter((function(t){return t.eventType===e})):o}},{key:"removeAll",value:function(){this.allListeners.map((function(t){t.element.removeEventListener(t.eventType,t.handler,t.options)})),this.allListeners=[]}},{key:"destroy",value:function(){this.removeAll()}},{key:"findByEventTarget",value:function(t){return this.allListeners.filter((function(e){if(e.element===t)return e}))}},{key:"findByType",value:function(t){return this.allListeners.filter((function(e){if(e.eventType===t)return e}))}},{key:"findByHandler",value:function(t){return this.allListeners.filter((function(e){if(e.handler===t)return e}))}},{key:"findById",value:function(t){return this.allListeners.find((function(e){return e.id===t}))}}]),o}(l.default);o.default=h,h.displayName="Listeners",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f){"use strict";var d=n(13),p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l),u=d(u),f=p(f);var v=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(h()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).disabled=!1,t.mutationDebouncer=u.debounce((function(){t.updateNativeInputs(),u.isFunction(t.config.onChange)&&t.config.onChange(t.Editor.API.methods)}),o.DebounceTimer),t.nativeInputs=[],t}return(0,i.default)(o,[{key:"destroy",value:function(){var t=this;this.mutationDebouncer=null,this.observer&&this.observer.disconnect(),this.observer=null,this.nativeInputs.forEach((function(e){return t.Editor.Listeners.off(e,"input",t.mutationDebouncer)})),this.mutationDebouncer=null}},{key:"toggleReadOnly",value:function(t){t?this.disableModule():this.enableModule()}},{key:"disable",value:function(){this.disabled=!0}},{key:"enable",value:function(){this.disabled=!1}},{key:"setObserver",value:function(){var t=this,e=this.Editor.UI;this.observer=new MutationObserver((function(e,n){t.mutationHandler(e,n)})),this.observer.observe(e.nodes.redactor,{childList:!0,attributes:!0,subtree:!0,characterData:!0,characterDataOldValue:!0})}},{key:"mutationHandler",value:function(t,e){if(!this.disabled){var n=!1;t.forEach((function(t){switch(t.type){case"childList":case"characterData":n=!0;break;case"attributes":t.target.classList.contains(f.default.CSS.wrapper)||(n=!0)}})),n&&this.mutationDebouncer()}}},{key:"updateNativeInputs",value:function(){var t=this;this.nativeInputs&&this.nativeInputs.forEach((function(e){t.Editor.Listeners.off(e,"input")})),this.nativeInputs=Array.from(this.Editor.UI.nodes.redactor.querySelectorAll("textarea, input, select")),this.nativeInputs.forEach((function(e){return t.Editor.Listeners.on(e,"input",t.mutationDebouncer)}))}},{key:"enableModule",value:function(){var t=this;window.setTimeout((function(){t.setObserver(),t.updateNativeInputs(),t.enable()}),1e3)}},{key:"disableModule",value:function(){this.disable()}}]),o}(l.default);o.default=v,v.displayName="ModificationsObserver",v.DebounceTimer=450,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(384)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l),u=f(u);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"show",value:function(t){u.default.show(t)}}]),o}(l.default);o.default=p,p.displayName="Notifier",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(66),n(21),n(22),n(39),n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v){"use strict";var y=n(13),g=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),c=g(c),l=g(l),u=g(u),f=g(f),d=g(d),p=g(p),h=g(h),v=y(v);var m=function(t){(0,u.default)(w,t);var e,n,o,p,y,g,m,k,x,S=(e=w,function(){var t,n=(0,d.default)(e);if(b()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function w(){var t;return(0,c.default)(this,w),(t=S.apply(this,arguments)).MIME_TYPE="application/x-editor-js",t.toolsTags={},t.tagsByTool={},t.toolsPatterns=[],t.toolsFiles={},t.exceptionList=[],t.processTool=function(e){var n=(0,s.default)(e,2),o=n[0],r=n[1];try{var i=new t.Editor.Tools.blockTools[o]({api:t.Editor.API.getMethodsForTool(o),config:{},data:{},readOnly:!1});if(!1===r.pasteConfig)return void t.exceptionList.push(o);if("function"!=typeof i.onPaste)return;var a=r.pasteConfig||{};t.getTagsConfig(o,a),t.getFilesConfig(o,a),t.getPatternsConfig(o,a)}catch(t){v.log("Paste handling for «".concat(o,"» Tool hasn't been set up because of the error"),"warn",t)}},t.handlePasteEvent=function(){var e=(0,a.default)(i.default.mark((function e(n){var o,r,a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.Editor,r=o.BlockManager,a=o.Toolbar,r.currentBlock&&(!t.isNativeBehaviour(n.target)||n.clipboardData.types.includes("Files"))){e.next=3;break}return e.abrupt("return");case 3:if(!r.currentBlock||!t.exceptionList.includes(r.currentBlock.name)){e.next=5;break}return e.abrupt("return");case 5:n.preventDefault(),t.processDataTransfer(n.clipboardData),r.clearFocused(),a.close();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return(0,l.default)(w,[{key:"prepare",value:(x=(0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.processTools();case 1:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)})},{key:"toggleReadOnly",value:function(t){t?this.unsetCallback():this.setCallback()}},{key:"processDataTransfer",value:(k=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s,c,l,u,f,d=arguments;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=d.length>1&&void 0!==d[1]&&d[1],o=this.Editor.Sanitizer,!((r=e.types).includes?r.includes("Files"):r.contains("Files"))){t.next=8;break}return t.next=7,this.processFiles(e.files);case 7:return t.abrupt("return");case 8:if(a=e.getData(this.MIME_TYPE),s=e.getData("text/plain"),c=e.getData("text/html"),!a){t.next=19;break}return t.prev=12,this.insertEditorJSData(JSON.parse(a)),t.abrupt("return");case 17:t.prev=17,t.t0=t.catch(12);case 19:if(n&&s.trim()&&c.trim()&&(c="<p>"+(c.trim()?c:s)+"</p>"),l=Object.keys(this.toolsTags).reduce((function(t,e){return t[e.toLowerCase()]=!0,t}),{}),u=Object.assign({},l,o.getAllInlineToolsConfig(),{br:{}}),(f=o.clean(c,u)).trim()&&f.trim()!==s&&h.default.isHTMLString(f)){t.next=28;break}return t.next=26,this.processText(s);case 26:t.next=30;break;case 28:return t.next=30,this.processText(f,!0);case 30:case"end":return t.stop()}}),t,this,[[12,17]])}))),function(t){return k.apply(this,arguments)})},{key:"processText",value:(m=(0,a.default)(i.default.mark((function t(e){var n,o,r,s,c,l,u,f,d=this,p=arguments;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=p.length>1&&void 0!==p[1]&&p[1],o=this.Editor,r=o.Caret,s=o.BlockManager,c=o.Tools,(l=n?this.processHTML(e):this.processPlain(e)).length){t.next=5;break}return t.abrupt("return");case 5:if(1!==l.length){t.next=8;break}return l[0].isBlock?this.processSingleBlock(l.pop()):this.processInlinePaste(l.pop()),t.abrupt("return");case 8:u=s.currentBlock&&c.isDefault(s.currentBlock.tool),f=u&&s.currentBlock.isEmpty,l.map(function(){var t=(0,a.default)(i.default.mark((function t(e,n){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d.insertBlock(e,0===n&&f));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),s.currentBlock&&r.setToBlock(s.currentBlock,r.positions.END);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return m.apply(this,arguments)})},{key:"setCallback",value:function(){this.Editor.Listeners.on(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}},{key:"unsetCallback",value:function(){this.Editor.Listeners.off(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}},{key:"processTools",value:function(){var t=this.Editor.Tools.blockTools;Object.entries(t).forEach(this.processTool)}},{key:"getTagsConfig",value:function(t,e){var n=this,o=e.tags||[];o.forEach((function(e){Object.prototype.hasOwnProperty.call(n.toolsTags,e)?v.log("Paste handler for «".concat(t,"» Tool on «").concat(e,"» tag is skipped ")+"because it is already used by «".concat(n.toolsTags[e].tool,"» Tool."),"warn"):n.toolsTags[e.toUpperCase()]={tool:t}})),this.tagsByTool[t]=o.map((function(t){return t.toUpperCase()}))}},{key:"getFilesConfig",value:function(t,e){var n=e.files,o=void 0===n?{}:n,r=o.extensions,i=o.mimeTypes;(r||i)&&(r&&!Array.isArray(r)&&(v.log("«extensions» property of the onDrop config for «".concat(t,"» Tool should be an array")),r=[]),i&&!Array.isArray(i)&&(v.log("«mimeTypes» property of the onDrop config for «".concat(t,"» Tool should be an array")),i=[]),i&&(i=i.filter((function(e){return!!v.isValidMimeType(e)||(v.log("MIME type value «".concat(e,"» for the «").concat(t,"» Tool is not a valid MIME type"),"warn"),!1)}))),this.toolsFiles[t]={extensions:r||[],mimeTypes:i||[]})}},{key:"getPatternsConfig",value:function(t,e){var n=this;e.patterns&&!v.isEmpty(e.patterns)&&Object.entries(e.patterns).forEach((function(e){var o=(0,s.default)(e,2),r=o[0],i=o[1];i instanceof RegExp||v.log("Pattern ".concat(i," for «").concat(t,"» Tool is skipped because it should be a Regexp instance."),"warn"),n.toolsPatterns.push({key:r,pattern:i,tool:t})}))}},{key:"isNativeBehaviour",value:function(t){return h.default.isNativeInput(t)}},{key:"processFiles",value:(g=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s,c,l=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.Editor,o=n.BlockManager,r=n.Tools,t.next=3,Promise.all(Array.from(e).map((function(t){return l.processFile(t)})));case 3:a=(a=t.sent).filter((function(t){return!!t})),s=r.isDefault(o.currentBlock.tool),c=s&&o.currentBlock.isEmpty,a.forEach((function(t,e){o.paste(t.type,t.event,0===e&&c)}));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)})},{key:"processFile",value:(y=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,c;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=v.getFileExtension(e),o=Object.entries(this.toolsFiles).find((function(t){var o=(0,s.default)(t,2),r=(o[0],o[1]),i=r.mimeTypes,a=r.extensions,c=e.type.split("/"),l=(0,s.default)(c,2),u=l[0],f=l[1],d=a.find((function(t){return t.toLowerCase()===n.toLowerCase()})),p=i.find((function(t){var e=t.split("/"),n=(0,s.default)(e,2),o=n[0],r=n[1];return o===u&&(r===f||"*"===r)}));return!!d||!!p}))){t.next=4;break}return t.abrupt("return");case 4:return r=(0,s.default)(o,1),a=r[0],c=this.composePasteEvent("file",{file:e}),t.abrupt("return",{event:c,type:a});case 7:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)})},{key:"processHTML",value:function(t){var e=this,n=this.Editor,o=n.Tools,r=n.Sanitizer,i=this.config.defaultBlock,a=h.default.make("DIV");return a.innerHTML=t,this.getNodes(a).map((function(t){var n,a=i,s=!1;switch(t.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:(n=h.default.make("div")).appendChild(t);break;case Node.ELEMENT_NODE:n=t,s=!0,e.toolsTags[n.tagName]&&(a=e.toolsTags[n.tagName].tool)}var c=o.blockTools[a].pasteConfig.tags.reduce((function(t,e){return t[e.toLowerCase()]={},t}),{}),l=Object.assign({},c,r.getInlineToolsConfig(a));return n.innerHTML=r.clean(n.innerHTML,l),{content:n,isBlock:s,tool:a,event:e.composePasteEvent("tag",{data:n})}})).filter((function(t){return!h.default.isNodeEmpty(t.content)||h.default.isSingleTag(t.content)}))}},{key:"processPlain",value:function(t){var e=this,n=this.config.defaultBlock;if(!t)return[];var o=n;return t.split(/\r?\n/).filter((function(t){return t.trim()})).map((function(t){var n=h.default.make("div");n.textContent=t;var r=e.composePasteEvent("tag",{data:n});return{content:n,tool:o,isBlock:!1,event:r}}))}},{key:"processSingleBlock",value:(p=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.Caret,r=n.BlockManager,a=n.Tools,(s=r.currentBlock)&&e.tool===s.name&&h.default.containsOnlyInlineElements(e.content.innerHTML)){t.next=5;break}return this.insertBlock(e,s&&a.isDefault(s.tool)&&s.isEmpty),t.abrupt("return");case 5:o.insertContentAtCaretPosition(e.content.innerHTML);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},{key:"processInlinePaste",value:(o=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s,c,l,u,f,d;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.BlockManager,r=n.Caret,a=n.Sanitizer,s=n.Tools,c=e.content,!(o.currentBlock&&s.isDefault(o.currentBlock.tool)&&c.textContent.length<w.PATTERN_PROCESSING_MAX_LENGTH)){t.next=12;break}return t.next=6,this.processPattern(c.textContent);case 6:if(!(l=t.sent)){t.next=12;break}return u=o.currentBlock&&s.isDefault(o.currentBlock.tool)&&o.currentBlock.isEmpty,f=o.paste(l.tool,l.event,u),r.setToBlock(f,r.positions.END),t.abrupt("return");case 12:o.currentBlock&&o.currentBlock.currentInput?(d=a.getInlineToolsConfig(o.currentBlock.name),document.execCommand("insertHTML",!1,a.clean(c.innerHTML,d))):this.insertBlock(e);case 13:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"processPattern",value:(n=(0,a.default)(i.default.mark((function t(e){var n,o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.toolsPatterns.find((function(t){var n=t.pattern.exec(e);return!!n&&e===n.shift()}))){t.next=3;break}return t.abrupt("return");case 3:return o=this.composePasteEvent("pattern",{key:n.key,data:e}),t.abrupt("return",{event:o,tool:n.tool});case 5:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"insertBlock",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.Editor,r=o.BlockManager,i=o.Caret,a=r.currentBlock;if(n&&a&&a.isEmpty)return e=r.paste(t.tool,t.event,!0),void i.setToBlock(e,i.positions.END);e=r.paste(t.tool,t.event),i.setToBlock(e,i.positions.END)}},{key:"insertEditorJSData",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.Tools;t.forEach((function(t,e){var r=t.tool,i=t.data,a=!1;0===e&&(a=n.currentBlock&&o.isDefault(n.currentBlock.tool)&&n.currentBlock.isEmpty),n.insert({tool:r,data:i,replace:a})}))}},{key:"processElementNode",value:function(t,e,n){var o=Object.keys(this.toolsTags),i=t,a=(this.toolsTags[i.tagName]||{}).tool,s=void 0===a?"":a,c=this.tagsByTool[s]||[],l=o.includes(i.tagName),u=h.default.blockElements.includes(i.tagName.toLowerCase()),f=Array.from(i.children).some((function(t){var e=t.tagName;return o.includes(e)&&!c.includes(e)})),d=Array.from(i.children).some((function(t){var e=t.tagName;return h.default.blockElements.includes(e.toLowerCase())}));return u||l||f?l&&!f||u&&!d&&!f?[].concat((0,r.default)(e),[n,i]):void 0:(n.appendChild(i),[].concat((0,r.default)(e),[n]))}},{key:"getNodes",value:function(t){var e,n=this;return Array.from(t.childNodes).reduce((function t(o,i){if(h.default.isEmpty(i)&&!h.default.isSingleTag(i))return o;var a=o[o.length-1],s=new DocumentFragment;switch(a&&h.default.isFragment(a)&&(s=o.pop()),i.nodeType){case Node.ELEMENT_NODE:if(e=n.processElementNode(i,o,s))return e;break;case Node.TEXT_NODE:return s.appendChild(i),[].concat((0,r.default)(o),[s]);default:return[].concat((0,r.default)(o),[s])}return[].concat((0,r.default)(o),(0,r.default)(Array.from(i.childNodes).reduce(t,[])))}),[])}},{key:"composePasteEvent",value:function(t,e){return new CustomEvent(t,{detail:e})}}]),w}(p.default);o.default=m,m.displayName="Paste",m.PATTERN_PROCESSING_MAX_LENGTH=450,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(39),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(144)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f);var y=function(t){(0,l.default)(h,t);var e,n,o,d=(e=h,function(){var t,n=(0,f.default)(e);if(v()){var o=(0,f.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,u.default)(this,t)});function h(){var t;return(0,s.default)(this,h),(t=d.apply(this,arguments)).toolsDontSupportReadOnly=[],t.readOnlyEnabled=!1,t}return(0,c.default)(h,[{key:"prepare",value:(o=(0,a.default)(r.default.mark((function t(){var e,n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.Editor.Tools,n=e.blockTools,o=[],Object.entries(n).forEach((function(t){var n=(0,i.default)(t,2),r=n[0],a=n[1];e.isReadOnlySupported(a)||o.push(r)})),this.toolsDontSupportReadOnly=o,this.config.readOnly&&o.length>0&&this.throwCriticalError(),this.toggle(this.config.readOnly);case 7:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"toggle",value:(n=(0,a.default)(r.default.mark((function t(){var e,n,o,i,a=arguments;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=a.length>0&&void 0!==a[0]?a[0]:!this.readOnlyEnabled)&&this.toolsDontSupportReadOnly.length>0&&this.throwCriticalError(),n=this.readOnlyEnabled,this.readOnlyEnabled=e,t.t0=r.default.keys(this.Editor);case 5:if((t.t1=t.t0()).done){t.next=12;break}if(o=t.t1.value,this.Editor[o].toggleReadOnly){t.next=9;break}return t.abrupt("continue",5);case 9:this.Editor[o].toggleReadOnly(e),t.next=5;break;case 12:if(n!==e){t.next=14;break}return t.abrupt("return",this.readOnlyEnabled);case 14:return t.next=16,this.Editor.Saver.save();case 16:return i=t.sent,t.next=19,this.Editor.BlockManager.clear();case 19:return t.next=21,this.Editor.Renderer.render(i.blocks);case 21:return t.abrupt("return",this.readOnlyEnabled);case 22:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"throwCriticalError",value:function(){throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", ")," don't support read-only mode."))}},{key:"isEnabled",get:function(){return this.readOnlyEnabled}}]),h}((d=h(d)).default);o.default=y,y.displayName="ReadOnly",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(25),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(1);function h(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l),u=p(u),f=p(f),d=p(d);var g=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(y()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).isRectSelectionActivated=!1,t.SCROLL_SPEED=3,t.HEIGHT_OF_SCROLL_ZONE=40,t.BOTTOM_SCROLL_ZONE=1,t.TOP_SCROLL_ZONE=2,t.MAIN_MOUSE_BUTTON=0,t.mousedown=!1,t.isScrolling=!1,t.inScrollZone=null,t.startX=0,t.startY=0,t.mouseX=0,t.mouseY=0,t.stackOfSelected=[],t.listenerIds=[],t}return(0,i.default)(o,[{key:"prepare",value:function(){this.enableModuleBindings()}},{key:"startSelection",value:function(t,e){var n=document.elementFromPoint(t-window.pageXOffset,e-window.pageYOffset);n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar))||(this.Editor.BlockSelection.allBlocksSelected=!1,this.clearSelection(),this.stackOfSelected=[]);var o=[".".concat(d.default.CSS.content),".".concat(this.Editor.Toolbar.CSS.toolbar),".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)],r=n.closest("."+this.Editor.UI.CSS.editorWrapper),i=o.some((function(t){return!!n.closest(t)}));r&&!i&&(this.mousedown=!0,this.startX=t,this.startY=e)}},{key:"endSelection",value:function(){this.mousedown=!1,this.startX=0,this.startY=0,this.overlayRectangle.style.display="none"}},{key:"isRectActivated",value:function(){return this.isRectSelectionActivated}},{key:"clearSelection",value:function(){this.isRectSelectionActivated=!1}},{key:"enableModuleBindings",value:function(){var t=this,e=this.Editor.Listeners,n=this.genHTML().container;e.on(n,"mousedown",(function(e){t.processMouseDown(e)}),!1),e.on(document.body,"mousemove",(function(e){t.processMouseMove(e)}),!1),e.on(document.body,"mouseleave",(function(){t.processMouseLeave()})),e.on(window,"scroll",(function(e){t.processScroll(e)}),!1),e.on(document.body,"mouseup",(function(){t.processMouseUp()}),!1)}},{key:"processMouseDown",value:function(t){t.button===this.MAIN_MOUSE_BUTTON&&this.startSelection(t.pageX,t.pageY)}},{key:"processMouseMove",value:function(t){this.changingRectangle(t),this.scrollByZones(t.clientY)}},{key:"processMouseLeave",value:function(){this.clearSelection(),this.endSelection()}},{key:"processScroll",value:function(t){this.changingRectangle(t)}},{key:"processMouseUp",value:function(){this.endSelection()}},{key:"scrollByZones",value:function(t){this.inScrollZone=null,t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.TOP_SCROLL_ZONE),document.documentElement.clientHeight-t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.BOTTOM_SCROLL_ZONE),this.inScrollZone?this.isScrolling||(this.scrollVertical(this.inScrollZone===this.TOP_SCROLL_ZONE?-this.SCROLL_SPEED:this.SCROLL_SPEED),this.isScrolling=!0):this.isScrolling=!1}},{key:"genHTML",value:function(){var t=this.Editor.UI,e=t.nodes.holder.querySelector("."+t.CSS.editorWrapper),n=u.default.make("div",o.CSS.overlay,{}),r=u.default.make("div",o.CSS.overlayContainer,{}),i=u.default.make("div",o.CSS.rect,{});return r.appendChild(i),n.appendChild(r),e.appendChild(n),this.overlayRectangle=i,{container:e,overlay:n}}},{key:"scrollVertical",value:function(t){var e=this;if(this.inScrollZone&&this.mousedown){var n=window.pageYOffset;window.scrollBy(0,t),this.mouseY+=window.pageYOffset-n,setTimeout((function(){e.scrollVertical(t)}),0)}}},{key:"changingRectangle",value:function(t){if(this.mousedown){void 0!==t.pageY&&(this.mouseX=t.pageX,this.mouseY=t.pageY);var e=this.genInfoForMouseSelection(),n=e.rightPos,o=e.leftPos,r=e.index,i=this.startX>n&&this.mouseX>n,a=this.startX<o&&this.mouseX<o;this.rectCrossesBlocks=!(i||a),this.isRectSelectionActivated||(this.rectCrossesBlocks=!1,this.isRectSelectionActivated=!0,this.shrinkRectangleToPoint(),this.overlayRectangle.style.display="block"),this.updateRectangleSize(),void 0!==r&&(this.trySelectNextBlock(r),this.inverseSelection(),f.default.get().removeAllRanges(),t.preventDefault())}}},{key:"shrinkRectangleToPoint",value:function(){this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px")}},{key:"inverseSelection",value:function(){var t=this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;if(this.rectCrossesBlocks&&!t){var e,n=h(this.stackOfSelected);try{for(n.s();!(e=n.n()).done;){var o=e.value;this.Editor.BlockSelection.selectBlockByIndex(o)}}catch(t){n.e(t)}finally{n.f()}}if(!this.rectCrossesBlocks&&t){var r,i=h(this.stackOfSelected);try{for(i.s();!(r=i.n()).done;){var a=r.value;this.Editor.BlockSelection.unSelectBlockByIndex(a)}}catch(t){i.e(t)}finally{i.f()}}}},{key:"updateRectangleSize",value:function(){this.mouseY>=this.startY?(this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.mouseY-window.pageYOffset,"px")):(this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.top="".concat(this.mouseY-window.pageYOffset,"px")),this.mouseX>=this.startX?(this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.mouseX-window.pageXOffset,"px")):(this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.left="".concat(this.mouseX-window.pageXOffset,"px"))}},{key:"genInfoForMouseSelection",value:function(){var t,e=document.body.offsetWidth/2,n=this.mouseY-window.pageYOffset,o=document.elementFromPoint(e,n),r=this.Editor.BlockManager.getBlockByChildNode(o);void 0!==r&&(t=this.Editor.BlockManager.blocks.findIndex((function(t){return t.holder===r.holder})));var i=this.Editor.BlockManager.lastBlock.holder.querySelector("."+d.default.CSS.content),a=Number.parseInt(window.getComputedStyle(i).width,10)/2;return{index:t,leftPos:e-a,rightPos:e+a}}},{key:"addBlockInSelection",value:function(t){this.rectCrossesBlocks&&this.Editor.BlockSelection.selectBlockByIndex(t),this.stackOfSelected.push(t)}},{key:"trySelectNextBlock",value:function(t){var e=this,n=this.stackOfSelected[this.stackOfSelected.length-1]===t,o=this.stackOfSelected.length;if(!n){var r=this.stackOfSelected[o-1]-this.stackOfSelected[o-2]>0,i=0;o>1&&(i=r?1:-1);var a=t>this.stackOfSelected[o-1]&&1===i,s=t<this.stackOfSelected[o-1]&&-1===i,c=!(a||s||0===i);if(c||!(t>this.stackOfSelected[o-1]||void 0===this.stackOfSelected[o-1])){if(!c&&t<this.stackOfSelected[o-1])for(var l=this.stackOfSelected[o-1]-1;l>=t;l--)this.addBlockInSelection(l);else if(c){var u,f=o-1;for(u=t>this.stackOfSelected[o-1]?function(){return t>e.stackOfSelected[f]}:function(){return t<e.stackOfSelected[f]};u();)this.rectCrossesBlocks&&this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]),this.stackOfSelected.pop(),f--}}else for(var d=this.stackOfSelected[o-1]+1||t;d<=t;d++)this.addBlockInSelection(d)}}}],[{key:"CSS",get:function(){return{overlay:"codex-editor-overlay",overlayContainer:"codex-editor-overlay__container",rect:"codex-editor-overlay__rectangle",topScrollZone:"codex-editor-overlay__scroll-zone--top",bottomScrollZone:"codex-editor-overlay__scroll-zone--bottom"}}}]),o}(l.default);o.default=g,g.displayName="RectangleSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(13),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f),d=p(d);var y=function(t){(0,c.default)(p,t);var e,n,o,f=(e=p,function(){var t,n=(0,u.default)(e);if(v()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function p(){return(0,a.default)(this,p),f.apply(this,arguments)}return(0,s.default)(p,[{key:"render",value:(o=(0,i.default)(r.default.mark((function t(e){var n,o,i=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.map((function(t){return{function:function(){return i.insertBlock(t)}}})),t.next=3,d.sequence(n);case 3:return o=t.sent,this.Editor.UI.checkEmptiness(),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"insertBlock",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s,c,l,u;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.Tools,i=n.BlockManager,a=e.type,s=e.data,!(a in o.available)){t.next=14;break}t.prev=4,i.insert({tool:a,data:s}),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(4),d.log("Block «".concat(a,"» skipped because of plugins error"),"warn",s),Error(t.t0);case 12:t.next=19;break;case 14:c={savedData:{type:a,data:s},title:a},a in o.unavailable&&(l=o.unavailable[a].toolbox,u=o.getToolSettings(a).toolbox,c.title=l.title||u&&u.title||c.title),i.insert({tool:o.stubTool,data:c}).stretched=!0,d.log("Tool «".concat(a,"» is not found. Check 'tools' property at your initial Editor.js config."),"warn");case 19:case"end":return t.stop()}}),t,this,[[4,8]])}))),function(t){return n.apply(this,arguments)})}]),p}(f.default);o.default=y,y.displayName="Renderer",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(52),n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(385)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(13),v=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),c=v(c),l=v(l),u=v(u),f=v(f),d=h(d),p=v(p);var g=function(t){(0,c.default)(o,t);var e,n=(e=o,function(){var t,n=(0,u.default)(e);if(y()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function o(){var t;return(0,a.default)(this,o),(t=n.apply(this,arguments)).configCache={},t.inlineToolsConfigCache=null,t}return(0,s.default)(o,[{key:"sanitizeBlocks",value:function(t){var e=this;return t.map((function(t){var n=e.composeToolConfig(t.tool);return d.isEmpty(n)||(t.data=e.deepSanitize(t.data,n)),t}))}},{key:"deepSanitize",value:function(t,e){return Array.isArray(t)?this.cleanArray(t,e):"object"===(0,i.default)(t)?this.cleanObject(t,e):"string"==typeof t?this.cleanOneItem(t,e):t}},{key:"clean",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={tags:e},o=this.createHTMLJanitorInstance(n);return o.clean(t)}},{key:"composeToolConfig",value:function(t){if(this.configCache[t])return this.configCache[t];var e=this.Editor.Tools.INTERNAL_SETTINGS.SANITIZE_CONFIG,n=this.Editor.Tools.available[t],o=this.getInlineToolsConfig(t);if(!n.sanitize||n[e]&&d.isEmpty(n[e]))return o;var r=n.sanitize,a={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){var c=r[s];"object"===(0,i.default)(c)?a[s]=Object.assign({},o,c):a[s]=c}return this.configCache[t]=a,a}},{key:"getInlineToolsConfig",value:function(t){var e=this.Editor.Tools,n=e.getToolSettings(t).inlineToolbar||[],o={};return"boolean"==typeof n&&n?o=this.getAllInlineToolsConfig():n.map((function(t){o=Object.assign(o,e.inline[t][e.INTERNAL_SETTINGS.SANITIZE_CONFIG])})),o.br=!0,o.wbr=!0,o}},{key:"getAllInlineToolsConfig",value:function(){var t=this.Editor.Tools;if(this.inlineToolsConfigCache)return this.inlineToolsConfigCache;var e={};return Object.entries(t.inline).forEach((function(n){var o=(0,r.default)(n,2)[1];Object.assign(e,o[t.INTERNAL_SETTINGS.SANITIZE_CONFIG])})),this.inlineToolsConfigCache=e,this.inlineToolsConfigCache}},{key:"cleanArray",value:function(t,e){var n=this;return t.map((function(t){return n.deepSanitize(t,e)}))}},{key:"cleanObject",value:function(t,e){var n={};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var r=t[o],i=this.isRule(e[o])?e[o]:e;n[o]=this.deepSanitize(r,i)}return n}},{key:"cleanOneItem",value:function(t,e){return"object"===(0,i.default)(e)?this.clean(t,e):!1===e?this.clean(t,{}):t}},{key:"isRule",value:function(t){return"object"===(0,i.default)(t)||"boolean"==typeof t||d.isFunction(t)}},{key:"createHTMLJanitorInstance",value:function(t){return t?new p.default(t):null}}]),o}(f.default);o.default=g,g.displayName="Sanitizer",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(13),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f),d=p(d);var y=function(t){(0,c.default)(p,t);var e,n,o,f=(e=p,function(){var t,n=(0,u.default)(e);if(v()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function p(){return(0,a.default)(this,p),f.apply(this,arguments)}return(0,s.default)(p,[{key:"save",value:(o=(0,i.default)(r.default.mark((function t(){var e,n,o,i,a,s,c,l,u=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.Editor,n=e.BlockManager,o=e.Sanitizer,i=e.ModificationsObserver,a=n.blocks,s=[],i.disable(),t.prev=3,a.forEach((function(t){s.push(u.getSavedData(t))})),t.next=7,Promise.all(s);case 7:return c=t.sent,t.next=10,o.sanitizeBlocks(c);case 10:return l=t.sent,t.abrupt("return",this.makeOutput(l));case 12:return t.prev=12,i.enable(),t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[3,,12,15]])}))),function(){return o.apply(this,arguments)})},{key:"getSavedData",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.save();case 2:if(n=t.sent,t.t0=n,!t.t0){t.next=8;break}return t.next=7,e.validate(n.data);case 7:t.t0=t.sent;case 8:return o=t.t0,t.abrupt("return",Object.assign(Object.assign({},n),{isValid:o}));case 10:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},{key:"makeOutput",value:function(t){var e=this,n=0,o=[];return d.log("[Editor.js saving]:","groupCollapsed"),t.forEach((function(t){var r=t.tool,i=t.data,a=t.time,s=t.isValid;if(n+=a,d.log("".concat(r.charAt(0).toUpperCase()+r.slice(1)),"group"),!s)return d.log("Block «".concat(r,"» skipped because saved data is invalid")),void d.log(void 0,"groupEnd");d.log(i),d.log(void 0,"groupEnd"),r!==e.Editor.Tools.stubTool?o.push({type:r,data:i}):o.push(i)})),d.log("Total","log",n),d.log(void 0,"groupEnd"),{time:+new Date,blocks:o,version:"2.19.0"}}}]),p}(f.default);o.default=y,y.displayName="Saver",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(386),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).registeredShortcuts=[],t}return(0,i.default)(o,[{key:"add",value:function(t){var e=new l.default({name:t.name,on:document,callback:t.handler});this.registeredShortcuts.push(e)}},{key:"remove",value:function(t){var e=this.registeredShortcuts.findIndex((function(e){return e.name===t}));-1!==e&&this.registeredShortcuts[e]&&(this.registeredShortcuts[e].remove(),this.registeredShortcuts.splice(e,1))}}]),o}((u=f(u)).default);o.default=p,p.displayName="Shortcuts",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(60),n(8),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(13),v=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),c=v(c),l=v(l),u=v(u),f=v(f),d=h(d),p=v(p);var g=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(y()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).buttons=[],t.flipper=null,t.selection=new p.default,t}return(0,i.default)(o,[{key:"make",value:function(){this.nodes.wrapper=u.default.make("div",this.CSS.wrapper),this.nodes.toolSettings=u.default.make("div",this.CSS.toolSettings),this.nodes.defaultSettings=u.default.make("div",this.CSS.defaultSettings),u.default.append(this.nodes.wrapper,[this.nodes.toolSettings,this.nodes.defaultSettings]),this.enableFlipper()}},{key:"destroy",value:function(){this.flipper.deactivate(),this.flipper=null,this.removeAllNodes()}},{key:"open",value:function(){this.nodes.wrapper.classList.add(this.CSS.wrapperOpened),this.selection.save(),this.Editor.BlockManager.currentBlock.selected=!0,this.Editor.BlockSelection.clearCache(),this.addToolSettings(),this.addDefaultSettings(),this.Editor.Events.emit(this.events.opened),this.flipper.activate(this.blockTunesButtons)}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened),p.default.isAtEditor||this.selection.restore(),this.selection.clearSaved(),this.nodes.toolSettings.innerHTML="",this.nodes.defaultSettings.innerHTML="",this.Editor.Events.emit(this.events.closed),this.buttons=[],this.flipper.deactivate()}},{key:"addToolSettings",value:function(){d.isFunction(this.Editor.BlockManager.currentBlock.tool.renderSettings)&&u.default.append(this.nodes.toolSettings,this.Editor.BlockManager.currentBlock.tool.renderSettings())}},{key:"addDefaultSettings",value:function(){u.default.append(this.nodes.defaultSettings,this.Editor.BlockManager.currentBlock.renderTunes())}},{key:"enableFlipper",value:function(){var t=this;this.flipper=new f.default({focusedItemClass:this.CSS.focusedButton,activateCallback:function(e){e&&u.default.canSetCaret(e)?t.close():d.delay((function(){t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock)}),50)()}})}},{key:"events",get:function(){return{opened:"block-settings-opened",closed:"block-settings-closed"}}},{key:"CSS",get:function(){return{wrapper:"ce-settings",wrapperOpened:"ce-settings--opened",toolSettings:"ce-settings__plugin-zone",defaultSettings:"ce-settings__default-zone",button:"ce-settings__button",focusedButton:"ce-settings__button--focused",focusedButtonAnimated:"ce-settings__button--focused-animated"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened)}},{key:"blockTunesButtons",get:function(){var t=this,e=this.Editor.StylesAPI;if(0!==this.buttons.length)return this.buttons;var n=this.nodes.toolSettings.querySelectorAll(".".concat(e.classes.settingsButton,", ").concat(u.default.allInputsSelector)),o=this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));return n.forEach((function(e){t.buttons.push(e)})),o.forEach((function(e){t.buttons.push(e)})),this.buttons}}]),o}(l.default);o.default=g,g.displayName="BlockSettings",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(21),n(22),n(66),n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8),n(60),n(59),n(82)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y,g,b){"use strict";var m=n(13),k=n(1);function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=k(r),i=k(i),a=k(a),s=k(s),c=k(c),l=k(l),u=k(u),f=k(f),d=k(d),p=k(p),h=k(h),v=m(v),y=k(y),g=k(g);var S=function(t){(0,u.default)(p,t);var e,n,o=(e=p,function(){var t,n=(0,d.default)(e);if(x()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function p(){var t;return(0,c.default)(this,p),(t=o.apply(this,arguments)).opened=!1,t.tools={},t.flipper=null,t.togglingCallback=null,t}return(0,l.default)(p,[{key:"make",value:function(){this.nodes.wrapper=h.default.make("div",[p.CSS.conversionToolbarWrapper].concat((0,s.default)(this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]))),this.nodes.tools=h.default.make("div",p.CSS.conversionToolbarTools);var t=h.default.make("div",p.CSS.conversionToolbarLabel,{textContent:g.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter,"Convert to")});return this.addTools(),this.enableFlipper(),h.default.append(this.nodes.wrapper,t),h.default.append(this.nodes.wrapper,this.nodes.tools),this.nodes.wrapper}},{key:"destroy",value:function(){this.flipper.deactivate(),this.flipper=null,this.removeAllNodes()}},{key:"toggle",value:function(t){this.opened?this.close():this.open(),v.isFunction(t)&&(this.togglingCallback=t)}},{key:"open",value:function(){var t=this;this.filterTools(),this.opened=!0,this.nodes.wrapper.classList.add(p.CSS.conversionToolbarShowed),setTimeout((function(){t.flipper.activate(Object.values(t.tools).filter((function(t){return!t.classList.contains(p.CSS.conversionToolHidden)}))),t.flipper.focusFirst(),v.isFunction(t.togglingCallback)&&t.togglingCallback(!0)}),50)}},{key:"close",value:function(){this.opened=!1,this.flipper.deactivate(),this.nodes.wrapper.classList.remove(p.CSS.conversionToolbarShowed),v.isFunction(this.togglingCallback)&&this.togglingCallback(!1)}},{key:"hasTools",value:function(){var t=Object.keys(this.tools);return!(1===t.length&&t.shift()===this.config.defaultBlock)}},{key:"replaceWithBlock",value:(n=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s,c,l,u,f,d,p,h=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.Editor.BlockManager.currentBlock.class,o=this.Editor.BlockManager.currentBlock.name,t.next=4,this.Editor.BlockManager.currentBlock.save();case 4:if(r=t.sent,a=this.Editor.Tools.INTERNAL_SETTINGS,s=r.data,o===e&&(e=this.config.defaultBlock),c=this.Editor.Tools.toolsClasses[e],l="",u=n[a.CONVERSION_CONFIG].export,!v.isFunction(u)){t.next=15;break}l=u(s),t.next=21;break;case 15:if("string"!=typeof u){t.next=19;break}l=s[u],t.next=21;break;case 19:return v.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."),t.abrupt("return");case 21:if(f=this.Editor.Sanitizer.clean(l,c.sanitize),d={},p=c[a.CONVERSION_CONFIG].import,!v.isFunction(p)){t.next=28;break}d=p(f),t.next=34;break;case 28:if("string"!=typeof p){t.next=32;break}d[p]=f,t.next=34;break;case 32:return v.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."),t.abrupt("return");case 34:this.Editor.BlockManager.replace({tool:e,data:d}),this.Editor.BlockSelection.clearSelection(),this.close(),this.Editor.InlineToolbar.close(),v.delay((function(){h.Editor.Caret.setToBlock(h.Editor.BlockManager.currentBlock)}),10)();case 39:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"addTools",value:function(){var t=this.Editor.Tools.blockTools;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var n=this.Editor.Tools.INTERNAL_SETTINGS,o=t[e],r=o[n.TOOLBOX],i=o[n.CONVERSION_CONFIG],a=this.Editor.Tools.USER_SETTINGS,s=this.Editor.Tools.getToolSettings(e)[a.TOOLBOX],c=null!=s?s:r;!v.isEmpty(c)&&c.icon&&i&&i.import&&this.addTool(e,c.icon,c.title)}}},{key:"addTool",value:function(t,e,n){var o=this,r=h.default.make("div",[p.CSS.conversionTool]),s=h.default.make("div",[p.CSS.conversionToolIcon]);r.dataset.tool=t,s.innerHTML=e,h.default.append(r,s),h.default.append(r,h.default.text(g.default.t(b.I18nInternalNS.toolNames,n||v.capitalize(t)))),h.default.append(this.nodes.tools,r),this.tools[t]=r,this.Editor.Listeners.on(r,"click",(0,a.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.replaceWithBlock(t);case 2:case"end":return e.stop()}}),e)}))))}},{key:"filterTools",value:function(){var t=this.Editor.BlockManager.currentBlock;Object.entries(this.tools).forEach((function(e){var n=(0,r.default)(e,2),o=n[0],i=n[1];i.hidden=!1,i.classList.toggle(p.CSS.conversionToolHidden,o===t.name)}))}},{key:"enableFlipper",value:function(){this.flipper=new y.default({focusedItemClass:p.CSS.conversionToolFocused})}}],[{key:"CSS",get:function(){return{conversionToolbarWrapper:"ce-conversion-toolbar",conversionToolbarShowed:"ce-conversion-toolbar--showed",conversionToolbarTools:"ce-conversion-toolbar__tools",conversionToolbarLabel:"ce-conversion-toolbar__label",conversionTool:"ce-conversion-tool",conversionToolHidden:"ce-conversion-tool--hidden",conversionToolIcon:"ce-conversion-tool__icon",conversionToolFocused:"ce-conversion-tool--focused",conversionToolActive:"ce-conversion-tool--active"}}}]),p}(p.default);o.default=S,S.displayName="ConversionToolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(66),n(39),n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(25),n(8),n(60),n(59),n(82)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y,g){"use strict";var b=n(13),m=n(1);function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=m(r),i=m(i),a=m(a),s=m(s),c=m(c),l=m(l),u=m(u),f=m(f),d=m(d),p=m(p),h=b(h),v=m(v),y=m(y);var x=function(t){(0,c.default)(o,t);var e,n=(e=o,function(){var t,n=(0,u.default)(e);if(k()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function o(){var t;return(0,a.default)(this,o),(t=n.apply(this,arguments)).CSS={inlineToolbar:"ce-inline-toolbar",inlineToolbarShowed:"ce-inline-toolbar--showed",inlineToolbarLeftOriented:"ce-inline-toolbar--left-oriented",inlineToolbarRightOriented:"ce-inline-toolbar--right-oriented",inlineToolbarShortcut:"ce-inline-toolbar__shortcut",buttonsWrapper:"ce-inline-toolbar__buttons",actionsWrapper:"ce-inline-toolbar__actions",inlineToolButton:"ce-inline-tool",inputField:"cdx-input",focusedButton:"ce-inline-tool--focused",conversionToggler:"ce-inline-toolbar__dropdown",conversionTogglerHidden:"ce-inline-toolbar__dropdown--hidden",conversionTogglerContent:"ce-inline-toolbar__dropdown-content",togglerAndButtonsWrapper:"ce-inline-toolbar__toggler-and-button-wrapper"},t.opened=!1,t.toolbarVerticalMargin=5,t.buttonsList=null,t.width=0,t.flipper=null,t}return(0,s.default)(o,[{key:"toggleReadOnly",value:function(t){t?this.destroy():this.make()}},{key:"tryToShow",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.allowedToShow()?(this.move(),this.open(),this.Editor.Toolbar.close()):t&&this.close()}},{key:"move",value:function(){var t=p.default.rect,e=this.Editor.UI.nodes.wrapper.getBoundingClientRect(),n={x:t.x-e.left,y:t.y+t.height-e.top+this.toolbarVerticalMargin};t.width&&(n.x+=Math.floor(t.width/2));var o=n.x-this.width/2,r=n.x+this.width/2;this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented,o<this.Editor.UI.contentRect.left),this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented,r>this.Editor.UI.contentRect.right),this.nodes.wrapper.style.left=Math.floor(n.x)+"px",this.nodes.wrapper.style.top=Math.floor(n.y)+"px"}},{key:"close",value:function(){this.opened&&(this.Editor.ReadOnly.isEnabled||(this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed),this.toolsInstances.forEach((function(t){h.isFunction(t.clear)&&t.clear()})),this.opened=!1,this.flipper.deactivate(),this.Editor.ConversionToolbar.close()))}},{key:"open",value:function(){if(!this.opened){this.addToolsFiltered(),this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed),this.buttonsList=this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)),this.opened=!0,this.Editor.ConversionToolbar.hasTools()?this.setConversionTogglerContent():this.nodes.conversionToggler.hidden=!0;var t=Array.from(this.buttonsList);t.unshift(this.nodes.conversionToggler),t=t.filter((function(t){return!t.hidden})),this.flipper.activate(t)}}},{key:"containsNode",value:function(t){return this.nodes.wrapper.contains(t)}},{key:"destroy",value:function(){this.flipper.deactivate(),this.flipper=null,this.Editor.ConversionToolbar.destroy()}},{key:"getInlineToolbarSettings",value:function(t){var e=this,n=this.Editor.Tools.getToolSettings(t)[this.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS];if(!0!==n&&!Array.isArray(n))return!1;if(Array.isArray(n))return n;var o=this.config.inlineToolbar;return Array.isArray(o)?o:!0===o&&Object.entries(this.Editor.Tools.available).filter((function(t){var n=(0,i.default)(t,2);return n[0],n[1][e.Editor.Tools.INTERNAL_SETTINGS.IS_INLINE]})).map((function(t){var e=(0,i.default)(t,2),n=e[0];return e[1],n}))}},{key:"make",value:function(){var t=this;this.nodes.wrapper=d.default.make("div",[this.CSS.inlineToolbar].concat((0,r.default)(this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]))),this.nodes.togglerAndButtonsWrapper=d.default.make("div",this.CSS.togglerAndButtonsWrapper),this.nodes.buttons=d.default.make("div",this.CSS.buttonsWrapper),this.nodes.actions=d.default.make("div",this.CSS.actionsWrapper),this.Editor.Listeners.on(this.nodes.wrapper,"mousedown",(function(e){e.target.closest(".".concat(t.CSS.actionsWrapper))||e.preventDefault()})),d.default.append(this.nodes.wrapper,[this.nodes.togglerAndButtonsWrapper,this.nodes.actions]),d.default.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper),this.addConversionToggler(),d.default.append(this.nodes.togglerAndButtonsWrapper,this.nodes.buttons),this.prepareConversionToolbar(),this.recalculateWidth(),this.enableFlipper()}},{key:"allowedToShow",value:function(){var t=p.default.get(),e=p.default.text;if(!t||!t.anchorNode)return!1;if(t.isCollapsed||e.length<1)return!1;var n=d.default.isElement(t.anchorNode)?t.anchorNode:t.anchorNode.parentElement;if(t&&["IMG","INPUT"].includes(n.tagName))return!1;if(null===n.closest('[contenteditable="true"]'))return!1;var o=this.Editor.BlockManager.getBlock(t.anchorNode);return!!o&&!1!==this.getInlineToolbarSettings(o.name)}},{key:"recalculateWidth",value:function(){this.width=this.nodes.wrapper.offsetWidth}},{key:"addConversionToggler",value:function(){var t=this;this.nodes.conversionToggler=d.default.make("div",this.CSS.conversionToggler),this.nodes.conversionTogglerContent=d.default.make("div",this.CSS.conversionTogglerContent);var e=d.default.svg("toggler-down",13,13);this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent),this.nodes.conversionToggler.appendChild(e),this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler),this.Editor.Listeners.on(this.nodes.conversionToggler,"click",(function(){t.Editor.ConversionToolbar.toggle((function(e){!e&&t.opened?t.flipper.activate():t.opened&&t.flipper.deactivate()}))})),this.Editor.Tooltip.onHover(this.nodes.conversionToggler,y.default.ui(g.I18nInternalNS.ui.inlineToolbar.converter,"Convert to"),{placement:"top",hidingDelay:100})}},{key:"setConversionTogglerContent",value:function(){var t=this.Editor,e=t.BlockManager,n=t.Tools,o=e.currentBlock.name,r=n.available[o][n.INTERNAL_SETTINGS.CONVERSION_CONFIG]||{},i=r&&r.export;this.nodes.conversionToggler.hidden=!i,this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden,!i);var a=n.getToolSettings(o),s=n.available[o][n.INTERNAL_SETTINGS.TOOLBOX]||{},c=a.toolbox||{};this.nodes.conversionTogglerContent.innerHTML=c.icon||s.icon||c.title||s.title||h.capitalize(o)}},{key:"prepareConversionToolbar",value:function(){var t=this.Editor.ConversionToolbar.make();d.default.append(this.nodes.wrapper,t)}},{key:"addToolsFiltered",value:function(){var t=this,e=p.default.get(),n=this.Editor.BlockManager.getBlock(e.anchorNode);this.nodes.buttons.innerHTML="",this.nodes.actions.innerHTML="",this.toolsInstances=new Map,this.getInlineToolbarSettings(n.name).forEach((function(e){var n=t.Editor.Tools.getToolSettings(e),o=t.Editor.Tools.constructInline(t.Editor.Tools.inline[e],e,n);t.addTool(e,o),o.checkState(p.default.get())})),this.recalculateWidth()}},{key:"addTool",value:function(t,e){var n=this,o=this.Editor,r=o.Listeners,a=o.Tools,s=o.Tooltip,c=e.render();if(c){if(c.dataset.tool=t,this.nodes.buttons.appendChild(c),this.toolsInstances.set(t,e),h.isFunction(e.renderActions)){var l=e.renderActions();this.nodes.actions.appendChild(l)}r.on(c,"click",(function(t){n.toolClicked(e),t.preventDefault()}));var u=a.getToolSettings(t),f=null;Object.entries(a.internalTools).filter((function(t){var e=(0,i.default)(t,2)[1];return h.isFunction(e)?e[a.INTERNAL_SETTINGS.IS_INLINE]:e.class[a.INTERNAL_SETTINGS.IS_INLINE]})).map((function(t){return(0,i.default)(t,1)[0]})).includes(t)?f=this.inlineTools[t][a.INTERNAL_SETTINGS.SHORTCUT]:u&&u[a.USER_SETTINGS.SHORTCUT]?f=u[a.USER_SETTINGS.SHORTCUT]:e.shortcut&&(f=e.shortcut),f&&this.enableShortcuts(e,f);var p=d.default.make("div"),v=y.default.t(g.I18nInternalNS.toolNames,a.toolsClasses[t][a.INTERNAL_SETTINGS.TITLE]||h.capitalize(t));p.appendChild(d.default.text(v)),f&&p.appendChild(d.default.make("div",this.CSS.inlineToolbarShortcut,{textContent:h.beautifyShortcut(f)})),s.onHover(c,p,{placement:"top",hidingDelay:100})}else h.log("Render method must return an instance of Node","warn",t)}},{key:"enableShortcuts",value:function(t,e){var n=this;this.Editor.Shortcuts.add({name:e,handler:function(e){var o=n.Editor.BlockManager.currentBlock;if(o){var r=n.Editor.Tools.getToolSettings(o.name);r&&r[n.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS]&&(e.preventDefault(),n.toolClicked(t))}}})}},{key:"toolClicked",value:function(t){var e=p.default.range;t.surround(e),this.checkToolsState()}},{key:"checkToolsState",value:function(){this.toolsInstances.forEach((function(t){t.checkState(p.default.get())}))}},{key:"enableFlipper",value:function(){this.flipper=new v.default({focusedItemClass:this.CSS.focusedButton,allowArrows:!1})}},{key:"inlineTools",get:function(){var t={};for(var e in this.Editor.Tools.inline)if(Object.prototype.hasOwnProperty.call(this.Editor.Tools.inline,e)){var n=this.Editor.Tools.getToolSettings(e);t[e]=this.Editor.Tools.constructInline(this.Editor.Tools.inline[e],e,n)}return t}}]),o}(f.default);o.default=x,x.displayName="InlineToolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8),n(60),n(61),n(59),n(82)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v){"use strict";var y=n(13),g=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),c=g(c),l=g(l),u=g(u),f=y(f),d=g(d),h=g(h);var m=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(b()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).nodes={toolbox:null,buttons:[]},t.opened=!1,t.displayedToolsCount=0,t.flipper=null,t}return(0,i.default)(o,[{key:"make",value:function(){this.nodes.toolbox=u.default.make("div",this.CSS.toolbox),this.addTools(),this.enableFlipper()}},{key:"destroy",value:function(){this.flipper.deactivate(),this.flipper=null,this.removeAllNodes(),this.removeAllShortcuts()}},{key:"toolButtonActivate",value:function(t,e){var n=this.Editor.Tools.toolsClasses[e];this.insertNewBlock(n,e)}},{key:"open",value:function(){this.isEmpty||(this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier),this.nodes.toolbox.classList.add(this.CSS.toolboxOpened),this.opened=!0,this.flipper.activate())}},{key:"close",value:function(){this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened),this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier),this.opened=!1,this.flipper.deactivate()}},{key:"toggle",value:function(){this.opened?this.close():this.open()}},{key:"addTools",value:function(){var t=this.Editor.Tools.available;for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&this.addTool(e,t[e])}},{key:"addTool",value:function(t,e){var n=this,o=this.Editor.Tools.INTERNAL_SETTINGS,r=this.Editor.Tools.USER_SETTINGS,i=e[o.TOOLBOX];if(!f.isEmpty(i))if(!i||i.icon){var a=this.Editor.Tools.getToolSettings(t)[r.TOOLBOX];if(!1!==(null!=a?a:i)){var s=u.default.make("li",[this.CSS.toolboxButton]);s.dataset.tool=t,s.innerHTML=a&&a.icon||i.icon,u.default.append(this.nodes.toolbox,s),this.nodes.toolbox.appendChild(s),this.nodes.buttons.push(s),this.Editor.Listeners.on(s,"click",(function(e){n.toolButtonActivate(e,t)}));var c=this.drawTooltip(t);this.Editor.Tooltip.onHover(s,c,{placement:"bottom",hidingDelay:200});var l=this.getToolShortcut(t,e);l&&this.enableShortcut(e,t,l),this.displayedToolsCount++}}else f.log("Toolbar icon is missed. Tool %o skipped","warn",t)}},{key:"getToolShortcut",value:function(t,e){var n=this.Editor.Tools.getToolSettings(t),o=e[this.Editor.Tools.INTERNAL_SETTINGS.SHORTCUT];return(n?n[this.Editor.Tools.USER_SETTINGS.SHORTCUT]:null)||o}},{key:"drawTooltip",value:function(t){var e=this.Editor.Tools.available[t],n=this.Editor.Tools.getToolSettings(t),o=this.Editor.Tools.available[t][this.Editor.Tools.INTERNAL_SETTINGS.TOOLBOX]||{},r=n.toolbox||{},i=h.default.t(v.I18nInternalNS.toolNames,r.title||o.title||t),a=this.getToolShortcut(t,e),s=u.default.make("div",this.CSS.buttonTooltip),c=document.createTextNode(f.capitalize(i));return s.appendChild(c),a&&(a=f.beautifyShortcut(a),s.appendChild(u.default.make("div",this.CSS.buttonShortcut,{textContent:a}))),s}},{key:"enableShortcut",value:function(t,e,n){var o=this;this.Editor.Shortcuts.add({name:n,handler:function(n){n.preventDefault(),o.insertNewBlock(t,e)}})}},{key:"removeAllShortcuts",value:function(){var t=this.Editor.Tools.available;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var n=this.getToolShortcut(e,t[e]);n&&this.Editor.Shortcuts.remove(n)}}},{key:"enableFlipper",value:function(){var t=Array.from(this.nodes.toolbox.childNodes);this.flipper=new d.default({items:t,focusedItemClass:this.CSS.toolboxButtonActive})}},{key:"insertNewBlock",value:function(t,e){var n=this.Editor,o=n.BlockManager,r=n.Caret,i=o.currentBlock,a=o.insert({tool:e,replace:i.isEmpty});a.call(p.BlockToolAPI.APPEND_CALLBACK),this.Editor.Caret.setToBlock(a),0===a.inputs.length&&(a===o.lastBlock?(o.insertAtEnd(),r.setToBlock(o.lastBlock)):r.setToBlock(o.nextBlock)),this.Editor.Toolbar.close()}},{key:"CSS",get:function(){return{toolbox:"ce-toolbox",toolboxButton:"ce-toolbox__button",toolboxButtonActive:"ce-toolbox__button--active",toolboxOpened:"ce-toolbox--opened",openedToolbarHolderModifier:"codex-editor--toolbox-opened",buttonTooltip:"ce-toolbox-button-tooltip",buttonShortcut:"ce-toolbox-button-tooltip__shortcut"}}},{key:"isEmpty",get:function(){return 0===this.displayedToolsCount}}]),o}(l.default);o.default=m,m.displayName="Toolbox",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(387)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l),u=f(u);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(t){var e,i=t.config;return(0,r.default)(this,o),(e=n.call(this,{config:i})).lib=new u.default,e}return(0,i.default)(o,[{key:"show",value:function(t,e,n){this.lib.show(t,e,n)}},{key:"hide",value:function(){this.lib.hide()}},{key:"onHover",value:function(t,e,n){this.lib.onHover(t,e,n)}}]),o}(l.default);o.default=p,p.displayName="Tooltip",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(66),n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(388),n(7),n(15),n(8),n(25),n(61),n(60)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y,g,b,m){"use strict";var k=n(13),x=n(1);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=x(r),i=x(i),a=x(a),s=x(s),c=x(c),l=x(l),u=x(u),f=x(f),d=x(d),p=x(p),h=x(h),v=x(v),y=k(y),g=x(g),b=x(b),m=x(m);var w=function(t){(0,u.default)(k,t);var e,o,h=(e=k,function(){var t,n=(0,d.default)(e);if(S()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function k(){var t;return(0,c.default)(this,k),(t=h.apply(this,arguments)).isMobile=!1,t.contentRectCache=void 0,t.resizeDebouncer=y.debounce((function(){t.windowResize()}),200),t}return(0,l.default)(k,[{key:"addLoader",value:function(){this.nodes.loader=v.default.make("div",this.CSS.editorLoader),this.nodes.wrapper.prepend(this.nodes.loader),this.nodes.redactor.classList.add(this.CSS.editorZoneHidden)}},{key:"removeLoader",value:function(){this.nodes.loader.remove(),this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden)}},{key:"prepare",value:(o=(0,s.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.checkIsMobile(),this.make(),this.addLoader(),this.appendSVGSprite(),this.loadStyles();case 5:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"checkEmptiness",value:function(){var t=this.Editor.BlockManager;this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty,t.isEditorEmpty)}},{key:"destroy",value:function(){this.nodes.holder.innerHTML=""}},{key:"closeAllToolbars",value:function(){var t=this.Editor,e=t.Toolbox,n=t.BlockSettings,o=t.InlineToolbar,r=t.ConversionToolbar;n.close(),o.close(),r.close(),e.close()}},{key:"checkIsMobile",value:function(){this.isMobile=window.innerWidth<650}},{key:"make",value:function(){this.nodes.holder=v.default.getHolder(this.config.holder),this.nodes.wrapper=v.default.make("div",[this.CSS.editorWrapper].concat((0,i.default)(this.isRtl?[this.CSS.editorRtlFix]:[]))),this.nodes.redactor=v.default.make("div",this.CSS.editorZone),this.nodes.holder.offsetWidth<this.contentRect.width&&this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow),this.nodes.redactor.style.paddingBottom=this.config.minHeight+"px",this.nodes.wrapper.appendChild(this.nodes.redactor),this.nodes.holder.appendChild(this.nodes.wrapper)}},{key:"loadStyles",value:function(){var t=n(389);if(!v.default.get("editor-js-styles")){var e=v.default.make("style",null,{id:"editor-js-styles",textContent:t.toString()});v.default.prepend(document.head,e)}}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(this.nodes.redactor,"click",(function(e){t.redactorClicked(e)}),!1),this.readOnlyMutableListeners.on(this.nodes.redactor,"mousedown",(function(e){t.documentTouched(e)}),!0),this.readOnlyMutableListeners.on(this.nodes.redactor,"touchstart",(function(e){t.documentTouched(e)}),!0),this.readOnlyMutableListeners.on(document,"keydown",(function(e){t.documentKeydown(e)}),!0),this.readOnlyMutableListeners.on(document,"click",(function(e){t.documentClicked(e)}),!0),this.readOnlyMutableListeners.on(document,"selectionchange",(function(e){t.selectionChanged(e)}),!0),this.readOnlyMutableListeners.on(window,"resize",(function(){t.resizeDebouncer()}),{passive:!0})}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"windowResize",value:function(){this.contentRectCache=null,this.checkIsMobile()}},{key:"documentKeydown",value:function(t){switch(t.keyCode){case y.keyCodes.ENTER:this.enterPressed(t);break;case y.keyCodes.BACKSPACE:this.backspacePressed(t);break;case y.keyCodes.ESC:this.escapePressed(t);break;default:this.defaultBehaviour(t)}}},{key:"defaultBehaviour",value:function(t){var e=this.Editor.BlockManager.currentBlock,n=t.target.closest(".".concat(this.CSS.editorWrapper)),o=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;void 0===e||null!==n?n||e&&o||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close()):this.Editor.BlockEvents.keydown(t)}},{key:"backspacePressed",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret;if(o.anyBlockSelected&&!g.default.isSelectionExists){var i=n.removeSelectedBlocks();r.setToBlock(n.insertDefaultBlockAtIndex(i,!0),r.positions.START),o.clearSelection(t),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()}}},{key:"escapePressed",value:function(t){this.Editor.BlockSelection.clearSelection(t),this.Editor.Toolbox.opened?this.Editor.Toolbox.close():this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.ConversionToolbar.opened?this.Editor.ConversionToolbar.close():this.Editor.InlineToolbar.opened?this.Editor.InlineToolbar.close():this.Editor.Toolbar.close()}},{key:"enterPressed",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=(e.Caret,n.currentBlockIndex>=0);if(o.anyBlockSelected&&!g.default.isSelectionExists)return o.clearSelection(t),t.preventDefault(),t.stopImmediatePropagation(),void t.stopPropagation();if(!this.someToolbarOpened&&r&&"BODY"===t.target.tagName){var i=this.Editor.BlockManager.insert();this.Editor.Caret.setToBlock(i),this.Editor.BlockManager.highlightCurrentNode(),this.Editor.Toolbar.move(),this.Editor.Toolbar.plusButton.show()}this.Editor.BlockSelection.clearSelection(t)}},{key:"documentClicked",value:function(t){if(t.isTrusted){var e=t.target;this.nodes.holder.contains(e)||g.default.isAtEditor||(this.Editor.BlockManager.dropPointer(),this.Editor.InlineToolbar.close(),this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close()),this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted||this.Editor.BlockSelection.clearSelection(t)}}},{key:"documentTouched",value:function(t){var e=t.target;if(e===this.nodes.redactor){var n=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,o=t instanceof MouseEvent?t.clientY:t.touches[0].clientY;e=document.elementFromPoint(n,o)}try{this.Editor.BlockManager.setCurrentBlockByChildNode(e),this.Editor.BlockManager.highlightCurrentNode()}catch(t){this.Editor.RectangleSelection.isRectActivated()||this.Editor.Caret.setToTheLastBlock()}this.Editor.Toolbar.open(),this.Editor.Toolbar.plusButton.hide()}},{key:"redactorClicked",value:function(t){if(g.default.isCollapsed){var e=function(){t.stopImmediatePropagation(),t.stopPropagation()},n=t.target,o=t.metaKey||t.ctrlKey;if(v.default.isAnchor(n)&&o){e();var r=n.getAttribute("href"),i=y.getValidUrl(r);y.openTab(i)}else this.Editor.BlockManager.currentBlock||(e(),this.Editor.BlockManager.insert()),this.Editor.Tools.isDefault(this.Editor.BlockManager.currentBlock.tool)&&(e(),this.Editor.BlockManager.currentBlock.isEmpty&&this.Editor.Toolbar.plusButton.show())}}},{key:"selectionChanged",value:function(t){var e=this.Editor,n=e.CrossBlockSelection,o=e.BlockSelection,r=g.default.anchorElement;n.isCrossBlockSelectionStarted&&o.anyBlockSelected&&g.default.get().removeAllRanges(),r&&r.closest(".".concat(b.default.CSS.content))?this.Editor.InlineToolbar.tryToShow(!0):this.Editor.InlineToolbar.containsNode(r)||this.Editor.InlineToolbar.close()}},{key:"appendSVGSprite",value:function(){var t=v.default.make("div");t.hidden=!0,t.style.display="none",t.innerHTML=p.default,v.default.append(this.nodes.wrapper,t)}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorWrapperNarrow:"codex-editor--narrow",editorZone:"codex-editor__redactor",editorZoneHidden:"codex-editor__redactor--hidden",editorLoader:"codex-editor__loader",editorEmpty:"codex-editor--empty",editorRtlFix:"codex-editor--rtl"}}},{key:"contentRect",get:function(){if(this.contentRectCache)return this.contentRectCache;var t=this.nodes.wrapper.querySelector(".".concat(b.default.CSS.content));return t?(this.contentRectCache=t.getBoundingClientRect(),this.contentRectCache):{width:650,left:0,right:0}}},{key:"someToolbarOpened",get:function(){var t=this.Editor,e=t.Toolbox,n=t.BlockSettings,o=t.InlineToolbar,r=t.ConversionToolbar;return n.opened||o.opened||r.opened||e.opened}},{key:"someFlipperButtonFocused",get:function(){return Object.entries(this.Editor).filter((function(t){var e=(0,r.default)(t,2);return e[0],e[1].flipper instanceof m.default})).some((function(t){var e=(0,r.default)(t,2);return e[0],e[1].flipper.currentItem}))}}]),k}(h.default);o.default=w,w.displayName="UI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){n(184),t.exports=n(356)},function(t,e,n){n(185)},function(t,e,n){"use strict";n(186),n(329),n(331),n(334),n(336),n(338),n(340),n(342),n(344),n(346),n(348),n(350),n(352),n(140)},function(t,e,n){n(187),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(268),n(269),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(103),n(292),n(129),n(293),n(130),n(294),n(295),n(296),n(297),n(131),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),t.exports=n(17)},function(t,e,n){"use strict";var o=n(9),r=n(26),i=n(18),a=n(0),s=n(23),c=n(41).KEY,l=n(10),u=n(68),f=n(53),d=n(43),p=n(14),h=n(84),v=n(110),y=n(189),g=n(71),b=n(11),m=n(12),k=n(20),x=n(28),S=n(40),w=n(42),E=n(47),T=n(113),C=n(33),B=n(70),_=n(19),O=n(45),I=C.f,N=_.f,R=T.f,M=o.Symbol,L=o.JSON,A=L&&L.stringify,P=p("_hidden"),D=p("toPrimitive"),j={}.propertyIsEnumerable,F=u("symbol-registry"),U=u("symbols"),H=u("op-symbols"),z=Object.prototype,W="function"==typeof M&&!!B.f,G=o.QObject,X=!G||!G.prototype||!G.prototype.findChild,V=i&&l((function(){return 7!=E(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=I(z,e);o&&delete z[e],N(t,e,n),o&&t!==z&&N(z,e,o)}:N,Y=function(t){var e=U[t]=E(M.prototype);return e._k=t,e},K=W&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},Z=function(t,e,n){return t===z&&Z(H,e,n),b(t),e=S(e,!0),b(n),r(U,e)?(n.enumerable?(r(t,P)&&t[P][e]&&(t[P][e]=!1),n=E(n,{enumerable:w(0,!1)})):(r(t,P)||N(t,P,w(1,{})),t[P][e]=!0),V(t,e,n)):N(t,e,n)},q=function(t,e){b(t);for(var n,o=y(e=x(e)),r=0,i=o.length;i>r;)Z(t,n=o[r++],e[n]);return t},J=function(t){var e=j.call(this,t=S(t,!0));return!(this===z&&r(U,t)&&!r(H,t))&&(!(e||!r(this,t)||!r(U,t)||r(this,P)&&this[P][t])||e)},$=function(t,e){if(t=x(t),e=S(e,!0),t!==z||!r(U,e)||r(H,e)){var n=I(t,e);return!n||!r(U,e)||r(t,P)&&t[P][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=R(x(t)),o=[],i=0;n.length>i;)r(U,e=n[i++])||e==P||e==c||o.push(e);return o},tt=function(t){for(var e,n=t===z,o=R(n?H:x(t)),i=[],a=0;o.length>a;)!r(U,e=o[a++])||n&&!r(z,e)||i.push(U[e]);return i};W||(s((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(H,n),r(this,P)&&r(this[P],t)&&(this[P][t]=!1),V(this,t,w(1,n))};return i&&X&&V(z,t,{configurable:!0,set:e}),Y(t)}).prototype,"toString",(function(){return this._k})),C.f=$,_.f=Z,n(48).f=T.f=Q,n(63).f=J,B.f=tt,i&&!n(44)&&s(z,"propertyIsEnumerable",J,!0),h.f=function(t){return Y(p(t))}),a(a.G+a.W+a.F*!W,{Symbol:M});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var ot=O(p.store),rt=0;ot.length>rt;)v(ot[rt++]);a(a.S+a.F*!W,"Symbol",{for:function(t){return r(F,t+="")?F[t]:F[t]=M(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in F)if(F[e]===t)return e},useSetter:function(){X=!0},useSimple:function(){X=!1}}),a(a.S+a.F*!W,"Object",{create:function(t,e){return void 0===e?E(t):q(E(t),e)},defineProperty:Z,defineProperties:q,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var it=l((function(){B.f(1)}));a(a.S+a.F*it,"Object",{getOwnPropertySymbols:function(t){return B.f(k(t))}}),L&&a(a.S+a.F*(!W||l((function(){var t=M();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=e=o[1],(m(e)||void 0!==t)&&!K(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),o[1]=e,A.apply(L,o)}}),M.prototype[D]||n(27)(M.prototype,D,M.prototype.valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},function(t,e,n){t.exports=n(68)("native-function-to-string",Function.toString)},function(t,e,n){var o=n(45),r=n(70),i=n(63);t.exports=function(t){var e=o(t),n=r.f;if(n)for(var a,s=n(t),c=i.f,l=0;s.length>l;)c.call(t,a=s[l++])&&e.push(a);return e}},function(t,e,n){var o=n(0);o(o.S,"Object",{create:n(47)})},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperty:n(19).f})},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperties:n(112)})},function(t,e,n){var o=n(28),r=n(33).f;n(34)("getOwnPropertyDescriptor",(function(){return function(t,e){return r(o(t),e)}}))},function(t,e,n){var o=n(20),r=n(49);n(34)("getPrototypeOf",(function(){return function(t){return r(o(t))}}))},function(t,e,n){var o=n(20),r=n(45);n(34)("keys",(function(){return function(t){return r(o(t))}}))},function(t,e,n){n(34)("getOwnPropertyNames",(function(){return n(113).f}))},function(t,e,n){var o=n(12),r=n(41).onFreeze;n(34)("freeze",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(12),r=n(41).onFreeze;n(34)("seal",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(12),r=n(41).onFreeze;n(34)("preventExtensions",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(12);n(34)("isFrozen",(function(t){return function(e){return!o(e)||!!t&&t(e)}}))},function(t,e,n){var o=n(12);n(34)("isSealed",(function(t){return function(e){return!o(e)||!!t&&t(e)}}))},function(t,e,n){var o=n(12);n(34)("isExtensible",(function(t){return function(e){return!!o(e)&&(!t||t(e))}}))},function(t,e,n){var o=n(0);o(o.S+o.F,"Object",{assign:n(114)})},function(t,e,n){var o=n(0);o(o.S,"Object",{is:n(115)})},function(t,e,n){var o=n(0);o(o.S,"Object",{setPrototypeOf:n(88).set})},function(t,e,n){"use strict";var o=n(64),r={};r[n(14)("toStringTag")]="z",r+""!="[object z]"&&n(23)(Object.prototype,"toString",(function(){return"[object "+o(this)+"]"}),!0)},function(t,e,n){var o=n(0);o(o.P,"Function",{bind:n(116)})},function(t,e,n){var o=n(19).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var o=n(12),r=n(49),i=n(14)("hasInstance"),a=Function.prototype;i in a||n(19).f(a,i,{value:function(t){if("function"!=typeof this||!o(t))return!1;if(!o(this.prototype))return t instanceof this;for(;t=r(t);)if(this.prototype===t)return!0;return!1}})},function(t,e,n){var o=n(0),r=n(118);o(o.G+o.F*(parseInt!=r),{parseInt:r})},function(t,e,n){var o=n(0),r=n(119);o(o.G+o.F*(parseFloat!=r),{parseFloat:r})},function(t,e,n){"use strict";var o=n(9),r=n(26),i=n(36),a=n(90),s=n(40),c=n(10),l=n(48).f,u=n(33).f,f=n(19).f,d=n(54).trim,p=o.Number,h=p,v=p.prototype,y="Number"==i(n(47)(v)),g="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,i=(e=g?e.trim():d(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var a,c=e.slice(2),l=0,u=c.length;l<u;l++)if((a=c.charCodeAt(l))<48||a>r)return NaN;return parseInt(c,o)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(y?c((function(){v.valueOf.call(n)})):"Number"!=i(n))?a(new h(b(e)),n,p):b(e)};for(var m,k=n(18)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;k.length>x;x++)r(h,m=k[x])&&!r(p,m)&&f(p,m,u(h,m));p.prototype=v,v.constructor=p,n(23)(o,"Number",p)}},function(t,e,n){"use strict";var o=n(0),r=n(32),i=n(120),a=n(91),s=1..toFixed,c=Math.floor,l=[0,0,0,0,0,0],u="Number.toFixed: incorrect invocation!",f=function(t,e){for(var n=-1,o=e;++n<6;)o+=t*l[n],l[n]=o%1e7,o=c(o/1e7)},d=function(t){for(var e=6,n=0;--e>=0;)n+=l[e],l[e]=c(n/t),n=n%t*1e7},p=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==l[t]){var n=String(l[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e},h=function(t,e,n){return 0===e?n:e%2==1?h(t,e-1,n*t):h(t*t,e/2,n)};o(o.P+o.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(10)((function(){s.call({})}))),"Number",{toFixed:function(t){var e,n,o,s,c=i(this,u),l=r(t),v="",y="0";if(l<0||l>20)throw RangeError(u);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*h(2,69,1))-69)<0?c*h(2,-e,1):c/h(2,e,1),n*=4503599627370496,(e=52-e)>0){for(f(0,n),o=l;o>=7;)f(1e7,0),o-=7;for(f(h(10,o,1),0),o=e-1;o>=23;)d(1<<23),o-=23;d(1<<o),f(1,1),d(2),y=p()}else f(0,n),f(1<<-e,0),y=p()+a.call("0",l);return y=l>0?v+((s=y.length)<=l?"0."+a.call("0",l-s)+y:y.slice(0,s-l)+"."+y.slice(s-l)):v+y}})},function(t,e,n){"use strict";var o=n(0),r=n(10),i=n(120),a=1..toPrecision;o(o.P+o.F*(r((function(){return"1"!==a.call(1,void 0)}))||!r((function(){a.call({})}))),"Number",{toPrecision:function(t){var e=i(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},function(t,e,n){var o=n(0);o(o.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,n){var o=n(0),r=n(9).isFinite;o(o.S,"Number",{isFinite:function(t){return"number"==typeof t&&r(t)}})},function(t,e,n){var o=n(0);o(o.S,"Number",{isInteger:n(121)})},function(t,e,n){var o=n(0);o(o.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var o=n(0),r=n(121),i=Math.abs;o(o.S,"Number",{isSafeInteger:function(t){return r(t)&&i(t)<=9007199254740991}})},function(t,e,n){var o=n(0);o(o.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){var o=n(0);o(o.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var o=n(0),r=n(119);o(o.S+o.F*(Number.parseFloat!=r),"Number",{parseFloat:r})},function(t,e,n){var o=n(0),r=n(118);o(o.S+o.F*(Number.parseInt!=r),"Number",{parseInt:r})},function(t,e,n){var o=n(0),r=n(122),i=Math.sqrt,a=Math.acosh;o(o.S+o.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:r(t-1+i(t-1)*i(t+1))}})},function(t,e,n){var o=n(0),r=Math.asinh;o(o.S+o.F*!(r&&1/r(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e}})},function(t,e,n){var o=n(0),r=Math.atanh;o(o.S+o.F*!(r&&1/r(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,e,n){var o=n(0),r=n(92);o(o.S,"Math",{cbrt:function(t){return r(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,e,n){var o=n(0);o(o.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,e,n){var o=n(0),r=Math.exp;o(o.S,"Math",{cosh:function(t){return(r(t=+t)+r(-t))/2}})},function(t,e,n){var o=n(0),r=n(93);o(o.S+o.F*(r!=Math.expm1),"Math",{expm1:r})},function(t,e,n){var o=n(0);o(o.S,"Math",{fround:n(232)})},function(t,e,n){var o=n(92),r=Math.pow,i=r(2,-52),a=r(2,-23),s=r(2,127)*(2-a),c=r(2,-126);t.exports=Math.fround||function(t){var e,n,r=Math.abs(t),l=o(t);return r<c?l*(r/c/a+1/i-1/i)*c*a:(n=(e=(1+a/i)*r)-(e-r))>s||n!=n?l*(1/0):l*n}},function(t,e,n){var o=n(0),r=Math.abs;o(o.S,"Math",{hypot:function(t,e){for(var n,o,i=0,a=0,s=arguments.length,c=0;a<s;)c<(n=r(arguments[a++]))?(i=i*(o=c/n)*o+1,c=n):i+=n>0?(o=n/c)*o:n;return c===1/0?1/0:c*Math.sqrt(i)}})},function(t,e,n){var o=n(0),r=Math.imul;o(o.S+o.F*n(10)((function(){return-5!=r(4294967295,5)||2!=r.length})),"Math",{imul:function(t,e){var n=+t,o=+e,r=65535&n,i=65535&o;return 0|r*i+((65535&n>>>16)*i+r*(65535&o>>>16)<<16>>>0)}})},function(t,e,n){var o=n(0);o(o.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,e,n){var o=n(0);o(o.S,"Math",{log1p:n(122)})},function(t,e,n){var o=n(0);o(o.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,e,n){var o=n(0);o(o.S,"Math",{sign:n(92)})},function(t,e,n){var o=n(0),r=n(93),i=Math.exp;o(o.S+o.F*n(10)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(r(t)-r(-t))/2:(i(t-1)-i(-t-1))*(Math.E/2)}})},function(t,e,n){var o=n(0),r=n(93),i=Math.exp;o(o.S,"Math",{tanh:function(t){var e=r(t=+t),n=r(-t);return e==1/0?1:n==1/0?-1:(e-n)/(i(t)+i(-t))}})},function(t,e,n){var o=n(0);o(o.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e,n){var o=n(0),r=n(46),i=String.fromCharCode,a=String.fromCodePoint;o(o.S+o.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,n=[],o=arguments.length,a=0;o>a;){if(e=+arguments[a++],r(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?i(e):i(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},function(t,e,n){var o=n(0),r=n(28),i=n(16);o(o.S,"String",{raw:function(t){for(var e=r(t.raw),n=i(e.length),o=arguments.length,a=[],s=0;n>s;)a.push(String(e[s++])),s<o&&a.push(String(arguments[s]));return a.join("")}})},function(t,e,n){"use strict";n(54)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,n){"use strict";var o=n(94)(!0);n(95)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var o=n(0),r=n(94)(!1);o(o.P,"String",{codePointAt:function(t){return r(this,t)}})},function(t,e,n){"use strict";var o=n(0),r=n(16),i=n(96),a="".endsWith;o(o.P+o.F*n(98)("endsWith"),"String",{endsWith:function(t){var e=i(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,o=r(e.length),s=void 0===n?o:Math.min(r(n),o),c=String(t);return a?a.call(e,c,s):e.slice(s-c.length,s)===c}})},function(t,e,n){"use strict";var o=n(0),r=n(96);o(o.P+o.F*n(98)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var o=n(0);o(o.P,"String",{repeat:n(91)})},function(t,e,n){"use strict";var o=n(0),r=n(16),i=n(96),a="".startsWith;o(o.P+o.F*n(98)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),o=String(t);return a?a.call(e,o,n):e.slice(n,n+o.length)===o}})},function(t,e,n){"use strict";n(24)("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},function(t,e,n){"use strict";n(24)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,e,n){"use strict";n(24)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,e,n){"use strict";n(24)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,e,n){"use strict";n(24)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,e,n){"use strict";n(24)("fontcolor",(function(t){return function(e){return t(this,"font","color",e)}}))},function(t,e,n){"use strict";n(24)("fontsize",(function(t){return function(e){return t(this,"font","size",e)}}))},function(t,e,n){"use strict";n(24)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,e,n){"use strict";n(24)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){"use strict";n(24)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,e,n){"use strict";n(24)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,e,n){"use strict";n(24)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,e,n){"use strict";n(24)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,e,n){var o=n(0);o(o.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";var o=n(0),r=n(20),i=n(40);o(o.P+o.F*n(10)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=r(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},function(t,e,n){var o=n(0),r=n(267);o(o.P+o.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r})},function(t,e,n){"use strict";var o=n(10),r=Date.prototype.getTime,i=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=o((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!o((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),o=e<0?"-":e>9999?"+":"";return o+("00000"+Math.abs(e)).slice(o?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:i},function(t,e,n){var o=Date.prototype,r=o.toString,i=o.getTime;new Date(NaN)+""!="Invalid Date"&&n(23)(o,"toString",(function(){var t=i.call(this);return t==t?r.call(this):"Invalid Date"}))},function(t,e,n){var o=n(14)("toPrimitive"),r=Date.prototype;o in r||n(27)(r,o,n(270))},function(t,e,n){"use strict";var o=n(11),r=n(40);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return r(o(this),"number"!=t)}},function(t,e,n){var o=n(0);o(o.S,"Array",{isArray:n(71)})},function(t,e,n){"use strict";var o=n(30),r=n(0),i=n(20),a=n(124),s=n(99),c=n(16),l=n(100),u=n(101);r(r.S+r.F*!n(72)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,f,d=i(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,g=0,b=u(d);if(y&&(v=o(v,h>2?arguments[2]:void 0,2)),null==b||p==Array&&s(b))for(n=new p(e=c(d.length));e>g;g++)l(n,g,y?v(d[g],g):d[g]);else for(f=b.call(d),n=new p;!(r=f.next()).done;g++)l(n,g,y?a(f,v,[r.value,g],!0):r.value);return n.length=g,n}})},function(t,e,n){"use strict";var o=n(0),r=n(100);o(o.S+o.F*n(10)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)r(n,t,arguments[t++]);return n.length=e,n}})},function(t,e,n){"use strict";var o=n(0),r=n(28),i=[].join;o(o.P+o.F*(n(62)!=Object||!n(29)(i)),"Array",{join:function(t){return i.call(r(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var o=n(0),r=n(87),i=n(36),a=n(46),s=n(16),c=[].slice;o(o.P+o.F*n(10)((function(){r&&c.call(r)})),"Array",{slice:function(t,e){var n=s(this.length),o=i(this);if(e=void 0===e?n:e,"Array"==o)return c.call(this,t,e);for(var r=a(t,n),l=a(e,n),u=s(l-r),f=new Array(u),d=0;d<u;d++)f[d]="String"==o?this.charAt(r+d):this[r+d];return f}})},function(t,e,n){"use strict";var o=n(0),r=n(31),i=n(20),a=n(10),s=[].sort,c=[1,2,3];o(o.P+o.F*(a((function(){c.sort(void 0)}))||!a((function(){c.sort(null)}))||!n(29)(s)),"Array",{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),r(t))}})},function(t,e,n){"use strict";var o=n(0),r=n(35)(0),i=n(29)([].forEach,!0);o(o.P+o.F*!i,"Array",{forEach:function(t){return r(this,t,arguments[1])}})},function(t,e,n){var o=n(12),r=n(71),i=n(14)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){"use strict";var o=n(0),r=n(35)(1);o(o.P+o.F*!n(29)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(35)(2);o(o.P+o.F*!n(29)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(35)(3);o(o.P+o.F*!n(29)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(35)(4);o(o.P+o.F*!n(29)([].every,!0),"Array",{every:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(126);o(o.P+o.F*!n(29)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){"use strict";var o=n(0),r=n(126);o(o.P+o.F*!n(29)([].reduceRight,!0),"Array",{reduceRight:function(t){return r(this,t,arguments.length,arguments[1],!0)}})},function(t,e,n){"use strict";var o=n(0),r=n(69)(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;o(o.P+o.F*(a||!n(29)(i)),"Array",{indexOf:function(t){return a?i.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(28),i=n(32),a=n(16),s=[].lastIndexOf,c=!!s&&1/[1].lastIndexOf(1,-0)<0;o(o.P+o.F*(c||!n(29)(s)),"Array",{lastIndexOf:function(t){if(c)return s.apply(this,arguments)||0;var e=r(this),n=a(e.length),o=n-1;for(arguments.length>1&&(o=Math.min(o,i(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}})},function(t,e,n){var o=n(0);o(o.P,"Array",{copyWithin:n(127)}),n(50)("copyWithin")},function(t,e,n){var o=n(0);o(o.P,"Array",{fill:n(102)}),n(50)("fill")},function(t,e,n){"use strict";var o=n(0),r=n(35)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),o(o.P+o.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(50)("find")},function(t,e,n){"use strict";var o=n(0),r=n(35)(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),o(o.P+o.F*a,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(50)(i)},function(t,e,n){n(56)("Array")},function(t,e,n){var o=n(9),r=n(90),i=n(19).f,a=n(48).f,s=n(97),c=n(73),l=o.RegExp,u=l,f=l.prototype,d=/a/g,p=/a/g,h=new l(d)!==d;if(n(18)&&(!h||n(10)((function(){return p[n(14)("match")]=!1,l(d)!=d||l(p)==p||"/a/i"!=l(d,"i")})))){l=function(t,e){var n=this instanceof l,o=s(t),i=void 0===e;return!n&&o&&t.constructor===l&&i?t:r(h?new u(o&&!i?t.source:t,e):u((o=t instanceof l)?t.source:t,o&&i?c.call(t):e),n?this:f,l)};for(var v=function(t){t in l||i(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},y=a(u),g=0;y.length>g;)v(y[g++]);f.constructor=l,l.prototype=f,n(23)(o,"RegExp",l)}n(56)("RegExp")},function(t,e,n){"use strict";n(130);var o=n(11),r=n(73),i=n(18),a=/./.toString,s=function(t){n(23)(RegExp.prototype,"toString",t,!0)};n(10)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?s((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)})):"toString"!=a.name&&s((function(){return a.call(this)}))},function(t,e,n){"use strict";var o=n(11),r=n(16),i=n(105),a=n(74);n(75)("match",1,(function(t,e,n,s){return[function(n){var o=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=s(n,t,this);if(e.done)return e.value;var c=o(t),l=String(this);if(!c.global)return a(c,l);var u=c.unicode;c.lastIndex=0;for(var f,d=[],p=0;null!==(f=a(c,l));){var h=String(f[0]);d[p]=h,""===h&&(c.lastIndex=i(l,r(c.lastIndex),u)),p++}return 0===p?null:d}]}))},function(t,e,n){"use strict";var o=n(11),r=n(20),i=n(16),a=n(32),s=n(105),c=n(74),l=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(75)("replace",2,(function(t,e,n,h){return[function(o,r){var i=t(this),a=null==o?void 0:o[e];return void 0!==a?a.call(o,i,r):n.call(String(i),o,r)},function(t,e){var r=h(n,t,this,e);if(r.done)return r.value;var f=o(t),d=String(this),p="function"==typeof e;p||(e=String(e));var y=f.global;if(y){var g=f.unicode;f.lastIndex=0}for(var b=[];;){var m=c(f,d);if(null===m)break;if(b.push(m),!y)break;""===String(m[0])&&(f.lastIndex=s(d,i(f.lastIndex),g))}for(var k,x="",S=0,w=0;w<b.length;w++){m=b[w];for(var E=String(m[0]),T=l(u(a(m.index),d.length),0),C=[],B=1;B<m.length;B++)C.push(void 0===(k=m[B])?k:String(k));var _=m.groups;if(p){var O=[E].concat(C,T,d);void 0!==_&&O.push(_);var I=String(e.apply(void 0,O))}else I=v(E,d,T,C,_,e);T>=S&&(x+=d.slice(S,T)+I,S=T+E.length)}return x+d.slice(S)}];function v(t,e,o,i,a,s){var c=o+t.length,l=i.length,u=p;return void 0!==a&&(a=r(a),u=d),n.call(s,u,(function(n,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(c);case"<":s=a[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var d=f(u/10);return 0===d?n:d<=l?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):n}s=i[u-1]}return void 0===s?"":s}))}}))},function(t,e,n){"use strict";var o=n(11),r=n(115),i=n(74);n(75)("search",1,(function(t,e,n,a){return[function(n){var o=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=o(t),c=String(this),l=s.lastIndex;r(l,0)||(s.lastIndex=0);var u=i(s,c);return r(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},function(t,e,n){"use strict";var o=n(97),r=n(11),i=n(65),a=n(105),s=n(16),c=n(74),l=n(104),u=n(10),f=Math.min,d=[].push,p="length",h=!u((function(){RegExp(4294967295,"y")}));n(75)("split",2,(function(t,e,n,u){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[p]||2!="ab".split(/(?:ab)*/)[p]||4!=".".split(/(.?)(.?)/)[p]||".".split(/()()/)[p]>1||"".split(/.?/)[p]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!o(t))return n.call(r,t,e);for(var i,a,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,u+"g");(i=l.call(v,r))&&!((a=v.lastIndex)>f&&(c.push(r.slice(f,i.index)),i[p]>1&&i.index<r[p]&&d.apply(c,i.slice(1)),s=i[0][p],f=a,c[p]>=h));)v.lastIndex===i.index&&v.lastIndex++;return f===r[p]?!s&&v.test("")||c.push(""):c.push(r.slice(f)),c[p]>h?c.slice(0,h):c}:"0".split(void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,o){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r,o):v.call(String(r),n,o)},function(t,e){var o=u(v,t,this,e,v!==n);if(o.done)return o.value;var l=r(t),d=String(this),p=i(l,RegExp),y=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),b=new p(h?l:"^(?:"+l.source+")",g),m=void 0===e?4294967295:e>>>0;if(0===m)return[];if(0===d.length)return null===c(b,d)?[d]:[];for(var k=0,x=0,S=[];x<d.length;){b.lastIndex=h?x:0;var w,E=c(b,h?d:d.slice(x));if(null===E||(w=f(s(b.lastIndex+(h?0:x)),d.length))===k)x=a(d,x,y);else{if(S.push(d.slice(k,x)),S.length===m)return S;for(var T=1;T<=E.length-1;T++)if(S.push(E[T]),S.length===m)return S;x=k=w}}return S.push(d.slice(k)),S}]}))},function(t,e,n){var o=n(9),r=n(106).set,i=o.MutationObserver||o.WebKitMutationObserver,a=o.process,s=o.Promise,c="process"==n(36)(a);t.exports=function(){var t,e,n,l=function(){var o,r;for(c&&(o=a.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(c)n=function(){a.nextTick(l)};else if(!i||o.navigator&&o.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);n=function(){u.then(l)}}else n=function(){r.call(o,l)};else{var f=!0,d=document.createTextNode("");new i(l).observe(d,{characterData:!0}),n=function(){d.data=f=!f}}return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){"use strict";var o=n(134),r=n(51);t.exports=n(78)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=o.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return o.def(r(this,"Map"),0===t?0:t,e)}},o,!0)},function(t,e,n){"use strict";var o=n(134),r=n(51);t.exports=n(78)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(r(this,"Set"),t=0===t?0:t,t)}},o)},function(t,e,n){"use strict";var o,r=n(9),i=n(35)(0),a=n(23),s=n(41),c=n(114),l=n(135),u=n(12),f=n(51),d=n(51),p=!r.ActiveXObject&&"ActiveXObject"in r,h=s.getWeak,v=Object.isExtensible,y=l.ufstore,g=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(t){if(u(t)){var e=h(t);return!0===e?y(f(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return l.def(f(this,"WeakMap"),t,e)}},m=t.exports=n(78)("WeakMap",g,b,l,!0,!0);d&&p&&(c((o=l.getConstructor(g,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],(function(t){var e=m.prototype,n=e[t];a(e,t,(function(e,r){if(u(e)&&!v(e)){this._f||(this._f=new o);var i=this._f[t](e,r);return"set"==t?this:i}return n.call(this,e,r)}))})))},function(t,e,n){"use strict";var o=n(135),r=n(51);n(78)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(r(this,"WeakSet"),t,!0)}},o,!1,!0)},function(t,e,n){"use strict";var o=n(0),r=n(79),i=n(107),a=n(11),s=n(46),c=n(16),l=n(12),u=n(9).ArrayBuffer,f=n(65),d=i.ArrayBuffer,p=i.DataView,h=r.ABV&&u.isView,v=d.prototype.slice,y=r.VIEW;o(o.G+o.W+o.F*(u!==d),{ArrayBuffer:d}),o(o.S+o.F*!r.CONSTR,"ArrayBuffer",{isView:function(t){return h&&h(t)||l(t)&&y in t}}),o(o.P+o.U+o.F*n(10)((function(){return!new d(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,e){if(void 0!==v&&void 0===e)return v.call(a(this),t);for(var n=a(this).byteLength,o=s(t,n),r=s(void 0===e?n:e,n),i=new(f(this,d))(c(r-o)),l=new p(this),u=new p(i),h=0;o<r;)u.setUint8(h++,l.getUint8(o++));return i}}),n(56)("ArrayBuffer")},function(t,e,n){var o=n(0);o(o.G+o.W+o.F*!n(79).ABV,{DataView:n(107).DataView})},function(t,e,n){n(38)("Int8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}),!0)},function(t,e,n){n(38)("Int16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Uint16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Int32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Uint32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Float32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Float64",8,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){var o=n(0),r=n(31),i=n(11),a=(n(9).Reflect||{}).apply,s=Function.apply;o(o.S+o.F*!n(10)((function(){a((function(){}))})),"Reflect",{apply:function(t,e,n){var o=r(t),c=i(n);return a?a(o,e,c):s.call(o,e,c)}})},function(t,e,n){var o=n(0),r=n(47),i=n(31),a=n(11),s=n(12),c=n(10),l=n(116),u=(n(9).Reflect||{}).construct,f=c((function(){function t(){}return!(u((function(){}),[],t)instanceof t)})),d=!c((function(){u((function(){}))}));o(o.S+o.F*(f||d),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(d&&!f)return u(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return o.push.apply(o,e),new(l.apply(t,o))}var c=n.prototype,p=r(s(c)?c:Object.prototype),h=Function.apply.call(t,p,e);return s(h)?h:p}})},function(t,e,n){var o=n(19),r=n(0),i=n(11),a=n(40);r(r.S+r.F*n(10)((function(){Reflect.defineProperty(o.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,e,n){i(t),e=a(e,!0),i(n);try{return o.f(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var o=n(0),r=n(33).f,i=n(11);o(o.S,"Reflect",{deleteProperty:function(t,e){var n=r(i(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var o=n(0),r=n(11),i=function(t){this._t=r(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(123)(i,"Object",(function(){var t,e=this._k;do{if(this._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[this._i++])in this._t));return{value:t,done:!1}})),o(o.S,"Reflect",{enumerate:function(t){return new i(t)}})},function(t,e,n){var o=n(33),r=n(49),i=n(26),a=n(0),s=n(12),c=n(11);a(a.S,"Reflect",{get:function t(e,n){var a,l,u=arguments.length<3?e:arguments[2];return c(e)===u?e[n]:(a=o.f(e,n))?i(a,"value")?a.value:void 0!==a.get?a.get.call(u):void 0:s(l=r(e))?t(l,n,u):void 0}})},function(t,e,n){var o=n(33),r=n(0),i=n(11);r(r.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return o.f(i(t),e)}})},function(t,e,n){var o=n(0),r=n(49),i=n(11);o(o.S,"Reflect",{getPrototypeOf:function(t){return r(i(t))}})},function(t,e,n){var o=n(0);o(o.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var o=n(0),r=n(11),i=Object.isExtensible;o(o.S,"Reflect",{isExtensible:function(t){return r(t),!i||i(t)}})},function(t,e,n){var o=n(0);o(o.S,"Reflect",{ownKeys:n(137)})},function(t,e,n){var o=n(0),r=n(11),i=Object.preventExtensions;o(o.S,"Reflect",{preventExtensions:function(t){r(t);try{return i&&i(t),!0}catch(t){return!1}}})},function(t,e,n){var o=n(19),r=n(33),i=n(49),a=n(26),s=n(0),c=n(42),l=n(11),u=n(12);s(s.S,"Reflect",{set:function t(e,n,s){var f,d,p=arguments.length<4?e:arguments[3],h=r.f(l(e),n);if(!h){if(u(d=i(e)))return t(d,n,s,p);h=c(0)}if(a(h,"value")){if(!1===h.writable||!u(p))return!1;if(f=r.f(p,n)){if(f.get||f.set||!1===f.writable)return!1;f.value=s,o.f(p,n,f)}else o.f(p,n,c(0,s));return!0}return void 0!==h.set&&(h.set.call(p,s),!0)}})},function(t,e,n){var o=n(0),r=n(88);r&&o(o.S,"Reflect",{setPrototypeOf:function(t,e){r.check(t,e);try{return r.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){n(330),t.exports=n(17).Array.includes},function(t,e,n){"use strict";var o=n(0),r=n(69)(!0);o(o.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(50)("includes")},function(t,e,n){n(332),t.exports=n(17).Array.flatMap},function(t,e,n){"use strict";var o=n(0),r=n(333),i=n(20),a=n(16),s=n(31),c=n(125);o(o.P,"Array",{flatMap:function(t){var e,n,o=i(this);return s(t),e=a(o.length),n=c(o,0),r(n,o,o,e,0,1,t,arguments[1]),n}}),n(50)("flatMap")},function(t,e,n){"use strict";var o=n(71),r=n(12),i=n(16),a=n(30),s=n(14)("isConcatSpreadable");t.exports=function t(e,n,c,l,u,f,d,p){for(var h,v,y=u,g=0,b=!!d&&a(d,p,3);g<l;){if(g in c){if(h=b?b(c[g],g,n):c[g],v=!1,r(h)&&(v=void 0!==(v=h[s])?!!v:o(h)),v&&f>0)y=t(e,n,h,i(h.length),y,f-1)-1;else{if(y>=9007199254740991)throw TypeError();e[y]=h}y++}g++}return y}},function(t,e,n){n(335),t.exports=n(17).String.padStart},function(t,e,n){"use strict";var o=n(0),r=n(138),i=n(77),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);o(o.P+o.F*a,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,n){n(337),t.exports=n(17).String.padEnd},function(t,e,n){"use strict";var o=n(0),r=n(138),i=n(77),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);o(o.P+o.F*a,"String",{padEnd:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,e,n){n(339),t.exports=n(17).String.trimLeft},function(t,e,n){"use strict";n(54)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,e,n){n(341),t.exports=n(17).String.trimRight},function(t,e,n){"use strict";n(54)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,e,n){n(343),t.exports=n(84).f("asyncIterator")},function(t,e,n){n(110)("asyncIterator")},function(t,e,n){n(345),t.exports=n(17).Object.getOwnPropertyDescriptors},function(t,e,n){var o=n(0),r=n(137),i=n(28),a=n(33),s=n(100);o(o.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,o=i(t),c=a.f,l=r(o),u={},f=0;l.length>f;)void 0!==(n=c(o,e=l[f++]))&&s(u,e,n);return u}})},function(t,e,n){n(347),t.exports=n(17).Object.values},function(t,e,n){var o=n(0),r=n(139)(!1);o(o.S,"Object",{values:function(t){return r(t)}})},function(t,e,n){n(349),t.exports=n(17).Object.entries},function(t,e,n){var o=n(0),r=n(139)(!0);o(o.S,"Object",{entries:function(t){return r(t)}})},function(t,e,n){"use strict";n(131),n(351),t.exports=n(17).Promise.finally},function(t,e,n){"use strict";var o=n(0),r=n(17),i=n(9),a=n(65),s=n(133);o(o.P+o.R,"Promise",{finally:function(t){var e=a(this,r.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then((function(){return n}))}:t,n?function(n){return s(e,t()).then((function(){throw n}))}:t)}})},function(t,e,n){n(353),n(354),n(355),t.exports=n(17)},function(t,e,n){var o=n(9),r=n(0),i=n(77),a=[].slice,s=/MSIE .\./.test(i),c=function(t){return function(e,n){var o=arguments.length>2,r=!!o&&a.call(arguments,2);return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};r(r.G+r.B+r.F*s,{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},function(t,e,n){var o=n(0),r=n(106);o(o.G+o.B,{setImmediate:r.set,clearImmediate:r.clear})},function(t,e,n){for(var o=n(103),r=n(45),i=n(23),a=n(9),s=n(27),c=n(55),l=n(14),u=l("iterator"),f=l("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=r(p),v=0;v<h.length;v++){var y,g=h[v],b=p[g],m=a[g],k=m&&m.prototype;if(k&&(k[u]||s(k,u,d),k[f]||s(k,f,g),c[g]=d,b))for(y in o)k[y]||i(k,y,o[y],!0)}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(52),n(2),n(3),n(360),n(362),n(363),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f){"use strict";var d=n(13),p=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),u=p(u),f=d(f);var h=function(){function t(e){var n=this;(0,a.default)(this,t);var o=function(){};"object"===(0,i.default)(e)&&f.isFunction(e.onReady)&&(o=e.onReady);var r=new u.default(e);this.isReady=r.isReady.then((function(){n.exportAPI(r),o()}))}return(0,s.default)(t,[{key:"exportAPI",value:function(t){var e=this;["configuration"].forEach((function(n){e[n]=t[n]})),this.destroy=function(){for(var n in Object.values(t.moduleInstances).forEach((function(t){f.isFunction(t.destroy)&&t.destroy()})),t=null,e)Object.prototype.hasOwnProperty.call(e,n)&&delete e[n];Object.setPrototypeOf(e,null)},Object.setPrototypeOf(this,t.moduleInstances.API.methods),delete this.exportAPI,Object.entries({blocks:{clear:"clear",render:"render"},caret:{focus:"focus"},events:{on:"on",off:"off",emit:"emit"},saver:{save:"save"}}).forEach((function(n){var o=(0,r.default)(n,2),i=o[0],a=o[1];Object.entries(a).forEach((function(n){var o=(0,r.default)(n,2),a=o[0],s=o[1];e[s]=t.moduleInstances.API.methods[i][a]}))}))}}],[{key:"version",get:function(){return"2.19.0"}}]),t}();o.default=h,h.displayName="EditorJS",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){(e=t.exports=function(...t){return r(...t)}).__esModule=!0;const o=n(361),r=o.default;Object.assign(e,o)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){},e.revert=function(){}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[],void 0===(i="function"==typeof(o=function(){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e);return null}),Element.prototype.prepend||(Element.prototype.prepend=function(t){var e=document.createDocumentFragment();Array.isArray(t)||(t=[t]),t.forEach((function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(t))})),this.insertBefore(e,this.firstChild)})})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(52),n(21),n(22),n(2),n(3),n(15),n(8),n(59),n(144)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(13),h=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=p(u),f=h(f);var v=n(373),y=[];v.keys().forEach((function(t){t.match(/^\.\/[^_][\w/]*\.([tj])s$/)&&y.push(v(t))}));var g=function(){function t(e){var n,o,r=this;(0,s.default)(this,t),this.moduleInstances={},this.isReady=new Promise((function(t,e){n=t,o=e})),Promise.resolve().then((0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.configuration=e,t.next=3,r.validate();case 3:return t.next=5,r.init();case 5:return t.next=7,r.start();case 7:u.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧","log","","color: #E24A75"),setTimeout((0,a.default)(i.default.mark((function t(){var e,o,a;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.render();case 2:r.configuration.autofocus&&(e=r.moduleInstances,o=e.BlockManager,(a=e.Caret).setToBlock(o.blocks[0],a.positions.START),o.highlightCurrentNode()),r.moduleInstances.UI.removeLoader(),n();case 5:case"end":return t.stop()}}),t)}))),500);case 9:case"end":return t.stop()}}),t)})))).catch((function(t){u.log("Editor.js is not ready because of ".concat(t),"error"),o(t)}))}var e,n;return(0,c.default)(t,[{key:"validate",value:(n=(0,a.default)(i.default.mark((function t(){var e,n,o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.config,n=e.holderId,o=e.holder,!n||!o){t.next=3;break}throw Error("«holderId» and «holder» param can't assign at the same time.");case 3:if("string"!=typeof o||l.default.get(o)){t.next=5;break}throw Error("element with ID «".concat(o,"» is missing. Pass correct holder's ID."));case 5:if(!o||"object"!==(0,r.default)(o)||l.default.isElement(o)){t.next=7;break}throw Error("holder as HTMLElement if provided must be inherit from Element class.");case 7:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"init",value:function(){this.constructModules(),this.configureModules()}},{key:"start",value:(e=(0,a.default)(i.default.mark((function t(){var e,n=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=["Tools","UI","BlockManager","Paste","BlockSelection","RectangleSelection","CrossBlockSelection","ReadOnly"],t.next=3,e.reduce((function(t,e){return t.then((0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.moduleInstances[e].prepare();case 3:t.next=10;break;case 5:if(t.prev=5,t.t0=t.catch(0),!(t.t0 instanceof d.CriticalError)){t.next=9;break}throw new Error(t.t0.message);case 9:u.log("Module ".concat(e," was skipped because of %o"),"warn",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,5]])}))))}),Promise.resolve());case 3:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){return this.moduleInstances.Renderer.render(this.config.data.blocks)}},{key:"constructModules",value:function(){var t=this;y.forEach((function(e){var n=u.isFunction(e)?e:e.default;try{t.moduleInstances[n.displayName]=new n({config:t.configuration})}catch(t){u.log("Module ".concat(n.displayName," skipped because"),"warn",t)}}))}},{key:"configureModules",value:function(){for(var t in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances,t)&&(this.moduleInstances[t].state=this.getModulesDiff(t))}},{key:"getModulesDiff",value:function(t){var e={};for(var n in this.moduleInstances)n!==t&&(e[n]=this.moduleInstances[n]);return e}},{key:"configuration",set:function(t){var e,n;"object"!==(0,r.default)(t)&&(t={holder:t}),u.deprecationAssert(!!t.holderId,"config.holderId","config.holder"),t.holderId&&!t.holder&&(t.holder=t.holderId,t.holderId=null),this.config=t,null==this.config.holder&&(this.config.holder="editorjs"),this.config.logLevel||(this.config.logLevel=u.LogLevels.VERBOSE),u.setLogLevel(this.config.logLevel),u.deprecationAssert(Boolean(this.config.initialBlock),"config.initialBlock","config.defaultBlock"),this.config.defaultBlock=this.config.defaultBlock||this.config.initialBlock||"paragraph",this.config.minHeight=void 0!==this.config.minHeight?this.config.minHeight:300;var o={type:this.config.defaultBlock,data:{}};this.config.placeholder=this.config.placeholder||!1,this.config.sanitizer=this.config.sanitizer||{p:!0,b:!0,a:!0},this.config.hideToolbar=!!this.config.hideToolbar&&this.config.hideToolbar,this.config.tools=this.config.tools||{},this.config.i18n=this.config.i18n||{},this.config.data=this.config.data||{},this.config.onReady=this.config.onReady||function(){},this.config.onChange=this.config.onChange||function(){},this.config.inlineToolbar=void 0===this.config.inlineToolbar||this.config.inlineToolbar,u.isEmpty(this.config.data)?(this.config.data={},this.config.data.blocks=[o]):this.config.data.blocks&&0!==this.config.data.blocks.length||(this.config.data.blocks=[o]),this.config.readOnly=this.config.readOnly||!1,(null===(e=t.i18n)||void 0===e?void 0:e.messages)&&f.default.setDictionary(t.i18n.messages),this.config.i18n.direction=(null===(n=t.i18n)||void 0===n?void 0:n.direction)||"ltr"},get:function(){return this.config}}]),t}();o.default=g,g.displayName="Core",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(142);t.exports=function(t){if(Array.isArray(t))return o(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){var o=n(4),r=n(108),i=n(370),a=n(371);function s(e){var n="function"==typeof Map?new Map:void 0;return t.exports=s=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},s(e)}t.exports=s},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,n){var o=n(108),r=n(372);function i(e,n,a){return r()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},function(t,e,n){var o={"./api":80,"./api/":80,"./api/blocks":145,"./api/blocks.ts":145,"./api/caret":147,"./api/caret.ts":147,"./api/events":148,"./api/events.ts":148,"./api/i18n":149,"./api/i18n.ts":149,"./api/index":80,"./api/index.ts":80,"./api/inlineToolbar":150,"./api/inlineToolbar.ts":150,"./api/listeners":151,"./api/listeners.ts":151,"./api/notifier":152,"./api/notifier.ts":152,"./api/readonly":153,"./api/readonly.ts":153,"./api/sanitizer":154,"./api/sanitizer.ts":154,"./api/saver":155,"./api/saver.ts":155,"./api/selection":156,"./api/selection.ts":156,"./api/styles":157,"./api/styles.ts":157,"./api/toolbar":158,"./api/toolbar.ts":158,"./api/tooltip":159,"./api/tooltip.ts":159,"./blockEvents":160,"./blockEvents.ts":160,"./blockManager":161,"./blockManager.ts":161,"./blockSelection":162,"./blockSelection.ts":162,"./caret":163,"./caret.ts":163,"./crossBlockSelection":164,"./crossBlockSelection.ts":164,"./dragNDrop":165,"./dragNDrop.ts":165,"./events":166,"./events.ts":166,"./listeners":167,"./listeners.ts":167,"./modificationsObserver":168,"./modificationsObserver.ts":168,"./notifier":169,"./notifier.ts":169,"./paste":170,"./paste.ts":170,"./readonly":171,"./readonly.ts":171,"./rectangleSelection":172,"./rectangleSelection.ts":172,"./renderer":173,"./renderer.ts":173,"./sanitizer":174,"./sanitizer.ts":174,"./saver":175,"./saver.ts":175,"./shortcuts":176,"./shortcuts.ts":176,"./toolbar":81,"./toolbar/":81,"./toolbar/blockSettings":177,"./toolbar/blockSettings.ts":177,"./toolbar/conversion":178,"./toolbar/conversion.ts":178,"./toolbar/index":81,"./toolbar/index.ts":81,"./toolbar/inline":179,"./toolbar/inline.ts":179,"./toolbar/toolbox":180,"./toolbar/toolbox.ts":180,"./tools":67,"./tools.ts":67,"./tooltip":181,"./tooltip.ts":181,"./ui":182,"./ui.ts":182};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=373},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n(1).toString();var i=function(){function t(e){var n=e.data,o=e.config,r=e.api,i=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.readOnly=i,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.readOnly||(this.onKeyUp=this.onKeyUp.bind(this)),this._placeholder=o.placeholder?o.placeholder:t.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),this._preserveBlank=void 0!==o.preserveBlank&&o.preserveBlank,this.data=n}return r(t,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}}]),r(t,[{key:"onKeyUp",value:function(t){"Backspace"!==t.code&&"Delete"!==t.code||""===this._element.textContent&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block),t.contentEditable=!1,t.dataset.placeholder=this.api.i18n.t(this._placeholder),this.readOnly||(t.contentEditable=!0,t.addEventListener("keyup",this.onKeyUp)),t}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(t){var e={text:this.data.text+t.text};this.data=e}},{key:"validate",value:function(t){return!(""===t.text.trim()&&!this._preserveBlank)}},{key:"save",value:function(t){return{text:t.innerHTML}}},{key:"onPaste",value:function(t){var e={text:t.detail.data.innerHTML};this.data=e}},{key:"data",get:function(){var t=this._element.innerHTML;return this._data.text=t,this._data},set:function(t){this._data=t||{},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{tags:["P"]}}},{key:"toolbox",get:function(){return{icon:n(5).default,title:"Text"}}}]),t}();t.exports=i},function(t,e,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]),o(r,{insert:"head",singleton:!1}),t.exports=r.locals||{}},function(t,e,n){"use strict";var o,r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],r=0;r<t.length;r++){var s=t[r],c=e.base?s[0]+e.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var f=a(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:v(d,e),references:1}),o.push(u)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var p=null,h=0;function v(t,e){var n,o,r;if(e.singleton){var i=h++;n=p||(p=c(e)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=c(e),o=d.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=s(t,e),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o,r,i=t[1]||"",a=t[3];if(!a)return i;if(e&&"function"==typeof btoa){var s=(n=a,o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(r," */")),c=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[i].concat(c).concat([s]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e),e.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n'}])},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(){(0,r.default)(this,t),this.commandName="bold",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--bold"},this.nodes={button:void 0}}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a.default.svg("bold",12,14)),this.nodes.button}},{key:"surround",value:function(t){document.execCommand(this.commandName)}},{key:"checkState",value:function(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}},{key:"shortcut",get:function(){return"CMD+B"}}],[{key:"sanitize",get:function(){return{b:{}}}}]),t}();o.default=c,c.displayName="BoldInlineTool",c.isInline=!0,c.title="Bold",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(){(0,r.default)(this,t),this.commandName="italic",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--italic"},this.nodes={button:null}}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a.default.svg("italic",4,11)),this.nodes.button}},{key:"surround",value:function(t){document.execCommand(this.commandName)}},{key:"checkState",value:function(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}},{key:"shortcut",get:function(){return"CMD+I"}}],[{key:"sanitize",get:function(){return{i:{}}}}]),t}();o.default=c,c.displayName="ItalicInlineTool",c.isInline=!0,c.title="Italic",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(25),n(15),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(13),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=l(c);var f=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.commandLink="createLink",this.commandUnlink="unlink",this.ENTER_KEY=13,this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-input",inputShowed:"ce-inline-tool-input--showed"},this.nodes={button:null,input:null},this.inputOpened=!1,this.toolbar=n.toolbar,this.inlineToolbar=n.inlineToolbar,this.notifier=n.notifier,this.i18n=n.i18n,this.selection=new a.default}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(s.default.svg("link",14,10)),this.nodes.button.appendChild(s.default.svg("unlink",15,11)),this.nodes.button}},{key:"renderActions",value:function(){var t=this;return this.nodes.input=document.createElement("input"),this.nodes.input.placeholder=this.i18n.t("Add a link"),this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("keydown",(function(e){e.keyCode===t.ENTER_KEY&&t.enterPressed(e)})),this.nodes.input}},{key:"surround",value:function(t){if(t){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());var e=this.selection.findParentTag("A");if(e)return this.selection.expandToTag(e),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()}},{key:"checkState",value:function(t){var e=this.selection.findParentTag("A");if(e){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var n=e.getAttribute("href");this.nodes.input.value="null"!==n?n:"",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!e}},{key:"clear",value:function(){this.closeActions()}},{key:"toggleActions",value:function(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}},{key:"openActions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.nodes.input.classList.add(this.CSS.inputShowed),t&&this.nodes.input.focus(),this.inputOpened=!0}},{key:"closeActions",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.selection.isFakeBackgroundEnabled){var e=new a.default;e.save(),this.selection.restore(),this.selection.removeFakeBackground(),e.restore()}this.nodes.input.classList.remove(this.CSS.inputShowed),this.nodes.input.value="",t&&this.selection.clearSaved(),this.inputOpened=!1}},{key:"enterPressed",value:function(t){var e=this.nodes.input.value||"";if(e.trim()||(this.selection.restore(),this.unlink(),t.preventDefault(),this.closeActions()),!this.validateURL(e))return this.notifier.show({message:"Pasted link is not valid.",style:"error"}),void c.log("Incorrect Link pasted","warn",e);e=this.prepareLink(e),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(e),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.selection.collapseToEnd(),this.inlineToolbar.close()}},{key:"validateURL",value:function(t){return!/\s/.test(t)}},{key:"prepareLink",value:function(t){return t=t.trim(),t=this.addProtocol(t)}},{key:"addProtocol",value:function(t){if(/^(\w+):(\/\/)?/.test(t))return t;var e=/^\/[^/\s]/.test(t),n="#"===t.substring(0,1),o=/^\/\/[^/\s]/.test(t);return e||n||o||(t="http://"+t),t}},{key:"insertLink",value:function(t){var e=this.selection.findParentTag("A");e&&this.selection.expandToTag(e),document.execCommand(this.commandLink,!1,t)}},{key:"unlink",value:function(){document.execCommand(this.commandUnlink)}},{key:"shortcut",get:function(){return"CMD+K"}}],[{key:"sanitize",get:function(){return{a:{href:!0,target:"_blank",rel:"nofollow"}}}}]),t}();o.default=f,f.displayName="LinkInlineTool",f.isInline=!0,f.title="Link",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=e.data,o=e.api;(0,r.default)(this,t),this.CSS={wrapper:"ce-stub",info:"ce-stub__info",title:"ce-stub__title",subtitle:"ce-stub__subtitle"},this.api=o,this.title=n.title||this.api.i18n.t("Error"),this.subtitle=this.api.i18n.t("The block can not be displayed correctly."),this.savedData=n.savedData,this.wrapper=this.make()}return(0,i.default)(t,[{key:"render",value:function(){return this.wrapper}},{key:"save",value:function(){return this.savedData}},{key:"make",value:function(){var t=a.default.make("div",this.CSS.wrapper),e=a.default.svg("sad-face",52,52),n=a.default.make("div",this.CSS.info),o=a.default.make("div",this.CSS.title,{textContent:this.title}),r=a.default.make("div",this.CSS.subtitle,{textContent:this.subtitle});return t.appendChild(e),n.appendChild(o),n.appendChild(r),t.appendChild(n),t}}]),t}();o.default=c,c.displayName="Stub",c.isReadOnlySupported=!0,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15),n(8),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(13),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=l(s),c=u(c);var f=function(){function t(e,n){(0,r.default)(this,t),this.cursor=-1,this.items=[],this.items=e||[],this.focusedCssClass=n}return(0,i.default)(t,[{key:"setItems",value:function(t){this.items=t}},{key:"next",value:function(){this.cursor=this.leafNodesAndReturnIndex(t.directions.RIGHT)}},{key:"previous",value:function(){this.cursor=this.leafNodesAndReturnIndex(t.directions.LEFT)}},{key:"dropCursor",value:function(){-1!==this.cursor&&(this.items[this.cursor].classList.remove(this.focusedCssClass),this.cursor=-1)}},{key:"leafNodesAndReturnIndex",value:function(e){var n=this;if(0===this.items.length)return this.cursor;var o=this.cursor;return-1===o?o=e===t.directions.RIGHT?-1:0:this.items[o].classList.remove(this.focusedCssClass),o=e===t.directions.RIGHT?(o+1)%this.items.length:(this.items.length+o-1)%this.items.length,a.default.canSetCaret(this.items[o])&&s.delay((function(){return c.default.setCursor(n.items[o])}),50)(),this.items[o].classList.add(this.focusedCssClass),o}},{key:"currentItem",get:function(){return-1===this.cursor?null:this.items[this.cursor]}}]),t}();o.default=f,f.displayName="DomIterator",f.directions={RIGHT:"right",LEFT:"left"},t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-up",animation:"wobble"},this.api=n}return(0,i.default)(t,[{key:"render",value:function(){var t=this,e=a.default.make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a.default.svg("arrow-up",14,14)),this.api.listeners.on(e,"click",(function(n){return t.handleClick(n,e)}),!1),this.api.tooltip.onHover(e,this.api.i18n.t("Move up")),e}},{key:"handleClick",value:function(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(o),i=this.api.blocks.getBlockByIndex(o-1);if(0===o||!r||!i)return e.classList.add(this.CSS.animation),void window.setTimeout((function(){e.classList.remove(n.CSS.animation)}),500);var a,s=r.holder,c=i.holder,l=s.getBoundingClientRect(),u=c.getBoundingClientRect();a=u.top>0?Math.abs(l.top)-Math.abs(u.top):window.innerHeight-Math.abs(l.top)+Math.abs(u.top),window.scrollBy(0,-1*a),this.api.blocks.move(o-1),this.api.tooltip.hide()}}]),t}();o.default=c,c.displayName="MoveUpTune",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=this,o=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",buttonDelete:"ce-settings__button--delete",buttonConfirm:"ce-settings__button--confirm"},this.nodes={button:null},this.api=o,this.resetConfirmation=function(){n.setConfirmation(!1)}}return(0,i.default)(t,[{key:"render",value:function(){var t=this;return this.nodes.button=a.default.make("div",[this.CSS.button,this.CSS.buttonDelete],{}),this.nodes.button.appendChild(a.default.svg("cross",12,12)),this.api.listeners.on(this.nodes.button,"click",(function(e){return t.handleClick(e)}),!1),this.api.tooltip.onHover(this.nodes.button,this.api.i18n.t("Delete")),this.nodes.button}},{key:"handleClick",value:function(t){this.needConfirmation?(this.api.events.off("block-settings-closed",this.resetConfirmation),this.api.blocks.delete(),this.api.toolbar.close(),this.api.tooltip.hide(),t.stopPropagation()):(this.setConfirmation(!0),this.api.events.on("block-settings-closed",this.resetConfirmation))}},{key:"setConfirmation",value:function(t){this.needConfirmation=t,this.nodes.button.classList.add(this.CSS.buttonConfirm)}}]),t}();o.default=c,c.displayName="DeleteTune",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-down",animation:"wobble"},this.api=n}return(0,i.default)(t,[{key:"render",value:function(){var t=this,e=a.default.make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a.default.svg("arrow-down",14,14)),this.api.listeners.on(e,"click",(function(n){return t.handleClick(n,e)}),!1),this.api.tooltip.onHover(e,this.api.i18n.t("Move down")),e}},{key:"handleClick",value:function(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(o+1);if(!r)return e.classList.add(this.CSS.animation),void window.setTimeout((function(){e.classList.remove(n.CSS.animation)}),500);var i=r.holder,a=i.getBoundingClientRect(),s=Math.abs(window.innerHeight-i.offsetHeight);a.top<window.innerHeight&&(s=window.scrollY+i.offsetHeight),window.scrollTo(0,s),this.api.blocks.move(o+1),this.api.tooltip.hide()}}]),t}();o.default=c,c.displayName="MoveDownTune",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(8),n(15),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(13),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=l(a),s=u(s);var f=function(){function t(e){(0,r.default)(this,t),this.blocks=[],this.workingArea=e}return(0,i.default)(t,[{key:"push",value:function(t){this.blocks.push(t),this.insertToDOM(t)}},{key:"swap",value:function(t,e){var n=this.blocks[e];s.default.swap(this.blocks[t].holder,n.holder),this.blocks[e]=this.blocks[t],this.blocks[t]=n}},{key:"move",value:function(t,e){var n=this.blocks.splice(e,1)[0],o=t-1,r=Math.max(0,o),i=this.blocks[r];t>0?this.insertToDOM(n,"afterend",i):this.insertToDOM(n,"beforebegin",i),this.blocks.splice(t,0,n);var a=this.composeBlockEvent("move",{fromIndex:e,toIndex:t});n.call(c.BlockToolAPI.MOVED,a)}},{key:"insert",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.length){t>this.length&&(t=this.length),n&&(this.blocks[t].holder.remove(),this.blocks[t].call(c.BlockToolAPI.REMOVED));var o=n?1:0;if(this.blocks.splice(t,o,e),t>0){var r=this.blocks[t-1];this.insertToDOM(e,"afterend",r)}else{var i=this.blocks[t+1];i?this.insertToDOM(e,"beforebegin",i):this.insertToDOM(e)}}else this.push(e)}},{key:"remove",value:function(t){isNaN(t)&&(t=this.length-1),this.blocks[t].holder.remove(),this.blocks[t].call(c.BlockToolAPI.REMOVED),this.blocks.splice(t,1)}},{key:"removeAll",value:function(){this.workingArea.innerHTML="",this.blocks.forEach((function(t){return t.call(c.BlockToolAPI.REMOVED)})),this.blocks.length=0}},{key:"insertAfter",value:function(t,e){var n=this.blocks.indexOf(t);this.insert(n+1,e)}},{key:"get",value:function(t){return this.blocks[t]}},{key:"indexOf",value:function(t){return this.blocks.indexOf(t)}},{key:"insertToDOM",value:function(t,e,n){e?n.holder.insertAdjacentElement(e,t.holder):this.workingArea.appendChild(t.holder),t.call(c.BlockToolAPI.RENDERED)}},{key:"composeBlockEvent",value:function(t,e){return new CustomEvent(t,{detail:e})}},{key:"length",get:function(){return this.blocks.length}},{key:"array",get:function(){return this.blocks}},{key:"nodes",get:function(){return a.array(this.workingArea.children)}}],[{key:"set",value:function(t,e,n){return isNaN(Number(e))?(Reflect.set(t,e,n),!0):(t.insert(+e,n),!0)}},{key:"get",value:function(t,e){return isNaN(Number(e))?Reflect.get(t,e):t.get(+e)}}]),t}();o.default=f,f.displayName="Blocks",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n(1),t.exports=function(){var t=n(6),e=null;return{show:function(n){if(n.message){!function(){if(e)return!0;e=t.getWrapper(),document.body.appendChild(e)}();var o=null,r=n.time||8e3;switch(n.type){case"confirm":o=t.confirm(n);break;case"prompt":o=t.prompt(n);break;default:o=t.alert(n),window.setTimeout((function(){o.remove()}),r)}e.appendChild(o),o.classList.add("cdx-notify--bounce-in")}}}}()},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]),n(4)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var i=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[o].concat(a).concat([i]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,u=[],f=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function y(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(e,t.attrs),h(t,e),e}function g(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=c||(c=y(e)),o=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),o=function(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){v(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}for(t&&d(p(t,e),e),r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var m,k=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=k(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(t,e,n){"use strict";var o,r,i,a,s,c;t.exports=(o="cdx-notify",r="cdx-notify__cross",i="cdx-notify__button--confirm",a="cdx-notify__button",s="cdx-notify__btns-wrapper",{alert:c=function(t){var e=document.createElement("DIV"),n=document.createElement("DIV"),i=t.message,a=t.style;return e.classList.add(o),a&&e.classList.add(o+"--"+a),e.innerHTML=i,n.classList.add(r),n.addEventListener("click",e.remove.bind(e)),e.appendChild(n),e},confirm:function(t){var e=c(t),n=document.createElement("div"),o=document.createElement("button"),l=document.createElement("button"),u=e.querySelector("."+r),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Confirm",l.innerHTML=t.cancelText||"Cancel",o.classList.add(a),l.classList.add(a),o.classList.add(i),l.classList.add("cdx-notify__button--cancel"),f&&"function"==typeof f&&(l.addEventListener("click",f),u.addEventListener("click",f)),d&&"function"==typeof d&&o.addEventListener("click",d),o.addEventListener("click",e.remove.bind(e)),l.addEventListener("click",e.remove.bind(e)),n.appendChild(o),n.appendChild(l),e.appendChild(n),e},prompt:function(t){var e=c(t),n=document.createElement("div"),o=document.createElement("button"),l=document.createElement("input"),u=e.querySelector("."+r),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Ok",o.classList.add(a),o.classList.add(i),l.classList.add("cdx-notify__input"),t.placeholder&&l.setAttribute("placeholder",t.placeholder),t.default&&(l.value=t.default),t.inputType&&(l.type=t.inputType),f&&"function"==typeof f&&u.addEventListener("click",f),d&&"function"==typeof d&&o.addEventListener("click",(function(){d(l.value)})),o.addEventListener("click",e.remove.bind(e)),n.appendChild(l),n.appendChild(o),e.appendChild(n),e},getWrapper:function(){var t=document.createElement("DIV");return t.classList.add("cdx-notifies"),t}})}])},function(t,e,n){var o,r;void 0===(r="function"==typeof(o=function(){function t(t){var e=t.tags;if(!Object.keys(e).map((function(t){return typeof e[t]})).every((function(t){return"object"===t||"boolean"===t||"function"===t})))throw new Error("The configuration was invalid");this.config=t}var e=["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","PRE"];function n(t){return-1!==e.indexOf(t.nodeName)}var o=["A","B","STRONG","I","EM","SUB","SUP","U","STRIKE"];function r(t){return-1!==o.indexOf(t.nodeName)}function i(t,e,n){return"function"==typeof t.tags[e]?t.tags[e](n):t.tags[e]}function a(t,e){return void 0===e||"boolean"==typeof e&&!e}function s(t,e,n){var o=t.name.toLowerCase();return!0!==e&&("function"==typeof e[o]?!e[o](t.value,n):void 0===e[o]||!1===e[o]||"string"==typeof e[o]&&e[o]!==t.value)}return t.prototype.clean=function(t){const e=document.implementation.createHTMLDocument(),n=e.createElement("div");return n.innerHTML=t,this._sanitize(e,n),n.innerHTML},t.prototype._sanitize=function(t,e){var o=function(t,e){return t.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null,!1)}(t,e),c=o.firstChild();if(c)do{if(c.nodeType!==Node.TEXT_NODE){if(c.nodeType===Node.COMMENT_NODE){e.removeChild(c),this._sanitize(t,e);break}var l,u=r(c);u&&(l=Array.prototype.some.call(c.childNodes,n));var f=!!e.parentNode,d=n(e)&&n(c)&&f,p=c.nodeName.toLowerCase(),h=i(this.config,p,c);if(u&&l||a(0,h)||!this.config.keepNestedBlockElements&&d){if("SCRIPT"!==c.nodeName&&"STYLE"!==c.nodeName)for(;c.childNodes.length>0;)e.insertBefore(c.childNodes[0],c);e.removeChild(c),this._sanitize(t,e);break}for(var v=0;v<c.attributes.length;v+=1){var y=c.attributes[v];s(y,h,c)&&(c.removeAttribute(y.name),v-=1)}this._sanitize(t,c)}else if(""===c.data.trim()&&(c.previousElementSibling&&n(c.previousElementSibling)||c.nextElementSibling&&n(c.nextElementSibling))){e.removeChild(c),this._sanitize(t,e);break}}while(c=o.nextSibling())},t})?o.call(e,n,e,t):o)||(t.exports=r)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.r(e);var i=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.commands={},this.keys={},this.name=e.name,this.parseShortcutName(e.name),this.element=e.on,this.callback=e.callback,this.executeShortcut=function(t){n.execute(t)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return r(t,null,[{key:"supportedCommands",get:function(){return{SHIFT:["SHIFT"],CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],ALT:["ALT","OPTION"]}}},{key:"keyCodes",get:function(){return{0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46}}}]),r(t,[{key:"parseShortcutName",value:function(e){e=e.split("+");for(var n=0;n<e.length;n++){e[n]=e[n].toUpperCase();var o=!1;for(var r in t.supportedCommands)if(t.supportedCommands[r].includes(e[n])){o=this.commands[r]=!0;break}o||(this.keys[e[n]]=!0)}for(var i in t.supportedCommands)this.commands[i]||(this.commands[i]=!1)}},{key:"execute",value:function(e){var n,o={CMD:e.ctrlKey||e.metaKey,SHIFT:e.shiftKey,ALT:e.altKey},r=!0;for(n in this.commands)this.commands[n]!==o[n]&&(r=!1);var i,a=!0;for(i in this.keys)a=a&&e.keyCode===t.keyCodes[i];r&&a&&this.callback(e)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),t}();e.default=i}]).default},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));class o{constructor(){this.nodes={wrapper:null,content:null},this.showed=!1,this.offsetTop=10,this.offsetLeft=10,this.offsetRight=10,this.hidingDelay=0,this.loadStyles(),this.prepare(),window.addEventListener("scroll",()=>{this.showed&&this.hide(!0)},{passive:!0})}get CSS(){return{tooltip:"ct",tooltipContent:"ct__content",tooltipShown:"ct--shown",placement:{left:"ct--left",bottom:"ct--bottom",right:"ct--right",top:"ct--top"}}}show(t,e,n){this.nodes.wrapper||this.prepare(),this.hidingTimeout&&clearTimeout(this.hidingTimeout);const o=Object.assign({placement:"bottom",marginTop:0,marginLeft:0,marginRight:0,marginBottom:0,delay:70,hidingDelay:0},n);if(o.hidingDelay&&(this.hidingDelay=o.hidingDelay),this.nodes.content.innerHTML="","string"==typeof e)this.nodes.content.appendChild(document.createTextNode(e));else{if(!(e instanceof Node))throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But "+typeof e+" given.");this.nodes.content.appendChild(e)}switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)),o.placement){case"top":this.placeTop(t,o);break;case"left":this.placeLeft(t,o);break;case"right":this.placeRight(t,o);break;case"bottom":default:this.placeBottom(t,o)}o&&o.delay?this.showingTimeout=setTimeout(()=>{this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0},o.delay):(this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0)}hide(t=!1){if(this.hidingDelay&&!t)return this.hidingTimeout&&clearTimeout(this.hidingTimeout),void(this.hidingTimeout=setTimeout(()=>{this.hide(!0)},this.hidingDelay));this.nodes.wrapper.classList.remove(this.CSS.tooltipShown),this.showed=!1,this.showingTimeout&&clearTimeout(this.showingTimeout)}onHover(t,e,n){t.addEventListener("mouseenter",()=>{this.show(t,e,n)}),t.addEventListener("mouseleave",()=>{this.hide()})}prepare(){this.nodes.wrapper=this.make("div",this.CSS.tooltip),this.nodes.content=this.make("div",this.CSS.tooltipContent),this.append(this.nodes.wrapper,this.nodes.content),this.append(document.body,this.nodes.wrapper)}loadStyles(){const t="codex-tooltips-style";if(document.getElementById(t))return;const e=n(2),o=this.make("style",null,{textContent:e.toString(),id:t});this.prepend(document.head,o)}placeBottom(t,e){const n=t.getBoundingClientRect(),o=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,r=n.bottom+window.pageYOffset+this.offsetTop+e.marginTop;this.applyPlacement("bottom",o,r)}placeTop(t,e){const n=t.getBoundingClientRect(),o=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,r=n.top+window.pageYOffset-this.nodes.wrapper.clientHeight-this.offsetTop;this.applyPlacement("top",o,r)}placeLeft(t,e){const n=t.getBoundingClientRect(),o=n.left-this.nodes.wrapper.offsetWidth-this.offsetLeft-e.marginLeft,r=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("left",o,r)}placeRight(t,e){const n=t.getBoundingClientRect(),o=n.right+this.offsetRight+e.marginRight,r=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("right",o,r)}applyPlacement(t,e,n){this.nodes.wrapper.classList.add(this.CSS.placement[t]),this.nodes.wrapper.style.left=e+"px",this.nodes.wrapper.style.top=n+"px"}make(t,e=null,n={}){const o=document.createElement(t);Array.isArray(e)?o.classList.add(...e):e&&o.classList.add(e);for(const t in n)n.hasOwnProperty(t)&&(o[t]=n[t]);return o}append(t,e){Array.isArray(e)?e.forEach(e=>t.appendChild(e)):t.appendChild(e)}prepend(t,e){Array.isArray(e)?(e=e.reverse()).forEach(e=>t.prepend(e)):t.prepend(e)}}},function(t,e){t.exports='.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}'}]).default},function(t,e,n){"use strict";n.r(e),e.default='<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 8 8">\n  <circle cx="6.5" cy="1.5" r="1.5"/>\n  <circle cx="6.5" cy="6.5" r="1.5"/>\n  <circle cx="1.5" cy="1.5" r="1.5"/>\n  <circle cx="1.5" cy="6.5" r="1.5"/>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>'},function(t,e){t.exports='.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}@media (max-width:650px){.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:calc(100% - 35px)}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px;-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;transform:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:-30px;top:5px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:absolute;right:-28px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:18px;height:18px;color:#707684;cursor:pointer;background:#eff2f5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn:hover{color:#1d202b}@media (max-width:650px){.ce-toolbar__settings-btn{background:transparent}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox-button-tooltip__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-settings{right:-1px;top:30px;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:-11px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-34px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-34px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}'}])}));

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-editor-js/dist/vue-editor-js.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-editor-js/dist/vue-editor-js.esm.js ***!
  \**************************************************************/
/*! exports provided: default, Editor, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/vue-editor-js/node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_1__);
/*!
 * vue-editor-js v2.0.0 
 * (c) 2020 ChangJoo Park<pcjpcj2@gmail.com>
 * Released under the MIT License.
 */



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var script = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["defineComponent"])({
  name: 'vue-editor-js',
  props: {
    holder: {
      type: String,
      default: function _default() {
        return 'vue-editor-js';
      },
      require: true
    },
    config: {
      type: Object,
      default: function _default() {
        return {};
      },
      require: true
    },
    initialized: {
      type: Function,
      default: function _default() {}
    }
  },
  setup: function setup(props, context) {
    var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["reactive"])({
      editor: null
    });

    function initEditor(props) {
      destroyEditor();
      state.editor = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_1___default.a(_objectSpread2({
        holder: 'vue-editor-js'
      }, props.config));
      props.initialized(state.editor);
    }

    function destroyEditor() {
      if (state.editor) {
        state.editor.destroy();
        state.editor = null;
      }
    }

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(function (_) {
      return initEditor(props);
    });
    return {
      props: props,
      state: state
    };
  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.holder}})};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var EditorComponent = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var version = '2.0.0';
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Vue.component('Editor', EditorComponent);
}
var plugin = {
  install: install,
  version: version
};
var Editor = EditorComponent;
var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-editor-js/node_modules/@vue/composition-api/dist/vue-composition-api.module.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-editor-js/node_modules/@vue/composition-api/dist/vue-composition-api.module.js ***!
  \*********************************************************************************************************/
/*! exports provided: default, computed, createComponent, createElement, defineComponent, getCurrentInstance, inject, isRef, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onServerPrefetch, onUnmounted, onUpdated, provide, reactive, ref, set, toRefs, watch, watchEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return defineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return getCurrentVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return isRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onActivated", function() { return onActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return onBeforeMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return onBeforeUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return onBeforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return onDeactivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return onErrorCaptured; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMounted", function() { return onMounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onServerPrefetch", function() { return onServerPrefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return onUnmounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUpdated", function() { return onUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return provide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return reactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return toRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchEffect", function() { return watchEffect; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var toString = function (x) { return Object.prototype.toString.call(x); };
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
var noopFn = function (_) { return _; };
var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noopFn,
    set: noopFn,
};
function proxy(target, key, _a) {
    var get = _a.get, set = _a.set;
    sharedPropertyDefinition.get = get || noopFn;
    sharedPropertyDefinition.set = set || noopFn;
    Object.defineProperty(target, key, sharedPropertyDefinition);
}
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true,
    });
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
function assert(condition, msg) {
    if (!condition)
        throw new Error("[vue-composition-api] " + msg);
}
function isArray(x) {
    return Array.isArray(x);
}
function isPlainObject(x) {
    return toString(x) === '[object Object]';
}
function isFunction(x) {
    return typeof x === 'function';
}
function warn(msg, vm) {
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.warn(msg, vm);
}
function logError(err, vm, info) {
    {
        warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    if (typeof window !== 'undefined' && typeof console !== 'undefined') {
        console.error(err);
    }
    else {
        throw err;
    }
}

var currentVue = null;
var currentVM = null;
function getCurrentVue() {
    {
        assert(currentVue, "must call Vue.use(plugin) before using any function.");
    }
    return currentVue;
}
function setCurrentVue(vue) {
    currentVue = vue;
}
function getCurrentVM() {
    return currentVM;
}
function setCurrentVM(vm) {
    currentVM = vm;
}

function ensureCurrentVMInFn(hook) {
    var vm = getCurrentVM();
    {
        assert(vm, "\"" + hook + "\" get called outside of \"setup()\"");
    }
    return vm;
}
function defineComponentInstance(Ctor, options) {
    if (options === void 0) { options = {}; }
    var silent = Ctor.config.silent;
    Ctor.config.silent = true;
    var vm = new Ctor(options);
    Ctor.config.silent = silent;
    return vm;
}
function isComponentInstance(obj) {
    return currentVue && obj instanceof currentVue;
}
function createSlotProxy(vm, slotName) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!vm.$scopedSlots[slotName]) {
            return warn("slots." + slotName + "() got called outside of the \"render()\" scope", vm);
        }
        return vm.$scopedSlots[slotName].apply(vm, args);
    };
}
function resolveSlots(slots, normalSlots) {
    var res;
    if (!slots) {
        res = {};
    }
    else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized;
    }
    else {
        res = {};
        for (var key in slots) {
            if (slots[key] && key[0] !== '$') {
                res[key] = true;
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key in normalSlots) {
        if (!(key in res)) {
            res[key] = true;
        }
    }
    return res;
}

function createSymbol(name) {
    return hasSymbol ? Symbol.for(name) : name;
}
var WatcherPreFlushQueueKey = createSymbol('vfa.key.preFlushQueue');
var WatcherPostFlushQueueKey = createSymbol('vfa.key.postFlushQueue');
var AccessControlIdentifierKey = createSymbol('vfa.key.accessControlIdentifier');
var ReactiveIdentifierKey = createSymbol('vfa.key.reactiveIdentifier');
var NonReactiveIdentifierKey = createSymbol('vfa.key.nonReactiveIdentifier');
// must be a string, symbol key is ignored in reactive
var RefKey = 'vfa.key.refKey';

var RefImpl = /** @class */ (function () {
    function RefImpl(_a) {
        var get = _a.get, set = _a.set;
        proxy(this, 'value', {
            get: get,
            set: set,
        });
    }
    return RefImpl;
}());
function createRef(options) {
    // seal the ref, this could prevent ref from being observed
    // It's safe to seal the ref, since we really shoulnd't extend it.
    // related issues: #79
    return Object.seal(new RefImpl(options));
}
// implementation
function ref(raw) {
    // if (isRef(raw)) {
    //   return {} as any;
    // }
    var _a;
    var value = reactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function isRef(value) {
    return value instanceof RefImpl;
}
function toRefs(obj) {
    if (!isPlainObject(obj))
        return obj;
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        // use ref to proxy the property
        if (!isRef(val)) {
            val = createRef({
                get: function () { return obj[key]; },
                set: function (v) { return (obj[key] = v); },
            });
        }
        // todo
        res[key] = val;
    });
    return res;
}

var AccessControlIdentifier = {};
var ReactiveIdentifier = {};
var NonReactiveIdentifier = {};
function isNonReactive(obj) {
    return (hasOwn(obj, NonReactiveIdentifierKey) && obj[NonReactiveIdentifierKey] === NonReactiveIdentifier);
}
function isReactive(obj) {
    return hasOwn(obj, ReactiveIdentifierKey) && obj[ReactiveIdentifierKey] === ReactiveIdentifier;
}
/**
 * Proxing property access of target.
 * We can do unwrapping and other things here.
 */
function setupAccessControl(target) {
    if (!isPlainObject(target) ||
        isNonReactive(target) ||
        Array.isArray(target) ||
        isRef(target) ||
        isComponentInstance(target)) {
        return;
    }
    if (hasOwn(target, AccessControlIdentifierKey) &&
        target[AccessControlIdentifierKey] === AccessControlIdentifier) {
        return;
    }
    if (Object.isExtensible(target)) {
        def(target, AccessControlIdentifierKey, AccessControlIdentifier);
    }
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineAccessControl(target, keys[i]);
    }
}
/**
 * Auto unwrapping when access property
 */
function defineAccessControl(target, key, val) {
    if (key === '__ob__')
        return;
    var getter;
    var setter;
    var property = Object.getOwnPropertyDescriptor(target, key);
    if (property) {
        if (property.configurable === false) {
            return;
        }
        getter = property.get;
        setter = property.set;
        if ((!getter || setter) /* not only have getter */ && arguments.length === 2) {
            val = target[key];
        }
    }
    setupAccessControl(val);
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function getterHandler() {
            var value = getter ? getter.call(target) : val;
            // if the key is equal to RefKey, skip the unwrap logic
            if (key !== RefKey && isRef(value)) {
                return value.value;
            }
            else {
                return value;
            }
        },
        set: function setterHandler(newVal) {
            if (getter && !setter)
                return;
            var value = getter ? getter.call(target) : val;
            // If the key is equal to RefKey, skip the unwrap logic
            // If and only if "value" is ref and "newVal" is not a ref,
            // the assignment should be proxied to "value" ref.
            if (key !== RefKey && isRef(value) && !isRef(newVal)) {
                value.value = newVal;
            }
            else if (setter) {
                setter.call(target, newVal);
            }
            else {
                val = newVal;
            }
            setupAccessControl(newVal);
        },
    });
}
function observe(obj) {
    var Vue = getCurrentVue();
    var observed;
    if (Vue.observable) {
        observed = Vue.observable(obj);
    }
    else {
        var vm = defineComponentInstance(Vue, {
            data: {
                $$state: obj,
            },
        });
        observed = vm._data.$$state;
    }
    return observed;
}
/**
 * Make obj reactivity
 */
function reactive(obj) {
    if (!obj) {
        warn('"reactive()" is called without provide an "object".');
        // @ts-ignore
        return;
    }
    if (!isPlainObject(obj) || isReactive(obj) || isNonReactive(obj) || !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(obj);
    def(observed, ReactiveIdentifierKey, ReactiveIdentifier);
    setupAccessControl(observed);
    return observed;
}
/**
 * Make sure obj can't be a reactive
 */
function nonReactive(obj) {
    if (!isPlainObject(obj)) {
        return obj;
    }
    // set the vue observable flag at obj
    def(obj, '__ob__', observe({}).__ob__);
    // mark as nonReactive
    def(obj, NonReactiveIdentifierKey, NonReactiveIdentifier);
    return obj;
}

function isUndef(v) {
    return v === undefined || v === null;
}
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean');
}
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}
/**
 * Set a property on an object. Adds the new property, triggers change
 * notification and intercept it's subsequent access if the property doesn't
 * already exist.
 */
function set(target, key, val) {
    var Vue = getCurrentVue();
    var _a = Vue.util, warn = _a.warn, defineReactive = _a.defineReactive;
    if (isUndef(target) || isPrimitive(target)) {
        warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }
    if (isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val;
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        warn('Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.');
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val);
    // IMPORTANT: define access control before trigger watcher
    defineAccessControl(target, key, val);
    ob.dep.notify();
    return val;
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(from, to) {
    if (!from)
        return to;
    var key;
    var toVal;
    var fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
            to[key] = fromVal;
        }
        else if (toVal !== fromVal &&
            (isPlainObject(toVal) && !isRef(toVal)) &&
            (isPlainObject(fromVal) && !isRef(fromVal))) {
            mergeData(fromVal, toVal);
        }
    }
    return to;
}
function install(Vue, _install) {
    if (currentVue && currentVue === Vue) {
        {
            assert(false, 'already installed. Vue.use(plugin) should be called only once');
        }
        return;
    }
    Vue.config.optionMergeStrategies.setup = function (parent, child) {
        return function mergedSetupFn(props, context) {
            return mergeData(typeof parent === 'function' ? parent(props, context) || {} : {}, typeof child === 'function' ? child(props, context) || {} : {});
        };
    };
    setCurrentVue(Vue);
    _install(Vue);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function set$1(vm, key, value) {
    var state = (vm.__secret_vfa_state__ = vm.__secret_vfa_state__ || {});
    state[key] = value;
}
function get(vm, key) {
    return (vm.__secret_vfa_state__ || {})[key];
}
var vmStateManager = {
    set: set$1,
    get: get,
};

function asVmProperty(vm, propName, propValue) {
    var props = vm.$options.props;
    if (!(propName in vm) && !(props && hasOwn(props, propName))) {
        proxy(vm, propName, {
            get: function () { return propValue.value; },
            set: function (val) {
                propValue.value = val;
            },
        });
        {
            // expose binding to Vue Devtool as a data property
            // delay this until state has been resolved to prevent repeated works
            vm.$nextTick(function () {
                proxy(vm._data, propName, {
                    get: function () { return propValue.value; },
                    set: function (val) {
                        propValue.value = val;
                    },
                });
            });
        }
    }
    else {
        if (props && hasOwn(props, propName)) {
            warn("The setup binding property \"" + propName + "\" is already declared as a prop.", vm);
        }
        else {
            warn("The setup binding property \"" + propName + "\" is already declared.", vm);
        }
    }
}
function updateTemplateRef(vm) {
    var rawBindings = vmStateManager.get(vm, 'rawBindings') || {};
    if (!rawBindings || !Object.keys(rawBindings).length)
        return;
    var refs = vm.$refs;
    var oldRefKeys = vmStateManager.get(vm, 'refs') || [];
    for (var index = 0; index < oldRefKeys.length; index++) {
        var key = oldRefKeys[index];
        var setupValue = rawBindings[key];
        if (!refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = null;
        }
    }
    var newKeys = Object.keys(refs);
    var validNewKeys = [];
    for (var index = 0; index < newKeys.length; index++) {
        var key = newKeys[index];
        var setupValue = rawBindings[key];
        if (refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = refs[key];
            validNewKeys.push(key);
        }
    }
    vmStateManager.set(vm, 'refs', validNewKeys);
}
function resolveScopedSlots(vm, slotsProxy) {
    var parentVode = vm.$options._parentVnode;
    if (!parentVode)
        return;
    var prevSlots = vmStateManager.get(vm, 'slots') || [];
    var curSlots = resolveSlots(parentVode.data.scopedSlots, vm.$slots);
    // remove staled slots
    for (var index = 0; index < prevSlots.length; index++) {
        var key = prevSlots[index];
        if (!curSlots[key]) {
            delete slotsProxy[key];
        }
    }
    // proxy fresh slots
    var slotNames = Object.keys(curSlots);
    for (var index = 0; index < slotNames.length; index++) {
        var key = slotNames[index];
        if (!slotsProxy[key]) {
            slotsProxy[key] = createSlotProxy(vm, key);
        }
    }
    vmStateManager.set(vm, 'slots', slotNames);
}
function activateCurrentInstance(vm, fn, onError) {
    var preVm = getCurrentVM();
    setCurrentVM(vm);
    try {
        return fn(vm);
    }
    catch (err) {
        if (onError) {
            onError(err);
        }
        else {
            throw err;
        }
    }
    finally {
        setCurrentVM(preVm);
    }
}
function mixin(Vue) {
    Vue.mixin({
        beforeCreate: functionApiInit,
        mounted: function () {
            updateTemplateRef(this);
        },
        updated: function () {
            updateTemplateRef(this);
        },
    });
    /**
     * Vuex init hook, injected into each instances init hooks list.
     */
    function functionApiInit() {
        var vm = this;
        var $options = vm.$options;
        var setup = $options.setup, render = $options.render;
        if (render) {
            // keep currentInstance accessible for createElement
            $options.render = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return activateCurrentInstance(vm, function () { return render.apply(_this, args); });
            };
        }
        if (!setup) {
            return;
        }
        if (typeof setup !== 'function') {
            {
                warn('The "setup" option should be a function that returns a object in component definitions.', vm);
            }
            return;
        }
        var data = $options.data;
        // wrapper the data option, so we can invoke setup before data get resolved
        $options.data = function wrappedData() {
            initSetup(vm, vm.$props);
            return typeof data === 'function'
                ? data.call(vm, vm)
                : data || {};
        };
    }
    function initSetup(vm, props) {
        if (props === void 0) { props = {}; }
        var setup = vm.$options.setup;
        var ctx = createSetupContext(vm);
        // resolve scopedSlots and slots to functions
        resolveScopedSlots(vm, ctx.slots);
        var binding;
        activateCurrentInstance(vm, function () {
            binding = setup(props, ctx);
        });
        if (!binding)
            return;
        if (isFunction(binding)) {
            // keep typescript happy with the binding type.
            var bindingFunc_1 = binding;
            // keep currentInstance accessible for createElement
            vm.$options.render = function () {
                resolveScopedSlots(vm, ctx.slots);
                return activateCurrentInstance(vm, function () { return bindingFunc_1(); });
            };
            return;
        }
        if (isPlainObject(binding)) {
            var bindingObj_1 = binding;
            vmStateManager.set(vm, 'rawBindings', binding);
            Object.keys(binding).forEach(function (name) {
                var bindingValue = bindingObj_1[name];
                // only make primitive value reactive
                if (!isRef(bindingValue)) {
                    if (isReactive(bindingValue)) {
                        bindingValue = ref(bindingValue);
                    }
                    else {
                        // a non-reactive should not don't get reactivity
                        bindingValue = ref(nonReactive(bindingValue));
                    }
                }
                asVmProperty(vm, name, bindingValue);
            });
            return;
        }
        {
            assert(false, "\"setup\" must return a \"Object\" or a \"Function\", got \"" + Object.prototype.toString
                .call(binding)
                .slice(8, -1) + "\"");
        }
    }
    function createSetupContext(vm) {
        var ctx = {
            slots: {},
        };
        var props = [
            'root',
            'parent',
            'refs',
            'attrs',
            'listeners',
            'isServer',
            'ssrContext',
        ];
        var methodReturnVoid = ['emit'];
        props.forEach(function (key) {
            var _a;
            var targetKey;
            var srcKey;
            if (Array.isArray(key)) {
                _a = __read(key, 2), targetKey = _a[0], srcKey = _a[1];
            }
            else {
                targetKey = srcKey = key;
            }
            srcKey = "$" + srcKey;
            proxy(ctx, targetKey, {
                get: function () { return vm[srcKey]; },
                set: function () {
                    warn("Cannot assign to '" + targetKey + "' because it is a read-only property", vm);
                },
            });
        });
        methodReturnVoid.forEach(function (key) {
            var srcKey = "$" + key;
            proxy(ctx, key, {
                get: function () {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var fn = vm[srcKey];
                        fn.apply(vm, args);
                    };
                },
            });
        });
        return ctx;
    }
}

var fallbackCreateElement;
var createElement = function createElement() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!currentVM) {
        warn('`createElement()` has been called outside of render function.');
        if (!fallbackCreateElement) {
            fallbackCreateElement = defineComponentInstance(getCurrentVue()).$createElement;
        }
        return fallbackCreateElement.apply(fallbackCreateElement, args);
    }
    return currentVM.$createElement.apply(currentVM, args);
};

// implementation, close to no-op
function defineComponent(options) {
    return options;
}
// implementation, deferring to defineComponent, but logging a warning in dev mode
function createComponent(options) {
    {
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.warn('`createComponent` has been renamed to `defineComponent`.');
    }
    return defineComponent(options);
}

var genName = function (name) { return "on" + (name[0].toUpperCase() + name.slice(1)); };
function createLifeCycle(lifeCyclehook) {
    return function (callback) {
        var vm = ensureCurrentVMInFn(genName(lifeCyclehook));
        injectHookOption(getCurrentVue(), vm, lifeCyclehook, callback);
    };
}
function injectHookOption(Vue, vm, hook, val) {
    var options = vm.$options;
    var mergeFn = Vue.config.optionMergeStrategies[hook];
    options[hook] = mergeFn(options[hook], val);
}
// export const onCreated = createLifeCycle('created');
var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
var onUnmounted = createLifeCycle('destroyed');
var onErrorCaptured = createLifeCycle('errorCaptured');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');

var fallbackVM;
function flushPreQueue() {
    flushQueue(this, WatcherPreFlushQueueKey);
}
function flushPostQueue() {
    flushQueue(this, WatcherPostFlushQueueKey);
}
function hasWatchEnv(vm) {
    return vm[WatcherPreFlushQueueKey] !== undefined;
}
function installWatchEnv(vm) {
    vm[WatcherPreFlushQueueKey] = [];
    vm[WatcherPostFlushQueueKey] = [];
    vm.$on('hook:beforeUpdate', flushPreQueue);
    vm.$on('hook:updated', flushPostQueue);
}
function getWatcherOption(options) {
    return __assign({
        lazy: false,
        deep: false,
        flush: 'post',
    }, options);
}
function getWatcherVM() {
    var vm = getCurrentVM();
    if (!vm) {
        if (!fallbackVM) {
            fallbackVM = defineComponentInstance(getCurrentVue());
        }
        vm = fallbackVM;
    }
    else if (!hasWatchEnv(vm)) {
        installWatchEnv(vm);
    }
    return vm;
}
function flushQueue(vm, key) {
    var queue = vm[key];
    for (var index = 0; index < queue.length; index++) {
        queue[index]();
    }
    queue.length = 0;
}
function queueFlushJob(vm, fn, mode) {
    // flush all when beforeUpdate and updated are not fired
    var fallbackFlush = function () {
        vm.$nextTick(function () {
            if (vm[WatcherPreFlushQueueKey].length) {
                flushQueue(vm, WatcherPreFlushQueueKey);
            }
            if (vm[WatcherPostFlushQueueKey].length) {
                flushQueue(vm, WatcherPostFlushQueueKey);
            }
        });
    };
    switch (mode) {
        case 'pre':
            fallbackFlush();
            vm[WatcherPreFlushQueueKey].push(fn);
            break;
        case 'post':
            fallbackFlush();
            vm[WatcherPostFlushQueueKey].push(fn);
            break;
        default:
            assert(false, "flush must be one of [\"post\", \"pre\", \"sync\"], but got " + mode);
            break;
    }
}
function createVueWatcher(vm, getter, callback, options) {
    var index = vm._watchers.length;
    // @ts-ignore: use undocumented options
    vm.$watch(getter, callback, {
        immediate: options.immediateInvokeCallback,
        deep: options.deep,
        lazy: options.noRun,
        sync: options.sync,
        before: options.before,
    });
    return vm._watchers[index];
}
function createWatcher(vm, source, cb, options) {
    var flushMode = options.flush;
    var isSync = flushMode === 'sync';
    var cleanup;
    var registerCleanup = function (fn) {
        cleanup = function () {
            try {
                fn();
            }
            catch (error) {
                logError(error, vm, 'onCleanup()');
            }
        };
    };
    // cleanup before running getter again
    var runCleanup = function () {
        if (cleanup) {
            cleanup();
            cleanup = null;
        }
    };
    var createScheduler = function (fn) {
        if (isSync || /* without a current active instance, ignore pre|post mode */ vm === fallbackVM) {
            return fn;
        }
        return (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return queueFlushJob(vm, function () {
                fn.apply(void 0, __spread(args));
            }, flushMode);
        });
    };
    // effect watch
    if (cb === null) {
        var getter_1 = function () { return source(registerCleanup); };
        var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
            noRun: true,
            deep: options.deep,
            sync: isSync,
            before: runCleanup,
        });
        // enable the watcher update
        watcher_1.lazy = false;
        var originGet = watcher_1.get.bind(watcher_1);
        if (isSync) {
            watcher_1.get();
        }
        else {
            vm.$nextTick(originGet);
        }
        watcher_1.get = createScheduler(originGet);
        return function () {
            watcher_1.teardown();
            runCleanup();
        };
    }
    var getter;
    if (Array.isArray(source)) {
        getter = function () { return source.map(function (s) { return (isRef(s) ? s.value : s()); }); };
    }
    else if (isRef(source)) {
        getter = function () { return source.value; };
    }
    else {
        getter = source;
    }
    var applyCb = function (n, o) {
        // cleanup before running cb again
        runCleanup();
        cb(n, o, registerCleanup);
    };
    var callback = createScheduler(applyCb);
    if (!options.lazy) {
        var originalCallbck_1 = callback;
        // `shiftCallback` is used to handle the first sync effect run.
        // The subsequent callbacks will redirect to `callback`.
        var shiftCallback_1 = function (n, o) {
            shiftCallback_1 = originalCallbck_1;
            applyCb(n, o);
        };
        callback = function (n, o) {
            shiftCallback_1(n, o);
        };
    }
    // @ts-ignore: use undocumented option "sync"
    var stop = vm.$watch(getter, callback, {
        immediate: !options.lazy,
        deep: options.deep,
        sync: isSync,
    });
    return function () {
        stop();
        runCleanup();
    };
}
function watchEffect(effect, options) {
    var opts = getWatcherOption(options);
    var vm = getWatcherVM();
    return createWatcher(vm, effect, null, opts);
}
function watch(source, cb, options) {
    var callback = null;
    if (typeof cb === 'function') {
        // source watch
        callback = cb;
    }
    else {
        // effect watch
        {
            warn("`watch(fn, options?)` signature has been moved to a separate API. " +
                "Use `watchEffect(fn, options?)` instead. `watch` now only " +
                "supports `watch(source, cb, options?) signature.");
        }
        options = cb;
        callback = null;
    }
    var opts = getWatcherOption(options);
    var vm = getWatcherVM();
    return createWatcher(vm, source, callback, opts);
}

// implement
function computed(options) {
    var vm = getCurrentVM();
    var get, set;
    if (typeof options === 'function') {
        get = options;
    }
    else {
        get = options.get;
        set = options.set;
    }
    var computedHost = defineComponentInstance(getCurrentVue(), {
        computed: {
            $$state: {
                get: get,
                set: set,
            },
        },
    });
    return createRef({
        get: function () { return computedHost.$$state; },
        set: function (v) {
            if (!set) {
                warn('Computed property was assigned to but it has no setter.', vm);
                return;
            }
            computedHost.$$state = v;
        },
    });
}

var NOT_FOUND = {};
function resolveInject(provideKey, vm) {
    var source = vm;
    while (source) {
        // @ts-ignore
        if (source._provided && hasOwn(source._provided, provideKey)) {
            //@ts-ignore
            return source._provided[provideKey];
        }
        source = source.$parent;
    }
    return NOT_FOUND;
}
function provide(key, value) {
    var vm = ensureCurrentVMInFn('provide');
    if (!vm._provided) {
        var provideCache_1 = {};
        Object.defineProperty(vm, '_provided', {
            get: function () { return provideCache_1; },
            set: function (v) { return Object.assign(provideCache_1, v); },
        });
    }
    vm._provided[key] = value;
}
function inject(key, defaultValue) {
    if (!key) {
        return defaultValue;
    }
    var vm = ensureCurrentVMInFn('inject');
    var val = resolveInject(key, vm);
    if (val !== NOT_FOUND) {
        return val;
    }
    else if (defaultValue !== undefined) {
        return defaultValue;
    }
    else {
        warn("Injection \"" + String(key) + "\" not found", vm);
    }
}

var _install = function (Vue) { return install(Vue, mixin); };
var plugin = {
    install: _install,
};
// Auto install if it is not done yet and `window` has `Vue`.
// To allow users to avoid auto-installation in some cases,
if (currentVue && typeof window !== 'undefined' && window.Vue) {
    _install(window.Vue);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);



/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/*!*************************************************!*\
  !*** ./node_modules/vue/dist/vue.common.dev.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.12';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-editor-js */ "./node_modules/vue-editor-js/dist/vue-editor-js.esm.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

var Signin = function Signin() {
  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./components/auth/Signin.vue */ "./resources/js/components/auth/Signin.vue"));
};

var Register = function Register() {
  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ./components/auth/Register.vue */ "./resources/js/components/auth/Register.vue"));
};

var SigninButton = function SigninButton() {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./components/auth/SigninButton.vue */ "./resources/js/components/auth/SigninButton.vue"));
};

var RegisterButton = function RegisterButton() {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./components/auth/RegisterButton.vue */ "./resources/js/components/auth/RegisterButton.vue"));
};

var NavigationAuthDropdown = function NavigationAuthDropdown() {
  return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./components/auth/NavigationAuthDropdown.vue */ "./resources/js/components/auth/NavigationAuthDropdown.vue"));
};

var NavigationAuth = function NavigationAuth() {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./components/auth/NavigationAuth.vue */ "./resources/js/components/auth/NavigationAuth.vue"));
};

var Admin = function Admin() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(24), __webpack_require__.e(1), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, /*! ./components/admin/Admin.vue */ "./resources/js/components/admin/Admin.vue"));
};

var Threads = function Threads() {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./components/threads/index/Threads.vue */ "./resources/js/components/threads/index/Threads.vue"));
};

var Blogs = function Blogs() {
  return Promise.all(/*! import() */[__webpack_require__.e(24), __webpack_require__.e(10), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, /*! ./components/blogs/index/Blogs.vue */ "./resources/js/components/blogs/index/Blogs.vue"));
};

var Blog = function Blog() {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./components/blogs/show/Blog.vue */ "./resources/js/components/blogs/show/Blog.vue"));
};

var ThreadForm = function ThreadForm() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./components/threads/create/ThreadForm.vue */ "./resources/js/components/threads/create/ThreadForm.vue"));
};

var ThreadEditForm = function ThreadEditForm() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./components/threads/edit/ThreadEditForm.vue */ "./resources/js/components/threads/edit/ThreadEditForm.vue"));
};

var Thread = function Thread() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./components/threads/show/Thread.vue */ "./resources/js/components/threads/show/Thread.vue"));
};

var Profile = function Profile() {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./components/profiles/show/Profile.vue */ "./resources/js/components/profiles/show/Profile.vue"));
};

var Puzzle = function Puzzle() {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./components/puzzles/show/Puzzle.vue */ "./resources/js/components/puzzles/show/Puzzle.vue"));
};

var Flash = function Flash() {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./components/shared/Flash.vue */ "./resources/js/components/shared/Flash.vue"));
};

var NavLink = function NavLink() {
  return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./components/shared/NavLink.vue */ "./resources/js/components/shared/NavLink.vue"));
};

var FooterField = function FooterField() {
  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./components/shared/FooterField.vue */ "./resources/js/components/shared/FooterField.vue"));
};

var Paginator = function Paginator() {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./components/shared/Paginator.vue */ "./resources/js/components/shared/Paginator.vue"));
};

var NotificationDropdown = function NotificationDropdown() {
  return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./components/shared/NotificationDropdown.vue */ "./resources/js/components/shared/NotificationDropdown.vue"));
};

var Recaptcha = function Recaptcha() {
  return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./components/shared/Recaptcha.vue */ "./resources/js/components/shared/Recaptcha.vue"));
};

var NavChannels = function NavChannels() {
  return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./components/shared/NavChannels.vue */ "./resources/js/components/shared/NavChannels.vue"));
}; // /* auth */
// import Signin from "./components/auth/Signin.vue";
// import Register from "./components/auth/Register.vue";
// import SigninButton from "./components/auth/SigninButton.vue";
// import RegisterButton from "./components/auth/RegisterButton.vue";
// import NavigationAuthDropdown from "./components/auth/NavigationAuthDropdown.vue";
// import NavigationAuth from "./components/auth/NavigationAuth.vue";
// /* endauth */
// /* admin */
// import Admin from "./components/admin/Admin.vue";
// /* endadmin */
// import Threads from "./components/threads/index/Threads.vue"; //threads.index
// import Blogs from "./components/blogs/index/Blogs.vue"; //blogs.index
// import Blog from "./components/blogs/show/Blog.vue"; //blogs.index
// import ThreadForm from "./components/threads/create/ThreadForm.vue"; //threads.create
// import ThreadEditForm from "./components/threads/edit/ThreadEditForm.vue"; //threads.update
// import Thread from "./components/threads/show/Thread.vue"; //threads.show
// import Profile from "./components/profiles/show/Profile.vue"; //profile.show
// import Puzzle from "./components/puzzles/show/Puzzle.vue"; //puzzles.show
// /* shared */
// import Flash from "./components/shared/Flash.vue";
// import NavLink from "./components/shared/NavLink.vue";
// import FooterField from "./components/shared/FooterField.vue";
// import Paginator from "./components/shared/Paginator.vue";
// import NotificationDropdown from "./components/shared/NotificationDropdown.vue";
// import Recaptcha from "./components/shared/Recaptcha.vue";
// import NavChannels from "./components/shared/NavChannels.vue";
// /* endshared */



window.Editor = Vue.use(vue_editor_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var app = new Vue({
  el: "#app",
  components: {
    Signin: Signin,
    Threads: Threads,
    Register: Register,
    SigninButton: SigninButton,
    RegisterButton: RegisterButton,
    ThreadForm: ThreadForm,
    NavigationAuthDropdown: NavigationAuthDropdown,
    NavigationAuth: NavigationAuth,
    Flash: Flash,
    Thread: Thread,
    Paginator: Paginator,
    NotificationDropdown: NotificationDropdown,
    Profile: Profile,
    Recaptcha: Recaptcha,
    ThreadEditForm: ThreadEditForm,
    Admin: Admin,
    FooterField: FooterField,
    NavLink: NavLink,
    Blogs: Blogs,
    Blog: Blog,
    NavChannels: NavChannels,
    Puzzle: Puzzle
  },
  data: {
    control: {
      login: false,
      register: false
    },
    expand: false,
    search: ""
  },
  //for showing and hide login and register page from anywhere in app
  methods: {
    toggle: function toggle(data) {
      this.control[data.field] = data.value;
    },
    searchRequest: function searchRequest() {
      window.location.href = "/search?search=" + this.search;
    }
  },
  created: function created() {
    var _this = this;

    window.events.$on("toggle", function (data) {
      _this.toggle(data);
    });
  }
});

/***/ }),

/***/ "./resources/js/authorizations.js":
/*!****************************************!*\
  !*** ./resources/js/authorizations.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var user = window.App.user;
module.exports = {
  updateReply: function updateReply(reply) {
    return reply.user_id === user.id;
  },
  updateThread: function updateThread(thread) {
    return thread.user_id === user.id;
  },
  updateProfile: function updateProfile(user) {
    return user.id === user.id;
  }
};

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");

var authorizations = __webpack_require__(/*! ./authorizations.js */ "./resources/js/authorizations.js");

Vue.prototype.$authorize = function () {
  if (!window.App.signedIn) {
    return false;
  }

  if (window.App.isAdmin) {
    return true;
  }

  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  if (typeof params[0] === "string") {
    return authorizations[params[0]](params[1]);
  }

  return params[0](window.App.user);
};

Vue.prototype.$signedIn = window.App.signedIn;
window.events = new Vue();

window.flash = function (message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
  window.events.$emit("flash", {
    message: message,
    type: type
  });
};

window.toggle = function () {
  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "login";
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  window.events.$emit("toggle", {
    field: field,
    value: value
  });
};

window.markAsBest = function ($field) {
  window.events.$emit("markAsBest", $field);
};

window.deleteMarkAsBest = function ($field) {
  window.events.$emit("deleteMarkAsBest", $field);
};

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./resources/js/app.js ./resources/css/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\forum\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\laragon\www\forum\resources\css\app.css */"./resources/css/app.css");


/***/ })

/******/ });