//function statement

function greet() {
	console.log('hi');
}

greet();

// function are first-class
function logGreenting(fn) {
	fn();
}

logGreenting(greet);


// function expression
var greetMe = function() {
	console.log("Hi Rafael");
}

greetMe();

logGreenting(greetMe);