$(document).ready(function() {

	 $('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
		
	$(window).scroll(function() {
	
	    if ($(this).scrollTop()>25) {
	        $('.navbar').css('background', '#292c47');
	        }
	    else {
	        $('.navbar').css('background', 'none',);
	        }
	
	    });
});
