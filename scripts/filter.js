function opfFilter(container, itemSelector, itemTextSelector, fieldText) {
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