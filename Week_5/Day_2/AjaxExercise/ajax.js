$(document).on('ready', function() {

	$('.displayCharacters').on('click', function () {
		updateList();
	});

	$('.addCharacters').on('click', function () {
		event.preventDefault();
		
		var newCharacter = {
			name: $('#name').val(),
			occupation: $('#occupation').val(),
			weapon: $('#weapon').val(),
			debt: $('#debt').val()
		};

		$.ajax({
			type: "POST",
			url: "https://ironhack-characters.herokuapp.com/characters",
			data: newCharacter,
			success: updateList,
			error: handleError
		});
	});
});

function showCharacters(response) {
	var charactersArray = response;
	charactersArray.forEach(function(theCharacter) {
		var html = `<li><p>
			Name: ${theCharacter.name}<br>
			Occupation: ${theCharacter.occupation}<br>
			Weapon: ${theCharacter.weapon}<br>
			Debt: ${theCharacter.debt}<br>
			</p></li>`;

		$('ul').append(html);
	});
};

function handleError(error) {
	console.log("Error!");
	console.log(error);
};

function updateList() {
	$.ajax({
		type: "GET",
		url: "https://ironhack-characters.herokuapp.com/characters",
		success: showCharacters,
		error: handleError
	});
};



