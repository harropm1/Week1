/* These functions help calculate social security tax, Medicare tax, and Federal tax
Author: Michelle Harrop */
"use strict";

// this function gets Social Security tax on a given paycheck amount
function getSocSecTax(grossPay)
{
    var grossPay;
    var socialSecurityTax = grossPay * .062;
    return socialSecurityTax;
}

// this fuction gets Medicare tax on a given paycheck amount
function getMedicareTax(grossPay)
{
    var grossPay;
    var medicareTax = grossPay * .0145;
    return medicareTax;
}

// this function calculates the federal tax for having a specific withholding code
function getFederalTax(grossPay, withholdingCode)
{
    var taxRate;

    switch (withholdingCode)
    {
        case 0:
            taxRate = .23;
            break;
        case 1:
            taxRate = .21;
            break;
        case 2:
            taxRate = .195;
            break;
        case 3:
            taxRate = .185;
            break;
        case 4:
            taxRate = .18;
            break;
        default:
            taxRate = .18 - ((withholdingCode - 4) * .005);
            if (taxRate < 0)
            {
                taxRate = 0;
            }
    }
    var federalTax = grossPay * taxRate;
    return federalTax;
}

//user inputs
var myGrossPay = 11000;
var myWithholdingCode = 18;

//equation and console log for SS tax
var ssTaxOut = getSocSecTax(myGrossPay);
console.log("Out of $" + myGrossPay.toFixed(2) + " total pay, $" + ssTaxOut.toFixed(2) + " will be taken out for Social Security tax." + "\n");

//equation and console log for Medicare tax
var medicareTaxOut = getMedicareTax(myGrossPay);
console.log("Out of $" + myGrossPay.toFixed(2) + " total pay, $" + medicareTaxOut.toFixed(2) + " will be taken out for Medicare tax." + "\n");

//equation and console log for federal tax and withholding code
var myFederalTax = getFederalTax(myGrossPay, myWithholdingCode);
console.log("The federal tax rate for withholding code " + myWithholdingCode + " and a total pay of $" + myGrossPay.toFixed(2) + " is $" + myFederalTax.toFixed(2));