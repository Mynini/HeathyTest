/*下拉菜单*/
 jQuery(".nav").slide({ type:"menu", titCell:".nl", targetCell:".sub",effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true});
$(".m-nav").click(function () { $(".h-top").toggleClass("block"); });

/*banner*/
var mySwiper = new Swiper('.swiper-container',{
    loop: true,
	autoplay: 4000,
	pagination : '.pagination',
	paginationClickable :true
  });
   $('.arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })
  $('.arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  }) 
/*弹出层*/  

$(".t-box .close").click(function(){ $(".t-box").removeClass('block');$('iframe').attr('src',' ');  });
$(".tz").click(function(){ 
var url=$(this).data('url');

$(".tzbox").addClass('block'); $('iframe').attr('src',url); 

});
/*返回顶部*/
$("<i class='fa-up'></i>").appendTo('body');
if($(this).scrollTop()==0){	$(".fa-up").hide();	}
$(window).scroll(function(event) {
if($(this).scrollTop()==0){$(".fa-up").hide();}
if($(this).scrollTop()!=0){$(".fa-up").show();}	});	
$(".fa-up").click(function(event) {$("html,body").animate({scrollTop:"0px"},666)});
	