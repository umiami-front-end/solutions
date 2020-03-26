// control-flow.js


// Question 1

var truthy = true;

if (truthy == true) {  // could also be just (truthy) -- try it out!
	console.log("It's true!")
}

// Question 2

if (truthy == false) {  // could also be truthy != true
  console.log("You wont see me!");
}


// Question 3

var taskOne = 1;
var taskTwo = 2;
var messageOne = "I'm message one!";
var messageTwo = "I'm message two!";

if (taskOne == 1) {
	console.log(messageOne);
} else {
	console.log(messageTwo);
}

if (taskTwo == 1) {
	console.log(messageOne);
} else {
	console.log(messageTwo);
}


// Question 4

var now = new Date();
var currentHour = now.getHours();

console.log("Current Hour: " + currentHour);

if (currentHour <= 12) {
	console.log("Good morning!");
} else if (currentHour >= 13 && currentHour <= 17) {
	console.log("Good afternoon!");
} else if (currentHour >= 18 && currentHour <= 20) {
	console.log("Good evening!");
} else {
	console.log("Good night!");
}

// The getHours() method only returns values 0-23. It's possible to set
// the last "else" to be an "else if" that tests to see if the value is
// greater than or equal to 20, but this could be seen as redundant.


// Question 5

var userLang = prompt("What language would you like to hear a cat's 'meow' in?");
var lang = userLang.toLowerCase();

switch (lang) {

	case 'chinese':
	  console.log("Mao!");
		break;

	case 'finnish':
	  console.log("Kurnau!");
		break;

	case 'french':
	  console.log("Miaou!");
		break;

	case 'japanese':
	  console.log("Nyan!");
		break;

	case 'norwegian':
	  console.log("Mjau!");
		break;

	default:
	  console.log("I don't know that language!");
}
