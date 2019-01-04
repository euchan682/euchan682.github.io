(function(){

	var minified = false;
	$(window).on('scroll', (evt)=>{
		var scroll = $(window).scrollTop();
		if(scroll > 100 && !minified){
			console.log('make small')
			$('header').stop();
			$('header').animate({
				height: '56px'
			}, 200)
			minified = true;
		}
		if(scroll < 100 && minified){
			console.log('make big')
			$('header').stop();
			$('header').animate({
				height: '125px'
			}, 200)
			minified = false;
		}
	})

})();