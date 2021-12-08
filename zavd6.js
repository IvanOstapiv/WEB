$(function(){

	//Завдання 1
	//$(".slide-btn").css("height", "100");

	//Завдання 2
	/*function change_width(selection_obj, w){
		$(selection_obj).width(w);
	}
	change_width('.slide-btn', '100');
	change_width('#p', '400')*/
	
	//Завдання 3
	/*function change_width(selectorObj ,w){
	var hght = $(selectorObj).height();
	var wdth = $(selectorObj).width();
	var h = (w*hght)/wdth;	
	$(selectorObj).width(w);
	$(selectorObj).height(h);
	};
	change_width('.slide-btn',250);
	change_width('#p', 450);*/

	//Завдання 4
	/*function change_width(selectorObj ,w){
	var h = $(selectorObj).height();
	var w = $(selectorObj).width();
	$(selectorObj).width(w/2);
	$(selectorObj).height(h/2);
	};
	change_width('.slide-btn');
	change_width('#p');*/
	
	//Завдання 5
	/*$('.features-grids img').click(function(){
	if($(this).attr('title')==0){
	$(this).width($(this).width()/1.5);
	$(this).height($(this).height()/1.5);
	$(this).attr('title', "1");
	}
	else if($(this).attr('title')==1){
	$(this).width($(this).width()*1.5);
	$(this).height($(this).height()*1.5);	
	$(this).attr('title', "0");
	}
	});*/
	
	//Завдання 6
	/*$('img').mouseenter(function(){
	$(this).width($(this).width()/2);	
	});
	$('img').mouseleave(function(){	
	$(this).width($(this).width()*2);
	});*/
	
	//Завдання 7
	/*function change_width_b(selectorObj){
	$(selectorObj).width($(selectorObj).width()*1.5);
	};
	function change_width_s(selectorObj){
	$(selectorObj).width($(selectorObj).width()/1.5);
	};
	$('img').mouseenter(function(){
	change_width_b(this);
	});
	$('img').mouseleave(function(){	
	change_width_s(this);
	});*/
	
	//Завдання 8
	/*function size_obj(selectorObj){
	$("#p").text("Об'єкт - "+ $(selectorObj).attr("alt") +" Його ширина = "+ $(selectorObj).width() +"px, висота = "+ $(selectorObj).height() +"px.");
	};
	$('img').click(function(){
	size_obj(this);
	});*/
	
	//Завдання 9
	/*function size_obj(selectorObj){
	$("#p").text("Об'єкт - "+ $(selectorObj).attr("src") +" Його ширина = "+ $(selectorObj).width() +"px, висота = "+ $(selectorObj).height() +"px.");
	};
	$('img').mouseenter(function(){
	size_obj(this);
	});*/
})