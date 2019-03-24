$( document ).ready(function() {

	// let LSUP = false;

	// function ChngToLSU() {
	// 	LSUP = true;
	// 	$("#left-NB").css({"background-color":"#000063","box-shadow":"inset 0px 0px 10px #000063"});
	// 	$("#center-NB").css({"background-color":"#9CAAC6","box-shadow":"inset 0px 0px 10px #DEE7EF"});
	// }

	//SETTING DEFAULTS FOR WEBSITE
	$(".drop-down-bar").css({height: "0em"});
	$("#left-NB").css({"background-color":"#9CAAC6","box-shadow":"inset 0px 0px 10px #DEE7EF"});
	$("#center-NB").css({"background-color":"#000063","box-shadow":"inset 0px 0px 10px #000063"});

	$("#center-NB").click(function() {
		$( document ).ready(function() {
			window.open("LoginSU.html","_self");
		});
		// ChngToLSU();
	});

	$("#left-NB").click(function() {
		$( document ).ready(function() {
			window.open("TestPage.html","_self");
		});
		// ChngToLSU();
	});
	
	$("#h1").hover(function(){
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

	$("#right-NB").click(function() {
		$(".drop-down-bar").animate({height: "16em"});
		// $(".drop-down-bar").animate({height: "toggle"});
	});

	// $(".drop-down-bar").hover(function() {
	// 	$(".drop-down-bar").animate({height: "16em"}, {duration: 600 ,queue: false, easing: "easeOutBack"});
	// }, function() {
	// 	$(".drop-down-bar").animate({opacity: "0"}, {duration: 460 ,queue: false, easing: "easeInExpo"});
	// 	$(".drop-down-bar").animate({height: "0em"}, {duration: 500 ,queue: false, easing: "easeInBack"});
	// });

});
