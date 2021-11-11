$(function(){
	//Завдання 1
	/*$('nav li').click(function(){
		alert($(this).html());
	});*/
	
	//Завдання 2
	//alert($('#email').val());
	
	//Завдання 3
	/*$('.link-moto').click(function(){
		alert($(this).attr('href'));
	})*/
	
	//Завдання 4
	/*$('.features-grids img[src*=moto]').click(function(){
		$(this).click(function(){
		alert($(this).attr('src'));
		})
	})*/
	
	//Завдання 5
	/*$('#p').click(function(){
		$(this).html("«Зараз функція недоступна.<i> Спробуйте пізніше»");
	})*/
	
	//Завдання 6
	/*$('.contatct-active').click(function(){
		$(this).html("<img width = '60' src= 'images/pic_eng.png'/>")
	})*/
	
	//Завдання 7
	/*$('.features-grid').click(function(){
		$("h3", this).html("<a href='#'>Ви обрали:"+$("h3",this).text()+"</a>")
	})*/
	
	//Завдання 8
 /*$('.features-grid').click(function(){
         $("h3", this).html("<a href='#'><i>Ви обрали:</i> <br><br>"+$("h3", this).text()+"</a>");	 
	});*/
	
	//Завдання 9
	/*$('.blog-post').each(function(){
		$(this).mouseenter(function(){
			$(".categorie", this).fadeIn(3000).html("Бажаєте замовити? Вартість: <a href='#'>14000$</a>")
		});
		$(this).mouseleave(function(){
			$('.categorie').fadeOut(3000);
		});	
 });*/
	//Завдання 10
	$('.blog-post').each(function(){
		$(this).click(function(){
			$("textarea").html($(".post-head", this).text() + " " + $(".categorie", this).text()+ "\n" + $('textarea').text());
}); 
	});
});