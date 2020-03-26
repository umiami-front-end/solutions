# Read Me

## JavaScript: Control Flow

### Objectives

- Use if, if-else, switch-case statements

### Resources

**Mozilla Developers Network**

- JavaScript
  - [Statements and Declarations: Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Control_flow)


### Instructions

Include your answers within the `script` tags of `control-flow.html` or in the `control-flow.js` file provided.

1. Create a variable and give it a value. Write an `if` statement using the variable where a conditional evaluates to `true` and displays a message of your choice.

2. Write another `if` statement testing the same variable you created in step 1, but evaluates to `false` and returns a different message of your choice.

3. Create two variables to test (i.e.`taskOne`, `taskTwo`) and two which contain messages (i.e. `messageOne` and `messageTwo`). `messageOne` should be the code which is executed when the condition is `true`. `messageTwo` should be the code which executes when the condition is `false`. Write one `if-else` statement where a conditional evaluates to `true`. Write another `if-else` statement where a conditional evaluates to `false`.

4. The following line of code will return the current time:

`var now = new Date();`

Based on that information, we can find out what hour it currently is (based on a 24-hour clock).

`var currentHour = now.getHours();`

Write multiple `if-else` statements which greets a person based on the current hour stored in `curentHour`. If the hour is:

- between 0 to 12 (midnight to noon), return the message "Good morning!"
- between 13 to 17 (1 p.m. to 5 p.m.), return the message "Good afternoon!"
- between 18 to 20 (6 p.m. to 8 p.m.), return the message "Good evening!"
- later than 20 (after 8 p.m.), return the message "Good night!"

To test your script, temporarily set `currentHour` to a number between 0 and 23. Then replace it with `now.getHours()` to display the correct message for the current time.

5. Did you know cats speak different languages?

Prompt a user to enter a language. Consider the possibility a user may give you input which is Capitalized, UPPERCASE or LOWERCASE. Use a [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) method to standardize the input to test against.

Next, write a `switch-case` statement which incorporates at least five of the following 'translations' of "Meow!":

- Catalan: meu
- Chinese: mao
- Danish: miaav
- Dutch: miauw
- English: meow
- Finnish: kurnau
- French: miaou
- Greek: naiou
- Hebrew: miya
- Hungarian: miaaau
- Japanese: nyan
- Korean: yaong
- Norwegian: mjau
- Portuguese: miau
- Spanish: miau

For each case, print a result to `console.log()`. Be sure to include a default response.
