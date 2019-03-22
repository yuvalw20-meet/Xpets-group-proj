$( document ).ready(function() {

	$(".drop-down-bar").css({height: "0em"});

	
	
	$("h1").hover(function(){
		$("#pop").animate({opacity: "1"}, {duration: 600 ,queue: false});
		$("#pop").animate({left: "7.4em"}, {duration: 1000 ,queue: false, easing: "easeOutBounce"});
	}, function() {
		$("#pop").animate({opacity: "0"}, {duration: 300 ,queue: false});
		$("#pop").animate({left: "4em"}, {duration: 500 ,queue: false});
	});

	$("#right-NB").hover(function() {
		$(".drop-down-bar").animate({opacity: "1"}, {duration: 300 ,queue: false});
		$(".drop-down-bar").animate({height: "16em"}, {duration: 600 ,queue: false, easing: "easeOutBack"});
	}, function() {
		$(".drop-down-bar").animate({opacity: "0"}, {duration: 460 ,queue: false, easing: "easeInExpo"});
		$(".drop-down-bar").animate({height: "0em"}, {duration: 500 ,queue: false, easing: "easeInBack"});
	});

});
