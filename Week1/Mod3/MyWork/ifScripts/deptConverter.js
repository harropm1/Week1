/* This program helps display the name of a student, their major, and the office that they go to for advisement
Author: Michelle Harrop */
"use strict";

var deptNumber = 12;
var deptName;

switch (deptNumber)
{
    case 1:
        deptName = "Marketing";
        break;
    case 5:
        deptName = "Human Resources";
        break;
    case 10:
        deptName = "Accounting";
        break;
    case 12:
        deptName = "Legal";
        break;
    case 18:
        deptName = "IT";
        break;
    case 20:
        deptName = "Customer Relations";
        break;
    default:
        deptName = "<unknown>";
}
console.log("Department number " + deptNumber + " is " + deptName);