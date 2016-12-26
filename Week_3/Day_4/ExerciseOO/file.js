var Car = function(model, noise){
	this.model = model;
	this.noise = noise;
	this.wheels = 4;
};

Car.prototype.make_noise = function() {
	console.log(this.noise + "!!!");
}

var car1 = new Car("Mercedes", "Brum");

console.log(car1.make_noise());