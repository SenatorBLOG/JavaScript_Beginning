// JAVAScript sourse code
function findMax(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let number3 = document.getElementById('num3').value;
    let number4 = document.getElementById('num4').value;
    let max;
    
    max = maxValue(number1,number2,number3,number4);
        
    document.getElementById('output3').innerHTML = max;
}
function maxValue(n1,n2,n3,n4){
    let max = n1;
    if(n2>max){
        max = n2;
    } 
    if(n3>max){
        max = n3;
    } 
    if(n4>max){
        max = n4;
    } 
    return max;
}

function showText(){
    let inputElement = document.getElementById('userInput');
    let outputElement = document.getElementById('output');
    let repCount = document.getElementById('count').value;
    
    outputElement.innerHTML = " ";

    for(let i = 1; i<=repCount; i++){
        outputElement.innerHTML += inputElement.value + "<br/>";
    }
    let row = 1;
    while(row<=repCount){

    }
}
function showCars(){
    let cars = ["cat","dog"];
    let myDreamCars =[];
    myDreamCars.push("Cars");
    myDreamCars.push("Wolf");
    myDreamCars.push("Babar");
    myDreamCars.pop();

}
let foods = [];
function showFood(){
    let food = document.getElementById('userInput2').value;
    foods.push(food);

    let outputElement = document.getElementById('output2');
    outputElement.innerHTML = "";
    for (let i = 0;i<foods.length;i++){
        outputElement.innerHTML += "<li>" + foods[i] + "</li>";
    }
    
}
function  searchFood(){
    let food = document.getElementById('foodSearch').value;
    let outputElement = document.getElementById('searchResult');
    let found = false;
    for(let i = 0; i < foods.length; i++){
        if(foods[i] == food){
            outputElement.innerHTML = "Food found";
            found = true;
            
        }
    }
    if(!found){
        outputElement.innerHTML = "Not found";
    }
}