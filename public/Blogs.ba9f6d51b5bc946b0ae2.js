(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5tRO":function(t,e,n){"use strict";n.r(e);var s=n("omE/");for(var o in s)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(o);e.default=s.default},Dj7F:function(t,e,n){"use strict";n.r(e);var s=n("lEwt");for(var o in s)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(o)},"KHd+":function(t,e,n){"use strict";function s(t,e,n,s,o,l,a,r){var i,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),s&&(d.functional=!0),l&&(d._scopeId="data-v-"+l),a?(i=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=i):o&&(i=r?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),i)if(d.functional){d._injectStyles=i;var c=d.render;d.render=function(t,e){return i.call(e),c(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,i):[i]}return{exports:t,options:d}}n.r(e),n.d(e,"default",(function(){return s}))},lEwt:function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return s})),n.d(e,"staticRenderFns",(function(){return o}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gradient-to-b from-gray-100 to-gray-200"},[n("div",{attrs:{id:"last-published"}},[n("div",{staticClass:"lg:px-24 p-4 lg:p-8"},[n("div",{staticClass:"flex md:flex-row flex-col flex-wrap"},[t.blogs.length?n("div",{staticClass:"md:w-1/2 w-full flex flex-col pb-8 md:pr-8 transform hover:scale-105 transition duration-500 ease-in-out"},[n("img",{staticClass:"rounded-md cursor-pointer shadow-xl",attrs:{src:"/storage/"+t.blogs[0].image,loading:"lazy",alt:t.blogs[0].title,width:"1200",height:"675"},on:{click:function(e){return t.goto(t.blogs[0])}}}),t._v(" "),n("p",{staticClass:"-mt-6 text-white text-xs px-1 table rounded-md font-bold z-30 cursor-pointer",class:"bg-"+t.blogs[0].channel.color+"-600"},[t._v("\n            #"+t._s(t.blogs[0].channel.name)+"\n          ")]),t._v(" "),n("a",{on:{click:function(e){return t.goto(t.blogs[0])}}},[n("h4",{staticClass:"font-bold md:text-3xl text-2xl hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer pt-2 leading-tight",domProps:{textContent:t._s(t.blogs[0].title)}})]),t._v(" "),n("span",{staticClass:"text-gray-600 font-light text-lg"},[t._v(t._s(t.blogs[0].updated_at))])]):t._e(),t._v(" "),n("div",{staticClass:"md:w-1/2 w-full md:pl-8"},t._l(t.blogs,(function(e,s){return n("div",{key:e.id,staticClass:"flex flex-row flex-wrap",class:0!==s?"pb-8":""},[0!==s?n("div",{staticClass:"w-1/2 md:pt-0 flex flex-col transform hover:scale-105 transition duration-500 ease-in-out"},[n("img",{staticClass:"lg:rounded-md rounded-t-md cursor-pointer shadow-xl",attrs:{src:"/storage/"+e.image,alt:t.blogs.title,loading:"lazy",width:"1200",height:"675"},on:{click:function(n){return t.goto(e)}}}),t._v(" "),n("p",{staticClass:"lg:-mt-6 text-center mt-0 text-xs px-1 lg:rounded-md rounded-b-md table text-white font-bold z-30 w-full lg:w-auto cursor-pointer",class:"bg-"+e.channel.color+"-600"},[t._v("\n                #"+t._s(e.channel.name)+"\n              ")])]):t._e(),t._v(" "),0!==s?n("div",{staticClass:"w-1/2 px-2 md:pl-4 justify-center flex flex-col"},[n("a",{on:{click:function(n){return t.goto(e)}}},[n("h4",{staticClass:"font-bold md:text-2xl text-xl hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer leading-tight",domProps:{textContent:t._s(e.title)}})]),t._v(" "),n("span",{staticClass:"text-gray-600 font-light text-sm"},[t._v(t._s(e.updated_at))])]):t._e()])})),0)])])]),t._v(" "),n("div",{attrs:{id:"trendings"}},[n("div",{staticClass:"flex flex-col lg:flex-row"},[n("div",{staticClass:"lg:w-3/4 w-full p-4 lg:p-8 lg:pl-24"},[n("p",{staticClass:"text-3xl font-extrabold pb-8 text-teal-800"},[t._v("Popüler:")]),t._v(" "),n("div",{staticClass:"flex flex-row flex-wrap"},t._l(t.trendings,(function(e){return n("div",{key:e.id,staticClass:"lg:w-1/2 w-full flex flex-row pb-8"},[n("div",{staticClass:"w-1/2 md:pt-0 flex flex-col transform hover:scale-105 transition duration-500 ease-in-out"},[n("img",{staticClass:"lg:rounded-md rounded-t-md cursor-pointer shadow-xl",attrs:{src:"/storage/"+e.image,alt:e.title,loading:"lazy",width:"1200",height:"675"},on:{click:function(n){return t.goto(e)}}}),t._v(" "),n("p",{staticClass:"lg:-mt-6 text-center mt-0 text-xs px-1 lg:rounded-md rounded-b-md table text-white font-bold z-30 w-full lg:w-auto cursor-pointer",class:"bg-"+e.channel.color+"-600"},[t._v("\n                #"+t._s(e.channel.name)+"\n              ")])]),t._v(" "),n("div",{staticClass:"w-1/2 px-2 md:pl-4 justify-center flex flex-col"},[n("a",{on:{click:function(e){return t.goto(t.blog)}}},[n("h4",{staticClass:"font-bold md:text-xl text-lg hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer leading-tight",on:{click:function(n){return t.goto(e)}}},[t._v("\n                "+t._s(e.title)+"\n              ")])]),t._v(" "),n("span",{staticClass:"text-gray-600 font-light text-sm"},[t._v(t._s(e.updated_at))])])])})),0)]),t._v(" "),n("div",{staticClass:"lg:w-1/4 w-full p-4 lg:p-8 lg:pr-24 rounded-lg"},[n("p",{staticClass:"text-3xl font-extrabold pb-4 text-teal-800"},[t._v("\n          Sizden Gelenler\n        ")]),t._v(" "),n("div",{staticClass:"flex flex-col"},t._l(t.threads,(function(e){return n("a",{key:e.id,staticClass:"py-2 text-lg text-teal-700 hover:text-teal-800",attrs:{href:"/"+e.slug},domProps:{textContent:t._s(e.title)}})})),0)])])])])},o=[]},"omE/":function(t,e,n){"use strict";n.r(e),e.default={props:["dataBlogs","dataTrendings","dataThreads"],data:function(){return{blogs:this.dataBlogs,trendings:this.dataTrendings,threads:this.dataThreads}},methods:{goto:function(t){window.location.href="/blog/"+t.slug}}}},qkMW:function(t,e,n){"use strict";n.r(e);var s=n("Dj7F"),o=n("5tRO");for(var l in o)["default"].indexOf(l)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(l);var a=n("KHd+"),r=Object(a.default)(o.default,s.render,s.staticRenderFns,!1,null,null,null);e.default=r.exports}}]);