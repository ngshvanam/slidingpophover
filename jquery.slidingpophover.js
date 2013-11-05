(function($){

	var height = 0;
	var width = 0;
    var settings = {}

	$.fn.slidingPopHover = function(options){
        
		settings = $.extend({duration:200},options);

		height = $("div:first",this).height();
		width = $("div:first",this).width();

		$(this).css({"overflow": "hidden", "width": width+"px", "height": height+"px"});
		$("div:nth-child(1)", this).css("position","relative");
		$("div:nth-child(2)", this).css("position","relative");
		
		$("div:nth-child(2)", this).css({"width": width+"px", "height": height+"px"});
	
		slideEvent(this);

	}

	function slideEvent(displayItem)
	{
		$(displayItem).mouseenter(function(){
			$("div:nth-child(1)", displayItem).animate({
				 top: '-'+height+'px'
			}, { duration: settings.duration, queue: false });

			$("div:nth-child(2)", displayItem).animate({
				 top: '-'+height+'px'
			}, { duration: settings.duration, queue: false });
		});

		$(displayItem).mouseleave(function(){
			$("div:nth-child(1)", displayItem).animate({
				top: '0px'
			}, { duration: settings.duration, queue: false });

			$("div:nth-child(2)", displayItem).animate({
				top: '0px'
			}, { duration: settings.duration, queue: false });
		});
	}

}(jQuery))