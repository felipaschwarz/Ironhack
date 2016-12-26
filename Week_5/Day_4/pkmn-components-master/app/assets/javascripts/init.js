if (window.PokemonApp === undefined) {
	window.PokemonApp = {};
}

PokemonApp.init = function () {
	// 3rd Party setup code here
	console.log("Pokemon App ONLINE!");
};

$(document).on("ready", function () {
	PokemonApp.init();
});