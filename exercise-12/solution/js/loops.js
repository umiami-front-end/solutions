// loops.js


// Question 1

document.write("<h2>Question 1: Count</h2>");

for(var i = 1; i <= 50; i++) {
	document.write("<p>" + i + "</p>")
}


// Question 2
document.write("<h2>Question 2: Countdown</h2>");

for(var j = 50; j > 0; j--) {
	document.write("<p>" + j + "</p>");
}


// Question 3

document.write("<h2>Question 3: Odd Numbers</h2>");

for(var k = 1; k <= 50; k += 2) {
	document.write("<p>" + k + "</p>");
}


// Question 4

document.write("<h2>Question 4: Do-While</h2>");

var l = 0;
do {
  document.write("Hello! I will appear just once!");
	l++;
} while (l < 1)


// Question 5

var groceryList = prompt("Enter a comma-separated list of groceries").split(",");

document.write("<h2>Question 5: Grocery List</h2>");
document.write("<ul>"); // because our data is a list!

var counter = 0; // our counter

while(counter < groceryList.length) {
  document.write("<li>" + groceryList[counter] + "</li>");
	counter++;
}

document.write("</ul>");


// Question 6

// There are a few solutions for this question. Below is just one
// approach: First test to see if the list is empty. If true, return
// the "Empty list!" message. Otherwise, iterate through the array
// and print the list items to an unordered list in HTML.

// The following is commented out so it does not interfere with the
// example above.

// var groceryList = prompt("Enter a comma-separated list of groceries.").split(",");
// console.log(groceryList); // exactly what does an empty response return?
//
// document.write("<h2>Question 6: Empty List!</h2>");
// var counter = 0;
//
// if(groceryList[0] == "" && groceryList.length == 1) {
// 	document.write("<p>Empty List!</p>");
// } else {
// 	document.write("<ul>");
//
// 	while(counter < groceryList.length) {
// 		if(groceryList[counter] != "") {
//   	  document.write("<li>" + groceryList[counter] + "</li>");
// 		}
// 		counter++;
// 	}
//
// 	document.write("</ul>");
// }


// Before we write the test on line 70, it's important to figure out
// what an empty response in a promot returns. It returns an array
// with an empty string as the first item.

// This alone may not be the most robust solution. What if a user
// gives input like ", apple"? The first item will be an empty string
// and the test will return true, even though there is content in
// the second item! This is why we also test to make sure the array
// length holds exactly one value.

// But what if we to get a user who trolls us with ", apple"? Do we
// want to include that blank in our list? Probably not. Another
// test on line 82 will filter out any items that equal an empty
// string!
