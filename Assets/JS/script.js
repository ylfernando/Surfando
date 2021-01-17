$(document).ready(function(){

$('.btn-menu-mobile').on('click', function() {
	$(this).toggleClass('active');
});

$('#menu-mobile-span').on('click', function() {
	var menu = $('.ul-header');
	$(menu).toggle('.ul-header');
	$(menu).css('flex-direction', 'column');
	
});

$('.slide-area').cycle({

});
});