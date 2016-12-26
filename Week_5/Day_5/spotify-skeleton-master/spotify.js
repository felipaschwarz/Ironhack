$(document).on('ready', function() {

	$('.searchSong').on('click', function () {
		event.preventDefault();
		
		var newSong = {title: $('#title').val(),};

		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=track&query=" + newSong.title,
			success: updatePlayer,
			error: handleError
		});

		$('.btn-play').on('click', function () {
			$(".btn-play").toggleClass("playing");
			$(".btn-play").hasClass("playing") ? $('.js-player').trigger('play') : $('.js-player').trigger('pause');
			$('.js-player').on('timeupdate', printTime);

			$('.artist').on('click', function () {
				$('.js-modal').modal("show");
			});
		});
	});
});

function updatePlayer(response) {
	console.log(response);
	var title = response.tracks.items[0].name;
	var artist = response.tracks.items[0].artists[0].name;
	var coverurl = response.tracks.items[0].album.images[0].url;
	var audiourl = response.tracks.items[0].preview_url;

	$('.title').text(title);
	$('.artist').text(artist);
	$('.cover').append(`<img src="${coverurl}" alt="cover" />`)
	$('.widget').append(`<audio src="${audiourl}" class="js-player"></audio>`)


};

function handleError(error) {
	console.log("Error!");
	console.log(error);
};

function printTime () {
  var current = $('.js-player').prop('currentTime');
  $('progress').val(current);
}