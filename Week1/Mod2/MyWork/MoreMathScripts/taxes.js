/* This script calculates tax withholdings
Author: Michelle Harrop */
"use strict";

var salary = 3500;
var taxes = .23;
var withheld = salary * taxes;
console.log("Normally I have $" + withheld.toFixed(2) + " withheld from my paycheck each month.");