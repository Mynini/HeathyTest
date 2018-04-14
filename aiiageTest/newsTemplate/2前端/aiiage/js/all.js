// JavaScript Document

//回顶部
$(function(){
	$(window).scroll(function(){
		var sc=$(window).scrollTop();
	    var rwidth=$(window).width();
		if(sc>0){
			$("#top").fadeIn("slow")
    	}else{
			$("#top").fadeOut("slow")
    	};
    });
   $("#top").click(function(){
	   var sc=$(window).scrollTop();
	   $('body,html').animate({scrollTop:0},500);
    });
});


//吸顶导航
$(window).scroll(function(){
    var top = $(window).scrollTop(); 
    if (top >= 10)                      
    {
		$(".header").addClass("header_on");
    }else{
	    $(".header").removeClass("header_on");
	}

});


// 判断浏览器是否支持 placeholder
$(function(){
    if(!placeholderSupport()){  
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    }
})
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}

// 去hover
$(function(){
    if($(window).width()<1200){
        $("body").removeClass("hov");
    }
});