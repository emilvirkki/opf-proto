jQuery(function($) {
	$('.collapsible .heading').click(function() {
		$(this).parent().find('.content').slideToggle(function() {
			$(this).parent().toggleClass('collapsed');
		});

	});
});

/*** GOOGLE ANALYTICS ***/

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-49760346-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();