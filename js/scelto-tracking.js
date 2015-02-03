var links = $('a');

$.each(links, function(i, link) {
	var category = $(link).data('ga-category');
	var action = $(link).data('ga-action');
	var label = $(link).data('ga-label');
	var value = $(link).data('ga-value');
	addListener(link, 'click', function() {
		category = typeof category !== 'undefined' ? category : 'Link';
		action = typeof action !== 'undefined' ? action : 'Click';
		label = typeof label !== 'undefined' ? label :
			typeof $(link).attr('alt') !== 'undefined' ? $(link).attr('alt') : $(link).attr('href');
		_trackEvent(category, action, label, value);
	});
});

/**
 * Utility to wrap the different behaviors between W3C-compliant browsers
 * and IE when adding event handlers.
 *
 * @param {Object} element Object on which to attach the event listener.
 * @param {string} type A string representing the event type to listen for
 *     (e.g. load, click, etc.).
 * @param {function()} callback The function that receives the notification.
 */
function addListener(element, type, callback) {
	if (element.addEventListener) element.addEventListener(type, callback);
	else if (element.attachEvent) element.attachEvent('on' + type, callback);
}