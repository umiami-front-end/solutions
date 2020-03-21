// Arrays

// Question 1
console.log("* Question 1 *");

var fruit = ["apple", "banana", "clementine"];
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);


// Question 2
console.log("* Question 2 *");

var vegetables = new Array("asparagus", "broccoli", "carrot");
console.log(vegetables[0]);
console.log(vegetables[1]);
console.log(vegetables[2]);


// Question 3
console.log("* Question 3 *");

var number = parseInt(Math.random() * 100);
var emptyArray = new Array(number);

console.log(emptyArray.length);  // How big is the array?
console.log(number);             // confirms the random number is the array length!


// Question 4
console.log("* Question 4 *");

console.log(numbers);
console.log(numbers.length);  // How many numbers are in the array?


// Question 5
console.log("* Question 5 *");

// How long is numbers now? We started at index 27 and removed 7 items
// from the array. (65 - 7 = 58)

var splicedArray = numbers.splice(27, 7);
console.log(numbers.length);

// What is the last number in the variable numbers?

var lastNumber = numbers[numbers.length - 1];
console.log(lastNumber);

// What numbers are in splicedArray?

console.log(splicedArray);


// Question 6
console.log("* Question 6 *");

var moreNumbers = [5, 7, 6, 8, 2, 1, 6, 8, 9, 0];
console.log(moreNumbers);


// Question 7
console.log("* Question 7 *");

var newNumbersArray = numbers.concat(moreNumbers);
console.log(newNumbersArray);


// Question 8
console.log("* Question 8 *");

newNumbersArray.reverse();

// How long is the newNumbersArray?

console.log(newNumbersArray.length);

// Remember, we spliced 7 numbers from the original numbers array. This
// left us with 58 numbers. Then we added 10 more. This brings us to 68.

// What is the index of the first appearance of the number 5?

document.write("<p>" + newNumbersArray.indexOf(5) + "</p>");

// What is the index of the last appearance of the number 5?

document.write("<p>" + newNumbersArray.lastIndexOf(5) + "</p>");  // 40


// Question 9
console.log("* Question 9 *");
console.log("Solution written to document.");

document.write("<p>" + animals + "</p>");


// Question 10
console.log("* Question 10 *");
console.log("Solution written to document.");

var topPets = [];


// Question 11
console.log("* Question 11 *");
console.log("Solution written to document.");

// Adding to the array with bracket notation.
topPets[0] = "fish";
topPets[1] = "cat";
topPets[2] = "dog";
topPets[3] = "elephant";

// Adding to array using .push()
topPets.push("giraffe");
topPets.push("alligator");
topPets.push("bat");
topPets.push("hippo");


// Question 12
console.log("* Question 12 *");
console.log("Solution written to document.");

document.write("<p>" + topPets + "</p>");


// Question 13
console.log("* Question 13 *");
console.log("Solution written to document.");

document.write("<p>" + veggies + "</p>");


// Question 14
console.log("* Question 14 *");
console.log("Solution written to document.");

var fewerVeggies = veggies.reverse().splice(1,1);

// .reverse() => ["eggplant", "date", "carrot", "banana", "apple"]
// .splice() => ["eggplant", "carrot", "banana", "apple"]

document.write("<p>" + veggies + "</p>");  // modified veggies


// Question 15
console.log("* Question 15 *");
console.log("Solution written to document.");

var newMessage = message.join(" ");  // turn the message into a string

document.write("<p>" + newMessage + "</p>");
document.write("<p>" + typeof newMessage + "</p>");


// Question 16
console.log("* Question 16 *");
console.log("Solution written to document.");

// Because the contents of threeNumbers and threeMoreNumbers are not
// specified in the instructions, you need to check this first. Calling
// each variable in the console would help you here to know how
// to construct the statement using the concat() method.

var sixNumbers = threeNumbers.concat(threeMoreNumbers).join(" - ");
document.write("<p>" + sixNumbers + "</p>");
