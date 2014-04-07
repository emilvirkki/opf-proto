function _trackEvent(cat, act, label) {
  _gaq.push(['_trackEvent', cat, act, label]);
}

jQuery(function($) {
  $('body').append('<script src="../scripts/tooltipster/js/jquery.tooltipster.min.js"></script>');
  $('head').append('<link rel="stylesheet" href="../scripts/tooltipster/css/tooltipster.css">');

	$('.collapsible .heading').click(function() {
		$(this).parent().find('.content').slideToggle(function() {
      _trackEvent('collapsible', 'toggle', $('h1').text());
			$(this).parent().toggleClass('collapsed');
		});

	});

  function setTitles() {
  $('.icon-metsa').attr('title', 'Retkellä');
  $('.icon-retki').attr('title', 'Retkellä');
  $('.icon-kolo').attr('title', 'Kololla');
  $('.icon-leiri').attr('title', 'Leirillä');
  $('.icon-vene').attr('title', 'Veneessä');
  $('.icon-ulkona').attr('title', 'Ulkona');
  $('.icon-kaupunki').attr('title', 'PKaupungissa');
  $('.icon-1h').attr('title', 'Yksin');
  $('.icon-1tai2h').attr('title', 'Yksin tai kaksin');
  $('.icon-ryhma').attr('title', 'Vartiossa');
  $('.icon-isoryhma').attr('title', 'Joukkuessa tai isommassa ryhmässä');
  $('.icon-pakollinen').attr('title', 'Pakollinen');
  $('.icon-vapaavalintainen').attr('title', 'Vapaavalintainen');
  $('.icon-valmisteluaika').attr('title', 'Valmisteluaika (minuuttia)');
  $('.icon-kesto').attr('title', 'Kesto (minuuttia)');
  $('.icon-taso').attr('title', 'Tarpojien taso');
  }
  setTitles();
  $('.icon').tooltipster({
    trigger: 'click'
  });
  setTitles();

  var furl = 'https://docs.google.com/forms/d/1LujXfArau-dqwFI0jkpR9wW6v4VcbeinNAJiXXs_arA/viewform';
  var flink = $('<a href="' + furl + '" target="_blank" class="palaute">Anna palautetta</a>').on('click', function() {
    _trackEvent('feedback', 'click', window.location.href);
  });
  $('body').append(flink);
  
  //Event tracking

  $('#nav a').on('click', function() {
    _trackEvent('nav', 'click', $(this).text());
  });

  $('#main .front a').on('click', function() {
    _trackEvent('fpbox', 'click', $(this).text());
  });

  $('#main .front .button').on('click', function() {
    _trackEvent('fpbox', 'search', $(this).value());
  });

  $('.sudenpennutnav').on('click', function() {
    _trackEvent('sudenpennutnav', 'click', $(this).value());
  });

  $('.icon').on('click', function() {
    _trackEvent('icon', 'click');
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