
var Fre = window.Fre;

var enterAnimation = function( selector,params){
	var this_=this;
	var defaults = {

	}
}

if(window.Fre){
	(function(Fre){
		return new enterAnimation(this[0],params)
	})()
}


(function(){
		var win = $(window);
		var winTop = 0;
		var winhei = win.height()*0.7;
		var winhei2 = win.height()*0.4;
		var box1 = $("#box1");
		var box2 = $("#box2");
		var box3 = $("#box3");
		var box4 = $("#box4");
		var box5 = $("#box5");
		var box6 = $("#box6");
		var box7 = $("#box7");
		var box8 = $("#box8");
		var box9 = $("#box9");
		var box10 = $("#box10");
		var box11 = $("#box11");
		var box12 = $("#box12");
		var box13 = $("#box13");
		var box14 = $("#box14");
		win.resize(function(e) {
			winhei = win.height()*0.7;
			winhei2 = win.height()*0.4;
		});
		win.scroll(function(){
			winTop = win.scrollTop();
			scroll_fun(winTop)
		});
		
		function scroll_fun(t){
			if(t >= box1.offset().top - winhei){
				box1.addClass("in_anm");
			}
			if(t >= box2.offset().top - winhei){
				box2.addClass("in_anm");
			}
			if(t >= box3.offset().top - winhei){
				box3.addClass("in_anm");
			}
			if(t >= box4.offset().top - winhei){
				box4.addClass("in_anm");
			}
			if(t >= box5.offset().top - winhei){
				box5.addClass("in_anm");
			}
			if(t >= box6.offset().top - winhei){
				box6.addClass("in_anm");
			}
			if(t >= box7.offset().top - winhei){
				box7.addClass("in_anm");
			}
			if(t >= box8.offset().top - winhei){
				box8.addClass("in_anm");
			}
			if(t >= box9.offset().top - winhei){
				box9.addClass("in_anm");
			}
			if(t >= box10.offset().top - winhei){
				box10.addClass("in_anm");
			}
			if(t >= box11.offset().top - winhei){
				box11.addClass("in_anm");
			}
			if(t >= box12.offset().top - winhei){
				box12.addClass("in_anm");
			}
			if(t >= box13.offset().top - winhei){
				box13.addClass("in_anm");
			}
			if(t >= box14.offset().top - winhei){
				box14.addClass("in_anm");
			}
		}
		//scroll_fun($(window).height());
	})();
