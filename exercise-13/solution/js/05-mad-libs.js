// Functions
// Question 5 - Mad Libs

// Uncomment the code as needed.

// A note about the MadLib: I used a simple example. If you visit the
// official web site (http://www.madlibs.com/) look under 'printables'
// for more detailed options. Vacation Fun, for example, would require
// a lot of input! :)


function MadLib(name, adjective, noun) {

  // properties which will be adopted by each new MadLib object
  this.name = name;
  this.adjective = adjective;
  this.noun = noun;

  // a method adopted by each new MadLib object
  this.printResponse = function() {
    string = "HALL PASS:\n";
    string += "Please excuse " + this.name + ", ";
    string += "who is far too " + this.adjective + " ";
    string += "to attend " + this.noun + " class.";

    return string;
  }
}

// We prompt the user for the words we need for the MadLib
var userName = prompt("Enter a name: ");
var userAdjective = prompt("Enter an adjective: ");
var userNoun = prompt("Enter a noun: ");

// Create a new game.
var playGame = new MadLib(userName, userAdjective, userNoun);

// console.log(playGame);
// This will show the MadLib object we have stored in the variable
// playGame. Notice the values have been added to each key and the
// printResponse method is part of the object.

console.log(playGame.printResponse());

// We call printResponse on playGame, which will put together our
// MadLib! :)
