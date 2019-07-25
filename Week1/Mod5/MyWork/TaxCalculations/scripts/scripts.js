"use strict";

//calculate grossPay
function getGrossPay(hoursWorked, payRate)
{
    let grossPay = hoursWorked * payRate;
    return grossPay;
}

// gets Social Security tax
function getSocSecTax(grossPay)
{
    let socialSecurityTax = grossPay * .062;
    return socialSecurityTax;
}

// this fuction gets Medicare tax
function getMedicareTax(grossPay)
{
    var medicareTax = grossPay * .0145;
    return medicareTax;
}

//calculates the federal tax
function getFederalTax(grossPay, withholdingCode)
{
    var taxRate;

    switch (withholdingCode)
    {
        case 0:
            taxRate = .23;
            break;
        case 1:
            taxRate = .21;
            break;
        case 2:
            taxRate = .195;
            break;
        case 3:
            taxRate = .185;
            break;
        case 4:
            taxRate = .18;
            break;
        default:
            taxRate = .18 - ((withholdingCode - 4) * .005);
            if (taxRate < 0)
            {
                taxRate = 0;
            }
    }
    var federalTax = grossPay * taxRate;
    return federalTax;
}

//user inputs
let payRateField;
let hoursWorkedField;
let withholdingCodeField;
let grossPayField;
let socialSecurityTaxField;
let medicareTaxField;
let federalTaxField;
let netPayField;

function calculate()
{
    let payRate = Number(payRateField.value);
    let hoursWorked = Number(hoursWorkedField.value);
    let myGrossPay = getGrossPay(hoursWorked, payRate);
    grossPayField.innerHTML = myGrossPay.toFixed(2);

    let ssTax = getSocSecTax(myGrossPay);
    socialSecurityTaxField.innerHTML = ssTax.toFixed(2);

    let medicareTaxOut = getMedicareTax(myGrossPay);
    medicareTaxField.innerHTML = medicareTaxOut.toFixed(2);

    let myFederalTax = getFederalTax(myGrossPay, Number(withholdingCodeField.value));
    federalTaxField.innerHTML = myFederalTax.toFixed(2);
    
    netPayField.innerHTML = (myGrossPay - ssTax - medicareTaxOut - myFederalTax).toFixed(2);
}


function init()
{
    payRateField = document.getElementById("payRate");
    hoursWorkedField = document.getElementById("hoursWorked");
    withholdingCodeField = document.getElementById("withholdingCode");
    grossPayField = document.getElementById("grossPay");
    socialSecurityTaxField = document.getElementById("socialSecurityTax");
    medicareTaxField = document.getElementById("medicareTax");
    federalTaxField = document.getElementById("federalTax");
    netPayField = document.getElementById("netPay");

    const btnCalculate = document.getElementById("calculate");
    btnCalculate.onclick = calculate;
}

window.onload = init;