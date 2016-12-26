var myApp = (function(){
	var visitors = 0;
	var myPublicObject = {};

	myPublicObject.visit = function(){
		visitors++;
	};

	myPublicObject.reset = function(){
		visitors = 0;
	};

	myPublicObject.sayVisits = function(){
		console.log(visitors);
	};

	return myPublicObject;
})();

for (var i = 0; i<50; i++){
	myApp.visit();	
}

myApp.sayVisits();