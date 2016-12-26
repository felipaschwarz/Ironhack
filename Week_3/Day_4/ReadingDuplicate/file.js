var fs = require('fs');

function print(error, content) {
	var array = content.split(',');
	var filtered = array.filter (function (v, i, a) { return a.indexOf(v) == i });
	fs.writeFile('result.txt', filtered);
};

fs.readFile('file.txt', 'utf8', print)