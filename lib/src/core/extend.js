import Fre, { isArraylike } from "../core/init.js";
import { classType, CT_string, CT_hasOwn, rquickExpr } from "../var/var.js";

export default Fre.extend({

    //check whether the option obj is function or not
    isFunction: function(obj) {
        return Fre.type(obj) === 'function';
    },

    //check js value type
    type: function(obj) {

        if (obj == null) {
            return String(obj);
        }

        //classType 存了js的所有类型
        return typeof obj === "object" || typeof obj === "function" ?
            classType[CT_string.call(obj)] || "object" : typeof obj;


    },

    //packaging the for function
    each: function(obj, callbacks, args) {

        var i = 0,
            value,
            isArray = isArraylike(obj),
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
    isPlainObject: function(obj) {
        if (Fre.type(obj) !== "object" || obj.nodeType) {
            return false;
        }

        return true;
    },

    //check if is []
    isArray: Array.isArray,

    //merge
    merge: function(first, second) {
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
    toArray: function(array) {
        var result = [];

        if (isArraylike(array)) {
            Fre.each(array, function(i, item) {
                result.push(item)
            })
        }

        return result;
    },

    //因為在 $(".div").find("p") 的情況下，Fre.merge方法不适应当前filter方法，所以增加了它
    mergeArr: function(obj, elems) {

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
            console.log(obj)
            obj[i] = elems[i];
        }

        obj.length = lenElem;

        return obj;
    },

    //当attr存在时获取width,否则获取width  obj:dom集合
    setWH: function(obj, num, attr) {

        var len = obj.length,
            i,
            j,
            str;

        if (num) {

            if (typeof num === "number") {

                for (i = 0; i < len; i++) {

                    str = obj[i].getAttribute("style");

                    if (str) {
                        str = Fre.matchStyle(str, attr, num)
                        obj[i].setAttribute("style", str);

                    } else {
                        obj[i].setAttribute("style", attr + ":" + num + "px")
                    }
                }
            }
        } else {

            if (attr == "width") {

                return (obj[0] && obj[0].offsetWidth) || obj;

            } else if (attr = "height") {

                return (obj[0] && obj[0].offsetHeight) || obj;

            }
        }

        return obj;
    },


    position: function(elem) {
        if (typeof elem == "array") {
            return { "left": elem[0].offsetLeft, "top": elem[0].offsetTop };
        }else if(elem&&elem.nodeType==1) {
            return { "left": elem.offsetLeft, "top": elem.offsetTop };
        }
    },

    addClass: function(obj, className) {
        var str,
            flag;
        if (className) {
            Fre.each(obj, function(i, item) {

                str = item.className && item.className.split(" ");
                flag = str && Fre.findIsExist(str, className);
                if (str) str = str.join(" ");
                !flag ? item.className = str + " " + className : "";
            })
        }
    },
    removeClass: function(obj, className) {
        var
            str,
            flag;

        if (className) {
            Fre.each(obj, function(i, item) {

                str = item.className && item.className.split(" ");
                flag = str && Fre.findIsExist(str, className);
                flag && (str.splice(flag, 1), str = str.join(" "), item.className = str);
            })
        }
    },

    //查找arr中是否有findeItem这个项  return index
    findIsExist: function(arr, findItem) {
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == findItem) {
                return String(i);
            }
        }
    },

    // json合并
    mergeJsonToUnique: function(first, second) {
        for (var j in second) {
            first[j] = second[j];
        }

        return first;
    },

    //查找elem在arrs当中位置
    eq(arrs, elem) {
        var index;
        Fre.each(arrs, function(i, item) {
            if (elem === item) {
                index = i;
            }
        })
        return index;
    },

    //返回数组中最大的数
    eqLarge: function(arr) {
        var large = arr.sort(function(a, b) {
            return a < b;
        })

        return large[0];
    },

    // 返回数组中最小的数
    eqSmall: function(arr) {
        var large = arr.sort(function(a, b) {
            return a > b;
        })

        return large[0];
    },

    attr: function(elem, options) {
        var value,
            style,
            str;

        Fre.each(elem, function(i, item) {
            //获取属性值 
            // console.log(Fre.type(options))
            if (Fre.type(options) == "string") {
                value = getStyle(item, options)
                Fre.type(value) == "number" ? value = parseInt(value) : "";

                //设置属性值
            } else if (Fre.type(options) == "object") {

                style = item.getAttribute("style");
                for (var i in options) {
                    style = Fre.matchStyle(style, i, options[i])
                }
                item.setAttribute("style", style);

            }

        })

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
    matchStyle: function(str, attr, num) {
        var arr1 = [],
            reg = /(\w*\s?\:\s?\w*)*/ig, //存匹配好的数组
            str = str.match(reg),
            flag = false; //当前style里面有没有attr这个属性 

        Fre.each(str, function(i, item) {
            item ? arr1.push(item) : "";
        })

        str = arr1;
        Fre.each(str, function(i, item) {
                if (item.indexOf(attr) != -1) {
                    attr == "opacity" ? str[i] = attr + ":" + num : str[i] = attr + ":" + num + "px";
                    flag = true;
                }
            })

            !flag && str.push(attr == "opacity" ? attr + ":" + num : attr + ":" + num + "px");

        str = str.join(";");
        flag = false;

        return str;
    },

    //找最近的个父级
    parent: function(obj) {
        var arr = [];

        Fre.each(obj, function(i, item) {

            while (item) {
                if (item.parentNode.nodeType == 1) {
                    arr.push(item.parentNode)
                    return;
                } else {
                    item = item.parentNode;
                }

            }
        })
        var c = Fre.mergeArr(obj, arr);
        //因為在 $(".div").find("p") 的情況下，Fre.merge方法不适应当前filter方法，所以增加了它
    },

    offset: function(obj) {
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

})

//js类型存储
Fre.each("Boolean Number String Function Array Data RegExp Object Error".split(" "), function(i, name) {
    classType["[object " + name + "]"] = name.toLowerCase();
})