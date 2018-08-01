var Fre = window.Fre;

var backToCurrent = function(selector, params) {
    var this_ = this;
    var defaults = {
        active: ".Active",  //class: 活动的class
        domAdd: "li",   //dom : Active 将要加的的dom
        hovDom: "a",   //dovm : hover 的dom
        dropDown: ".Nav-drop", //dom: hover 时drom的dom
        current: ".Current",  //class: 当前的class
        time: 2000,    //timer: 离开时间时间
        backToCurrent: true   //bollean : 是否回到当前
    }

    defaults = Fre.mergeJsonToUnique(defaults, params)
    this_.defaults = defaults;


    this_.container = selector.nodeType ? selector : Fre(selector)[0];
    this_.domAdd = this_.container.querySelectorAll(defaults.domAdd);
    this_.hovDom = this_.container.querySelectorAll(defaults.hovDom);
    this_.dropDown = this_.container.querySelectorAll(defaults.dropDown);
    this_.currentDom = Fre.find(defaults.current, this_.container)[0]

    console.log(this_.domAdd)



    this_.init = function() {
        this_.bindEv()
    }

    this_.bindEv = function() {
        Fre.event.addEvent(this_.hovDom, "mouseover", mouseEntCB);
        Fre.event.addEvent(this_.dropDown, "mouseover", mouseEntCB);
        Fre.event.addEvent(this_.hovDom, "mouseout", mouselevCB);
        Fre.event.addEvent(this_.dropDown, "mouseout", mouselevCB);

    }

    function mouseEntCB() {
        Fre.removeClass(this_.domAdd, defaults.active.slice(1))
        Fre.addClass(this.parentNode, defaults.active.slice(1))

    }

    function mouselevCB() {
        if (defaults.backToCurrent) {
       		 Fre.removeClass(this.parentNode, defaults.active.slice(1))

            clearTimeout(this_.timer)
            this_.timer = setTimeout(function() {
                var acDom = Fre.find(defaults.active, this_.container)
                if (acDom && acDom[0] && (acDom[0].nodeType == 1)) {
                    this_.flag = true;
                } else {
                    this_.flag = false;
                }!this_.flag && Fre.addClass(this_.currentDom, defaults.active.slice(1));
            }, defaults.time);
        }
    }

    this_.init();
}



if (window.Fre) {
    (function(Fre) {
        Fre.fn.backToCurrent = function(params) {
            var obj;
            var backToCurrent = new backToCurrent(this[0], params);
            obj = backToCurrent;

            return obj;
        }

    })(window.Fre);
}

module.exports = backToCurrent
window.backToCurrent = backToCurrent