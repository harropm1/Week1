/* This script calculates a distance between points
Author: Michelle Harrop */
"use strict";

var x2 = 200, x1 = 100;
var y2 = 250, y1 = 150;
var distance = Math.sqrt (Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
console.log("The distance between (x1,y1) and (x2,y2) is " + distance.toFixed(2));