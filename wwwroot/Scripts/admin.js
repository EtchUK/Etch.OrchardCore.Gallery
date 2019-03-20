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

/***/ "./Assets/js/admin/Models/galleryJsonModel.ts":
/*!****************************************************!*\
  !*** ./Assets/js/admin/Models/galleryJsonModel.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass GalleryJsonModel {\r\n    constructor(jsonInput) {\r\n        this.add = (galleryPartItem) => {\r\n            if (galleryPartItem.url == '') {\r\n                return;\r\n            }\r\n            const jsonString = this.jsonInput.val() || '[]';\r\n            const jsonParsed = JSON.parse(jsonString);\r\n            jsonParsed.push(galleryPartItem);\r\n            this.jsonInput.val(JSON.stringify(jsonParsed));\r\n        };\r\n        this.jsonInput = jsonInput;\r\n    }\r\n}\r\nexports.GalleryJsonModel = GalleryJsonModel;\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/Models/galleryJsonModel.ts?");

/***/ }),

/***/ "./Assets/js/admin/Models/galleryModel.ts":
/*!************************************************!*\
  !*** ./Assets/js/admin/Models/galleryModel.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass GalleryModel {\r\n    constructor() {\r\n        this.description = '';\r\n        this.actionLabel = '';\r\n        this.action = () => { };\r\n    }\r\n}\r\nexports.GalleryModel = GalleryModel;\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/Models/galleryModel.ts?");

/***/ }),

/***/ "./Assets/js/admin/Models/galleryPartItem.ts":
/*!***************************************************!*\
  !*** ./Assets/js/admin/Models/galleryPartItem.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass GalleryPartItem {\r\n    constructor(type, url, title, thumb) {\r\n        this.type = type;\r\n        this.url = url;\r\n        this.title = title;\r\n        this.thumb = thumb;\r\n    }\r\n}\r\nexports.GalleryPartItem = GalleryPartItem;\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/Models/galleryPartItem.ts?");

/***/ }),

/***/ "./Assets/js/admin/Models/galleryPartType.ts":
/*!***************************************************!*\
  !*** ./Assets/js/admin/Models/galleryPartType.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar GalleryPartType;\r\n(function (GalleryPartType) {\r\n    GalleryPartType[GalleryPartType[\"Image\"] = 1] = \"Image\";\r\n    GalleryPartType[GalleryPartType[\"Video\"] = 2] = \"Video\";\r\n})(GalleryPartType = exports.GalleryPartType || (exports.GalleryPartType = {}));\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/Models/galleryPartType.ts?");

/***/ }),

/***/ "./Assets/js/admin/Modules/addImageUrl.ts":
/*!************************************************!*\
  !*** ./Assets/js/admin/Modules/addImageUrl.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst galleryModel_1 = __webpack_require__(/*! ../Models/galleryModel */ \"./Assets/js/admin/Models/galleryModel.ts\");\r\nconst galleryJsonModel_1 = __webpack_require__(/*! ../Models/galleryJsonModel */ \"./Assets/js/admin/Models/galleryJsonModel.ts\");\r\nconst galleryPartItem_1 = __webpack_require__(/*! ../Models/galleryPartItem */ \"./Assets/js/admin/Models/galleryPartItem.ts\");\r\nconst galleryPartType_1 = __webpack_require__(/*! ../Models/galleryPartType */ \"./Assets/js/admin/Models/galleryPartType.ts\");\r\nexports.addImageUrl = () => {\r\n    const galleryModel = new galleryModel_1.GalleryModel();\r\n    galleryModel.description =\r\n        'This module allows users to add image to the gallery using URL';\r\n    galleryModel.actionLabel = 'Add image URL';\r\n    const id = $('.gallery').attr('id');\r\n    galleryModel.action = () => {\r\n        const $modal = $('.gallery > .' + id + '-ModalBody');\r\n        initModal($modal);\r\n        $modal.show();\r\n    };\r\n    const initModal = ($modal) => {\r\n        // Update title\r\n        $modal.find('.modal-title').html('Add image URL');\r\n        // Add content\r\n        const $body = $modal.find('.modal-body');\r\n        $body.html('<fieldset class=\"form-group\">\\\n        <label for=\"addImageUrl\">Image URL</label> \\\n        <input type=\"text\" id=\"addImageUrl\" name=\"addImageUrl\" class=\"form-control content-preview-text content-caption-text\"> \\\n        <span class=\"field-validation-valid\"></span></fieldset>');\r\n        // Trigger cancel button\r\n        const $cancelButtons = $modal.find('button[data-dismiss=\"modal\"]');\r\n        $cancelButtons.each((index) => {\r\n            const $cancelButton = $($cancelButtons[index]);\r\n            $cancelButton.on('click', () => {\r\n                $modal.hide();\r\n                removeEventListener($modal);\r\n            });\r\n        });\r\n        // Trigger cancel button\r\n        const $okButton = $modal.find('button[data-accept=\"model\"]').first();\r\n        $okButton.on('click', () => {\r\n            const $jsonInput = $('.gallery > .' + id + '-MediaItems').first();\r\n            const galleryJsonModel = new galleryJsonModel_1.GalleryJsonModel($jsonInput);\r\n            const galleryPartItem = new galleryPartItem_1.GalleryPartItem(galleryPartType_1.GalleryPartType.Image, $('#addImageUrl').val(), '', $('#addImageUrl').val());\r\n            galleryJsonModel.add(galleryPartItem);\r\n            $modal.hide();\r\n            removeEventListener($modal);\r\n        });\r\n    };\r\n    const removeEventListener = ($modal) => {\r\n        // Remove click events\r\n        const $cancelButtons = $modal.find('button[data-dismiss=\"modal\"]');\r\n        $cancelButtons.each((index) => {\r\n            const $cancelButton = $($cancelButtons[index]);\r\n            $cancelButton.off('click');\r\n        });\r\n        const $okButton = $modal.find('button[data-accept=\"model\"]').first();\r\n        $okButton.off('click');\r\n    };\r\n    return galleryModel;\r\n};\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/Modules/addImageUrl.ts?");

/***/ }),

/***/ "./Assets/js/admin/Modules/addVideoEmbed.ts":
/*!**************************************************!*\
  !*** ./Assets/js/admin/Modules/addVideoEmbed.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst galleryModel_1 = __webpack_require__(/*! ../Models/galleryModel */ \"./Assets/js/admin/Models/galleryModel.ts\");\r\nexports.addVideoEmbed = () => {\r\n    const galleryModel = new galleryModel_1.GalleryModel();\r\n    galleryModel.description =\r\n        'This module allows users to add video embed to the gallery';\r\n    galleryModel.actionLabel = 'Add Video Embed';\r\n    galleryModel.action = () => {\r\n        console.log('test add vodeo embed');\r\n    };\r\n    return galleryModel;\r\n};\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/Modules/addVideoEmbed.ts?");

/***/ }),

/***/ "./Assets/js/admin/index.ts":
/*!**********************************!*\
  !*** ./Assets/js/admin/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst addImageUrl_1 = __webpack_require__(/*! ./Modules/addImageUrl */ \"./Assets/js/admin/Modules/addImageUrl.ts\");\r\nconst addVideoEmbed_1 = __webpack_require__(/*! ./Modules/addVideoEmbed */ \"./Assets/js/admin/Modules/addVideoEmbed.ts\");\r\nconst Vue = window.Vue;\r\nconst init = () => {\r\n    const models = [addImageUrl_1.addImageUrl(), addVideoEmbed_1.addVideoEmbed()];\r\n    new Vue({\r\n        el: '.gallery',\r\n        data: {\r\n            items: models,\r\n        },\r\n        methods: {\r\n            action: (model) => {\r\n                model.action();\r\n            },\r\n        },\r\n    });\r\n};\r\ninit();\r\n\n\n//# sourceURL=webpack:///./Assets/js/admin/index.ts?");

/***/ })

/******/ });