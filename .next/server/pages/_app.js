(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\dani\\PROGI\\reactintl-nextjs\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import all locales through barrel file
// import * as locales  from "../content/locale";



function MyApp({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    locale,
    defaultLocale,
    pathname
  } = router;
  const messages = {
    en: {
      BASIC: "Basic sentence",
      GREETING: "Hello {name}  <strong> strong</strong>",
      PLURAL: "This will be plural :{amount, plural, =0 {no languages} one {# one language}  other {# languages}}",
      FUNC: "függvény <b> tag-el",
      SWITCH: "Switc: {gender, select,male {He} female {She} other {They} } will respond shortly."
    },
    hu: {
      BASIC: "Alap mondat",
      GREETING: "Szia {name} <strong> kiemelt</strong>",
      PLURAL: "Ez plural lesz {amount, plural, =0 {no languages} one {# egy nyelv} other {# nyelvek}}",
      FUNC: "Function with <b> tag",
      SWITCH: "Switc: {gender, select,male {Ő} female {Ő} other {Ő}} hamarosan válaszol."
    }
  };
  const local = locale ? locale : "hu";
  const mess = messages[local.toString()];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_1__.IntlProvider, {
    locale: local,
    defaultLocale: "en",
    messages: mess,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-intl");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0aW50Ly4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV4dGludC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGludC9leHRlcm5hbCBcInJlYWN0LWludGxcIiIsIndlYnBhY2s6Ly9uZXh0aW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwicGF0aG5hbWUiLCJtZXNzYWdlcyIsImVuIiwiQkFTSUMiLCJHUkVFVElORyIsIlBMVVJBTCIsIkZVTkMiLCJTV0lUQ0giLCJodSIsImxvY2FsIiwibWVzcyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTtBQUNBOztBQUVBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUE4QztBQUM1QyxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLGlCQUFWO0FBQXlCQztBQUF6QixNQUFzQ0osTUFBNUM7QUFFQSxRQUFNSyxRQUFzRCxHQUFHO0FBQzdEQyxNQUFFLEVBQUU7QUFDRkMsV0FBSyxFQUFFLGdCQURMO0FBRUZDLGNBQVEsRUFBRSx3Q0FGUjtBQUdGQyxZQUFNLEVBQ0osb0dBSkE7QUFLRkMsVUFBSSxFQUFFLHFCQUxKO0FBTUZDLFlBQU0sRUFDSjtBQVBBLEtBRHlEO0FBVTdEQyxNQUFFLEVBQUU7QUFDRkwsV0FBSyxFQUFFLGFBREw7QUFFRkMsY0FBUSxFQUFFLHVDQUZSO0FBR0ZDLFlBQU0sRUFDSix3RkFKQTtBQUtGQyxVQUFJLEVBQUUsdUJBTEo7QUFNRkMsWUFBTSxFQUNKO0FBUEE7QUFWeUQsR0FBL0Q7QUFxQkEsUUFBTUUsS0FBSyxHQUFHWCxNQUFNLEdBQUdBLE1BQUgsR0FBWSxJQUFoQztBQUVBLFFBQU1ZLElBQUksR0FBR1QsUUFBUSxDQUFDUSxLQUFLLENBQUNFLFFBQU4sRUFBRCxDQUFyQjtBQUNBLHNCQUNFLDhEQUFDLG9EQUFEO0FBQWMsVUFBTSxFQUFFRixLQUF0QjtBQUE2QixpQkFBYSxFQUFFLElBQTVDO0FBQWtELFlBQVEsRUFBRUMsSUFBNUQ7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlZixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFRCwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0EseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCBhbGwgbG9jYWxlcyB0aHJvdWdoIGJhcnJlbCBmaWxlXG4vLyBpbXBvcnQgKiBhcyBsb2NhbGVzICBmcm9tIFwiLi4vY29udGVudC9sb2NhbGVcIjtcbmltcG9ydCB7IGVuLCBodSB9IGZyb20gXCIuLi9jb250ZW50L2xvY2FsZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxvY2FsZSwgZGVmYXVsdExvY2FsZSwgcGF0aG5hbWUgfSA9IHJvdXRlcjtcblxuICBjb25zdCBtZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IH0gPSB7XG4gICAgZW46IHtcbiAgICAgIEJBU0lDOiBcIkJhc2ljIHNlbnRlbmNlXCIsXG4gICAgICBHUkVFVElORzogXCJIZWxsbyB7bmFtZX0gIDxzdHJvbmc+IHN0cm9uZzwvc3Ryb25nPlwiLFxuICAgICAgUExVUkFMOlxuICAgICAgICBcIlRoaXMgd2lsbCBiZSBwbHVyYWwgOnthbW91bnQsIHBsdXJhbCwgPTAge25vIGxhbmd1YWdlc30gb25lIHsjIG9uZSBsYW5ndWFnZX0gIG90aGVyIHsjIGxhbmd1YWdlc319XCIsXG4gICAgICBGVU5DOiBcImbDvGdndsOpbnkgPGI+IHRhZy1lbFwiLFxuICAgICAgU1dJVENIOlxuICAgICAgICBcIlN3aXRjOiB7Z2VuZGVyLCBzZWxlY3QsbWFsZSB7SGV9IGZlbWFsZSB7U2hlfSBvdGhlciB7VGhleX0gfSB3aWxsIHJlc3BvbmQgc2hvcnRseS5cIixcbiAgICB9LFxuICAgIGh1OiB7XG4gICAgICBCQVNJQzogXCJBbGFwIG1vbmRhdFwiLFxuICAgICAgR1JFRVRJTkc6IFwiU3ppYSB7bmFtZX0gPHN0cm9uZz4ga2llbWVsdDwvc3Ryb25nPlwiLFxuICAgICAgUExVUkFMOlxuICAgICAgICBcIkV6IHBsdXJhbCBsZXN6IHthbW91bnQsIHBsdXJhbCwgPTAge25vIGxhbmd1YWdlc30gb25lIHsjIGVneSBueWVsdn0gb3RoZXIgeyMgbnllbHZla319XCIsXG4gICAgICBGVU5DOiBcIkZ1bmN0aW9uIHdpdGggPGI+IHRhZ1wiLFxuICAgICAgU1dJVENIOlxuICAgICAgICBcIlN3aXRjOiB7Z2VuZGVyLCBzZWxlY3QsbWFsZSB7xZB9IGZlbWFsZSB7xZB9IG90aGVyIHvFkH19IGhhbWFyb3NhbiB2w6FsYXN6b2wuXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBsb2NhbCA9IGxvY2FsZSA/IGxvY2FsZSA6IFwiaHVcIjtcblxuICBjb25zdCBtZXNzID0gbWVzc2FnZXNbbG9jYWwudG9TdHJpbmcoKV07XG4gIHJldHVybiAoXG4gICAgPEludGxQcm92aWRlciBsb2NhbGU9e2xvY2FsfSBkZWZhdWx0TG9jYWxlPXtcImVuXCJ9IG1lc3NhZ2VzPXttZXNzfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0ludGxQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50bFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9