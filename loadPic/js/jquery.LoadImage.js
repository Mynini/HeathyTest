/*
**************图片预加载插件******************
///参数设置：
scaling     是否等比例自动缩放
width       图片最大宽
height      图片最大高
loadpic     加载中的图片路径 
*/
jQuery.fn.LoadImage = function (scaling, width, height, loadpic, src, OkFunction, ShowTime) {    
    return this.each(function () {
        var t = $(this);

        //判断有没有src如果没有就让src==备用src
        if (src == null || src == undefined) {
            src = t.attr("bsrc");
        }
        var img = new Image();
        img.src = src;


        //自动缩放图片
        var autoScaling = function () {

            //判断有没有传okFunction()这个函数 有就执行 
            if (OkFunction) {
                OkFunction();
            }

            //判断有没有传入执行缩放这个变量 有就执行
            if (scaling) {
                if (width > 0 && height > 0 && img.width > 0 && img.height > 0) {
                    if (img.width / img.height >= width / height) {
                        if (img.width > width) {
                            t.width(width);
                            t.height((img.height * width) / img.width);
                        } else {
                            t.width(img.width);
                            t.height(img.height);
                        }
                    }
                    else {
                        if (img.height > height) {
                            t.height(height);
                            t.width((img.width * height) / img.height);
                        } else {
                            t.width(img.width);
                            t.height(img.height);
                        }
                    }
                } else {
                    t.height(img.height);
                    t.width(img.width);
                }
            }
        }
        //处理ff下会自动读取缓存图片
        if (img.complete) {
            //alert("getToCache!");
            autoScaling();
            t.attr("src", src).show().css('visibility', 'visible').css("opacity", 0.1);
            if (ShowTime) {
                t.animate({ opacity: 1 }, ShowTime);
            } else {
                t.show();
            }
            return;
        }

        t.css('visibility', 'hidden');
        if (loadpic) {
            var loading = $("<img alt=\"加载中...\" title=\"图片加载中...\" src=\"" + loadpic + "\" />");
            t.after(loading);
        }
        $(img).load(function () {
            autoScaling();
            if (loadpic) {
                loading.remove();
            }
            t.attr("src", src).show().css('visibility', 'visible').css("opacity", 0.1);
            if (ShowTime) {
                t.animate({ opacity: 1 }, ShowTime);
            } else {
                t.show();
            }
            //alert("finally!")
        });

    });
}