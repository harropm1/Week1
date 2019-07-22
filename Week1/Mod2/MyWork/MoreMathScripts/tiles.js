/* This script calculates the amount of tiles needed for a construction project
Author: Michelle Harrop */
"use strict";

var roomLength = 17;
var roomWidth = 16;
var tiles = 12;
var boxes = Math.ceil((roomLength * roomWidth) / tiles);
var extraTiles = Math.ceil((roomLength * roomWidth) * .10);
var totalBoxes = Math.ceil(boxes + (extraTiles / 12));

console.log("The inital number of boxes needed is about " + boxes + " and you would need " + extraTiles + " additional tiles.");
console.log("You would need " + totalBoxes + " boxes in total.");