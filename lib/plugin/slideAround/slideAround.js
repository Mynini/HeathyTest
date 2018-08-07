// import style from "../../plugin/slideAround/slideAround.css";
import style from "../slideAround/slideAround.css";
import { defaultsParam } from "../slideAround/defaults.js"
var Fre = window.Fre;

var slideAround = function(selector, params) {
    var _this = this,
        defaults,
        num = null,
        timer, //主定时器
        timer1, //点击时关闭的定时器
        timer2; //fade 定时器


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
    _this.index = 0; //当前页index
    _this.prevIndex = 0;
    _this.zIndex = _this.len;
    _this.flag = false;

    //初始化
    _this.init = function() {
        _this.setDomWh();
        _this.btnNumCaculate();
        _this.btnClick();
        _this.moveEndCb()

        if (defaults.autoPlay) {
            Fre.addClass(_this.wrap, "autoMode")
            Fre.addClass(_this.btnRectWraps[0], defaults.btnRectAutoActive.slice(1))
            _this.flag = true;
            _this.autoMove()
        }

    }

    //设置wrap值 
    _this.setDomWh = function() {
        var width;

        Fre.addClass(_this.slidePages[_this.index], defaults.currentPage.slice(1));
        Fre.addClass(_this.slidePages[_this.index], defaults.prevCl.slice(1));
        _this.slidePages[0].style.opacity = 1;
        _this.slidePages[_this.index].style.zIndex = 18;




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

            //计算slidePage wrap container 高度
            var height;
            defaults.slideOneHt ? height = idefaults.slideOneHt : height = _this.clientHeight

            _this.wrap.style.height = height + 'px';
            _this.container.style.height = height + 'px';
            _this.wrap.style.height = height + 'px';
            Fre.each(_this.slidePages, function(i, item) {
                item.style.height = height + 'px'

            })

            if (defaults.method == "fadeIn") {

                Fre.each(_this.slidePages, function(i, item) {


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

    //auto play
    _this.autoMove = function() {
        clearInterval(timer)
        clearTimeout(timer1)
        timer = setInterval(function() {

            rectBtnNumCaculate()
            movePage();
            _this.rectBtnWidthAdd();


        }, defaults.speed)
    };

    //为.btn-rect 加可控制width++的class
    _this.rectBtnWidthAdd = function() {
        Fre.removeClass(_this.btnRectWraps[_this.index], defaults.btnRectActive.slice(1))
        Fre.removeClass(_this.btnRectWraps, defaults.btnRectAutoActive.slice(1))
        Fre.addClass(_this.btnRectWraps[_this.index], defaults.btnRectAutoActive.slice(1))
    }


    // rect btn callback
    function btnRectWrapsCb() {
        var circleBtn = _this.btnRectWraps

        //获取当前点击index    
        _this.prevIndex = _this.index;
        _this.index = Fre.eq(circleBtn, this) || Fre.eq(_this.btns, this) || _this.index;
        movePage();
        stopAutoMove();


    }

    //当显示个数超过1个时 移动move page
    function movePage() {

        //箭头按钮加当前class
        $F.removeClass(_this.btnRectWraps, defaults.btnRectActive.slice(1))
        $F.addClass(_this.btnRectWraps[_this.index], defaults.btnRectActive.slice(1))

        //小点按钮加当前class
        $F.removeClass(_this.btns, defaults.slideBtnActive.slice(1))
        $F.addClass(_this.btns[_this.index], defaults.slideBtnActive.slice(1))

        //给slidePages 加当前上一个class标记
        Fre.removeClass(_this.slidePages, defaults.prevCl.slice(1))
        Fre.addClass(_this.slidePages[_this.prevIndex], defaults.prevCl.slice(1))

        //给slidePages 加当前class　
        Fre.removeClass(_this.slidePages, defaults.currentPage.slice(1));
        Fre.addClass(_this.slidePages[_this.index], defaults.currentPage.slice(1));

        //运动方式计算
        if (defaults.method == "normal") {
            _this.wrap.style.left = -(_this.containerWidth * _this.index) + "px";
            Fre.removeClass(_this.slidePages, defaults.currentPage.slice(1));
            Fre.addClass(_this.slidePages[_this.index], defaults.currentPage.slice(1));
        } else if (defaults.method == "fadeIn") {

            fadeOut()
            _this.slidePages[_this.index].style.opacity = 1;
            _this.slidePages[_this.index].style.zIndex = 18;

            if (_this.index + 1 == _this.len) {
                Fre.each(_this.slidePages, function(i, item) {
                    item.style.zIndex = 0;
                })
            }
        }

        num = _this.index;

    }

    function fadeOut() {

        var n = _this.slidePages[_this.prevIndex].style.opacity || 0;
        if (n < 0) return;
        n -= 0.2;
        _this.slidePages[_this.prevIndex].style.opacity = n;
        timer2 = setTimeout(fadeOut, 50);
    }

    //left arrow btn cb
    function rectBtnLCb() {
        num--
        num = num + _this.actualIndex;
        if (defaults.cycle) {
            _this.prevIndex = _this.index;
            _this.index = Math.abs(num % _this.actualIndex);
        } else {
            if (_this.index <= 0) {
                _this.index = 0;
            }

        }
        movePage()
        stopAutoMove();
    }

    //right arrow btn cb
    function rectBtnRCb() {
        rectBtnNumCaculate()
        movePage();
        stopAutoMove()
    }



    //stop auto play
    function stopAutoMove() {
        Fre.removeClass(_this.btnRectWraps, defaults.btnRectAutoActive.slice(1))
        Fre.addClass(_this.btnRectWraps[_this.index], defaults.btnRectActive.slice(1))
        _this.flag = false;
        clearInterval(timer)
        clearTimeout(timer1)

        if (defaults.method == "fadeIn") {
            _this.slidePages[_this.prevIndex].style.opacity = 0;
            _this.slidePages[_this.prevIndex].style.zIndex = 0;
            _this.slidePages[_this.index].style.zIndex = 18;
        }
        timer1 = setTimeout(function() {
            _this.flag = true;
            _this.autoMove();

        }, defaults.speed)
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