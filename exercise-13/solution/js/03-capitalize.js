// Functions
// Question 3 - Capitalize

// Uncomment the code as needed.


// Variation 1

// This first solution does not use method chaining. Instead we break
// apart every bit of the string we'll need and modify it
// accordingly.

// 1. Get the first letter of the string using splice (index 0, to 1)
// 2. Transform the first letter to upper uppercase
// 3. Get the rest of the string using splice
// 4. Concatenate the capitalized letter with the rest of the string

function capitalize(string) {
  var firstLetter = string.slice(0,1);
  var firstLetterCaps = firstLetter.toUpperCase();
  var restOfString = string.slice(1); // returns everything after index 1

  return firstLetterCaps + restOfString;
}


// Variation 2

// The following employs method chaining to extract the first letter
// then transforms it to its uppercase form. We get the rest of the
// string by slicing everything from index 1 on.

// function capitalize(string) {
//   var firstLetter = string.charAt(0).toUpperCase();
//   var restOfString = string.slice(1);
//   return firstLetter + restOfString;
// }


// Variation 3

// This is a ridiculous, non-practical solution; but you can see it
// still works.

// function capitalize(string) {
//   var firstLetter = string.charCodeAt(0) - 32;
//   var upperCaseChar = String.fromCharCode(firstLetter);
//   var restOfString = string.slice(1);
//   return upperCaseChar + restOfString;
// }

// We're finding the ASCII character code of the first letter.
// Subtracting 32 from any lowercase ASCII character code will result
// in the uppercase version of the letter. (i.e. a = 97; A = 65 ...
// 97 - 65 = 32). We then transform the ASCII character code to its
// letter form. (Yes, ridiculous.)


// Does it work? :)

console.log(capitalize("hello, world!"));
