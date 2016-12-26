// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

PokemonApp.Pokemon = function (pokemonUri) {
	this.id = PokemonApp.idFromUri(pokemonUri);
};

PokemonApp.Pokemon.prototype.render = function() {
	console.log("Rendering pokemon: #" + this.id);

	$.ajax({
		url: "api/pokemon/" + this.id,
		success: function (response) {
			$(".js-pkmn-name").text(response.name);
			$(".js-pkmn-number").text(response.pkdx_id);
			$(".js-pkmn-height").text(response.height);
			$(".js-pkmn-weight").text(response.weight);
			
			$(".js-pkmn-hp").text(response.hp);

			$(".js-pkmn-attack").text(response.attack);
			$(".js-pkmn-defense").text(response.defense);

			$(".js-pkmn-spcattack").text(response.sp_atk);
			$(".js-pkmn-spcdefense").text(response.sp_def);

			$(".js-pkmn-speed").text(response.speed);
			console.log(response);


			var typesArray = response.types;
			$(".js-pkmn-div-types").empty();

			typesArray.forEach(function(type) {
				$(".js-pkmn-div-types").append('<dd>' + type.name + '</dd>');
			});

			$.ajax({
				url: 'http://pokeapi.co' + response.sprites[0].resource_uri,
				success: function(response) {
					var uriSegements = response.image.split('/')
					var lastSegment = uriSegements[uriSegements.length - 1];
					var imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + lastSegment
					$(".js-pkmn-div-img").empty();
					$(".js-pkmn-div-img").append(`<img src=${imgUrl} alt="pokemon" />`);
				
					debugger
					$(".js-pokemon-modal").modal("show");
				}
			});
		}
	});

};

PokemonApp.idFromUri = function (pokemonUri) {
	var uriSegements = pokemonUri.split("/");
	var secondLast = uriSegements.length -2;
	return uriSegements[secondLast];
};

$(document).on("ready", function () {
	$(".js-show-pokemon").on("click", function(event) {
		var $button = $(event.currentTarget);
		var pokemonUri = $button.data("pokemon-uri");

		var pokemon = new PokemonApp.Pokemon(pokemonUri);
		pokemon.render();
	});
});