var fs = require('fs')

function print(error, content) {
	var array = content.split(':');
	var sum = array.reduce(function(a, b){ return parseInt(a) + parseInt(b)});
	var avg = sum / array.length;
	fs.writeFile('result.txt', avg);
}

fs.readFile('file.txt', 'utf8', print)