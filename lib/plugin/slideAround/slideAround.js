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
    _this.slidePages = Fre.toArray(document.querySelectorAll(defaults.slidePage));

    _this.BtnsWrap = document.querySelector(defaults.slideBtnWrap);
    _this.btns = Fre.toArray(document.querySelectorAll(defaults.slideBtn));

    _this.arrowbtnWrap = document.querySelector(defaults.arrowbtnWrap);
    _this.arrowBtnsLt = document.querySelector(defaults.arrowBtnLt)
    _this.arrowBtnsRt = document.querySelector(defaults.arrowBtnRt)


    _this.btnRectWraps = Fre.toArray(document.querySelectorAll(defaults.btnRectWraps));
    _this.btnRect = Fre.toArray(document.querySelectorAll(defaults.btnRect));

    //get dom property
    _this.clientWidth = defaults.containerWith || document.documentElement.clientWidth || document.body.clientWidth;
    _this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    _this.containerWidth = _this.container.offsetWidth;
    _this.containerHeight = _this.container.offsetHeight;



    //基本变量
    _this.len = _this.slidePages.length;  
    _this.index = 0;  //当前页index
    _this.num=0;
    _this.prevIndex = 0;  
    _this.nextIndex = 0;
    _this.zIndex = _this.len; 

    //初始化
    _this.init = function() {
        _this.setDomWh();
        _this.btnNumCaculate();
        _this.btnClick();
        _this.moveEndCb()

        if (defaults.method == "fadeIn") {
            Fre.each(_this.slidePages, function(i, item) {
                item.style.zIndex = _this.len - i;
            })
        }
        Fre.addClass(_this.slidePages[_this.index], defaults.currentPage.slice(1));

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
            width = _this.containerWidth * _this.len;
            _this.wrap.style.width = width + 'px';
            _this.wrap.style.height = _this.clientHeight + 'px';
            _this.container.style.height = _this.clientHeight + 'px';

            if (defaults.method == "fadeIn") {

                Fre.each(_this.slidePages, function(i, item) {
                    item.style.left = 0;
                    item.style.right = 0;
                    item.style.position = "absolute";
                    _this.wrap.style.width = item.style.width;

                })
            }

            //handle：轮播
        } else {

            //handle：要根据containerWidth 计算slide width
            if (defaults.autoWidth && defaults.containerWith) {

                _this.slideWidth = _this.containerWidth / defaults.num
                _this.wrap.style.width = _this.slideWidth * _this.len + "px";
                Fre.each(_this.slidePages, function(i, item) {
                    // console.log(i)
                    // console.log(item)
                    item.style.width = _this.slideWidth + "px";
                });

            } else {

                _this.slideWidth = defaults.slideWidth;
                _this.slideHeight = defaults.slideHeight;
                _this.wrap.style.width = _this.slideWidth * _this.len + "px";
                Fre.each(_this.slidePages, function(i, item) {
                    item.style.width = _this.slideWidth + "px";
                    item.style.height = _this.slideHeight + "px";
                });

            }

            //设置container height值
            var heightArr = [];
            Fre.each(_this.slidePages, function(i, item) {
                heightArr.push(item.offsetHeight);
            })
            _this.container.style.height = Fre.eqLarge(heightArr) + "px";

        }

        // _this.container.style.height  = _this.wrapHeight+"px"
    }

    //click bind
    _this.btnClick = function() {
        Fre.event.addEvent(_this.btnRectWraps, "click", btnRectWrapsCb);
        Fre.event.addEvent(_this.btns, "click", btnRectWrapsCb);
        Fre.event.addEvent(_this.arrowBtnsLt, "click", rectBtnLCb);
        Fre.event.addEvent(_this.arrowBtnsRt, "click", rectBtnRCb);

    }

    //纠正normal and rect button 个数
    _this.btnNumCaculate = function() {
        // 计算有多少页
        _this.actualIndex = Math.ceil(_this.slidePages.length / defaults.num);
        Fre.each(_this.slidePages, function(i, item) {
            if (i >= _this.actualIndex) {
                _this.btnRectWraps[i] && _this.btnRectWraps[i].parentNode.removeChild(_this.btnRectWraps[i]);
                _this.btns[i] && _this.btns[i].parentNode.removeChild(_this.btns[i]);
            }
        })
        _this.btnRectWraps.splice(_this.actualIndex);
        _this.btns.splice(_this.actualIndex);
    }

    //
    _this.moveTo = function() {

    }

    //循环模式下,当page为第一个和最后一个时,给箭头按钮加标志class
    _this.moveEndCb = function() {
        if (!defaults.cycle) {
            if (_this.index == 0) {
                $F.addClass(_this.arrowBtnsLt, defaults.arrowBtnEndCla.slice(1))
                $F.removeClass(_this.arrowBtnsRt, defaults.arrowBtnEndCla.slice(1))
            } else if (_this.index == _this.actualIndex - 1) {
                $F.addClass(_this.arrowBtnsRt, defaults.arrowBtnEndCla.slice(1))
                $F.removeClass(_this.arrowBtnsLt, defaults.arrowBtnEndCla.slice(1))
            } else {
                $F.removeClass(_this.arrowBtnsRt, defaults.arrowBtnEndCla.slice(1));
                $F.removeClass(_this.arrowBtnsLt, defaults.arrowBtnEndCla.slice(1));
            }
        }
    }


    // rect btn callback
    function btnRectWrapsCb() {
        var circleBtn = _this.btnRectWraps
        //获取当前点击index
        _this.prevIndex = _this.index;
        _this.index = Fre.eq(circleBtn, this) || Fre.eq(_this.btns, this) || _this.index;
        $F.removeClass(circleBtn, defaults.btnRectActive.slice(1))
        $F.addClass(circleBtn[_this.index], defaults.btnRectActive.slice(1))
        $F.removeClass(_this.btns, defaults.slideBtnActive.slice(1))
        $F.addClass(_this.btns[_this.index], defaults.slideBtnActive.slice(1))

        movePage();
    }

    //当显示个数超过1个时 移动move page
    function movePage() {

        if (defaults.method == "normal") {
            _this.wrap.style.left = -(_this.containerWidth * _this.index) + "px";
            Fre.removeClass(_this.slidePages, defaults.currentPage.slice(1));
            Fre.addClass(_this.slidePages[_this.index], defaults.currentPage.slice(1));
        } else if (defaults.method == ("fadeIn" || "pageTurn" )) {
            _this.slidePages[_this.index].style.zIndex = ++_this.zIndex;
        }

         // _this.num=_this.index;s
        Fre.removeClass(_this.slidePages, defaults.currentPage.slice(1));
        Fre.addClass(_this.slidePages[_this.index], defaults.currentPage.slice(1));
         
        Fre.removeClass(_this.slidePages,defaults.prevCl.slice(1))
        Fre.addClass(_this.slidePages[_this.prevIndex],defaults.prevCl.slice(1))



    }

    //left arrow btn cb
    function rectBtnLCb() {
        _this.num--;
        var b=_this.num;
        if (defaults.cycle) {
            // if(_this.num<0){
            //     _this.num=-_this.num
            // }else{
            //     _this.num=_this.num
            // }
            // _this.num = Math.abs(b)

            _this.index= -(_this.num) % (_this.actualIndex);
            console.log(_this.index)
            _this.num=_this.index;

        } else {
            if (_this.index <= 0) {
                _this.index = 0;
            }

        }
        btnRectWrapsCb()
    }

    //right arrow btn cb
    function rectBtnRCb() {

        _this.index++;
        if (defaults.cycle) {
            _this.index = Math.abs(_this.index % _this.actualIndex)
        } else {
            if (_this.index >= _this.actualIndex - 1) {
                _this.index = _this.actualIndex - 1;
            }
        }

        btnRectWrapsCb();
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