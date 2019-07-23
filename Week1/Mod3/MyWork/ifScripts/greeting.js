/* This program helps figure out the time of day and displays a greeting
Author: Michelle Harrop */
"use strict";

var time = new Date();
var currentTime = time.getHours();
var greeting;

if (currentTime < 10)
{
    greeting = "Good morning!";
}
else if (currentTime < 17)
{
    greeting ="Good day!";
}
else
{
    greeting = "Good evening!";
}

console.log(greeting);