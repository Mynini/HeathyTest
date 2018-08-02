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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugin/slideAround/slideAround.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./plugin/slideAround/slideAround.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader!./plugin/slideAround/slideAround.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin: 0;\r\n}\r\nul{\r\n\tpadding:0;\r\n\tmargin:0;\r\n}\r\nli{\r\n\tlist-style: none;\r\n}\r\n\r\n.slide-around {\r\n    position: relative;\r\n    left:0;\r\n    top:0;\r\n    overflow: hidden;\r\n}\r\n\r\n.slide-wrap {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    left:0;\r\n    top:0;\r\n    z-index:1;\r\n}\r\n\r\n.slide-page {\r\n    float: left;\r\n    line-height:0;\r\n    overflow: hidden;\r\n    z-index:1;\r\n    left:0;\r\n    right:0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*--------------------- normal btn--------------------*/\r\n\r\n.slide-btn-wrap {\r\n    text-align: center;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 80%;\r\n    z-index: 2;\r\n}\r\n\r\n.slide-btn {\r\n    list-style: none;\r\n    width: 12px;\r\n    height: 12px;\r\n    background: green;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    margin: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.slide-btn-active {\r\n    background: red;\r\n}\r\n\r\n\r\n\r\n/*--------------------- arrow btn--------------------*/\r\n\r\n.slide-arrowbtn-wrap {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n    margin-top: -15px;\r\n}\r\n\r\n.slide-arrowbtn {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    z-index: 2;\r\n    position: absolute;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.slide-arrowbtn-lt {\r\n    left: 10%;\r\n}\r\n\r\n.slide-arrowbtn-rt {\r\n    right: 10%;\r\n}\r\n\r\n.slide-arrow-wrap {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n}\r\n\r\n.slide-arrowbtn-lt .slide-arrow-wrap {\r\n    margin-left: -5px;\r\n    margin-top: -1px;\r\n}\r\n\r\n.slide-arrowbtn-rt .slide-arrow-wrap {\r\n    margin-left: -8px;\r\n}\r\n\r\n.slide-arrow {\r\n    display: block;\r\n    width: 14px;\r\n    height: 2px;\r\n    background: green;\r\n    transform-origin: 0%;\r\n}\r\n\r\n.slide-arrowbtn-lt .slide-arrow {\r\n    transform-origin: 0%;\r\n    margin-top: -1px;\r\n    margin-left: -1px;\r\n}\r\n\r\n.slide-arrowbtn-rt .slide-arrow {\r\n    transform-origin: 100%;\r\n    margin-top: -2px;\r\n    margin-right: -1px;\r\n}\r\n\r\n.slide-arrow-Llt {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.slide-arrow-Lrt {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.slide-arrow-Rlt {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.slide-arrow-Rrt {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n\r\n.arrowbtn-active{\r\n\tbackground:green;\r\n}\r\n.arrowbtn-active .slide-arrow{\r\n\tbackground:#fff;\r\n}\r\n\r\n.slide-arrowbtn-end .slide-arrow{\r\n    background:red;\r\n}\r\n\r\n\r\n/*--------------------- btn-rect--------------------*/\r\n\r\n.slide-btnrect-wrap {\r\n    text-align: center;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 80%;\r\n    z-index: 2;\r\n}\r\n\r\n.btn-rect-inwrap {\r\n    width: 50px;\r\n    height: 30px;\r\n    margin: 0 5px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.btn-rect,\r\n.slide-btn-rect {\r\n    width: 100%;\r\n    height: 7px;\r\n    background: green;\r\n    display: block;\r\n    position: absolute;\r\n    border-radius: 6px;\r\n    margin-top: 16px;\r\n}\r\n\r\n.btn-rect {\r\n    width: 0;\r\n    background:#fff;\r\n}\r\n\r\n.btn-rect-active .btn-rect{\r\n    width: 50px;\r\n    background: #fff;\r\n}\r\n.btn-rect-auto-active .btn-rect{\r\n    animation:4s rectWith forwards;\r\n}\r\n\r\n\r\n\r\n.slide-page{\r\n    transition:all 1s;\r\n}\r\n/*-----fadeIn模式------*/\r\n\r\n/*.prevPage.slide-page{\r\n    \r\n    animation:3s fadeOut forwards;\r\n}*/\r\n.currentPageFade.slide-page{\r\n    animation:2s fadeIn forwards;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from{\r\n        opacity: 0;\r\n    }\r\n    to{\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes fadeOut {\r\n    from{\r\n        opacity: 0;\r\n    }\r\n    to{\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes rectWith {\r\n    from{\r\n        width:0;\r\n        opacity: 1;\r\n    }\r\n    to{\r\n        width:50px;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./plugin/slideAround/defaults.js":
/*!****************************************!*\
  !*** ./plugin/slideAround/defaults.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var defaultsParam = {
    wrap: ".slide-wrap",
    slidePage: ".slide-page",

    slideBtn: ".slide-btn",
    slideBtnWrap: ".slide-btn-wrap",
    slideBtnActive: ".slide-btn-active",

    arrowbtnWrap: ".slide-arrowbtn-wrap",
    arrowBtnLt: ".slide-arrowbtn-lt",
    arrowBtnRt: ".slide-arrowbtn-rt",
    arrowBtnActive: ".arrowbtn-active",
    arrowBtnEndCla: ".slide-arrowbtn-end",

    btnRectWraps: ".btn-rect-inwrap",
    btnRect: ".btn-rect",
    btnRectActive: ".btn-rect-active", //rectBtn class class:控制整常显示时动画
    btnRectAutoActive: ".btn-rect-auto-active", //rectBtn class:控制自动播放时width++
    btnRectActiveWth: 50, //.btn-rect 宽度
    time1: 200, //.btn-rect 自动播放时，.btn-rect的width间隔多少时间++

    slideWidth: 300,
    slideHeight: 200,
    method: "fadeIn", //三种模式:normal fadeIn pageTurn
    currentPage: ".currentPageFade", //currentPage:normal模式  currentPageFade:fadeIn模式 currentPageTurn:pageTurn 模式 css效果
    prevCl: ".prevPage",
    speed: 300,
    autoplay: false,
    autoWidth: true,
    num: 1,

    // 模式
    cycle: true, //定义是否循环播放
    auto: true, //自动播放
    autoBtnRectAc: ".rectBtnAutoAc",
    time: 4000 //自动播放间隔时间       
    // containerWith:1000           //定义容器的宽度
};

exports.defaultsParam = defaultsParam;

/***/ }),

/***/ "./plugin/slideAround/slideAround.css":
/*!********************************************!*\
  !*** ./plugin/slideAround/slideAround.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./slideAround.css */ "./node_modules/css-loader/index.js!./plugin/slideAround/slideAround.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./plugin/slideAround/slideAround.js":
/*!*******************************************!*\
  !*** ./plugin/slideAround/slideAround.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slideAround = __webpack_require__(/*! ../slideAround/slideAround.css */ "./plugin/slideAround/slideAround.css");

var _slideAround2 = _interopRequireDefault(_slideAround);

var _defaults = __webpack_require__(/*! ../slideAround/defaults.js */ "./plugin/slideAround/defaults.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import style from "../../plugin/slideAround/slideAround.css";
var Fre = window.Fre;

var slideAround = function slideAround(selector, params) {
    var _this = this,
        defaults,
        num = 0,
        timer;

    defaults = Fre.mergeJsonToUnique(_defaults.defaultsParam, params);
    _this.defaults = defaults;

    //get dom
    _this.container = selector.nodeType ? selector : Fre(selector)[0];
    _this.wrap = document.querySelector(defaults.wrap);
    _this.slidePages = Fre.toArray(document.querySelectorAll(defaults.slidePage));

    _this.BtnsWrap = document.querySelector(defaults.slideBtnWrap);
    _this.btns = Fre.toArray(document.querySelectorAll(defaults.slideBtn));

    _this.arrowbtnWrap = document.querySelector(defaults.arrowbtnWrap);
    _this.arrowBtnsLt = document.querySelector(defaults.arrowBtnLt);
    _this.arrowBtnsRt = document.querySelector(defaults.arrowBtnRt);

    _this.btnRectWraps = Fre.toArray(document.querySelectorAll(defaults.btnRectWraps));
    _this.btnRect = Fre.toArray(document.querySelectorAll(defaults.btnRect));

    //get dom property
    _this.clientWidth = defaults.containerWith || document.documentElement.clientWidth || document.body.clientWidth;
    _this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    _this.containerWidth = _this.container.offsetWidth;
    _this.containerHeight = _this.container.offsetHeight;

    //基本变量
    _this.len = _this.slidePages.length;
    _this.index = 0; //当前页index
    _this.prevIndex = 0;
    _this.nextIndex = 0;
    _this.zIndex = _this.len;

    //初始化
    _this.init = function () {
        _this.setDomWh();
        _this.btnNumCaculate();
        _this.btnClick();
        _this.moveEndCb();

        if (defaults.auto) {
            _this.autoMove();
            _this.rectBtnWidthAdd();
        }
    };

    //设置wrap值 
    _this.setDomWh = function () {
        var width;

        Fre.addClass(_this.slidePages[_this.index], defaults.currentPage.slice(1));
        Fre.addClass(_this.slidePages[_this.index], defaults.prevCl.slice(1));

        //handle：banner
        if (defaults.num == 1) {

            //set slidePage width
            Fre.each(_this.slidePages, function (i, item) {
                item.style.width = _this.containerWidth + "px";
            });

            //set wrap width
            width = _this.containerWidth * _this.len;
            width = _this.containerWidth * _this.len;
            _this.wrap.style.width = width + 'px';
            _this.wrap.style.height = _this.clientHeight + 'px';
            _this.container.style.height = _this.clientHeight + 'px';

            if (defaults.method == "fadeIn") {

                Fre.each(_this.slidePages, function (i, item) {

                    item.style.position = "absolute";
                    _this.slidePages[0].style.zIndex = 5;
                    _this.wrap.style.width = item.style.width;
                });
            }

            //handle：轮播
        } else {

            //handle：要根据containerWidth 计算slide width
            if (defaults.autoWidth && defaults.containerWith) {

                _this.slideWidth = _this.containerWidth / defaults.num;
                _this.wrap.style.width = _this.slideWidth * _this.len + "px";
                Fre.each(_this.slidePages, function (i, item) {
                    // console.log(i)
                    // console.log(item)
                    item.style.width = _this.slideWidth + "px";
                });
            } else {

                _this.slideWidth = defaults.slideWidth;
                _this.slideHeight = defaults.slideHeight;
                _this.wrap.style.width = _this.slideWidth * _this.len + "px";
                Fre.each(_this.slidePages, function (i, item) {
                    item.style.width = _this.slideWidth + "px";
                    item.style.height = _this.slideHeight + "px";
                });
            }

            //设置container height值
            var heightArr = [];
            Fre.each(_this.slidePages, function (i, item) {
                heightArr.push(item.offsetHeight);
            });
            _this.container.style.height = Fre.eqLarge(heightArr) + "px";
        }

        // _this.container.style.height  = _this.wrapHeight+"px"
    };

    //click bind
    _this.btnClick = function () {
        Fre.event.addEvent(_this.btnRectWraps, "click", btnRectWrapsCb);
        Fre.event.addEvent(_this.btns, "click", btnRectWrapsCb);
        Fre.event.addEvent(_this.arrowBtnsLt, "click", rectBtnLCb);
        Fre.event.addEvent(_this.arrowBtnsRt, "click", rectBtnRCb);
    };

    //纠正normal and rect button 个数
    _this.btnNumCaculate = function () {
        // 计算有多少页
        _this.actualIndex = Math.ceil(_this.slidePages.length / defaults.num);
        Fre.each(_this.slidePages, function (i, item) {
            if (i >= _this.actualIndex) {
                _this.btnRectWraps[i] && _this.btnRectWraps[i].parentNode.removeChild(_this.btnRectWraps[i]);
                _this.btns[i] && _this.btns[i].parentNode.removeChild(_this.btns[i]);
            }
        });
        _this.btnRectWraps.splice(_this.actualIndex);
        _this.btns.splice(_this.actualIndex);
    };

    //
    _this.moveTo = function () {};

    //循环模式下,当page为第一个和最后一个时,给箭头按钮加标志class
    _this.moveEndCb = function () {
        if (!defaults.cycle) {
            if (_this.index == 0) {
                $F.addClass(_this.arrowBtnsLt, defaults.arrowBtnEndCla.slice(1));
                $F.removeClass(_this.arrowBtnsRt, defaults.arrowBtnEndCla.slice(1));
            } else if (_this.index == _this.actualIndex - 1) {
                $F.addClass(_this.arrowBtnsRt, defaults.arrowBtnEndCla.slice(1));
                $F.removeClass(_this.arrowBtnsLt, defaults.arrowBtnEndCla.slice(1));
            } else {
                $F.removeClass(_this.arrowBtnsRt, defaults.arrowBtnEndCla.slice(1));
                $F.removeClass(_this.arrowBtnsLt, defaults.arrowBtnEndCla.slice(1));
            }
        }
    };

    //auto play
    _this.autoMove = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            rectBtnNumCaculate();
            movePage();
            _this.rectBtnWidthAdd();
        }, defaults.time);
    };

    //为.btn-rect 加可控制width++的class
    _this.rectBtnWidthAdd = function () {
        Fre.removeClass(_this.btnRectWraps[_this.index], defaults.btnRectActive.slice(1));
        Fre.removeClass(_this.btnRectWraps, defaults.btnRectAutoActive.slice(1));
        Fre.addClass(_this.btnRectWraps[_this.index], defaults.btnRectAutoActive.slice(1));
    };

    // rect btn callback
    function btnRectWrapsCb() {
        var circleBtn = _this.btnRectWraps;

        //获取当前点击index
        _this.index = Fre.eq(circleBtn, this) || Fre.eq(_this.btns, this) || _this.index;

        movePage();
        stopAutoMove();
    }

    //当显示个数超过1个时 移动move page
    function movePage() {

        //箭头按钮加当前class
        $F.removeClass(_this.btnRectWraps, defaults.btnRectActive.slice(1));
        $F.addClass(_this.btnRectWraps[_this.index], defaults.btnRectActive.slice(1));

        //小点按钮加当前class
        $F.removeClass(_this.btns, defaults.slideBtnActive.slice(1));
        $F.addClass(_this.btns[_this.index], defaults.slideBtnActive.slice(1));

        //给slidePages 加当前class　
        Fre.removeClass(_this.slidePages, defaults.currentPage.slice(1));
        Fre.addClass(_this.slidePages[_this.index], defaults.currentPage.slice(1));

        //给slidePages 加当前上一个class标记
        Fre.removeClass(_this.slidePages, defaults.prevCl.slice(1));
        Fre.addClass(_this.slidePages[_this.prevIndex], defaults.prevCl.slice(1));

        //运动方式计算
        if (defaults.method == "normal") {
            _this.wrap.style.left = -(_this.containerWidth * _this.index) + "px";
            Fre.removeClass(_this.slidePages, defaults.currentPage.slice(1));
            Fre.addClass(_this.slidePages[_this.index], defaults.currentPage.slice(1));
        } else if (defaults.method == ("fadeIn" || "pageTurn")) {
            _this.slidePages[_this.index].style.zIndex = ++_this.zIndex;
        }

        num = _this.index;
    }

    //left arrow btn cb
    function rectBtnLCb() {
        num--;
        num = num + _this.actualIndex;
        if (defaults.cycle) {
            _this.prevIndex = _this.index;
            _this.index = Math.abs(num % _this.actualIndex);
        } else {
            if (_this.index <= 0) {
                _this.index = 0;
            }
        }
        movePage();
        stopAutoMove();
    }

    //right arrow btn cb
    function rectBtnRCb() {
        rectBtnNumCaculate();
        movePage();
        stopAutoMove();
    }

    //stop auto play
    function stopAutoMove() {
        Fre.removeClass(_this.btnRectWraps, defaults.btnRectAutoActive.slice(1));
        Fre.addClass(_this.btnRectWraps[_this.index], defaults.btnRectActive.slice(1));

        setTimeout(function () {
            _this.autoMove();
        }, defaults.time);
    }

    //rectBtn 当前num计算
    function rectBtnNumCaculate() {
        num++;
        if (defaults.cycle) {
            _this.prevIndex = _this.index;
            _this.index = Math.abs(num % _this.actualIndex);
        } else {
            if (_this.index >= _this.actualIndex - 1) {
                _this.index = _this.actualIndex - 1;
            }
        }
    }

    _this.init();
};

if (window.Fre) {

    (function (Fre) {
        "use strict";

        Fre.fn.slideAround = function (params) {
            var obj;
            var slideAround = new slideAround(this[0], params);
            obj = slideAround;
            return obj;
        };
    })(window.Fre);
}

module.exports = slideAround;
window.slideAround = slideAround;

/***/ })

/******/ });
//# sourceMappingURL=slideAround.js.map