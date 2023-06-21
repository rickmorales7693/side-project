"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var userName = "";

while (userName === "") {
	userName = prompt("Hi, what is your name?");
}

// TODO: Show an alert message that welcomes the user based on their input.

alert("Hello, " + userName + "!");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var response = confirm(userName + ", do you like pizza?");

if (response) {
	alert("Me too, I love pizza!");
} else {
	alert("Really? I thought everyone liked pizza.");
}