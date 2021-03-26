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

/***/ "./data/dummy-data.js":
/*!****************************!*\
  !*** ./data/dummy-data.js ***!
  \****************************/
/*! exports provided: getFeaturedEvents, getAllEvents, getAllClients, getAllProjects, getFilteredEvents, getEventById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedEvents\", function() { return getFeaturedEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllEvents\", function() { return getAllEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllClients\", function() { return getAllClients; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllProjects\", function() { return getAllProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilteredEvents\", function() { return getFilteredEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventById\", function() { return getEventById; });\nconst DUMMY_EVENTS = [{\n  id: 'e1',\n  title: 'Programming for everyone',\n  description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',\n  location: 'Somestreet 25, 12345 San Somewhereo',\n  date: '2021-05-12',\n  image: 'images/img2.jpg',\n  isFeatured: false\n}, {\n  id: 'e2',\n  title: 'Networking for introverts',\n  description: \"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!\",\n  location: 'New Wall Street 5, 98765 New Work',\n  date: '2021-05-30',\n  image: 'images/img3.jpg',\n  isFeatured: true\n}, {\n  id: 'e3',\n  title: 'Networking for extroverts',\n  description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',\n  location: 'My Street 12, 10115 Broke City',\n  date: '2022-04-10',\n  image: 'images/img1.jpg',\n  isFeatured: true\n}];\nconst CLIENTS = [{\n  id: 1,\n  name: \"Adam\"\n}, {\n  id: 2,\n  name: \"Ashley\"\n}, {\n  id: 3,\n  name: \"John\"\n}, {\n  id: 4,\n  name: \"Joe\"\n}, {\n  id: 5,\n  name: \"Marry\"\n}, {\n  id: 6,\n  name: \"Maria\"\n}];\nconst PROJECTS = [{\n  id: 1,\n  name: \"Project-A\"\n}, {\n  id: 2,\n  name: \"Project-B\"\n}, {\n  id: 3,\n  name: \"Project-C\"\n}, {\n  id: 4,\n  name: \"Project-D\"\n}, {\n  id: 5,\n  name: \"Project-E\"\n}]; //Action\n\nconst getFeaturedEvents = () => DUMMY_EVENTS.filter(event => event.isFeatured);\nconst getAllEvents = () => DUMMY_EVENTS;\nconst getAllClients = () => CLIENTS;\nconst getAllProjects = () => PROJECTS;\nconst getFilteredEvents = dateFilter => {\n  const {\n    year,\n    month\n  } = dateFilter;\n  let filteredEvents = DUMMY_EVENTS.filter(event => {\n    const eventDate = new Date(event.date);\n    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n  });\n  return filteredEvents;\n};\nconst getEventById = id => DUMMY_EVENTS.find(event => event.id === id);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL2R1bW15LWRhdGEuanM/MTU4OCJdLCJuYW1lcyI6WyJEVU1NWV9FVkVOVFMiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsImRhdGUiLCJpbWFnZSIsImlzRmVhdHVyZWQiLCJDTElFTlRTIiwibmFtZSIsIlBST0pFQ1RTIiwiZ2V0RmVhdHVyZWRFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImdldEFsbEV2ZW50cyIsImdldEFsbENsaWVudHMiLCJnZXRBbGxQcm9qZWN0cyIsImdldEZpbHRlcmVkRXZlbnRzIiwiZGF0ZUZpbHRlciIsInllYXIiLCJtb250aCIsImZpbHRlcmVkRXZlbnRzIiwiZXZlbnREYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXRFdmVudEJ5SWQiLCJmaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1BLFlBQVksR0FBRyxDQUNqQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsMEJBRlQ7QUFHRUMsYUFBVyxFQUNULDRKQUpKO0FBS0VDLFVBQVEsRUFBRSxxQ0FMWjtBQU1FQyxNQUFJLEVBQUUsWUFOUjtBQU9FQyxPQUFLLEVBQUUsaUJBUFQ7QUFRRUMsWUFBVSxFQUFFO0FBUmQsQ0FEaUIsRUFXakI7QUFDRU4sSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLDJCQUZUO0FBR0VDLGFBQVcsRUFDVCwwSUFKSjtBQUtFQyxVQUFRLEVBQUUsbUNBTFo7QUFNRUMsTUFBSSxFQUFFLFlBTlI7QUFPRUMsT0FBSyxFQUFFLGlCQVBUO0FBUUVDLFlBQVUsRUFBRTtBQVJkLENBWGlCLEVBcUJqQjtBQUNFTixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsMkJBRlQ7QUFHRUMsYUFBVyxFQUNULDZJQUpKO0FBS0VDLFVBQVEsRUFBRSxnQ0FMWjtBQU1FQyxNQUFJLEVBQUUsWUFOUjtBQU9FQyxPQUFLLEVBQUUsaUJBUFQ7QUFRRUMsWUFBVSxFQUFFO0FBUmQsQ0FyQmlCLENBQXJCO0FBaUNBLE1BQU1DLE9BQU8sR0FBRyxDQUNaO0FBQUVQLElBQUUsRUFBRSxDQUFOO0FBQVNRLE1BQUksRUFBRTtBQUFmLENBRFksRUFFWjtBQUFFUixJQUFFLEVBQUUsQ0FBTjtBQUFTUSxNQUFJLEVBQUU7QUFBZixDQUZZLEVBR1o7QUFBRVIsSUFBRSxFQUFFLENBQU47QUFBU1EsTUFBSSxFQUFFO0FBQWYsQ0FIWSxFQUlaO0FBQUVSLElBQUUsRUFBRSxDQUFOO0FBQVNRLE1BQUksRUFBRTtBQUFmLENBSlksRUFLWjtBQUFFUixJQUFFLEVBQUUsQ0FBTjtBQUFTUSxNQUFJLEVBQUU7QUFBZixDQUxZLEVBTVo7QUFBRVIsSUFBRSxFQUFFLENBQU47QUFBU1EsTUFBSSxFQUFFO0FBQWYsQ0FOWSxDQUFoQjtBQVNBLE1BQU1DLFFBQVEsR0FBRyxDQUNiO0FBQUVULElBQUUsRUFBRSxDQUFOO0FBQVNRLE1BQUksRUFBRTtBQUFmLENBRGEsRUFFYjtBQUFFUixJQUFFLEVBQUUsQ0FBTjtBQUFTUSxNQUFJLEVBQUU7QUFBZixDQUZhLEVBR2I7QUFBRVIsSUFBRSxFQUFFLENBQU47QUFBU1EsTUFBSSxFQUFFO0FBQWYsQ0FIYSxFQUliO0FBQUVSLElBQUUsRUFBRSxDQUFOO0FBQVNRLE1BQUksRUFBRTtBQUFmLENBSmEsRUFLYjtBQUFFUixJQUFFLEVBQUUsQ0FBTjtBQUFTUSxNQUFJLEVBQUU7QUFBZixDQUxhLENBQWpCLEMsQ0FVRTs7QUFDTyxNQUFNRSxpQkFBaUIsR0FBRyxNQUFNWCxZQUFZLENBQUNZLE1BQWIsQ0FBcUJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDTixVQUFyQyxDQUFoQztBQUVBLE1BQU1PLFlBQVksR0FBRyxNQUFNZCxZQUEzQjtBQUVBLE1BQU1lLGFBQWEsR0FBRyxNQUFNUCxPQUE1QjtBQUVBLE1BQU1RLGNBQWMsR0FBRyxNQUFNTixRQUE3QjtBQUVBLE1BQU1PLGlCQUFpQixHQUFJQyxVQUFELElBQWdCO0FBQy9DLFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQWtCRixVQUF4QjtBQUVBLE1BQUlHLGNBQWMsR0FBR3JCLFlBQVksQ0FBQ1ksTUFBYixDQUFxQkMsS0FBRCxJQUFXO0FBQ2xELFVBQU1TLFNBQVMsR0FBRyxJQUFJQyxJQUFKLENBQVNWLEtBQUssQ0FBQ1IsSUFBZixDQUFsQjtBQUNBLFdBQU9pQixTQUFTLENBQUNFLFdBQVYsT0FBNEJMLElBQTVCLElBQW9DRyxTQUFTLENBQUNHLFFBQVYsT0FBeUJMLEtBQUssR0FBRyxDQUE1RTtBQUNELEdBSG9CLENBQXJCO0FBS0EsU0FBT0MsY0FBUDtBQUNELENBVE07QUFXQSxNQUFNSyxZQUFZLEdBQUl6QixFQUFELElBQVFELFlBQVksQ0FBQzJCLElBQWIsQ0FBbUJkLEtBQUQsSUFBV0EsS0FBSyxDQUFDWixFQUFOLEtBQWFBLEVBQTFDLENBQTdCIiwiZmlsZSI6Ii4vZGF0YS9kdW1teS1kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRFVNTVlfRVZFTlRTID0gW1xuICAgIHtcbiAgICAgIGlkOiAnZTEnLFxuICAgICAgdGl0bGU6ICdQcm9ncmFtbWluZyBmb3IgZXZlcnlvbmUnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdFdmVyeW9uZSBjYW4gbGVhcm4gdG8gY29kZSEgWWVzLCBldmVyeW9uZSEgSW4gdGhpcyBsaXZlIGV2ZW50LCB3ZSBhcmUgZ29pbmcgdG8gZ28gdGhyb3VnaCBhbGwgdGhlIGtleSBiYXNpY3MgYW5kIGdldCB5b3Ugc3RhcnRlZCB3aXRoIHByb2dyYW1taW5nIGFzIHdlbGwuJyxcbiAgICAgIGxvY2F0aW9uOiAnU29tZXN0cmVldCAyNSwgMTIzNDUgU2FuIFNvbWV3aGVyZW8nLFxuICAgICAgZGF0ZTogJzIwMjEtMDUtMTInLFxuICAgICAgaW1hZ2U6ICdpbWFnZXMvaW1nMi5qcGcnLFxuICAgICAgaXNGZWF0dXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2UyJyxcbiAgICAgIHRpdGxlOiAnTmV0d29ya2luZyBmb3IgaW50cm92ZXJ0cycsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJXZSBrbm93OiBOZXR3b3JraW5nIGlzIG5vIGZ1biBpZiB5b3UgYXJlIGFuIGludHJvdmVydCBwZXJzb24uIFRoYXQncyB3aHkgd2UgY2FtZSB1cCB3aXRoIHRoaXMgZXZlbnQgLSBpdCdsbCBiZSBzbyBtdWNoIGVhc2llci4gUHJvbWlzZWQhXCIsXG4gICAgICBsb2NhdGlvbjogJ05ldyBXYWxsIFN0cmVldCA1LCA5ODc2NSBOZXcgV29yaycsXG4gICAgICBkYXRlOiAnMjAyMS0wNS0zMCcsXG4gICAgICBpbWFnZTogJ2ltYWdlcy9pbWczLmpwZycsXG4gICAgICBpc0ZlYXR1cmVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdlMycsXG4gICAgICB0aXRsZTogJ05ldHdvcmtpbmcgZm9yIGV4dHJvdmVydHMnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdZb3UgcHJvYmFibHkgbmVlZCBubyBoZWxwIHdpdGggbmV0d29ya2luZyBpbiBnZW5lcmFsLiBCdXQgZm9jdXNpbmcgeW91ciBlbmVyZ3kgY29ycmVjdGx5IC0gdGhhdCBpcyBzb21ldGhpbmcgd2hlcmUgbW9zdCBwZW9wbGUgY2FuIGltcHJvdmUuJyxcbiAgICAgIGxvY2F0aW9uOiAnTXkgU3RyZWV0IDEyLCAxMDExNSBCcm9rZSBDaXR5JyxcbiAgICAgIGRhdGU6ICcyMDIyLTA0LTEwJyxcbiAgICAgIGltYWdlOiAnaW1hZ2VzL2ltZzEuanBnJyxcbiAgICAgIGlzRmVhdHVyZWQ6IHRydWUsXG4gICAgfSxcbiAgXTtcbiAgXG5jb25zdCBDTElFTlRTID0gW1xuICAgIHsgaWQ6IDEsIG5hbWU6IFwiQWRhbVwiIH0sXG4gICAgeyBpZDogMiwgbmFtZTogXCJBc2hsZXlcIiB9LFxuICAgIHsgaWQ6IDMsIG5hbWU6IFwiSm9oblwiIH0sXG4gICAgeyBpZDogNCwgbmFtZTogXCJKb2VcIiB9LFxuICAgIHsgaWQ6IDUsIG5hbWU6IFwiTWFycnlcIiB9LFxuICAgIHsgaWQ6IDYsIG5hbWU6IFwiTWFyaWFcIiB9LFxuICBdO1xuXG5jb25zdCBQUk9KRUNUUyA9IFtcbiAgICB7IGlkOiAxLCBuYW1lOiBcIlByb2plY3QtQVwiIH0sXG4gICAgeyBpZDogMiwgbmFtZTogXCJQcm9qZWN0LUJcIiB9LFxuICAgIHsgaWQ6IDMsIG5hbWU6IFwiUHJvamVjdC1DXCIgfSxcbiAgICB7IGlkOiA0LCBuYW1lOiBcIlByb2plY3QtRFwiIH0sXG4gICAgeyBpZDogNSwgbmFtZTogXCJQcm9qZWN0LUVcIiB9LFxuICBdO1xuXG5cblxuICAvL0FjdGlvblxuICBleHBvcnQgY29uc3QgZ2V0RmVhdHVyZWRFdmVudHMgPSAoKSA9PiBEVU1NWV9FVkVOVFMuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuaXNGZWF0dXJlZCk7XG4gIFxuICBleHBvcnQgY29uc3QgZ2V0QWxsRXZlbnRzID0gKCkgPT4gRFVNTVlfRVZFTlRTO1xuICBcbiAgZXhwb3J0IGNvbnN0IGdldEFsbENsaWVudHMgPSAoKSA9PiBDTElFTlRTIDtcblxuICBleHBvcnQgY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiBQUk9KRUNUUyA7XG5cbiAgZXhwb3J0IGNvbnN0IGdldEZpbHRlcmVkRXZlbnRzID0gKGRhdGVGaWx0ZXIpID0+IHtcbiAgICBjb25zdCB7IHllYXIsIG1vbnRoIH0gPSBkYXRlRmlsdGVyO1xuICBcbiAgICBsZXQgZmlsdGVyZWRFdmVudHMgPSBEVU1NWV9FVkVOVFMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnREYXRlID0gbmV3IERhdGUoZXZlbnQuZGF0ZSk7XG4gICAgICByZXR1cm4gZXZlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiYgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoIC0gMTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGZpbHRlcmVkRXZlbnRzO1xuICB9XG4gIFxuICBleHBvcnQgY29uc3QgZ2V0RXZlbnRCeUlkID0gKGlkKSA9PiBEVU1NWV9FVkVOVFMuZmluZCgoZXZlbnQpID0+IGV2ZW50LmlkID09PSBpZCk7XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/dummy-data.js\n");

/***/ }),

/***/ "./pages/clients/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/clients/[id]/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_dummy_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/dummy-data */ \"./data/dummy-data.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/rahimlisarkhan/Documents/NEXT JS LESSON/Practice/NextJs-BlogProject/pages/clients/[id]/index.js\";\n\n\n\nlet ClientsProjectPage = () => {\n  const projects = Object(_data_dummy_data__WEBPACK_IMPORTED_MODULE_1__[\"getAllProjects\"])();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  const handlerProject = (id, clientprojectid) => {\n    router.push({\n      pathname: '/clients/[id]/[clientprojectid]',\n      query: {\n        id,\n        clientprojectid\n      } //or slug name\n\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"client-project\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Clients Project Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 8\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"client-project__container\",\n      children: projects.map(propject => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"client-project__container__card\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: propject.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 15\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => handlerProject(router.query.id, propject.id),\n          children: \"Load more\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 15\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientsProjectPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnRzLy9pbmRleC5qcz81ZTI1Il0sIm5hbWVzIjpbIkNsaWVudHNQcm9qZWN0UGFnZSIsInByb2plY3RzIiwiZ2V0QWxsUHJvamVjdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVyUHJvamVjdCIsImlkIiwiY2xpZW50cHJvamVjdGlkIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJtYXAiLCJwcm9wamVjdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFJQSxrQkFBa0IsR0FBRyxNQUFNO0FBRTdCLFFBQU1DLFFBQVEsR0FBR0MsdUVBQWMsRUFBL0I7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLFFBQU1DLGNBQWMsR0FBRyxDQUFDQyxFQUFELEVBQUtDLGVBQUwsS0FBeUI7QUFFOUNKLFVBQU0sQ0FBQ0ssSUFBUCxDQUFZO0FBQ1JDLGNBQVEsRUFBQyxpQ0FERDtBQUVSQyxXQUFLLEVBQUM7QUFBRUosVUFBRjtBQUFNQztBQUFOLE9BRkUsQ0FFc0I7O0FBRnRCLEtBQVo7QUFLRCxHQVBEOztBQVVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsNEJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZUFHSTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUFBLGdCQUNHTixRQUFRLENBQUNVLEdBQVQsQ0FBY0MsUUFBRCxpQkFDWjtBQUFLLGlCQUFTLEVBQUMsaUNBQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQSxRQUFRLENBQUNDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0UsaUJBQU8sRUFBRSxNQUFNUixjQUFjLENBQUNGLE1BQU0sQ0FBQ08sS0FBUCxDQUFhSixFQUFkLEVBQWtCTSxRQUFRLENBQUNOLEVBQTNCLENBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQkQsQ0FoQ0Q7O0FBa0NlTixpRkFBZiIsImZpbGUiOiIuL3BhZ2VzL2NsaWVudHMvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0QWxsUHJvamVjdHN9IGZyb20gJy4uLy4uLy4uL2RhdGEvZHVtbXktZGF0YSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmxldCBDbGllbnRzUHJvamVjdFBhZ2UgPSAoKSA9PiB7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBnZXRBbGxQcm9qZWN0cygpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVyUHJvamVjdCA9IChpZCwgY2xpZW50cHJvamVjdGlkKSA9PiB7XG5cbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOicvY2xpZW50cy9baWRdL1tjbGllbnRwcm9qZWN0aWRdJyxcbiAgICAgICAgcXVlcnk6eyBpZCwgY2xpZW50cHJvamVjdGlkfSwgLy9vciBzbHVnIG5hbWVcbiAgICB9KSAgICAgICAgXG5cbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtcHJvamVjdFwiPlxuICAgICAgIDxoMT5DbGllbnRzIFByb2plY3QgUGFnZTwvaDE+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtcHJvamVjdF9fY29udGFpbmVyXCI+XG4gICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvcGplY3QpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LXByb2plY3RfX2NvbnRhaW5lcl9fY2FyZFwiPlxuICAgICAgICAgICAgICA8aDE+e3Byb3BqZWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZXJQcm9qZWN0KHJvdXRlci5xdWVyeS5pZCwgcHJvcGplY3QuaWQpfT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBMb2FkIG1vcmVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGllbnRzUHJvamVjdFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/clients/[id]/index.js\n");

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