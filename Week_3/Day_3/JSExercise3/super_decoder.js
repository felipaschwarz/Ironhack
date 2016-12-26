var decoder = require("./decoder.js")

function super_decoder(sentence, type, forwards) {
	var forwards = forwards || false;
	var words = [];
	
	if ( type === "every" ){
		words = sentence.split(" ");
	}
	else if (type === "even"){
		words = sentence.split(" ").filter(function(word, index) { return index % 2 === 0});
	}
	else if (type === "odd"){
		words = sentence.split(" ").filter(function(word, index) { return index % 2 !== 0});
	}

	if (forwards) {
		return decoder(words);
	}
	else {
		return decoder(words.reverse());
	}
}

var sentence, text;

sentence = "Fill the proper tank for the cow"

text = super_decoder(sentence, "even", "forward");
console.log(text);