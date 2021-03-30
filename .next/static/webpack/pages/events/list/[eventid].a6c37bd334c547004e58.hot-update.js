webpackHotUpdate_N_E("pages/events/list/[eventid]",{

/***/ "./pages/events/list/[eventid].js":
/*!****************************************!*\
  !*** ./pages/events/list/[eventid].js ***!
  \****************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_events_detail_event_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/events/detail/event-content */ \"./components/events/detail/event-content.js\");\n/* harmony import */ var _components_events_detail_event_logistics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/events/detail/event-logistics */ \"./components/events/detail/event-logistics.js\");\n/* harmony import */ var _components_events_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/events/detail/event-summary */ \"./components/events/detail/event-summary.js\");\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/layout/layout */ \"./components/layout/layout.js\");\n\n\n\nvar _jsxFileName = \"/home/rahimlisarkhan/Documents/NEXT JS LESSON/Practice/NextJs-BlogProject/pages/events/list/[eventid].js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar EventDetailPage = function EventDetailPage(props) {\n  console.log(props);\n\n  if (!event) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"No event found!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        charset: \"UTF-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"keywords\",\n        content: \"give a short or mid description about the content keywords of your website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"give a short or mid description about the contents of your website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"author\",\n        content: \"write the name of the author of the webpage\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        \"http-equi\": \"refresh\",\n        content: \"5; url='write the url of your website'\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"event-details\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_detail_event_summary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          title: event.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_detail_event_logistics__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          event: event\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_events_detail_event_content__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: event.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 27\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = EventDetailPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventDetailPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventDetailPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL2xpc3QvW2V2ZW50aWRdLmpzPzIwMGUiXSwibmFtZXMiOlsiRXZlbnREZXRhaWxQYWdlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFJQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUUvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7O0FBRUEsTUFBSSxDQUFDRyxLQUFMLEVBQVk7QUFDVix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDQSxxRUFBQyxnREFBRDtBQUFBLDhCQUVJO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQU9JO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosZUFXSTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKLGVBZ0JJO0FBQ0UscUJBQVUsU0FEWjtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkosZUFvQkk7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQXdCQSxxRUFBQyxpRUFBRDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0kscUVBQUMsK0VBQUQ7QUFBYyxlQUFLLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLGlGQUFEO0FBQWdCLGVBQUssRUFBRUQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLHFFQUFDLCtFQUFEO0FBQUEsaUNBQWM7QUFBQSxzQkFBSUEsS0FBSyxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkE7QUFBQSxrQkFERjtBQWtDRCxDQTFDRDs7S0FBSU4sZTs7QUFzRVdBLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZXZlbnRzL2xpc3QvW2V2ZW50aWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgZ2V0RXZlbnRzRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9hcGkvZXZlbnRcIjtcbmltcG9ydCBFdmVudENvbnRlbnQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2RldGFpbC9ldmVudC1jb250ZW50XCI7XG5pbXBvcnQgRXZlbnRMb2dpc3RpY3MgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2RldGFpbC9ldmVudC1sb2dpc3RpY3NcIjtcbmltcG9ydCBFdmVudFN1bW1hcnkgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2RldGFpbC9ldmVudC1zdW1tYXJ5XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXRcIjtcbmltcG9ydCB7IGluaXRpYWxpemVTdG9yZSB9IGZyb20gXCIuLi8uLi8uLi9yZWR1eC1zdG9yZS9zdG9yZVwiO1xuXG5sZXQgRXZlbnREZXRhaWxQYWdlID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc29sZS5sb2cocHJvcHMpO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICByZXR1cm4gPHA+Tm8gZXZlbnQgZm91bmQhPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8SGVhZD5cblxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXG4gICAgICAgICAgY29udGVudD1cImdpdmUgYSBzaG9ydCBvciBtaWQgZGVzY3JpcHRpb24gYWJvdXQgdGhlIGNvbnRlbnQga2V5d29yZHMgb2YgeW91ciB3ZWJzaXRlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJnaXZlIGEgc2hvcnQgb3IgbWlkIGRlc2NyaXB0aW9uIGFib3V0IHRoZSBjb250ZW50cyBvZiB5b3VyIHdlYnNpdGVcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJhdXRob3JcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3cml0ZSB0aGUgbmFtZSBvZiB0aGUgYXV0aG9yIG9mIHRoZSB3ZWJwYWdlXCJcbiAgICAgICAgLz5cbiAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJyZWZyZXNoXCIgY29udGVudD1cIjUwXCIvPiAqL31cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBodHRwLWVxdWk9XCJyZWZyZXNoXCJcbiAgICAgICAgICBjb250ZW50PVwiNTsgdXJsPSd3cml0ZSB0aGUgdXJsIG9mIHlvdXIgd2Vic2l0ZSdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICBcbiAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWRldGFpbHNcIj5cbiAgICAgICAgICAgIDxFdmVudFN1bW1hcnkgdGl0bGU9e2V2ZW50LnRpdGxlfSAvPlxuICAgICAgICAgICAgPEV2ZW50TG9naXN0aWNzIGV2ZW50PXtldmVudH0gLz5cbiAgICAgICAgICAgIDxFdmVudENvbnRlbnQ+PHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD48L0V2ZW50Q29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgY29uc3Qge3BhcmFtc30gPSBjb250ZXh0LFxuICAgICAgICAgZXZlbnRpZCA9IHBhcmFtcy5ldmVudGlkXG5cbiAgY29uc3QgcmVkdXhTdG9yZSA9IGluaXRpYWxpemVTdG9yZSgpLFxuICAgICAgICB7ZGlzcGF0Y2h9ID0gcmVkdXhTdG9yZVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEV2ZW50c0RhdGEoKVxuICAgICAgICBjb25zdCBldmVudHMgPSBbXTtcbiAgICBcbiAgICAgICAgZm9yKGNvbnN0IGtleSBpbiByZXMuZGF0YSl7XG4gICAgICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgaWQ6a2V5LFxuICAgICAgICAgICAgLi4ucmVzLmRhdGFba2V5XX1cbiAgICAgICAgICAgICl9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5maW5kKChldmVudCkgPT4gZXZlbnRpZCA9PT0gZXZlbnQuaWQpO1xuXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOmFjdGlvblR5cGVzLkdFVF9FVkVOVFMsIHBheWxvYWQ6ZXZlbnR9KSAgXG4gICAgICAgIFxuICAgICAgXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKCkgfSB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBFdmVudERldGFpbFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/list/[eventid].js\n");

/***/ })

})