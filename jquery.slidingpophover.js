(function($){

	var height = 0;
	var width = 0;
    var settings = {}

	$.fn.slidingPopHover = function(options){
        
		settings = $.extend({duration:200},options);

		height = $("div:first img",this).height();
		width = $("div:first img",this).width();

		$(this).css({"overflow": "hidden", "width": width+"px", "height": height+"px"});
		$("div:nth-child(1)", this).css("position","relative");
		$("div:nth-child(2)", this).css("position","relative");

		$("div", this).css("width", width);
		$("div", this).css("height", height);

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