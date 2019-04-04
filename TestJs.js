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

	$("#AboutLink").click(function() {
		window.open("AboutPage.html","_self");
	});

	$("#MostPopularLink").click(function() {
		window.open("MostPopular.html","_self");
	});


	$("#rndan").click(function() {
		window.open("BasicPfP.html","_self");
	});
	

	$(".WrkNPrgrs").click(function() {
		$(".WrkNPrgrs").removeClass();
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
		$("#owl").animate({top: "19%"}, {duration: 350 ,queue: false, easing: "easeInBack"});
		$("#owl").animate({opacity: "0"}, {duration: 350 ,queue: false, easing: "easeInQuint"});

	});

	var sphynx =["sphynksii","hello <br>" + "I am sphynksii <br>" + "i am a cat", "https://i.etsystatic.com/10664366/r/il/6f5b46/1436546376/il_570xN.1436546376_pook.jpg"];
   var siamese =["sami","hello <br>" + "I am sami <br>" + "i am a cat", "http://petha.ir/wp-content/uploads/2018/04/siamese-kitten.jpg"];
   var persian =["persi","hello <br>" + "I am persi <br>" + "i am a cat", "https://previews.123rf.com/images/isselee/isselee1101/isselee110100481/8650556-j%C3%B3venes-gato-persa-sentado-frente-a-fondo-blanco.jpg"];

   var somoyed =["lyon","hello <br>" + "I am lyon <br>" + "i am a dog", "https://vetstreet.brightspotcdn.com/dims4/default/4c1fd66/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Ffd%2Fc6caa0a81811e0a0d50050568d634f%2Ffile%2Fsamoyed-1-645mk070111.jpg"];
   var german_sheperd =["sean","hello <br>" + "I am sean <br>" + "i am a dog", "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Poodle-3.jpg"];
   var poodle =["bello","hello <br>" + "I am bello <br>" + "i am a dog", "http://marshallspetzone.com/blog/wp-content/uploads/2016/12/german-shepherd-puppy-image.jpg"];

   var fuzzy_lop =["fuzzy","hello <br>" + "I am fuzzy <br>" + "i am a bunny", "https://i.pinimg.com/236x/25/c4/64/25c4643ffea4fbce6f2ae760b385a16e--fluffy-bunny-bunny-bunny.jpg"];
   var satin =["marshmelow","hello <br>" + "I am marshmelow <br>" + "i am a bunny", "https://www.petguide.com/wp-content/uploads/2016/08/satin-rabbit-1.jpg"];
   var volcano =["bubba","hello <br>" + "I am bubba <br>" + "i am a bunny", "http://belovedofbeasts.com/wp-content/uploads/2015/10/volcanorabbit.jpg"];

   var gold_fish =["goldy","hello <br>" + "I am goldy <br>" + "i am a fish", "http://tuselva.com/wp-content/uploads/2014/10/como-cuidar-un-pez-goldfish.jpg"];
   var clown_fish =["nemo","hello <br>" + "I am nemo <br>" + "i am a fish", "https://cdn.shopify.com/s/files/1/0855/3388/products/6297_800x.jpeg?v=1441108913"];
   var dori_fish =["bluy","hello <br>" + "I am bluy <br>" + "i am a fish", "https://upload.wikimedia.org/wikipedia/commons/f/f2/Paracanthurus_hepatus_Prague_2011_2.jpg"];

   var parrot =["pappy","hello <br>" + "I am pappy <br>" + "i am a bird", "https://www.thesprucepets.com/thmb/i7WQGhM_FSpszuPA1d-OtD71nak=/3865x2576/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-gold-and-blue-macaw-perching-on-tree-962288862-5b50073e46e0fb0037c23c23.jpg"];
   var canery =["conny","hello <br>" + "I am conny <br>" + "i am a bird", "https://media.istockphoto.com/photos/yellow-canary-bird-picture-id918969714?k=6&m=918969714&s=612x612&w=0&h=8vqtu0OPRTHU5ouaQ-GTO0LVb4GVG8MlVjzpBC1f7Y0="];
   var cockatoo =["kevin","hello <br>" + "I am kevin <br>" + "i am a bird", "https://www.thesprucepets.com/thmb/4J_ZNpYMen7zy7XZrqxPRfsONag=/4000x2857/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-sulphur-crested-cockatoo-perching-on-branch-638709711-5b4e019146e0fb005b1373cc.jpg"];


   var cats = [sphynx, siamese, persian];

   var dogs = [somoyed, german_sheperd, poodle];

   var bunnies = [fuzzy_lop, satin, volcano];

   var fish = [gold_fish, clown_fish, dori_fish];

   var birds = [parrot, canery, cockatoo];


   var petsList = [cats, dogs, bunnies, fish, birds];

   function randomPetProfie() {
       let currentKind = petsList[Math.floor(Math.random() * 5)];
       let currentPet = currentKind[Math.floor(Math.random() * 3)];
       $("#profile-name").text(currentPet[0]);
       $("#profile-bio").html(currentPet[1]);
       $("#profile-pic").attr("src" ,currentPet[2]);
       $("#profile-pic").attr("width" ,"5em");
       $("#profile-pic").attr("height","5em" );

   }

   randomPetProfie();


   // Making it Random for the Random Suggestion Box in Main Page


   var RndBg = ["https://images2.alphacoders.com/805/thumb-1920-805719.jpg","https://images7.alphacoders.com/323/thumb-1920-323376.jpg","https://images8.alphacoders.com/843/thumb-1920-843064.jpg","https://images3.alphacoders.com/687/thumb-1920-687574.jpg"];

   var RndBgC = RndBg[Math.floor(Math.random() * RndBg.length)];
	
	$(".RandSug").css({'background-image': 'url(' + RndBgC + ')'});

});
