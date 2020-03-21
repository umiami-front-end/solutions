// Variables and Data Types

// Question 1
console.log("* Question 1 *");

var cats = 2;
console.log(cats);

cats = 3;
console.log(cats);

cats = "Flynn and Quorra";
console.log(cats);

cats = true;
console.log(cats);

var dogs = cats;
console.log(dogs);

// Variables are created using 'var' and a unique variable name. The
// variable stores a value. The variable's value can be changed.
// Variables can hold any data type. The contents of one variable can
// be assigned to other variables.


// Question 2
console.log("* Question 2 *");
const PHI = 1.618;
console.log(PHI);

// The following lines will return an error and prohibit the script
// from continuing:

// Invalid assignment to a constant:
// PHI = 3.14;

// Error: redeclaration of a constant
// var PHI = 3.14;


// Question 3
console.log("* Question 3 *");

console.log(typeof 3);
console.log(typeof "Hello!");
console.log(typeof true);
console.log(typeof 10.2);
console.log(typeof false);
console.log(typeof (2018 + "Miami Hurricanes"));


// Question 4
console.log("* Question 4 *");

console.log(1 + 2);
console.log(3 - 2);
console.log(4 * 5);
console.log(10 / 2);
console.log(10 % 3);


// Question 5
console.log("* Question 5 *");

console.log(0 - (-15));
console.log(8 - (-3) * (-2 - 6));
console.log((35 * 15 + 8) - 20 - 48);



// NOTE: For questions 6-8, I have changed the variable name so there
// is no overwriting of 'i'.

// Question 6
console.log("* Question 6 (Part I) *");

var i = 1;
while (i < 10) {
  console.log(i);
  i++;
}

console.log("* Question 6 (Part II) *");

var j = 1
while (j < 10) {
  console.log(j);
  j += 2;
}


// Question 7
console.log("* Question 7 (Part I) *");

var k = 10;
while (k > 0) {
  console.log(k);
  k--;
}

console.log("* Question 7 (Part II) *");

var n = 10;
while (n > 0) {
  console.log(n);
  n -= 3;
}


// Question 8
console.log("* Question 8 *");

var x = 4;
x = x * 2;
console.log(x);

var y = 4;
y *= 2;
console.log(y);


// Question 9
console.log("* Question 9 *");

console.log(true && false);
console.log(true || false);
console.log(true && true);
console.log(false || true);
console.log(!false);


// Question 10
console.log("* Question 10 *");

console.log((1 < 2) && (3 == 3));
console.log(("Hello" !== "World") || false);
console.log(!(2 > 4));



// Uncomment the code for questions 11-15.

// Question 11
console.log("* Question 11 *");

// var response = window.prompt("What is your name?")
// console.log("Hello, " + response);


// Question 12
console.log("* Question 12 *");

// var phrase = window.prompt("What would you like to say?");
// console.log(phrase.length);
// console.log("The phrase '" + phrase + "' is " + phrase.length + " characters.");


// Question 13
console.log("* Question 13 *");

// var value1 = window.prompt("Enter a number.");
// var value2 = window.prompt("Enter another number.");
// console.log(value1 + value2);

// The code above will return a string because input collected via
// prompt is a string. When we 'add' (concatenate) the values, it
// returns a string. Proof:

// console.log(typeof value1);
// console.log(typeof value2);

// We'll need to convert each of these values to a number before
// creating our calculator. Move on to No. 13.


// Question 14
console.log("* Question 14 *");

// var value1 = window.prompt("Enter a number.");
// var value2 = window.prompt("Enter another number.");
// var number1 = parseInt(value1);
// var number2 = parseInt(value2);

// parseInt will transform a string to a number -- as long as the
// character within the string is a number. If, say, we give parseInt
// a string like "A", it will return NaN (not a number).

// console.log(number1 + number2);


// Question 15
console.log("* Question 15 *");

// Now that we know how to change a string to a number, we can make
// our simple calculator work.

// var value1 = window.prompt("Enter a number.");
// var value2 = window.prompt("Enter another number.");
// var number1 = parseInt(value1);
// var number2 = parseInt(value2);

// console.log(number1 + number2);
// console.log(number1 - number2);
// console.log(number1 * number2);
// console.log(number1 / number2);
// console.log(number1 % number2);

// If you want to be thorough in showing your math:

// console.log(number1 + " + " + number2 + " = " + (number1 + number2));
// console.log(number1 + " - " + number2 + " = " + (number1 - number2));
// console.log(number1 + " * " + number2 + " = " + (number1 * number2));
// console.log(number1 + " / " + number2 + " = " + (number1 / number2));
// console.log(number1 + " % " + number2 + " = " + (number1 % number2));


// Question 16
console.log("* Question 16 and 17 *");
console.log("Please read the comments in code!");

// Some thoughts:

// It might be better to use parseFloat instead of parseInt in our
// program. A user may enter 100.5. If this is changed from a string
// to a number using parseInt, it will return the value 100. Proof:

// console.log(parseInt(100.5));

// So you may want to use parseFloat in your program because a user
// may want to calculate numbers with decimals. If your program is
// tailored to a certain kind of input you'll want to think which
// is the better option.

// For instance, if you are asking for something like precise
// measurements or money, parseFloat will be the better option; if
// you're looking for, say, a zip code, parseInt is better.


// Question 17

// Users aren't always smart. :> Even if you ask for a number for your
// calculator, they may give you something else. Like a letter. Or a
// blank space.

// When you ask a user for input, you can test to see if that input
// meets your requirements. If the test is true, you can go ahead and
// run your script. If you receive input other than a number, you would
// explain to the user they made a mistake and prompt them again for
// the correct type of input.

// For instance:

// Please enter a number:
// User: A
// Sorry, 'A' is not a number. Please enter a number.
// User: <blank space>
// Sorry, ' ' is not a number. Please enter a number.
// User: 100
// <script runs>

// We will learn how to do this in code eventually...

// Something to consider: There are times where a user will give you
// valid input, but their way of providing that input is varied. Think
// of how people write down a phone number. Some examples:

// 305-555-1234
// (305) 555-1234
// +1 305.555.1234

// These are all legitimate and valid. But we may have to write code
// which standardizes the format in which we take a number. So when
// writing code which may take different inputs, you need to consider
// when the input is wrong (i.e. giving a letter to a calculator) and
// when the input is varied based on a users stylistic preferences.
// You never want to force a user into a specific style; it's up to us
// to create a smooth experience. :)
