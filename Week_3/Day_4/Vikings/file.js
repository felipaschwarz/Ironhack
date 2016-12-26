var Viking = function (name, health, strength) {
	this.name = name;
	this.health = health;
	this.strength = strength;
};

var Pitfight = function (f1, f2, turns) {
	this.turns = turns

	while (turns > 0 && f1.health > f2.strength && f2.health > f1.strength) {
	f1.health -= f2.strength * Math.round(Math.random() * 10) / 10;
	f2.health -= f1.strength * Math.round(Math.random() * 10) / 10;
	f1.strength += f1.strength * 0.1;
	f2.strength += f2.strength * 0.1;
	console.log(f1);
	console.log(f2);
	turns--;
	}

};


var viking_clan = []

var v1 = new Viking("Nikos", 420, 60);
var v2 = new Viking("Vincent", 350, 100);
var v3 = new Viking("Felipa", 500, 55);

var pit = new Pitfight(v1, v2, 10);

console.log(v1.health);