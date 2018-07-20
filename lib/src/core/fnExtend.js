import { classType, CT_string, CT_hasOwn, rquickExpr } from "../var/var.js";
import event from "../core/event.js";
import Fre from "../core/extend.js"

export default Fre.fn.extend({
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
    },
    on: function(type,fn,capture){
        !capture?capture=false:capture=true;

        Fre.each(this,function(){
             event.addEvent(this,type,fn,capture)

        })
        return this;

    }

})
