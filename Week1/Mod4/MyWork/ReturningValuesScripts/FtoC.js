/* This function converts a temperature from Farhrenheit to Celsius
Author: Michelle Harrop */
"use strict";

function convertFtoC(fTemperature)
{
    var fTemperature;
    var cTemperature = (fTemperature-32) * 5 /9;
    return cTemperature;
}

var currentFTemp = -40;
var currentCTemp = convertFtoC(currentFTemp);

console.log("If it is " + currentFTemp + " degrees Fahrenheit, it is " + currentCTemp.toFixed(2) + " degrees Celcius.");