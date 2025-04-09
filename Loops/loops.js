// JAVAScript sourse code
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