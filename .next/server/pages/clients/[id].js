module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/clients/[id]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/clients/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/clients/[id]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/rahimlisarkhan/Documents/NEXT JS LESSON/Practice/NextJs-BlogProject/pages/clients/[id]/index.js\";\n\n\nlet ClientsProjectPage = () => {\n  //data\n  const projects = [{\n    id: 1,\n    name: \"Project-A\"\n  }, {\n    id: 2,\n    name: \"Project-B\"\n  }, {\n    id: 3,\n    name: \"Project-C\"\n  }, {\n    id: 4,\n    name: \"Project-D\"\n  }, {\n    id: 5,\n    name: \"Project-E\"\n  }];\n  let router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  let handlerProject = (clientId, projectId) => {\n    router.push({\n      pathname: '/clients/[id]/[clientprojectid]',\n      query: {\n        id: `${clientId}`,\n        clientprojectid: `${projectId}`\n      } //or slug name\n\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"client-project\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Clients Project Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"client-project__container\",\n      children: projects.map(propject => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"client-project__container__card\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: propject.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => handlerProject(router.query.id, propject.id),\n          children: \"Load more\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientsProjectPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnRzLy9pbmRleC5qcz81ZTI1Il0sIm5hbWVzIjpbIkNsaWVudHNQcm9qZWN0UGFnZSIsInByb2plY3RzIiwiaWQiLCJuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlclByb2plY3QiLCJjbGllbnRJZCIsInByb2plY3RJZCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiY2xpZW50cHJvamVjdGlkIiwibWFwIiwicHJvcGplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxrQkFBa0IsR0FBRyxNQUFNO0FBQzdCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFBRUMsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFO0FBQWYsR0FEZSxFQUVmO0FBQUVELE1BQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUksRUFBRTtBQUFmLEdBRmUsRUFHZjtBQUFFRCxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFJLEVBQUU7QUFBZixHQUhlLEVBSWY7QUFBRUQsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFO0FBQWYsR0FKZSxFQUtmO0FBQUVELE1BQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUksRUFBRTtBQUFmLEdBTGUsQ0FBakI7QUFRQSxNQUFJQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXRCOztBQUVBLE1BQUlDLGNBQWMsR0FBRyxDQUFDQyxRQUFELEVBQVdDLFNBQVgsS0FBeUI7QUFFNUNKLFVBQU0sQ0FBQ0ssSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBQyxpQ0FERDtBQUVSQyxXQUFLLEVBQUM7QUFBRVQsVUFBRSxFQUFFLEdBQUVLLFFBQVMsRUFBakI7QUFBcUJLLHVCQUFlLEVBQUUsR0FBRUosU0FBVTtBQUFsRCxPQUZFLENBRW9EOztBQUZwRCxLQUFaO0FBS0QsR0FQRDs7QUFVQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0U7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSxnQkFDR1AsUUFBUSxDQUFDWSxHQUFULENBQWNDLFFBQUQsaUJBQ1o7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0EsUUFBUSxDQUFDWDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGlCQUFPLEVBQUUsTUFBTUcsY0FBYyxDQUFDRixNQUFNLENBQUNPLEtBQVAsQ0FBYVQsRUFBZCxFQUFrQlksUUFBUSxDQUFDWixFQUEzQixDQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0JELENBeENEOztBQTBDZUYsaUZBQWYiLCJmaWxlIjoiLi9wYWdlcy9jbGllbnRzL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxubGV0IENsaWVudHNQcm9qZWN0UGFnZSA9ICgpID0+IHtcbiAgLy9kYXRhXG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIHsgaWQ6IDEsIG5hbWU6IFwiUHJvamVjdC1BXCIgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiBcIlByb2plY3QtQlwiIH0sXG4gICAgeyBpZDogMywgbmFtZTogXCJQcm9qZWN0LUNcIiB9LFxuICAgIHsgaWQ6IDQsIG5hbWU6IFwiUHJvamVjdC1EXCIgfSxcbiAgICB7IGlkOiA1LCBuYW1lOiBcIlByb2plY3QtRVwiIH0sXG4gIF07XG5cbiAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGxldCBoYW5kbGVyUHJvamVjdCA9IChjbGllbnRJZCwgcHJvamVjdElkKSA9PiB7XG5cbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOicvY2xpZW50cy9baWRdL1tjbGllbnRwcm9qZWN0aWRdJyxcbiAgICAgICAgcXVlcnk6eyBpZDpgJHtjbGllbnRJZH1gLCAgY2xpZW50cHJvamVjdGlkOmAke3Byb2plY3RJZH1gfSwgLy9vciBzbHVnIG5hbWVcbiAgICB9KSAgICAgICAgXG5cbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtcHJvamVjdFwiPlxuICAgICAgPGgxPkNsaWVudHMgUHJvamVjdCBQYWdlPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtcHJvamVjdF9fY29udGFpbmVyXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb3BqZWN0KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtcHJvamVjdF9fY29udGFpbmVyX19jYXJkXCI+XG4gICAgICAgICAgICA8aDE+e3Byb3BqZWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlclByb2plY3Qocm91dGVyLnF1ZXJ5LmlkLCBwcm9wamVjdC5pZCl9PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgTG9hZCBtb3JlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaWVudHNQcm9qZWN0UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/clients/[id]/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });