/* This program helps figure out taxes for people filing as singles or jointly
Author: Michelle Harrop */
"use strict";

var income = 18000
var filingStatus = "Joint";
var taxRate;

if (filingStatus == "Single")
{
    if (income < 12000)
    {
        taxRate = .05;
    }
    else if (income < 25000)
    {
        taxRate = .1;
    }
    else if (income < 75000)
    {
        taxRate = .15;
    }
    else 
    {
        taxRate = .2;
    }
    
}
else 
{
    if (income < 12000)
    {
        taxRate = 0;
    }
    else if (income < 25000)
    {
        taxRate = .06;
    }
    else if (income <75000)
    {
        taxRate = .11;
    }
    else
    {
        taxRate = .2;
    }
}

var finalTaxRate = taxRate * 100;

console.log("If your filing status is " + filingStatus + " and your income is $" + income + ", your tax rate is " + finalTaxRate + "%.")