$(document).on('ready', function() {

	$('.searchArtist').on('click', function () {
		event.preventDefault();
		
		var newArtist = {
			name: $('#name').val(),
		};

		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=artist&query=" + newArtist.name,
			success: showArtists,
			error: handleError
		});
	});
});

function showArtists(response) {
	var artistArray = response.artists.items;


	artistArray.forEach(function(theArtist) {
		var url = "http://hdimagesnew.com/wp-content/uploads/2016/09/image-not-found.jpg"	
		if (theArtist.images.length > 0) {
			url = theArtist.images[0].url
		}
		var html = `<li id="${theArtist.id}"><div>
			Artist: ${theArtist.name}<br>
			<img src="${url}" alt="artist" />
			</div></li>`;

		$('ul').append(html);
	});

	$('li').on('click', function() {
		var artistId = event.currentTarget.id;
		console.log(artistId)
		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/artists/" + artistId + "/albums",
			success: showAlbums,
			error: handleError
		});
	});
};

function showAlbums(response) {
	var artistAlbums = response.artists.items;
	artistArray.forEach(function(theAlbum) {
		var html = `<li>${theAlbum.name}</li>`;
		$('#artistname').append(html);
	});
};

function handleError(error) {
	console.log("Error!");
	console.log(error);
};
