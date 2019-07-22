/* This script convents a temperature from Farhrenheit to Celsius
Author: Michelle Harrop */
"use strict";

var fTemperature = 75;
var cTemperature = (fTemperature-32) * 5 /9;
console.log("If it is " + fTemperature + " degrees Fahrenheit, it is " + cTemperature.toFixed(2) + " degrees Celcius.");