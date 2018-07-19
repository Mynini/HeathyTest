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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_extend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/extend.js */ \"./src/core/extend.js\");\n/* harmony import */ var _sizzle_sizzle_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizzle/sizzle-selector.js */ \"./src/sizzle/sizzle-selector.js\");\n\n\n\n(function (Fre, Sizzle) {\n    return Fre;\n})(_core_extend_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _sizzle_sizzle_selector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/Fre.js?");

/***/ }),

/***/ "./src/core/extend.js":
/*!****************************!*\
  !*** ./src/core/extend.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/init.js */ \"./src/core/init.js\");\n/* harmony import */ var _var_var_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../var/var.js */ \"./src/var/var.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function (Fre) {\n    Fre.extend({\n\n        //check whether the option obj is function or not\n        isFunction: function (obj) {\n            return Fre.type(obj) === 'function';\n        },\n\n        //check js value type\n        type: function (obj) {\n\n            if (obj == null) {\n                return String(obj);\n            }\n\n            //classType 存了js的所有类型\n            return typeof obj === \"object\" || typeof obj === \"function\" ? _var_var_js__WEBPACK_IMPORTED_MODULE_1__[\"classType\"][_var_var_js__WEBPACK_IMPORTED_MODULE_1__[\"CT_string\"].call(obj)] || \"object\" : typeof obj;\n        },\n\n        //packaging the for function\n        each: function (obj, callbacks, args) {\n\n            var i = 0,\n                value,\n                length = obj.length,\n                isArray = Object(_core_init_js__WEBPACK_IMPORTED_MODULE_0__[\"isArraylike\"])(obj);\n\n            if (args) {\n\n                if (isArray) {\n                    for (; i < length; i++) {\n                        value = callbacks.apply(obj[i], args);\n\n                        if (value === false) {\n                            break;\n                        }\n                    }\n                } else {\n                    for (i in obj) {\n                        value = callbacks.apply(obj[i], args);\n\n                        if (value === false) {\n                            break;\n                        }\n                    }\n                }\n            } else {\n\n                //如果obj是数组\n                if (isArray) {\n                    for (; i < length; i++) {\n                        value = callbacks.call(obj[i], i, obj[i]);\n\n                        if (value === false) {\n                            break;\n                        }\n                    }\n\n                    //如果obj是json\n                } else {\n\n                    for (i in obj) {\n                        value = callbacks.call(obj[i], i, obj[i]);\n\n                        if (value === false) {\n                            break;\n                        }\n                    }\n                }\n            }\n        },\n\n        //check if is {}\n        isPlainObject: function (obj) {\n            if (Fre.type(obj) !== \"object\" || obj.nodeType) {\n                return false;\n            }\n\n            return true;\n        },\n\n        //check if is []\n        isArray: Array.isArray,\n\n        //merge\n        merge: function (first, second) {\n            var l = second.length,\n                i = first.length,\n                j = 0;\n\n            if (typeof l === \"number\") {\n                for (; j < l; j++) {\n                    first[i++] = second[j];\n                }\n            } else {\n                while (second[j] !== undefined) {\n                    first[i++] = second[j++];\n                }\n            }\n\n            first.length = i;\n\n            return first;\n        },\n\n        //toArray\n        toArray: function (array) {\n            var result = [];\n\n            if (Object(_core_init_js__WEBPACK_IMPORTED_MODULE_0__[\"isArraylike\"])(array)) {\n                Fre.each(array, function (i, item) {\n                    result.push(item);\n                });\n            }\n\n            return result;\n        },\n\n        //因為在 $(\".div\").find(\"p\") 的情況下，Fre.merge方法不适应当前filter方法，所以增加了它\n        mergeArr: function (obj, elems) {\n\n            var i,\n                j,\n                len = obj.length;\n            lenElem = elems.length;\n\n            obj.context = obj.context;\n            obj.preObject = obj;\n\n            for (var i = 0; i < len; i++) {\n                delete obj[i];\n            }\n\n            for (var i = 0; i < lenElem; i++) {\n                obj[i] = elems[i];\n            }\n\n            obj.length = lenElem;\n\n            return obj;\n        },\n\n        //当attr存在时获取width,否则获取width  obj:dom集合\n        setWH: function (obj, num, attr) {\n\n            var len = obj.length,\n                i,\n                j,\n                str,\n                reg,\n                flag = false; //当前style里面有没有attr这个属性 \n\n            if (num) {\n\n                if (typeof num === \"number\") {\n\n                    for (i = 0; i < len; i++) {\n                        var arr1 = []; //存匹配好的数组\n\n                        str = obj[i].getAttribute(\"style\");\n\n                        if (str) {\n                            reg = /(\\w*\\s?\\:\\s?\\w*)*/ig;\n                            str = str.match(reg);\n\n                            Fre.each(str, function (i, item) {\n                                item ? arr1.push(item) : \"\";\n                            });\n                            str = arr1;\n\n                            Fre.each(str, function (i, item) {\n                                if (item.indexOf(attr) != -1) {\n                                    str[i] = attr + \":\" + num + \"px\";\n                                    flag = true;\n                                }\n                            });\n\n                            if (!flag) {\n                                str.push(attr + \":\" + num + \"px\");\n                            }\n\n                            str = str.join(\";\");\n                            obj[i].setAttribute(\"style\", str);\n                            flag = false;\n                        } else {\n                            obj[i].setAttribute(\"style\", attr + \":\" + num + \"px\");\n                        }\n                    }\n                }\n            } else {\n\n                if (attr == \"width\") {\n\n                    return obj[0] && obj[0].offsetWidth || obj;\n                } else if (attr = \"height\") {\n\n                    return obj[0] && obj[0].offsetHeight || obj;\n                }\n            }\n\n            return obj;\n        },\n\n        position: function () {\n            return this;\n        },\n\n        addClass: function (obj, className) {\n            var str, flag;\n            if (className) {\n                Fre.each(obj, function (i, item) {\n\n                    str = item.className && item.className.split(\" \");\n                    flag = str && Fre.findIsExist(str, className);\n                    str = str.join(\" \");\n                    !flag ? item.className = str + \" \" + className : \"\";\n                });\n            }\n        },\n        removeClass: function (obj, className) {\n            var str, flag;\n\n            if (className) {\n                Fre.each(obj, function (i, item) {\n\n                    str = item.className && item.className.split(\" \");\n                    flag = str && Fre.findIsExist(str, className);\n                    flag && (str.splice(flag, 1), str = str.join(\" \"), item.className = str);\n                });\n            }\n        },\n\n        //查找arr中是否有findeItem这个项  return index\n        findIsExist: function (arr, findItem) {\n            var obj = {};\n            for (i = 0; i < arr.length; i++) {\n                if (arr[i] == findItem) {\n                    return String(i);\n                }\n            }\n        }\n    });\n\n    //js类型存储\n    Fre.each(\"Boolean Number String Function Array Data RegExp Object Error\".split(\" \"), function (i, name) {\n        _var_var_js__WEBPACK_IMPORTED_MODULE_1__[\"classType\"][\"[object \" + name + \"]\"] = name.toLowerCase();\n    });\n})(_core_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n//# sourceURL=webpack:///./src/core/extend.js?");

/***/ }),

/***/ "./src/core/init.js":
/*!**************************!*\
  !*** ./src/core/init.js ***!
  \**************************/
/*! exports provided: isArraylike, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArraylike\", function() { return isArraylike; });\n/* harmony import */ var _var_var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../var/var.js */ \"./src/var/var.js\");\n\n// import Fre,{isArraylike} from \"../core/init.js\";\n\n\n/** a central reference to the root jQuery(document) */\n\nvar rootFre,\n    Fre = function (selector, context) {\n    return new Fre.fn.init(selector, context, rootFre);\n};\nFre.fn = Fre.prototype = {\n    constructor: Fre,\n\n    //原jquery所有情况：Fre(elem) ,Fre(jquery obj), Fre(selector [,context]) , Fre(html,attr) ,Fre(callback) \n    init: function (selector, context, rootFre) {\n        var i = 0,\n            match,\n            elem;\n\n        //Handle:$(\"\") ,$(null) ,$(undefined) ,$(false)\n        if (!selector) {\n            return this;\n        }\n\n        //Handle:Html string\n        if (typeof selector === \"string\") {\n            if (selector.charAt(0) === \"<\" && selector.charAt(selector.length - 1) === \">\" && selector.length > 1) {\n                // Assume that strings that start and end width <> are HTML and skip the regex check\n                match = [null, selector, null];\n            } else {\n                match = _var_var_js__WEBPACK_IMPORTED_MODULE_0__[\"rquickExpr\"].exec(selector);\n            }\n            // Handel:Match html or make sure no context is specified for #id\n            // 如果是selector 不是html字符串 ，match[1]=undefined\n            if (match && (match[1] || !context)) {\n\n                // HANDLE: $F(html) -> $F(array)\n                if (match[1]) {\n\n                    // HANDLE: $F(#id)\n                } else {\n                    elem = document.getElementById(match[2]);\n\n                    //Check parentNode to catch when Blackberry 4.6 returns\n                    if (elem && elem.parentNode) {\n                        //Inject the element directly into the jQuery object\n                        this.length = 1;\n                        this[0] = elem;\n                    }\n\n                    this.context = document;\n                    this.selector = selector;\n\n                    return this;\n                }\n\n                // HANDLE: $(expr, $(...))             \n            } else if (!context || context.Fre) {\n                return (context || rootFre).find(selector);\n            } else {}\n            // return this.constructor(context).find(selector);\n\n\n            //Handle:$F(document)\n        } else if (selector.nodeType) {\n\n            this.context = this[0] = selector;\n            this.length = 1;\n\n            return this;\n        }\n\n        if (selector.selector !== undefined) {\n            this.selector = selector.selector;\n            this.context = selector.context;\n        }\n    },\n    selector: \"\",\n\n    // The default length of a jQuery object is 0\n    length: 0,\n\n    // Take an array of elements and push it onto the stack\n    pushStack: function (elems) {\n\n        // Build a new jQuery matched element set\n        var ret = Fre.merge(this.constructor(), elems);\n\n        // Add the old object onto the stack (as a reference)\n        ret.prevObject = this;\n        ret.context = this.context;\n\n        return ret;\n    },\n\n    //设置属性\n    //如果一个参数且不是obj 就是获取一个tag属性　　　如：$F(\"#div\").attr(\"name\")  return：当前获取的值\n    //如果是一个参数且是obj　就是设置多个属性       如：$F(\"#div\").attr({\"name\":\"box\",\"href\":\"http://\"})   return $(\"#div\")\n    //如果是二个参数　就是设置一个属性        如：$F(\"#div\").attr(\"name\",\"box\")      return $(\"#div\")\n    attr: function () {\n\n        var i,\n            j,\n            len = this.length,\n            str,\n            argLen = arguments.length,\n            key,\n            value;\n        //Handel:传参是一个的情况\n        if (argLen === 1) {\n            key = arguments[0];\n\n            //Handle: 如 $F(\"#div\").attr(\"name\")\n            if (Fre.type(key) === \"string\") {\n\n                value = this[0].getAttribute(key);\n                return value;\n\n                //Handle: 如：$F(\"#div\").attr({\"name\":\"box\",\"href\":\"http://\"})   return $(\"#div\")\n            } else if (Fre.type(key) === \"object\") {\n\n                if (len == 1) {\n\n                    for (i in arguments[0]) {\n                        this[0].setAttribute(i, arguments[0][i]);\n                    }\n                } else if (len > 1) {\n\n                    for (i = 0; i < len; i++) {\n\n                        for (j in arguments[0]) {\n\n                            this[i].setAttribute(j, arguments[0][j]);\n                        }\n                    }\n                }\n                return this;\n            }\n\n            //Handel:传参是一个的情况\n        } else if (argLen === 2) {\n\n            if (len == 1) {\n\n                for (i in arguments[0]) {\n                    this[0].setAttribute(i, arguments[0][i]);\n                }\n            } else {\n\n                for (i = 0; i < len; i++) {\n                    this[i].setAttribute(arguments[0], arguments[1]);\n                }\n            }\n\n            return this;\n        }\n    }\n    /** Give the init funciton the Fre prototype for later instantiation */\n};Fre.fn.init.prototype = Fre.fn;\n\n//method superposition\nFre.extend = Fre.fn.extend = function () {\n    var options,\n        //指向某个源对象\n    name,\n        //表示源对象的某个属性名。\n    src,\n        //表示某个目标对象的某个属性的原始值。\n    copy,\n        //表示某个源对象的某个属性值\n    copyIsArray,\n        //指示变量是否是数组\n    clone,\n        //表示深度复制时原始值的修正值 \n    i = 1,\n        //指源对象的起始下标\n    target = arguments[0] || {},\n        //指向目标对象\n    length = arguments.length,\n        //表示参数的个数，用于修正变量 target。\n    deep = false; //表示是否是深度复制，默认false\n\n    //Handle a deep copy situation\n    if (typeof target === \"boolean\") {\n        deep = target;\n        target = arguments[1] || {};\n\n        // skip the boolean and the target\n        i = 2;\n    }\n\n    //Handle case when target is a string or something(possible in deep copy)\n    if (typeof target !== \"object\") {\n        target = {};\n    }\n\n    //extend Fre itself if only one argument is passed\n    /**\r\n     * 如果length属性等于i的值那就表示没有目标对象存在，正常情况下length应该是大于i的值的 ，那么这个时候就把this作为目标对象把i值减一实现length值大于i值（比i大1）\r\n     * 这个就是jQuery给自己扩展属性的方法的实现原理，只要不传入目标对象就可以啦\r\n     * 两种可能的情况：$.extend(obj)    或者  $.extend(false/true,obj)；\r\n     */\n    if (length === i) {\n        target = this;\n        --i;\n    }\n\n    for (; i < length; i++) {\n\n        //only deel with non-null/undefined values \n        //在js中如果不区分类型nul==undefined,所以用null也可以过滤掉undefined\n        //比如$.extend(target, {}, null);中的第2个参数null是不参与合并的\n        if ((options = arguments[i]) != null) {\n\n            //Extend the base object\n            for (name in options) {\n                src = target[name]; //目标参数中name字段值\n                copy = options[name]; //当前参数中name字段值\n\n                //prevent never-ending loop\n                //若参数中字段的值就是目标参数，停止赋值，进行下一个字段的赋值\n                if (target === copy) {\n                    continue;\n                }\n\n                //Recurse if we`re mergin plain objects or arrayss\n                //deep 为true,且当前参数中的name存在且为object类型或Array类型,则进行深度拷贝，\n                //（深度拷贝就是在target 和optins 同一name字段还是object情况下，对当前name字段里面的子项进行递归叠加  ）\n                //（浅拷贝是在optins target 只要有相同的name字段就覆盖叠加）\n                if (deep && copy && (Fre.isPlainObject(copy) || (copyIsArray = Fre.isArray(copy)))) {\n\n                    //如果当前参数的值为Array类型\n                    //判断目标参数中name字段的值是否存在，诺存在就使用原来的，不然就进行初始化\n                    if (copyIsArray) {\n                        copyIsArray = false;\n                        clone = src && Fre.isArray(src) ? src : [];\n                    } else {\n\n                        clone = src && Fre.isPlainObject(src) ? src : {};\n                    }\n\n                    //never move original objects,clone them\n                    target[name] = Fre.extend(deep, clone, copy);\n\n                    //deep为false,则表示浅度拷贝，直接进行赋值\n                    //若copy是简单类型且存在值，则直接进行赋值\n                    //Don`t bring in undefined values\n                } else if (copy !== undefined) {\n\n                    //若原对象存在name属性，则直接覆盖掉;若不存在，则创建新的属性\n                    target[name] = copy;\n                }\n            }\n        }\n    }\n\n    //return the modefined object\n    return target;\n};\n\nFre.fn.extend({\n    find: function (selector) {\n\n        var self = this,\n            ret = [],\n            len = self.length,\n            i;\n\n        for (i = 0; i < len; i++) {\n            ret = Fre.find(selector, self[i]);\n        }\n\n        ret = this.pushStack(ret);\n        ret.selector = this.selector ? this.selector + \" \" + selector : selector;\n\n        return ret;\n    },\n\n    // filter\n    filter: function (selectorElem) {\n\n        var result = [],\n            i,\n            len = this.length,\n            arr = [];\n\n        for (i = 0; i < len; i++) {\n            arr = Fre.find(selectorElem, this[i]);\n\n            if (arr.length) {\n\n                for (var j = 0; j < arr.length; j++) {\n                    result.push(arr[j]);\n                }\n            }\n        }\n\n        // p = Fre.mergeArr(this, result);\n        result = this.pushStack(result);\n        result.selector = this.selectorElem ? this.selectorElem + \" \" + selectorElem : selectorElem;\n\n        return result;\n    },\n\n    //当attr存在时获取width,否则设置width\n    width: function () {\n        return Fre.setWH(this, arguments[0], \"width\");\n    },\n\n    //当attr存在时获取height,否则设置height\n    height: function () {\n        return Fre.setWH(this, arguments[0], \"height\");\n    },\n\n    position: function () {\n        return { \"left\": this[0].offsetLeft, \"top\": this[0].offsetTop };\n    },\n\n    addClass: function (className) {\n        Fre.addClass(this, className);\n        return this;\n    },\n    removeClass: function (className) {\n        Fre.removeClass(this, className);\n        return this;\n    }\n\n});\n\n//判断是不是类数组\nfunction isArraylike(obj) {\n    var length = obj.length;\n    if (obj.nodeType === 1 && length || !obj.push) {\n        return true;\n    }\n\n    // return type === \"array\" || type !== \"function\" && (length === 0 || typeof length === \"number\" && length > 0 && (length - 1) in obj);\n    return false;\n}\n\n//All Fre objects should point back to these\nrootFre = Fre(document);\n\n/**  If there is a window object, that at least has a document property, define Fre output interface */\nif (typeof window === \"object\" && typeof window.document === \"object\") {\n    window.Fre = window.$F = Fre;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fre);\n\n//# sourceURL=webpack:///./src/core/init.js?");

/***/ }),

/***/ "./src/sizzle/sizzle-selector.js":
/*!***************************************!*\
  !*** ./src/sizzle/sizzle-selector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/init.js */ \"./src/core/init.js\");\n/* harmony import */ var _sizzle_sizzle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sizzle/sizzle.js */ \"./src/sizzle/sizzle.js\");\n\n\n\n(function (Fre, Sizzle) {\n    Fre.find = Sizzle;\n    Fre.unique = Sizzle.uniqueSort;\n})(_core_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _sizzle_sizzle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (window.Fre);\n\n//# sourceURL=webpack:///./src/sizzle/sizzle-selector.js?");

/***/ }),

/***/ "./src/sizzle/sizzle.js":
/*!******************************!*\
  !*** ./src/sizzle/sizzle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Sizzle:\n(function (window, undefined) {\n\n    //Handle: $(\".div\") $(\"div\")  $(\".div||div [name=value]\")\n    function Sizzle(selector, context) {\n\n        context ? context = context : context = document;\n        var\n        // match $F(\".div\")\n        claExpr = /^(\\.[a-zA-Z]+[0-9]*)\\w*$/,\n\n\n        // match $F(\"div\") \n        tagClaExpr = /^([a-z]+)([1-9])*$/,\n\n\n        // math $F(\".div||div [name=value]\")\n        attrExpr = /^(\\.[a-z]+[0-9]*\\w*|[a-z]+[1-9]?)\\s*\\[\\s*(([a-zA-z]+\\w*)\\s*=\\s*(\\w+))?\\s*\\]|\\s$/,\n\n\n        //use to store tag that match objArr and \n        returnArr = [],\n            arr = [];\n\n        //Handle: $(\".div\")\n        if (claExpr.test(selector)) {\n\n            returnArr = Sizzle.getClass(selector.slice(1), context);\n\n            //Handle: $(\"div\")\n        } else if (tagClaExpr.test(selector)) {\n\n            returnArr = context.getElementsByTagName(selector);\n\n            //Handle: $(\".div||div [name=value]\")\n        } else if (attrExpr.test(selector)) {\n            var elem = attrExpr.exec(selector),\n                arr;\n\n            //判断前面的class选择还是标签选择  \n            //handle: 前面选择是标签情况 $F(\"div[name=]\") \n            if (elem[1].charAt(1) != \".\") {\n\n                arr = context.getElementsByTagName(elem[1]);\n\n                // handle:前面选择是class情况 $F(\".div[name=]\")   \n            } else {\n                arr = Sizzle.getClass(elem[1].charAt(1), context);\n            }\n\n            // 如果  $(\".div||div [name=value]\") 没写完整 只写了 类似这样的情况$(\".div||div [\")  返回$F(\".div\") || $F(\"div\")\n            if (!elem[2]) {\n                returnArr = [];\n\n                //handle: 最终处理$(\".div||div [name=value]\")\n            } else {\n\n                var name = elem[3],\n                    value = elem[4];\n\n                for (var i = 0; i < arr.length; i++) {\n                    if (arr[i].getAttribute(name) && arr[i].getAttribute(name) == value) {\n                        returnArr.push(arr[i]);\n                    }\n                }\n\n                if (returnArr.length == 0) {\n                    returnArr = [];\n                }\n            }\n        }\n\n        //ie8的时候 returnArr 展开里面的项是undefined  所以\n        Fre.each(returnArr, function (i, item) {\n            arr.push(item);\n        });\n\n        return arr;\n    }\n\n    //fn getClassByClassName(className) ,return a selctor arr\n    Sizzle.getClass = function (className, context) {\n\n        var objArr = context.getElementsByClassName && context.getElementsByClassName(className);\n\n        console.log(objArr);\n\n        //if is standard brower user getElementsByClassName \n        if (objArr) {\n            return objArr;\n            //if is non standard brower use create method\n        } else {\n\n            objArr = [];\n            objLikeArr = context.getElementsByTagName(\"*\");\n\n            Fre.each(objLikeArr, function (i, item) {\n\n                if (item.className && item.className.length > 0) {\n\n                    var classArr = item.className.split(\" \");\n\n                    Fre.each(classArr, function (j, jitem) {\n\n                        if (jitem == className) {\n                            objArr.push(item);\n                        }\n                    });\n                }\n            });\n\n            return objArr;\n        }\n    };\n\n    /**\r\n     * Document sorting and removing duplicates\r\n     * @Author   liyulan\r\n     * @DateTime 2018-07-12T11:24:38+0800\r\n     * @param    {[type]}                 results [description]\r\n     * @return   {[type]}                         [description]\r\n     */\n    Sizzle.uniqueSort = function (results) {\n\n        var elem,\n            duplicates = [],\n            j = 0,\n            i = 0;\n    };\n\n    window.Sizzle = Sizzle;\n})(window);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (window.Sizzle);\n\n//# sourceURL=webpack:///./src/sizzle/sizzle.js?");

/***/ }),

/***/ "./src/var/var.js":
/*!************************!*\
  !*** ./src/var/var.js ***!
  \************************/
/*! exports provided: classType, CT_string, CT_hasOwn, rquickExpr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"classType\", function() { return classType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CT_string\", function() { return CT_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CT_hasOwn\", function() { return CT_hasOwn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rquickExpr\", function() { return rquickExpr; });\n/** a central reference to the root jQuery(document) */\n// var rootFre,\n\n/** classType ->type paris*/\nvar classType = {},\n    CT_string = classType.toString,\n    CT_hasOwn = classType.hasOwnProperty,\n\n\n// A simple way to check for HTML strings\nrquickExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/;\n\n\n\n//# sourceURL=webpack:///./src/var/var.js?");

/***/ })

/******/ });