# Read Me

## JavaScript: Loops

### Objectives

- Use for, while and do-while loops

### Resources

**Mozilla Developers Network**

- JavaScript
  - [Statements and Declarations: Iterations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Iterations)


### Instructions

Include your answers within the `script` tags of `loops.html` or in the `loops.js` file provided.

As you include each loop, you will either need to reset the counter variable (`i`) or use a completely new counter variable each time (i.e. `i`, `j`, `k`, etc.).

**Beware infinite loops!**

1. Write a `for` loop which counts up from 1 to 50 and displays the results using `document.write()`.

2. Write a `for` loop which counts down from 50 to 1 and displays the results using `document.write()`.

3. Write a `for` loop which displays odd numbers from 1 to 50 and displays the results using `document.write()`. You may choose whether it counts up or down.

4. Write a `do-while` loop which executes once to display a greeting using `document.write()` once and no more.

5. Within `loops.js` is a line which prompts a user for a comma-separated list of grocery items. Uncomment this line. It stores the result in the variable `groceryList`. The list is then transformed into an array.

Write a loop which iterates over `groceryList`, and writes an ordered list to the page using `document.write()`. If the user does not enter any data, nothing should be displayed.

6. Using the `groceryList` variable from Task 5, write a loop which will iterate over the array and write an unordered list to the page using `document.write()`. However, if the user enters nothing, the script should display one list item which reads "Empty List". (You may need to implement an instance of control flow in this task.)

7. This one is tricky, but worth figuring out! It will be beneficial in the long-run!

Remember the big object of Pixar Films you built in `exercise-10`? Copy that `objects.js` file into your `js` folder for this exercise. Open the `pixar-films.html` file. Write a script incorporating loops inside the `script` tags which iterates over the `pixarFilms` object and lists each film title and the year it came out. For example:

- Toy Story: 1995
- A Bug's Life: 1998
...

Remember, iterating over and object is a little different than iterating over an array.

(If you want to clean up the page, feel free to delete the lines of code related to answering the questions posed in `exercise-10`.)
