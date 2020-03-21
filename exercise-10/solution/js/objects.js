// Objects

// Question 5
// Build the object with two films.

var pixarMovies = {

  toyStory: {
    title: "Toy Story",
    year: 1995,
    actors: ["Tom Hanks", "Tim Allen"],
    rating: 100,
    academyAward: false,
    summary: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
  },

  aBugsLife: {
    title: "A Bugs Life",
    year: 1998,
    actors: ["Dave Foley", "Kevin Spacey", "Julia Louis-Dreyfus"],
    rating: 92,
    academyAward: false,
    summary: "A misfit ant, looking for warriors to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe."
  }

}


// Question 6

// NOTE: When you create a new object (inside an existing object), you
// must define the object first, then add the properties. When you are
// done adding properties to each object, then add it to the
// 'pixarMovies' object.

// Add two films using bracket notation.

var monstersInc = {};  // object literal
monstersInc["title"] = "Monsters Inc.";
monstersInc["year"] = 2001;
monstersInc["actors"] = ["Billy Crystal", "John Goodman"];
monstersInc["rating"] = 96;
monstersInc["academyAward"] = true;
monstersInc["summary"] = "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.";

pixarMovies.monstersInc = monstersInc;

// We're creating a property value 'monstersInc' in pixarMovies, then
// adding the contents of the 'monstersInc' object we just created.

var findingNemo = new Object();  // object constructor
findingNemo["title"] = "Finding Nemo";
findingNemo["year"] = 2003;
findingNemo["actors"] = ["Albert Brooks", "Ellen DeGeneres"];
findingNemo["rating"] = 99;
findingNemo["academyAward"] = true;
findingNemo["summary"] = "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.";

pixarMovies.findingNemo = findingNemo;

// Add two films using dot notation.

var theIncredibles = {};
theIncredibles.title = "The Incredibles";
theIncredibles.year = 2004;
theIncredibles.actors = ["Craig T. Nelson", "Jason Lee", "Holly Hunter"];
theIncredibles.rating = 97;
theIncredibles.academyAward = true;
theIncredibles.summary = "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.";

pixarMovies.theIncredibles = theIncredibles;

var cars = new Object();

cars.title = "Cars";
cars.year = 2006;
cars.actors = ["Owen Wilson", "Paul Newman", "Bonnie Hunt", "Larry the Cable Guy"];
cars.rating = 74;
cars.academyAward = false;
cars.summary = "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family."

pixarMovies.cars = cars;


// Question 7

// a
document.write("<p><strong>What is the Rotten Tomatoes rating for <em>Monsters, Inc.</em>?</strong></p>");
document.write("<p>" + pixarMovies.monstersInc.rating + "</p>");

// b
document.write("<p><strong>What is <em>Cars</em> about?</strong></p>");
document.write("<p>" + pixarMovies.cars.summary + "</p>");

// c
document.write("<p><strong>Who appeared in <em>The Incredibles</em>?</strong></p>");
document.write("<p>" + pixarMovies.theIncredibles.actors + "</p>");
// also:
// document.write("<p>" + pixarMovies.theIncredibles.actors.join(", ") + "</p>");

// d
document.write("<p><strong>Who was the supporting actor in <em>A Bug's Life</em>?</strong></p>");
document.write("<p>" + pixarMovies.aBugsLife.actors[1] + "</p>");
// We are not looking for the star -- remember, arrays are ordered; we
// want the second person in the credits (supporting actor).

// e
document.write("<p><strong>Which three movies won Oscars?</strong></p>");
document.write("<p>" + pixarMovies.monstersInc.title + "</p>");  // movie 1
document.write("<p>" + pixarMovies.findingNemo.title + "</p>");  // movie 2
document.write("<p>" + pixarMovies.theIncredibles.title + "</p>");  // movie 3

// f
document.write("<p><strong>Which film has the most stars? How many?</strong></p>");
document.write("<p>" + pixarMovies.cars.title + "</p>");  // film?
document.write("<p>" + pixarMovies.cars.actors.length + "</p>");  // how many?

// g
document.write("<p><strong>Which two movies have a Rotten Tomatoes rating over 98?</strong></p>");
document.write("<p>" + pixarMovies.toyStory.title + ": " + pixarMovies.toyStory.rating + "</p>");  // film 1
document.write("<p>" + pixarMovies.findingNemo.title + ": " + pixarMovies.findingNemo.rating + "</p>");  // film 2
