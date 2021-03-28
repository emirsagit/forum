(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Blogs"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/index/Blogs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blogs/index/Blogs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
// import Slider from "../../shared/VueSlickSlider.vue";
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["dataBlogs", "dataTrendings", "dataThreads"],
  data: function data() {
    return {
      blogs: this.dataBlogs,
      trendings: this.dataTrendings,
      threads: this.dataThreads
    };
  },
  methods: {
    "goto": function goto(blog) {
      window.location.href = "/blog/" + blog.slug;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "bg-gray-200", attrs: { id: "last-published" } }, [
      _c("div", { staticClass: "lg:px-24 p-4 lg:p-8" }, [
        _c("div", { staticClass: "flex md:flex-row flex-col flex-wrap" }, [
          _vm.blogs.length
            ? _c(
                "div",
                { staticClass: "md:w-1/2 w-full flex flex-col pb-8 md:pr-8" },
                [
                  _c("img", {
                    staticClass:
                      "rounded-md transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer shadow-xl",
                    attrs: {
                      src: "/storage/" + _vm.blogs[0].image,
                      loading: "lazy",
                      alt: _vm.blogs[0].title
                    },
                    on: {
                      click: function($event) {
                        return _vm.goto(_vm.blogs[0])
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "-mt-6 text-white text-sm px-1 table rounded-md font-semibold",
                      class: "bg-" + _vm.blogs[0].channel.color + "-600"
                    },
                    [
                      _vm._v(
                        "\n            #" +
                          _vm._s(_vm.blogs[0].channel.name) +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("h4", {
                    staticClass:
                      "font-bold md:text-3xl text-2xl hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer pt-2 leading-tight",
                    domProps: { textContent: _vm._s(_vm.blogs[0].title) },
                    on: {
                      click: function($event) {
                        return _vm.goto(_vm.blogs[0])
                      }
                    }
                  })
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "md:w-1/2 w-full md:pl-8" },
            _vm._l(_vm.blogs, function(blog, index) {
              return _c(
                "div",
                {
                  key: blog.id,
                  staticClass: "flex flex-row flex-wrap",
                  class: index !== 0 ? "pb-8" : ""
                },
                [
                  index !== 0
                    ? _c(
                        "div",
                        { staticClass: "w-1/2 md:w-1/3 md:pt-0 flex flex-col" },
                        [
                          _c("img", {
                            staticClass:
                              "rounded-md transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer shadow-xl",
                            attrs: {
                              src: "/storage/" + blog.image,
                              alt: _vm.blogs.title,
                              loading: "lazy"
                            },
                            on: {
                              click: function($event) {
                                return _vm.goto(blog)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "-mt-6 text-xs px-1 rounded-md table text-white font-semibold",
                              class: "bg-" + blog.channel.color + "-600"
                            },
                            [
                              _vm._v(
                                "\n                #" +
                                  _vm._s(blog.channel.name) +
                                  "\n              "
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  index !== 0
                    ? _c(
                        "div",
                        { staticClass: "w-1/2 md:w-2/3 px-2 md:pl-4" },
                        [
                          _c("h4", {
                            staticClass:
                              "font-bold md:text-2xl text-xl hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer leading-tight",
                            domProps: { textContent: _vm._s(blog.title) },
                            on: {
                              click: function($event) {
                                return _vm.goto(blog)
                              }
                            }
                          })
                        ]
                      )
                    : _vm._e()
                ]
              )
            }),
            0
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "bg-gray-300", attrs: { id: "trendings" } }, [
      _c("div", { staticClass: "flex flex-col lg:flex-row" }, [
        _c("div", { staticClass: "lg:w-3/4 w-full p-4 lg:p-8 lg:pl-24" }, [
          _c(
            "p",
            { staticClass: "text-3xl font-extrabold pb-8 text-teal-800" },
            [_vm._v("Popüler:")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex flex-row flex-wrap" },
            _vm._l(_vm.trendings, function(trending) {
              return _c(
                "div",
                {
                  key: trending.id,
                  staticClass: "lg:w-1/2 w-full flex flex-row pb-8"
                },
                [
                  _c(
                    "div",
                    { staticClass: "w-1/2 lg:w-1/3 md:pt-0 flex flex-col" },
                    [
                      _c("img", {
                        staticClass:
                          "rounded-md transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer shadow-xl",
                        attrs: {
                          src: "/storage/" + trending.image,
                          alt: trending.title,
                          loading: "lazy"
                        },
                        on: {
                          click: function($event) {
                            return _vm.goto(trending)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "-mt-6 text-xs px-1 rounded-md table text-white font-semibold",
                          class: "bg-" + trending.channel.color + "-600"
                        },
                        [
                          _vm._v(
                            "\n                #" +
                              _vm._s(trending.channel.name) +
                              "\n              "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-1/2 lg:w-2/3 px-2 md:pr-4" }, [
                    _c(
                      "h4",
                      {
                        staticClass:
                          "font-bold md:text-2xl text-xl hover:text-gray-800 transition duration-500 ease-in-out cursor-pointer leading-tight",
                        on: {
                          click: function($event) {
                            return _vm.goto(trending)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(trending.title) +
                            "\n              "
                        )
                      ]
                    )
                  ])
                ]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "lg:w-1/4 w-full bg-gray-100 p-4 lg:p-8 lg:pr-24 rounded-lg"
          },
          [
            _c(
              "p",
              { staticClass: "text-3xl font-extrabold pb-4 text-teal-800" },
              [_vm._v("\n          Sizden Gelenler\n        ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex flex-col" },
              _vm._l(_vm.threads, function(thread) {
                return _c("a", {
                  key: thread.id,
                  staticClass: "py-2 text-lg text-teal-700 hover:text-teal-800",
                  attrs: { href: "/" + thread.slug },
                  domProps: { textContent: _vm._s(thread.title) }
                })
              }),
              0
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/blogs/index/Blogs.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/blogs/index/Blogs.vue ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blogs_vue_vue_type_template_id_5f173fbb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blogs.vue?vue&type=template&id=5f173fbb& */ "./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb&");
/* harmony import */ var _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blogs.vue?vue&type=script&lang=js& */ "./resources/js/components/blogs/index/Blogs.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blogs_vue_vue_type_template_id_5f173fbb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blogs_vue_vue_type_template_id_5f173fbb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/blogs/index/Blogs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/blogs/index/Blogs.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/blogs/index/Blogs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blogs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/index/Blogs.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb& ***!
  \**************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_5f173fbb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blogs.vue?vue&type=template&id=5f173fbb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_5f173fbb___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_5f173fbb___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);