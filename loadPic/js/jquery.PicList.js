jQuery.fn.PicList = function (settings) {
    var defaults = {
        numThumbs: 20,          //小图显示数量
        PrevDIV: false,      //上一页的DIV   每次走一龙组 (dom)
        NextDIV: false,      //下一页的DIV   每次走一龙组（dom）
        NextCss: false,      //下一页样式    每次走一龙组（样式）
        PrevCss: false,     //上一页样式     每次走一龙组（样式）  不能点击样式
        PrevOneDIV: false,      //上一页的DIV   每次走一个（dom）   不能点击样式
        NextOneDIV: false,      //下一页的DIV   每次走一个（dom）
        NextOneCss: false,      //下一页样式    每次走一个 （样式）   不能点击样式
        PrevOneCss: false,     //上一页样式     每次走一个（样式）    不能点击样式
        ShowBigPic: false,      //显示大图的DIV
        ShowBigPicWidth: 0,      //大图宽
        ShowBigPicHeight: 0,      //大图高
        DeaaultCss: "one",           //当前样式
        ShowTitle: false,      //显示文本的DIV
        ShowName: false,      //显示的名字
        ListName: "ul li",   //取图片
        ShowNTitle: false, //如果此不为空动态显示标题     ?
        AutoPlay: 6000,   //是否自动播放
        ShowNum: false,  //显示数量的div
        LinkUrl: true,   //是否有连接
        LoadPic:""      //加载大图的LOAD图
    };
    $.extend(defaults, defaults, settings);
    var Index = 1;
    var YIndex = 0;  //存分页
    var _Self = this;   //整个轮播父级
    var LiList = _Self.find(defaults.ListName);  //获取小图dom li
    var ITime = null;  //定时器变量
    var WzDiv = true;   //开关
    var MaxCount = LiList.length;  //小图li.length

    //上一页 当小图大于一张图或者右箭头点击了一次的时候 左箭头移除class prev 显示可点击状态
    var PrevFunction = function () {        
        if (defaults.PrevDIV) {
            if (YIndex >= 1) {   //next按钮点击YIdex=5 prev按钮点击YIndex=0
                if (defaults.PrevCss) {
                    $(defaults.PrevDIV).css('visibility', 'visible').removeClass(defaults.PrevCss);
                } else {
                    $(defaults.PrevDIV).css('visibility', 'visible');
                }
            } else {
                if (defaults.PrevCss) {
                    $(defaults.PrevDIV).addClass(defaults.PrevCss);
                } else {
                    $(defaults.PrevDIV).css('visibility', 'hidden');
                }
            }
        }
 
    }

    // ?
    var PrevFunctionOne = function () {
        if (defaults.PrevOneDIV) {
            if (Index >= 1) {
                if (defaults.PrevOneCss) {
                    $(defaults.PrevOneDIV).css('visibility', 'visible').removeClass(defaults.PrevOneCss);
                } else {
                    $(defaults.PrevOneDIV).css('visibility', 'visible');
                }
            } else {
                if (defaults.PrevOneCss) {
                    $(defaults.PrevOneDIV).addClass(defaults.PrevOneCss);
                } else {
                    $(defaults.PrevOneDIV).css('visibility', 'hidden');
                }
            }
        }
    }

    //上一页 当最右显示的小图index=小图总个数的时候 右箭头移除class prev 显示可点击状态
    var NextFunction = function () {
        if (defaults.NextDIV) {

            if (YIndex + defaults.numThumbs < MaxCount) { //next按钮点击YIdex=5 prev按钮点击YIndex=0
                if (defaults.NextCss) {
                    $(defaults.NextDIV).css('visibility', 'visible').removeClass(defaults.NextCss);
                } else {
                    $(defaults.NextDIV).css('visibility', 'visible');
                }
            } else {
                if (defaults.NextCss) {
                    $(defaults.NextDIV).addClass(defaults.NextCss);
                } else {
                    $(defaults.NextDIV).css('visibility', 'hidden');
                }
            }
        }
    }

    // ?
    var NextFunctionOne = function () {
        if (defaults.NextOneDIV) {
            if (YIndex <= MaxCount) {
                if (defaults.NextOneCss) {
                    $(defaults.NextOneDIV).css('visibility', 'visible').removeClass(defaults.NextOneCss);
                } else {
                    $(defaults.NextOneDIV).css('visibility', 'visible');
                }
            } else {
                if (defaults.NextOneCss) {
                    $(defaults.NextOneDIV).addClass(defaults.NextOneCss);
                } else {
                    $(defaults.NextOneDIV).css('visibility', 'hidden');
                }
            }
        }
    }

    //标题显示相关
    var ShowFunctionTwo = function () {
        //?
        for (var i = 0; i < MaxCount; i++) {
            if (LiList.eq(i).is(":visible")) {
                LiList.eq(i).removeClass(defaults.DeaaultCss);
                LiList.eq(i).find(defaults.ShowNTitle).hide();
            }
        }
        LiList.eq(Index - 1).addClass(defaults.DeaaultCss);
        if (defaults.ShowNTitle) {
            LiList.eq(Index - 1).find(defaults.ShowNTitle).show();
        }

        //有ShowNum这个div 就让它显示n/n
        if (defaults.ShowTitle) {
            $(defaults.ShowTitle).html(LiList.eq(Index - 1).find(".caption").html());
        }

        //有ShowNum这个div 就让它显示n/n
        if (defaults.ShowNum) {
            $(defaults.ShowNum).html("<span>" + Index + "/</span>" + MaxCount);
        }
    }

    //大图展示  如果给小图img带链接属性 就把小图链接属性赋给大图 做点击连接使用
    var ShowFunction = function (index) {
        PrevFunctionOne();
        NextFunctionOne();
        if (defaults.ShowBigPic) {
            if (index > 0 && index <= MaxCount) {
                if (index) {
                    Index = index;   //大于numThumbs时Index=6 else Index=1;
                }

                if (Index > 0 && Index <= MaxCount) {
                    ClearTime();
                    if (defaults.LinkUrl) {  //如果小图有带链接属性就把链接属性赋予给大图的a让大图可点击跳转 
                        $(defaults.ShowBigPic).find("a").attr("href", LiList.eq(Index - 1).find("a").attr("linkurl"));
                        //小图转大图做图片大小处理
                        $(defaults.ShowBigPic).find("img").LoadImage(true, defaults.ShowBigPicWidth, defaults.ShowBigPicHeight, defaults.LoadPic, LiList.eq(Index - 1).find("a").attr("href"), function () {
                            ShowFunctionTwo(); //同步标题
                            if (WzDiv && defaults.AutoPlay) {  //如果开关==true 且是播放。。。
                                TimeFunction();  
                            }
                        }, 500);
                    } else {
                        $(defaults.ShowBigPic).find("img").LoadImage(true, defaults.ShowBigPicWidth, defaults.ShowBigPicHeight, defaults.LoadPic, LiList.eq(Index - 1).find("a").attr("href"), function () {
                            ShowFunctionTwo(); 
                            if (WzDiv && defaults.AutoPlay) {
                                TimeFunction();
                            }
                        }, 500);
                    }
                }
            }
        }
    }

    //小图显示
    var ShowListFunction = function (State, End, index) {//小于numThumbs时end=numThumbs   state=0;不然end=小图index  State=idex-numThumbs
        LiList.hide(); //让所有的小图都隐藏
        for (var i = State; i < End && i < MaxCount; i++) {  
            LiList.eq(i).show();   //让当前的在numThumbs内的小图显示
        }
        if (index == null || index == undefined) { 
            Index = State + 1;       //小于numThumbs的时候Index都等于1
        } else {
            Index = index;         //大于numThumbs的时候Index都等于对应小图index
        }
        NextFunction(); //
        PrevFunction();
        ShowFunction(Index);  //为什么这里Index传进去的Index只会等于6 或者1
    }

    //初始化 如果有大图先让所有小图都隐藏且除当前class
    if (defaults.ShowBigPic) {
        LiList.hide().removeClass(defaults.DeaaultCss);
    } else {
        LiList.hide();
    }
    for (var i = 0; i < defaults.numThumbs && i < MaxCount; i++) {
        LiList.eq(i).show();
    }

   //鼠标移出清除定时器
    _Self.bind("mouseover", function () {
        WzDiv = false;
        ClearTime();
    }).bind("mouseout", function () {
        TimeFunction();
        WzDiv = true;
    });


    if (defaults.ShowBigPic) {//如果有大图
        if (defaults.LinkUrl) {//如果defaults.LinkUrl=true 就让大可点击
            $(defaults.ShowBigPic).append("<a href=\"\" target=\"_blank\"><img src=\"\"/></a>");
        } else {
            $(defaults.ShowBigPic).append("<img src=\"\"/>");
        }
        LiList.each(function (index) {
            $(this).find("img").unbind().bind("click", function () {
                if (index == YIndex + defaults.numThumbs - 1) {
                    var State = index;
                    var End = State + defaults.numThumbs;
                    var EndNum = 0;
                    
                    if (End >= MaxCount) {
                        EndNum = End - MaxCount;
                        End = MaxCount;
                    }
                    State -= EndNum;
                    YIndex = State;
                    ShowListFunction(State, End);
                } else if (index == YIndex && index != 0) {
                    var End = index + 1;
                    var State = End - defaults.numThumbs;
                    if (State <= 0) {
                        End += 0 - State;
                        State = 0;

                    }

                    YIndex = State;
                    ShowListFunction(State, End);
                }
                ShowFunction(index + 1);
                return false;
            });
        });
    }
    
    PrevFunction();
    NextFunction();
    if (defaults.NextDIV) { //如果右箭头存在
        $(defaults.NextDIV).unbind().bind("click", function () {
            var Page = 1;
            if (Index % defaults.numThumbs == 0) {
                Page = parseInt(Index / defaults.numThumbs);
            } else {
                Page = parseInt(Index / defaults.numThumbs) + 1;
            }

            if (Page * defaults.numThumbs < MaxCount) {
                if (Page <= 0) {
                    Page = 1;
                }
                var State = Page * defaults.numThumbs;
                var End = (Page + 1) * defaults.numThumbs;
                YIndex = State;
                ShowListFunction(State, End);
            }
            return false;
        });
    }
    if (defaults.PrevDIV) {
        $(defaults.PrevDIV).unbind().bind("click", function () {
            var Page = 1;
            console.log(Index);
            if (Index % defaults.numThumbs == 0) {
                Page = parseInt(Index / defaults.numThumbs) + 1;
            } else {
                Page = parseInt(Index / defaults.numThumbs) + 1;
            }
            if (Page <= 0) {
                Page = 1;
            }
            if (Page > 1) {
                var State = (Page - 2) * defaults.numThumbs;
                var End = (Page - 1) * defaults.numThumbs;
                YIndex = State;
                console.log(State+"-1")
                    
                ShowListFunction(State, End);
            }
            return false;
        });
    }
    if (defaults.PrevOneDIV) {
        $(defaults.PrevOneDIV).bind("click", function () {
            ShowFunction(Index - 1);
            if (Index - 1 < YIndex) {
                if (YIndex > 0) {
                    var State = YIndex - 1;
                    YIndex = State;
                    var End = State + defaults.numThumbs;
                    ShowListFunction(State, End);
                }
            }
            return false;
        });
    }
    if (defaults.NextOneDIV) {
        $(defaults.NextOneDIV).bind("click", function () {
            if (Index + 1 > YIndex + defaults.numThumbs && YIndex + defaults.numThumbs < MaxCount) {
                var State = YIndex + 1;
                YIndex = State;
                var End = State + defaults.numThumbs;
                ShowListFunction(State, End, Index + 1);
            } else {
                ShowFunction(Index + 1);
            }

            return false;
        });
    }
    var ClearTime = function () {
        if (defaults.AutoPlay) {
            clearInterval(ITime);
        }
    };
    var TimeFunction = function () {
        if (defaults.AutoPlay) {  //如果自动播放属性存在
            ClearTime(); //清除定时器

            ITime = setInterval(function () {
                if (Index + 1 > MaxCount) { //走到最后一个执行
                    Index = 0;
                    YIndex = 1;
                    if (Index - 1 < YIndex && YIndex > 0) {
                        var State = YIndex - 1;
                        YIndex = State;
                        var End = State + defaults.numThumbs;
                        ShowListFunction(State, End);
                    } else {
                        ShowFunction(Index - 1);
                    }
                } else {
                    if (Index + 1 > YIndex + defaults.numThumbs && YIndex + defaults.numThumbs < MaxCount) {
                        var State = YIndex + 1;
                        YIndex = State;
                        var End = State + defaults.numThumbs;
                        ShowListFunction(State
                            , End, Index + 1);
                    } else {
                        ShowFunction(Index + 1);
                    }

                }
            }, defaults.AutoPlay);
  
        }
    }

    TimeFunction();

    if (defaults.ShowName) {
        for (var i = 0; i < LiList.length; i++) {
            if (LiList.eq(i).find("a").attr("Name") == defaults.ShowName) {
                Index = i + 1;
                break;
            }
        }
        var Page = 1;
        if (Index % defaults.numThumbs == 0) {
            Page = parseInt(Index / defaults.numThumbs);
        } else {
            Page = parseInt(Index / defaults.numThumbs) + 1;
        }
        if (Page <= 0) {
            Page = 1;
        }
        //if (Page > 1) {
        var State = (Page - 1) * defaults.numThumbs;
        var End = Page * defaults.numThumbs;
        ShowListFunction(State, End, Index);
        //} else {
        //    ShowFunction(Index);
        //}
    } else {
        if (Index > 0 && Index <= MaxCount) {
            ShowListFunction(0, defaults.numThumbs);
        }
    }
            $("#controls").bind("mouseover",function()
                                        {
                                            $(".djkdt").show();
                                            }).bind("mouseout",function()
                                            {
                                                $(".djkdt").hide();
                                                });
    return this;
}