(function($) {
	Blacklight.add_css_dropdown_click_support = function() {
		$(".css-dropdown li:not(.no-menu)").on('click',function(){
			$(this).toggleClass("hovering");
			return false;
		});
	};
	$(document).ready(function() {
	  Blacklight.add_css_dropdown_click_support();
	});
})(jQuery);