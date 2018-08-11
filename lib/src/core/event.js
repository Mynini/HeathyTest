import Fre, { isArraylike } from "../core/init.js";
import { classType, CT_string, CT_hasOwn, rquickExpr } from "../var/var.js";

export default Fre.event = {
    addEvent: function(elem, type, fn,capture) {

        Fre.each(elem, function(i, item) {
            !capture ? capture = false : capture = true;

            if (item.addEventListener) {
                item.addEventListener(type, fn, capture)
            } else if (item.attachEvent) {
                item.attachEvent("on" + type, fn)
            }

        })


    },
    removeEvent: function(elem, type, fn, capture) {

        Fre.each(elem, function(i, item) {
            !capture ? capture = false : capture = true;

            if (item.addEventListener) {
                item.removeEventListener(type, fn, capture)
            } else if (item.detachEvent) {
                item.detachEvent("on" + type, fn)
            }
        })
    }
};

