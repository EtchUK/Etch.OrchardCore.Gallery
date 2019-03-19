/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Assets/js/admin/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Assets/js/admin/Models/galleryModel.ts":
/*!************************************************!*\
  !*** ./Assets/js/admin/Models/galleryModel.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass galleryModel {\r\n    constructor() {\r\n        this.description = '';\r\n        this.actionLabel = '';\r\n        this.action = () => { };\r\n    }\r\n}\r\nexports.galleryModel = galleryModel;\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/Models/galleryModel.ts?");

/***/ }),

/***/ "./Assets/js/admin/Modules/addImageUrl.ts":
/*!************************************************!*\
  !*** ./Assets/js/admin/Modules/addImageUrl.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst galleryModel_1 = __webpack_require__(/*! ../Models/galleryModel */ \"./Assets/js/admin/Models/galleryModel.ts\");\r\nexports.addImageUrl = () => {\r\n    const model = new galleryModel_1.galleryModel();\r\n    model.description = 'This module allows users to add image to the gallery using URL';\r\n    model.actionLabel = 'Add image URL';\r\n    model.action = () => {\r\n        console.log('test add image URL');\r\n    };\r\n    return model;\r\n};\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/Modules/addImageUrl.ts?");

/***/ }),

/***/ "./Assets/js/admin/Modules/addVideoEmbed.ts":
/*!**************************************************!*\
  !*** ./Assets/js/admin/Modules/addVideoEmbed.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst galleryModel_1 = __webpack_require__(/*! ../Models/galleryModel */ \"./Assets/js/admin/Models/galleryModel.ts\");\r\nexports.addVideoEmbed = () => {\r\n    const model = new galleryModel_1.galleryModel();\r\n    model.description = 'This module allows users to add video embed to the gallery';\r\n    model.actionLabel = 'Add Video Embed';\r\n    model.action = () => {\r\n        console.log('test add vodeo embed');\r\n    };\r\n    return model;\r\n};\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/Modules/addVideoEmbed.ts?");

/***/ }),

/***/ "./Assets/js/admin/index.ts":
/*!**********************************!*\
  !*** ./Assets/js/admin/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst addImageUrl_1 = __webpack_require__(/*! ./Modules/addImageUrl */ \"./Assets/js/admin/Modules/addImageUrl.ts\");\r\nconst addVideoEmbed_1 = __webpack_require__(/*! ./Modules/addVideoEmbed */ \"./Assets/js/admin/Modules/addVideoEmbed.ts\");\r\nconst Vue = window.Vue;\r\nconst init = () => {\r\n    const models = [addImageUrl_1.addImageUrl(), addVideoEmbed_1.addVideoEmbed()];\r\n    new Vue({\r\n        el: '.gallery',\r\n        data: {\r\n            items: models,\r\n        },\r\n        methods: {\r\n            action: (action) => {\r\n                action.action();\r\n            },\r\n        },\r\n    });\r\n};\r\ninit();\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/index.ts?");

/***/ })

/******/ });