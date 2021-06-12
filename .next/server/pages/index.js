(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");

var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\components\\Acomplishments\\Acomplishments.js";



const data = [{
  number: 20,
  text: 'Open Source Projects'
}, {
  number: 1000,
  text: 'Students'
}, {
  number: 1900,
  text: 'Github Followers'
}, {
  number: 5000,
  text: 'Github Stars'
}];

const Acomplishments = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Personal Acomplishments"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
    children: data.map((card, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
        children: [" ", card.number, "+ "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
        children: [" ", card.text, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

/***/ }),

/***/ "./src/components/Acomplishments/AcomplishmentsStyles.js":
/*!***************************************************************!*\
  !*** ./src/components/Acomplishments/AcomplishmentsStyles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Boxes = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Boxes",
  componentId: "vuq5bz-0"
})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ", "{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ", "{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Box",
  componentId: "vuq5bz-1"
})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ", "{height:210px;}@media ", "{height:135px;padding:16px;}@media ", "{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxNum = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__BoxNum",
  componentId: "vuq5bz-2"
})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:28px;line-height:32px;}@media ", "{font-size:24px;line-height:26px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AcomplishmentsStyles__BoxText",
  componentId: "vuq5bz-3"
})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:20px;};@media ", "{font-size:10px;line-height:14px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Join = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Join",
  componentId: "vuq5bz-4"
})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ", "{display:flex;justify-content:center;padding-bottom:64px;}@media ", "{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const JoinText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__JoinText",
  componentId: "vuq5bz-5"
})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ", "{line-height:32px;font-size:20px;};@media ", "{font-size:16px;line-height:24px;margin:0 0 16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__IconContainer",
  componentId: "vuq5bz-6"
})(["display:flex;@media ", "{width:160px;justify-content:space-between;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/BackgrooundAnimation/BackgroundAnimation.js":
/*!********************************************************************!*\
  !*** ./src/components/BackgrooundAnimation/BackgroundAnimation.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\components\\BackgrooundAnimation\\BackgroundAnimation.js";


const BackgroundAnimation = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    className: "BgAnimation__svg",
    viewBox: "0 0 602 602",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      opacity: "0.15",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
        stroke: "url(#paint0_radial)",
        id: "path_0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
        stroke: "url(#paint1_radial)",
        id: "path_1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
        stroke: "url(#paint2_radial)",
        id: "path_2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint3_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint4_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "382.164",
      cy: "155.029",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M381.81 154.669L356.057 128.885",
      transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
      stroke: "url(#paint5_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "333.324",
      cy: "382.691",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M333.667 382.335L359.42 356.551",
      transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
      stroke: "url(#paint6_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "165.524",
      cy: "93.9596",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-165.524 -93.9596)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M165.182 94.3159L139.429 120.1",
      transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#13ADC7",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint11_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint0_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint1_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint2_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint3_linear",
        x1: "295.043",
        y1: "193.116",
        x2: "269.975",
        y2: "218.154",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint4_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint5_linear",
        x1: "382.168",
        y1: "155.027",
        x2: "357.1",
        y2: "129.989",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint6_linear",
        x1: "333.309",
        y1: "382.693",
        x2: "358.376",
        y2: "357.655",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint7_linear",
        x1: "165.54",
        y1: "93.9578",
        x2: "140.472",
        y2: "118.996",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint8_linear",
        x1: "414.367",
        y1: "301.156",
        x2: "439.435",
        y2: "276.118",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint9_linear",
        x1: "515.943",
        y1: "288.238",
        x2: "541.339",
        y2: "291.454",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint10_linear",
        x1: "117.001",
        y1: "230.619",
        x2: "117.36",
        y2: "258.193",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint11_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var _FooterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterStyles */ "./src/components/Footer/FooterStyles.js");

var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\components\\Footer\\Footer.js";





const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.FooterWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkList, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkTitle, {
          children: "Call"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkItem, {
          href: "tel:+21655795050",
          children: "+216 55 79 50 50"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkTitle, {
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkItem, {
          href: "mailto:malekhaddar8@gmail.com",
          children: "malekhaddar8@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIconsContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.CompanyContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.Slogan, {
          children: "Innovating one project at a time !"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.SocialContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://github.com/Malek-Haddar",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://www.linkedin.com/in/malek-haddar-288304182/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://www.instagram.com/malik_haddar/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillInstagram, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/FooterStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/FooterStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterWrapper": function() { return /* binding */ FooterWrapper; },
/* harmony export */   "LinkItem": function() { return /* binding */ LinkItem; },
/* harmony export */   "SocialIconsContainer": function() { return /* binding */ SocialIconsContainer; },
/* harmony export */   "CompanyContainer": function() { return /* binding */ CompanyContainer; },
/* harmony export */   "Slogan": function() { return /* binding */ Slogan; },
/* harmony export */   "SocialContainer": function() { return /* binding */ SocialContainer; },
/* harmony export */   "LinkList": function() { return /* binding */ LinkList; },
/* harmony export */   "LinkColumn": function() { return /* binding */ LinkColumn; },
/* harmony export */   "LinkTitle": function() { return /* binding */ LinkTitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "FooterStyles__FooterWrapper",
  componentId: "sc-1ifsifd-0"
})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ", "{padding:0 16px 48px;width:calc(100vw - 32px);}"], props => props.theme.breakpoints.sm);
const LinkItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "FooterStyles__LinkItem",
  componentId: "sc-1ifsifd-1"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ", "{font-size:16px;line-height:28px;display:flex;}@media ", "{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialIconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__SocialIconsContainer",
  componentId: "sc-1ifsifd-2"
})(["max-width:1040px;display:flex;justify-content:space-between;@media ", "{display:flex;justify-content:space-between;}@media ", "{display:flex;width:100%;flex-direction:column;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__CompanyContainer",
  componentId: "sc-1ifsifd-3"
})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ", "{flex-direction:column;align-items:baseline;}@media ", "{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Slogan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "FooterStyles__Slogan",
  componentId: "sc-1ifsifd-4"
})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ", "{font-size:16px;line-height:28px;}@media ", "{line-height:22px;font-size:14px;min-width:100px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__SocialContainer",
  componentId: "sc-1ifsifd-5"
})(["display:flex;align-items:center;@media ", "{justify-content:center;padding-right:16px;flex-wrap:wrap;}"], props => props.theme.breakpoints.md);
const LinkList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "FooterStyles__LinkList",
  componentId: "sc-1ifsifd-6"
})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ", "{padding:32px 0 16px;}@media ", "{width:100%;padding:32px 0 16px;gap:16px;}@media ", "{width:100%;padding:32px 4px 16px;gap:5px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const LinkColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__LinkColumn",
  componentId: "sc-1ifsifd-7"
})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]);
const LinkTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "FooterStyles__LinkTitle",
  componentId: "sc-1ifsifd-8"
})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ", "{font-size:10px;line-height:12px;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyles */ "./src/components/Header/HeaderStyles.js");

var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\components\\Header\\Header.js";






const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div1, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        style: {
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          marginBottom: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiCssdeck, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Span, {
          children: "Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 37
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div2, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#projects",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#tech",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Technologies"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#about",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://github.com/Malek-Haddar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://www.linkedin.com/in/malek-haddar-288304182/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillLinkedin, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://www.instagram.com/malik_haddar/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillInstagram, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Span": function() { return /* binding */ Span; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], props => props.theme.breakpoints.sm);
const Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "HeaderStyles__Span",
  componentId: "sc-9w0vkp-1"
})(["font-size:3rem;"]);
const Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-2"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], props => props.theme.breakpoints.sm);
const Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], props => props.theme.breakpoints.sm);
const Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-4"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], props => props.theme.breakpoints.sm); // Navigation Links

const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-5"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], props => props.theme.breakpoints.sm); /// DropDown Contact

const ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-6"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-7"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], ({
  isOpen
}) => isOpen ? '1' : '.75', ({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)', props => props.theme.breakpoints.sm); // Social Icons

const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-8"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Projects/ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");

var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\components\\Hero\\Hero.js";






const Hero = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
  row: true,
  nopadding: true,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_5__.LeftSection, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      main: true,
      center: true,
      children: ["Welcome To ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 20
      }, undefined), "My Personal Portfolio"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "The purpose of this portfolio is to present my self to the world and take my development skills to the next level."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_4__.default, {
      onClick: () => window.location = 'https://www.linkedin.com/in/malek-haddar-288304182/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACsdoIgBlzo-YgtBNkaQvwKn9MXB7tiA1gI,1635458032425)/',
      children: "Learn More"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Hero/HeroStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Hero/HeroStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftSection": function() { return /* binding */ LeftSection; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroStyles__LeftSection",
  componentId: "pbjia3-0"
})(["width:100%;@media ", "{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ", "{width:100%;display:flex;flex-direction:column;margin:0 auto;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");

var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\components\\Projects\\Projects.js";





const Projects = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
  nopadding: true,
  id: "projects",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
    main: true,
    children: "Projects"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.map(({
      id,
      image,
      title,
      description,
      tags,
      source,
      visit
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
        src: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
          title: true,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
          children: "Stack"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
          children: tags.map((tag, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
            children: tag
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 19
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
          href: visit,
          children: " Code "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
          href: source,
          children: " Preview "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, undefined)]
    }, id, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 24,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ", "{width:100%;}"], props => props.theme.breakpoints.sm);
const TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-3"
})(["text-align:center;z-index:20;width:100%;"]);
const HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-4"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:", ";"], props => props.title ? '3rem' : '2rem');
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
const CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-7"
})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ", "{padding:.3rem}"], props => props.theme.breakpoints.sm);
const UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
const ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "l76idc-9"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-10"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-11"
})(["color:#d8bfbf;font-size:1.5rem;"]);

/***/ }),

/***/ "./src/components/Technologies/Technologies.js":
/*!*****************************************************!*\
  !*** ./src/components/Technologies/Technologies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TechnologiesStyles */ "./src/components/Technologies/TechnologiesStyles.js");

var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\components\\Technologies\\Technologies.js";





const Technologies = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  id: "tech",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Technologies"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
    children: ["I've worked with a range a technologies in the web development world. From Back-end To Design", ' ']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.List, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiReact, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Front-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 29
          }, undefined), "React.js"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiFirebase, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Back-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, undefined), "Node and Databases"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiZend, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "UI/UX"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 29
          }, undefined), "tools like Figma"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./src/components/Technologies/TechnologiesStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ImageContainer",
  componentId: "sc-1ehw0pq-0"
})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{background-image:none;padding:0;margin-top:40px;}@media ", "{background-image:none;padding:0;margin-top:16px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md);
const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__MainImage",
  componentId: "sc-1ehw0pq-1"
})(["width:100%;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TechnologiesStyles__List",
  componentId: "sc-1ehw0pq-2"
})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ", "{margin:64px 0;}@media ", "{margin:64px 0;gap:24px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ListContainer",
  componentId: "sc-1ehw0pq-3"
})(["display:flex;flex-direction:column;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TechnologiesStyles__ListTitle",
  componentId: "sc-1ehw0pq-4"
})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TechnologiesStyles__ListParagraph",
  componentId: "sc-1ehw0pq-5"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "TechnologiesStyles__ListItem",
  componentId: "sc-1ehw0pq-6"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__ListIcon",
  componentId: "sc-1ehw0pq-7"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");


var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\components\\TimeLine\\TimeLine.js";




const TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

const Timeline = () => {
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const scroll = (node, left) => {
    return node.scrollTo({
      left,
      behavior: 'smooth'
    });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "I am a self-taught web developer with a strong eye for innovative technologies and a keen understanding of techniques geared toward optimum user experience"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
          final: index === TOTAL_CAROUSEL_COUNT - 1,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
            index: index,
            id: `carousel__item-${index}`,
            active: activeItem,
            onClick: e => handleClick(e, index),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
              children: [`${item.year}`, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                width: "208",
                height: "6",
                viewBox: "0 0 208 6",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                  fill: "url(#paint0_linear)",
                  "fill-opacity": "0.33"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                    id: "paint0_linear",
                    x1: "-4.30412e-10",
                    y1: "0.5",
                    x2: "208",
                    y2: "0.500295",
                    gradientUnits: "userSpaceOnUse",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      "stop-color": "white"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      offset: "0.79478",
                      "stop-color": "white",
                      "stop-opacity": "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, undefined))
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: e => handleClick(e, index),
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TimeLineStyles__CarouselContainer",
  componentId: "vs8qb6-0"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
const CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselMobileScrollNode",
  componentId: "vs8qb6-1"
})(["@media ", "{display:flex;min-width:", "}"], props => props.theme.breakpoints.sm, ({
  final
}) => final ? `120%;` : `min-content`);
const CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselItem",
  componentId: "vs8qb6-2"
})(["background:#0F1624;border-radius:3px;max-width:196px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`);
const CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TimeLineStyles__CarouselItemTitle",
  componentId: "vs8qb6-3"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "TimeLineStyles__CarouselItemImg",
  componentId: "vs8qb6-4"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], props => props.theme.breakpoints.sm);
const CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TimeLineStyles__CarouselItemText",
  componentId: "vs8qb6-5"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtons",
  componentId: "vs8qb6-6"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], props => props.theme.breakpoints.sm);
const CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "TimeLineStyles__CarouselButton",
  componentId: "vs8qb6-7"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], props => props.active === props.index ? `1` : `.33`, props => props.active === props.index ? `scale(1.6)` : `scale(1)`);
const CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtonDot",
  componentId: "vs8qb6-8"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
const projects = [{
  title: 'PI Dev',
  description: 'Developed a web application that let users with the help of a chatbot create their professional CV, enroll in online courses, and get courses, events, and job suggestions based on their skills (React, Node js, Express, MongoDB, Firebase, Dialogflow … )',
  image: '/images/home.jpg',
  tags: ['Mongo', 'Express', 'React', 'Node'],
  source: 'https://blitz-assistant.herokuapp.com/',
  visit: 'https://github.com/Malek-Haddar/Elite-devs-Blitz-Chatbot',
  id: 0
}, {
  title: 'E-Commerce',
  description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
  image: '/images/2.png',
  tags: ['React', 'JavaScript'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'WebRTC App',
  description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
  image: '/images/3.jpg',
  tags: ['React', 'WebRTC'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Unichat',
  description: 'This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application',
  image: '/images/4.jpg',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}];
const TimeLineData = [{
  year: 2016,
  text: 'Started my journey'
}, {
  year: 2018,
  text: 'Worked as a freelance developer'
}, {
  year: 2019,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Started my own platform'
}];

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _LayoutStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutStyles */ "./src/layout/LayoutStyles.js");

var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\layout\\Layout.js";




const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutStyles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/layout/LayoutStyles.js":
/*!************************************!*\
  !*** ./src/layout/LayoutStyles.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LayoutStyles__Container",
  componentId: "mzu455-0"
})(["max-width:1280px;width:100%;margin:auto;"]);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Acomplishments/Acomplishments */ "./src/components/Acomplishments/Acomplishments.js");
/* harmony import */ var _components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackgrooundAnimation/BackgroundAnimation */ "./src/components/BackgrooundAnimation/BackgroundAnimation.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technologies/Technologies */ "./src/components/Technologies/Technologies.js");
/* harmony import */ var _components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeLine/TimeLine */ "./src/components/TimeLine/TimeLine.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\pages\\index.js";









const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__.Section, {
      grid: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/GlobalComponents/Button.js":
/*!***********************************************!*\
  !*** ./src/styles/GlobalComponents/Button.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "F:\\Portfolio\\portfolio_website-STARTER\\src\\styles\\GlobalComponents\\Button.js";



const Button = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonBack, {
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
  children: [props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonFront, {
    alt: props.alt,
    onClick: props.onClick,
    disabled: props.disabled,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], props => props.grid ? "grid" : "flex", props => props.row ? "row" : "column", props => props.nopadding ? "0" : "32px 48px 0", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.nopadding ? "0" : "16px 16px 0");
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? '65px' : '56px', props => props.main ? '72px' : '56px', props => props.main ? '58px 0 16px' : '0', props => props.theme.breakpoints.md, props => props.main ? '56px' : '48px', props => props.main ? '56px' : '48px', props => props.main ? '40px 0 12px' : '0', props => props.theme.breakpoints.sm, props => props.main ? '28px' : '32px', props => props.main ? '32px' : '40px', props => props.main ? '16px 0 8px' : '0');
const SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', props => props.divider ? "4rem 0" : "", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], ({
  alt
}) => alt ? '150px' : '262px', ({
  alt
}) => alt ? '52px' : '64px', ({
  alt
}) => alt ? '20px' : '24px', ({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px', ({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)', ({
  disabled
}) => disabled ? '.5' : '1', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '150px' : '184px', ({
  alt
}) => alt ? '52px' : '48px', ({
  alt
}) => alt ? '20px' : '16px', ({
  alt
}) => alt ? '0' : '64px', props => props.theme.breakpoints.sm, ({
  alt
}) => alt ? '0' : '32px');
const ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], ({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', ({
  disabled
}) => disabled ? '.5' : '1', ({
  alt
}) => alt ? '20px' : '24px', ({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '20px' : '16px', props => props.theme.breakpoints.sm);
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], ({
  large
}) => large ? '24px' : '16px', props => props.theme.breakpoints.md, ({
  large
}) => large ? '16px' : '8px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '0' : '8px');
const LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], ({
  large
}) => large ? '32px' : '24px', props => props.theme.breakpoints.md, ({
  nav
}) => nav ? '16px' : '24px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '32px' : '16px');

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_ai_index_esm_js-node_modules_react-92d9c1"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2xheW91dC9MYXlvdXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9pZ25vcmVkfEY6XFxQb3J0Zm9saW9cXHBvcnRmb2xpb193ZWJzaXRlLVNUQVJURVJcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJkYXRhIiwibnVtYmVyIiwidGV4dCIsIkFjb21wbGlzaG1lbnRzIiwibWFwIiwiY2FyZCIsImluZGV4IiwiQm94ZXMiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJtZCIsInNtIiwiQm94IiwibGciLCJCb3hOdW0iLCJCb3hUZXh0IiwiSm9pbiIsIkpvaW5UZXh0IiwiSWNvbkNvbnRhaW5lciIsIkJhY2tncm91bmRBbmltYXRpb24iLCJGb290ZXIiLCJGb290ZXJXcmFwcGVyIiwiTGlua0l0ZW0iLCJTb2NpYWxJY29uc0NvbnRhaW5lciIsIkNvbXBhbnlDb250YWluZXIiLCJTbG9nYW4iLCJTb2NpYWxDb250YWluZXIiLCJMaW5rTGlzdCIsIkxpbmtDb2x1bW4iLCJMaW5rVGl0bGUiLCJIZWFkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwiQ29udGFpbmVyIiwiU3BhbiIsIkRpdjEiLCJEaXYyIiwiRGl2MyIsIk5hdkxpbmsiLCJDb250YWN0RHJvcERvd24iLCJOYXZQcm9kdWN0c0ljb24iLCJJb0lvc0Fycm93RHJvcGRvd24iLCJpc09wZW4iLCJTb2NpYWxJY29ucyIsIkhlcm8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIkxlZnRTZWN0aW9uIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFncyIsInNvdXJjZSIsInZpc2l0IiwidGFnIiwiaSIsIkltZyIsIkdyaWRDb250YWluZXIiLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyIsIlRlY2hub2xvZ2llcyIsIkltYWdlQ29udGFpbmVyIiwiTWFpbkltYWdlIiwiTGlzdCIsIkxpc3RDb250YWluZXIiLCJMaXN0VGl0bGUiLCJMaXN0UGFyYWdyYXBoIiwiTGlzdEl0ZW0iLCJMaXN0SWNvbiIsIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwiVGltZUxpbmVEYXRhIiwiVGltZWxpbmUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsInVzZVN0YXRlIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJzY3JvbGwiLCJub2RlIiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJyb3VuZCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpdGVtIiwieWVhciIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiZmluYWwiLCJDYXJvdXNlbEl0ZW0iLCJhY3RpdmUiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIkNhcm91c2VsSXRlbUltZyIsIkNhcm91c2VsSXRlbVRleHQiLCJDYXJvdXNlbEJ1dHRvbnMiLCJDYXJvdXNlbEJ1dHRvbiIsIkNhcm91c2VsQnV0dG9uRG90IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJIb21lIiwiQnV0dG9uIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwib25DbGljayIsIlNlY3Rpb24iLCJncmlkIiwicm93Iiwibm9wYWRkaW5nIiwiU2VjdGlvblRpdGxlIiwibWFpbiIsIlNlY3Rpb25UZXh0IiwiU2VjdGlvbkRpdmlkZXIiLCJjb2xvckFsdCIsImRpdmlkZXIiLCJTZWN0aW9uU3ViVGV4dCIsIlNlY29uZGFyeUJ0biIsIkJ1dHRvbkJhY2siLCJCdXR0b25Gcm9udCIsIkxpbmtDb250YWluZXIiLCJsYXJnZSIsIkxpbmtJY29uSW1nIiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUtBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBRUMsUUFBTSxFQUFFLEVBQVY7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRFcsRUFFWDtBQUFFRCxRQUFNLEVBQUUsSUFBVjtBQUFnQkMsTUFBSSxFQUFFO0FBQXRCLENBRlcsRUFHWDtBQUFFRCxRQUFNLEVBQUUsSUFBVjtBQUFnQkMsTUFBSSxFQUFFO0FBQXRCLENBSFcsRUFJWDtBQUFFRCxRQUFNLEVBQUUsSUFBVjtBQUFnQkMsTUFBSSxFQUFFO0FBQXRCLENBSlcsQ0FBYjs7QUFPQSxNQUFNQyxjQUFjLEdBQUcsbUJBQ3JCLDhEQUFDLDZEQUFEO0FBQUEsMEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsY0FDR0gsSUFBSSxDQUFDSSxHQUFMLENBQVMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLGtCQUNSLDhEQUFDLHNEQUFEO0FBQUEsOEJBQ0UsOERBQUMseURBQUQ7QUFBQSx3QkFBVUQsSUFBSSxDQUFDSixNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsd0JBQVdJLElBQUksQ0FBQ0gsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsT0FBVUksS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQWNBLCtEQUFlSCxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBRU8sTUFBTUksS0FBSyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSwyU0FPUEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFQMUIsRUFhUEgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFiMUIsQ0FBWDtBQXNCQSxNQUFNQyxHQUFHLEdBQUdOLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZNQUtMQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQUw1QixFQVVMTixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVY1QixFQWVMSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWY1QixDQUFUO0FBd0JBLE1BQU1HLE1BQU0sR0FBR1Isc0VBQUg7QUFBQTtBQUFBO0FBQUEsMk5BU1JDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBVHpCLEVBYVJILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBYnpCLENBQVo7QUFtQkEsTUFBTUksT0FBTyxHQUFHVCxxRUFBSDtBQUFBO0FBQUE7QUFBQSw0TkFRVEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFSeEIsRUFhVEgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFieEIsQ0FBYjtBQW1CQSxNQUFNSyxJQUFJLEdBQUdWLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGlRQU9OQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVAzQixFQWFOSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWIzQixDQUFWO0FBcUJBLE1BQU1NLFFBQVEsR0FBR1gsc0VBQUg7QUFBQTtBQUFBO0FBQUEsbU5BT1pDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBUHJCLEVBWVpILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBWnJCLENBQWQ7QUFtQkEsTUFBTU8sYUFBYSxHQUFHWix1RUFBSDtBQUFBO0FBQUE7QUFBQSw2RUFHZkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFIbEIsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhQOztBQUVBLE1BQU1RLG1CQUFtQixHQUFHLG1CQUMxQjtBQUFBLHlCQUNFO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBRUUsV0FBTyxFQUFDLGFBRlY7QUFHRSxRQUFJLEVBQUMsTUFIUDtBQUlFLFNBQUssRUFBQyw0QkFKUjtBQUFBLDRCQU1FO0FBQUcsYUFBTyxFQUFDLE1BQVg7QUFBQSw4QkFDRTtBQUNFLGdCQUFRLEVBQUMsU0FEWDtBQUVFLGdCQUFRLEVBQUMsU0FGWDtBQUdFLFNBQUMsRUFBQyxtaUJBSEo7QUFJRSxjQUFNLEVBQUMscUJBSlQ7QUFLRSxVQUFFLEVBQUM7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFDRSxTQUFDLEVBQUMsbVZBREo7QUFFRSxjQUFNLEVBQUMscUJBRlQ7QUFHRSxVQUFFLEVBQUM7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBYUU7QUFDRSxTQUFDLEVBQUMsbVZBREo7QUFFRSxjQUFNLEVBQUMscUJBRlQ7QUFHRSxVQUFFLEVBQUM7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQXlCRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxlQUFTLEVBQUMsOEJBSFo7QUFJRSxRQUFFLEVBQUMsU0FKTDtBQUtFLFFBQUUsRUFBQyxTQUxMO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUFlLFdBQUcsRUFBQyxLQUFuQjtBQUF5QixtQkFBVyxFQUFDLFlBQXJDO0FBQWtELGNBQU0sRUFBQyxNQUF6RDtBQUFBLCtCQUNFO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJGLGVBcUNFO0FBQ0UsT0FBQyxFQUFDLGtDQURKO0FBRUUsZUFBUyxFQUFDLHlEQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFBZSxXQUFHLEVBQUMsS0FBbkI7QUFBeUIsbUJBQVcsRUFBQyxZQUFyQztBQUFrRCxjQUFNLEVBQUMsTUFBekQ7QUFBQSwrQkFDRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJDRixlQThDRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxlQUFTLEVBQUMsOEJBSFo7QUFJRSxRQUFFLEVBQUMsU0FKTDtBQUtFLFFBQUUsRUFBQyxTQUxMO0FBTUUsVUFBSSxFQUFDLFFBTlA7QUFBQSw2QkFRRTtBQUNFLFdBQUcsRUFBQyxJQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxtQkFBVyxFQUFDLFlBSGQ7QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUFBLCtCQU1FO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUNGLGVBK0RFO0FBQ0UsT0FBQyxFQUFDLGtDQURKO0FBRUUsZUFBUyxFQUFDLHlEQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFDRSxXQUFHLEVBQUMsSUFETjtBQUVFLGFBQUssRUFBQyxHQUZSO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsY0FBTSxFQUFDLE1BSlQ7QUFBQSwrQkFNRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9ERixlQTZFRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxRQUFFLEVBQUMsU0FITDtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsZUFBUyxFQUFDLHlEQUxaO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUFlLFdBQUcsRUFBQyxLQUFuQjtBQUF5QixtQkFBVyxFQUFDLFlBQXJDO0FBQWtELGNBQU0sRUFBQyxNQUF6RDtBQUFBLCtCQUNFO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0VGLGVBeUZFO0FBQ0UsT0FBQyxFQUFDLGtDQURKO0FBRUUsZUFBUyxFQUFDLDBEQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFBZSxXQUFHLEVBQUMsS0FBbkI7QUFBeUIsbUJBQVcsRUFBQyxZQUFyQztBQUFrRCxjQUFNLEVBQUMsTUFBekQ7QUFBQSwrQkFDRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpGRixlQWtHRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxRQUFFLEVBQUMsU0FITDtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsZUFBUyxFQUFDLHlEQUxaO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUNFLFdBQUcsRUFBQyxLQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxtQkFBVyxFQUFDLFlBSGQ7QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUFBLCtCQU1FO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEdGLGVBbUhFO0FBQ0UsT0FBQyxFQUFDLGlDQURKO0FBRUUsZUFBUyxFQUFDLHdEQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFDRSxXQUFHLEVBQUMsS0FETjtBQUVFLGFBQUssRUFBQyxHQUZSO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsY0FBTSxFQUFDLE1BSlQ7QUFBQSwrQkFNRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5IRixlQWlJRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxRQUFFLEVBQUMsU0FITDtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsZUFBUyxFQUFDLDJEQUxaO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUNFLFdBQUcsRUFBQyxJQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxtQkFBVyxFQUFDLFlBSGQ7QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUFBLCtCQU1FO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaklGLGVBa0pFO0FBQ0UsT0FBQyxFQUFDLGlDQURKO0FBRUUsZUFBUyxFQUFDLHFFQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFDRSxXQUFHLEVBQUMsSUFETjtBQUVFLGFBQUssRUFBQyxHQUZSO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsY0FBTSxFQUFDLE1BSlQ7QUFBQSwrQkFNRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxKRixlQWdLRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxRQUFFLEVBQUMsU0FITDtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsZUFBUyxFQUFDLDhCQUxaO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUNFLFdBQUcsRUFBQyxLQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxtQkFBVyxFQUFDLFlBSGQ7QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUFBLCtCQU1FO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEtGLGVBaUxFO0FBQ0UsT0FBQyxFQUFDLGdDQURKO0FBRUUsZUFBUyxFQUFDLHlEQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFDRSxXQUFHLEVBQUMsS0FETjtBQUVFLGFBQUssRUFBQyxHQUZSO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsY0FBTSxFQUFDLE1BSlQ7QUFBQSwrQkFNRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpMRixlQStMRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxRQUFFLEVBQUMsU0FITDtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsZUFBUyxFQUFDLHlEQUxaO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUNFLFdBQUcsRUFBQyxLQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxtQkFBVyxFQUFDLFlBSGQ7QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUFBLCtCQU1FO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0xGLGVBZ05FO0FBQ0UsT0FBQyxFQUFDLGtDQURKO0FBRUUsZUFBUyxFQUFDLDBEQUZaO0FBR0UsWUFBTSxFQUFDLHNCQUhUO0FBQUEsNkJBS0U7QUFDRSxXQUFHLEVBQUMsS0FETjtBQUVFLGFBQUssRUFBQyxHQUZSO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsY0FBTSxFQUFDLE1BSlQ7QUFBQSwrQkFNRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhORixlQThORTtBQUFBLDhCQUNFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsR0FGTDtBQUdFLFVBQUUsRUFBQyxHQUhMO0FBSUUsU0FBQyxFQUFDLEdBSko7QUFLRSxxQkFBYSxFQUFDLGdCQUxoQjtBQU1FLHlCQUFpQixFQUFDLDBDQU5wQjtBQUFBLGdDQVFFO0FBQU0sZ0JBQU0sRUFBQyxVQUFiO0FBQXdCLG1CQUFTLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLG1CQUFTLEVBQUMsT0FBM0I7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVlFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsR0FGTDtBQUdFLFVBQUUsRUFBQyxHQUhMO0FBSUUsU0FBQyxFQUFDLEdBSko7QUFLRSxxQkFBYSxFQUFDLGdCQUxoQjtBQU1FLHlCQUFpQixFQUFDLDBDQU5wQjtBQUFBLGdDQVFFO0FBQU0sZ0JBQU0sRUFBQyxVQUFiO0FBQXdCLG1CQUFTLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLG1CQUFTLEVBQUMsT0FBM0I7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixlQXVCRTtBQUNFLFVBQUUsRUFBQyxlQURMO0FBRUUsVUFBRSxFQUFDLEdBRkw7QUFHRSxVQUFFLEVBQUMsR0FITDtBQUlFLFNBQUMsRUFBQyxHQUpKO0FBS0UscUJBQWEsRUFBQyxnQkFMaEI7QUFNRSx5QkFBaUIsRUFBQywwQ0FOcEI7QUFBQSxnQ0FRRTtBQUFNLGdCQUFNLEVBQUMsVUFBYjtBQUF3QixtQkFBUyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLE9BQTNCO0FBQW1DLHFCQUFXLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGLGVBa0NFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbENGLGVBNkNFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxRQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0NGLGVBd0RFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLE9BSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeERGLGVBbUVFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkVGLGVBOEVFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsUUFGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUVGLGVBeUZFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekZGLGVBb0dFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEdGLGVBK0dFO0FBQ0UsVUFBRSxFQUFDLGdCQURMO0FBRUUsVUFBRSxFQUFDLFNBRkw7QUFHRSxVQUFFLEVBQUMsU0FITDtBQUlFLFVBQUUsRUFBQyxRQUpMO0FBS0UsVUFBRSxFQUFDLFNBTEw7QUFNRSxxQkFBYSxFQUFDLGdCQU5oQjtBQUFBLGdDQVFFO0FBQU0sbUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0U7QUFBTSxnQkFBTSxFQUFDLEdBQWI7QUFBaUIsbUJBQVMsRUFBQyxTQUEzQjtBQUFxQyxxQkFBVyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQS9HRixlQTBIRTtBQUNFLFVBQUUsRUFBQyxnQkFETDtBQUVFLFVBQUUsRUFBQyxTQUZMO0FBR0UsVUFBRSxFQUFDLFFBSEw7QUFJRSxVQUFFLEVBQUMsU0FKTDtBQUtFLFVBQUUsRUFBQyxTQUxMO0FBTUUscUJBQWEsRUFBQyxnQkFOaEI7QUFBQSxnQ0FRRTtBQUFNLG1CQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLG1CQUFTLEVBQUMsU0FBM0I7QUFBcUMscUJBQVcsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBMFdBLCtEQUFlQSxtQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUVBO0FBQ0E7O0FBWUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDbkIsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFBLDhCQUNFLDhEQUFDLHFEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUFVLGNBQUksRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSw4REFBQyxxREFBRDtBQUFBLGdDQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBVSxjQUFJLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWFFLDhEQUFDLCtEQUFEO0FBQUEsOEJBQ0UsOERBQUMsMkRBQUQ7QUFBQSwrQkFDRSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQywwREFBRDtBQUFBLGdDQUNFLDhEQUFDLDZEQUFEO0FBQWEsY0FBSSxFQUFDLGlDQUFsQjtBQUFBLGlDQUNFLDhEQUFDLHdEQUFEO0FBQWMsZ0JBQUksRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLDhEQUFDLDZEQUFEO0FBQWEsY0FBSSxFQUFDLHFEQUFsQjtBQUFBLGlDQUNFLDhEQUFDLDBEQUFEO0FBQWdCLGdCQUFJLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFPRSw4REFBQyw2REFBRDtBQUFhLGNBQUksRUFBQyx5Q0FBbEI7QUFBQSxpQ0FDRSw4REFBQywyREFBRDtBQUFpQixnQkFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnQ0QsQ0FqQ0Q7O0FBbUNBLCtEQUFlQSxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFFTyxNQUFNQyxhQUFhLEdBQUdmLDJFQUFIO0FBQUE7QUFBQTtBQUFBLDRLQVFmQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVJsQixDQUFuQjtBQWNBLE1BQU1XLFFBQVEsR0FBR2hCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJUQWNYQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQWR0QixFQW9CWEgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFwQnRCLENBQWQ7QUE2QkEsTUFBTVksb0JBQW9CLEdBQUdqQix1RUFBSDtBQUFBO0FBQUE7QUFBQSx3TEFLeEJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBTFQsRUFVeEJILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBVlQsQ0FBMUI7QUFpQkEsTUFBTWEsZ0JBQWdCLEdBQUdsQix1RUFBSDtBQUFBO0FBQUE7QUFBQSx1TkFPbkJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBUGQsRUFZbkJILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBWmQsQ0FBdEI7QUFxQkEsTUFBTWMsTUFBTSxHQUFHbkIscUVBQUg7QUFBQTtBQUFBO0FBQUEsa09BUVRDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBUnhCLEVBYVRILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBYnhCLENBQVo7QUFvQkEsTUFBTWUsZUFBZSxHQUFHcEIsdUVBQUg7QUFBQTtBQUFBO0FBQUEsK0dBSWxCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUpmLENBQXJCO0FBWUEsTUFBTWlCLFFBQVEsR0FBR3JCLHNFQUFIO0FBQUE7QUFBQTtBQUFBLDZSQU9YQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQVB0QixFQVdYTixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVh0QixFQWdCWEgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFoQnRCLENBQWQ7QUF1QkEsTUFBTWlCLFVBQVUsR0FBR3RCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHNFQUFoQjtBQU1BLE1BQU11QixTQUFTLEdBQUd2QixzRUFBSDtBQUFBO0FBQUE7QUFBQSxrTkFTWkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFUckIsQ0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKUDtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQVVBLE1BQU1tQixNQUFNLEdBQUcsbUJBQ2IsOERBQUMsb0RBQUQ7QUFBQSwwQkFDRSw4REFBQywrQ0FBRDtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUNFLGFBQUssRUFBRTtBQUNMQyxpQkFBTyxFQUFFLE1BREo7QUFFTEMsb0JBQVUsRUFBRSxRQUZQO0FBR0xDLGVBQUssRUFBRSxPQUhGO0FBSUxDLHNCQUFZLEVBQUU7QUFKVCxTQURUO0FBQUEsZ0NBUUUsOERBQUMscURBQUQ7QUFBVyxjQUFJLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixvQkFRNEIsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFlRSw4REFBQywrQ0FBRDtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRTtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBV0U7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixlQWdDRSw4REFBQywrQ0FBRDtBQUFBLDRCQUNFLDhEQUFDLHNEQUFEO0FBQWEsVUFBSSxFQUFDLGlDQUFsQjtBQUFBLDZCQUNFLDhEQUFDLHdEQUFEO0FBQWMsWUFBSSxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsc0RBQUQ7QUFBYSxVQUFJLEVBQUMscURBQWxCO0FBQUEsNkJBQ0UsOERBQUMsMERBQUQ7QUFBZ0IsWUFBSSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBT0UsOERBQUMsc0RBQUQ7QUFBYSxVQUFJLEVBQUMseUNBQWxCO0FBQUEsNkJBQ0UsOERBQUMsMkRBQUQ7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUErQ0EsK0RBQWVKLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUVPLE1BQU1LLFNBQVMsR0FBRzdCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLCtRQVFWQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVJ4QixDQUFmO0FBaUJBLE1BQU15QixJQUFJLEdBQUc5Qix3RUFBSDtBQUFBO0FBQUE7QUFBQSx1QkFBVjtBQUlBLE1BQU0rQixJQUFJLEdBQUcvQix1RUFBSDtBQUFBO0FBQUE7QUFBQSwySEFLTEMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFMN0IsQ0FBVjtBQVNBLE1BQU0yQixJQUFJLEdBQUdoQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxnSEFJTEMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFKN0IsQ0FBVjtBQVFBLE1BQU00QixJQUFJLEdBQUdqQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxzSkFLTEMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFMN0IsQ0FBVixDLENBV1A7O0FBQ08sTUFBTTZCLE9BQU8sR0FBR2xDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9LQVVSQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVYxQixDQUFiLEMsQ0FlUDs7QUFDTyxNQUFNOEIsZUFBZSxHQUFHbkMsMEVBQUg7QUFBQTtBQUFBO0FBQUEsc1FBbUJoQkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFuQmxCLEVBc0JoQkosS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUF0QmxCLENBQXJCO0FBMkJBLE1BQU1nQyxlQUFlLEdBQUdwQyx3REFBTSxDQUFDcUMsOERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx1S0FLZixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFpQkEsTUFBTSxHQUFHLEdBQUgsR0FBUyxLQUxqQixFQU1iLENBQUM7QUFBRUE7QUFBRixDQUFELEtBQWlCQSxNQUFNLEdBQUcsWUFBSCxHQUFrQixXQU41QixFQVloQnJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBWmxCLENBQXJCLEMsQ0FrQlA7O0FBRU8sTUFBTWtDLFdBQVcsR0FBR3ZDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhJQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhQO0FBRUE7QUFDQTtBQUtBO0FBQ0E7O0FBRUEsTUFBTXdDLElBQUksR0FBSXZDLEtBQUQsaUJBQ1gsOERBQUMsNkRBQUQ7QUFBUyxLQUFHLE1BQVo7QUFBYSxXQUFTLE1BQXRCO0FBQUEseUJBQ0UsOERBQUMsb0RBQUQ7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFjLFVBQUksTUFBbEI7QUFBbUIsWUFBTSxNQUF6QjtBQUFBLDZDQUNhO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0UsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFTRSw4REFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRSxNQUNOd0MsTUFBTSxDQUFDQyxRQUFQLEdBQ0MsaUtBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQTBCQSwrREFBZUYsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUVPLE1BQU1HLFdBQVcsR0FBRzNDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFLQUVaQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUZ0QixFQVNaSixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVR0QixDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUVBO0FBYUE7QUFLQTs7QUFFQSxNQUFNd0MsUUFBUSxHQUFHLG1CQUNmLDhEQUFDLDZEQUFEO0FBQVMsV0FBUyxNQUFsQjtBQUFtQixJQUFFLEVBQUMsVUFBdEI7QUFBQSwwQkFDRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxrRUFBRDtBQUFjLFFBQUksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLDhEQUFDLDBEQUFEO0FBQUEsY0FDR0MsOERBQUEsQ0FDQyxDQUFDO0FBQUVDLFFBQUY7QUFBTUMsV0FBTjtBQUFhQyxXQUFiO0FBQW9CQyxpQkFBcEI7QUFBaUNDLFVBQWpDO0FBQXVDQyxZQUF2QztBQUErQ0M7QUFBL0MsS0FBRCxrQkFDRSw4REFBQyxxREFBRDtBQUFBLDhCQUNFLDhEQUFDLGdEQUFEO0FBQUssV0FBRyxFQUFFTDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyx5REFBRDtBQUFBLGdDQUNFLDhEQUFDLHdEQUFEO0FBQWEsZUFBSyxNQUFsQjtBQUFBLG9CQUFvQkM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBTUUsOERBQUMscURBQUQ7QUFBQSxrQkFBV0M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBT0U7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLG9EQUFEO0FBQUEsb0JBQ0dDLElBQUksQ0FBQ3RELEdBQUwsQ0FBUyxDQUFDeUQsR0FBRCxFQUFNQyxDQUFOLGtCQUNSLDhEQUFDLGdEQUFEO0FBQUEsc0JBQWNEO0FBQWQsYUFBVUMsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFlRSw4REFBQyx3REFBRDtBQUFBLGdDQUNFLDhEQUFDLDBEQUFEO0FBQWUsY0FBSSxFQUFFRixLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQWUsY0FBSSxFQUFFRCxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQSxPQUFlTCxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBaUNBLCtEQUFlRixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFFTyxNQUFNVyxHQUFHLEdBQUd2RCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxnRUFBVDtBQU9BLE1BQU13RCxhQUFhLEdBQUd4RCwyRUFBSDtBQUFBO0FBQUE7QUFBQSwyTkFPaEJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBUGxCLENBQW5CO0FBZUEsTUFBTW9ELFFBQVEsR0FBR3pELHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZIQUtUQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUx6QixDQUFkO0FBU0EsTUFBTXFELFlBQVksR0FBRzFELHVFQUFIO0FBQUE7QUFBQTtBQUFBLGdEQUFsQjtBQVFBLE1BQU0yRCxXQUFXLEdBQUczRCxzRUFBSDtBQUFBO0FBQUE7QUFBQSx5RkFLUkMsS0FBRCxJQUFXQSxLQUFLLENBQUMrQyxLQUFOLEdBQWMsTUFBZCxHQUF1QixNQUx6QixDQUFqQjtBQVFBLE1BQU1ZLEVBQUUsR0FBRzVELHNFQUFIO0FBQUE7QUFBQTtBQUFBLDJFQUFSO0FBUUEsTUFBTTZELEtBQUssR0FBRzdELHVFQUFIO0FBQUE7QUFBQTtBQUFBLGtJQUFYO0FBV0EsTUFBTThELFFBQVEsR0FBRzlELHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtIQU9UQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVB6QixDQUFkO0FBY0EsTUFBTTBELFdBQVcsR0FBRy9ELHNFQUFIO0FBQUE7QUFBQTtBQUFBLGlHQUFqQjtBQVFBLE1BQU1nRSxhQUFhLEdBQUdoRSxxRUFBSDtBQUFBO0FBQUE7QUFBQSw2SUFBbkI7QUFhQSxNQUFNaUUsT0FBTyxHQUFHakUsc0VBQUg7QUFBQTtBQUFBO0FBQUEsK0RBQWI7QUFLQSxNQUFNa0UsR0FBRyxHQUFHbEUsc0VBQUg7QUFBQTtBQUFBO0FBQUEsdUNBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdQO0FBQ0E7QUFDQTtBQU1BOztBQVFBLE1BQU1tRSxZQUFZLEdBQUcsbUJBQ25CLDhEQUFDLDZEQUFEO0FBQVMsSUFBRSxFQUFDLE1BQVo7QUFBQSwwQkFDRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUsOERBQUMsaUVBQUQ7QUFBQSxnSEFFcUIsR0FGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFRRSw4REFBQyxxREFBRDtBQUFBLDRCQUNFLDhEQUFDLHlEQUFEO0FBQUEsOEJBQ0UsOERBQUMsbURBQUQ7QUFBUyxZQUFJLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBQSxnQ0FDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEsc0RBQ2tCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBV0UsOERBQUMseURBQUQ7QUFBQSw4QkFDRSw4REFBQyxzREFBRDtBQUFZLFlBQUksRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBQSxnQ0FDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEsc0RBQ2tCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLGVBcUJFLDhEQUFDLHlEQUFEO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBUSxZQUFJLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBQSxnQ0FDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEsc0RBQ2tCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUE0Q0EsK0RBQWVBLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBRU8sTUFBTUMsY0FBYyxHQUFHcEUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsbVhBV2hCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQVhqQixFQWdCaEJOLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBaEJqQixDQUFwQjtBQXVCQSxNQUFNaUUsU0FBUyxHQUFHckUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsbUJBQWY7QUFJQSxNQUFNc0UsSUFBSSxHQUFHdEUsc0VBQUg7QUFBQTtBQUFBO0FBQUEsa09BT05DLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JJLEVBUDNCLEVBV05OLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBWDNCLEVBZ0JOSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWhCM0IsQ0FBVjtBQXVCQSxNQUFNa0UsYUFBYSxHQUFHdkUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUZBSWZDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBSmxCLENBQW5CO0FBVUEsTUFBTW1FLFNBQVMsR0FBR3hFLHNFQUFIO0FBQUE7QUFBQTtBQUFBLGlQQVFiQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVJwQixFQWFiSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWJwQixDQUFmO0FBcUJBLE1BQU1vRSxhQUFhLEdBQUd6RSxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnS0FLZkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFMbEIsRUFVZkgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFWbEIsQ0FBbkI7QUFnQkEsTUFBTXFFLFFBQVEsR0FBRzFFLHNFQUFIO0FBQUE7QUFBQTtBQUFBLDRKQUtaQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUxyQixFQVNaSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVRyQixDQUFkO0FBZ0JBLE1BQU1zRSxRQUFRLEdBQUczRSx1RUFBSDtBQUFBO0FBQUE7QUFBQSw2S0FNVkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFOdkIsRUFZVkgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFadkIsQ0FBZCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhQO0FBRUE7QUFXQTtBQU1BO0FBRUEsTUFBTXVFLG9CQUFvQixHQUFHQyxxRUFBN0I7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQywrQ0FBUSxDQUFDLENBQUQsQ0FBNUM7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLDZDQUFNLEVBQTFCOztBQUVBLFFBQU1DLE1BQU0sR0FBRyxDQUFDQyxJQUFELEVBQU9DLElBQVAsS0FBZ0I7QUFDN0IsV0FBT0QsSUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBRUQsVUFBRjtBQUFRRSxjQUFRLEVBQUU7QUFBbEIsS0FBZCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJcEMsQ0FBSixLQUFVO0FBQzVCb0MsS0FBQyxDQUFDQyxjQUFGOztBQUVBLFFBQUlULFdBQVcsQ0FBQ1UsT0FBaEIsRUFBeUI7QUFDdkIsWUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDakJiLFdBQVcsQ0FBQ1UsT0FBWixDQUFvQkksV0FBcEIsR0FBa0MsR0FBbEMsSUFBeUMxQyxDQUFDLEdBQUd1QixxRUFBN0MsQ0FEaUIsQ0FBbkI7QUFJQU8sWUFBTSxDQUFDRixXQUFXLENBQUNVLE9BQWIsRUFBc0JDLFVBQXRCLENBQU47QUFDRDtBQUNGLEdBVkQ7O0FBWUEsUUFBTUksWUFBWSxHQUFHLE1BQU07QUFDekIsUUFBSWYsV0FBVyxDQUFDVSxPQUFoQixFQUF5QjtBQUN2QixZQUFNOUYsS0FBSyxHQUFHZ0csSUFBSSxDQUFDSSxLQUFMLENBQ1hoQixXQUFXLENBQUNVLE9BQVosQ0FBb0JDLFVBQXBCLElBQ0VYLFdBQVcsQ0FBQ1UsT0FBWixDQUFvQkksV0FBcEIsR0FBa0MsR0FEcEMsQ0FBRCxHQUVFbkIscUVBSFUsQ0FBZDtBQU1BRyxtQkFBYSxDQUFDbEYsS0FBRCxDQUFiO0FBQ0Q7QUFDRixHQVZELENBcEJxQixDQWdDckI7QUFDQTs7O0FBQ0FxRyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QmhCLFlBQU0sQ0FBQ0YsV0FBVyxDQUFDVSxPQUFiLEVBQXNCLENBQXRCLENBQU47QUFDRCxLQUZEOztBQUlBbkQsVUFBTSxDQUFDNEQsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELFlBQWxDO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBT0UsOERBQUMsOERBQUQ7QUFBbUIsU0FBRyxFQUFFbEIsV0FBeEI7QUFBcUMsY0FBUSxFQUFFZSxZQUEvQztBQUFBLDZCQUNFO0FBQUEsa0JBQ0dwQixrRUFBQSxDQUFpQixDQUFDeUIsSUFBRCxFQUFPeEcsS0FBUCxrQkFDaEIsOERBQUMscUVBQUQ7QUFFRSxlQUFLLEVBQUVBLEtBQUssS0FBSzhFLG9CQUFvQixHQUFHLENBRjFDO0FBQUEsaUNBSUUsOERBQUMseURBQUQ7QUFDRSxpQkFBSyxFQUFFOUUsS0FEVDtBQUVFLGNBQUUsRUFBRyxrQkFBaUJBLEtBQU0sRUFGOUI7QUFHRSxrQkFBTSxFQUFFaUYsVUFIVjtBQUlFLG1CQUFPLEVBQUdXLENBQUQsSUFBT0QsV0FBVyxDQUFDQyxDQUFELEVBQUk1RixLQUFKLENBSjdCO0FBQUEsb0NBTUUsOERBQUMsOERBQUQ7QUFBQSx5QkFDSSxHQUFFd0csSUFBSSxDQUFDQyxJQUFLLEVBRGhCLGVBRUUsOERBQUMsNERBQUQ7QUFDRSxxQkFBSyxFQUFDLEtBRFI7QUFFRSxzQkFBTSxFQUFDLEdBRlQ7QUFHRSx1QkFBTyxFQUFDLFdBSFY7QUFJRSxvQkFBSSxFQUFDLE1BSlA7QUFLRSxxQkFBSyxFQUFDLDRCQUxSO0FBQUEsd0NBT0U7QUFDRSwrQkFBVSxTQURaO0FBRUUsK0JBQVUsU0FGWjtBQUdFLG1CQUFDLEVBQUMsMkpBSEo7QUFJRSxzQkFBSSxFQUFDLHFCQUpQO0FBS0Usa0NBQWE7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVBGLGVBY0U7QUFBQSx5Q0FDRTtBQUNFLHNCQUFFLEVBQUMsZUFETDtBQUVFLHNCQUFFLEVBQUMsY0FGTDtBQUdFLHNCQUFFLEVBQUMsS0FITDtBQUlFLHNCQUFFLEVBQUMsS0FKTDtBQUtFLHNCQUFFLEVBQUMsVUFMTDtBQU1FLGlDQUFhLEVBQUMsZ0JBTmhCO0FBQUEsNENBUUU7QUFBTSxvQ0FBVztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVJGLGVBU0U7QUFDRSw0QkFBTSxFQUFDLFNBRFQ7QUFFRSxvQ0FBVyxPQUZiO0FBR0Usc0NBQWE7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORixlQXlDRSw4REFBQyw2REFBRDtBQUFBLHdCQUFtQkQsSUFBSSxDQUFDNUc7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsV0FDT0ksS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBREg7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBNkRFLDhEQUFDLDREQUFEO0FBQUEsZ0JBQ0crRSxrRUFBQSxDQUFpQixDQUFDeUIsSUFBRCxFQUFPeEcsS0FBUCxLQUFpQjtBQUNqQyw0QkFDRSw4REFBQywyREFBRDtBQUVFLGVBQUssRUFBRUEsS0FGVDtBQUdFLGdCQUFNLEVBQUVpRixVQUhWO0FBSUUsaUJBQU8sRUFBR1csQ0FBRCxJQUFPRCxXQUFXLENBQUNDLENBQUQsRUFBSTVGLEtBQUosQ0FKN0I7QUFLRSxjQUFJLEVBQUMsUUFMUDtBQUFBLGlDQU9FLDhEQUFDLDhEQUFEO0FBQW1CLGtCQUFNLEVBQUVpRjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEYsV0FDT2pGLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVdELE9BWkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdERixlQTRFRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdGRCxDQTFIRDs7QUE0SEEsK0RBQWVnRixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSkE7QUFFTyxNQUFNMEIsaUJBQWlCLEdBQUd4RyxzRUFBSDtBQUFBO0FBQUE7QUFBQSw0WUFzQm5CQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQXRCZCxDQUF2QjtBQStCQSxNQUFNb0csd0JBQXdCLEdBQUd6Ryx1RUFBSDtBQUFBO0FBQUE7QUFBQSxpREFDMUJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBRFAsRUFHcEIsQ0FBQztBQUFFcUc7QUFBRixDQUFELEtBQWVBLEtBQUssR0FBSSxPQUFKLEdBQWMsYUFIZCxDQUE5QjtBQU9BLE1BQU1DLFlBQVksR0FBRzNHLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGlTQUtkQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUxuQixFQVNkSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVRuQixFQXFCbEJKLEtBQUQsSUFBV0EsS0FBSyxDQUFDMkcsTUFBTixLQUFpQjNHLEtBQUssQ0FBQ0gsS0FBdkIsR0FBZ0MsWUFBaEMsR0FBK0MsY0FyQnZDLENBQWxCO0FBeUJBLE1BQU0rRyxpQkFBaUIsR0FBRzdHLHNFQUFIO0FBQUE7QUFBQTtBQUFBLDRXQVluQkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFaZCxFQWtCbkJILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBbEJkLENBQXZCO0FBdUJBLE1BQU15RyxlQUFlLEdBQUc5Ryx1RUFBSDtBQUFBO0FBQUE7QUFBQSxxTEFLakJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBTGhCLENBQXJCO0FBWUEsTUFBTTBHLGdCQUFnQixHQUFHL0cscUVBQUg7QUFBQTtBQUFBO0FBQUEsNE9BT2xCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVBmLEVBWWxCSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVpmLENBQXRCO0FBa0JBLE1BQU0yRyxlQUFlLEdBQUdoSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxvSEFNakJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBTmhCLENBQXJCO0FBYUEsTUFBTTRHLGNBQWMsR0FBR2pILDBFQUFIO0FBQUE7QUFBQTtBQUFBLHlKQU9iQyxLQUFELElBQVdBLEtBQUssQ0FBQzJHLE1BQU4sS0FBaUIzRyxLQUFLLENBQUNILEtBQXZCLEdBQWdDLEdBQWhDLEdBQXNDLEtBUG5DLEVBUVhHLEtBQUQsSUFBV0EsS0FBSyxDQUFDMkcsTUFBTixLQUFpQjNHLEtBQUssQ0FBQ0gsS0FBdkIsR0FBZ0MsWUFBaEMsR0FBK0MsVUFSOUMsQ0FBcEI7QUFlQSxNQUFNb0gsaUJBQWlCLEdBQUdsSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxtRkFBdkIsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25KQSxNQUFNNkMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VHLE9BQUssRUFBRSxRQURUO0FBRUVDLGFBQVcsRUFDVCw4UEFISjtBQUlFRixPQUFLLEVBQUUsa0JBSlQ7QUFLRUcsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsd0NBTlY7QUFPRUMsT0FBSyxFQUFFLDBEQVBUO0FBUUVOLElBQUUsRUFBRTtBQVJOLENBRHNCLEVBV3RCO0FBQ0VFLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFDVCx1VUFISjtBQUlFRixPQUFLLEVBQUUsZUFKVDtBQUtFRyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixDQUxSO0FBTUVDLFFBQU0sRUFBRSxvQkFOVjtBQU9FQyxPQUFLLEVBQUUsb0JBUFQ7QUFRRU4sSUFBRSxFQUFFO0FBUk4sQ0FYc0IsRUFxQnRCO0FBQ0VFLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFDVCwrSkFISjtBQUlFRixPQUFLLEVBQUUsZUFKVDtBQUtFRyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixDQUxSO0FBTUVDLFFBQU0sRUFBRSxvQkFOVjtBQU9FQyxPQUFLLEVBQUUsb0JBUFQ7QUFRRU4sSUFBRSxFQUFFO0FBUk4sQ0FyQnNCLEVBK0J0QjtBQUNFRSxPQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFXLEVBQ1QsZ0lBSEo7QUFJRUYsT0FBSyxFQUFFLGVBSlQ7QUFLRUcsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsb0JBTlY7QUFPRUMsT0FBSyxFQUFFLG9CQVBUO0FBUUVOLElBQUUsRUFBRTtBQVJOLENBL0JzQixDQUFqQjtBQTJDQSxNQUFNK0IsWUFBWSxHQUFHLENBQzFCO0FBQUUwQixNQUFJLEVBQUUsSUFBUjtBQUFjN0csTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUU2RyxNQUFJLEVBQUUsSUFBUjtBQUFjN0csTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUU2RyxNQUFJLEVBQUUsSUFBUjtBQUFjN0csTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUU2RyxNQUFJLEVBQUUsSUFBUjtBQUFjN0csTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUU2RyxNQUFJLEVBQUUsSUFBUjtBQUFjN0csTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDUDtBQUVBO0FBQ0E7QUFDQTtBQUVPLE1BQU15SCxNQUFNLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0I7QUFDcEMsc0JBQ0UsOERBQUMsb0RBQUQ7QUFBQSw0QkFDQyw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUM7QUFBQSxnQkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZELGVBR0MsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBUk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOUDtBQUVPLE1BQU12RixTQUFTLEdBQUc3Qix1RUFBSDtBQUFBO0FBQUE7QUFBQSxnREFBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1xSCxJQUFJLEdBQUcsTUFBTTtBQUNqQixzQkFDRSw4REFBQyxrREFBRDtBQUFBLDRCQUNFLDhEQUFDLDZEQUFEO0FBQVMsVUFBSSxNQUFiO0FBQUEsOEJBQ0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU1FLDhEQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFPRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBUUUsOERBQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELENBYkQ7O0FBZUEsK0RBQWVBLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBOztBQUVBLE1BQU1DLE1BQU0sR0FBSXJILEtBQUQsaUJBQ2IsOERBQUMsOENBQUQ7QUFBWSxLQUFHLEVBQUVBLEtBQUssQ0FBQ3NILEdBQXZCO0FBQTRCLE1BQUksRUFBRXRILEtBQUssQ0FBQ3VILElBQXhDO0FBQThDLFVBQVEsRUFBRXZILEtBQUssQ0FBQ3dILFFBQTlEO0FBQUEsYUFBeUV4SCxLQUFLLENBQUNtSCxRQUEvRSxlQUNFLDhEQUFDLCtDQUFEO0FBQWEsT0FBRyxFQUFFbkgsS0FBSyxDQUFDc0gsR0FBeEI7QUFBNkIsV0FBTyxFQUFFdEgsS0FBSyxDQUFDeUgsT0FBNUM7QUFBcUQsWUFBUSxFQUFFekgsS0FBSyxDQUFDd0gsUUFBckU7QUFBQSxjQUFnRnhILEtBQUssQ0FBQ21IO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFNQSwrREFBZUUsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRU8sTUFBTUssT0FBTyxHQUFHM0gsMkVBQUg7QUFBQTtBQUFBO0FBQUEsNlNBQ05DLEtBQUQsSUFBV0EsS0FBSyxDQUFDMkgsSUFBTixHQUFhLE1BQWIsR0FBc0IsTUFEMUIsRUFFQzNILEtBQUQsSUFBV0EsS0FBSyxDQUFDNEgsR0FBTixHQUFZLEtBQVosR0FBb0IsUUFGL0IsRUFHTjVILEtBQUQsSUFBV0EsS0FBSyxDQUFDNkgsU0FBTixHQUFrQixHQUFsQixHQUF3QixhQUg1QixFQVdSN0gsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFYMUIsRUFnQlJILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBaEIxQixFQWlCSkosS0FBRCxJQUFXQSxLQUFLLENBQUM2SCxTQUFOLEdBQWtCLEdBQWxCLEdBQXdCLGFBakI5QixDQUFiO0FBd0JBLE1BQU1DLFlBQVksR0FBRy9ILHNFQUFIO0FBQUE7QUFBQTtBQUFBLHNkQUVUQyxLQUFELElBQVdBLEtBQUssQ0FBQytILElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BRnZCLEVBR1AvSCxLQUFELElBQVdBLEtBQUssQ0FBQytILElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BSHpCLEVBVVgvSCxLQUFELElBQVdBLEtBQUssQ0FBQytILElBQU4sR0FBYSxhQUFiLEdBQTZCLEdBVjVCLEVBWWQvSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVpuQixFQWFQSCxLQUFELElBQVdBLEtBQUssQ0FBQytILElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BYnpCLEVBY0wvSCxLQUFELElBQVdBLEtBQUssQ0FBQytILElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BZDNCLEVBZ0JUL0gsS0FBRCxJQUFXQSxLQUFLLENBQUMrSCxJQUFOLEdBQWEsYUFBYixHQUE2QixHQWhCOUIsRUFtQmQvSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQW5CbkIsRUFzQlBKLEtBQUQsSUFBV0EsS0FBSyxDQUFDK0gsSUFBTixHQUFhLE1BQWIsR0FBc0IsTUF0QnpCLEVBdUJML0gsS0FBRCxJQUFXQSxLQUFLLENBQUMrSCxJQUFOLEdBQWEsTUFBYixHQUFzQixNQXZCM0IsRUF5QlQvSCxLQUFELElBQVdBLEtBQUssQ0FBQytILElBQU4sR0FBYSxZQUFiLEdBQTRCLEdBekI3QixDQUFsQjtBQThCQSxNQUFNQyxXQUFXLEdBQUdqSSxxRUFBSDtBQUFBO0FBQUE7QUFBQSw2UUFRWkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFSdEIsRUFlWkgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFmdEIsQ0FBakI7QUFzQkEsTUFBTTZILGNBQWMsR0FBR2xJLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDBLQU1WQyxLQUFELElBQVdBLEtBQUssQ0FBQ2tJLFFBQU4sR0FDdkIsbURBRHVCLEdBRXZCLG1EQVJ1QixFQVVabEksS0FBRCxJQUFXQSxLQUFLLENBQUNtSSxPQUFOLEdBQWdCLFFBQWhCLEdBQTJCLEVBVnpCLEVBWWZuSSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVpuQixFQWlCZkgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFqQm5CLENBQXBCO0FBc0JBLE1BQU1nSSxjQUFjLEdBQUdySSxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnTkFPakJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBUGpCLEVBYWZILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBYm5CLENBQXBCO0FBa0JBLE1BQU1pSSxZQUFZLEdBQUd0SSwwRUFBSDtBQUFBO0FBQUE7QUFBQSxndEJBK0JiQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQS9CckIsRUF3Q2JILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBeENyQixDQUFsQjtBQWtEQSxNQUFNa0ksVUFBVSxHQUFHdkksdUVBQUg7QUFBQTtBQUFBO0FBQUEsK1lBQ1osQ0FBQztBQUFFdUg7QUFBRixDQUFELEtBQWFBLEdBQUcsR0FBRyxPQUFILEdBQWEsT0FEakIsRUFFWCxDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BRmpCLEVBSVIsQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUpwQixFQVNYLENBQUM7QUFBRUEsS0FBRjtBQUFPQztBQUFQLENBQUQsS0FBb0JELEdBQUcsSUFBSUMsSUFBUixHQUFnQixHQUFoQixHQUFzQixVQVQ5QixFQVdQLENBQUM7QUFBRUQ7QUFBRixDQUFELEtBQWFBLEdBQUcsR0FBRyxtREFBSCxHQUF5RCxtREFYbEUsRUFnQlYsQ0FBQztBQUFFRTtBQUFGLENBQUQsS0FBa0JBLFFBQVEsR0FBRyxJQUFILEdBQVUsR0FoQjFCLEVBa0JYeEgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFsQnZCLEVBbUJWLENBQUM7QUFBRW1IO0FBQUYsQ0FBRCxLQUFhQSxHQUFHLEdBQUcsT0FBSCxHQUFhLE9BbkJuQixFQW9CVCxDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BcEJuQixFQXFCTixDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BckJ0QixFQXNCRixDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFhQSxHQUFHLEdBQUcsR0FBSCxHQUFTLE1BdEJ2QixFQXlCWHRILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBekJ2QixFQTZCRixDQUFDO0FBQUVrSDtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLEdBQUgsR0FBUyxNQTdCdkIsQ0FBaEI7QUFpQ0EsTUFBTWlCLFdBQVcsR0FBR3hJLDBFQUFIO0FBQUE7QUFBQTtBQUFBLG1vQkFVUixDQUFDO0FBQUV1SDtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLG1EQUFILEdBQXlELG1EQVZqRSxFQVdYLENBQUM7QUFBRUU7QUFBRixDQUFELEtBQWtCQSxRQUFRLEdBQUcsSUFBSCxHQUFVLEdBWHpCLEVBYVQsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQWJuQixFQWtCUixDQUFDO0FBQUVFO0FBQUYsQ0FBRCxLQUFrQkEsUUFBUSxHQUFHLG1GQUFILEdBQXlGLE1BbEIzRyxFQXFDWnhILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBckN0QixFQXNDUCxDQUFDO0FBQUVtSDtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQXRDckIsRUF5Q1p0SCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQXpDdEIsQ0FBakI7QUE4Q0EsTUFBTW9JLGFBQWEsR0FBR3pJLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHVPQUNULENBQUM7QUFBRTBJO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BRHZCLEVBYWR6SSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQWJwQixFQWNQLENBQUM7QUFBRXNJO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLEdBQUcsTUFBSCxHQUFZLEtBZHpCLEVBaUJkekksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFqQnBCLEVBa0JQLENBQUM7QUFBRXFJO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLEdBQUcsR0FBSCxHQUFTLEtBbEJ0QixDQUFuQjtBQXNCQSxNQUFNQyxXQUFXLEdBQUczSSx1RUFBSDtBQUFBO0FBQUE7QUFBQSxvRkFFWixDQUFDO0FBQUUwSTtBQUFGLENBQUQsS0FBZUEsS0FBSyxHQUFHLE1BQUgsR0FBWSxNQUZwQixFQUlaekksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFKdEIsRUFLVixDQUFDO0FBQUV3STtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUxsQixFQVFaM0ksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFSdEIsRUFTVixDQUFDO0FBQUVxSTtBQUFGLENBQUQsS0FBZUEsS0FBSyxHQUFHLE1BQUgsR0FBWSxNQVR0QixDQUFqQixDOzs7Ozs7Ozs7OztBQzdRUCx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBCb3gsIEJveGVzLCBCb3hOdW0sIEJveFRleHQgfSBmcm9tICcuL0Fjb21wbGlzaG1lbnRzU3R5bGVzJztcblxuY29uc3QgZGF0YSA9IFtcbiAgeyBudW1iZXI6IDIwLCB0ZXh0OiAnT3BlbiBTb3VyY2UgUHJvamVjdHMnIH0sXG4gIHsgbnVtYmVyOiAxMDAwLCB0ZXh0OiAnU3R1ZGVudHMnIH0sXG4gIHsgbnVtYmVyOiAxOTAwLCB0ZXh0OiAnR2l0aHViIEZvbGxvd2VycycgfSxcbiAgeyBudW1iZXI6IDUwMDAsIHRleHQ6ICdHaXRodWIgU3RhcnMnIH0sXG5dO1xuXG5jb25zdCBBY29tcGxpc2htZW50cyA9ICgpID0+IChcbiAgPFNlY3Rpb24+XG4gICAgPFNlY3Rpb25UaXRsZT5QZXJzb25hbCBBY29tcGxpc2htZW50czwvU2VjdGlvblRpdGxlPlxuICAgIDxCb3hlcz5cbiAgICAgIHtkYXRhLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8Qm94TnVtPiB7Y2FyZC5udW1iZXJ9KyA8L0JveE51bT5cbiAgICAgICAgICA8Qm94VGV4dD4ge2NhcmQudGV4dH0gPC9Cb3hUZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICkpfVxuICAgIDwvQm94ZXM+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFjb21wbGlzaG1lbnRzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5leHBvcnQgY29uc3QgQm94ZXMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAyNHB4O1xuICBtYXJnaW46IDI0cHggMCA0MHB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luOiAyMHB4IDAgMzJweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyMTJENDU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGhlaWdodDogMTQ0cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XG4gICAgaGVpZ2h0OiAyMTBweDtcblxuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBoZWlnaHQ6IDEzNXB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBcbiAgICAmOm50aC1jaGlsZCgybil7XG4gICAgICBncmlkLXJvdzoyO1xuICAgIH1cbiAgfVxuYFxuZXhwb3J0IGNvbnN0IEJveE51bSA9IHN0eWxlZC5oNWBcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB9XG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuYFxuXG5leHBvcnQgY29uc3QgQm94VGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH07XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEpvaW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA2NHB4O1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBKb2luVGV4dCA9IHN0eWxlZC5oNWBcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufTtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDAgMCAxNnB4O1xufVxuYFxuXG5leHBvcnQgY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJhY2tncm91bmRBbmltYXRpb24gPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPVwiQmdBbmltYXRpb25fX3N2Z1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDYwMiA2MDJcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPGcgb3BhY2l0eT1cIjAuMTVcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0yMDEuMzM3IDg3LjQzN0MxOTMuNDc0IDc5LjU3MzggMTgwLjcyNSA3OS41NzM4IDE3Mi44NjIgODcuNDM3TDg3LjQzNyAxNzIuODYyQzc5LjU3MzkgMTgwLjcyNSA3OS41NzM5IDE5My40NzQgODcuNDM3IDIwMS4zMzdMNDAwLjY2MyA1MTQuNTYzQzQwOC41MjYgNTIyLjQyNiA0MjEuMjc1IDUyMi40MjYgNDI5LjEzOCA1MTQuNTYzTDUxNC41NjMgNDI5LjEzOEM1MjIuNDI2IDQyMS4yNzUgNTIyLjQyNiA0MDguNTI2IDUxNC41NjMgNDAwLjY2M0wyMDEuMzM3IDg3LjQzN1pNMzAuNDg2OSAxMTUuOTEyQy04LjgyODk3IDE1NS4yMjggLTguODI4OTcgMjE4Ljk3MiAzMC40ODY5IDI1OC4yODdMMzQzLjcxMyA1NzEuNTEzQzM4My4wMjggNjEwLjgyOSA0NDYuNzcyIDYxMC44MjkgNDg2LjA4OCA1NzEuNTEzTDU3MS41MTMgNDg2LjA4OEM2MTAuODI5IDQ0Ni43NzIgNjEwLjgyOSAzODMuMDI4IDU3MS41MTMgMzQzLjcxM0wyNTguMjg3IDMwLjQ4NjlDMjE4Ljk3MiAtOC44Mjg5NiAxNTUuMjI4IC04LjgyODk2IDExNS45MTIgMzAuNDg2OUwzMC40ODY5IDExNS45MTJaXCJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MF9yYWRpYWwpXCJcbiAgICAgICAgICBpZD1cInBhdGhfMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk01MTQuNTYzIDIwMS4zMzdDNTIyLjQyNiAxOTMuNDc0IDUyMi40MjYgMTgwLjcyNSA1MTQuNTYzIDE3Mi44NjJMNDI5LjEzOCA4Ny40MzdDNDIxLjI3NSA3OS41NzM4IDQwOC41MjYgNzkuNTczOSA0MDAuNjYzIDg3LjQzN0wzNTguMDk4IDEzMC4wMDJMMzAxLjE0OCA3My4wNTE2TDM0My43MTMgMzAuNDg2OUMzODMuMDI4IC04LjgyODk2IDQ0Ni43NzIgLTguODI4OTYgNDg2LjA4OCAzMC40ODY5TDU3MS41MTMgMTE1LjkxMkM2MTAuODI5IDE1NS4yMjggNjEwLjgyOSAyMTguOTcyIDU3MS41MTMgMjU4LjI4N0wzNTcuODAyIDQ3MS45OTlMMzAwLjg1MiA0MTUuMDQ5TDUxNC41NjMgMjAxLjMzN1pcIlxuICAgICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQxX3JhZGlhbClcIlxuICAgICAgICAgIGlkPVwicGF0aF8xXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTI0My45MDEgNDcxLjk5OUwyMDEuMzM3IDUxNC41NjNDMTkzLjQ3NCA1MjIuNDI2IDE4MC43MjUgNTIyLjQyNiAxNzIuODYyIDUxNC41NjNMODcuNDM3IDQyOS4xMzhDNzkuNTczOSA0MjEuMjc1IDc5LjU3MzkgNDA4LjUyNiA4Ny40MzcgNDAwLjY2M0wzMDEuMTQ4IDE4Ni45NTJMMjQ0LjE5OCAxMzAuMDAyTDMwLjQ4NjkgMzQzLjcxM0MtOC44Mjg5NyAzODMuMDI4IC04LjgyODk3IDQ0Ni43NzIgMzAuNDg2OSA0ODYuMDg4TDExNS45MTIgNTcxLjUxM0MxNTUuMjI4IDYxMC44MjkgMjE4Ljk3MiA2MTAuODI5IDI1OC4yODcgNTcxLjUxM0wzMDAuODUyIDUyOC45NDlMMjQzLjkwMSA0NzEuOTk5WlwiXG4gICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDJfcmFkaWFsKVwiXG4gICAgICAgICAgaWQ9XCJwYXRoXzJcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGVsbGlwc2VcbiAgICAgICAgY3g9XCIyOTUuMDI3XCJcbiAgICAgICAgY3k9XCIxOTMuMTE4XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTUuMDI3IC0xOTMuMTE4KVwiXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXG4gICAgICAgIHJ5PVwiMS4wNzQzM1wiXG4gICAgICAgIGZpbGw9XCIjOTQ1REQ2XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8yXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9lbGxpcHNlPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yOTQuNjg1IDE5My40NzRMMjY4LjkzMiAyMTkuMjU4XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTQuNjg1IC0xOTMuNDc0KSByb3RhdGUoNDUgMjk0LjY4NSAxOTMuNDc0KVwiXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQzX2xpbmVhcilcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L3BhdGg+XG4gICAgICA8ZWxsaXBzZVxuICAgICAgICBjeD1cIjI5NS4wMjdcIlxuICAgICAgICBjeT1cIjE5My4xMThcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NS4wMjcgLTE5My4xMTgpXCJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcbiAgICAgICAgZmlsbD1cIiM0NjczN1wiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiNXNcIlxuICAgICAgICAgIGJlZ2luPVwiMVwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8yXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9lbGxpcHNlPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yOTQuNjg1IDE5My40NzRMMjY4LjkzMiAyMTkuMjU4XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTQuNjg1IC0xOTMuNDc0KSByb3RhdGUoNDUgMjk0LjY4NSAxOTMuNDc0KVwiXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ3X2xpbmVhcilcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjVzXCJcbiAgICAgICAgICBiZWdpbj1cIjFcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiNDc2LjUyNVwiXG4gICAgICAgIGN5PVwiMzYzLjMxM1wiXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKDkwIDQ3Ni41MjUgMzYzLjMxMylcIlxuICAgICAgICBmaWxsPVwiIzk0NURENlwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjEwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHJvdGF0ZT1cImF1dG9cIj5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNDc2LjE3MSAzNjIuOTUyTDQ1MC40MTcgMzM3LjE2OFwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKC00NSA0NzYuMTcxIDM2Mi45NTIpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDRfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjEwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHJvdGF0ZT1cImF1dG9cIj5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiMzgyLjE2NFwiXG4gICAgICAgIGN5PVwiMTU1LjAyOVwiXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzgyLjE2NCAtMTU1LjAyOSkgcm90YXRlKDkwIDM4Mi4xNjQgMTU1LjAyOSlcIlxuICAgICAgICBmaWxsPVwiI0Y0NjczN1wiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTBzXCJcbiAgICAgICAgICBiZWdpbj1cIjFcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzgxLjgxIDE1NC42NjlMMzU2LjA1NyAxMjguODg1XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODEuODEgLTE1NC42NjkpIHJvdGF0ZSgtNDUgMzgxLjgxIDE1NC42NjkpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDVfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTBzXCJcbiAgICAgICAgICBiZWdpbj1cIjFcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiMzMzLjMyNFwiXG4gICAgICAgIGN5PVwiMzgyLjY5MVwiXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXG4gICAgICAgIHJ5PVwiMS4wNzQzM1wiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzMzLjMyNCAtMzgyLjY5MSkgcm90YXRlKC0xODAgMzMzLjMyNCAzODIuNjkxKVwiXG4gICAgICAgIGZpbGw9XCIjRjQ2NzM3XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCI1c1wiXG4gICAgICAgICAgYmVnaW49XCIwXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzFcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L2VsbGlwc2U+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMzMy42NjcgMzgyLjMzNUwzNTkuNDIgMzU2LjU1MVwiXG4gICAgICAgIHRyYW5zZm9ybT1cInNjYWxlKC0xIDEpIHRyYW5zbGF0ZSgtMzMzLjY2NyAtMzgyLjMzNSkgcm90YXRlKDQ1IDMzMy42NjcgMzgyLjMzNSlcIlxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Nl9saW5lYXIpXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCI1c1wiXG4gICAgICAgICAgYmVnaW49XCIwXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzFcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L3BhdGg+XG4gICAgICA8ZWxsaXBzZVxuICAgICAgICBjeD1cIjE2NS41MjRcIlxuICAgICAgICBjeT1cIjkzLjk1OTZcIlxuICAgICAgICByeD1cIjEuMDczMDZcIlxuICAgICAgICByeT1cIjEuMDc0MzNcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2NS41MjQgLTkzLjk1OTYpXCJcbiAgICAgICAgZmlsbD1cIiNGNDY3MzdcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjEwc1wiXG4gICAgICAgICAgYmVnaW49XCIzXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L2VsbGlwc2U+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE2NS4xODIgOTQuMzE1OUwxMzkuNDI5IDEyMC4xXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjUuMTgyIC05NC4zMTU5KSByb3RhdGUoNDUgMTY1LjE4MiA5NC4zMTU5KVwiXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ3X2xpbmVhcilcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjEwc1wiXG4gICAgICAgICAgYmVnaW49XCIzXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L3BhdGg+XG4gICAgICA8ZWxsaXBzZVxuICAgICAgICBjeD1cIjQ3Ni41MjVcIlxuICAgICAgICBjeT1cIjM2My4zMTNcIlxuICAgICAgICByeD1cIjEuMDc0MzNcIlxuICAgICAgICByeT1cIjEuMDczMDZcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3Ni41MjUgLTM2My4zMTMpIHJvdGF0ZSg5MCA0NzYuNTI1IDM2My4zMTMpXCJcbiAgICAgICAgZmlsbD1cIiMxM0FEQzdcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjEyc1wiXG4gICAgICAgICAgYmVnaW49XCI0XCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L2VsbGlwc2U+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQ3Ni4xNzEgMzYyLjk1Mkw0NTAuNDE3IDMzNy4xNjhcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3Ni41MjUgLTM2My4zMTMpIHJvdGF0ZSgtNDUgNDc2LjE3MSAzNjIuOTUyKVwiXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQxMV9saW5lYXIpXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCIxMnNcIlxuICAgICAgICAgIGJlZ2luPVwiNFwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9wYXRoPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxyYWRpYWxHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQwX3JhZGlhbFwiXG4gICAgICAgICAgY3g9XCIwXCJcbiAgICAgICAgICBjeT1cIjBcIlxuICAgICAgICAgIHI9XCIxXCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwMSAzMDEpIHJvdGF0ZSg5MCkgc2NhbGUoMzAwKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjMzMzMzM1wiIHN0b3BDb2xvcj1cIiNGQkZCRkJcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XG4gICAgICAgIDxyYWRpYWxHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQxX3JhZGlhbFwiXG4gICAgICAgICAgY3g9XCIwXCJcbiAgICAgICAgICBjeT1cIjBcIlxuICAgICAgICAgIHI9XCIxXCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwMSAzMDEpIHJvdGF0ZSg5MCkgc2NhbGUoMzAwKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjMzMzMzM1wiIHN0b3BDb2xvcj1cIiNGQkZCRkJcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XG4gICAgICAgIDxyYWRpYWxHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQyX3JhZGlhbFwiXG4gICAgICAgICAgY3g9XCIwXCJcbiAgICAgICAgICBjeT1cIjBcIlxuICAgICAgICAgIHI9XCIxXCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwMSAzMDEpIHJvdGF0ZSg5MCkgc2NhbGUoMzAwKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjMzMzMzM1wiIHN0b3BDb2xvcj1cIiNGQkZCRkJcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQzX2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIyOTUuMDQzXCJcbiAgICAgICAgICB5MT1cIjE5My4xMTZcIlxuICAgICAgICAgIHgyPVwiMjY5Ljk3NVwiXG4gICAgICAgICAgeTI9XCIyMTguMTU0XCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM5NDVERDZcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cInBhaW50NF9saW5lYXJcIlxuICAgICAgICAgIHgxPVwiNDc2LjUyOVwiXG4gICAgICAgICAgeTE9XCIzNjMuMzFcIlxuICAgICAgICAgIHgyPVwiNDUxLjQ2MVwiXG4gICAgICAgICAgeTI9XCIzMzguMjcyXCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM5NDVERDZcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cInBhaW50NV9saW5lYXJcIlxuICAgICAgICAgIHgxPVwiMzgyLjE2OFwiXG4gICAgICAgICAgeTE9XCIxNTUuMDI3XCJcbiAgICAgICAgICB4Mj1cIjM1Ny4xXCJcbiAgICAgICAgICB5Mj1cIjEyOS45ODlcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ2X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIzMzMuMzA5XCJcbiAgICAgICAgICB5MT1cIjM4Mi42OTNcIlxuICAgICAgICAgIHgyPVwiMzU4LjM3NlwiXG4gICAgICAgICAgeTI9XCIzNTcuNjU1XCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Y0NjczN1wiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cInBhaW50N19saW5lYXJcIlxuICAgICAgICAgIHgxPVwiMTY1LjU0XCJcbiAgICAgICAgICB5MT1cIjkzLjk1NzhcIlxuICAgICAgICAgIHgyPVwiMTQwLjQ3MlwiXG4gICAgICAgICAgeTI9XCIxMTguOTk2XCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Y0NjczN1wiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cInBhaW50OF9saW5lYXJcIlxuICAgICAgICAgIHgxPVwiNDE0LjM2N1wiXG4gICAgICAgICAgeTE9XCIzMDEuMTU2XCJcbiAgICAgICAgICB4Mj1cIjQzOS40MzVcIlxuICAgICAgICAgIHkyPVwiMjc2LjExOFwiXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDlfbGluZWFyXCJcbiAgICAgICAgICB4MT1cIjUxNS45NDNcIlxuICAgICAgICAgIHkxPVwiMjg4LjIzOFwiXG4gICAgICAgICAgeDI9XCI1NDEuMzM5XCJcbiAgICAgICAgICB5Mj1cIjI5MS40NTRcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMTNBREM3XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzEzQURDN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQxMF9saW5lYXJcIlxuICAgICAgICAgIHgxPVwiMTE3LjAwMVwiXG4gICAgICAgICAgeTE9XCIyMzAuNjE5XCJcbiAgICAgICAgICB4Mj1cIjExNy4zNlwiXG4gICAgICAgICAgeTI9XCIyNTguMTkzXCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiM5NDVERDZcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cInBhaW50MTFfbGluZWFyXCJcbiAgICAgICAgICB4MT1cIjQ3Ni41MjlcIlxuICAgICAgICAgIHkxPVwiMzYzLjMxXCJcbiAgICAgICAgICB4Mj1cIjQ1MS40NjFcIlxuICAgICAgICAgIHkyPVwiMzM4LjI3MlwiXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kQW5pbWF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpRmlsbEluc3RhZ3JhbSwgQWlGaWxsTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5cbmltcG9ydCB7IFNvY2lhbEljb25zIH0gZnJvbSAnLi4vSGVhZGVyL0hlYWRlclN0eWxlcyc7XG5pbXBvcnQge1xuICBDb21wYW55Q29udGFpbmVyLFxuICBGb290ZXJXcmFwcGVyLFxuICBMaW5rQ29sdW1uLFxuICBMaW5rSXRlbSxcbiAgTGlua0xpc3QsXG4gIExpbmtUaXRsZSxcbiAgU2xvZ2FuLFxuICBTb2NpYWxDb250YWluZXIsXG4gIFNvY2lhbEljb25zQ29udGFpbmVyLFxufSBmcm9tICcuL0Zvb3RlclN0eWxlcyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9vdGVyV3JhcHBlcj5cbiAgICAgIDxMaW5rTGlzdD5cbiAgICAgICAgPExpbmtDb2x1bW4+XG4gICAgICAgICAgPExpbmtUaXRsZT5DYWxsPC9MaW5rVGl0bGU+XG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9J3RlbDorMjE2NTU3OTUwNTAnPisyMTYgNTUgNzkgNTAgNTA8L0xpbmtJdGVtPlxuICAgICAgICA8L0xpbmtDb2x1bW4+XG4gICAgICAgIDxMaW5rQ29sdW1uPlxuICAgICAgICAgIDxMaW5rVGl0bGU+RW1haWw8L0xpbmtUaXRsZT5cbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj0nbWFpbHRvOm1hbGVraGFkZGFyOEBnbWFpbC5jb20nPlxuICAgICAgICAgICAgbWFsZWtoYWRkYXI4QGdtYWlsLmNvbVxuICAgICAgICAgIDwvTGlua0l0ZW0+XG4gICAgICAgIDwvTGlua0NvbHVtbj5cbiAgICAgIDwvTGlua0xpc3Q+XG4gICAgICA8U29jaWFsSWNvbnNDb250YWluZXI+XG4gICAgICAgIDxDb21wYW55Q29udGFpbmVyPlxuICAgICAgICAgIDxTbG9nYW4+SW5ub3ZhdGluZyBvbmUgcHJvamVjdCBhdCBhIHRpbWUgITwvU2xvZ2FuPlxuICAgICAgICA8L0NvbXBhbnlDb250YWluZXI+XG4gICAgICAgIDxTb2NpYWxDb250YWluZXI+XG4gICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9NYWxlay1IYWRkYXInPlxuICAgICAgICAgICAgPEFpRmlsbEdpdGh1YiBzaXplPSczcmVtJyAvPlxuICAgICAgICAgIDwvU29jaWFsSWNvbnM+XG4gICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tYWxlay1oYWRkYXItMjg4MzA0MTgyLyc+XG4gICAgICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT0nM3JlbScgLz5cbiAgICAgICAgICA8L1NvY2lhbEljb25zPlxuICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL21hbGlrX2hhZGRhci8nPlxuICAgICAgICAgICAgPEFpRmlsbEluc3RhZ3JhbSBzaXplPSczcmVtJyAvPlxuICAgICAgICAgIDwvU29jaWFsSWNvbnM+XG4gICAgICAgIDwvU29jaWFsQ29udGFpbmVyPlxuICAgICAgPC9Tb2NpYWxJY29uc0NvbnRhaW5lcj5cbiAgICA8L0Zvb3RlcldyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG5cdHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTZweCk7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBwYWRkaW5nOiAycmVtIDQ4cHggNDBweDtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwIDE2cHggNDhweDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rSXRlbSA9IHN0eWxlZC5hYFxuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2U7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGVmdDogMDtcblxuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRsZWZ0OiA2cHg7XG5cdH1cblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMjhweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcblx0XHRmb250LXNpemU6IDhweDtcblx0XHRsaW5lLWhlaWdodDogMTRweDtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5tYXgtd2lkdGg6IDEwNDBweDtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYFxuXG5leHBvcnQgY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXHR9XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRtYXJnaW46IDAgMCAzMnB4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cbmBcblxuXG5leHBvcnQgY29uc3QgU2xvZ2FuID0gc3R5bGVkLnBgXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdG1pbi13aWR0aDogMjgwcHg7XG5cdGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdHBhZGRpbmc6IDFyZW07XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMjhweDtcblx0fVxuXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcblx0XHRsaW5lLWhlaWdodDogMjJweDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bWluLXdpZHRoOiAxMDBweDtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgU29jaWFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdH1cbmBcblxuXG5leHBvcnQgY29uc3QgTGlua0xpc3QgPSBzdHlsZWQudWxgXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg4NXB4LCAyMjBweCkpO1xuXHRnYXA6IDQwcHg7XG4gIHBhZGRpbmc6IDQwcHggMCAyOHB4O1xuXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XG5cdFx0cGFkZGluZzogMzJweCAwIDE2cHg7XG5cdH1cblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDMycHggMCAxNnB4O1xuXHRcdGdhcDogMTZweDtcblx0fVxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDMycHggNHB4IDE2cHg7XG5cdFx0Z2FwOiA1cHg7XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtDb2x1bW4gPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXgtd2lkdGg6IDIyMHB4O1xuXHR3aWR0aDogMTAwJTtcbmBcbmV4cG9ydCBjb25zdCBMaW5rVGl0bGUgPSBzdHlsZWQuaDRgXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRsaW5lLWhlaWdodDogMTJweDtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdH1cbmBcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxJbnN0YWdyYW0sIEFpRmlsbExpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgRGlDc3NkZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xuXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIERpdjEsXG4gIERpdjIsXG4gIERpdjMsXG4gIE5hdkxpbmssXG4gIFNvY2lhbEljb25zLFxuICBTcGFuLFxufSBmcm9tICcuL0hlYWRlclN0eWxlcyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8RGl2MT5cbiAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICA8YVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxEaUNzc2RlY2sgc2l6ZT0nM3JlbScgLz4gPFNwYW4+UG9ydGZvbGlvPC9TcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9EaXYxPlxuICAgIDxEaXYyPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPScjcHJvamVjdHMnPlxuICAgICAgICAgIDxOYXZMaW5rPlByb2plY3RzPC9OYXZMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPScjdGVjaCc+XG4gICAgICAgICAgPE5hdkxpbms+VGVjaG5vbG9naWVzPC9OYXZMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPScjYWJvdXQnPlxuICAgICAgICAgIDxOYXZMaW5rPkFib3V0PC9OYXZMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvRGl2Mj5cbiAgICA8RGl2Mz5cbiAgICAgIDxTb2NpYWxJY29ucyBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vTWFsZWstSGFkZGFyJz5cbiAgICAgICAgPEFpRmlsbEdpdGh1YiBzaXplPSczcmVtJyAvPlxuICAgICAgPC9Tb2NpYWxJY29ucz5cbiAgICAgIDxTb2NpYWxJY29ucyBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbWFsZWstaGFkZGFyLTI4ODMwNDE4Mi8nPlxuICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT0nM3JlbScgLz5cbiAgICAgIDwvU29jaWFsSWNvbnM+XG4gICAgICA8U29jaWFsSWNvbnMgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9tYWxpa19oYWRkYXIvJz5cbiAgICAgICAgPEFpRmlsbEluc3RhZ3JhbSBzaXplPSczcmVtJyAvPlxuICAgICAgPC9Tb2NpYWxJY29ucz5cbiAgICA8L0RpdjM+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IHsgSW9Jb3NBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDYwcHgpO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMC41cmVtO1xuICAgIGdyaWQtcm93LWdhcDogMC41cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3BhbiA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgRGl2MSA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IERpdjIgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IERpdjMgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyA1IC8gMiAvIDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWFyZWE6IDEgLyA0IC8gMiAvIDY7XG4gIH1cbmA7XG5cbi8vIE5hdmlnYXRpb24gTGlua3NcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbmA7XG5cbi8vLyBEcm9wRG93biBDb250YWN0XG5leHBvcnQgY29uc3QgQ29udGFjdERyb3BEb3duID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdlByb2R1Y3RzSWNvbiA9IHN0eWxlZChJb0lvc0Fycm93RHJvcGRvd24pYFxuICBtYXJnaW4tbGVmdDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgb3BhY2l0eTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICcxJyA6ICcuNzUnKX07XG4gIHRyYW5zZm9ybTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICdzY2FsZVkoLTEpJyA6ICdzY2FsZVkoMSknKX07XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW46IDJweCAwIDAgMnB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG5gO1xuXG4vLyBTb2NpYWwgSWNvbnNcblxuZXhwb3J0IGNvbnN0IFNvY2lhbEljb25zID0gc3R5bGVkLmFgXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEltZyB9IGZyb20gJy4uL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzJztcbmltcG9ydCB7XG4gIFNlY3Rpb24sXG4gIFNlY3Rpb25UZXh0LFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCB7IExlZnRTZWN0aW9uIH0gZnJvbSAnLi9IZXJvU3R5bGVzJztcblxuY29uc3QgSGVybyA9IChwcm9wcykgPT4gKFxuICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxuICAgIDxMZWZ0U2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uVGl0bGUgbWFpbiBjZW50ZXI+XG4gICAgICAgIFdlbGNvbWUgVG8gPGJyIC8+XG4gICAgICAgIE15IFBlcnNvbmFsIFBvcnRmb2xpb1xuICAgICAgPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgcG9ydGZvbGlvIGlzIHRvIHByZXNlbnQgbXkgc2VsZiB0byB0aGUgd29ybGQgYW5kXG4gICAgICAgIHRha2UgbXkgZGV2ZWxvcG1lbnQgc2tpbGxzIHRvIHRoZSBuZXh0IGxldmVsLlxuICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAod2luZG93LmxvY2F0aW9uID1cbiAgICAgICAgICAgICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbWFsZWstaGFkZGFyLTI4ODMwNDE4Mi9kZXRhaWwvb3ZlcmxheS12aWV3L3VybjpsaTpmc2RfcHJvZmlsZVRyZWFzdXJ5TWVkaWE6KEFDb0FBQ3Nkb0lnQmx6by1ZZ3RCTmthUXZ3S245TVhCN3RpQTFnSSwxNjM1NDU4MDMyNDI1KS8nKVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIExlYXJuIE1vcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvTGVmdFNlY3Rpb24+XG4gICAgey8qICA8TGVmdFNlY3Rpb24+XG4gICAgICA8aW1nIHNyYz0nL2ltYWdlcy8xMi5qcGcnIC8+XG4gICAgPC9MZWZ0U2VjdGlvbj4gKi99XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IExlZnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIEJsb2dDYXJkLFxuICBDYXJkSW5mbyxcbiAgRXh0ZXJuYWxMaW5rcyxcbiAgR3JpZENvbnRhaW5lcixcbiAgSGVhZGVyVGhyZWUsXG4gIEhyLFxuICBUYWcsXG4gIFRhZ0xpc3QsXG4gIFRpdGxlQ29udGVudCxcbiAgVXRpbGl0eUxpc3QsXG4gIEltZyxcbn0gZnJvbSAnLi9Qcm9qZWN0c1N0eWxlcyc7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IChcbiAgPFNlY3Rpb24gbm9wYWRkaW5nIGlkPSdwcm9qZWN0cyc+XG4gICAgPFNlY3Rpb25EaXZpZGVyIC8+XG4gICAgPFNlY3Rpb25UaXRsZSBtYWluPlByb2plY3RzPC9TZWN0aW9uVGl0bGU+XG4gICAgPEdyaWRDb250YWluZXI+XG4gICAgICB7cHJvamVjdHMubWFwKFxuICAgICAgICAoeyBpZCwgaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFncywgc291cmNlLCB2aXNpdCB9KSA9PiAoXG4gICAgICAgICAgPEJsb2dDYXJkIGtleT17aWR9PlxuICAgICAgICAgICAgPEltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgPFRpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgPEhlYWRlclRocmVlIHRpdGxlPnt0aXRsZX08L0hlYWRlclRocmVlPlxuICAgICAgICAgICAgICA8SHIgLz5cbiAgICAgICAgICAgIDwvVGl0bGVDb250ZW50PlxuICAgICAgICAgICAgPENhcmRJbmZvPntkZXNjcmlwdGlvbn08L0NhcmRJbmZvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFRpdGxlQ29udGVudD5TdGFjazwvVGl0bGVDb250ZW50PlxuICAgICAgICAgICAgICA8VGFnTGlzdD5cbiAgICAgICAgICAgICAgICB7dGFncy5tYXAoKHRhZywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhZyBrZXk9e2l9Pnt0YWd9PC9UYWc+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvVGFnTGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFV0aWxpdHlMaXN0PlxuICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXt2aXNpdH0+IENvZGUgPC9FeHRlcm5hbExpbmtzPlxuICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXtzb3VyY2V9PiBQcmV2aWV3IDwvRXh0ZXJuYWxMaW5rcz5cbiAgICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XG4gICAgICAgICAgPC9CbG9nQ2FyZD5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8L0dyaWRDb250YWluZXI+XG4gIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gXG5cbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xucGFkZGluZzogM3JlbTtcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5jb2x1bW4tZ2FwOiAycmVtO1xucm93LWdhcDogM3JlbTtcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmBcbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDEwMCU7XG5cbmA7XG5cblxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzljYzllMztcbiAgcGFkZGluZzogLjVyZW0gMDtcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGl0bGUgPyAnM3JlbScgOiAnMnJlbSd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XG5gO1xuXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2RjZTNlNztcbiAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIHNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBjb2xvcjogI2U0ZTZlNztcbiAgZm9udC1zdHlsZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOi4zcmVtXG4gIFxufVxuYDtcblxuXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMi41cmVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxMaW5rcyA9IHN0eWxlZC5hYFxuY29sb3I6I2Q0YzBjMDtcbmZvbnQtc2l6ZTogMS42cmVtO1xucGFkZGluZzoxcmVtIDEuNXJlbTtcbmJhY2tncm91bmQ6ICM2YjMwMzA7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xudHJhbnNpdGlvbjogMC41cztcbiY6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICM4MDE0MTQ7XG5cbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xucGFkZGluZzogMnJlbTtcbmBcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXG5jb2xvcjogI2Q4YmZiZjtcbmZvbnQtc2l6ZTogMS41cmVtO1xuYCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEaUZpcmViYXNlLCBEaVJlYWN0LCBEaVplbmQgfSBmcm9tICdyZWFjdC1pY29ucy9kaSc7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRleHQsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgTGlzdCxcbiAgTGlzdENvbnRhaW5lcixcbiAgTGlzdEl0ZW0sXG4gIExpc3RQYXJhZ3JhcGgsXG4gIExpc3RUaXRsZSxcbn0gZnJvbSAnLi9UZWNobm9sb2dpZXNTdHlsZXMnO1xuXG5jb25zdCBUZWNobm9sb2dpZXMgPSAoKSA9PiAoXG4gIDxTZWN0aW9uIGlkPSd0ZWNoJz5cbiAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8YnIgLz5cbiAgICA8U2VjdGlvblRpdGxlPlRlY2hub2xvZ2llczwvU2VjdGlvblRpdGxlPlxuICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgIEkndmUgd29ya2VkIHdpdGggYSByYW5nZSBhIHRlY2hub2xvZ2llcyBpbiB0aGUgd2ViIGRldmVsb3BtZW50IHdvcmxkLiBGcm9tXG4gICAgICBCYWNrLWVuZCBUbyBEZXNpZ257JyAnfVxuICAgIDwvU2VjdGlvblRleHQ+XG4gICAgPExpc3Q+XG4gICAgICA8TGlzdEl0ZW0+XG4gICAgICAgIDxEaVJlYWN0IHNpemU9JzNyZW0nIC8+XG4gICAgICAgIDxMaXN0Q29udGFpbmVyPlxuICAgICAgICAgIDxMaXN0VGl0bGU+RnJvbnQtRW5kPC9MaXN0VGl0bGU+XG4gICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XG4gICAgICAgICAgICBFeHBlcmllbmNlIHdpdGggPGJyIC8+XG4gICAgICAgICAgICBSZWFjdC5qc1xuICAgICAgICAgIDwvTGlzdFBhcmFncmFwaD5cbiAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgPERpRmlyZWJhc2Ugc2l6ZT0nM3JlbScgLz5cbiAgICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICAgICAgPExpc3RUaXRsZT5CYWNrLUVuZDwvTGlzdFRpdGxlPlxuICAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxuICAgICAgICAgICAgRXhwZXJpZW5jZSB3aXRoIDxiciAvPlxuICAgICAgICAgICAgTm9kZSBhbmQgRGF0YWJhc2VzXG4gICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxuICAgICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAgPExpc3RJdGVtPlxuICAgICAgICA8RGlaZW5kIHNpemU9JzNyZW0nIC8+XG4gICAgICAgIDxMaXN0Q29udGFpbmVyPlxuICAgICAgICAgIDxMaXN0VGl0bGU+VUkvVVg8L0xpc3RUaXRsZT5cbiAgICAgICAgICA8TGlzdFBhcmFncmFwaD5cbiAgICAgICAgICAgIEV4cGVyaWVuY2Ugd2l0aCA8YnIgLz5cbiAgICAgICAgICAgIHRvb2xzIGxpa2UgRmlnbWFcbiAgICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgPC9MaXN0PlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2dpZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCg1MCUgNTAlIGF0IDUwJSA1MCUsIHJnYmEoNzksIDEwOCwgMTc2LCAwLjI1KSA1My44JSwgcmdiYSg3OSwgMTA4LCAxNzYsIDApIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNjBweDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBNYWluSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiA0MHB4O1xuICBtYXJnaW46IDNyZW0gMDtcbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcbiAgICBtYXJnaW46IDY0cHggMDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBtYXJnaW46IDY0cHggMDtcbiAgICBnYXA6IDI0cHhcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDMycHggMDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RUaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RQYXJhZ3JhcGggPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gIG1heC13aWR0aDogMjAzcHg7XG59XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RJY29uID0gc3R5bGVkLmltZ2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBDYXJvdXNlbEJ1dHRvbixcbiAgQ2Fyb3VzZWxCdXR0b25Eb3QsXG4gIENhcm91c2VsQnV0dG9ucyxcbiAgQ2Fyb3VzZWxDb250YWluZXIsXG4gIENhcm91c2VsSXRlbSxcbiAgQ2Fyb3VzZWxJdGVtSW1nLFxuICBDYXJvdXNlbEl0ZW1UZXh0LFxuICBDYXJvdXNlbEl0ZW1UaXRsZSxcbiAgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlLFxufSBmcm9tICcuL1RpbWVMaW5lU3R5bGVzJztcbmltcG9ydCB7XG4gIFNlY3Rpb24sXG4gIFNlY3Rpb25EaXZpZGVyLFxuICBTZWN0aW9uVGV4dCxcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKFxuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKVxuICAgICAgKTtcblxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChcbiAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXG4gICAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqXG4gICAgICAgICAgVGltZUxpbmVEYXRhLmxlbmd0aFxuICAgICAgKTtcblxuICAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcbiAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIGlkPSdhYm91dCc+XG4gICAgICA8U2VjdGlvblRpdGxlPkFib3V0IE1lPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgIEkgYW0gYSBzZWxmLXRhdWdodCB3ZWIgZGV2ZWxvcGVyIHdpdGggYSBzdHJvbmcgZXllIGZvciBpbm5vdmF0aXZlXG4gICAgICAgIHRlY2hub2xvZ2llcyBhbmQgYSBrZWVuIHVuZGVyc3RhbmRpbmcgb2YgdGVjaG5pcXVlcyBnZWFyZWQgdG93YXJkXG4gICAgICAgIG9wdGltdW0gdXNlciBleHBlcmllbmNlXG4gICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxuICAgICAgICA8PlxuICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBmaW5hbD17aW5kZXggPT09IFRPVEFMX0NBUk9VU0VMX0NPVU5UIC0gMX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT5cbiAgICAgICAgICAgICAgICAgIHtgJHtpdGVtLnllYXJ9YH1cbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1JbWdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzIwOCdcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSc2J1xuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjA4IDYnXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAgIGQ9J00yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WidcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPSd1cmwoI3BhaW50MF9saW5lYXIpJ1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtb3BhY2l0eT0nMC4zMydcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0ncGFpbnQwX2xpbmVhcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPSctNC4zMDQxMmUtMTAnXG4gICAgICAgICAgICAgICAgICAgICAgICB5MT0nMC41J1xuICAgICAgICAgICAgICAgICAgICAgICAgeDI9JzIwOCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPScwLjUwMDI5NSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJ1xuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9J3doaXRlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PScwLjc5NDc4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLWNvbG9yPSd3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PScwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbUltZz5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UZXh0PntpdGVtLnRleHR9PC9DYXJvdXNlbEl0ZW1UZXh0PlxuICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICA8Q2Fyb3VzZWxCdXR0b25zPlxuICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcm91c2VsQnV0dG9uXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxuICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XG4gICAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiIsIlxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLnVsYFxuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcbiAgcGFkZGluZzogMHJlbTtcbiAgbGlzdC1zdHlsZTpub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXG5cbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICY6Zmlyc3Qtb2YtdHlwZXtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgbWFyZ2luLWJvdHRvbTogODBweDtcblxuICAvL3JlbW92ZSBzY3JvbGxiYXJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgXG4gICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgIGRpc3BsYXk6IG5vbmU7XG4gICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSA9IHN0eWxlZC5kaXZgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6ICR7KHsgZmluYWwgfSkgPT4gZmluYWwgPyBgMTIwJTtgIDogYG1pbi1jb250ZW50YH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzBGMTYyNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXgtd2lkdGg6IDE5NnB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiAxMjRweDtcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwRTEzMUY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgb3BhY2l0eTogMWAgOiBgb3BhY2l0eTogMC41YH07IFxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIFRoaXMgZ3JhZGllbnQgaXMgZGlmZmVyZW50IGR1ZSB0byB0aGUgc2l6ZSBvZiB0aGUgVGl0bGUgY29udGFpbmVyLCBpdCBtdXN0IHRyYW5zaXRpb24gc29vbmVyIHRvIGJlIHZpc2libGUgb24gdGhlIHRleHQgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgMzAuMTUlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1JbWcgPSBzdHlsZWQuc3ZnYFxuICBtYXJnaW4tbGVmdDogMjFweDtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xuICB3aWR0aDogMTAwJTtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICB9XG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjg4cHg7XG5cbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYDFgIDogYC4zM2B9O1xuICB0cmFuc2Zvcm06ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYHNjYWxlKDEuNilgIDogYHNjYWxlKDEpYH07XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25Eb3QgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDNweDtcbmBcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnUEkgRGV2JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdEZXZlbG9wZWQgYSB3ZWIgYXBwbGljYXRpb24gdGhhdCBsZXQgdXNlcnMgd2l0aCB0aGUgaGVscCBvZiBhIGNoYXRib3QgY3JlYXRlIHRoZWlyIHByb2Zlc3Npb25hbCBDViwgZW5yb2xsIGluIG9ubGluZSBjb3Vyc2VzLCBhbmQgZ2V0IGNvdXJzZXMsIGV2ZW50cywgYW5kIGpvYiBzdWdnZXN0aW9ucyBiYXNlZCBvbiB0aGVpciBza2lsbHMgKFJlYWN0LCBOb2RlIGpzLCBFeHByZXNzLCBNb25nb0RCLCBGaXJlYmFzZSwgRGlhbG9nZmxvdyDigKYgKScsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2hvbWUuanBnJyxcbiAgICB0YWdzOiBbJ01vbmdvJywgJ0V4cHJlc3MnLCAnUmVhY3QnLCAnTm9kZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vYmxpdHotYXNzaXN0YW50Lmhlcm9rdWFwcC5jb20vJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NYWxlay1IYWRkYXIvRWxpdGUtZGV2cy1CbGl0ei1DaGF0Ym90JyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRS1Db21tZXJjZScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldoaWxlIGJ1aWxkaW5nIGl0IHlvdSdyZSBnb2luZyB0byBsZWFybiBtYW55IGFkdmFuY2VkIFJlYWN0ICYgSmF2YVNjcmlwdCB0b3BpY3MsIGFzIHdlbGwgYXMgaG93IHRvIHVzZSBTdHJpcGUgZm9yIGNhcmQgdHJhbnNhY3Rpb25zLiBPbiB0b3Agb2YgdGhhdCwgYXQgdGhlIGVuZCBvZiB0aGUgdmlkZW8sIHlvdSB3aWxsIGhhdmUgdGhpcyB1bmlxdWUgYW5kIGNvbXBsZXggd2Vic2hvcCBhcHAgdGhhdCB5b3Ugd2lsbCBiZSBhYmxlIHRvIGFkZCB0byB5b3VyIHBvcnRmb2xpby4gQW5kIHRydXN0IG1lLCBlLWNvbW1lcmNlIGFwcGxpY2F0aW9ucyBhcmUgaW1wcmVzc2l2ZS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvMi5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdXZWJSVEMgQXBwJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWW91VHViZSB2aWRlby4gSW4gdGhpcyB0dXRvcmlhbCwgd2UncmUgZ29pbmcgdG8gYnVpbGQgYW5kIGRlcGxveSBhIFJlYWN0IFZpZGVvIENoYXQgQXBwbGljYXRpb24gdXNpbmcgV2ViUlRDLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy8zLmpwZycsXG4gICAgdGFnczogWydSZWFjdCcsICdXZWJSVEMnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVW5pY2hhdCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uJyxcbiAgICBpbWFnZTogJy9pbWFnZXMvNC5qcGcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnQ2hhdEVuZ2luZScsICdGaXJlYmFzZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAzLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE2LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JyB9LFxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdXb3JrZWQgYXMgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyJyB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJyB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTdGFydGVkIG15IG93biBwbGF0Zm9ybScgfSxcbl07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL0xheW91dFN0eWxlcydcblxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgPEhlYWRlci8+XG4gICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+IFxuICAgICA8Rm9vdGVyLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxubWF4LXdpZHRoOiAxMjgwcHg7XG53aWR0aDogMTAwJTtcbm1hcmdpbjogYXV0bztcbmA7XG4iLCJpbXBvcnQgQWNvbXBsaXNobWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50cyc7XG5pbXBvcnQgQmdBbmltYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyby9IZXJvJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzJztcbmltcG9ydCBUZWNobm9sb2dpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dC9MYXlvdXQnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFNlY3Rpb24gZ3JpZD5cbiAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgPEJnQW5pbWF0aW9uIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8UHJvamVjdHMgLz5cbiAgICAgIDxUZWNobm9sb2dpZXMgLz5cbiAgICAgIDxUaW1lbGluZSAvPlxuICAgICAgPEFjb21wbGlzaG1lbnRzIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBCdXR0b25CYWNrLCBCdXR0b25Gcm9udCB9IGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4gKFxuICA8QnV0dG9uQmFjayBhbHQ9e3Byb3BzLmFsdH0gZm9ybT17cHJvcHMuZm9ybX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT57cHJvcHMuY2hpbGRyZW59XG4gICAgPEJ1dHRvbkZyb250IGFsdD17cHJvcHMuYWx0fSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9Pntwcm9wcy5jaGlsZHJlbn08L0J1dHRvbkZyb250PlxuICA8L0J1dHRvbkJhY2s+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiBwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIiB9O1xuICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHMpID0+IHByb3BzLnJvdyA/IFwicm93XCIgOiBcImNvbHVtblwiIH07XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMzJweCA0OHB4IDBcIiB9IDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHBhZGRpbmc6IDI0cHggNDhweCAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm5vcGFkZGluZyA/IFwiMFwiIDogXCIxNnB4IDE2cHggMFwiIH0gO1xuXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNjVweCcgOiAnNTZweCd9O1xuICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNzJweCcgOiAnNTZweCd9O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxOC43NyUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgNjAuMTUlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNThweCAwIDE2cHgnIDogJzAnfTtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1NnB4JyA6ICc0OHB4J307XG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnfTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzQwcHggMCAxMnB4JyA6ICcwJ307XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMjhweCcgOiAnMzJweCd9O1xuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICczMnB4JyA6ICc0MHB4J307XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzE2cHggMCA4cHgnIDogJzAnfTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UZXh0ID0gc3R5bGVkLnBgXG4gIG1heC13aWR0aDogODAwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctYm90dG9tOiAzLjZyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIG1heC13aWR0aDogNjcwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU2VjdGlvbkRpdmlkZXIgPSBzdHlsZWQuZGl2YFxuXG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yQWx0ID8gXG4gICAgJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSknIDpcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKSd9O1xuXG4gICAgbWFyZ2luOiAkeyhwcm9wcykgPT4gcHJvcHMuZGl2aWRlciA/IFwiNHJlbSAwXCIgOiBcIlwiIH07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNHB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMnB4O1xuICB9XG5gXG5leHBvcnQgY29uc3QgU2VjdGlvblN1YlRleHQgPSBzdHlsZWQucGBcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG5cbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXgtd2lkdGg6IDY3MnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMzKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjMGYxNjI0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNGViO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDQxNjk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgbWFyZ2luLXRvcDogMjRweDsgXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25CYWNrID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxNTBweCcgOiAnMjYycHgnfTtcbiAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNTJweCcgOiAnNjRweCd9O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcyNHB4J307XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46ICR7KHsgYWx0LCBmb3JtIH0pID0+IChhbHQgfHwgZm9ybSkgPyAnMCcgOiAnMCAwIDgwcHgnfTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY2MjJlIDAlLCAjQjEzM0ZGIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpJ307XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcxNTBweCcgOiAnMTg0cHgnfTtcbiAgICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc1MnB4JyA6ICc0OHB4J307XG4gICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcwJyA6ICc2NHB4J307XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMCcgOiAnMzJweCd9O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gcm9udCA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKSd9O1xuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IGRpc2FibGVkID8gJy41JyA6ICcxJ307XG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcyNHB4J307XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpJyA6ICdub25lJ307XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgfVxuXG4gICY6ZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzE2cHgnfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcyNHB4JyA6ICcxNnB4J307XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDhweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMTZweCcgOiAnOHB4J307XG5cbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMCcgOiAnOHB4J307XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtJY29uSW1nID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDsgIFxuICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMzJweCcgOiAnMjRweCd9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBoZWlnaHQ6ICR7KHsgbmF2IH0pID0+IG5hdiA/ICcxNnB4JyA6ICcyNHB4J307XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzMycHgnIDogJzE2cHgnfTtcbiAgfVxuYFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9