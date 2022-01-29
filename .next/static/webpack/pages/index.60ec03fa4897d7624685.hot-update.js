self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Practice\\Portfolio\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined;




var data = [{
  number: 20,
  text: 'Open Source Projects'
},
/* { number: 1000, text: 'Students' }, */
{
  number: 17,
  text: 'Github Repositories'
}, {
  number: 3,
  text: 'Github Stars'
}];

var Acomplishments = function Acomplishments() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      children: " Personal Acomplishments "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
      children: [" ", data.map(function (card, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
            children: [" ", card.number, " + "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
            children: [" ", card.text, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 51
          }, _this), " "]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 37
        }, _this);
      }), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 61
    }, _this), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 32
  }, _this);
};

_c = Acomplishments;
/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

var _c;

$RefreshReg$(_c, "Acomplishments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGF0YSIsIm51bWJlciIsInRleHQiLCJBY29tcGxpc2htZW50cyIsIm1hcCIsImNhcmQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFLQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQUVDLFFBQU0sRUFBRSxFQUFWO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQURTO0FBRVQ7QUFDQTtBQUFFRCxRQUFNLEVBQUUsRUFBVjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIUyxFQUlUO0FBQUVELFFBQU0sRUFBRSxDQUFWO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQUpTLENBQWI7O0FBT0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHNCQUFRLDhEQUMzQiw2REFEMkI7QUFBQSw0QkFFM0IsOERBQ0Esa0VBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGMkIsb0JBRzZCLDhEQUN4RCx3REFEd0Q7QUFBQSxzQkFFcERILElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUFtQiw4REFDeEIsc0RBRHdCO0FBQUEsa0NBRXhCLDhEQUNBLHlEQURBO0FBQUEsNEJBQ1dELElBQUksQ0FBQ0osTUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZ3QixvQkFHYyw4REFDdEMsMERBRHNDO0FBQUEsNEJBQzFCSSxJQUFJLENBQUNILElBRHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIZDtBQUFBLFdBQ1pJLEtBRFk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBbkI7QUFBQSxPQUFULENBRm9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUg3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQUFBLENBQXZCOztLQUFNSCxjO0FBaUJOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYwZWMwM2ZhNDg5N2Q3NjI0Njg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIFNlY3Rpb24sXHJcbiAgICBTZWN0aW9uRGl2aWRlcixcclxuICAgIFNlY3Rpb25UaXRsZSxcclxufSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJveCwgQm94ZXMsIEJveE51bSwgQm94VGV4dCB9IGZyb20gJy4vQWNvbXBsaXNobWVudHNTdHlsZXMnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHsgbnVtYmVyOiAyMCwgdGV4dDogJ09wZW4gU291cmNlIFByb2plY3RzJyB9LFxyXG4gICAgLyogeyBudW1iZXI6IDEwMDAsIHRleHQ6ICdTdHVkZW50cycgfSwgKi9cclxuICAgIHsgbnVtYmVyOiAxNywgdGV4dDogJ0dpdGh1YiBSZXBvc2l0b3JpZXMnIH0sXHJcbiAgICB7IG51bWJlcjogMywgdGV4dDogJ0dpdGh1YiBTdGFycycgfSxcclxuXTtcclxuXHJcbmNvbnN0IEFjb21wbGlzaG1lbnRzID0gKCkgPT4gKCA8XHJcbiAgICBTZWN0aW9uID5cclxuICAgIDxcclxuICAgIFNlY3Rpb25UaXRsZSA+IFBlcnNvbmFsIEFjb21wbGlzaG1lbnRzIDwgL1NlY3Rpb25UaXRsZT4gPFxyXG4gICAgQm94ZXMgPiB7XHJcbiAgICAgICAgZGF0YS5tYXAoKGNhcmQsIGluZGV4KSA9PiAoIDxcclxuICAgICAgICAgICAgQm94IGtleSA9IHsgaW5kZXggfSA+XHJcbiAgICAgICAgICAgIDxcclxuICAgICAgICAgICAgQm94TnVtID4geyBjYXJkLm51bWJlciB9ICsgPCAvQm94TnVtPiA8XHJcbiAgICAgICAgICAgIEJveFRleHQgPiB7IGNhcmQudGV4dCB9IDwgL0JveFRleHQ+IDwgL1xyXG4gICAgICAgICAgICBCb3ggPlxyXG4gICAgICAgICkpXHJcbiAgICB9IDxcclxuICAgIC9Cb3hlcz4gPCAvXHJcbiAgICBTZWN0aW9uID5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjb21wbGlzaG1lbnRzOyJdLCJzb3VyY2VSb290IjoiIn0=