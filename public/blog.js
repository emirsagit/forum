(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/show/Blog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blogs/show/Blog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_Avatar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/Avatar.vue */ "./resources/js/components/shared/Avatar.vue");
/* harmony import */ var _shared_Writer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Writer.vue */ "./resources/js/components/shared/Writer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["dataBlog", "dataBlogs"],
  data: function data() {
    return {
      blog: this.dataBlog,
      blogs: this.dataBlogs
    };
  },
  components: {
    Avatar: _shared_Avatar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Writer: _shared_Writer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Avatar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/Avatar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/colors.js */ "./resources/js/mixins/colors.js");
/* harmony import */ var _mixins_colors_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mixins_colors_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item"],
  mixins: [_mixins_colors_js__WEBPACK_IMPORTED_MODULE_0___default.a],
  computed: {
    avatar: function avatar() {
      return this.item.owner.avatar_path.length == 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Writer.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/Writer.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item"]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/show/Blog.vue?vue&type=template&id=1575e19b&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blogs/show/Blog.vue?vue&type=template&id=1575e19b& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-gray-100 text-gray-700",
      attrs: { id: "last-published" }
    },
    [
      _c("div", { staticClass: "lg:px-24 p-8 flex lg:flex-row flex-col" }, [
        _c("div", { staticClass: "lg:w-3/5 w-full" }, [
          _c("div", { staticClass: "flex flex-row justify-between" }, [
            _c(
              "a",
              {
                staticClass:
                  "text-lg font-bold text-white table px-1 rounded-lg cursor-pointer",
                class: "bg-" + _vm.blog.channel.color + "-600",
                attrs: { href: "/blogs/channels/" + _vm.blog.channel.slug }
              },
              [
                _vm._v(
                  "\n          #" + _vm._s(_vm.blog.channel.name) + "\n        "
                )
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "ml-1 text-gray-500" }, [
              _vm._v(_vm._s(_vm.blog.visits_count + 1) + " Görüntüleme")
            ])
          ]),
          _vm._v(" "),
          _c(
            "h1",
            {
              staticClass: "text-4xl text-teal-700 font-bold pb-4 leading-tight"
            },
            [_vm._v("\n        " + _vm._s(_vm.blog.title) + "\n      ")]
          ),
          _vm._v(" "),
          _vm.blog.summary
            ? _c("p", { staticClass: "text-2xl pb-8 text-black" }, [
                _vm._v("\n        " + _vm._s(_vm.blog.summary) + "\n      ")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("img", {
            staticClass: "object-cover w-full mb-8 shadow-xl",
            attrs: { src: "/storage/" + _vm.blog.image, alt: _vm.blog.title }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "pb-8 text-xl leading-loose text-justify p-link",
            domProps: { innerHTML: _vm._s(_vm.blog.body) }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "lg:w-2/5 w-full flex flex-col lg:pl-12" }, [
          _c(
            "div",
            {
              staticClass:
                "flex flex-row pb-8 items-center justify-center lg:justify-start"
            },
            [
              _c("avatar", { attrs: { item: _vm.blog } }),
              _vm._v(" "),
              _c("writer", { attrs: { item: _vm.blog } })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex flex-col pb-8 sticky top-0" },
            [
              _c(
                "p",
                { staticClass: "text-teal-700 mb-4 text-2xl font-semibold" },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.blog.channel.name) +
                      " ile ilgili diğer yazılar\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.blogs, function(relatedBlog) {
                return _c(
                  "div",
                  {
                    key: relatedBlog.id,
                    staticClass: "flex-row flex items-center mb-4"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "rounded-full mr-2 table",
                        class: "bg-" + relatedBlog.channel.color + "-600"
                      },
                      [
                        _c("svg", { staticClass: "w-4 h-4" }, [
                          _c("circle", {
                            attrs: {
                              cx: "50",
                              cy: "50",
                              r: "40",
                              fill: "currentColor"
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "text-teal-600 text-lg hover:text-teal-800",
                        attrs: {
                          href:
                            "/blogs/" +
                            relatedBlog.channel.slug +
                            "/" +
                            relatedBlog.slug
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(relatedBlog.title) +
                            "\n          "
                        )
                      ]
                    )
                  ]
                )
              })
            ],
            2
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Avatar.vue?vue&type=template&id=563b08a8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/Avatar.vue?vue&type=template&id=563b08a8& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex overflow-hidden flex-col" }, [
    !_vm.avatar
      ? _c("img", {
          staticClass:
            "inline-block h-10 w-10 rounded-full text-white shadow-solid",
          attrs: { src: _vm.item.owner.avatar_path, alt: _vm.item.owner.name }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.avatar
      ? _c(
          "div",
          {
            staticClass:
              "w-10 h-10 rounded-full flex flex-col items-center justify-center",
            class: "bg-" + _vm.randomColor + "-600"
          },
          [
            _c("p", { staticClass: "text-white font-semibold text-xl" }, [
              _vm._v("\n      " + _vm._s(_vm.item.owner.avatar_path) + "\n    ")
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Writer.vue?vue&type=template&id=4955cec2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/Writer.vue?vue&type=template&id=4955cec2& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex flex-col" }, [
    _c("p", { staticClass: "ml-2 text-lg font-semibold" }, [
      _vm._v(
        "\n    " + _vm._s(_vm.item.owner.name) + " tarafından yazıldı.\n  "
      )
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "ml-2 text-md" }, [
      _vm._v(_vm._s(_vm.item.updated_at) + " güncellendi")
    ]),
    _vm._v(" "),
    _c("hr", {
      staticClass:
        "bg-teal-700 h-2 shadow-lg rounded-lg mt-2 ml-2 hidden lg:flex"
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/blogs/show/Blog.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/blogs/show/Blog.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blog_vue_vue_type_template_id_1575e19b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.vue?vue&type=template&id=1575e19b& */ "./resources/js/components/blogs/show/Blog.vue?vue&type=template&id=1575e19b&");
/* harmony import */ var _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.vue?vue&type=script&lang=js& */ "./resources/js/components/blogs/show/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blog_vue_vue_type_template_id_1575e19b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blog_vue_vue_type_template_id_1575e19b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/blogs/show/Blog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/blogs/show/Blog.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/blogs/show/Blog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/show/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/blogs/show/Blog.vue?vue&type=template&id=1575e19b&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/blogs/show/Blog.vue?vue&type=template&id=1575e19b& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_1575e19b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=template&id=1575e19b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/show/Blog.vue?vue&type=template&id=1575e19b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_1575e19b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_1575e19b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/shared/Avatar.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/shared/Avatar.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar_vue_vue_type_template_id_563b08a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar.vue?vue&type=template&id=563b08a8& */ "./resources/js/components/shared/Avatar.vue?vue&type=template&id=563b08a8&");
/* harmony import */ var _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Avatar_vue_vue_type_template_id_563b08a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Avatar_vue_vue_type_template_id_563b08a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/Avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/Avatar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/shared/Avatar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/Avatar.vue?vue&type=template&id=563b08a8&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/shared/Avatar.vue?vue&type=template&id=563b08a8& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_563b08a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=template&id=563b08a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Avatar.vue?vue&type=template&id=563b08a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_563b08a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_563b08a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/shared/Writer.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/shared/Writer.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Writer_vue_vue_type_template_id_4955cec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Writer.vue?vue&type=template&id=4955cec2& */ "./resources/js/components/shared/Writer.vue?vue&type=template&id=4955cec2&");
/* harmony import */ var _Writer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Writer.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/Writer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Writer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Writer_vue_vue_type_template_id_4955cec2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Writer_vue_vue_type_template_id_4955cec2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/Writer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/Writer.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/shared/Writer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Writer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Writer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Writer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Writer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/Writer.vue?vue&type=template&id=4955cec2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/shared/Writer.vue?vue&type=template&id=4955cec2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Writer_vue_vue_type_template_id_4955cec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Writer.vue?vue&type=template&id=4955cec2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/Writer.vue?vue&type=template&id=4955cec2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Writer_vue_vue_type_template_id_4955cec2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Writer_vue_vue_type_template_id_4955cec2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/colors.js":
/*!***************************************!*\
  !*** ./resources/js/mixins/colors.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  data: function data() {
    return {
      colors: ["gray", "red", "yellow", "green", "indigo", "purple", "teal", "pink"]
    };
  },
  computed: {
    randomColor: function randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
  }
};

/***/ })

}]);