let i = 0;
function addSubject(){
    "use strict";
    console.log("Функция вызвана!");
    if(!document.getElementById('headerId')){
        const resultHeader = document.createElement('span');
        const header = document.createElement('li');
        const calcBtn = document.createElement('button');
        
        header.id = "headerId";
        calcBtn.onclick = calcAvg;
        resultHeader.innerHTML = `<h2>Subjects</h2>`;
        header.innerHTML = `
            <div>Subject</div>
            <div>Assignment</div>
            <div>Quizzes</div>
            <div>Midterm</div>
            <div>Final</div>
        `;
        calcBtn.innerHTML = `Calculate Average`;
        result.appendChild(resultHeader);
        subjectList.appendChild(header); 
        calculateButton.appendChild(calcBtn);
        
    }
    const row = document.createElement('li');
    row.id = "rowId";
    row.innerHTML = `<input id="subject${i}">
    <input id="assingnment${i}">
    <input id="quizes${i}">
    <input id="midterm${i}">
    <input id="final${i}">`;
    subjectList.appendChild(row);
    i++;
}
function calcAvg(){

    const subject =[];
    const assingnment =[];
    const quizes =[];
    const midterm =[];
    const final =[];
    const sum = [];

    for(let a = 0; a < i; a++){
        subject[a] = document.getElementById(`subject${a}`).value;
         assingnment[a] = document.getElementById(`assingnment${a}`).value;
         quizes[a] = document.getElementById(`quizes${a}`).value;
         midterm[a] = document.getElementById(`midterm${a}`).value;
         final[a] = document.getElementById(`final${a}`).value;
         sum[a] = (assingnment[a] * 0.2) + (quizes[a] * 0.15)
         + (midterm[a] * 0.3) + (final[a] *0.35);
        
         const calcList = document.createElement('li');
         calcList.id = "calcListId";
         calcList.innerHTML = `<div>${subject[a]}</div>
         <div>${sum[a]}</div>`
         calculatedList.appendChild(calcList);

    }
}