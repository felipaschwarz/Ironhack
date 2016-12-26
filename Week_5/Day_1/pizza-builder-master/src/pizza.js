$(document).on('ready', function () {
	$('.btn-pepperonni').toggleClass('active');
	$('.btn-mushrooms').toggleClass('active');
	$('.btn-green-peppers').toggleClass('active');
	$('.sauce').toggleClass('sauce-white');
	$('.crust').toggleClass('crust-gluten-free');

	$('.btn-pepperonni').on('click', function () {
		$('.pep').fadeToggle();
		$('.btn-pepperonni').toggleClass('active');
		
		if ($('.btn-pepperonni').hasClass('active')) {
			$("aside.panel strong").text("$" + (parseInt(($("aside.panel strong").text()).replace("$","")) - 1))
		} else {
			$("aside.panel strong").text("$" + (parseInt(($("aside.panel strong").text()).replace("$","")) + 1))
		}
		
	});

	$('.btn-mushrooms').on('click', function () {
		$('.mushroom').fadeToggle();
		$('.btn-mushrooms').toggleClass('active');

		if ($('.btn-mushrooms').hasClass('active')) {
			$("aside.panel strong").text("$" + (parseInt(($("aside.panel strong").text()).replace("$","")) - 1))
		} else {
			$("aside.panel strong").text("$" + (parseInt(($("aside.panel strong").text()).replace("$","")) + 1))
		}
	});

	$('.btn-green-peppers').on('click', function () {
		$('.green-pepper').fadeToggle();
		$('.btn-green-peppers').toggleClass('active');

		if ($('.btn-green-peppers').hasClass('active')) {
			$("aside.panel strong").text("$" + (parseInt(($("aside.panel strong").text()).replace("$","")) - 1))
		} else {
			$("aside.panel strong").text("$" + (parseInt(($("aside.panel strong").text()).replace("$","")) + 1))
		}
	});

	$('.btn-sauce').on('click', function () {
		$('.sauce').toggleClass('sauce-white');
		$('.btn-sauce').toggleClass('active');

		if ($('.btn-sauce').hasClass('active')) {
			$("aside.panel strong").text("$" + (parseInt(($("aside.panel strong").text()).replace("$","")) - 3))
		} else {
			$("aside.panel strong").text("$" + (parseInt(($("aside.panel strong").text()).replace("$","")) + 3))
		}
	});

	$('.btn-crust').on('click', function () {
		$('.crust').toggleClass('crust-gluten-free');
		$('.btn-crust').toggleClass('active');

		if ($('.btn-crust').hasClass('active')) {
			$("aside.panel strong").text("$" + (parseInt(($("aside.panel strong").text()).replace("$","")) - 5))
		} else {
			$("aside.panel strong").text("$" + (parseInt(($("aside.panel strong").text()).replace("$","")) + 5))
		}
	});
});

// if ( $('#pizza').hasClass( ".pep" ) ) {
// 	$("aside.panel strong").text(parseInt(("aside.panel strong").text().replace("$","")) - 1)
// }