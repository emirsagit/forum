(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"10s7":function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"mt-4 lg:mt-0 mr-4 text-teal-600 hover:text-teal-700 font-semibold text-lg ease-in-out duration-500 transform flex flex-row items-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showing()}}},[n("svg",{staticClass:"hidden md:flex",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"23",height:"23"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}})]),t._v("\n  Giriş")])},a=[]},"20NY":function(t,e,n){"use strict";n.r(e),e.default={methods:{showing:function(){window.toggle("login",!0)}}}},"4rsk":function(t,e,n){"use strict";n.r(e);var r=n("nUHq");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a)},"7LQj":function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a}));var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("editor",{ref:"editor",attrs:{config:this.config,initialized:this.onInitialized}})],1)},a=[]},"8lN7":function(t,e,n){"use strict";n.r(e);var r=n("7LQj");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a)},GyJL:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,n,a;return e=t,(n=[{key:"record",value:function(t){this.errors=t}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}},{key:"has",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t?!!this.errors[t]:Object.keys(this.errors).length>0}}])&&r(e.prototype,n),a&&r(e,a),t}();e.default=a},H40n:function(t,e,n){"use strict";n.r(e);var r=n("4rsk"),a=n("YhCg");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o=n("KHd+"),s=Object(o.default)(a.default,r.render,r.staticRenderFns,!1,null,null,null);e.default=s.exports},IFND:function(t,e,n){"use strict";n.r(e);var r=n("GyJL");function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){for(var n in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.originalData=e,e)this[n]=e[n];this.errors=new r.default}var e,n,i;return e=t,(n=[{key:"data",value:function(){var t={};for(var e in this.originalData)t[e]=this[e];return t}},{key:"submit",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new Promise((function(a,i){axios[t](e,n.data(),r).then((function(t){n.onSuccess(t.data),a(t.data)})).catch((function(t){n.onFail(t.response.data),i(t.response.data)}))}))}},{key:"onSuccess",value:function(t){this.errors.clear()}},{key:"onFail",value:function(t){t.errors&&this.errors.record(t.errors)}},{key:"empty",value:function(){var t=this;Object.keys(this.originalData).forEach((function(e){t[e]=""}))}}])&&a(e.prototype,n),i&&a(e,i),t}();e.default=i},JS8d:function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"mt-4 lg:mt-0 mr-4 text-teal-600 hover:text-teal-700 font-semibold text-lg ease-in-out duration-500 transform flex flex-row items-center",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showing()}}},[n("svg",{staticClass:"hidden md:flex",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"23",height:"23"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"}})]),t._v("\n  Kayıt")])},a=[]},QQve:function(t,e,n){"use strict";n.r(e);var r=n("10s7");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a)},XkOF:function(t,e,n){"use strict";n.r(e),e.default={methods:{showing:function(){window.toggle("register",!0)}}}},Y8wd:function(t,e,n){"use strict";n.r(e);var r=n("hxHm");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a)},YhCg:function(t,e,n){"use strict";n.r(e);var r=n("y66P");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=r.default},bWTS:function(t,e,n){"use strict";n.r(e);var r=n("Y8wd"),a=n("lccT");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o=n("KHd+"),s=Object(o.default)(a.default,r.render,r.staticRenderFns,!1,null,null,null);e.default=s.exports},cyrE:function(t,e,n){"use strict";n.r(e),e.default={props:["sitekey"],methods:{loaded:function(){var t=this;window.grecaptcha.render(this.$refs.grecaptcha,{sitekey:this.sitekey,callback:function(e){t.$emit("input",e)}})}},mounted:function(){window.ReCaptchaLoaded=this.loaded;var t=document.createElement("script");t.src="https://www.google.com/recaptcha/api.js?onload=ReCaptchaLoaded&render=explicit",document.head.appendChild(t)}}},hxHm:function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"grecaptcha"})},a=[]},"kbf/":function(t,e,n){"use strict";n.r(e);var r=n("JS8d");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a)},klDz:function(t,e,n){"use strict";n.r(e);var r=n("QQve"),a=n("nlhb");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o=n("KHd+"),s=Object(o.default)(a.default,r.render,r.staticRenderFns,!1,null,null,null);e.default=s.exports},lccT:function(t,e,n){"use strict";n.r(e);var r=n("cyrE");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=r.default},m9JE:function(t,e,n){"use strict";n.r(e);var r=n("XkOF");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=r.default},"nT/s":function(t,e,n){"use strict";n.r(e);var r=n("8lN7"),a=n("w/eO");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o=n("KHd+"),s=Object(o.default)(a.default,r.render,r.staticRenderFns,!1,null,null,null);e.default=s.exports},nUHq:function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:w-1/2 flex flex-col sm:m-auto min-h-screen lg:pb-4"},[n("div",{staticClass:"flex justify-center lg:mt-4 bg-white lg:p-2 rounded-lg shadow-lg"},[n("form",{staticClass:"bg-white w-full rounded lg:p-4 p-2 mb-4",on:{submit:function(e){return e.preventDefault(),t.onSubmit()},keydown:function(e){return t.form.errors.clear(e.target.name)}}},[n("div",{staticClass:"mb-2"},[t.$signedIn?t._e():n("div",{staticClass:"flex lg:flex-row flex-col items-center justify-between"},[n("p",{staticClass:"text-red-600"},[t._v("\n            Sohbet ve paylaşım yapmak için lütfen giriş yapın ya da kayıt olun\n          ")]),t._v(" "),n("div",{staticClass:"flex flex-row"},[n("signin-button"),t._v(" "),n("register-button")],1)]),t._v(" "),n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"channel_id"}},[t._v("\n          Konu\n        ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.form.channel_id,expression:"form.channel_id"}],staticClass:"select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline leading-tight",class:{"border-red-500":t.form.errors.has("channel_id")},attrs:{id:"grid-state",name:"channel_id"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"channel_id",e.target.multiple?n:n[0])},function(e){return t.form.errors.clear(e.target.name)}]}},[n("option",{attrs:{value:"",selected:"true"}},[t._v("Seçiniz")]),t._v(" "),t._l(t.channels,(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2),t._v(" "),t.form.errors.has("channel_id")?n("p",{staticClass:"text-red-500 text-xs italic",domProps:{textContent:t._s(t.form.errors.get("channel_id"))}}):t._e()]),t._v(" "),n("div",{staticClass:"mb-2"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"title"}},[t._v("\n          Başlık\n        ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",class:{"border-red-500":t.form.errors.has("title")},attrs:{id:"title",type:"text",name:"title",placeholder:"Başlık"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),t._v(" "),t.form.errors.has("title")?n("p",{staticClass:"text-red-500 text-xs italic",domProps:{textContent:t._s(t.form.errors.get("title"))}}):t._e()]),t._v(" "),n("div",{staticClass:"mb-2"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"body"}},[t._v("\n          İçerik\n        ")]),t._v(" "),n("js-editor",{on:{onInitialized:t.onInitialized}}),t._v(" "),t.form.errors.has("body")?n("p",{staticClass:"text-red-500 text-xs italic",domProps:{textContent:t._s(t.form.errors.get("body"))}}):t._e()],1),t._v(" "),n("div",{staticClass:"h-16 mt-2"},[n("recaptcha",{attrs:{sitekey:t.recapthcaSiteKey},on:{input:t.change}})],1),t._v(" "),t.form.errors.has("recaptcha")?n("p",{staticClass:"text-red-500 text-xs italic",domProps:{textContent:t._s(t.form.errors.get("recaptcha"))}}):t._e(),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"flex items-center"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline",class:{"cursor-not-allowed opacity-50":t.form.errors.has()},attrs:{type:"submit"}},[t._v("\n          Gönder\n        ")]),t._v(" "),n("a",{staticClass:"bg-gray-100 hover:bg-gray-200 font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline ml-2",attrs:{href:"/"}},[t._v("\n          Geri\n        ")])])])])])},a=[]},nlhb:function(t,e,n){"use strict";n.r(e);var r=n("20NY");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=r.default},nsjP:function(t,e,n){"use strict";n.r(e);var r=n("FQMh"),a=n("Ps3v"),i=n.n(a),o=n("ccAN"),s=n.n(o),u=n("fF6c"),c=n.n(u),l=n("4ez4"),f=n.n(l),d=n("s5Ge"),h=n.n(d),v=n("6xZU"),m=n.n(v),p=n("xX0v");e.default={props:["default","image"],components:{Editor:r.Editor},data:function(){return{file:"",ids:[],config:{autofocus:!0,tools:{header:{class:i.a,config:{placeholder:"Enter a header",levels:[2,3,4],defaultLevel:3}},list:{class:s.a,inlineToolbar:!0},quote:{class:f.a,inlineToolbar:!0,shortcut:"CMD+SHIFT+O",config:{quotePlaceholder:"Enter a quote",captionPlaceholder:"Quote's author"}},delimiter:h.a,paragraph:{class:c.a},image:!!this.image&&{class:m.a,config:{uploader:{uploadByFile:function(t){var e={url:"/admin/upload/images",data:{file:t},headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},type:p.contentType.FORM};return p.post(e).then((function(t){return{success:t.body.success,file:{url:t.body.path}}}))}}}}},onChange:function(t){},data:{time:this.default?this.default.time:"",blocks:this.default?this.default.blocks:"",version:this.default?this.default.version:""}}}},methods:{onInitialized:function(t){this.$emit("onInitialized",t)}}}},uxco:function(t,e,n){"use strict";n.r(e);var r=n("kbf/"),a=n("m9JE");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o=n("KHd+"),s=Object(o.default)(a.default,r.render,r.staticRenderFns,!1,null,null,null);e.default=s.exports},"w/eO":function(t,e,n){"use strict";n.r(e);var r=n("nsjP");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=r.default},y66P:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),i=n("IFND"),o=n("bWTS"),s=n("nT/s"),u=n("klDz"),c=n("uxco");function l(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,a)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){l(i,r,a,o,s,"next",t)}function s(t){l(i,r,a,o,s,"throw",t)}o(void 0)}))}}e.default={props:["recapthcaSiteKey"],components:{Recaptcha:o.default,JsEditor:s.default,RegisterButton:c.default,SigninButton:u.default},data:function(){return{form:new i.default({title:"",body:"",channel_id:"",recaptcha:""}),channels:{},editor:""}},methods:{onInitialized:function(t){this.editor=t},editorSave:function(){var t=this;return f(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.editor.save().then((function(e){t.form.body=e})).catch((function(t){console.log("Saving failed: ",t)}));case 2:case"end":return e.stop()}}),e)})))()},onSubmit:function(){var t=this;return f(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.editorSave();case 2:t.form.submit("post","/threads",{headers:{"Content-Type":"application/json"}}).then((function(e){console.log("burd"),t.submitted()})).catch((function(t){grecaptcha.reset(),flash(t.errors?t.errors.recaptcha[0]:t.message,"error")}));case 3:case"end":return e.stop()}}),e)})))()},change:function(t){this.form.recaptcha=t},submitted:function(){window.location.href="/",flash("Konu kaydedildi.")}},mounted:function(){var t=this;axios.get("/channels").then((function(e){t.channels=e.data})).catch((function(t){console.log(t)})),this.$signedIn||window.toggle("register",!0)}}}}]);