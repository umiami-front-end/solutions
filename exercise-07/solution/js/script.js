// 01 Console Basics

// 1.

console.log("Hello!");
console.log("Hello, world!");
console.log("Hello, 'big' world!");
console.log("Hello, \"big\" world!");  // review 'escape characters'


// 2.

document.write("<p>Hello!</p>");
document.write("<p>Hello, world!</p>");
document.write("<p>Hack\\Slash!</p>");

console.log('Hack\\Slash!');
console.log("Tab!\tTab!\tTab!")
console.log("These\nwords\nare\non\ndifferent\nlines.");


// 3.

// enter the following into the console to see what is generated
// or uncomment each line one at a time! (Alert/confirm/prompt
// windows can be annoying.)

// window.alert("Hello!");

// window.confirm("Do you like JavaScript?");
  // confirm returns true/false

// window.prompt("What is your favorite programming language?");
  // prompt returns a string


// 4.

console.log("Basic Math");
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(3 % 2);


// 5.

console.log("Math!");
console.log(Math.sqrt(25));
console.log(Math.PI);  // Pi is a constant
console.log(Math.abs(-5)); // absolute value
console.log(Math.round(4.56));  // rounding
console.log(Math.round(Math.PI));  // Pi, rounded
console.log(Math.random()); // random number between 0 and 1


// 6.

console.log("hello".toUpperCase());
console.log("HELLO".toLowerCase());
// there is no .capitalize() method! We would have to build it on
// our own... but soon we will know the tools to do so!


// 7.

console.log("car".replace("r", "t"));
console.log("sass".replace("s", "b"));
console.log("   Hello   ".trim());
console.log("Hello, world!".length); // length is a property, not a method
