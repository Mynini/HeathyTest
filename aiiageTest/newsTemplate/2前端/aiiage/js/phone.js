$(function(){
    var btn=true;
    $(".nav_but_box").click(function(){
        $(this).parent().toggleClass("phone_nav_one")
        $("body").toggleClass('hide');
        if(btn){
            $(".phone_nav .nav_but").css("background","none");
            btn=false;
        }else{
            $(".phone_nav .nav_but").css("background","#fff");
            btn=true;
        }
    })//�ֻ�����
    $(".nav_main b").click(function(){
        $(this).parent().toggleClass("b_one")
            .siblings().removeClass("b_one");
    })//�ֻ���������
    $(".app_ss").click(function(){
        $(this).parent().toggleClass("resch_one")
    })//������ť
    $(".main .dxcp .sfq li").mouseover(function(){
        var width=$(window).width();
        if (width>1183){
            $(".main .dxcp .sfq li").removeClass("big-da");
            $(this).addClass("big-da");
        }
    })


    var a = $(window).scrollTop();
    var wa =parseInt(a);
    if(wa>10){
        $(".warper").addClass("css3");
        // $(".phone_nav").css("box-shadow":"2px 2px  #ccc");
    }
    $(window).scroll(function(){

        if($(".phone_nav").css("position")=="fixed"){

            if($(window).scrollTop()>=940){
                $("body").addClass("body_nav");
            }else{
                $("body").removeClass("body_nav");
            }
        }
    })//�ϡ��󵼺�

    //�ж�������������ͷ
    $('.nav_main .phone_ul>li').each(function(){
        if($(this).find("ul").length>0){
            $(this).find("b").css("display","block");
        }else{
            $(this).find("b").css("display","none");
        }
    });


});

