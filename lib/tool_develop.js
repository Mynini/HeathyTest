
(function(window,undefined){

	var Fre=window.Fre;

	Fre=function(selector,context){
		return new Fre.fn.init(selector,context);
	}

	Fre.fn=Fre.prototype={
		constructor:Fre,
		init:function(selector,context){
			var i=0;
		}

	}

    /** Give the init funciton the Fre prototype for later instantiation */
	Fre.fn.init.prototype=Fre.fn;

})(window)