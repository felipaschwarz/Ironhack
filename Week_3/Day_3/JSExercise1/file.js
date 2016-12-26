var exampleArray = [2, -5, 10, 5, 4, -10, 0]

var results = process(exampleArray);

function process(data){
	var positions = [];
	data.forEach (function (a, i) {
		data.forEach (function (b, j) {
			if (j <= i) {
				if (a + b === 0) {positions.push(i + "," + j)}
			}
		});
	});

	for (var k = 0; k < positions.length; k ++){
		console.log("Sumando estos numeros el resultado es 0: " + positions[k])
	}
}

// for (var j = 0; j < exampleArray.length; j-i+1) {
// 			if (exampleArray[i] + exampleArray[j] === 0) {positions.push(i + "," + j-i)}
// }