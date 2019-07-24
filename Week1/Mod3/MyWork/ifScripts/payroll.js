/* This program helps figure out payrates and taxes taken out to get a total take home pay
Author: Michelle Harrop*/
"use strict";

//user inputs
var payrate = 20;
var actualHoursWorked = 90;
var hoursOvertime = actualHoursWorked - 80;
var overtimePayrate = (1.5 * payrate) * hoursOvertime + (payrate * 80);

var grossPay = payrate * actualHoursWorked;

var income = overtimePayrate;
var filingStatus = "Joint";
var taxRate;
//hours and overtime
if (actualHoursWorked<=80)
{
    console.log(grossPay);
}
else
{
    console.log(overtimePayrate);
}
//filing status
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