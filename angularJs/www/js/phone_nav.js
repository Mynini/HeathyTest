// 手机导航
$(function(){
      $("#phone_but").click(function(){
        $(this).parent().parent().parent().toggleClass("body_on");
        $(this).parent().parent().toggleClass("phone_on");
      });
      $("#phone_ul").css('height',$(window).height()-50+"px");
      
      $(window).resize(function(){
        $("#phone_ul").css('height',$(window).height()-50+"px");
      })
      
      $("#phone_ul li").each(function(){
        var leng = $(this).find("ol li").length;
        if(leng > 0){
          $(this).children("a").after("<a href='#' class='a_zk'></a>");
        }
      });
      var aBut=$('#phone_ul .a_zk');
      aBut.click(function(){
        $(this).toggleClass("a_zk_on");
        var aLi=$(this);    
        if(aLi.next("ol").is(":hidden")){
          aLi.next("ol").slideDown();
        }else{
          aLi.next("ol").slideUp();
        };
        return false
      });
  })


// 导航切换
$(function(){
        $('.tabs').tabulous({
          effect: 'scale'
        });
      });
