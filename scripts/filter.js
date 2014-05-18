function opfFilter(container, itemSelector, itemTextSelector, fieldText, subContainerSelector, noMatchText) {
	function filterBy(text) {
		_trackEvent('filter', 'filter', $('h1').text());
		container.find(itemSelector).each(function() {
			var currentItem = $(this);
			var filterText = currentItem.find(itemTextSelector).text().toLowerCase();
			if(filterText.indexOf(text.toLowerCase()) > -1) {
				currentItem.removeClass('hidden');
			} else {
				currentItem.addClass('hidden');
			}
		});
		showNoMatchText();
		container.addClass('filtered');
	}

	function showNoMatchText() {
		$('.filter-no-match').remove();
		if(subContainerSelector) { //If not given, disable this functionality
			container.find(subContainerSelector).each(function() {
				if($(this).find(itemSelector).filter(':not(.hidden):not(.hidden-by-checkbox)').length == 0) {
					$(this).append('<p class="filter-no-match">' + noMatchText + '</p>');
				}
			});
		}
	}
	window.opfShowNoMatchText = showNoMatchText;

	var field = $('<input type="text" value="' + fieldText + '" class="filter">');
	field.on('keyup', function() {
		filterBy($(this).val());
	});
	field.on('focus', function() {
		if($(this).val() == fieldText) $(this).val('');
	});
	field.on('blur', function() {
		if($(this).val() == '') $(this).val(fieldText);
	});
	container.prepend(field);
}