(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FooterField"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/FooterField.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/FooterField.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_components_FooterSocial_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-components/FooterSocial.vue */ "./resources/js/components/shared/footer-components/FooterSocial.vue");
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["setting"],
  components: {
    FooterSocial: _footer_components_FooterSocial_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      about: this.setting ? this.setting.about : ""
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["setting"],
  data: function data() {
    return {
      instagram: this.setting ? this.setting.instagram : "",
      facebook: this.setting ? this.setting.facebook : "",
      twitter: this.setting ? this.setting.twitter : ""
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/FooterField.vue?vue&type=template&id=722f1060&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/FooterField.vue?vue&type=template&id=722f1060& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      staticClass:
        "flex flex-col items-center md:justify-between w-full justify-center py-4 pb-8 bg-gray-900 text-white"
    },
    [
      _c(
        "div",
        { staticClass: "mt-4 mb-6" },
        [_c("footer-social", { attrs: { setting: _vm.setting } })],
        1
      ),
      _vm._v(" "),
      _vm._m(0)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "w-full md:w-4/12 px-4 mx-auto text-center" },
      [
        _c("div", { staticClass: "text-sm font-semibold py-1" }, [
          _vm._v("\n      Copyright © 2021 Forum Starter Template\n      "),
          _c(
            "a",
            {
              staticClass: "text-white hover:text-teal-200",
              attrs: { href: "mailto:emirsagit@gmail.com" }
            },
            [_vm._v("by Emir Sağıt")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=template&id=2271fc5e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=template&id=2271fc5e& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-6 flex flex-row" }, [
    _c(
      "a",
      {
        staticClass:
          "bg-white text-blue-700 hover:text-blue-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-1 flex cursor-pointer",
        attrs: { href: _vm.facebook, type: "button" }
      },
      [
        _c(
          "svg",
          {
            staticClass: "h-8 w-8",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 50 50",
              stroke: "currentColor"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M25 3C12.862 3 3 12.862 3 25c0 11.02 8.128 20.138 18.713 21.729l1.148.173V29.566h-5.197v-3.52h5.197v-4.673c0-2.878.691-4.774 1.834-5.963 1.144-1.19 2.833-1.789 5.184-1.789 1.88 0 2.611.114 3.307.2v2.88h-2.448a3.59 3.59 0 00-3.119 1.807c-.591 1.032-.775 2.264-.775 3.52v4.017h6.123l-.545 3.52h-5.578V46.93l1.135-.155C38.714 45.32 47 36.127 47 25c0-12.138-9.862-22-22-22zm0 2c11.058 0 20 8.942 20 20 0 9.73-6.964 17.732-16.156 19.533V31.564h5.293l1.162-7.52h-6.455v-2.017c0-1.037.19-1.967.51-2.525.32-.558.628-.8 1.384-.8h4.448V12.01l-.868-.117c-.6-.082-1.969-.272-4.44-.272-2.702 0-5.022.736-6.624 2.402-1.602 1.666-2.393 4.147-2.393 7.35v2.674h-5.197v7.52h5.197V44.47C11.817 42.555 5 34.624 5 25 5 13.942 13.942 5 25 5z"
              }
            })
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass:
          "bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-1 flex hover:text-blue-700 cursor-pointer",
        attrs: { href: _vm.twitter, type: "button" }
      },
      [
        _c(
          "svg",
          {
            staticClass: "h-6 w-6",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 50 50",
              stroke: "currentColor"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M34.219 5.469c-5.98 0-10.844 4.863-10.844 10.843 0 .36.09.711.125 1.063-7.395-.707-13.934-4.27-18.375-9.719a1.005 1.005 0 00-.863-.379.995.995 0 00-.793.504A10.758 10.758 0 002 13.22c0 2.402.86 4.601 2.188 6.406-.258-.113-.54-.176-.782-.313a.997.997 0 00-1.469.875v.125c0 3.684 1.907 6.883 4.72 8.844-.032-.004-.063.008-.095 0a1 1 0 00-1.125 1.282c1.118 3.472 3.97 6.125 7.5 7.093-2.812 1.672-6.074 2.657-9.593 2.657-.762 0-1.492-.04-2.219-.126a.998.998 0 00-1.074.657.997.997 0 00.418 1.187A28.84 28.84 0 0016.094 46.5c9.332 0 16.652-3.898 21.562-9.469 4.91-5.57 7.469-12.804 7.469-19.562 0-.285-.023-.563-.031-.844 1.832-1.402 3.468-3.047 4.75-4.969a.998.998 0 00-.067-1.21.996.996 0 00-1.183-.258c-.516.23-1.117.253-1.657.437.711-.95 1.32-1.973 1.688-3.125a1.005 1.005 0 00-.336-1.086 1.002 1.002 0 00-1.133-.07C45.45 7.355 43.56 8.066 41.563 8.5c-1.938-1.813-4.489-3.031-7.344-3.031zm0 2c2.55 0 4.855 1.09 6.468 2.812.243.25.598.356.938.281a20.581 20.581 0 003.75-1.124 8.903 8.903 0 01-2.563 2.343.998.998 0 00-.503 1.23.998.998 0 001.16.645c1-.12 1.89-.527 2.843-.781a18.992 18.992 0 01-2.812 2.5.997.997 0 00-.406.875c.015.406.031.809.031 1.219 0 6.25-2.398 13.035-6.969 18.218-4.57 5.184-11.281 8.813-20.062 8.813-3.989 0-7.754-.883-11.157-2.438 4.22-.324 8.11-1.816 11.25-4.28A.999.999 0 0015.594 36c-3.296-.06-6.058-1.978-7.53-4.688h.156c.988 0 1.965-.125 2.875-.375.437-.13.738-.536.722-.993a1.004 1.004 0 00-.785-.945c-3.558-.719-6.226-3.617-6.844-7.219 1.008.348 2.04.621 3.157.657a1 1 0 00.593-1.844A8.855 8.855 0 014 13.219c0-1.14.297-2.188.688-3.188 5 5.489 12 9.133 19.906 9.531.312.016.617-.113.82-.351a1 1 0 00.211-.867 8.925 8.925 0 01-.25-2.032 8.826 8.826 0 018.844-8.843z"
              }
            })
          ]
        )
      ]
    ),
    _c(
      "a",
      {
        staticClass:
          "bg-white text-pink-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-1 flex hover:text-pink-800 cursor-pointer",
        attrs: { href: _vm.instagram, type: "button" }
      },
      [
        _c(
          "svg",
          {
            staticClass: "h-6 w-6",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 50 50",
              stroke: "currentColor"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M16 3C8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16c0-7.168-5.832-13-13-13H16zm0 2h18c6.086 0 11 4.914 11 11v18c0 6.086-4.914 11-11 11H16C9.914 45 5 40.086 5 34V16C5 9.914 9.914 5 16 5zm21 6a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2zm-12 3c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9z"
              }
            })
          ]
        )
      ]
    )
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

/***/ "./resources/js/components/shared/FooterField.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/shared/FooterField.vue ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterField_vue_vue_type_template_id_722f1060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterField.vue?vue&type=template&id=722f1060& */ "./resources/js/components/shared/FooterField.vue?vue&type=template&id=722f1060&");
/* harmony import */ var _FooterField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterField.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/FooterField.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FooterField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FooterField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FooterField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterField_vue_vue_type_template_id_722f1060___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FooterField_vue_vue_type_template_id_722f1060___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/FooterField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/FooterField.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/shared/FooterField.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/FooterField.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/FooterField.vue?vue&type=template&id=722f1060&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/shared/FooterField.vue?vue&type=template&id=722f1060& ***!
  \***************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterField_vue_vue_type_template_id_722f1060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterField.vue?vue&type=template&id=722f1060& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/FooterField.vue?vue&type=template&id=722f1060&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterField_vue_vue_type_template_id_722f1060___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterField_vue_vue_type_template_id_722f1060___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/shared/footer-components/FooterSocial.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/shared/footer-components/FooterSocial.vue ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterSocial_vue_vue_type_template_id_2271fc5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterSocial.vue?vue&type=template&id=2271fc5e& */ "./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=template&id=2271fc5e&");
/* harmony import */ var _FooterSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterSocial.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FooterSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FooterSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FooterSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterSocial_vue_vue_type_template_id_2271fc5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FooterSocial_vue_vue_type_template_id_2271fc5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/footer-components/FooterSocial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterSocial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=template&id=2271fc5e&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=template&id=2271fc5e& ***!
  \**********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSocial_vue_vue_type_template_id_2271fc5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterSocial.vue?vue&type=template&id=2271fc5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/footer-components/FooterSocial.vue?vue&type=template&id=2271fc5e&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSocial_vue_vue_type_template_id_2271fc5e___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterSocial_vue_vue_type_template_id_2271fc5e___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);