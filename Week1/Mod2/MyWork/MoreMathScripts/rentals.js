/* This script calculates the number of vans needed for a tour
Author: Michelle Harrop */
"use strict";

var people = 38;
var vanPrice = 250;
var totalVans = Math.ceil(people / 15);
var totalCost = totalVans * vanPrice;
var costPerPerson = totalCost/people;

console.log("You will need " + totalVans + " vans.");
console.log("It will cost $" + totalCost +" total for all of the vans.");
console.log("It will cost $" + costPerPerson.toFixed(2) + " per person.");