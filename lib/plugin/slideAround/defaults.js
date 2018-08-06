var defaultsParam = {
    wrap: ".slide-wrap",
    slidePage: ".slide-page",
    

    slideBtn: ".slide-btn",
    slideBtnWrap: ".slide-btn-wrap",
    slideBtnActive: ".slide-btn-active",

    arrowbtnWrap: ".slide-arrowbtn-wrap",
    arrowBtnLt: ".slide-arrowbtn-lt",
    arrowBtnRt: ".slide-arrowbtn-rt",
    arrowBtnActive: ".arrowbtn-active",
    arrowBtnEndCla: ".slide-arrowbtn-end",

    btnRectWraps:".btn-rect-inwrap",
    btnRect:".btn-rect",
    btnRectActive:".btn-rect-active",   //rectBtn class class:控制整常显示时动画
    btnRectAutoActive:".btn-rect-auto-active",   //rectBtn class:控制自动播放时width++
    btnRectActiveWth:50,  //.btn-rect 宽度
    time1:200,   //.btn-rect 自动播放时，.btn-rect的width间隔多少时间++

    slideWidth: 300,
    slideHeight: 200,
    method:"fadeIn",     //三种模式:normal fadeIn pageTurn
    currentPage: ".currentPageFade", //currentPage:normal模式  currentPageFade:fadeIn模式 currentPageTurn:pageTurn 模式 css效果
    prevCl:".prevPage",
    autoWidth: true,
    num: 1,


    // 模式
    cycle: true,   //定义是否循环播放
    autoPlay:true,     //自动播放
    autoBtnRectAc:".rectBtnAutoAc",
    speed:5000      //自动播放间隔时间       
    // containerWith:1000           //定义容器的宽度
    // slideOneHt:         //定义容器高度
    
}

export {defaultsParam}