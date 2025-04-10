/* Mikhail Senatorov 300407626*/
"use strict";
function calculate(){
    let appleWeight = document.getElementById("AppleWeight").value;
    let orangeWeight = document.getElementById("OrangeWeight").value;
    let grapeWeight = document.getElementById("GrapeWeight").value;

    let applePrice = document.getElementById("ApplePrice").value;
    let orangePrice = document.getElementById("OrangePrice").value;
    let grapePrice = document.getElementById("GrapePrice").value;

    const WEIGHT_ERROR = "Weight can be from 0 to 50Kg.";
    const APPLE_PRICE_ERROR = "Apple prices can be from 0 to $10.";
    const ORANGE_PRICE_ERROR = "Orange prices can be from 0 to $20.";
    const GRAPE_PRICE_ERROR = "Grape prices can be from 0 to $15.";
    
    document.getElementById("errorApple").innerHTML = "";
    document.getElementById("errorOrange").innerHTML = "";
    document.getElementById("errorGrape").innerHTML = "";


    if (appleWeight <= 0 || appleWeight >= 50)
        document.getElementById("errorApple").innerHTML = WEIGHT_ERROR;
    else if (orangeWeight <= 0 || orangeWeight >= 50)
        document.getElementById("errorOrange").innerHTML = WEIGHT_ERROR;
    else if (grapeWeight <= 0 || grapeWeight >= 50)
        document.getElementById("errorGrape").innerHTML = WEIGHT_ERROR;
    else if (applePrice <= 0 || applePrice >= 10)
        document.getElementById("errorApple").innerHTML = APPLE_PRICE_ERROR;
    else if (orangePrice <= 0 || orangePrice >= 20)
        document.getElementById("errorOrange").innerHTML = ORANGE_PRICE_ERROR;
    else if (grapePrice <= 0 || grapePrice >= 15)
        document.getElementById("errorGrape").innerHTML = GRAPE_PRICE_ERROR;
    else{
        let discount = parseFloat(document.getElementById("discount").value);
        let sumApple = appleWeight * applePrice;
        let sumOrange = orangeWeight * orangePrice;
        let sumGrape = grapeWeight * grapePrice;
        let totalPrice = sumApple + sumOrange + sumGrape; 
        let discountedTotal = totalPrice * (1 - discount);
        let totalWeight = Number(appleWeight) + Number(orangeWeight) + Number(grapeWeight);

        document.getElementById("totalPrice").innerHTML = ' $ ' + discountedTotal.toFixed(2);
        document.getElementById("totalWeight").innerHTML = '  ' + totalWeight.toFixed(2) + ' Kg';
    }
}
function resetWeights() {
    document.getElementById("AppleWeight").value = 0;
    document.getElementById("OrangeWeight").value = 0;
    document.getElementById("GrapeWeight").value = 0;
}

// Function to reset only the prices of the fruits
function resetPrices() {
    document.getElementById("ApplePrice").value = 0;
    document.getElementById("OrangePrice").value = 0;
    document.getElementById("GrapePrice").value = 0;
}

// Function to reset everything
function resetAll() {
    resetWeights();                 
    resetPrices();                  
    document.getElementById("discount").value = 0; 
    calculate();                    
}