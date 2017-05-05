var app =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var template = __webpack_require__(0);
__webpack_require__(1);
(function () {
    var header = document.getElementsByTagName('header')[0];
    var iconMenu = document.getElementById('icon-menu');
    var menuList = document.getElementById('menu-list');
    var menuLink = document.querySelectorAll('.menu-link');
    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

    if (isSafari) {
        for (var i = 0; i < menuLink.length; i++) {
            if (menuLink[i].dataset.scrollTo == '#portfolio') menuLink[i].parentElement.style.display = 'none';
        }
    }

    menuList.style.top = header.offsetHeight + 'px';
    iconMenu.addEventListener('click', function () {
        menuList.classList.toggle('show-menu');
    });

    var scrolled;
    document.addEventListener('scroll', function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        scrolled > 100 ? header.classList.add('grey') : header.classList.remove('grey');
    });
})();

var program = document.getElementsByClassName("program");
var tab = document.getElementsByClassName("tab");

[].forEach.call(program, function (item) {
    item.addEventListener('click', function () {
        for (var i = 0; i < tab.length; i++) {
            if (this == program[i]) {
                tab[i].classList.add("show");
                this.classList.add("active-tab");
            } else {
                program[i].classList.remove("active-tab");
                tab[i].classList.remove("show");
            }
        }
    });
});

var width = window.innerWidth;

module.exports = template;

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map