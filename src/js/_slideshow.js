//start slideshow
(function() {
	var slideshow = $('.js-slideshow');

	function Gallery(config) {

		this.section = config.section;
		this.slider = this.section.find(config.slider);
		this.preview = this.section.find(config.preview);

		this.addSlider();
	};

	Gallery.prototype.addSlider = function() {
		var that = this;

		that.slider.slick({
			fade: true,
			arrows: false,
			asNavFor: that.preview
		});

		that.preview.slick({
			arrows: false,
			asNavFor: that.slider,
			vertical: true,
			verticalSwiping: true,
			slidesToShow: 3,
			focusOnSelect: true
		});
	};

	slideshow.each(function() {
		new Gallery({
			section: $(this),
			slider: '.js-slideshow-main',
			preview: '.js-slideshow-thumbnails'
		});
	});

})();
//end slideshow