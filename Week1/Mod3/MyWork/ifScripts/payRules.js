/* This program helps figure out payrates for overtime hours worked
Author: Michelle Harrop*/
"use strict";

//user inputs
var payrate = 10;
var actualHoursWorked = 50;

var grossPay;

if (actualHoursWorked<=40)
{
    grossPay = payrate * actualHoursWorked;
    console.log(grossPay);
}
else
{
    var hoursOvertime = actualHoursWorked - 40;
    var overtimePayrate = (1.5 * payrate) * hoursOvertime + (payrate * 40);
    console.log(overtimePayrate);
 }