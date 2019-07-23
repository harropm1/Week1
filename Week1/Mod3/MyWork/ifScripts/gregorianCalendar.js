/* This program helps figure out leap years
Author: Michelle Harrop*/
"use strict";

var year = 1904;
var leapYear;

if (year % 4 == 0 && year % 100 != 0 || year % 400 ==0 )
{
    leapYear = true;
}
else
{
    leapYear = false;
}
console.log ("If it is " + year + " it is a leap year: True or False? " + leapYear)