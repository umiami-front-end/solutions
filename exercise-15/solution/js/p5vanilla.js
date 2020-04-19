// p5vanilla.js

// select our elements to interact with
var bodyEl = document.querySelector("body");
var divEl = document.querySelector("#box");


// each time the user clicks on 'body'...
bodyEl.addEventListener("click", function() {

	// Even if you provide hex values or color names, the browser stores
	// color as an rgb value!

  // if the div is invisible (white)...
	if (divEl.style.backgroundColor == "rgb(255, 255, 255)") {
		// change the background color to be black
		divEl.style.backgroundColor = "#000";
	} else {
		// otherwise, change the background color to white
		divEl.style.backgroundColor = "#fff";
	}

	// Another option would be to initially set the background color to
	// 'transparent', which is a lot easier to test for! However, with
	// this exercise I wanted you to explore properties in the document
	// object model using the console. :)
})
