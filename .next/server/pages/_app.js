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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_1__.IntlProvider, {
    locale: "en",
    defaultLocale: "en",
    messages: messages["en"],
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0aW50Ly4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbmV4dGludC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGludC9leHRlcm5hbCBcInJlYWN0LWludGxcIiIsIndlYnBhY2s6Ly9uZXh0aW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwicGF0aG5hbWUiLCJtZXNzYWdlcyIsImVuIiwiQkFTSUMiLCJHUkVFVElORyIsIlBMVVJBTCIsIkZVTkMiLCJTV0lUQ0giLCJodSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBOEM7QUFDNUMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUMsVUFBRjtBQUFVQyxpQkFBVjtBQUF5QkM7QUFBekIsTUFBc0NKLE1BQTVDO0FBRUEsUUFBTUssUUFBUSxHQUFHO0FBQ2ZDLE1BQUUsRUFBRTtBQUNGQyxXQUFLLEVBQUUsZ0JBREw7QUFFRkMsY0FBUSxFQUFFLHdDQUZSO0FBR0ZDLFlBQU0sRUFDSixvR0FKQTtBQUtGQyxVQUFJLEVBQUUscUJBTEo7QUFNRkMsWUFBTSxFQUNKO0FBUEEsS0FEVztBQVVmQyxNQUFFLEVBQUU7QUFDRkwsV0FBSyxFQUFFLGFBREw7QUFFRkMsY0FBUSxFQUFFLHVDQUZSO0FBR0ZDLFlBQU0sRUFDSix3RkFKQTtBQUtGQyxVQUFJLEVBQUUsdUJBTEo7QUFNRkMsWUFBTSxFQUNKO0FBUEE7QUFWVyxHQUFqQjtBQXFCQSxzQkFDRSw4REFBQyxvREFBRDtBQUFjLFVBQU0sRUFBRSxJQUF0QjtBQUE0QixpQkFBYSxFQUFFLElBQTNDO0FBQWlELFlBQVEsRUFBRU4sUUFBUSxDQUFDLElBQUQsQ0FBbkU7QUFBQSwyQkFDRSw4REFBQyxTQUFELG9CQUFlTixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFRCwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0EseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGltcG9ydCBhbGwgbG9jYWxlcyB0aHJvdWdoIGJhcnJlbCBmaWxlXG4vLyBpbXBvcnQgKiBhcyBsb2NhbGVzICBmcm9tIFwiLi4vY29udGVudC9sb2NhbGVcIjtcbmltcG9ydCB7IGVuLCBodSB9IGZyb20gXCIuLi9jb250ZW50L2xvY2FsZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogYW55KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxvY2FsZSwgZGVmYXVsdExvY2FsZSwgcGF0aG5hbWUgfSA9IHJvdXRlcjtcblxuICBjb25zdCBtZXNzYWdlcyA9IHtcbiAgICBlbjoge1xuICAgICAgQkFTSUM6IFwiQmFzaWMgc2VudGVuY2VcIixcbiAgICAgIEdSRUVUSU5HOiBcIkhlbGxvIHtuYW1lfSAgPHN0cm9uZz4gc3Ryb25nPC9zdHJvbmc+XCIsXG4gICAgICBQTFVSQUw6XG4gICAgICAgIFwiVGhpcyB3aWxsIGJlIHBsdXJhbCA6e2Ftb3VudCwgcGx1cmFsLCA9MCB7bm8gbGFuZ3VhZ2VzfSBvbmUgeyMgb25lIGxhbmd1YWdlfSAgb3RoZXIgeyMgbGFuZ3VhZ2VzfX1cIixcbiAgICAgIEZVTkM6IFwiZsO8Z2d2w6lueSA8Yj4gdGFnLWVsXCIsXG4gICAgICBTV0lUQ0g6XG4gICAgICAgIFwiU3dpdGM6IHtnZW5kZXIsIHNlbGVjdCxtYWxlIHtIZX0gZmVtYWxlIHtTaGV9IG90aGVyIHtUaGV5fSB9IHdpbGwgcmVzcG9uZCBzaG9ydGx5LlwiLFxuICAgIH0sXG4gICAgaHU6IHtcbiAgICAgIEJBU0lDOiBcIkFsYXAgbW9uZGF0XCIsXG4gICAgICBHUkVFVElORzogXCJTemlhIHtuYW1lfSA8c3Ryb25nPiBraWVtZWx0PC9zdHJvbmc+XCIsXG4gICAgICBQTFVSQUw6XG4gICAgICAgIFwiRXogcGx1cmFsIGxlc3oge2Ftb3VudCwgcGx1cmFsLCA9MCB7bm8gbGFuZ3VhZ2VzfSBvbmUgeyMgZWd5IG55ZWx2fSBvdGhlciB7IyBueWVsdmVrfX1cIixcbiAgICAgIEZVTkM6IFwiRnVuY3Rpb24gd2l0aCA8Yj4gdGFnXCIsXG4gICAgICBTV0lUQ0g6XG4gICAgICAgIFwiU3dpdGM6IHtnZW5kZXIsIHNlbGVjdCxtYWxlIHvFkH0gZmVtYWxlIHvFkH0gb3RoZXIge8WQfX0gaGFtYXJvc2FuIHbDoWxhc3pvbC5cIixcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEludGxQcm92aWRlciBsb2NhbGU9e1wiZW5cIn0gZGVmYXVsdExvY2FsZT17XCJlblwifSBtZXNzYWdlcz17bWVzc2FnZXNbXCJlblwiXX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9JbnRsUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==