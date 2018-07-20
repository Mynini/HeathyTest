import Fre, { isArraylike} from "../core/init.js";
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
                length = obj.length,
                isArray = isArraylike(obj);

            if (args) {

                if (isArray) {
                    for (; i < length; i++) {
                        value = callbacks.apply(obj[i], args);

                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callbacks.apply(obj[i], args);

                        if (value === false) {
                            break;
                        }
                    }
                }

            } else {

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
                len = obj.length
            lenElem = elems.length;

            obj.context = obj.context;
            obj.preObject = obj;

            for (var i = 0; i < len; i++) {
                delete obj[i];
            }

            for (var i = 0; i < lenElem; i++) {
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
                str,
                reg,
                flag = false; //当前style里面有没有attr这个属性 

            if (num) {

                if (typeof num === "number") {

                    for (i = 0; i < len; i++) {
                        var arr1 = []; //存匹配好的数组

                        str = obj[i].getAttribute("style");

                        if (str) {
                            reg = /(\w*\s?\:\s?\w*)*/ig;
                            str = str.match(reg);

                            Fre.each(str, function(i, item) {
                                item ? arr1.push(item) : "";

                            })
                            str = arr1;

                            Fre.each(str, function(i, item) {
                                if (item.indexOf(attr) != -1) {
                                    str[i] = attr + ":" + num + "px";
                                    flag = true;
                                }
                            })

                            if (!flag) {
                                str.push(attr + ":" + num + "px");
                            }

                            str = str.join(";");
                            obj[i].setAttribute("style", str);
                            flag = false;

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

        position: function() {
            return this
        },

        addClass: function(obj, className) {
            var str,
                flag;
            if (className) {
                Fre.each(obj, function(i, item) {

                    str = item.className && item.className.split(" ");
                    flag = str && Fre.findIsExist(str, className);
                    str = str.join(" ");
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
        }
    })

    //js类型存储
    Fre.each("Boolean Number String Function Array Data RegExp Object Error".split(" "), function(i, name) {
        classType["[object " + name + "]"] = name.toLowerCase();
    })
