(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{0:function(t,n,e){"use strict";function r(t,n,e,r,i,o,s,a){var c,u="function"==typeof t?t.options:t;if(n&&(u.render=n,u.staticRenderFns=e,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(t,n){return c.call(n),d(t,n)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}e.r(n),e.d(n,"default",(function(){return r}))},164:function(t,n,e){"use strict";e.r(n);var r=e(224);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i)},224:function(t,n,e){"use strict";e.r(n),e.d(n,"render",(function(){return r})),e.d(n,"staticRenderFns",(function(){return i}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.notifications.length?e("div",{staticClass:"relative inline-block text-left"},[e("div",{staticClass:"block mt-4 lg:inline-block lg:mt-0 mr-4 text-red-600 hover:text-red-800 cursor-pointer",on:{click:function(n){t.expand=!t.expand}}},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],staticClass:"lg:origin-top-right absolute lg:right-0 lg:mt-2 rounded-md shadow-lg z-30 lg:w-64"},[e("div",{staticClass:"rounded-md bg-white shadow-xs"},[e("div",{staticClass:"py-1 cursor-pointer",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"}},t._l(t.notifications,(function(n){return e("a",{key:n.id,staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer",attrs:{href:n.data.link,role:"menuitem"},domProps:{textContent:t._s(n.data.message)},on:{click:function(e){return t.markAsRead(n.id)}}},[t._v(" "+t._s(n.data.link))])})),0)])])]):t._e()},i=[]},287:function(t,n,e){"use strict";e.r(n);var r=e(164),i=e(96);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);var s=e(0),a=Object(s.default)(i.default,r.render,r.staticRenderFns,!1,null,null,null);n.default=a.exports},96:function(t,n,e){"use strict";e.r(n);var r=e(97);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n.default=r.default},97:function(t,n,e){"use strict";e.r(n),n.default={data:function(){return{notifications:!1,expand:!1}},mounted:function(){var t=this;axios.get("/profiles/"+window.App.user.name+"/notifications").then((function(n){var e=n.data;return t.notifications=e}))},methods:{markAsRead:function(t){var n=this;axios.delete("/profiles/"+window.App.user.username+"/notifications/"+t).then((function(t){n.expand=!1})).catch((function(t){console.log(t.response)}))}}}}}]);