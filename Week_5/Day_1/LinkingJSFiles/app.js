$(document).on('ready', function () {
	console.log("Loaded")
	$('button').on('click', function () {
		$('button').fadeOut(500);
	});
});