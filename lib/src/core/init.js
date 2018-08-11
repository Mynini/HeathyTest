import { classType, CT_string, CT_hasOwn, rquickExpr } from "../var/var.js";
// import Fre,{isArraylike} from "../core/init.js";


/** a central reference to the root jQuery(document) */

var rootFre,

    Fre = function(selector, context) {
        return new Fre.fn.init(selector, context, rootFre);
    };
Fre.fn = Fre.prototype = {
    constructor: Fre,

    //原jquery所有情况：Fre(elem) ,Fre(jquery obj), Fre(selector [,context]) , Fre(html,attr) ,Fre(callback) 
    init: function(selector, context, rootFre) {
        var i = 0,
            match, elem;

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
                match = rquickExpr.exec(selector);
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

            } else {
                // return this.constructor(context).find(selector);
            }

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
    pushStack: function(elems) {

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
    attr: function() {

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
                        this[0].setAttribute(i, arguments[0][i])
                    }
                } else if (len > 1) {

                    for (i = 0; i < len; i++) {

                        for (j in arguments[0]) {

                            this[i].setAttribute(j, arguments[0][j])
                        }
                    }

                }
                return this;
            }

            //Handel:传参是一个的情况
        } else if (argLen === 2) {

            if (len == 1) {

                for (i in arguments[0]) {
                    this[0].setAttribute(i, arguments[0][i])
                }
            } else {

                for (i = 0; i < len; i++) {
                    this[i].setAttribute(arguments[0], arguments[1])
                }
            }

            return this;

        }
    }
}
/** Give the init funciton the Fre prototype for later instantiation */
Fre.fn.init.prototype = Fre.fn;

//method superposition
Fre.extend = Fre.fn.extend = function() {
    var
        options, //指向某个源对象
        name, //表示源对象的某个属性名。
        src, //表示某个目标对象的某个属性的原始值。
        copy, //表示某个源对象的某个属性值
        copyIsArray, //指示变量是否是数组
        clone, //表示深度复制时原始值的修正值 
        i = 1, //指源对象的起始下标
        target = arguments[0] || {}, //指向目标对象
        length = arguments.length, //表示参数的个数，用于修正变量 target。
        deep = false; //表示是否是深度复制，默认false

    //Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};

        // skip the boolean and the target
        i = 2;

    }

    //Handle case when target is a string or something(possible in deep copy)
    if (typeof target !== "object") {
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

}



Fre.fn.extend({
    find: function(selector) {

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
    filter: function(selectorElem) {

        var result = [],
            i,
            len = this.length,
            arr = [];

        for (i = 0; i < len; i++) {
            arr = Fre.find(selectorElem, this[i]);

            if (arr.length) {

                for (var j = 0; j < arr.length; j++) {
                    result.push(arr[j])
                }
            }

        }

        // p = Fre.mergeArr(this, result);
        result = this.pushStack(result);
        result.selector = this.selectorElem ? this.selectorElem + " " + selectorElem : selectorElem;

        return result;
    },

    //当attr存在时获取width,否则设置width
    width: function() {
        return Fre.setWH(this, arguments[0], "width");
    },

    //当attr存在时获取height,否则设置height
    height: function() {
        return Fre.setWH(this, arguments[0], "height");
    },

    position: function() {
        return { "left": this[0].offsetLeft, "top": this[0].offsetTop }
    },

    addClass: function(className) {
        Fre.addClass(this, className);
        return this;
    },
    removeClass: function(className) {
        Fre.removeClass(this, className);
        return this;
    }

})



//判断是不是类数组
export function isArraylike(obj) {

    var length;
    obj && obj.length && (length=obj.length)

    // obj.length? length = obj.length : length = false;
    // (obj.nodeType === 1 && length) || !obj.push
    if (length&& !obj.push) {
        return true;
    }

    // return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj);
    return false;
}



//All Fre objects should point back to these
rootFre = Fre(document);

/**  If there is a window object, that at least has a document property, define Fre output interface */
if (typeof window === "object" && typeof window.document === "object") {
    window.Fre = window.$F = Fre;
}

export default Fre

