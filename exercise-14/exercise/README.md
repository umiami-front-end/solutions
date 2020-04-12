# Read Me

## JavaScript: Document Object Model

### Objectives

- Add and modify elements in the Document Object Model
- Iterating over data to create elements and attributes in the DOM


### Resources

**Mozilla Developers Network**

- DOM
  - [MDN: Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)


### Instructions

If you are unsure what the output should be for this exercise, review the files provided in the `assets` folder.

1. In `index.html` is a very basic HTML document structure. The `head` will add a `meta` tag (which sets the author) and a `title` tag. Add these by creating the elements using only JavaScript. The meta tag will need two (2) attributes "name" (which is set to "author") and "content" (which is your name). The page title should be "Working with the DOM".

2. Add the following content to the `body` of `index.html`:

  - `h1`: "Working with the DOM"
  - `p`: "This is so much fun!"

3. Add the following unordered list to `index.html`:

- `ul`:
    - `li`: "HTML"
    - `li`: "CSS"
    - `li`: "JavaScript"

Instead of writing methods for each list item write a function which, when called inside a loop, will iterate over an array, build and append each list item to the unordered list.

4. `cities.js` contains an array of objects. This array is an A-to-Z list of cities around the world. Each country has the following properties: city, country, continent. Write a loop/function (similar to what you wrote in No. 3) which processes each item in the array. The city name and country should be displayed on the web page as a list item in an unordered list.

5. Once that is working, modify your script to append a class to each li which uses the continent as the value. However, keep in mind, when writing HTML, it is best to:

  - avoid spaces within values
  - write all attributes as lowercase

What could you do to standardize country and continent information to transform spaces into hyphens and convert them to lowercase? For example: "North America" to "north-america".

If the exercise is done correctly, the style sheet added to `cities.html` should make the page quite colorful! :)
