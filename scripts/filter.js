function opfFilter(container, itemSelector, itemTextSelector, fieldText) {
	function filterBy(text) {
		container.find(itemSelector).each(function() {
			var currentItem = $(this);
			var filterText = currentItem.find(itemTextSelector).text().toLowerCase();
			if(filterText.indexOf(text.toLowerCase()) > -1) {
				currentItem.removeClass('hidden');
			} else {
				currentItem.addClass('hidden');
			}
		});
		container.addClass('filtered')
	}

	var field = $('<input type="text" placeholder="' + fieldText + '" class="filter">');
	field.on('keyup', function() {
		filterBy($(this).val());
	});
	container.prepend(field);
}