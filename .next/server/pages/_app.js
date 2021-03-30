module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/tailwindcss/tailwind.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux-store/store */ \"./redux-store/store.js\");\n/* harmony import */ var _sass_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/globals.scss */ \"./sass/globals.scss\");\n/* harmony import */ var _sass_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_globals_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/rahimlisarkhan/Documents/NEXT JS LESSON/Practice/NextJs-BlogProject/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const store = Object(_redux_store_store__WEBPACK_IMPORTED_MODULE_2__[\"useStore\"])(pageProps.initialReduxState);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 7\n  }, this);\n} // import { createWrapper } from 'next-redux-wrapper'\n// import { Provider } from 'react-redux'\n// import { useStore } from '../redux-store/store'\n// import '../sass/globals.scss'\n// import 'tailwindcss/tailwind.css'\n// export default function App({ Component, pageProps }) {\n//     const store = useStore(pageProps.initialReduxState)\n//     return (\n//       <Provider store={store}>\n//         <Component {...pageProps} />\n//       </Provider>\n//     )\n//   }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR2UsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ2xELFFBQU1DLEtBQUssR0FBR0MsbUVBQVEsQ0FBQ0YsU0FBUyxDQUFDRyxpQkFBWCxDQUF0QjtBQUVBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFRixLQUFqQjtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELEMsQ0FhRDtBQUVGO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9yZWR1eC1zdG9yZS9zdG9yZSdcblxuaW1wb3J0ICcuLi9zYXNzL2dsb2JhbHMuc2NzcydcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKHBhZ2VQcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSlcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIClcbiAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAvLyBpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG4vLyBpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9yZWR1eC1zdG9yZS9zdG9yZSdcblxuXG4vLyBpbXBvcnQgJy4uL3Nhc3MvZ2xvYmFscy5zY3NzJ1xuLy8gaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuLy8gICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuICBcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4vLyAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbi8vICAgICAgIDwvUHJvdmlkZXI+XG4vLyAgICAgKVxuLy8gICB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux-store/reducers/eventReducer.js":
/*!**********************************************!*\
  !*** ./redux-store/reducers/eventReducer.js ***!
  \**********************************************/
/*! exports provided: eventReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventReducer\", function() { return eventReducer; });\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type */ \"./redux-store/type.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  events: null,\n  isFeatured: null,\n  isLoading: false,\n  error: null\n};\nconst eventReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"GET_EVENTS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        events: action.payload\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"IS_FEATURED\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isFeatured: action.payload\n      });\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC1zdG9yZS9yZWR1Y2Vycy9ldmVudFJlZHVjZXIuanM/NDlmYiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJldmVudHMiLCJpc0ZlYXR1cmVkIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJldmVudFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBR0EsTUFBTUEsWUFBWSxHQUFFO0FBQ2hCQyxRQUFNLEVBQUMsSUFEUztBQUVoQkMsWUFBVSxFQUFDLElBRks7QUFHaEJDLFdBQVMsRUFBQyxLQUhNO0FBSWhCQyxPQUFLLEVBQUM7QUFKVSxDQUFwQjtBQVNPLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUdOLFlBQVQsRUFBc0JPLE1BQXRCLEtBQWlDO0FBQ3pELFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUtDLGdEQUFMO0FBQ0ksNkNBQVdILEtBQVg7QUFBa0JMLGNBQU0sRUFBQ00sTUFBTSxDQUFDRztBQUFoQzs7QUFDSixTQUFLRCxpREFBTDtBQUNJLDZDQUFXSCxLQUFYO0FBQWlCSixrQkFBVSxFQUFDSyxNQUFNLENBQUNHO0FBQW5DOztBQUNKO0FBQ0ksYUFBT0osS0FBUDtBQU5SO0FBUUgsQ0FUTSIsImZpbGUiOiIuL3JlZHV4LXN0b3JlL3JlZHVjZXJzL2V2ZW50UmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGUnXG5cblxuY29uc3QgaW5pdGlhbFN0YXRlID17XG4gICAgZXZlbnRzOm51bGwsXG4gICAgaXNGZWF0dXJlZDpudWxsLFxuICAgIGlzTG9hZGluZzpmYWxzZSxcbiAgICBlcnJvcjpudWxsXG59XG5cblxuXG5leHBvcnQgY29uc3QgZXZlbnRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgdHlwZXMuR0VUX0VWRU5UUzpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV2ZW50czphY3Rpb24ucGF5bG9hZH1cbiAgICAgICAgY2FzZSB0eXBlcy5JU19GRUFUVVJFRDpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsaXNGZWF0dXJlZDphY3Rpb24ucGF5bG9hZH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux-store/reducers/eventReducer.js\n");

/***/ }),

/***/ "./redux-store/reducers/index.js":
/*!***************************************!*\
  !*** ./redux-store/reducers/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _eventReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventReducer */ \"./redux-store/reducers/eventReducer.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  eventPage: _eventReducer__WEBPACK_IMPORTED_MODULE_1__[\"eventReducer\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC1zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcz8xMWQxIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImV2ZW50UGFnZSIsImV2ZW50UmVkdWNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWVBLDRIQUFlLENBQUM7QUFDM0JDLFdBQVMsRUFBQ0MsMERBQVlBO0FBREssQ0FBRCxDQUE5QiIsImZpbGUiOiIuL3JlZHV4LXN0b3JlL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgZXZlbnRSZWR1Y2VyIH0gZnJvbSAnLi9ldmVudFJlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGV2ZW50UGFnZTpldmVudFJlZHVjZXJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux-store/reducers/index.js\n");

/***/ }),

/***/ "./redux-store/store.js":
/*!******************************!*\
  !*** ./redux-store/store.js ***!
  \******************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./redux-store/reducers/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst initialState = {},\n      middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];\nlet store;\n\nlet initStore = (preloadedState = initialState) => {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware)));\n};\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n}; //Contect MyApp\n\nlet useStore = initialState => {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC1zdG9yZS9zdG9yZS5qcz8wMGRjIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1pZGRsZXdhcmUiLCJ0aHVuayIsInN0b3JlIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUEsWUFBWSxHQUFHLEVBQXJCO0FBQUEsTUFDTUMsVUFBVSxHQUFHLENBQUNDLGtEQUFELENBRG5CO0FBR0EsSUFBSUMsS0FBSjs7QUFFQSxJQUFJQyxTQUFTLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHTCxZQUFsQixLQUFtQztBQUNqRCxTQUFPTSx5REFBVyxDQUNoQkMsaURBRGdCLEVBRWhCRixjQUZnQixFQUdoQkcsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR1IsVUFBSixDQUFoQixDQUhILENBQWxCO0FBS0QsQ0FORDs7QUFRTyxNQUFNUyxlQUFlLEdBQUlMLGNBQUQsSUFBb0I7QUFBQTs7QUFDakQsTUFBSU0sTUFBTSxjQUFHUixLQUFILDZDQUFZQyxTQUFTLENBQUNDLGNBQUQsQ0FBL0IsQ0FEaUQsQ0FHakQ7QUFDQTs7O0FBQ0EsTUFBSUEsY0FBYyxJQUFJRixLQUF0QixFQUE2QjtBQUMzQlEsVUFBTSxHQUFHUCxTQUFTLGlDQUNiRCxLQUFLLENBQUNTLFFBQU4sRUFEYSxHQUViUCxjQUZhLEVBQWxCLENBRDJCLENBSzNCOztBQUNBRixTQUFLLEdBQUdVLFNBQVI7QUFDRCxHQVpnRCxDQWNqRDs7O0FBQ0EsWUFBbUMsT0FBT0YsTUFBUCxDQWZjLENBZ0JqRDs7QUFDQSxNQUFJLENBQUNSLEtBQUwsRUFBWUEsS0FBSyxHQUFHUSxNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNELENBcEJNLEMsQ0FzQlA7O0FBQ08sSUFBSUcsUUFBUSxHQUFJZCxZQUFELElBQWtCO0FBQ3RDLFFBQU1HLEtBQUssR0FBR1kscURBQU8sQ0FBQyxNQUFNTCxlQUFlLENBQUNWLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9HLEtBQVA7QUFDRCxDQUhNIiwiZmlsZSI6Ii4vcmVkdXgtc3RvcmUvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge30sXG4gICAgICBtaWRkbGV3YXJlID0gW3RodW5rXTtcblxubGV0IHN0b3JlO1xuXG5sZXQgaW5pdFN0b3JlID0gKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBwcmVsb2FkZWRTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSk7XG5cbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXG4gIC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xuICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XG4gICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXG4gICAgfSk7XG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcbiAgICBzdG9yZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX3N0b3JlO1xuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZTtcblxuICByZXR1cm4gX3N0b3JlO1xufTtcblxuLy9Db250ZWN0IE15QXBwXG5leHBvcnQgbGV0IHVzZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux-store/store.js\n");

/***/ }),

/***/ "./redux-store/type.js":
/*!*****************************!*\
  !*** ./redux-store/type.js ***!
  \*****************************/
/*! exports provided: GET_EVENTS, IS_FEATURED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_EVENTS\", function() { return GET_EVENTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IS_FEATURED\", function() { return IS_FEATURED; });\n//Events Page\nconst GET_EVENTS = 'GET_EVENTS';\nconst IS_FEATURED = 'IS_FEATURED';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC1zdG9yZS90eXBlLmpzPzIwNTIiXSwibmFtZXMiOlsiR0VUX0VWRU5UUyIsIklTX0ZFQVRVUkVEIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1BLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQiIsImZpbGUiOiIuL3JlZHV4LXN0b3JlL3R5cGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0V2ZW50cyBQYWdlXG5leHBvcnQgY29uc3QgR0VUX0VWRU5UUyA9ICdHRVRfRVZFTlRTJ1xuZXhwb3J0IGNvbnN0IElTX0ZFQVRVUkVEID0gJ0lTX0ZFQVRVUkVEJyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux-store/type.js\n");

/***/ }),

/***/ "./sass/globals.scss":
/*!***************************!*\
  !*** ./sass/globals.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Nhc3MvZ2xvYmFscy5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sass/globals.scss\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });