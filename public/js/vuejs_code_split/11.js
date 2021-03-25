(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dependencies_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dependencies/form.js */ "./resources/js/components/dependencies/form.js");
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
  props: {
    register: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      form: new _dependencies_form_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        email: "",
        name: "",
        username: "",
        password: "",
        password_confirmation: ""
      }),
      name: "register"
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.form.submit("post", "/register").then(function (data) {
        window.location.reload();
        flash("Kayıt Başarılı");
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    registerHide: function registerHide() {
      window.toggle("register", false);
    },
    loginRequest: function loginRequest() {
      this.registerHide();
      window.toggle("login", true);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2& ***!
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
  return _vm.register
    ? _c(
        "div",
        {
          staticClass:
            "w-screen h-screen fixed top-0 right-0 bg-gray-800 bg-opacity-75 flex justify-center m-auto z-50"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "bg-white w-screen h-screen sm:w-1/2 lg:w-1/3 flex flex-col sm:m-auto p-4 sm:rounded-xl overflow-auto"
            },
            [
              _c("div", { staticClass: "flex justify-center flex-col" }, [
                _c(
                  "div",
                  { staticClass: "flex flex-row mb-2 justify-between" },
                  [
                    _c("h3", { staticClass: "font-bold text-xl ml-2" }, [
                      _vm._v("Kayıt Ol")
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "text-red-500 hover:text-red-700 cursor-pointer font-bold",
                        on: {
                          click: function($event) {
                            return _vm.registerHide()
                          }
                        }
                      },
                      [_vm._v("\n          X\n        ")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "ml-2 text-teal-700 text-sm" }, [
                  _vm._v(
                    "\n        Forumda konunun uzmanlarına soru sormak, paylaşım yapmak daima\n        ücretsizdir. Ancak sitemizi spam içerikten korumak için üyelik\n        sisteminden başka bir yol bulamadık. Zaman ayırdığınız için\n        teşekkürler...\n      "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "bg-white rounded px-4 py-4",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.onSubmit()
                      },
                      keydown: function($event) {
                        return _vm.form.errors.clear($event.target.name)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "mb-2" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-gray-700 text-sm font-bold mb-2",
                          attrs: { for: "name" }
                        },
                        [_vm._v("\n            Adınız\n          ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass:
                          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                        class: {
                          "border-red-500": _vm.form.errors.has("name")
                        },
                        attrs: {
                          id: "name",
                          type: "text",
                          placeholder: "Adınız",
                          name: "name"
                        },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.form.errors.has("name")
                        ? _c("p", {
                            staticClass: "text-red-500 text-xs italic",
                            domProps: {
                              textContent: _vm._s(_vm.form.errors.get("name"))
                            }
                          })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-2" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-gray-700 text-sm font-bold mb-2",
                          attrs: { for: "username" }
                        },
                        [_vm._v("\n            Kullanıcı Adı\n          ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.username,
                            expression: "form.username"
                          }
                        ],
                        staticClass:
                          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                        class: {
                          "border-red-500": _vm.form.errors.has("username")
                        },
                        attrs: {
                          id: "username",
                          type: "text",
                          placeholder: "Kullanıcı Adınız",
                          name: "username"
                        },
                        domProps: { value: _vm.form.username },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "username", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.form.errors.has("username")
                        ? _c("p", {
                            staticClass: "text-red-500 text-xs italic",
                            domProps: {
                              textContent: _vm._s(
                                _vm.form.errors.get("username")
                              )
                            }
                          })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-2" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-gray-700 text-sm font-bold mb-2",
                          attrs: { for: "email" }
                        },
                        [_vm._v("\n            Mail Adresiniz\n          ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email"
                          }
                        ],
                        staticClass:
                          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                        class: {
                          "border-red-500": _vm.form.errors.has("email")
                        },
                        attrs: {
                          id: "email",
                          type: "text",
                          placeholder: "Mail Adresiniz",
                          name: "email"
                        },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.form.errors.has("email")
                        ? _c("p", {
                            staticClass: "text-red-500 text-xs italic",
                            domProps: {
                              textContent: _vm._s(_vm.form.errors.get("email"))
                            }
                          })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-2" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-gray-700 text-sm font-bold mb-2",
                          attrs: { for: "password" }
                        },
                        [_vm._v("\n            Parola\n          ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.password,
                            expression: "form.password"
                          }
                        ],
                        staticClass:
                          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                        class: {
                          "border-red-500": _vm.form.errors.has("password")
                        },
                        attrs: {
                          id: "password",
                          type: "password",
                          placeholder: "Parola",
                          name: "password"
                        },
                        domProps: { value: _vm.form.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "password", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.form.errors.has("password")
                        ? _c("p", {
                            staticClass: "text-red-500 text-xs italic",
                            domProps: {
                              textContent: _vm._s(
                                _vm.form.errors.get("password")
                              )
                            }
                          })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-2" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-gray-700 text-sm font-bold mb-2",
                          attrs: { for: "password" }
                        },
                        [_vm._v("\n            Parola Tekrarı\n          ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.password_confirmation,
                            expression: "form.password_confirmation"
                          }
                        ],
                        staticClass:
                          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                        class: {
                          "border-red-500": _vm.form.errors.has("password")
                        },
                        attrs: {
                          id: "password_confirmation",
                          type: "password",
                          placeholder: "Parola Onayı",
                          name: "password_confirmation"
                        },
                        domProps: { value: _vm.form.password_confirmation },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "password_confirmation",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "flex items-center justify-between" },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline",
                            class: {
                              "cursor-not-allowed opacity-50": _vm.form.errors.has()
                            },
                            attrs: { type: "submit" }
                          },
                          [_vm._v("\n            Kaydet\n          ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",
                            attrs: { href: "#" }
                          },
                          [_vm._v("\n            Parolamı unuttum\n          ")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "cursor-pointer mt-4 inline-block align-baseline text-sm text-gray-500",
                        on: { click: _vm.loginRequest }
                      },
                      [
                        _vm._v("\n          Üye misiniz?"),
                        _c(
                          "span",
                          {
                            staticClass:
                              "align-baseline text-sm text-blue-500 hover:text-blue-800"
                          },
                          [_vm._v("\n            Giriş yapın")]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
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

/***/ "./resources/js/components/auth/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/auth/Register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=d4f9cbe2& */ "./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/auth/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=d4f9cbe2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Register.vue?vue&type=template&id=d4f9cbe2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_d4f9cbe2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dependencies/errors.js":
/*!********************************************************!*\
  !*** ./resources/js/components/dependencies/errors.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors = /*#__PURE__*/function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }
  }, {
    key: "get",
    value: function get(field) {
      if (this.errors[field]) return this.errors[field][0];
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        delete this.errors[field];
        return;
      }

      this.errors = {};
    }
  }, {
    key: "has",
    value: function has() {
      var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (field) {
        return this.errors[field] ? true : false;
      }

      return Object.keys(this.errors).length > 0;
    }
  }]);

  return Errors;
}();

/* harmony default export */ __webpack_exports__["default"] = (Errors);

/***/ }),

/***/ "./resources/js/components/dependencies/form.js":
/*!******************************************************!*\
  !*** ./resources/js/components/dependencies/form.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./resources/js/components/dependencies/errors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Form = /*#__PURE__*/function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.originalData = data;

    for (var field in data) {
      this[field] = data[field];
    }

    this.errors = new _errors_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(Form, [{
    key: "data",
    value: function data() {
      var data = {};

      for (var field in this.originalData) {
        data[field] = this[field];
      }

      return data;
    }
  }, {
    key: "submit",
    value: function submit(requestType, url) {
      var _this = this;

      var parameter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return new Promise(function (resolve, reject) {
        axios[requestType](url, _this.data(), parameter).then(function (response) {
          _this.onSuccess(response.data);

          resolve(response.data);
        })["catch"](function (error) {
          _this.onFail(error.response.data);

          reject(error.response.data);
        });
      });
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      this.errors.clear();
    }
  }, {
    key: "onFail",
    value: function onFail(data) {
      if (data.errors) {
        this.errors.record(data.errors);
      }
    }
  }, {
    key: "empty",
    value: function empty() {
      var _this2 = this;

      Object.keys(this.originalData).forEach(function (field) {
        _this2[field] = "";
      });
    }
  }]);

  return Form;
}();

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

}]);