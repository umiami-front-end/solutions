# Read Me

## JavaScript: Objects

### Objectives

- Create objects
- Use built-in methods to work with objects

### Resources

**Mozilla Developers Network**

- JavaScript
  - [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)


### Instructions

1. In `objects.js`, create the following object (**DO NOT** copy and paste; type it in so you become familiar with building an object!):

```javascript
var flynn = {
  species: "cat",
  paws: 4,
  colors: ["black", "brown", "gray", "white"],
  shy: false,
  cuddly: true,
}
```

2. Using bracket notation, add the following properties:
  - `favoriteCatNipStrain` with a value of `Bastet Mau`
  - `favoriteToy` with a value of `Mr. Fish`


3. Using dot notation, add the following properties:
  - `pickyEater` with a value of `false`
  - `born` with a value of `2011`


4. In the console, using either bracket or dot notation (maybe mix it up?), return a value which answers the following questions:
  - What species is Flynn?
  - Is Flynn shy?
  - What is Flynn's favorite strain of cat nip?
  - What colors are in Flynn's coat? (List each individually... or produce a comma-delimited string.)
  - What type of value is stored in the property `paws`?
  - What type of value is stored in the property `colors`?
  - What type of value is stored in the property `cuddly`?


5. Now we are going to create a much bigger object in `objects.js` to store data about Pixar movies which we can refer to later. Open `films.txt` in the `assets` folder for the data to be included.

  Within the `pixarMovies` object will be multiple objects, one for each film, to store data.

  You will have to give appropriate property names as well as the correct data type (i.e. numbers, booleans, strings, arrays). Although you will use the film's title as a variable name, do not forget to include a title among each film's properties.

  Create a variable to store an object. Within the object, create an object for each film. It should follow the example below:

```
var pixarMovies = {
  toyStory: { },
  aBugsLife: { },
  // more films
}
```

6. Build out two films when you create the `pixarMovies` object literal. Build the next two films using bracket notation. Build the last two films using dot notation.

  You will need to create a new object (using a literal or a constructor) for each movie. Fill in the object properties. Then, add the movie object you created to `pixarMovies`. This can be done in the same way you set a property. Set your new property in `pixarMovies` equal to the object you created.

  Example: `pixarMovies["movieTitle"] = movieTitle;`

7. Once the object is built, use code to provide responses to the questions posed in `objects.js`. (It's okay to look for the answer in `films.txt` -- your not writing code to *find* the answer. Open the JavaScript Console and type `pixarMovies`. You will find the object has been loaded into the browser.

  For the questions below (which are also in `objects.js`), write the line of code in `document.write()` necessary to access the correct value in the object. You may use either bracket or dot notation.

  For example, if you wanted to find out what year "Toy Story" was released, you would write:

  `document.write(pixarMovies.toyStory.year)`

  There may be instances where you have to modify the object notation to narrow down an answer. (For instance, if you need to refer to a property which has an array as a value, you may also have to single out an item in the array.)

  a. What is the Rotten Tomatoes rating for "Monsters, Inc."?

  b. What is "Cars" about?

  c. Who appeared in "The Incredibles"?

  d. Who was the supporting actor in "A Bug's Life"?

  e. Which three movies won Oscars? *(three lines of code)*

  f. Which film has the most stars? How many? *(two lines)*

  g. Which two movies have a Rotten Tomatoes rating over 98? *(two lines)*
