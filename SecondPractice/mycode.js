//JavaScript source code
let elm1 = document.getElementById("input1");
let elm2 = document.getElementById("input2");

function add(){
    //variables
    "use strict";
    let result = document.getElementById("output");

    result.innerText = +elm1.value + +elm2.value;
    result.style.color = "red";

    /*document.getElementById("output").innerText = 
    Number(document.getElementById("input1").value)
     + +document.getElementById("input2").value;*/
}
function multiply(){
    let result = document.getElementById("output");

    result.innerText = elm1.value * elm2.value;
    result.style.color = "red";
}