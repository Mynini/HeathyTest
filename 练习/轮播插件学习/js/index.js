/**
 * Created by ubt on 2017/6/16.
 */
var mySwiper;

var timer=null;

/**
 * Created by ubt on 2017/7/11.
 */
//闃�
$(function(){
    var bannerHeight = $(window).height();
    if (bannerHeight > 960) {
        bannerHeight = 960;
    } else if (bannerHeight < 760) {
        bannerHeight = 760;
    }
    $('#banner').height(bannerHeight);
    $('#banner .banners').height(bannerHeight+40);
    autoplay = !0;
    for (mySwiper = new Swiper(".swiper-container", {
        autoplay: 5000,  noSwiping : true,autoplayDisableOnInteraction : true, progress: !0, speed: 1E3, paginationClickable: !0, loop: !0, onProgressChange: function (a) {
            for (var c = 0; c < a.slides.length; c++) {
                var d = a.slides[c], b = d.progress, e;
                0 < b ? (e = .9 * b * a.width, scale = 1 - .1 * b, 1 < b && (scale = .9), txtPositionX = 0, txtPositionY = 30 * b + "px") : (e = 0, scale = 1, txtPositionX = 1E3 * -b + "px", txtPositionY = 0);
                for (var b = d.querySelectorAll(".txt"), f = 0; f < b.length; f++) a.setTransform(b[f], "translate3d(" + txtPositionX + "," + txtPositionY + ",0)");
                a.setTransform(d, "translate3d(" +
                    e + "px,0,0) scale(" + scale + ")")
            }
        },
        onTouchStart: function (a) {
            for (var c = 0; c < a.slides.length; c++) {
                a.setTransition(a.slides[c], 0);
                for (var d = a.slides[c].querySelectorAll(".txt"), b = 0; b < d.length; b++) a.setTransition(d[b], 0)
            }
        }, onSetWrapperTransition: function (a, c) {
            for (var d = 0; d < a.slides.length; d++) {
                a.setTransition(a.slides[d], c);
                for (var b = a.slides[d].querySelectorAll(".txt"), e = 0; e < b.length; e++) a.setTransition(b[e], c)
            }

        }, onSlideChangeStart: function (a) {
            $(".pagination").removeClass("noClick"),
                autoplay ? (0 == a.activeLoopIndex && ($(".pagination li").removeClass("current"),

                    $(".pagination li").eq(0).removeClass("replace")), 1 == a.activeLoopIndex && $(".pagination li").eq(0).removeClass("firstCurrent current").addClass("replace")) : $(".pagination li").removeClass("current firstCurrent click");
            $(".pagination li").eq(a.activeLoopIndex).addClass("current");
            var $drakShow = $("#banner .swiper-slide").eq(mySwiper.activeIndex).attr("data-color");
            if($drakShow == 1){
                if(!$("#header").hasClass("scrollShow")){
                    $("#header").addClass("drakShow");
                }else{
                    $("#header").removeClass("drakShow");
                }
            }else{
                $("#header").removeClass("drakShow");
            }
        }, onFirstInit: function (a) {
            $(".pagination li").eq(0).addClass("firstCurrent")
        }, onAutoplayStop: function () {
            autoplay = !1;
            $(".autoplay").removeClass("autoplay")
        }
    }), i = 0; i < mySwiper.slides.length; i++) mySwiper.slides[i].style.zIndex =
        i;
    $(".arrow-left").on("click", function (a) {
        mySwiper.stopAutoplay();
        a.preventDefault();
        mySwiper.swipePrev();
    });
    $(".arrow-right").on("click", function (a) {
        mySwiper.stopAutoplay();
        a.preventDefault();
        mySwiper.swipeNext();
    });
    $(".pagination li").on("touchstart mousedown", function (a) {
        mySwiper.stopAutoplay();
        a.preventDefault();
        autoplay && (autoplay = !1, mySwiper.stopAutoplay(), $(this).addClass("click"));
        mySwiper.swipeTo($(this).index());

        // aiiage  6.12
        clearInterval(timer)
        timer=setInterval(function(){
            mySwiper.startAutoplay();
        },5000)
    });
    mySwiper.stopAutoplay();
    window.onresize = function () {
        mySwiper.stopAutoplay();
        setTimeout(function () {
            mySwiper.reInit();
            mySwiper.swipeNext();
        },1000)
    };

    function headerFixed(){
        if($(window).width()<1220){
            var oLeft = '-' + $(window).scrollLeft() + 'px';
            if($(window).scrollTop() >= 680){
                if($('#header').hasClass('scrollShow')){
                    $('#header').css({"left":oLeft});
                }
            }else{
                if((1220-$(window).width())/2 < $(window).scrollLeft()){
                    if($('#header').hasClass('scrollShow')){
                        $('#header').css({"left":"0"});
                    }
                }else{
                    if($('#header').hasClass('scrollShow')){
                        $('#header').css({"left":oLeft});
                    }
                }
            }

        }else{
            if($('#header').hasClass('scrollShow')){
                $('#header').css({"left":'0'});
            }
        }
    }
    $(window).on("scroll",function(e){
        headerFixed();
        if($(window).scrollTop() >= 680){
            if($('body').hasClass('home')){
                $("#header").addClass("scrollShow");
            };
        }else{
            $("#header").removeClass("scrollShow");
            if($(".swiper-slide-active").attr("data-color") == 1){
                $("#header").addClass("drakShow");
            }
        };
    });
    $(window).on("resize",function(e){
        headerFixed();
    });
    /*杞挱鍥�*/
    $(document).on('click','.banner4',function () {
        window.open('https://ubtech.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w5001-16972579159.9.5c90c348XsUM7N')

    })
})
window.onload = function () {
    // swiper.startAutoplay();
    $('#banner .eyes').delay(500).animate({'opacity':'1'},1300,function () {
        $('.eyes').fadeOut(function(){
            $("#banner").addClass("beginB")
        });
    });
    $('#banner .mask').delay(1000).animate({'opacity':'0'},1000,function () {
        $('#banner .mask').hide();
        $('.pagination').addClass('autoplay');
        $('.pagination li').eq(0).removeClass('firstCurrent').addClass('current');
        mySwiper.startAutoplay();
    });
}


