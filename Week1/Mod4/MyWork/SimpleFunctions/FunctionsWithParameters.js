/* These are my first functions with parameters
Author: Michelle Harrop */
"use strict";

//creating a mailing label and calling it with arguments inserted
var myName = "Robert Harrop";
var myAddress = "10 Longview Rd";
var myCity = "Livingston";
var myState = "New Jersey";
var myZip = "07039";

function displayMailingLabel(name, address, city, state, zip)
{
    var mailingLabel = ("Address: " + name + ", " + address + ", " + city + ", " + state + " " + zip + "\n\n");
    console.log(mailingLabel);
}

displayMailingLabel(myName, myAddress, myCity, myState, myZip);


//creating an addition equation with a function
var myNum1 = 37;
var myNum2 = 18;

function addNumbers(num1, num2)
{
    var sum = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + sum);
}

addNumbers(myNum1, myNum2);


//creating a multiplication equation with a function
var myNum3 = 6;
var myNum4 = 4;

function multiplyNumbers(num3, num4)
{
    var multiplySum = num3 * num4;
    console.log(num3 + " x " + num4 + " = " + multiplySum);
}

multiplyNumbers(myNum3, myNum4);


//creating a subtraction equation with a function
var myNum5 = 10;
var myNum6 = 5;

function subtractNumbers(num5, num6)
{
    var subtractSum = num5 - num6;
    console.log(num5 + " - " + num6 + " = " + subtractSum);
}

subtractNumbers(myNum5, myNum6);


//creating a division equation with a function
var myNum7 = 27;
var myNum8 = 6;

function divideNumbers(num7, num8)
{
    var divideSum = num7 / num8;
    console.log(num7 + " / " + num8 + " = " + divideSum.toFixed(2)  + "\n\n");
}

divideNumbers(myNum7, myNum8);


//displaying a receipt with a total, amount paid and change due
var myTotalDue = 12;
var myAmountPaid = 15;

function displayReceipt(totalDue, amountPaid)
{
    var changeDue = amountPaid - totalDue;
    console.log("Total due: $" + totalDue.toFixed(2));
    console.log("Amount paid: $" + amountPaid.toFixed(2)  + "\n");
    console.log("Change Due: $" + changeDue.toFixed(2));

    if (changeDue < 0)
    {
        console.log("You still owe $" + Math.abs(changeDue.toFixed(2)));
    }
}

displayReceipt(myTotalDue, myAmountPaid);