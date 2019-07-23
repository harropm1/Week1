/* This program helps display a minimum number and a maximum number
Author: Michelle Harrop */
"use strict";

var a = 22;
var b = 22;
var c = 22;
var minimum;
var maximum;

if (a <= b && a <= c )
{
    minimum = a;
}
else if (b <= a && b <= c)
{
    minimum = b;
}
else {
    minimum = c;
}

console.log("The minimum is " + minimum)

if (a >= b && a >= c )
{
    maximum = a;
}
else if (b >= a && b >= c)
{
    maximum = b;
}
else {
    maximum = c;
}

console.log("The maximum is " + maximum)