/* This program helps figure out taxes and discounts on purchases
Author: Michelle Harrop */
"use strict";

var cost = 370;
var taxRate = .08;
var discount;

if (cost < 100)
{
    discount = 0
}
else if (cost >= 100 && cost < 250)
{
    discount = cost * .1;
}
else
{
    discount = cost * .2;
}

var subtotal = cost - discount;
var tax = subtotal * taxRate;
var finalTotal = subtotal + tax;

console.log ("Original Subtotal: $" + cost);
console.log("Savings: $" + discount);
console.log("Tax: $" + tax.toFixed(2));
console.log("Final total: $" + finalTotal.toFixed(2));