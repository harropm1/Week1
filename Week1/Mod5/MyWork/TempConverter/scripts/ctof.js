"use strict";

let fTempField;
let cTempField;

//this is the click event fucntion for the ctof button
function convertCtoF()
{
    let cTemp = Number(cTempField.value);
    let fTemp = Number((cTemp * 9 / 5) + 32);
    fTempField.value = fTemp;
}

function convertTemp()
{
    fTempField = document.getElementById("fTemp");
    cTempField = document.getElementById("cTemp");

    const btnCtoF = document.getElementById("CtoF");
    btnCtoF.onclick = convertCtoF;
}

window.onload = convertTemp;