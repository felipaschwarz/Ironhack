var Luis = function(hair, height, age, weight){
	this.hair = hair;
	this.height = height;
	this.age = age;
	this.weight = weight
};

Luis.prototype.chorrada = function() {
	console.log("Visca el Barsa");
	return "!!!"
}

var Typ1 = new Luis("grey", "1,80m", "80", "80Kg");

console.log(Typ1.chorrada());
console.log(Typ1.hair);