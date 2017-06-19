(function() {
	$(document).ready(function() {
		$('.nav-toggle').on('click', function() {
			var self 		= $(this);
			var state  		= self.data('toggle-state');
			var body 		= $('body > *');

			if(!state) {
				self.data('toggle-state', 'open');
				state = 'closed';
			}

			if(state === 'closed') {
				body.animate({left: '+=300'});
				self.data('toggle-state', 'open');
			}

			if(state === 'open') {
				body.animate({left: '-=300'});
				self.data('toggle-state', 'closed');
			}
		});
	});
})();