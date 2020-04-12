// web-page-builder.js

// get the nodes we will append to
var headEl = document.querySelector("head");
var bodyEl = document.querySelector("body");


// META TAG
// create the meta tag
var metaEl = document.createElement("meta");

// set attributes
metaEl.setAttribute("name", "author");
metaEl.setAttribute("content", "Erin Brown");

// append to head
headEl.appendChild(metaEl);


// TITLE TAG

// create the title tag
var titleEl = document.createElement("title");

// create the text node
var titleText = document.createTextNode("Working with the DOM");

// combine the tag and text node
titleEl.appendChild(titleText);

// append to head
headEl.appendChild(titleEl);



// H1 TAG

// create the h1 tag
var h1El = document.createElement("h1");

// create the text node
var h1Text = document.createTextNode("Working with the DOM");

// combine the tag and text node
h1El.appendChild(h1Text);

// Did we really have to create a new text node? No! We could have
// re-used the variable 'titleText' since it contains the same text:

// h1El.appendChild(titleText);

// append to body
bodyEl.appendChild(h1El);


// P TAG

// create the p tag
var pEl = document.createElement("p");

// create the text node
var pText = document.createTextNode("This is so much fun!");

// combine the tag and text node
pEl.appendChild(pText);

// append to body
bodyEl.appendChild(pEl);



// LIST

// create the array
var array = ["HTML", "CSS", "JavaScript"];

// create the ul
var ulEl = document.createElement("ul");

// iterate over the array, putting each item in a li and appending
// it to ul
function createList(array) {
  for (var i = 0; i < array.length; i++) {
		var liEl = document.createElement("li");
		var liText = document.createTextNode(array[i]);
		liEl.appendChild(liText);
		ulEl.appendChild(liEl);
	}

  // remember to return a value from the function!
	return ulEl;

}

// create the list using the function
var completeList = createList(array);

// append the list to body
bodyEl.appendChild(completeList);
