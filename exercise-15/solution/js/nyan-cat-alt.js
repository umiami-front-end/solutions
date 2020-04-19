// nyan-cat-alt.js

// This is the longer version...

var upEl = document.querySelector("#top");
var downEl = document.querySelector("#bottom");
var leftEl = document.querySelector("#left");
var rightEl = document.querySelector("#right");

var nyanCat = document.querySelector("#box");

// We need to know where Nyan Cat starts. This mirrors what is set in
// the style sheet. NyanCat is 100px from the top, 0 from the left.

var topVal = 100;
var leftVal = 0;

// For each direction...
// 1. Add an event listener
// 2. Prevent the page from refreshing
// 3. Add/subtract 50px from the vertical/horizontal variable
// 4. Apply the new value to the vertical/horizontal property
// 4a. Be sure to append "px", otherwise the value is invalid for top/left.

upEl.addEventListener("click", function() {
	event.preventDefault();
	topVal += -50;
	nyanCat.style.top = topVal + "px";
},false);

downEl.addEventListener("click", function() {
	event.preventDefault();
	topVal += 50;
	nyanCat.style.top = topVal + "px";
},false);

leftEl.addEventListener("click", function() {
	event.preventDefault();
	leftVal += -50;
	nyanCat.style.left = leftVal + "px";
},false);

rightEl.addEventListener("click", function() {
	event.preventDefault();
	leftVal += 50;
	nyanCat.style.left = leftVal + "px";
},false);


// Reset
var resetEl = document.querySelector("#reset");

// This is similar to our directional buttons, except we only need to
// set the values to what our defaults were.
resetEl.addEventListener("click", function() {
	event.preventDefault();
	nyanCat.style.top = "100px";
	nyanCat.style.left = "0";
},false);
