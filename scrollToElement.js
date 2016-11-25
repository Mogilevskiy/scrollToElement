function scrolTo() {
	$('.another_arr_down').on('click', function() {
		$('html, body').animate({
			scrollTop: $('#target1').offset().top -0
		}, 800);
	})
	return false
};
