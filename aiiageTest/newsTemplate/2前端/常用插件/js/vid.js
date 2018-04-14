// JavaScript Document
$(function(){
	$("#main_ul a").on("click",function(){
		var ind = $("#main_ul a").index($(this));
		vid(ind);
		return false;
	})
	
	$(".vid_bg .vid_ul a").on("click",function(){
		var ind = $(".vid_bg .vid_ul a").index($(this));
		vid(ind);
		return false;
	});
	
	$(".vid_bg .vid_xx a").on("click",function(){
		$(".vid_bg").fadeOut(300);
		$("#vid_a1").html("");
		return false;
	});
	
	function vid(ind){
		$(".vid_bg").fadeIn(300)
		$("#vid_a1").html("")
		var flashvars={
			f:$("#main_ul a").eq(ind).attr("data-flv"),
			c:0,
			i:$("#main_ul a").eq(ind).attr("data-img")
		};
		var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
		var video=[$("#main_ul a").eq(ind).attr("data-mp4")+'->video/mp4'];
		CKobject.embed('/ckplayer/ckplayer.swf','vid_a1','ckplayer_a1','100%','100%',true,flashvars,video,params);
		return false;
	}
});
