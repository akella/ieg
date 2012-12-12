$(document).ready(function() {
	
	// lang
	$('.lang__active').click(function(){
		$(this).next().fadeIn('fast');
	});

	$('.lang__drop li').click(function(){
		$(this).parent().parent().fadeOut('fast');
	});



	// tabs
	$('.tabs__nav li').click(function(){
		if (!($(this).hasClass('active'))) $(this).addClass('active').siblings().removeClass('active')
			.parents('.tabs').find('.tabs__box').eq($(this).index()).fadeIn(150).siblings('.tabs__box').hide();
		return false;
	});
});
