"use strict";

let fTempField;
let cTempField;

function convertFtoC()
{
    let fTemp = Number(fTempField.value);
    let cTemp = Number((fTemp-32) * 5 /9);
    cTempField.value = cTemp;
}

function init()
{
    fTempField = document.getElementById("fTemp");
    cTempField = document.getElementById("cTemp");

    const btnFtoC = document.getElementById("FtoC");
    btnFtoC.onclick = convertFtoC;
}

window.onload = init;