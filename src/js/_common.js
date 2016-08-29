$(document).ready(function() {

	var win = $(window),
		body = $('body');

	var touch = 'ontouchstart' in window;

	if (!touch) {
		body.addClass('no-touch');
	};

	//=include _slideshow.js

});