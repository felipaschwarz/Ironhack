var fs = require('fs');
var read = require('read');

//Register your name
options = {
    prompt: "What's your name?\n>"
}
function displayName (err, name){
    console.log("Your name is: " + name)
}
read(options, displayName);

//Set up Questions
var counter = 0;
var Question = function(text, answer, id) {
	this.text = text;
	this.answer = answer;
	
	this.id = counter;
	counter++;
};

//Add questions to q_aray
var q_array = []
q_array.push(new Question("What is Asterix best friend's name?", "Obelix"));
q_array.push(new Question("How many edges does a cube have?", "12"));
q_array.push(new Question("What is James Bond's secret agent number?", "007"));
q_array.push(new Question("What food is Winnie-the-Pooh's favourite?", "Hsoney"));

//Make Quiz
var Quiz = function(array){
	this.array = array;

	Quiz.ask_question = array.forEach (function(q) {
		var response = {prompt: q.text};
		read(response, Quiz.validate(response));
	});

	// Quiz.validate = function(response) {
	// 	if response == 
	// }
};

Quiz(q_array);