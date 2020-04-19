// contact.js

var form = document.forms[0].elements;
var submit = document.querySelector("#submit");
submit.disabled = true;

// if the email field changes, allow 'submit' to be clicked on
form.email.addEventListener("change", function() {
	submit.disabled = false;
}, false);

// Ideally, this would be done by applying an id to the HTML, then
// using querySelector to call the id. The exercise was designed this
// way to give you more practice with advanced css selectors, which are
// used with the querySelector method! :)

var nameEl = document.querySelector("section:last-child p:first-of-type span");
var addressEl = document.querySelector("section:last-child p:nth-of-type(2) span");
var phoneEl = document.querySelector("section:last-child p:nth-of-type(3) span");
var emailEl = document.querySelector("section:last-child p:nth-of-type(4) span");
var prefsEl = document.querySelector("section:last-child p:last-child span");

submit.addEventListener("click", function() {
	event.preventDefault(); // prevents 'submit' from refreshing the page
	nameEl.textContent = form.name.value;
	addressEl.textContent = form.address.value;
	phoneEl.textContent = form.phone.value;
	emailEl.textContent = form.email.value;
}, false);


// BONUS: All that is necessary is setting the value for each form
// field to be an empty string.
reset.addEventListener("click", function() {
	form.name.value = "";
	form.address.value = "";
	form.phone.value = "";
	form.email.value = "";
}, false);
