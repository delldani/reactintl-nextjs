(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\dani\\PROGI\\reactintl-nextjs\\pages\\index.tsx";



function IndexPage(props) {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();

  const f = id => formatMessage({
    id
  });

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    locale,
    locales,
    defaultLocale
  } = router;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "GREETING",
      defaultMessage: "Hello D!",
      values: {
        name: "Dani",
        strong: word => {
          /*#__PURE__*/
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: word
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this);
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedNumber, {
      value: 19,
      style: "currency",
      currency: "EUR"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedPlural, {
      value: 1,
      one: "message",
      other: "messages"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "PLURAL",
      defaultMessage: "ez plral  :{amount, plural, =0 {no languages} one {# one language} few {# several languages} many {# lots of languages} other {# wrong format}}",
      values: {
        amount: 2
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "FUNC",
      children: txt => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: txt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 45
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
      id: "SWITCH",
      values: {
        gender: "female"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {
      value: new Date("2013, 03, 09"),
      year: "numeric",
      month: "long",
      day: "2-digit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0aW50Ly4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL25leHRpbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHRpbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRpbnQvZXh0ZXJuYWwgXCJyZWFjdC1pbnRsXCIiLCJ3ZWJwYWNrOi8vbmV4dGludC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInByb3BzIiwiZm9ybWF0TWVzc2FnZSIsInVzZUludGwiLCJmIiwiaWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsIm5hbWUiLCJzdHJvbmciLCJ3b3JkIiwiYW1vdW50IiwidHh0IiwiZ2VuZGVyIiwiRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBK0I7QUFDNUMsUUFBTTtBQUFFQztBQUFGLE1BQW9CQyxtREFBTyxFQUFqQzs7QUFDQSxRQUFNQyxDQUFDLEdBQUlDLEVBQUQsSUFBYUgsYUFBYSxDQUFDO0FBQUVHO0FBQUYsR0FBRCxDQUFwQzs7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLFdBQVY7QUFBbUJDO0FBQW5CLE1BQXFDSixNQUEzQztBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxRQUFFLEVBQUMsVUFETDtBQUVFLG9CQUFjLEVBQUMsVUFGakI7QUFHRSxZQUFNLEVBQUU7QUFDTkssWUFBSSxFQUFFLE1BREE7QUFFTkMsY0FBTSxFQUFHQyxJQUFELElBQWtCO0FBQ3hCO0FBQUE7QUFBQSxzQkFBU0E7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Q7QUFKSztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQWFFLDhEQUFDLHVEQUFEO0FBQWlCLFdBQUssRUFBRSxFQUF4QjtBQUE0QixXQUFLLEVBQUMsVUFBbEM7QUFBNkMsY0FBUSxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQWVFLDhEQUFDLHVEQUFEO0FBQWlCLFdBQUssRUFBRSxDQUF4QjtBQUEyQixTQUFHLEVBQUMsU0FBL0I7QUFBeUMsV0FBSyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixlQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBaUJFLDhEQUFDLHdEQUFEO0FBQ0UsUUFBRSxFQUFDLFFBREw7QUFFRSxvQkFBYyxFQUFDLGlKQUZqQjtBQUdFLFlBQU0sRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVjtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsZUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRixlQXVCRSw4REFBQyx3REFBRDtBQUFrQixRQUFFLEVBQUMsTUFBckI7QUFBQSxnQkFBOEJDLEdBQUQsaUJBQVM7QUFBQSxrQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkYsZUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRixlQXlCRSw4REFBQyx3REFBRDtBQUFrQixRQUFFLEVBQUMsUUFBckI7QUFBOEIsWUFBTSxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFWO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkYsZUEwQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRixlQTJCRSw4REFBQyxxREFBRDtBQUNFLFdBQUssRUFBRSxJQUFJQyxJQUFKLENBQVMsY0FBVCxDQURUO0FBRUUsVUFBSSxFQUFDLFNBRlA7QUFHRSxXQUFLLEVBQUMsTUFIUjtBQUlFLFNBQUcsRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0QsQzs7Ozs7Ozs7Ozs7QUNwREQseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gIHVzZUludGwsXG4gIEZvcm1hdHRlZE1lc3NhZ2UsXG4gIEZvcm1hdHRlZE51bWJlcixcbiAgRm9ybWF0dGVkUGx1cmFsLFxuICBGb3JtYXR0ZWREYXRlLFxufSBmcm9tIFwicmVhY3QtaW50bFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UocHJvcHM6IGFueSkge1xuICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHVzZUludGwoKTtcbiAgY29uc3QgZiA9IChpZDogYW55KSA9PiBmb3JtYXRNZXNzYWdlKHsgaWQgfSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxvY2FsZSwgbG9jYWxlcywgZGVmYXVsdExvY2FsZSB9ID0gcm91dGVyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgIGlkPVwiR1JFRVRJTkdcIlxuICAgICAgICBkZWZhdWx0TWVzc2FnZT1cIkhlbGxvIEQhXCJcbiAgICAgICAgdmFsdWVzPXt7XG4gICAgICAgICAgbmFtZTogXCJEYW5pXCIsXG4gICAgICAgICAgc3Ryb25nOiAod29yZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICA8c3Ryb25nPnt3b3JkfTwvc3Ryb25nPjtcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8Rm9ybWF0dGVkTnVtYmVyIHZhbHVlPXsxOX0gc3R5bGU9XCJjdXJyZW5jeVwiIGN1cnJlbmN5PVwiRVVSXCIgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPEZvcm1hdHRlZFBsdXJhbCB2YWx1ZT17MX0gb25lPVwibWVzc2FnZVwiIG90aGVyPVwibWVzc2FnZXNcIiAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICBpZD1cIlBMVVJBTFwiXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlPVwiZXogcGxyYWwgIDp7YW1vdW50LCBwbHVyYWwsID0wIHtubyBsYW5ndWFnZXN9IG9uZSB7IyBvbmUgbGFuZ3VhZ2V9IGZldyB7IyBzZXZlcmFsIGxhbmd1YWdlc30gbWFueSB7IyBsb3RzIG9mIGxhbmd1YWdlc30gb3RoZXIgeyMgd3JvbmcgZm9ybWF0fX1cIlxuICAgICAgICB2YWx1ZXM9e3sgYW1vdW50OiAyIH19XG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cIkZVTkNcIj57KHR4dCkgPT4gPGI+e3R4dH08L2I+fTwvRm9ybWF0dGVkTWVzc2FnZT5cbiAgICAgIDxiciAvPlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJTV0lUQ0hcIiB2YWx1ZXM9e3sgZ2VuZGVyOiBcImZlbWFsZVwiIH19IC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxGb3JtYXR0ZWREYXRlXG4gICAgICAgIHZhbHVlPXtuZXcgRGF0ZShcIjIwMTMsIDAzLCAwOVwiKX1cbiAgICAgICAgeWVhcj1cIm51bWVyaWNcIlxuICAgICAgICBtb250aD1cImxvbmdcIlxuICAgICAgICBkYXk9XCIyLWRpZ2l0XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==