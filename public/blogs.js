(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blogs"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/index/Blogs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blogs/index/Blogs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_VueSlickSlider_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/VueSlickSlider.vue */ "./resources/js/components/shared/VueSlickSlider.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["dataBlogs", "dataSliders", "dataTrendings", "dataThreads"],
  data: function data() {
    return {
      blogs: this.dataBlogs,
      trendings: this.dataTrendings,
      threads: this.dataThreads
    };
  },
  components: {
    Slider: _shared_VueSlickSlider_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    "goto": function goto(blog) {
      window.location.href = "/blogs/" + blog.channel.slug + "/" + blog.slug;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/VueSlickSlider.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/VueSlickSlider.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel-theme.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // optional style for arrows & dots


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["blogs", "sliders"],
  name: "MyComponent",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {
    "goto": function goto(blog) {
      window.location.href = "/blogs/" + blog.channel.slug + "/" + blog.slug;
    }
  },
  data: function data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 1024,
          settings: {
            centerMode: true,
            dots: true,
            arrows: true,
            fade: true,
            infinite: true,
            speed: 500,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true
          }
        }]
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "bg-gray-300", attrs: { id: "slider" } }, [
      _vm.dataSliders.length
        ? _c(
            "div",
            { staticClass: "lg:px-24 lg:pt-8 pb-8 lg:pb-0" },
            [
              _vm.dataSliders.length
                ? _c("slider", {
                    attrs: { blogs: _vm.blogs, sliders: _vm.dataSliders }
                  })
                : _vm._e()
            ],
            1
          )
        : _c("div", { staticClass: "lg:px-24 p-4 lg:p-8" }, [
            _c(
              "p",
              { staticClass: "text-3xl text-teal-700 font-extrabold pb-8" },
              [_vm._v("\n        Slider:\n      ")]
            )
          ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "bg-gray-200", attrs: { id: "last-published" } }, [
      _c("div", { staticClass: "lg:px-24 p-4 lg:p-8" }, [
        _c("p", { staticClass: "text-3xl text-teal-700 font-extrabold pb-8" }, [
          _vm._v("\n        Son Paylaşılanlar:\n      ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex md:flex-row flex-col flex-wrap" }, [
          _vm.blogs.length
            ? _c(
                "div",
                { staticClass: "md:w-1/2 w-full flex flex-col pb-8 md:pr-8" },
                [
                  _c("img", {
                    staticClass:
                      "rounded-md hover:opacity-75 cursor-pointer shadow-xl",
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
                      "font-bold md:text-3xl text-2xl hover:opacity-75 cursor-pointer pt-2 leading-tight",
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
                              "rounded-md hover:opacity-75 cursor-pointer shadow-xl",
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
                              "font-bold md:text-2xl text-xl hover:opacity-75 cursor-pointer leading-tight",
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
            [_vm._v("\n          Popüler:\n        ")]
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
                          "rounded-md hover:opacity-75 cursor-pointer shadow-xl",
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
                          "font-bold md:text-2xl text-xl hover:opacity-75 cursor-pointer leading-tight",
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
              [_vm._v("\n          Son Sorunsallar\n        ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex flex-col" },
              _vm._l(_vm.threads, function(thread) {
                return _c("a", {
                  key: thread.id,
                  staticClass: "py-2 text-lg text-teal-700 hover:text-teal-800",
                  attrs: {
                    href: "/threads/" + thread.channel.slug + "/" + thread.slug
                  },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/VueSlickSlider.vue?vue&type=template&id=33e78282&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shared/VueSlickSlider.vue?vue&type=template&id=33e78282& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "w-full pb-8" },
    [
      _c(
        "VueSlickCarousel",
        _vm._b({}, "VueSlickCarousel", _vm.settings, false),
        _vm._l(_vm.sliders, function(slider) {
          return _c(
            "div",
            {
              key: slider.id,
              staticClass: "flex lg:flex-col flex-row",
              style: { height: "400px" }
            },
            [
              slider
                ? _c(
                    "a",
                    {
                      staticClass:
                        "ml-2 px-2 py-1 rounded-lg text-sm text-white bg-gray-800 bg-opacity-50 cursor-pointer hover:bg-opacity-100 max-content font-bold z-10 absolute mt-10",
                      attrs: {
                        href:
                          "/blogs/" + slider.channel.slug + "/" + slider.slug
                      }
                    },
                    [_vm._v("\n        " + _vm._s(slider.title.substr(0, 60)))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("img", {
                staticClass: "object-cover w-full cursor-pointer",
                attrs: { src: "/storage/" + slider.image, alt: slider.title },
                on: {
                  click: function($event) {
                    return _vm.goto(slider)
                  }
                }
              })
            ]
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/blogs/index/Blogs.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/blogs/index/Blogs.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blogs_vue_vue_type_template_id_5f173fbb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blogs.vue?vue&type=template&id=5f173fbb& */ "./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb&");
/* harmony import */ var _Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blogs.vue?vue&type=script&lang=js& */ "./resources/js/components/blogs/index/Blogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blogs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/index/Blogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_5f173fbb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Blogs.vue?vue&type=template&id=5f173fbb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blogs/index/Blogs.vue?vue&type=template&id=5f173fbb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_5f173fbb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blogs_vue_vue_type_template_id_5f173fbb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/shared/VueSlickSlider.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/shared/VueSlickSlider.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueSlickSlider_vue_vue_type_template_id_33e78282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueSlickSlider.vue?vue&type=template&id=33e78282& */ "./resources/js/components/shared/VueSlickSlider.vue?vue&type=template&id=33e78282&");
/* harmony import */ var _VueSlickSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueSlickSlider.vue?vue&type=script&lang=js& */ "./resources/js/components/shared/VueSlickSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VueSlickSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VueSlickSlider_vue_vue_type_template_id_33e78282___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VueSlickSlider_vue_vue_type_template_id_33e78282___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shared/VueSlickSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/VueSlickSlider.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/shared/VueSlickSlider.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSlickSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VueSlickSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/VueSlickSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSlickSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/VueSlickSlider.vue?vue&type=template&id=33e78282&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/shared/VueSlickSlider.vue?vue&type=template&id=33e78282& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSlickSlider_vue_vue_type_template_id_33e78282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VueSlickSlider.vue?vue&type=template&id=33e78282& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shared/VueSlickSlider.vue?vue&type=template&id=33e78282&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSlickSlider_vue_vue_type_template_id_33e78282___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueSlickSlider_vue_vue_type_template_id_33e78282___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);