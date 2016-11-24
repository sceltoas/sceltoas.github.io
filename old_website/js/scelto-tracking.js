var _gaq = _gaq || [];

var links = $('a');

$.each(links, function(i, link) {
	var category = $(link).data('ga-category');
	var action = $(link).data('ga-action');
	var label = $(link).data('ga-label');
	var value = $(link).data('ga-value');
	var linkType = $(link).data('ga-type');
	addListener(link, 'click', function() {
		category = typeof category !== 'undefined' ? category : 'Link';
		action = typeof action !== 'undefined' ? action : 'Click';
		label = typeof label !== 'undefined' ? label :
			typeof $(link).attr('alt') !== 'undefined' ? $(link).attr('alt') : $(link).attr('href');
		var method = getTrackingMethodName(linkType);
		_gaq.push([method, category, action, label, value]);
	});
});

function getTrackingMethodName(linkType) {
	if(linkType === 'event')
		return '_trackEvent';
	return '_trackPageview';
}

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