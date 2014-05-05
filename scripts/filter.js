function opfFilter(container, itemSelector, itemTextSelector, fieldText, subContainerSelector, noMatchText) {
	function filterBy(text) {
		$('.filter-no-match').remove();
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
		if(subContainerSelector) { //If not given, disable this functionality
			container.find(subContainerSelector).each(function() {
				if($(this).find(itemSelector).filter(':not(.hidden)').length == 0) {
					$(this).append('<p class="filter-no-match">' + noMatchText + '</p>');
				}
			});
		}
		container.addClass('filtered');
	}

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