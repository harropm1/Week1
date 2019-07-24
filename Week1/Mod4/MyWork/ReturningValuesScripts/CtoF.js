/* This function converts a temperature from Celsius to Fahrenheit
Author: Michelle Harrop */
"use strict";


function convertCtoF(cTemperature)
{
    var cTemperature;
    var fTemperature = (cTemperature * 9 / 5) + 32;
    return fTemperature;
}

var currentCTemp = -7;
var currentFTemp = convertCtoF(currentCTemp);

console.log("If it is " + currentCTemp + " degrees Celcius, it is " + currentFTemp.toFixed(2) + " degrees Fahrenheit.");