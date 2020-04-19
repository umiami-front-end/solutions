# Read Me

## JavaScript: DOM Events

### Objectives

- Bind events to HTML elements
- Trigger events based on user interaction


### Resources

**Mozilla Developers Network**

- DOM
  - [MDN: Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- CSS
  - [MDN: Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)


### Instructions

#### p5 goes Vanilla

A basic p5.js example is clicking the screen and making a shape appear and disappear. Recreate this effect using *only* your knowledge of HTML, CSS and JavaScript. **You will need to build this from scratch.** Use the `p5vanilla.html` file for this exercise.

Things to implement:

1. Create a circle using HTML and CSS.

2. Make the entire HTML body clickable.

3. Have JavaScript listen for the click and modify the circle's CSS properties to change it from invisible to visible -- white to black. (*Hint:* Your conditional test will have to be exact. How does the browser format CSS color values in the document object model? After you have styled your circle, examine the div's style in the console to find out.)

4. Once you get this simple version to work, modify the script so the color of the circle is displayed in a different color on each click. (*Hint:* Use an array of colors.)


# Nyan Cat

Open `nyan-cat.html` in your browser. You will see a foundation has been provided. There is a bar at the top which contains four buttons, 'Up', 'Down', 'Left' and 'Right'.

Create a script which, when one of these button is pressed, it moves Nyan Cat 50 pixels in that direction. For instance, if a user clicks "Right", Nyan Cat should move 50 pixels right. If a user clicks "Right" again, Nyan Cat should move 50 pixels right again -- 100 pixels right from its original starting point.

There are a couple ways to accomplish this. One which might be "longform"; another which utilizes other techniques we have learned during the JavaScript module to write a more efficient script!

Add a new button -- "Reset" -- which moves Nyan Cat back to his starting position. This would be useful to a user who might move him off the screen by accident.

**BONUS**: Adjust your script so a user can move Nyan Cat using only the arrow keys on a keyboard.

*HINT:* You will want to read up on CSS Positioning.
