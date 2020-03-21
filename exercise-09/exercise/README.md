# Read Me

## JavaScript: Arrays

### Objectives

- Create arrays
- Use built-in methods to work with arrays

### Resources

**Mozilla Developers Network**

- JavaScript
  - [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


### Instructions

In `arrays.html` there is a link to `arrays.js`. **DO NOT** modify the contents of `arrays.js`. If you would like to see what is in any given array, use `console.log(arrayName)` where `arrayName` is the name of the array specified in the task.

You will need to reference the properties available to you in [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to complete this exercise. (Prepare to explore!)

1. Create a variable called `fruit` to store an array. Use an array literal to build an array of the following strings: apple, banana, clementine.

  Use bracket notation to call each of these items individually in the console.

2. Create a variable called `vegetables` to store a new array. Use an array constructor to build an array of the following strings: asparagus, broccoli, carrot.

  Use bracket notation to call each of these items individually in the console.

3. Enter the following into the console: `var number = parseInt(Math.random() * 100);` DO NOT peek at what `number` contains! (If you cheat, re-enter the statement.)

  Create a variable called `emptyArray` to store a new array. Using an array constructor, pass in `number` as the value to create an empty array with the unknown number of spaces.

  What **array property** can you use to determine how big the array is?  Write this to the console. Then write the value of `number` to the console.

4. The variable `numbers` stores many numbers in an array. Use an Array property to determine how many numbers are in this array. Use `document.write()` to display the answer.

5. Add the following line to your code:

  `var splicedArray = array.splice(27, 7);`

  How long is the `numbers` array now? What is the last number in the `numbers` array? What numbers are in `splicedArray`? Use `document.write()` to display the answers.

6. Create a new array stored in a variable `moreNumbers`. You may use either an array literal or an array constructor. The items in the array should be as follows:

  `5, 7, 6, 8, 2, 1, 6, 8, 9, 0`

  After creating the `moreNumbers` array, confirm it exists in the console.

7. Use the `concat` method to add the `moreNumbers` array to the `numbers` array. Be sure to store it in a new variable as `concat` does not permanently modify the array.

8. Add the following line to your code:

  `numbers.reverse()`

  How long is the `numbers` array? What is the index of the first appearance of the number 5?  What is the index of the last appearance of the number 5? Use `document.write()` to display the answers.

9. The variable `animals` contains a list of animals. Display this list using `document.write().`

10. Create a new variable, `topPets` to store a new order:

  `fish, cat, dog, elephant, giraffe, alligator, bat`

11. For the first four animals, use bracket notation (i.e. `animals[0]`). For the remaining animals, use the `push` method.

12. Display `topPets` using `document.write()`;

13. The variable `veggies` contains a list of vegetables. Display this list using `document.write()`.

14. Use two methods to transform the array so its order becomes:

  `eggplant, carrot, banana, apple`

  Store this sorted array in the variable `fewerVeggies` and display it using `document.write()`.

15. Use a method to turn the array held in variable `message` into a string. Store the result in a variable `newMessage`. Display `newMessage` using `document.write()`. Then, use the `typeof` keyword in a `document.write()` statement to prove `newMessage` is a string.

16. Given two arrays, `threeMoreNumbers` and `threeNumbers`, write a statement using a single method to combine these two arrays into a single array. Then use another method to generate the output `1 - 2 - 3 - 4 - 5 - 6`. Print the result to the page using `document.write()`.
