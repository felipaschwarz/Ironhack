function averageColon(string) {
	var array = string.split(':');
	var sum = array.reduce (function (a, b) { return parseInt(a) + parseInt(b)});
	return sum / array.length;
};

var numbers = '80:70:90:100';
console.log(averageColon(numbers) === 85);

// ==> true