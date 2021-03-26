(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{10:function(t,e){t.exports={data:function(){return{colors:["gray","red","yellow","green","indigo","purple","teal","pink"]}},computed:{randomColor:function(){return this.colors[Math.floor(Math.random()*this.colors.length)]}}}},2:function(t,e,s){"use strict";function r(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,s,a;return e=t,(s=[{key:"record",value:function(t){this.errors=t}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}},{key:"has",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t?!!this.errors[t]:Object.keys(this.errors).length>0}}])&&r(e.prototype,s),a&&r(e,a),t}();function i(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function t(e){for(var s in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.originalData=e,e)this[s]=e[s];this.errors=new a}var e,s,r;return e=t,(s=[{key:"data",value:function(){var t={};for(var e in this.originalData)t[e]=this[e];return t}},{key:"submit",value:function(t,e){var s=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new Promise((function(a,i){axios[t](e,s.data(),r).then((function(t){s.onSuccess(t.data),a(t.data)})).catch((function(t){s.onFail(t.response.data),i(t.response.data)}))}))}},{key:"onSuccess",value:function(t){this.errors.clear()}},{key:"onFail",value:function(t){t.errors&&this.errors.record(t.errors)}},{key:"empty",value:function(){var t=this;Object.keys(this.originalData).forEach((function(e){t[e]=""}))}}])&&i(e.prototype,s),r&&i(e,r),t}();e.a=n},39:function(t,e,s){"use strict";s.r(e);var r=s(2),a={computed:{classes:function(){return this.isFavourited?"text-blue-600":""},endpoint:function(){return"/threads/"+this.reply.id+"/favourites"}},data:function(){return{favouritesCount:this.reply.favouritesCount,isFavourited:this.reply.isFavourited}},props:["reply"],methods:{toggle:function(){this.isFavourited?this.destroy():this.create()},create:function(){axios.post(this.endpoint),this.isFavourited=!0,this.favouritesCount++},destroy:function(){axios.delete(this.endpoint),this.isFavourited=!1,this.favouritesCount--}}},i=s(0),n={props:["isBest"],methods:{markAsBest:function(){this.$emit("markAsBest")}}},o={props:["reply","bestreply"],components:{Favourite:Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-row"},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.favouritesCount>0,expression:"favouritesCount > 0"}],staticClass:"text-blue-600 flex flex-row items-center mr-1 p-1",attrs:{title:"toplam beğeni"}},[s("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}})]),t._v("\n    "+t._s(t.favouritesCount)+"\n  ")]),t._v(" "),s("div",{staticClass:"text-gray-600 flex flex-row hover:bg-gray-100 items-center mr-1 p-1 cursor-pointer",class:t.classes,attrs:{title:"beğen"},on:{click:function(e){return t.toggle()}}},[s("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"}})])])])}),[],!1,null,null,null).exports,BestReplyButton:Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rounded-md flex flex-row items-center px-2 py-1 cursor-pointer",class:this.isBest?"bg-green-500 text-white":"text-gray-600 hover:bg-gray-100",on:{click:this.markAsBest}},[e("p",{staticClass:"-mr-4 w-24"},[this._v("En İyi Yanıt")]),this._v(" "),e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"}})])])}),[],!1,null,null,null).exports,Avatar:s(5).a},data:function(){return{body:this.reply.body,originalReply:"",displayForms:!1,usersOwnReply:!1,id:this.reply.id,locked:this.reply.thread.locked}},computed:{changeBest:function(){return!!this.bestreply&&this.reply.id==this.bestreply.id},avatar:function(){return 1==this.reply.owner.avatar_path.length}},created:function(){this.originalReply=this.reply,this.usersOwnReply=this.$authorize("updateReply",this.reply)},methods:{destroy:function(){axios.post("/replies/"+this.reply.id,{_method:"delete"}).then((function(t){flash("Yorumunuz Silindi")})).catch((function(t){console.log(t)})),this.$emit("deleted",this.id)},markAsBest:function(){this.changeBest?(axios.delete("/best-reply/"+this.reply.id).then(flash("İşaret kaldırıldı","error")),window.deleteMarkAsBest(this.reply)):(axios.post("/best-reply/"+this.reply.id).then(flash("En iyi yanıt seçildi")),window.markAsBest(this.reply))},updateRequest:function(){this.$emit("updateRequest",this.reply)},replyToAnotherReplyRequest:function(){this.$emit("replyAnotherReplyRequest",this.reply)}}},l=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex my-2 pl-2 bg-white rounded-lg mx-1",attrs:{id:"reply-"+t.id}},[s("avatar",{attrs:{item:t.reply}}),t._v(" "),s("div",{staticClass:"flex flex-1 mr-2 p-2"},[s("div",{staticClass:"flex flex-col w-full"},[s("div",{staticClass:"flex items-center mb-2"},[s("a",{attrs:{href:"/profiles/"+t.reply.owner.username}},[s("h4",{staticClass:"font-bold text-l cursor-pointer hover:underline"},[t._v("\n            "+t._s(t.reply.owner.username)+"\n          ")])]),t._v(" "),s("p",{staticClass:"text-xs text-gray-500 ml-2 flex-1"},[t._v("\n          "+t._s(t.reply.created_at)+"\n        ")])]),t._v(" "),s("div",{staticClass:"text-sm text-gray-700 mb-2"},[t.reply.mentioned_user?s("span",{staticClass:"flex flex-row float-left bg-gray-200 text-indigo-700 px-1 mr-1 rounded"},[s("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"}})]),t._v("\n          "+t._s(t.reply.mentioned_user.name)+"\n        ")]):t._e(),t._v(" "),s("p",{domProps:{innerHTML:t._s(t.body)}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:this.$signedIn,expression:"this.$signedIn"}],staticClass:"flex flex-row w-full items-center"},[s("favourite",{directives:[{name:"show",rawName:"v-show",value:!t.displayForms,expression:"!displayForms"}],attrs:{reply:t.reply}}),t._v(" "),t.displayForms||t.$parent.displayForm?t._e():s("button",{directives:[{name:"show",rawName:"v-show",value:t.usersOwnReply,expression:"usersOwnReply"}],staticClass:"text-red-400 hover:bg-gray-100 mr-1 p-1 flex flex-row",attrs:{title:"sil"},on:{click:function(e){return e.preventDefault(),t.destroy()}}},[s("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.$parent.displayForm&&!t.locked,expression:"!$parent.displayForm && !locked"}],staticClass:"text-indigo-600 flex flex-row hover:bg-gray-100 items-center mr-1 p-1 cursor-pointer",attrs:{title:"yanıtla"},on:{click:function(e){return e.preventDefault(),t.replyToAnotherReplyRequest(e)}}},[s("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]),t._v(" "),s("div",{staticClass:"flex flex-row w-full"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.$parent.displayForm&&t.usersOwnReply&&!t.locked,expression:"!$parent.displayForm && usersOwnReply && !locked"}],staticClass:"text-blue-600 flex flex-row hover:bg-gray-100 items-center mr-1 p-1 cursor-pointer",attrs:{title:"düzenle"},on:{click:function(e){return e.preventDefault(),t.updateRequest(e)}}},[s("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}}),t._v(" "),s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}})])])]),t._v(" "),t.displayForms?t._e():s("best-reply-button",{directives:[{name:"show",rawName:"v-show",value:this.$authorize("updateThread",t.reply.thread),expression:"this.$authorize('updateThread', reply.thread)"}],attrs:{isBest:t.changeBest},on:{markAsBest:t.markAsBest}})],1)])])],1)}),[],!1,null,null,null).exports,u={data:function(){return{items:[]}},methods:{remove:function(t){this.items.splice(t,1)},addReply:function(t){this.items.push(t)},updated:function(t){var e=this.items.findIndex((function(e){return t.id===e.id}));this.items.splice(e,1),this.items.push(t),console.log(this.items)}}},c=s(7),d=s(8),p=s(1),h=s.n(p);function f(t,e,s,r,a,i,n){try{var o=t[i](n),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(r,a)}function v(t){return function(){var e=this,s=arguments;return new Promise((function(r,a){var i=t.apply(e,s);function n(t){f(i,r,a,n,o,"next",t)}function o(t){f(i,r,a,n,o,"throw",t)}n(void 0)}))}}var m={components:{JsEditor:s(4).a},props:["dataThread","dataReply","dataExistingReplyOwner"],data:function(){return{form:new r.a({body:"",user:this.dataExistingReplyOwner?this.dataExistingReplyOwner.id:null}),editor:"",replyOwner:this.dataExistingReplyOwner?this.dataExistingReplyOwner:null}},methods:{reset:function(){this.$emit("reset")},onInitialized:function(t){this.editor=t},editorSave:function(){var t=this;return v(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.editor.save().then((function(e){t.form.body=e})).catch((function(t){console.log("Saving failed: ",t)}));case 2:case"end":return e.stop()}}),e)})))()},onSubmit:function(){var t=this;return v(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.editorSave();case 2:t.form.submit(t.dataReply?"patch":"post",t.dataReply?"/replies/"+t.dataReply.id:"/threads/"+t.dataThread.slug+"/replies",{headers:{"Content-Type":"application/json"}}).then((function(e){flash("Yorumunuz Kaydedildi"),t.dataReply?t.$emit("updated",e):t.$emit("created",e),t.$emit("reset")})).catch((function(t){flash(t.message,"error")}));case 3:case"end":return e.stop()}}),e)})))()}}},y=Object(i.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex sticky bottom-0 bg-white flex-col lg:w-3/5 w-screen lg:h-auto m-auto"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit()},keydown:function(e){return t.form.errors.clear(e.target.body)}}},[s("div",{staticClass:"flex flex-col mb-4 items-center"},[s("div",{staticClass:"flex flex-1 w-full flex-col"},[t.replyOwner?s("p",{staticClass:"select-none text-sm ml-2 text-gray-600"},[t._v("@"+t._s(t.replyOwner.username))]):t._e(),t._v(" "),s("js-editor",{attrs:{default:t.dataReply.editors_data},on:{onInitialized:t.onInitialized}}),t._v(" "),t.form.errors.has("body")?s("p",{staticClass:"text-red-500 text-xs italic",domProps:{textContent:t._s(t.form.errors.get("body"))}}):t._e()],1)]),t._v(" "),s("div",{staticClass:"flex items-center pb-4 pl-4"},[s("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold px-2 py-1 rounded focus:outline-none focus:shadow-outline mr-2",class:{"cursor-not-allowed opacity-50":t.form.errors.has()},attrs:{type:"submit"}},[t._v("\n        Kaydet\n      ")]),t._v(" "),s("a",{staticClass:"flex px-2 py-1 text-sm text-gray-700 rounded hover:bg-gray-200 cursor-pointer",on:{click:function(e){return e.preventDefault(),t.reset(e)}}},[t._v("Geri")])])])])}),[],!1,null,null,null).exports,x=s(6),g={components:{Reply:l,SigninButton:c.default,RegisterButton:d.default,ReplyForm:y,Paginator:x.default},mixins:[u],props:["thread","bestreply","replies"],data:function(){return{displayForm:!1,requestedReply:"",replyUser:""}},created:function(){this.dataSet=this.replies,this.items=this.replies.data},methods:{fetch:function(t){axios.get(this.url(t)).then(this.refresh)},url:function(t){if(!t){var e=location.search.match(/page=(\d+)/);t=e?e[1]:1}return"".concat(location.pathname,"/replies?page=")+t},refresh:function(t){var e=t.data;this.items=e.data,this.dataSet=e,window.scrollTo(0,0)},updateRequest:function(t){this.requestedReply=t,this.displayForm=!0},reset:function(){this.displayForm=!1,this.requestedReply="",this.replyUser=""},replyAnotherReplyRequest:function(t){this.displayForm=!0,this.replyUser=t.owner}}},w=Object(i.a)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.items,(function(e,r){return s("div",{key:e.updated_at},[s("reply",{attrs:{reply:e,bestreply:t.bestreply},on:{deleted:function(e){return t.remove(r)},updateRequest:t.updateRequest,replyAnotherReplyRequest:t.replyAnotherReplyRequest}})],1)})),t._v(" "),s("paginator",{attrs:{initialDataSet:t.dataSet},on:{pageChanged:t.fetch}}),t._v(" "),this.$signedIn&&!t.$parent.locked&&t.displayForm?s("reply-form",{attrs:{"data-thread":t.thread,"data-reply":t.requestedReply,"data-existing-reply-owner":t.replyUser},on:{created:t.addReply,updated:t.updated,reset:t.reset}}):t._e(),t._v(" "),s("div",{staticClass:"flex my-2 pl-2 h-32"},[s("div",{staticClass:"flex flex-1 mr-2"},[this.$signedIn&&!t.$parent.locked?s("div",{staticClass:"flex flex-col w-full h-full border-2 m-auto cursor-pointer",on:{click:function(e){t.displayForm=!0}}},[t._m(0)]):t._e(),t._v(" "),this.$signedIn?t._e():s("div",{staticClass:"flex flex-col items-start"},[s("div",{staticClass:"flex"},[s("signin-button",{staticClass:"mr-2"}),t._v(" "),s("register-button")],1),t._v(" "),s("p",{staticClass:"text-gray-600 text-sm"},[t._v("\n          Mesaj göndermek için giriş yapın ya da kayıt olun\n        ")])]),t._v(" "),t.$parent.locked?s("p",{staticClass:"text-teal-600 mx-auto mt-4"},[t._v("\n        Yönetici bu gönderiyi yoruma kapattı.\n      ")]):t._e()])])],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex w-full h-full flex-col items-center justify-center rounded-lg border-dashed m-auto"},[e("p",{staticClass:"text-gray-700 text-lg"},[this._v("Yanıtla")])])}],!1,null,null,null).exports,b={props:["reply"]},_=Object(i.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.reply?s("div",{staticClass:"flex mx-4 mb-4 pl-4 bg-teal-100 rounded-lg"},[s("div",{staticClass:"flex mr-2 p-2"},[t._v("1")]),t._v(" "),s("div",{staticClass:"flex flex-1 mr-2 p-2"},[s("div",{staticClass:"flex flex-col w-full"},[s("div",{staticClass:"flex items-center mb-2"},[t.reply.owner?s("div",{staticClass:"flex items-center"},[s("a",{attrs:{href:"/profiles/"+t.reply.owner.username}},[s("h4",{staticClass:"font-bold text-l cursor-pointer hover:underline"},[t._v("\n                "+t._s(t.reply.owner.username)+"\n              ")])])]):t._e(),t._v(" "),s("p",{staticClass:"text-xs text-gray-500 ml-2 flex-1",domProps:{textContent:t._s(t.reply.created_at)}}),t._v(" "),s("div",{staticClass:"bg-green-600 text-white px-2 py-1 rounded-lg flex flex-row text-sm"},[s("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})]),t._v(" "),s("p",[t._v("En İyi Cevap")])])]),t._v(" "),s("p",{staticClass:"text-sm text-gray-700 mb-2",domProps:{innerHTML:t._s(t.reply.body)}})])])]):t._e()])}),[],!1,null,null,null).exports,C={props:["active"],data:function(){return{isActive:this.active}},computed:{classes:function(){return this.isActive?"bg-yellow-200 text-yellow-600":"bg-white text-gray-800"}},methods:{toggleSubscribe:function(){this.isActive?(axios.delete(location.pathname+"/subscribe").then(flash("Takipten Çıktınız")),this.isActive=!1):(axios.post(location.pathname+"/subscribe").then(flash("Takiptesiniz...")),this.isActive=!0)}}},k={props:["dataThread"],data:function(){return{thread:this.dataThread,repliesCount:this.dataThread.replies_count,bestReply:this.dataThread.best_reply,locked:this.dataThread.locked,isAdmin:window.App.isAdmin}},mounted:function(){var t=this;window.events.$on("markAsBest",(function(e){t.bestReply=e})),window.events.$on("deleteMarkAsBest",(function(e){t.bestReply=""}))},methods:{toggleLock:function(){axios[this.locked?"delete":"post"]("/thread-lock/"+this.dataThread.slug),this.locked=!this.locked},updated:function(t){this.thread.body=t.form.body,this.thread.title=t.form.title,this.thread.channel_id=t.form.channel_id,this.thread.channel=t.channel}},components:{Replies:w,SubscribeButton:Object(i.a)(C,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"my-2 flex flex-row items-center font-semibold  py-1 px-2 lg:py-2 lg:px-4 border border-gray-400 rounded shadow lg:mt-0 lg:justify-center md:hover:bg-gray-100 mr-1 text-sm",class:t.classes,attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleSubscribe()}}},[s("svg",{staticClass:"mr-1 w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}})]),t._v("\n  Takip Et\n")])}),[],!1,null,"1d2979d7",null).exports,BestReply:_}},R=Object(i.a)(k,void 0,void 0,!1,null,null,null);e.default=R.exports},4:function(t,e,s){"use strict";var r=s(15),a=s(16),i=s.n(a),n=s(17),o=s.n(n),l=s(18),u=s.n(l),c=s(19),d=s.n(c),p=s(20),h=s.n(p),f=s(21),v=s.n(f),m=s(35),y={props:["default","image"],components:{Editor:r.a},data:function(){return{file:"",ids:[],config:{autofocus:!0,tools:{header:{class:i.a,config:{placeholder:"Enter a header",levels:[2,3,4],defaultLevel:3}},list:{class:o.a,inlineToolbar:!0},quote:{class:d.a,inlineToolbar:!0,shortcut:"CMD+SHIFT+O",config:{quotePlaceholder:"Enter a quote",captionPlaceholder:"Quote's author"}},delimiter:h.a,paragraph:{class:u.a},image:!!this.image&&{class:v.a,config:{uploader:{uploadByFile:function(t){var e={url:"/admin/upload/images",data:{file:t},headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},type:m.contentType.FORM};return m.post(e).then((function(t){return{success:t.body.success,file:{url:t.body.path}}}))}}}}},onChange:function(t){},data:{time:this.default?this.default.time:"",blocks:this.default?this.default.blocks:"",version:this.default?this.default.version:""}}}},methods:{onInitialized:function(t){this.$emit("onInitialized",t)}}},x=s(0),g=Object(x.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("editor",{ref:"editor",attrs:{config:this.config,initialized:this.onInitialized}})],1)}),[],!1,null,null,null);e.a=g.exports},5:function(t,e,s){"use strict";var r=s(10),a={props:["item"],mixins:[s.n(r).a],computed:{avatar:function(){return 1==this.item.owner.avatar_path.length}}},i=s(0),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex overflow-hidden flex-col"},[t.avatar?t._e():s("img",{staticClass:"inline-block h-10 w-10 rounded-full text-white shadow-solid",attrs:{src:t.item.owner.avatar_path,alt:t.item.owner.name}}),t._v(" "),t.avatar?s("div",{staticClass:"w-10 h-10 rounded-full flex flex-col items-center justify-center",class:"bg-"+t.randomColor+"-600"},[s("p",{staticClass:"text-white font-semibold text-xl"},[t._v("\n      "+t._s(t.item.owner.avatar_path)+"\n    ")])]):t._e()])}),[],!1,null,null,null);e.a=n.exports},6:function(t,e,s){"use strict";s.r(e);var r={props:["initialDataSet"],watch:{initialDataSet:function(){this.page=this.initialDataSet.current_page,this.prevUrl=this.initialDataSet.prev_page_url,this.nextUrl=this.initialDataSet.next_page_url,this.total=this.initialDataSet.total,this.from=this.initialDataSet.from,this.to=this.initialDataSet.to},page:function(){this.broadcast(),this.updateUrl()}},data:function(){return{page:this.initialDataSet.current_page,prevUrl:this.initialDataSet.prev_page_url,nextUrl:this.initialDataSet.next_page_url,total:this.initialDataSet.total,from:this.initialDataSet.from,to:this.initialDataSet.to}},computed:{shouldPaginate:function(){return!!this.prevUrl||!!this.nextUrl}},methods:{broadcast:function(){return this.$emit("pageChanged",this.page)},updateUrl:function(){history.pushState(null,null,"?page="+this.page)}}},a=s(0),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldPaginate,expression:"shouldPaginate"}],staticClass:"px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mb-4"},[s("div",{staticClass:"flex-1 flex flex-row-reverse items-center justify-between"},[s("div",[s("p",{staticClass:"text-sm leading-5 text-gray-700"},[s("span",{staticClass:"font-medium",domProps:{textContent:t._s(t.total)}}),t._v("\n        yanıttan\n        "),s("span",{staticClass:"font-medium",domProps:{textContent:t._s(t.from)}}),t._v("\n        -\n        "),s("span",{staticClass:"font-medium",domProps:{textContent:t._s(t.to)}}),t._v("\n        arası gürüntüleniyor.\n      ")])]),t._v(" "),s("div",[s("nav",{staticClass:"relative z-0 inline-flex shadow-sm"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.prevUrl,expression:"prevUrl"}],staticClass:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){e.preventDefault(),t.page--}}},[s("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]),t._v(" "),s("p",{staticClass:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700",domProps:{textContent:t._s(t.page)}}),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:t.nextUrl,expression:"nextUrl"}],staticClass:"-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){e.preventDefault(),t.page++}}},[s("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])])])])])}),[],!1,null,null,null);e.default=i.exports},7:function(t,e,s){"use strict";s.r(e);var r={methods:{showing:function(){window.toggle("login",!0)}}},a=s(0),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"mt-4 lg:mt-0 mr-4 text-teal-600 hover:text-teal-700 font-semibold text-lg",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showing()}}},[t._v("Giriş")])}),[],!1,null,null,null);e.default=i.exports},8:function(t,e,s){"use strict";s.r(e);var r={methods:{showing:function(){window.toggle("register",!0)}}},a=s(0),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"mt-4 lg:mt-0 mr-4 text-teal-600 hover:text-teal-700 font-semibold text-lg",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showing()}}},[t._v("Kayıt")])}),[],!1,null,null,null);e.default=i.exports}}]);