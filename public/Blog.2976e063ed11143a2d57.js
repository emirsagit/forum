(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+owj":function(t,e,n){"use strict";n.r(e);var r=n("iI9g"),s=n.n(r);e.default={props:["item"],mixins:[s.a],computed:{avatar:function(){return 1==this.item.owner.avatar_path.length}}}},"2j/j":function(t,e,n){"use strict";n.r(e);var r=n("+owj");for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e.default=r.default},"5VHN":function(t,e,n){"use strict";n.r(e);var r=n("MuGR");for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s)},"91kh":function(t,e,n){"use strict";n.r(e);var r=n("jh4G"),s=n("u/r9");for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var l=n("KHd+"),i=Object(l.default)(s.default,r.render,r.staticRenderFns,!1,null,null,null);e.default=i.exports},FH1J:function(t,e,n){"use strict";n.r(e);var r=n("zp5P");for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e.default=r.default},I23O:function(t,e,n){"use strict";n.r(e);var r=n("i9yM"),s=n("FH1J");for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var l=n("KHd+"),i=Object(l.default)(s.default,r.render,r.staticRenderFns,!1,null,null,null);e.default=i.exports},"KHd+":function(t,e,n){"use strict";function r(t,e,n,r,s,a,l,i){var o,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),l?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},u._ssrRegister=o):s&&(o=i?function(){s.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:s),o)if(u.functional){u._injectStyles=o;var c=u.render;u.render=function(t,e){return o.call(e),c(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,o):[o]}return{exports:t,options:u}}n.r(e),n.d(e,"default",(function(){return r}))},MuGR:function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return s}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex overflow-hidden flex-col"},[t.avatar?t._e():n("img",{staticClass:"inline-block h-10 w-10 rounded-full text-white shadow-solid",attrs:{src:t.item.owner.avatar_path,alt:t.item.owner.name}}),t._v(" "),t.avatar?n("div",{staticClass:"w-10 h-10 rounded-full flex flex-col items-center justify-center",class:"bg-"+t.randomColor+"-600"},[n("p",{staticClass:"text-white font-semibold text-xl"},[t._v("\n      "+t._s(t.item.owner.avatar_path)+"\n    ")])]):t._e()])},s=[]},cHsS:function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return s}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("p",{staticClass:"ml-2 text-lg font-semibold"},[t._v("\n    "+t._s(t.item.owner.name)+" tarafından yazıldı.\n  ")]),t._v(" "),n("p",{staticClass:"ml-2 text-md"},[t._v(t._s(t.item.updated_at)+" güncellendi")]),t._v(" "),n("hr",{staticClass:"bg-teal-700 h-2 shadow-lg rounded-lg mt-2 ml-2 hidden lg:flex"})])},s=[]},"h6+k":function(t,e,n){"use strict";n.r(e);var r=n("j8ri"),s=n("I23O");e.default={props:["dataBlog","dataBlogs"],data:function(){return{blog:this.dataBlog,blogs:this.dataBlogs}},components:{Avatar:r.default,Writer:s.default}}},i9yM:function(t,e,n){"use strict";n.r(e);var r=n("cHsS");for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s)},iI9g:function(t,e){t.exports={data:function(){return{colors:["gray","red","yellow","green","indigo","purple","teal","pink"]}},computed:{randomColor:function(){return this.colors[Math.floor(Math.random()*this.colors.length)]}}}},j8ri:function(t,e,n){"use strict";n.r(e);var r=n("5VHN"),s=n("2j/j");for(var a in s)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(a);var l=n("KHd+"),i=Object(l.default)(s.default,r.render,r.staticRenderFns,!1,null,null,null);e.default=i.exports},jh4G:function(t,e,n){"use strict";n.r(e);var r=n("lLuJ");for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s)},lLuJ:function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return s}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-100 text-gray-700",attrs:{id:"last-published"}},[n("div",{staticClass:"lg:px-24 p-8 flex lg:flex-row flex-col"},[n("div",{staticClass:"lg:w-3/5 w-full"},[n("div",{staticClass:"flex flex-row justify-between pb-4"},[n("a",{staticClass:"text-sm font-bold text-white table px-1 rounded-lg cursor-pointer",class:"bg-"+t.blog.channel.color+"-600",attrs:{href:"/blogs/channels/"+t.blog.channel.slug}},[t._v("\n          #"+t._s(t.blog.channel.name)+"\n        ")]),t._v(" "),n("span",{staticClass:"ml-1 text-gray-500 text-xs"},[t._v(t._s(parseInt(t.blog.visits_count)+1)+" Görüntüleme")])]),t._v(" "),n("h1",{staticClass:"text-2xl lg:text-3xl text-teal-700 font-bold pb-4 leading-tight"},[t._v("\n        "+t._s(t.blog.title)+"\n      ")]),t._v(" "),t.blog.summary?n("p",{staticClass:"text-xl pb-8 text-black"},[t._v("\n        "+t._s(t.blog.summary)+"\n      ")]):t._e(),t._v(" "),n("img",{staticClass:"object-cover w-full mb-4 shadow-xl",attrs:{src:"/storage/"+t.blog.image,alt:t.blog.title,width:"1200",height:"675"}}),t._v(" "),n("div",{staticClass:"pb-8 text-lg leading-loose text-justify p-link",domProps:{innerHTML:t._s(t.blog.body)}})]),t._v(" "),n("div",{staticClass:"lg:w-2/5 w-full flex flex-col lg:pl-12"},[n("div",{staticClass:"flex flex-row pb-8 items-center justify-center lg:justify-start"},[n("avatar",{attrs:{item:t.blog}}),t._v(" "),n("writer",{attrs:{item:t.blog}})],1),t._v(" "),n("div",{staticClass:"flex flex-col pb-8 sticky top-0"},[n("p",{staticClass:"text-teal-700 mb-4 text-2xl font-semibold"},[t._v("\n          "+t._s(t.blog.channel.name)+" ile ilgili diğer yazılar\n        ")]),t._v(" "),t._l(t.blogs,(function(e){return n("div",{key:e.id,staticClass:"flex-row flex items-center mb-4"},[n("span",{staticClass:"rounded-full mr-2 table",class:"bg-"+e.channel.color+"-600"},[n("svg",{staticClass:"w-4 h-4"},[n("circle",{attrs:{cx:"50",cy:"50",r:"40",fill:"currentColor"}})])]),t._v(" "),n("a",{staticClass:"text-teal-600 text-lg hover:text-teal-800",attrs:{href:"/blogs/"+e.channel.slug+"/"+e.slug}},[t._v("\n            "+t._s(e.title)+"\n          ")])])}))],2)])])])},s=[]},"u/r9":function(t,e,n){"use strict";n.r(e);var r=n("h6+k");for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e.default=r.default},zp5P:function(t,e,n){"use strict";n.r(e),e.default={props:["item"]}}}]);