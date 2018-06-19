/*下拉菜单*/
 jQuery(".nav").slide({ type:"menu", titCell:".nl", targetCell:".sub",effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true,defaultPlay:false});
$(".m-nav").click(function () { $(".h-top").toggleClass("block"); });


/*返回顶部*/
$("<i class='fa-up'></i>").appendTo('body');
if($(this).scrollTop()==0){	$(".fa-up").hide();	}
$(window).scroll(function(event) {
if($(this).scrollTop()==0){$(".fa-up").hide();}
if($(this).scrollTop()!=0){$(".fa-up").show();}	});	
$(".fa-up").click(function(event) {$("html,body").animate({scrollTop:"0px"},666)});
	