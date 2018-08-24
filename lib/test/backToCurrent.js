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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugin/backToCurrent/backToCurrent.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugin/backToCurrent/backToCurrent.js":
/*!***********************************************!*\
  !*** ./plugin/backToCurrent/backToCurrent.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Fre = window.Fre;

var backToCurrent = function backToCurrent(selector, params) {
    var this_ = this;
    var defaults = {
        active: ".Active", //class: 活动的class
        domAdd: "li", //dom : Active 将要加的的dom
        hovDom: "a", //dovm : hover 的dom
        dropDown: ".Nav-drop", //dom: hover 时drom的dom
        current: ".Current", //class: 当前的class
        time: 2000, //timer: 离开时间时间
        backToCurrent: true, //bollean : 是否回到当前
        dropDomBelongContainer: false //  dropDown 是否是li的父级

    };

    defaults = Fre.mergeJsonToUnique(defaults, params);
    this_.defaults = defaults;

    this_.container = selector.nodeType ? selector : Fre(selector)[0];
    this_.domAdd = this_.container.querySelectorAll(defaults.domAdd);
    this_.hovDom = this_.container.querySelectorAll(defaults.hovDom);
    this_.dropDown = this_.container.querySelectorAll(defaults.dropDown);
    this_.currentDom = Fre.find(defaults.current, this_.container)[0];

    this_.init = function () {
        this_.bindEv();
    };

    this_.bindEv = function () {
        Fre.event.addEvent(this_.hovDom, "mouseover", mouseEntCB);
        Fre.event.addEvent(this_.dropDown, "mouseover", mouseEntCB);
        Fre.event.addEvent(this_.hovDom, "mouseout", mouselevCB);
        Fre.event.addEvent(this_.dropDown, "mouseout", mouselevCB);
    };

    function mouseEntCB() {
        var index = $F.eq(this_.hovDom, this);

        Fre.removeClass(this_.domAdd, defaults.active.slice(1));
        Fre.addClass(this.parentNode, defaults.active.slice(1));

        if (defaults.dropDomBelongContainer) {
            Fre.removeClass(this_.dropDown, defaults.active.slice(1));
            Fre.addClass(this_.dropDown[index], defaults.active.slice(1));
        } else {
            Fre.each(this_.domAdd, function (i, item) {
                var ele = item.querySelector(defaults.dropDown);
                Fre.removeClass(ele, "Active");
            });
            var el = this.parentNode.querySelector(defaults.dropDown);
            Fre.addClass(el, "Active");
        }
    }

    function mouselevCB() {
        if (defaults.backToCurrent) {
            Fre.removeClass(this.parentNode, defaults.active.slice(1));

            if (defaults.dropDomBelongContainer) {
                Fre.removeClass(this_.dropDown, defaults.active.slice(1));
            } else {
                Fre.each(this_.domAdd, function (i, item) {
                    var ele = item.querySelector(defaults.dropDown);
                    Fre.removeClass(ele, "Active");
                });
            }

            clearTimeout(this_.timer);
            this_.timer = setTimeout(function () {
                var acDom = Fre.find(defaults.active, this_.container);
                if (acDom && acDom[0] && acDom[0].nodeType == 1) {
                    this_.flag = true;
                } else {
                    this_.flag = false;
                }!this_.flag && Fre.addClass(this_.currentDom, defaults.active.slice(1));
            }, defaults.time);
        }
    }

    this_.init();
};

if (window.Fre) {
    (function (Fre) {
        Fre.fn.backToCurrent = function (params) {
            var obj;
            var backToCurrent = new backToCurrent(this[0], params);
            obj = backToCurrent;

            return obj;
        };
    })(window.Fre);
}

module.exports = backToCurrent;
window.backToCurrent = backToCurrent;

/***/ })

/******/ });
//# sourceMappingURL=backToCurrent.js.map