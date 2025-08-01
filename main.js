/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! italianno-regular-webfont.woff2 */ \"./src/italianno-regular-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! italianno-regular-webfont.woff */ \"./src/italianno-regular-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! images/hero-home.jpg */ \"./src/images/hero-home.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/johnny-automatic-spaghetti.svg */ \"./src/images/johnny-automatic-spaghetti.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'italiannoregular';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),\n         url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n/* reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n.home-body {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-size: cover; /* Cover the entire viewport */\n  background-position: center; /* Center the image */\n  background-repeat: no-repeat; /* Prevent repeating */\n  background-attachment: fixed; /* Make the background fixed (optional, for parallax-like effect) */\n  margin-inline: auto;\n}\n\n.nav-buttons-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  /* gap: 2rem; */\n}\n\n.nav-btn {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  color: white;\n  background-color: transparent;\n  border: none;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: clamp(1.5rem, calc(1rem + 2vw), 4.5rem);\n  padding: 10px 0;\n}\n.nav-btn:hover {\n  opacity: 0.75;\n}\n\n\n.header-nav-title {\n  font-size: clamp(1rem, calc(1rem + 1vw), 4rem);\n  color: white;\n}\n.menu-logo {\n  width: 200px;\n  height: 150px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position:initial;\n  filter: invert(100%);\n  flex-shrink: 0;\n  transform: translateY(50px);\n  margin-bottom: 10px;\n}\n\n.nav-address {\n  color: white;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: clamp(.5rem, calc(.5rem + 2vw), 1.5rem);\n  text-align: right;\n  white-space: normal;\n  flex-shrink: 0;\n  margin-right: 1rem;\n  margin-bottom: 10px;\n}\n\n.nav-address p {\n  margin: 0;\n  padding: 0;\n  line-height: 1.2;\n}\n.home-hero-section {\n  display: flex;\n  flex-direction: column; /* Stack children vertically */\n  align-items: center;    /* Center children horizontally */\n  justify-content: center; /* Center content vertically within the hero area */\n  /* min-height: 55vh; */\n  \n  color: white; /* Default text color for hero section */\n  padding-top: 100px; /* Add padding to push content below the header. Adjust as needed. */\n  padding-bottom: 2rem; /* Add some padding at the bottom of the hero section */\n  width: 100%; /* Added to make it take full width */\n}\n.home h1,\n.menu h1,\n.about h1 {\n  font-family: 'italiannoregular', sans-serif;\n  font-size: \n    clamp(1rem, calc(1.75rem + 6vw), 8rem);\n  color: white; /* Ensure text in hero is white */\n  text-align: center; /* Added to center wrapped text */\n}\n.about h1 {\n  color: black; \n}\n.Italian {\n  color: white;\n  font-family: 'italiannoregular', sans-serif;\n  font-size: 2.75rem;\n  font-style: italic;\n  text-align: center; /* Added to center wrapped text */\n}\n\n.home-logo {\n  width: 200px;      \n  height: 150px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});  /* path to your image */\n  background-size: contain;    /* scale the image to fit */\n  background-repeat: no-repeat; /* don't tile the image */\n  background-position: center;  /* center the image inside the div */\n  filter: invert(100%);\n}\n.home-content {\n  background-color: white;\n  padding: 1rem 1rem 4rem;\n  /* Changed margin-top to a positive value to remove overlap */\n  /* margin-top: 1rem;  */\n  border-radius: 1.25rem 1.25rem 0 0;\n  box-shadow: 0 -10px 15px -10px rgba(0,0,0,0.1);\n  width: 80%;\n  margin-top: 8vh;\n  margin-left: auto;\n  margin-right: auto;\n  /* Removed grid-column as it's no longer a direct grid item of #content */\n  /* grid-column: 1 / -1; */ \n  z-index: 10; /* Ensure it appears above the hero section if there's overlap */\n  position: relative; /* Needed for z-index to work */\n}\n.home-content h2 {\n  font-size: 3rem;\n}\n.home-content p {\n  margin-top: 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n\n}\n.address-block {\n  margin-top: 4rem;\n  color: white;\n  margin-right: 1rem;\n  text-align: center;\n}\n#hook {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.header-nav {\n  padding: 10px;\n  display: grid;\n  /* Key change: Use a fixed minimum width (e.g., 150px) instead of min-content */\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  align-items: center;\n  width: 100%;\n  box-sizing: border-box;\n  /* justify-items: center; */\n  gap: 1rem;\n}\n.menu-logo {\n  width: 200px;\n  height: 150px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position:initial;\n  filter: invert(100%);\n  flex-shrink: 0;\n  transform: translateY(50px);\n  margin-bottom: 10px;\n}\n\n.nav-address {\n  color: white;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 1.5rem;\n  text-align: right;\n  white-space: normal;\n  flex-shrink: 0;\n  margin-right: 1rem;\n  margin-bottom: 10px;\n}\n\n.nav-address p {\n  margin: 0;\n  padding: 0;\n  line-height: 1.2;\n}\n#content {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.menu {\n  max-width: 825px;\n  margin: 0 auto;\n}\n\n.menu-hero-section {\n  \n  display: grid;\n  grid-template-columns: 1fr 320px 1fr;\n  font-family: 'italiannoregular';\n  font-size: 10rem;\n  color: white;\n  text-align: center;\n}\n.menu-hero-section>h1 {\n  grid-column: 2/3;\n}\n.menu-btn-container {\n  margin: 0 auto;\n  /* display: flex; */\n  /* justify-content: space-evenly; */\n  /* align-items: center; */\n}\n\n#menu-sections button {\n  font-size: 1rem;\n  color: white;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n#menu-sections button:hover {\n  opacity: 0.75;\n}\n.menu-section {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n.menu-section_zz {\n  margin: 0 auto;\n  /* padding: 10px; */\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  align-items: center;\n  width: 100%;\n  box-sizing: border-box;\n  color: white;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 1.5rem;\n  gap: 1rem;\n}\n/* .menu-section > h2 {\n  grid-column: 1/-1;\n  background-color: rgba(163, 18, 18, 0.3);\n  font-size: 3rem;\n} */\n.menu-section-name {\n  background-color: rgba(0, 0, 0, 0.4);\n  color: white;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  \n}\n.menu-items {\n  display: flex;\n  flex-wrap: wrap;\n  \n  gap: 1rem;\n}\n.menu-itemzz {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: white;\n  color: black;\n  padding-left: .5rem;\n  padding-right: .5rem;\n  border-radius: 10px;\n  line-height: 1.6;\n  min-height: 565px;\n}\n.menu-item {\n  max-width: 400px; /* was 350 */\n  flex: 1 1 300px; /* Grow to fill, min width ~300px */\n  padding: 1rem;\n  background-color: white;\n  border-radius: 10px;\n  margin-bottom: 0.5rem;\n}\n.menu-item .item-name {\n  font-size: 2.5rem;\n  font-weight: 500;\n\n}\n.menu-item .item-image {\n  width: 300px;\n  height: 200px; /* fixed height or use aspect ratio trick */\n  overflow: hidden;\n  border-radius: 8px; /* optional */\n  background-color: #eee; /* placeholder bg */\n}\n.menu-item .item-description {\n  margin-top: 1rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 300;\n  font-size: 1.5rem;\n  line-height: 1.6;\n  padding-left: .5rem;\n  padding-right: .5rem;\n}\n.menu-item .item-price {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 1rem;\n  font-size: 2rem;\n  font-weight: 500;\n\n}\n.container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.area1,\n.area2,\n.area3 {\n  opacity: 0.5;\n  padding: 25px;\n  font-size: 2rem;\n  font-weight: 500;\n  min-height: 300px;\n}\n.area1 {\n  background: green;\n  color: white;\n}\n\n.area2 {\n  background: white;\n  color: black;\n}\n\n.area3 {\n  background: red;\n  color: white;\n\n}\n.whitelink{\n  color: white;\n  cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-project/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-project/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-project/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAbout: () => (/* binding */ displayAbout)\n/* harmony export */ });\n/* harmony import */ var _images_Montemesola_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Montemesola.png */ \"./src/images/Montemesola.png\");\n\nfunction displayAbout(){\n   const pageContent = document.querySelector('#content'); \n  pageContent.className = 'about';\n  pageContent.innerHTML= buildAboutPage();\n}\n\n\nfunction buildAboutPage() {\n  const aboutHTML = `\n    <div class=\"container\">\n  <div class=\"area1\"> My late father came to the US from <a class=\"whitelink\"href=\"https://pugliapassion.com/towns-and-cities/montemesola/\" target=\"_blank\" rel=\"noopener noreferrer\">Montemesola</a>, which is a small town located to the north east of Taranto, half way between Grottaglie and Crispiano. <a class=\"whitelink\"href=\"https://en.wikipedia.org/wiki/Apulia\" target=\"_blank\" rel=\"noopener noreferrer\">Puglia </a>(in red on the map), also known as Apulia, is a region in Southern Italy famous for its unique and flavorful cuisine. Key culinary highlights include orecchiette pasta with broccoli rabe (cime di rapa), Focaccia Barese, and fresh seafood, reflecting the region's agricultural bounty and coastal location. </div>\n  <div class=\"area2\">Growing up, my father was too young to serve in WWII so he stayed at home with his mother and sisters. That is where he learned to cook. As a adult, he jpoined the Italian Navy and ended up visisting Norfolk, VA where he met my mother who taught dancing at the USO.  A whirlwind romance, they married, and after a while, he was able to come back to the US and he became a citizen.</div>\n  <div class=\"area3\">So who is this Guido character?  Guido is just a nickname for me, his son, Dino.  I was the oldest son of four and I was lucky enough to learn his love of food and cooking - sharing good food is a great joy!</div>\n</div>\n  `;\n  \n  return aboutHTML;\n\n\n}\n\n//# sourceURL=webpack://odin-restaurant-project/./src/about.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayHome: () => (/* binding */ displayHome)\n/* harmony export */ });\n\nfunction displayHome(){\n  const pageContent = document.querySelector('#content');\n  pageContent.className = 'home'; // Applies .home to #content\n  // Clear existing content before appending new sections\n  pageContent.innerHTML = ''; \n  pageContent.appendChild(buildHomePage());\n}\n\nfunction buildHomePage(){\n  \n  const fragment = document.createDocumentFragment(); // Use a fragment to append multiple top-level elements efficiently\n//set the body header and nav classes  \n  const bodySection = document.querySelector('body');\n  bodySection.classList =\"home-body\"; //different due to background image\n\n  //The header section contains the nav bar and is static across the pages\n  //only build it once\n  const headerSection = document.querySelector('header');\n  //see if the header is already in place by testing classList otherwise do nothing there\n  if(! headerSection.classList.contains('header-nav')){\n    headerSection.classList =\"header-nav\";\n    const headerNavTitle = document.createElement(\"div\");\n    headerNavTitle.className = \"header-nav-title\";\n    headerNavTitle.textContent = \"Guido's Taste of Italy\";\n    headerSection.prepend(headerNavTitle);\n    //setup nav within header\n    const navSection = document.querySelector('nav');\n    navSection.classList = \"nav-buttons-container\";\n    //add address \n    const navAddressDiv = document.createElement(\"div\");\n    navAddressDiv.className = \"nav-address\";\n    let addrp = document.createElement(\"p\");\n    addrp.textContent = \"123 Main Street\";\n    navAddressDiv.appendChild(addrp);\n    addrp = document.createElement(\"p\");\n    addrp.textContent = \"Myrtle Beach, SC 29579\";\n    navAddressDiv.appendChild(addrp);\n    addrp = document.createElement(\"p\");\n    addrp.textContent = \"843-555-1234\";\n    navAddressDiv.appendChild(addrp);\n    headerSection.appendChild(navAddressDiv);\n  }\n  \n  // Create the Hero Section\n  const heroSection = document.createElement(\"div\");\n  heroSection.className = \"home-hero-section\";\n\n  let element = document.createElement(\"h1\");\n  element.textContent = \"Guido's Taste of Italy\";\n  heroSection.appendChild(element);\n\n  element = document.createElement(\"div\");\n  element.className = \"home-logo\";\n  heroSection.appendChild(element);\n\n  element = document.createElement(\"h2\");\n  element.className = \"Italian\";\n  element.textContent = \"Il gusto dell'Italia di Guido\";\n  heroSection.appendChild(element);\n  fragment.appendChild(heroSection); // Add hero section to fragment\n  \n  //Create the Home Content Section \n  const homeContentDiv = document.createElement(\"div\");\n  homeContentDiv.className = \"home-content\"; // This will apply the white background, padding, etc.\n  element = document.createElement(\"h2\");\n  element.textContent = \"Welcome to Guido's Taste of Italy\";\n  homeContentDiv.appendChild(element);\n  element = document.createElement(\"p\");\n  element.textContent = \"At Guido's Taste of Italy, we bring the heart and soul of Italy’s home-style cooking straight to your plate. Our kitchen is filled with the rich aromas of family recipes passed down through generations — each bite bursting with authentic flavors made from the freshest, highest-quality ingredients.\";\n  homeContentDiv.appendChild(element);\n  element = document.createElement(\"p\");\n  element.textContent = \"Every day, our chef lovingly prepares a unique pasta special, crafted to showcase the best of Italian tradition with a personal touch. Whether it’s a creamy carbonara, a hearty ragù, or delicate handmade ravioli, you’ll taste the care and comfort in every forkful.\";\n  homeContentDiv.appendChild(element);\n  element = document.createElement(\"p\");\n  element.textContent = \"Sit back, relax, and savor the simple pleasures of good company, warm hospitality, and food that tastes like a hug from Nonna herself.\";\n  homeContentDiv.appendChild(element);\n  element = document.createElement(\"p\");\n  element.textContent = \"Come as a guest, leave as family.\";\n  element.id = \"hook\";\n  homeContentDiv.appendChild(element);\n  fragment.appendChild(homeContentDiv); // Add home content section to fragment\n\n  return fragment; // Return the fragment containing both sections\n}\n\n//# sourceURL=webpack://odin-restaurant-project/./src/home.js?\n}");

/***/ }),

/***/ "./src/images/Montemesola.png":
/*!************************************!*\
  !*** ./src/images/Montemesola.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"8979a671ca6aba287a73.png\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/Montemesola.png?\n}");

/***/ }),

/***/ "./src/images/Spaghetti-with-Mussels-and-Clams.jpeg":
/*!**********************************************************!*\
  !*** ./src/images/Spaghetti-with-Mussels-and-Clams.jpeg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"80fdb06695999ee3354b.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/Spaghetti-with-Mussels-and-Clams.jpeg?\n}");

/***/ }),

/***/ "./src/images/affogato1-1663610950.jpg":
/*!*********************************************!*\
  !*** ./src/images/affogato1-1663610950.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"8a32eb639a5cd0794e48.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/affogato1-1663610950.jpg?\n}");

/***/ }),

/***/ "./src/images/amaretto.jpg":
/*!*********************************!*\
  !*** ./src/images/amaretto.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"fbf86347248748b85758.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/amaretto.jpg?\n}");

/***/ }),

/***/ "./src/images/antipasto.jpg":
/*!**********************************!*\
  !*** ./src/images/antipasto.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"e95136e02009a678a4f7.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/antipasto.jpg?\n}");

/***/ }),

/***/ "./src/images/burrata-bruschetta-8.jpg":
/*!*********************************************!*\
  !*** ./src/images/burrata-bruschetta-8.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"89f2d854ba24683ab3bc.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/burrata-bruschetta-8.jpg?\n}");

/***/ }),

/***/ "./src/images/canneloni.jpg":
/*!**********************************!*\
  !*** ./src/images/canneloni.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"9cf70b4f262f30ad7f38.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/canneloni.jpg?\n}");

/***/ }),

/***/ "./src/images/caprese.jpg":
/*!********************************!*\
  !*** ./src/images/caprese.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"a98ed4bf760eb3d1553b.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/caprese.jpg?\n}");

/***/ }),

/***/ "./src/images/carbonara.jpg":
/*!**********************************!*\
  !*** ./src/images/carbonara.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"3371e48f7f440d094e93.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/carbonara.jpg?\n}");

/***/ }),

/***/ "./src/images/champagne-cocktail.jpg":
/*!*******************************************!*\
  !*** ./src/images/champagne-cocktail.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"d363d55ca87bfb830be8.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/champagne-cocktail.jpg?\n}");

/***/ }),

/***/ "./src/images/hero-home.jpg":
/*!**********************************!*\
  !*** ./src/images/hero-home.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"6c258b1bf275ca186234.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/hero-home.jpg?\n}");

/***/ }),

/***/ "./src/images/johnny-automatic-spaghetti.svg":
/*!***************************************************!*\
  !*** ./src/images/johnny-automatic-spaghetti.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"056678cf47e8e0d41282.svg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/johnny-automatic-spaghetti.svg?\n}");

/***/ }),

/***/ "./src/images/main-baked-calamari.jpeg":
/*!*********************************************!*\
  !*** ./src/images/main-baked-calamari.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"547444631803caed7c7c.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/main-baked-calamari.jpeg?\n}");

/***/ }),

/***/ "./src/images/marinara.jpg":
/*!*********************************!*\
  !*** ./src/images/marinara.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"7e19918051805ee643fa.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/marinara.jpg?\n}");

/***/ }),

/***/ "./src/images/negroni-recipe.jpg":
/*!***************************************!*\
  !*** ./src/images/negroni-recipe.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"67f9ade7c69d12ec9450.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/negroni-recipe.jpg?\n}");

/***/ }),

/***/ "./src/images/tiramisu.jpg":
/*!*********************************!*\
  !*** ./src/images/tiramisu.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"9f8f56beaa36093be78b.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/tiramisu.jpg?\n}");

/***/ }),

/***/ "./src/images/tortellini.jpg":
/*!***********************************!*\
  !*** ./src/images/tortellini.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"aa658f0e77d0511bfc71.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/tortellini.jpg?\n}");

/***/ }),

/***/ "./src/images/wine.jpg":
/*!*****************************!*\
  !*** ./src/images/wine.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"e40ee25c07eee1af43f4.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/wine.jpg?\n}");

/***/ }),

/***/ "./src/images/zeppole1-1663612195.jpg":
/*!********************************************!*\
  !*** ./src/images/zeppole1-1663612195.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"404b57dac8dfab864209.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/images/zeppole1-1663612195.jpg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n// import myImage from './images/hero2.jpg'; // Webpack processes this and gives you the correct URL\n\n\n\n\n\nconsole.log('in index.js');\n\nfunction clearContent(){\n  document.getElementById('content').innerHTML = '';\n}\n\nconst buttons = document.querySelectorAll('button');\nbuttons.forEach((btn) => {\n  btn.addEventListener('click', function() {\n    clearContent();\n    console.log(` ${btn.id} clicked`);\n    switch (btn.id) {\n  case \"home\":\n    clearContent();\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.displayHome)();\n    break;\n  case \"menu\":\n    clearContent();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.displayMenu)();\n    break;\n  case \"about\":\n    clearContent();\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__.displayAbout)();\n    break;\n  default:\n    console.warning(`invalid btn.id ${btn.id}`);\n}\n    // alert(`Button clicked! ${btn.id}`);\n  });\n});\n//start by displaying the Home Page\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.displayHome)();\n\n\n\n//# sourceURL=webpack://odin-restaurant-project/./src/index.js?\n}");

/***/ }),

/***/ "./src/italianno-regular-webfont.woff":
/*!********************************************!*\
  !*** ./src/italianno-regular-webfont.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"19f952669a7f528261b0.woff\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/italianno-regular-webfont.woff?\n}");

/***/ }),

/***/ "./src/italianno-regular-webfont.woff2":
/*!*********************************************!*\
  !*** ./src/italianno-regular-webfont.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"9b6b64dfc91ec0509d77.woff2\";\n\n//# sourceURL=webpack://odin-restaurant-project/./src/italianno-regular-webfont.woff2?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu)\n/* harmony export */ });\n/* harmony import */ var _images_burrata_bruschetta_8_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/burrata-bruschetta-8.jpg */ \"./src/images/burrata-bruschetta-8.jpg\");\n/* harmony import */ var _images_main_baked_calamari_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/main-baked-calamari.jpeg */ \"./src/images/main-baked-calamari.jpeg\");\n/* harmony import */ var _images_antipasto_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/antipasto.jpg */ \"./src/images/antipasto.jpg\");\n/* harmony import */ var _images_caprese_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/caprese.jpg */ \"./src/images/caprese.jpg\");\n/* harmony import */ var _images_carbonara_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/carbonara.jpg */ \"./src/images/carbonara.jpg\");\n/* harmony import */ var _images_marinara_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/marinara.jpg */ \"./src/images/marinara.jpg\");\n/* harmony import */ var _images_tortellini_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/tortellini.jpg */ \"./src/images/tortellini.jpg\");\n/* harmony import */ var _images_Spaghetti_with_Mussels_and_Clams_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/Spaghetti-with-Mussels-and-Clams.jpeg */ \"./src/images/Spaghetti-with-Mussels-and-Clams.jpeg\");\n/* harmony import */ var _images_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/tiramisu.jpg */ \"./src/images/tiramisu.jpg\");\n/* harmony import */ var _images_canneloni_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/canneloni.jpg */ \"./src/images/canneloni.jpg\");\n/* harmony import */ var _images_affogato1_1663610950_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/affogato1-1663610950.jpg */ \"./src/images/affogato1-1663610950.jpg\");\n/* harmony import */ var _images_zeppole1_1663612195_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/zeppole1-1663612195.jpg */ \"./src/images/zeppole1-1663612195.jpg\");\n/* harmony import */ var _images_negroni_recipe_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/negroni-recipe.jpg */ \"./src/images/negroni-recipe.jpg\");\n/* harmony import */ var _images_wine_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/wine.jpg */ \"./src/images/wine.jpg\");\n/* harmony import */ var _images_amaretto_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/amaretto.jpg */ \"./src/images/amaretto.jpg\");\n/* harmony import */ var _images_champagne_cocktail_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/champagne-cocktail.jpg */ \"./src/images/champagne-cocktail.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction displayMenu(){\n  const pageContent = document.querySelector('#content'); \n  pageContent.className = 'menu';\n  pageContent.appendChild(buildMenuPage());\n}\nfunction buildMenuPage(){\n  const menuHTML = `\n  <!-- Appetizers -->\n  <div class=\"menu-section\" id=\"appetizers\">\n    <h2 class=\"menu-section-name\">Appetizers</h2>\n    <div class=\"menu-items\">\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Brushetta</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_burrata_bruschetta_8_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes brushetta Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">12</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Calamari</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_main_baked_calamari_jpeg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes calamari Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">18</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Antipasto</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_antipasto_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes antipasto Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">20</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Caprese Salad</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_caprese_jpg__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes caprese salad Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">14</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Pasta -->\n  <div class=\"menu-section\" id=\"pasta\">\n    <h2 class=\"menu-section-name\">Pasta</h2>\n    <div class=\"menu-items\">\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Carbonara</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_carbonara_jpg__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes carbonara Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">25</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Marinara</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_marinara_jpg__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes marinara Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">18</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Tortellini Ragu</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_tortellini_jpg__WEBPACK_IMPORTED_MODULE_6__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes tortellini ragu Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">20</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Spagetti with Mussels & Clams</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_Spaghetti_with_Mussels_and_Clams_jpeg__WEBPACK_IMPORTED_MODULE_7__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes mussels and clams Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">30</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Desserts -->\n  <div class=\"menu-section\" id=\"desserts\">\n    <h2 class=\"menu-section-name\">Desserts</h2>\n    <div class=\"menu-items\">\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Tiramisu</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_8__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes tiramisu Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">25</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Canneloni</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_canneloni_jpg__WEBPACK_IMPORTED_MODULE_9__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes canneloni Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">18</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Affogato</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_affogato1_1663610950_jpg__WEBPACK_IMPORTED_MODULE_10__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes Affogato Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">20</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Zeppole</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_zeppole1_1663612195_jpg__WEBPACK_IMPORTED_MODULE_11__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes Zeppole Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">30</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Drinks -->\n  <div class=\"menu-section\" id=\"drinks\">\n    <h2 class=\"menu-section-name\">Drinks</h2>\n    <div class=\"menu-items\">\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Negroni</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_negroni_recipe_jpg__WEBPACK_IMPORTED_MODULE_12__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes carbonara Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">25</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Wine</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_wine_jpg__WEBPACK_IMPORTED_MODULE_13__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes wine Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">see Wine List</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Amaretto</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_amaretto_jpg__WEBPACK_IMPORTED_MODULE_14__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes amaretto Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n        <p class=\"item-price\">20</p>\n      </div>\n\n      <div class=\"menu-item\">\n        <h3 class=\"item-name\">Champagne Cocktail Special</h3>\n        <div class=\"item-image\">\n          <img src=\"${_images_champagne_cocktail_jpg__WEBPACK_IMPORTED_MODULE_15__}\" alt=\"Description 1\" width=\"300\" height=\"200\">\n        </div>\n        <p class=\"item-description\">This describes the cocktail adipisicing elit.</p>\n        <p class=\"item-price\">20</p>\n      </div>\n    </div>\n  </div>\n`;\n  const fragment = document.createDocumentFragment(); // Use a fragment to append multiple top-level elements efficiently\n  //Create the Hero section\n  const menuHeroDiv = document.createElement(\"div\");\n  menuHeroDiv.className = \"menu-hero-section\";\n  const h1Element = document.createElement('h1');\n  h1Element.textContent = 'Menu';\n  menuHeroDiv.appendChild(h1Element);\n  fragment.appendChild(menuHeroDiv); // Add hero section to fragment\n  //add the mini menu\n  const miniMenu = document.createElement('div');\n  miniMenu.className = \"menu-btn-container\";\n  const menuSections = document.createElement('span');\n  menuSections.id = 'menu-sections';\n  miniMenu.appendChild(menuSections);\n  let anchor = document.createElement('a');\n  anchor.href = '#appetizers';\n  let button = document.createElement('button');\n  button.type = 'button';\n  button.textContent = 'Appetizers';\n  anchor.appendChild(button);\n  menuSections.appendChild(anchor);\n  anchor = document.createElement('a');\n  anchor.href = '#pasta';\n  button = document.createElement('button');\n  button.type = 'button';\n  button.textContent = 'Pasta';\n  anchor.appendChild(button);\n  menuSections.appendChild(anchor);\n  anchor = document.createElement('a');\n  anchor.href = '#desserts';\n  button = document.createElement('button');\n  button.type = 'button';\n  button.textContent = 'Desserts';\n  anchor.appendChild(button);\n  menuSections.appendChild(anchor);\n  anchor = document.createElement('a');\n  anchor.href = '#drinks';\n  button = document.createElement('button');\n  button.type = 'button';\n  button.textContent = 'Drinks';\n  anchor.appendChild(button);\n  menuSections.appendChild(anchor);\n  fragment.appendChild(miniMenu);\n\n  const menu = document.createElement('div');\n  menu.className = 'menu';\n  menu.innerHTML = menuHTML;\n  fragment.appendChild(menu);\n\n  return fragment; // Return the fragment containing both sections\n}\n\n//# sourceURL=webpack://odin-restaurant-project/./src/menu.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-project/./src/styles.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;