// p5vanilla.js

// select our elements to interact with
var bodyEl = document.querySelector("body");
var divEl = document.querySelector("#box");

// create an array of colors
var colors = ["red","orange","yellow","green","blue","rebeccaPurple"];

// initialize a counter
var i = 0;


// each time the user clicks on 'body'...
bodyEl.addEventListener("click", function() {

  // apply the color in the array based on the counter
	divEl.style.backgroundColor = colors[i];

	// increment the counter
	i++;

  // test the counter; if the counter has reached the end of the array,
	// reset it to zero, sending it back to the start
  if (i == colors.length) {
		i = 0;
	}
})
