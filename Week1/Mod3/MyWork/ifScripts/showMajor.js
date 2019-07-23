/* This program helps display the name of a student, their major, and the office that they go to for advisement
Author: Michelle Harrop */
"use strict";

var studentName = "Niamh";
var studentMajor = "MKT";
var majorName, deptOffice;

if (studentMajor == "BIOL")
{
    majorName = "Biology";
    deptOffice = "Science Bldg, Room 310";
}
else if (studentMajor == "CSCI")
{
    majorName = "Comupter Science";
    deptOffice = "Sheppard Hall, Room 314";
}
else if (studentMajor == "ENG")
{
    majorName = "English";
    deptOffice = "Kerr Hall, Room 201";
}
else if (studentMajor == "HIST")
{
    majorName = "History";
    deptOffice = "Sheppard Hall, Room 114";
}
else if (studentMajor == "MKT")
{
    majorName = "Marketing";
    deptOffice = "Westly Hall, Room 310";
}
else
{
    majorName = "unknown";
    deptOffice = " ";
}

console.log("Student: " + studentName);
console.log("Major: " + majorName);
console.log("Advising Location: " + deptOffice);