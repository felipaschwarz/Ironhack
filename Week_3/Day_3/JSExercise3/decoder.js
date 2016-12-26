module.exports = decoder;

function decoder(words) {
	var index = 0;
	var secretMessage = "";
	for(var i = 0; i <= words.length; i++) {
		index = (i) % 5;
		secretMessage += words[i].charAt(index); // oder [index] 
	}
	return secretMessage;
}

var words, words2, message;

words = [
	"dead",
	"bygone",
	"landing",
	"cheaply",
	"assumed",
	"incorrectly",
	"attention",
	"agent",
	]

words2 = [
	"january",
	"lacks",
	"caveats",
	"hazardous",
	"DOORS",
	"crying",
	"arrogantly",
	"climate",
	"proponent",
	"rebuttal",
]

// message = decoder(words2);
// console.log(message);