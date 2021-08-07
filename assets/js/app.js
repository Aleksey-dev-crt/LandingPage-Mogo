$(function() {
	
	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();

		// Header fixed
		checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {					
		if (scrollOffset>=introH) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");	
		}
	}

	// Smooth scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
		 	blockID = $this.data('scroll'),
			blockOffset = $(blockID).offset().top;

			$("nav a").removeClass("active");	
			$this.addClass("active");
			
			$("html, body").animate({
				scrollTop: blockOffset
			}, 500);

	});
	// Menu nav toggle
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$("nav").toggleClass("active");
	});

	// Accordion
	$("[data-colapse]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
		 	blockID = $this.data('colapse');

		 	//$this.toggleClass("active");

		 	$(blockID).slideToggle();

	});

	// Slider
	$("[data-slider]").slick({
		  infinite: true,
		  fade: false,
		  slidesToShow: 1,
		  slidesToScroll: 1
	});



});