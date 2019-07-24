/* This program helps display the name of a student, their major, and the office that they go to for advisement
Author: Michelle Harrop */
"use strict";

var studentName = "Niamh";
var studentMajor = "ENG";
var majorName, deptOffice;

switch (studentMajor)
{
    case "BIOL":
        majorName = "Biology";
        deptOffice = "Science Bldg, Room 310";
        break;
    case "CSCI":
        majorName = "Comupter Science";
        deptOffice = "Sheppard Hall, Room 314";
        break;
    case "ENG":
        majorName = "English";
        deptOffice = "Kerr Hall, Room 201";
        break;
    case "HIST":
        majorName = "History";
        deptOffice = "Sheppard Hall, Room 114";
        break;
    case "MKT":
        majorName = "Marketing";
        deptOffice = "Westly Hall, Room 310";
        break;
    default:
        majorName = "unknown";
        deptOffice = " ";
}

console.log("Student: " + studentName);
console.log("Major: " + majorName);
console.log("Advising Location: " + deptOffice);