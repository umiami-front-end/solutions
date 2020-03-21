# Read Me

## JavaScript: Variables & Data Types

### Objectives

- Create and use variables and constants
- Operations with numbers, strings and booleans
- Include scripts in HTML files

### Resources

**Mozilla Developers Network**

- JavaScript
  - [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
  - [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  - [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- Web APIs
  - [Console](https://developer.mozilla.org/en-US/docs/Web/API/Console_API)
  - [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
  - [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)


### Instructions

Open your Console in Firefox (or Google Chrome) and work through the following examples. If your console becomes too cluttered remember you can type `clear();` for a fresh start.

For each step, type in the command. Then go through the modifications below.

Write down your findings during this exploration for future reference.

If a solution or answer to a question eludes you, ask!

(Files have been provided to write code in. They are technically not necessary for steps 1-5, but perhaps you can give including these bits of code in the html file or the script file.)

**Never copy and paste code; always type it in by hand.**

---

1. `var cats = 2;` Then type `cats;`.

  (We have declared a variable, then called the variable.)

  Type `cats = 3;`. Do not include `var` this time. Then type `cats;`.

  Type `cats = "Flynn and Quorra";`. Type `cats;` again.

  Type `cats = true;`. Type `cats;` again.

  Type `var dogs = cats;` Type `dogs;`. Then type `cats;`.

  Can you explain a few qualities of variables? What do they do? Are they permanent? Can they be changed? Can they be assigned to other variables?

2. `const PHI = 1.618;` Then type `PHI;`.

   (We've declared a constant, then called that constant.)

   Type `PHI = 3.14;` Do not include `const` this time.

   What happened?

   Type `var PHI = 1.618;`.

   Now what? What do these last two steps tell you about defining, using and re-defining constants?

3. You *should* know most of these data types just by looking at them, but let's get into the habit of becoming familiar with `typeof` (which is an operator we will likely use for debugging in the future). Write down the results of each entry.

  `typeof 3;`

  `typeof "Hello!";`

  `typeof true;`

  `typeof 10.2;`

  `typeof false;`

  `typeof (2018 + "Miami Hurricanes");`

4. Let's do basic math. Construct a statement using each of the basic arithmetic operators (addition, subtraction, multiplication, modulo). It's just like using a calculator. :)

5. Let's practice using parentheses. Evaluate the following in the console:

  `0 - (-15);`

  `8 - (-3) * (-2 - 6);`

  `(35 * 15 + 8) - 20 - 48;`

  (Yeah, yeah, I know. Enough math for now.)

6. We have not yet learned about loops, but let's use our knowledge to make one work.

  Use the `my-script.html` template included in this repository for this exercise. If you prefer to work in the console, remember to type 'shift-return' to move on to the next line without telling the REPL to execute the code.

  Add the increment operator to `i` in the loop below.

  ```javascript
  var i = 1;
  while (i < 10) {
    console.log(i);
    i  // add the increment operator to this i!
  }
  ```

  Now, change the operator on `i` to an 'add and assign' operator so the count increases by two (2) each time.

7. Let's change the loop so it counts down. You may modify the `my-script.html` template file you used from this repo (or create a copy to start fresh) or enter the code in the console.

  Add the decrement operator to `i` in the loop below.

  ```javascript
  var i = 10;
  while (i > 0) {
    console.log(i);
    i  // add the decrement operator to this i!
  }
  ```

  Now, change the operator on `i` to a 'subtract and assign' operator so the count decreases by three (3) each time.

8. There are two ways one can 'calculate and assign'. Try each of the examples below, which use the 'multiplication and assign' operator.

  ```javascript
  var i = 4;
  i = i * 2;

  var j = 4;
  j *= 2;
  ```

  Which do *you* find more comfortable to use? Remember, both are acceptable.

9. True or False, Part I

  Truth tables are one of those things you just have to memorize. Before entering each of the following, write down what you believe the console will return: `true` or `false`?

  `true && false;`

  `true || false;`

  `true && true;`

  `false || true;`

  `!false;`

  Got all of 'em right? Yes? You should still study your truth tables! :)

10. True or False, Part II

  Let's mix up data types and determine whether our statements are true or false. Again, before entering each of the following, write down what you believe the console will return: `true` or `false`?

  `(1 < 2) && (3 == 3);`

  `("Hello" !== "World") || false;`

  `!(2 > 4);`

11. Say Hello!

  You may modify the `my-script.html` template file you used from this repo or create a copy to start fresh.

  Ask a user for his/her name, then use the input to say "Hello, `name`!".

  (*Hint:* Use the `window` 'tools' you learned in `exercise-06` to gather the input. Store the input in a variable. Print the message to the console.)

  **Example:**<br/>
  What is your name? (Flynn)<br/>
  `Hello, Flynn!`

12. Letter count

  You may modify the `my-script.html` template file you used from this repo or create a copy to start fresh.

  Using your knowledge of `window` tools, ask a user for a phrase. Then use the input to tell the user how many characters are in the phrase.

  **Example:**<br/>
  What would you like to say? (Hello, world!)<br/>
  `13`

  Can you modify your code to include the user's phrase as part of the output?

  **Example:**</br>
  What would you like to say? (Hello, world!)<br/>
  `'Hello, world!' has 13 characters.`

  (We have not covered this yet, but may have figured it out by the time you work through this exercise!)

13. More Math! ([Sike!](https://www.urbandictionary.com/define.php?term=sike))

  Using your knowledge of `window` tools, ask a user for two numbers. You will need to ask the user twice. Add the numbers and print the result to the console.

  Actually, this should not work. Why not? Is it possible the values being collected are not recognized as numbers? Use `typeof` to find out.

14. Changing Types

  Read about [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) and [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat).

  Think about what kind of data type  `window.prompt` returned when a user entered a number. How might you use `parseInt()` and `parseFloat()` to make your addition program in Step 12 work?

15. A Better Calculator

  Now that you know how to change input from `window.prompt()` into numbers (integers and floating point (a.k.a. decimal) numbers), ask the user for two numbers. Use the input to display the result for addition, subtraction, multiplication, division and modulo.

  **Example:**<br/>
  Enter a number: (100)<br/>
  Enter another number: (10)<br/>
  `100 + 10 = 110`<br/>
  `100 - 10 = 90`<br/>
  `100 * 10 = 1000`<br/>
  `100 / 10 = 10`<br/>
  `100 % 10 = 0`

16. Thinking Ahead

  What if a user enters a floating point number and you used `parseInt()`? Should you use `parseFloat()` instead?

  Do you need to communicate to the user you only want integers (or floats)? Should you force the user into one option?

  Can you think of a couple situations where you might require a user to enter an integer (i.e. a zip code)? How about a float (i.e. a precise measurement)?

  We have not yet learned how to implement such a feature in code, but we will.

  *Write out a solution in plain English. Don't worry about code yet.* We will get to the code soon enough!

17. Thinking Ahead II

  Even if we ask a user to enter two numbers, (s)he may enter something other than a number.

  What if you are given a letter instead of a number? What about an empty response? How might you respond to the user?

  *Write out a solution in plain English. Don't worry about code yet.* We will get to the code soon enough!
