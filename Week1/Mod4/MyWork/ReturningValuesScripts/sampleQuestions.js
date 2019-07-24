// Scope Exercises
"use strict"

//#1
function test1()
{
    var a = 10;
    if (a > 5)
    {
        a = 7;
    }
    console.log(a);
}
test1();

//#2
function test2()
{
    if (1 == 1)
    {
        var a=5
    }
    console.log(a);
}
test2();

//#3
var a;
function test3()
{
    var a = 3;
    console.log(a);
}
test3();

//#4
var a = 5;
function test4()
{
    let a = 7;
    console.log(a);
}
test4();

//#5
var a = 6;
function test5()
{
    var a = 7
    function again()
    {
        var a = 8;
        console.log(a); //first
    }
    again();
    console.log(a); //second
}
test5();
console.log(a);

//#6
let a = 6;
function test6()
{
    let a = 7
    function again()
    {
        let a = 8;
        console.log(a); //first
    }
    again();
    console.log(a); //second
}
test6();
console.log(a);