// Functions
// Question 4 - Pie Party

// Uncomment the code as needed.


function printResponse(pieObject) {
  string = "There are " + pieObject.people
  string += " people and " + pieObject.pies + " pies. "
  string += "Each pie has 6 slices. ";
  string += "Each person gets " + pieObject.slicesPerPerson
  string += " slices of pie. ";
  string += "There are " + pieObject.leftoverPie
  string += " slices of pie leftover.";

  // The technique above is one way to build out a string. You'll see
  // this frequently when creating a string on a web page. Keep things
  // broken down into manageable chunks.

  return string;
}

function pieParty(people, pies) {
  var pieForAll = {};

  pieForAll.pies = parseInt(pies);
  pieForAll.people = parseInt(people);

  pieForAll.pieSlices = pieForAll.pies * 6;
  pieForAll.slicesPerPerson = parseInt(pieForAll.pieSlices / people);
  pieForAll.leftoverPie = pieForAll.pieSlices % people;

  return printResponse(pieForAll);
}

// Why separate our pie data from the response? It keeps things
// organized. It is a good programming practice to have your
// functions do one thing very well. :)

var peopleAttending = prompt("How many people?");
var piesToEat = prompt("How many pies? (Mmm. Pie.)");

console.log(pieParty(peopleAttending, piesToEat));
