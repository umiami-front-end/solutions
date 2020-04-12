# Read Me

## JavaScript: Functions

### Objectives

- Practice creating and calling functions


### Resources

**Mozilla Developers Network**
  - [Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
  - [Build Your Own Function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)


### Instructions

The following exercises will require you to enter code into a file which is included in an html file. (You *could* type all this into the console, but it will probably be very frustrating).

Template files have been prepared for you. You may want to make copies of `web-template.html` and `script-template.js`, renaming them to reflect the script you are working on at any given time. (For instance, if you are working on a script about cars, you might rename the files `cars.html` and `cars.js`.)

1. Create a function called `sayHello` which causes an alert to pop up and say "Hello!". Call the `sayHello` function from both your script and the console.

  Modify `sayHello` so it prompts the user for his/her name. Append the user input to your "Hello!" string. Again, call the function from both the script and console.

  Modifying the script to meet the following conditions:

  - The variable which holds the user input is global, then passed into `sayHello` as an argument.

  - Instead of calling `sayHello` from the script or console, turn it into an immediately invoked function expression ('iffy') so a user is prompted for information and greeted as soon as the page loads.

2. Let's rebuild arithmetic operators for addition and subtraction in functions. But let's make them more helpful.

  Have each function accept two arguments. Return a string which says (for example): "The sum of 2 and 2 is 4."

  Call these functions from your script or the console.

  Modify the script so it prompts the user for two values. (Remember, `prompt` sees all input as a string, so you will need to use either `parseInt()` or `parseFloat()` for the calculations to work.)

3. Capitalize!

  Remember when we used the `toUpperCase` and `toLowerCase` functions?  Those worked. Remember `capitalize`? Yeah, that was not supposed to work.

  Build a function which takes a string and capitalizes the first letter. For instance, if a user provides the string, "hello, world!", it should return "Hello, world!"

  For this you will need to look at built-in string methods to parse, modify and reconstruct your string for output.

4. Pie party!

  Write a function which prompts a user for the number of party guests and the number of pies. Assume each pie can serve six (6) slices. Ask the user for input: "How many people?" "How many pies?"

  Return output as follows: "X people with Y pies. Each person gets Z pieces of pie. There are N leftover slices of pie." (Where X, Y, Z and N are numbers, obviously.)

5. MAD LIBS!

  If you visit the official web site (http://www.madlibs.com/) look under '[printables](http://www.madlibs.com/printables/)' for more detailed options. Vacation Fun, for example, would require a lot of input! :)

  Create a function which builds an object to hold the data for our Mad Libs game. You'll want to create a new instance (i.e. `var game = new MadLib();`) every time you want to play a new game.

  Require properties for a noun, verb, adjective and adverb. Create a method inside the object which concatenates these values and returns a funny sentence with all the properties.

  *BONUS:* Modify the game so it:

  - includes more properties for the user to enter (and are then included in the sentence/story).

  - includes multiple outputs. Find a way to ask a user to select which output they would like to read (i.e. "one, two, three or four?"), or generate a random number which decides the output.

  *Hint:* Remember, `Math.random()` generates numbers between 0 and 1, so you will have to multiply by 100, then limit the random number to a given range (the number of output options you have).
