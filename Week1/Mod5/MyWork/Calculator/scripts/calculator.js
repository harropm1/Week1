"use strict";

let number1Field;
let number2Field;
let answerField;

function addNumbers()
{
    let sum = Number(number1Field.value) + Number(number2Field.value);
    answerField.value = sum;
}

function subtractNumbers()
{
    let sum = Number(number1Field.value) - Number(number2Field.value);
    answerField.value = sum;
}

function multiplyNumbers()
{
    let sum = Number(number1Field.value) * Number(number2Field.value);
    answerField.value = sum;
}

function divideNumbers()
{
    let sum = Number(number1Field.value) / Number(number2Field.value);
    answerField.value = sum;
}

function init()
{
    number1Field = document.getElementById("number1");
    number2Field = document.getElementById("number2");
    answerField = document.getElementById("answer");

    const btnAdd = document.getElementById("add")
    btnAdd.onclick = addNumbers;

    const btnSubtract = document.getElementById("subtract")
    btnSubtract.onclick = subtractNumbers;

    const btnMultiply = document.getElementById("multiply")
    btnMultiply.onclick = multiplyNumbers;

    const btnDivide = document.getElementById("divide")
    btnDivide.onclick = divideNumbers;
}

window.onload = init;