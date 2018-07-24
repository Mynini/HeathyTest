// import style from "../../plugin/slideAround/slideAround.css";
import style from "../slideAround/slideAround.css";
import { defaultsParam } from "../slideAround/defaults.js"
var Fre = window.Fre;

var slideAround = function(selector, params) {
    var _this = this,
        defaults;

    defaults = Fre.mergeJsonToUnique(defaultsParam, params)
    _this.defaults = defaults;


    //get dom
    _this.container = selector.nodeType ? selector : Fre(selector)[0];
    _this.wrap = document.querySelector(defaults.wrap);
    _this.slidePages = document.querySelectorAll(defaults.slidePage);

    _this.BtnsWrap = document.querySelector(defaults.slideBtnWrap);
    _this.btns = document.querySelectorAll(defaults.slideBtn);

    _this.arrowbtnWrap = document.querySelector(defaults.arrowbtnWrap);
    _this.arrowBtns = document.querySelector(defaults.arrowBtn)

    _this.btnRectWraps = document.querySelectorAll(defaults.btnRectWrap);
    _this.btnRect = document.querySelectorAll(defaults.btnRect)

    //get dom property
    _this.clientWidth = defaults.containerWith || document.documentElement.clientWidth || document.body.clientWidth;
    _this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    _this.containerWidth = _this.container.offsetWidth;
    _this.containerHeight = _this.container.offsetHeight;

    _this.len = _this.slidePages.length;


    // console.log(_this.slidePages)

    //初始化
    _this.init = function() {
        _this.setDomWh();
        _this.btnClick();
    }

    //设置wrap值 
    _this.setDomWh = function() {
        var width;

        //handle：banner
        if (defaults.num == 1) {

            //set slidePage width
            Fre.each(_this.slidePages, function(i, item) {
                item.style.width = _this.containerWidth + "px"
            })

            //set wrap width
            width = _this.containerWidth * _this.len;
            _this.wrap.style.width = width + 'px';

        //handle：轮播
        } else {

            //handle：要根据containerWidth 计算slide width
            if(defaults.autoWidth && defaults.containerWith){

             _this.slideWidth=_this.containerWidth/defaults.num
             _this.wrap.style.width = _this.slideWidth* _this.len+"px";
             Fre.each(_this.slidePages,function(i,item){
                 item.style.width = _this.slideWidth+"px";
             });

            }else{

                _this.slideWidth = defaults.slideWidth;
                _this.slideHeight = defaults.slideHeight;
                _this.wrap.style.width = _this.slideWidth * _this.len+"px";
                Fre.each(_this.slidePages,function(i,item){
                    item.style.width = _this.slideWidth+"px";
                    item.style.height = _this.slideHeight+"px";
                });

            }
        }
    }

    _this.btnClick=function(){
        
        Fre.each(_this.btnRectWraps, function(i,item){
            Fre.event.addEvent(item,"click",fn_btnRectWraps);
        })
        
    }

    
    function fn_btnRectWraps(i,item){
        console.log(i)
    }

    _this.init();



}


if (window.Fre) {

    (function(Fre) {
        "use strict";
        Fre.fn.slideAround = function(params) {
            var obj;
            var slideAround = new slideAround(this[0], params);
            obj = slideAround;
            return obj;
        };
    })(window.Fre)
}

module.exports = slideAround
window.slideAround = slideAround