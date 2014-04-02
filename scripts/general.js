jQuery(function($) {
	$('.collapsible .heading').click(function() {
		$(this).parent().find('.content').slideToggle(function() {
			$(this).parent().toggleClass('collapsed');
		});

	});
});