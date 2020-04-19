// nyan-cat.js

// This exercise can be accomplished in one of two ways:

// 1. Apply an event listener to every button which then adds/subtracts
//    pixels based on the direction NyanCat should move.

// 2. Apply an event listener to the form and use event delegation to
//    determine which button was clicked, then pass it onto a function
//    which handles adding/subtracting pixels.

// The solution for this uses the second method.


var controlForm = document.querySelector("form");
var nyanCat = document.querySelector("#box");

// We need to know where Nyan Cat starts. This mirrors what is set in
// the style sheet. NyanCat is 100px from the top, 0 from the left.

var topVal = 100;
var leftVal = 0;

// Rather than apply an event listener to every button, use event
// delegation to determine which button was clicked, then pass the
// id value onto a function which checks it against a switch-case
// statement. When there is a match, apply the movement (or reset)!

function moveDirection(dir) {
	switch(dir) {
		case "top":
			topVal += -50;
			nyanCat.style.top = topVal + "px";
			break;

		case "bottom":
		  topVal += 50;
		  nyanCat.style.top = topVal + "px";
		  break;

		case "left":
		  leftVal += -50;
		  nyanCat.style.left = leftVal + "px";
			break;

		case "right":
	  	leftVal += 50;
	  	nyanCat.style.left = leftVal + "px";
			break;

		case "reset":
		  nyanCat.style.top = "100px";
		  nyanCat.style.left = "0";
			break;

		default:
		  console.log("No movement.");
	}
}

controlForm.addEventListener("click", function(e) {
	event.preventDefault();
	moveDirection(e.target.id);
},false)
