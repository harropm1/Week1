"use strict";

var savingsAccountDoubled = 40000 * 2
var interestRate = 4;
var interestRateDecimal = .04
var yearsToDouble = 72/interestRate;
console.log("At a " + interestRate + "% interest rate, your savings account will be worth " + savingsAccountDoubled.toFixed(2) + " in " + yearsToDouble.toFixed(1) + " years");