(function() {
	$(document).ready(function() {
		$('.nav-toggle').on('click', function() {
			var self = $(this);
			var state  = self.data("toggle-state");
			if(!state) {
				self.data("toggle-state", "open");
			}
			$(this).animate();
		});
	});
})();