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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Fre.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Fre.js":
/*!********************!*\
  !*** ./src/Fre.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extend = __webpack_require__(/*! ./core/extend.js */ "./src/core/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _fnExtend = __webpack_require__(/*! ./core/fnExtend.js */ "./src/core/fnExtend.js");

var _fnExtend2 = _interopRequireDefault(_fnExtend);

var _sizzleSelector = __webpack_require__(/*! ./sizzle/sizzle-selector.js */ "./src/sizzle/sizzle-selector.js");

var _sizzleSelector2 = _interopRequireDefault(_sizzleSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (Fre, Sizzle) {})(_extend2.default, _sizzleSelector2.default);

exports.default = window.Fre;

/***/ }),

/***/ "./src/core/event.js":
/*!***************************!*\
  !*** ./src/core/event.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _init = __webpack_require__(/*! ../core/init.js */ "./src/core/init.js");

var _init2 = _interopRequireDefault(_init);

var _var = __webpack_require__(/*! ../var/var.js */ "./src/var/var.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _init2.default.event = {
    addEvent: function addEvent(elem, type, fn, capture) {

        _init2.default.each(elem, function (i, item) {
            !capture ? capture = false : capture = true;

            if (item.addEventListener) {
                item.addEventListener(type, fn, capture);
            } else if (item.attachEvent) {
                item.attachEvent("on" + type, fn);
            }
        });

        return false;
    },
    removeEvent: function removeEvent(elem, type, fn, capture) {

        _init2.default.each(elem, function (i, item) {
            !capture ? capture = false : capture = true;

            if (item.addEventListener) {
                item.removeEventListener(type, fn, capture);
            } else if (item.detachEvent) {
                item.detachEvent("on" + type, fn);
            }
        });
    }
};

/***/ }),

/***/ "./src/core/extend.js":
/*!****************************!*\
  !*** ./src/core/extend.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _init = __webpack_require__(/*! ../core/init.js */ "./src/core/init.js");

var _init2 = _interopRequireDefault(_init);

var _var = __webpack_require__(/*! ../var/var.js */ "./src/var/var.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _init2.default.extend({

    //check whether the option obj is function or not
    isFunction: function isFunction(obj) {
        return _init2.default.type(obj) === 'function';
    },

    //check js value type
    type: function type(obj) {

        if (obj == null) {
            return String(obj);
        }

        //classType 存了js的所有类型
        return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? _var.classType[_var.CT_string.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    },

    //packaging the for function
    each: function each(obj, callbacks, args) {

        var i = 0,
            value,
            isArray = (0, _init.isArraylike)(obj),
            length;
        obj && obj.length && (length = obj.length);
        if (obj && obj.nodeType == 1) {
            value = callbacks.call(obj, 0, obj);
            return obj;
        }

        //如果obj是数组
        if (isArray) {

            for (; i < length; i++) {
                value = callbacks.call(obj[i], i, obj[i]);

                if (value === false) {
                    break;
                }
            }

            //如果obj是json
        } else {

            for (i in obj) {

                value = callbacks.call(obj[i], i, obj[i]);

                if (value === false) {
                    break;
                }
            }
        }
    },

    //check if is {}
    isPlainObject: function isPlainObject(obj) {
        if (_init2.default.type(obj) !== "object" || obj.nodeType) {
            return false;
        }

        return true;
    },

    //check if is []
    isArray: Array.isArray,

    //merge
    merge: function merge(first, second) {
        var l = second.length,
            i = first.length,
            j = 0;

        if (typeof l === "number") {
            for (; j < l; j++) {
                first[i++] = second[j];
            }
        } else {
            while (second[j] !== undefined) {
                first[i++] = second[j++];
            }
        }

        first.length = i;

        return first;
    },

    //toArray
    toArray: function toArray(array) {
        var result = [];

        if ((0, _init.isArraylike)(array)) {
            _init2.default.each(array, function (i, item) {
                result.push(item);
            });
        }

        return result;
    },

    //因為在 $(".div").find("p") 的情況下，Fre.merge方法不适应当前filter方法，所以增加了它
    mergeArr: function mergeArr(obj, elems) {

        var i,
            j,
            len = obj.length,
            lenElem = elems.length;

        obj.context = obj.context;
        obj.preObject = obj;

        for (var i = 0; i < len; i++) {
            delete obj[i];
        }

        for (var i = 0; i < lenElem; i++) {
            console.log(obj);
            obj[i] = elems[i];
        }

        obj.length = lenElem;

        return obj;
    },

    //当attr存在时获取width,否则获取width  obj:dom集合
    setWH: function setWH(obj, num, attr) {

        var len = obj.length,
            i,
            j,
            str;

        if (num) {

            if (typeof num === "number") {

                for (i = 0; i < len; i++) {

                    str = obj[i].getAttribute("style");

                    if (str) {
                        str = _init2.default.matchStyle(str, attr, num);
                        obj[i].setAttribute("style", str);
                    } else {
                        obj[i].setAttribute("style", attr + ":" + num + "px");
                    }
                }
            }
        } else {

            if (attr == "width") {

                return obj[0] && obj[0].offsetWidth || obj;
            } else if (attr = "height") {

                return obj[0] && obj[0].offsetHeight || obj;
            }
        }

        return obj;
    },

    position: function position(elem) {
        if (typeof elem == "array") {
            return { "left": elem[0].offsetLeft, "top": elem[0].offsetTop };
        } else if (elem && elem.nodeType == 1) {
            return { "left": elem.offsetLeft, "top": elem.offsetTop };
        }
    },

    addClass: function addClass(obj, className) {
        var str, flag;
        if (className) {
            _init2.default.each(obj, function (i, item) {

                str = item.className && item.className.split(" ");
                flag = str && _init2.default.findIsExist(str, className);
                if (str) str = str.join(" ");
                !flag ? item.className = str + " " + className : "";
            });
        }
    },
    removeClass: function removeClass(obj, className) {
        var str, flag;

        if (className) {
            _init2.default.each(obj, function (i, item) {

                str = item.className && item.className.split(" ");
                flag = str && _init2.default.findIsExist(str, className);
                flag && (str.splice(flag, 1), str = str.join(" "), item.className = str);
            });
        }
    },

    //查找arr中是否有findeItem这个项  return index
    findIsExist: function findIsExist(arr, findItem) {
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == findItem) {
                return String(i);
            }
        }
    },

    // json合并
    mergeJsonToUnique: function mergeJsonToUnique(first, second) {
        for (var j in second) {
            first[j] = second[j];
        }

        return first;
    },

    //查找elem在arrs当中位置
    eq: function eq(arrs, elem) {
        var index;
        _init2.default.each(arrs, function (i, item) {
            if (elem === item) {
                index = i;
            }
        });
        return index;
    },


    //返回数组中最大的数
    eqLarge: function eqLarge(arr) {
        var large = arr.sort(function (a, b) {
            return a < b;
        });

        return large[0];
    },

    // 返回数组中最小的数
    eqSmall: function eqSmall(arr) {
        var large = arr.sort(function (a, b) {
            return a > b;
        });

        return large[0];
    },

    attr: function attr(elem, options) {
        var value, style, str;

        _init2.default.each(elem, function (i, item) {
            //获取属性值 
            // console.log(Fre.type(options))
            if (_init2.default.type(options) == "string") {
                value = getStyle(item, options);
                _init2.default.type(value) == "number" ? value = parseInt(value) : "";

                //设置属性值
            } else if (_init2.default.type(options) == "object") {

                style = item.getAttribute("style");
                for (var i in options) {
                    style = _init2.default.matchStyle(style, i, options[i]);
                }
                item.setAttribute("style", style);
            }
        });

        function getStyle(elem, attr) {
            var value;
            elem.currentStyle ? value = elem.currentStyle[attr] : value = getComputedStyle(elem, false)[attr];
            return value;
        }

        return value || elem;
    },

    /**
     * 匹配str里面没有有attr,如果有设置attr=num
     * @Author   liyulan
     * @DateTime 2018-07-25T10:50:20+0800
     * @param    {[string]}                 str  [style]
     * @param    {[string]}                 attr [style.key]
     * @param    {[string]}                 num  [style.key.value]
     * @return   {[string]}                      [新设定的value]
     */
    matchStyle: function matchStyle(str, attr, num) {
        var arr1 = [],
            reg = /(\w*\s?\:\s?\w*)*/ig,
            //存匹配好的数组
        str = str.match(reg),
            flag = false; //当前style里面有没有attr这个属性 

        _init2.default.each(str, function (i, item) {
            item ? arr1.push(item) : "";
        });

        str = arr1;
        _init2.default.each(str, function (i, item) {
            if (item.indexOf(attr) != -1) {
                attr == "opacity" ? str[i] = attr + ":" + num : str[i] = attr + ":" + num + "px";
                flag = true;
            }
        });

        !flag && str.push(attr == "opacity" ? attr + ":" + num : attr + ":" + num + "px");

        str = str.join(";");
        flag = false;

        return str;
    },

    //找最近的个父级
    parent: function parent(obj) {
        var arr = [];

        _init2.default.each(obj, function (i, item) {

            while (item) {
                if (item.parentNode.nodeType == 1) {
                    arr.push(item.parentNode);
                    return;
                } else {
                    item = item.parentNode;
                }
            }
        });
        var c = _init2.default.mergeArr(obj, arr);
        //因為在 $(".div").find("p") 的情況下，Fre.merge方法不适应当前filter方法，所以增加了它
    },

    offset: function offset(obj) {
        var arr = {};

        var parent = obj[0].offsetParent;
        arr.top = obj[0].offsetTop;
        arr.left = obj[0].offsetLeft;
        while (parent) {
            arr.top += parent.offsetTop;
            arr.left += parent.offsetLeft;
            parent = parent.offsetParent;
        }
        return arr;
    }

});

//js类型存储

_init2.default.each("Boolean Number String Function Array Data RegExp Object Error".split(" "), function (i, name) {
    _var.classType["[object " + name + "]"] = name.toLowerCase();
});

/***/ }),

/***/ "./src/core/fnExtend.js":
/*!******************************!*\
  !*** ./src/core/fnExtend.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _var = __webpack_require__(/*! ../var/var.js */ "./src/var/var.js");

var _event = __webpack_require__(/*! ../core/event.js */ "./src/core/event.js");

var _event2 = _interopRequireDefault(_event);

var _extend = __webpack_require__(/*! ../core/extend.js */ "./src/core/extend.js");

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extend2.default.fn.extend({
    find: function find(selector) {

        var self = this,
            ret = [],
            len = self.length,
            i;

        for (i = 0; i < len; i++) {
            ret = _extend2.default.find(selector, self[i]);
        }

        ret = this.pushStack(ret);
        ret.selector = this.selector ? this.selector + " " + selector : selector;

        return ret;
    },

    // filter
    filter: function filter(selectorElem) {

        var result = [],
            i,
            len = this.length,
            arr = [];

        for (i = 0; i < len; i++) {
            arr = _extend2.default.find(selectorElem, this[i]);

            if (arr.length) {

                for (var j = 0; j < arr.length; j++) {
                    result.push(arr[j]);
                }
            }
        }

        // p = Fre.mergeArr(this, result);
        result = this.pushStack(result);
        result.selector = this.selectorElem ? this.selectorElem + " " + selectorElem : selectorElem;

        return result;
    },

    //当attr存在时获取width,否则设置width
    width: function width() {
        return _extend2.default.setWH(this, arguments[0], "width");
    },

    //当attr存在时获取height,否则设置height
    height: function height() {
        return _extend2.default.setWH(this, arguments[0], "height");
    },

    position: function position() {
        return { "left": this[0].offsetLeft, "top": this[0].offsetTop };
    },

    addClass: function addClass(className) {
        _extend2.default.addClass(this, className);
        return this;
    },
    removeClass: function removeClass(className) {
        _extend2.default.removeClass(this, className);
        return this;
    },
    on: function on(type) {
        var elem, fn, capture;

        if (_extend2.default.type(arguments[1]) == "string") {
            elem = _extend2.default.find(arguments[1]);
            fn = arguments[2];
            capture = arguments[3];
        } else if (_extend2.default.type(arguments[1]) == "function") {
            elem = this;
            fn = arguments[1];
            capture = arguments[2];
        }

        _event2.default.addEvent(elem, type, fn, capture);
        return this;
    },
    remove: function remove(type, elem, fn) {
        var elem, fn;
        if (_extend2.default.type(arguments[1]) == "string") {
            elem = _extend2.default.find(arguments[1]);
            fn = arguments[2];
        } else if (typeof arguments[1] == "function") {
            elem = this;
            fn = arguments[1];
        }

        if (_extend2.default.type(arguments[1]) == "string") {
            elem = _extend2.default.find(arguments[1]);
        } else {
            elem = this;
        }

        _event2.default.removeEvent(elem, type, fn);
        _extend2.default.each(elem, function (i, item) {});

        return this;
    },
    offset: function offset() {
        return _extend2.default.offset(this);
    }

});

/***/ }),

/***/ "./src/core/init.js":
/*!**************************!*\
  !*** ./src/core/init.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isArraylike = isArraylike;

var _var = __webpack_require__(/*! ../var/var.js */ "./src/var/var.js");

// import Fre,{isArraylike} from "../core/init.js";


/** a central reference to the root jQuery(document) */

var rootFre,
    Fre = function Fre(selector, context) {
    return new Fre.fn.init(selector, context, rootFre);
};
Fre.fn = Fre.prototype = {
    constructor: Fre,

    //原jquery所有情况：Fre(elem) ,Fre(jquery obj), Fre(selector [,context]) , Fre(html,attr) ,Fre(callback) 
    init: function init(selector, context, rootFre) {
        var i = 0,
            match,
            elem;

        //Handle:$("") ,$(null) ,$(undefined) ,$(false)
        if (!selector) {
            return this;
        }

        //Handle:Html string
        if (typeof selector === "string") {
            if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length > 1) {
                // Assume that strings that start and end width <> are HTML and skip the regex check
                match = [null, selector, null];
            } else {
                match = _var.rquickExpr.exec(selector);
            }
            // Handel:Match html or make sure no context is specified for #id
            // 如果是selector 不是html字符串 ，match[1]=undefined
            if (match && (match[1] || !context)) {

                // HANDLE: $F(html) -> $F(array)
                if (match[1]) {

                    // HANDLE: $F(#id)
                } else {
                    elem = document.getElementById(match[2]);

                    //Check parentNode to catch when Blackberry 4.6 returns
                    if (elem && elem.parentNode) {
                        //Inject the element directly into the jQuery object
                        this.length = 1;
                        this[0] = elem;
                    }

                    this.context = document;
                    this.selector = selector;

                    return this;
                }

                // HANDLE: $(expr, $(...))             
            } else if (!context || context.Fre) {
                return (context || rootFre).find(selector);
            } else {}
            // return this.constructor(context).find(selector);


            //Handle:$F(document)
        } else if (selector.nodeType) {

            this.context = this[0] = selector;
            this.length = 1;

            return this;
        }

        if (selector.selector !== undefined) {
            this.selector = selector.selector;
            this.context = selector.context;
        }
    },
    selector: "",

    // The default length of a jQuery object is 0
    length: 0,

    // Take an array of elements and push it onto the stack
    pushStack: function pushStack(elems) {

        // Build a new jQuery matched element set
        var ret = Fre.merge(this.constructor(), elems);

        // Add the old object onto the stack (as a reference)
        ret.prevObject = this;
        ret.context = this.context;

        return ret;
    },

    //设置属性
    //如果一个参数且不是obj 就是获取一个tag属性　　　如：$F("#div").attr("name")  return：当前获取的值
    //如果是一个参数且是obj　就是设置多个属性       如：$F("#div").attr({"name":"box","href":"http://"})   return $("#div")
    //如果是二个参数　就是设置一个属性        如：$F("#div").attr("name","box")      return $("#div")
    attr: function attr() {

        var i,
            j,
            len = this.length,
            str,
            argLen = arguments.length,
            key,
            value;
        //Handel:传参是一个的情况
        if (argLen === 1) {
            key = arguments[0];

            //Handle: 如 $F("#div").attr("name")
            if (Fre.type(key) === "string") {

                value = this[0].getAttribute(key);
                return value;

                //Handle: 如：$F("#div").attr({"name":"box","href":"http://"})   return $("#div")
            } else if (Fre.type(key) === "object") {

                if (len == 1) {

                    for (i in arguments[0]) {
                        this[0].setAttribute(i, arguments[0][i]);
                    }
                } else if (len > 1) {

                    for (i = 0; i < len; i++) {

                        for (j in arguments[0]) {

                            this[i].setAttribute(j, arguments[0][j]);
                        }
                    }
                }
                return this;
            }

            //Handel:传参是一个的情况
        } else if (argLen === 2) {

            if (len == 1) {

                for (i in arguments[0]) {
                    this[0].setAttribute(i, arguments[0][i]);
                }
            } else {

                for (i = 0; i < len; i++) {
                    this[i].setAttribute(arguments[0], arguments[1]);
                }
            }

            return this;
        }
    }
    /** Give the init funciton the Fre prototype for later instantiation */
};Fre.fn.init.prototype = Fre.fn;

//method superposition
Fre.extend = Fre.fn.extend = function () {
    var options,
        //指向某个源对象
    name,
        //表示源对象的某个属性名。
    src,
        //表示某个目标对象的某个属性的原始值。
    copy,
        //表示某个源对象的某个属性值
    copyIsArray,
        //指示变量是否是数组
    clone,
        //表示深度复制时原始值的修正值 
    i = 1,
        //指源对象的起始下标
    target = arguments[0] || {},
        //指向目标对象
    length = arguments.length,
        //表示参数的个数，用于修正变量 target。
    deep = false; //表示是否是深度复制，默认false

    //Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};

        // skip the boolean and the target
        i = 2;
    }

    //Handle case when target is a string or something(possible in deep copy)
    if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object") {
        target = {};
    }

    //extend Fre itself if only one argument is passed
    /**
     * 如果length属性等于i的值那就表示没有目标对象存在，正常情况下length应该是大于i的值的 ，那么这个时候就把this作为目标对象把i值减一实现length值大于i值（比i大1）
     * 这个就是jQuery给自己扩展属性的方法的实现原理，只要不传入目标对象就可以啦
     * 两种可能的情况：$.extend(obj)    或者  $.extend(false/true,obj)；
     */
    if (length === i) {
        target = this;
        --i;
    }

    for (; i < length; i++) {

        //only deel with non-null/undefined values 
        //在js中如果不区分类型nul==undefined,所以用null也可以过滤掉undefined
        //比如$.extend(target, {}, null);中的第2个参数null是不参与合并的
        if ((options = arguments[i]) != null) {

            //Extend the base object
            for (name in options) {
                src = target[name]; //目标参数中name字段值
                copy = options[name]; //当前参数中name字段值

                //prevent never-ending loop
                //若参数中字段的值就是目标参数，停止赋值，进行下一个字段的赋值
                if (target === copy) {
                    continue;
                }

                //Recurse if we`re mergin plain objects or arrayss
                //deep 为true,且当前参数中的name存在且为object类型或Array类型,则进行深度拷贝，
                //（深度拷贝就是在target 和optins 同一name字段还是object情况下，对当前name字段里面的子项进行递归叠加  ）
                //（浅拷贝是在optins target 只要有相同的name字段就覆盖叠加）
                if (deep && copy && (Fre.isPlainObject(copy) || (copyIsArray = Fre.isArray(copy)))) {

                    //如果当前参数的值为Array类型
                    //判断目标参数中name字段的值是否存在，诺存在就使用原来的，不然就进行初始化
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Fre.isArray(src) ? src : [];
                    } else {

                        clone = src && Fre.isPlainObject(src) ? src : {};
                    }

                    //never move original objects,clone them
                    target[name] = Fre.extend(deep, clone, copy);

                    //deep为false,则表示浅度拷贝，直接进行赋值
                    //若copy是简单类型且存在值，则直接进行赋值
                    //Don`t bring in undefined values
                } else if (copy !== undefined) {

                    //若原对象存在name属性，则直接覆盖掉;若不存在，则创建新的属性
                    target[name] = copy;
                }
            }
        }
    }

    //return the modefined object
    return target;
};

Fre.fn.extend({
    find: function find(selector) {

        var self = this,
            ret = [],
            len = self.length,
            i;

        for (i = 0; i < len; i++) {
            ret = Fre.find(selector, self[i]);
        }

        ret = this.pushStack(ret);
        ret.selector = this.selector ? this.selector + " " + selector : selector;

        return ret;
    },

    // filter
    filter: function filter(selectorElem) {

        var result = [],
            i,
            len = this.length,
            arr = [];

        for (i = 0; i < len; i++) {
            arr = Fre.find(selectorElem, this[i]);

            if (arr.length) {

                for (var j = 0; j < arr.length; j++) {
                    result.push(arr[j]);
                }
            }
        }

        // p = Fre.mergeArr(this, result);
        result = this.pushStack(result);
        result.selector = this.selectorElem ? this.selectorElem + " " + selectorElem : selectorElem;

        return result;
    },

    //当attr存在时获取width,否则设置width
    width: function width() {
        return Fre.setWH(this, arguments[0], "width");
    },

    //当attr存在时获取height,否则设置height
    height: function height() {
        return Fre.setWH(this, arguments[0], "height");
    },

    position: function position() {
        return { "left": this[0].offsetLeft, "top": this[0].offsetTop };
    },

    addClass: function addClass(className) {
        Fre.addClass(this, className);
        return this;
    },
    removeClass: function removeClass(className) {
        Fre.removeClass(this, className);
        return this;
    }

});

//判断是不是类数组
function isArraylike(obj) {

    var length;
    obj && obj.length && (length = obj.length);

    // obj.length? length = obj.length : length = false;
    // (obj.nodeType === 1 && length) || !obj.push
    if (length && !obj.push) {
        return true;
    }

    // return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj);
    return false;
}

//All Fre objects should point back to these
rootFre = Fre(document);

/**  If there is a window object, that at least has a document property, define Fre output interface */
if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && _typeof(window.document) === "object") {
    window.Fre = window.$F = Fre;
}

exports.default = Fre;

/***/ }),

/***/ "./src/sizzle/sizzle-selector.js":
/*!***************************************!*\
  !*** ./src/sizzle/sizzle-selector.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _init = __webpack_require__(/*! ../core/init.js */ "./src/core/init.js");

var _init2 = _interopRequireDefault(_init);

var _sizzle = __webpack_require__(/*! ../sizzle/sizzle.js */ "./src/sizzle/sizzle.js");

var _sizzle2 = _interopRequireDefault(_sizzle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (Fre, Sizzle) {
    Fre.find = Sizzle;
    Fre.unique = Sizzle.uniqueSort;
})(_init2.default, _sizzle2.default);

exports.default = window.Fre;

/***/ }),

/***/ "./src/sizzle/sizzle.js":
/*!******************************!*\
  !*** ./src/sizzle/sizzle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// Sizzle:
(function (window, undefined) {

    //Handle: $(".div") $("div")  $(".div||div [name=value]")
    function Sizzle(selector, context) {

        context ? context = context : context = document;
        var
        // match $F(".div")
        claExpr = /^\.[a-zA-Z]+[0-9\-]*\w*$/,


        // match $F(".div")
        idExpr = /^(#[A-Za-z]*\w)/,


        // match $F("div") 
        tagClaExpr = /^([a-z]+)([1-9])*$/,


        // math $F(".div||div [name=value]")
        attrExpr = /^(\.[a-zA-Z]+[0-9\-]*\w*| [a-z]+[1-9]? | #[A-Za-z]*\w)\s*\[\s*(([a-zA-z]+\w*)\s*=\s*(\w+))?\s*\]|\s$/,


        //use to store tag that match objArr and 
        returnArr = [],
            arr = [];

        //Handle: $("#div")
        if (idExpr.test(selector)) {
            var idelem = document.getElementById(selector.slice(1));
            returnArr.push(idelem);

            //Handle: $(".div")
        } else if (claExpr.test(selector)) {

            returnArr = Sizzle.getClass(selector.slice(1), context);

            //Handle: $("div")
        } else if (tagClaExpr.test(selector)) {

            returnArr = context.getElementsByTagName(selector);

            //Handle: $(".div||div [name=value]")
        } else if (attrExpr.test(selector)) {
            var elem = attrExpr.exec(selector),
                arr;

            //判断前面的class选择还是标签选择  
            //handle: 前面选择是标签情况 $F("div[name=]") 
            if (elem[1].charAt(1) != ".") {

                arr = context.getElementsByTagName(elem[1]);

                // handle:前面选择是class情况 $F(".div[name=]")   
            } else {
                arr = Sizzle.getClass(elem[1].charAt(1), context);
            }

            // 如果  $(".div||div [name=value]") 没写完整 只写了 类似这样的情况$(".div||div [")  返回$F(".div") || $F("div")
            if (!elem[2]) {
                returnArr = [];

                //handle: 最终处理$(".div||div [name=value]")
            } else {

                var name = elem[3],
                    value = elem[4];

                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].getAttribute(name) && arr[i].getAttribute(name) == value) {
                        returnArr.push(arr[i]);
                    }
                }

                if (returnArr.length == 0) {
                    returnArr = [];
                }
            }
        }
        //ie8的时候 returnArr 展开里面的项是undefined  所以
        Fre.each(returnArr, function (i, item) {
            arr.push(item);
        });

        return arr;
    }

    //fn getClassByClassName(className) ,return a selctor arr
    Sizzle.getClass = function (className, context) {

        var objArr = context.getElementsByClassName && context.getElementsByClassName(className);

        //if is standard brower user getElementsByClassName 
        if (objArr) {
            return objArr;
            //if is non standard brower use create method
        } else {

            objArr = [];
            objLikeArr = context.getElementsByTagName("*");

            Fre.each(objLikeArr, function (i, item) {

                if (item.className && item.className.length > 0) {

                    var classArr = item.className.split(" ");

                    Fre.each(classArr, function (j, jitem) {

                        if (jitem == className) {
                            objArr.push(item);
                        }
                    });
                }
            });
            return objArr;
        }
    };

    /**
     * Document sorting and removing duplicates
     * @Author   liyulan
     * @DateTime 2018-07-12T11:24:38+0800
     * @param    {[type]}                 results [description]
     * @return   {[type]}                         [description]
     */
    Sizzle.uniqueSort = function (results) {

        var elem,
            duplicates = [],
            j = 0,
            i = 0;
    };

    window.Sizzle = Sizzle;
})(window);

exports.default = window.Sizzle;

/***/ }),

/***/ "./src/var/var.js":
/*!************************!*\
  !*** ./src/var/var.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/** a central reference to the root jQuery(document) */
// var rootFre,

/** classType ->type paris*/
var classType = {},
    CT_string = classType.toString,
    CT_hasOwn = classType.hasOwnProperty,


// A simple way to check for HTML strings
rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;

exports.classType = classType;
exports.CT_string = CT_string;
exports.CT_hasOwn = CT_hasOwn;
exports.rquickExpr = rquickExpr;

/***/ })

/******/ });
//# sourceMappingURL=Fre.js.map