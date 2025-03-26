//JavaScript source code
function checkSign(){
    let userInput = document.getElementById("input1").value;
    if(userInput>0)
        document.getElementById("output").innerHTML = "You entered a <b>positive</b> number " + userInput;
    else if(userInput<0)
        document.getElementById("output").innerHTML = "You entered a <b>negative</b> number " + userInput;
    else
        document.getElementById("output").innerHTML = "You entered a <b>zero</b> " + userInput;

}
function showMonthName(){
    let monthNumber = +document.getElementById("monthNumber").value;

    let monthName;
    if(monthNumber == 1){
        monthName = "January";
    }
    else if(monthNumber == 2){
        monthName = "February";
    }
    else if(monthNumber == 3){
        monthName = "March";
    }
    else
        monthName = "Error";
    document.getElementById("monthName").innerText = monthName;
}
function showSeason(){
    let monthNumber = +document.getElementById("monthNumber").value;
    let seasonName;
    if(monthNumber == 1 || monthNumber == 2 ||monthNumber == 3)
        seasonName = "Winter";
    else if(monthNumber == 4 || monthNumber == 5 ||monthNumber == 6)
        seasonName = "Spring";
    else(monthNumber == 7 || monthNumber == 8 ||monthNumber == 9)
        seasonName = "Summer";
    document.getElementById("monthName").innerText = seasonName;
}