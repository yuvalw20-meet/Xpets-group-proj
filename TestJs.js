$( document ).ready(function() {

	let isddmdown = false;

	// function ChngToLSU() {
	// 	LSUP = true;
	// 	$("#left-NB").css({"background-color":"#000063","box-shadow":"inset 0px 0px 10px #000063"});
	// 	$("#center-NB").css({"background-color":"#9CAAC6","box-shadow":"inset 0px 0px 10px #DEE7EF"});
	// }

	//SETTING DEFAULTS FOR WEBSITE
	$(".drop-down-bar").css({height: "0em"});
	$("#owl").css({opacity: "0"});



	//Opening Browsers
	$("#center-NB").click(function() {
		window.open("LoginSU.html","_self");
	});
	
	$("#left-NB").click(function() {
		window.open("TestPage.html","_self");
	});

	$("#ContactUsLink").click(function() {
		window.open("ContactUsPage.html","_self");
	});

	$("#CategoriesLink").click(function() {
		window.open("Categories.html","_self");
	});


	//Hover effect in Main Page for H1 (xPet)
	$("#h1").hover(function(){
		$("#pop").animate({opacity: "1"}, {duration: 600 ,queue: false});
		$("#pop").animate({left: "7.4em"}, {duration: 1000 ,queue: false, easing: "easeOutBounce"});
	}, function() {
		$("#pop").animate({opacity: "0"}, {duration: 300 ,queue: false});
		$("#pop").animate({left: "4em"}, {duration: 500 ,queue: false});
	});

	// $("#right-NB").hover(function() {
	// 	$(".drop-down-bar").animate({opacity: "1"}, {duration: 300 ,queue: false});
	// 	$(".drop-down-bar").animate({height: "16em"}, {duration: 600 ,queue: false, easing: "easeOutBack"});
	// }, function() {
	// 	$(".drop-down-bar").animate({opacity: "0"}, {duration: 460 ,queue: false, easing: "easeInExpo"});
	// 	$(".drop-down-bar").animate({height: "0em"}, {duration: 500 ,queue: false, easing: "easeInBack"});
	// });

	$("#right-NB").click(function() {
		if(isddmdown == false){
			isddmdown = true;
			$(".drop-down-bar").animate({height: "17em"}, {duration: 600 ,queue: false, easing: "easeOutBack"});
			$(".drop-down-bar").animate({opacity: "1"}, {duration: 400 ,queue: false});
		}
		else{
			isddmdown = false;
			$(".drop-down-bar").animate({height: "0em"}, {duration: 600 ,queue: false, easing: "easeInBack"});
			$(".drop-down-bar").animate({opacity: "0"}, {duration: 650 ,queue: false, easing: "easeInQuint"});
		}
	});

	// alert($("#S-up-btn").width());

	$("#S-up-btn").click(function() {
		alert("We're sorry, this feature has not yet been implemented. :(");
	});

	$("#S-in-btn").hover(function() {
		$("#owl").animate({top: "0%"}, {duration: 600 ,queue: false, easing: "easeOutBack"});
		$("#owl").animate({opacity: "1"}, {duration: 600 ,queue: false, easing: "easeOutQuint"});
		}, function() {
		$("#owl").animate({top: "20%"}, {duration: 350 ,queue: false, easing: "easeInBack"});
		$("#owl").animate({opacity: "0"}, {duration: 500 ,queue: false, easing: "easeInQuint"});

	});

});
