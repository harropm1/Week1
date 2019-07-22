/* This script calculates the exchange rates for some currencies
Author: Michelle Harrop */
"use strict";

var numberUSDollars = 50;
var targetCurrency = "Euro";

if (targetCurrency == "Euro") { 
    var euro = numberUSDollars * .89;     
    console.log("The current exchange rate for the Euro is $" + euro.toFixed(2) + " for $" + numberUSDollars);
}
else if (targetCurrency == "Yen") {
    var japaneseYen = numberUSDollars * 107.90;
    console.log("The current exchange rate for the Japanse Yen is $" + japaneseYen.toFixed(2) + " for $" + numberUSDollars);
}
else if (targetCurrency == "Peso") {
    var mexicanPeso = numberUSDollars * 19.06;
    console.log("The current exchange rate for the Mexican Peso is $" + mexicanPeso.toFixed(2) + " for $" + numberUSDollars);
}
else if (targetCurrency == "Can Dollar") {
    var canadianDollar = numberUSDollars * 1.31;
    console.log("The current exchange rate for the Canadian Dollar is $" + canadianDollar.toFixed(2) + " for $" + numberUSDollars);
}
else if (targetCurrency == "Yuan") {
    var chineseYuan = numberUSDollars * 6.88;
    console.log("The current exchange rate for the Chinese Yuan is $" + chineseYuan.toFixed(2) + " for $" + numberUSDollars);
}
else if (targetCurrency == "Ruble") {
    var russianRuble = numberUSDollars * 63.10;
    console.log("The current exchange rate for the Russian Ruble is $" + russianRuble.toFixed(2) + " for $" + numberUSDollars);
}
