// Functions
// Question 2 - Calculator

// Uncomment the code as needed.


function add(value1, value2) {
  var sum = parseInt(value1) + parseInt(value2);
  return "The sum of " + value1 + " and " + value2 + " is " + sum + ".";
}

function subtract(value1, value2) {
  var difference = parseInt(value1) - parseInt(value2);
  return "The difference of " + value1 + " and " + value2 + " is " + difference + ".";
}


// Variation 1

// var input1 = window.prompt("Enter a number:");
// var input2 = window.prompt("Enter another number:");
//
// var sumResult = add(input1, input2);
// var differenceResult = subtract(input1, input2);
//
// console.log(sumResult);
// console.log(differenceResult);


// A note: We already know input is going to be given to us as a string
// so we might as well make parsing the string into a number as part of
// our function since it will *always* need to be done.
