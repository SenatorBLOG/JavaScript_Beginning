function showMyName() {
    // Change the text and styles of the elements
    document.getElementById('displayName').innerText = '✨ You unlocked the magic! ✨';
    document.getElementById('nextChoice').innerText = 'JavaScript is awesome!';

    // Apply styles to the displayName element
    const displayName = document.getElementById('displayName');
    displayName.style.color = '#ffffff';
    displayName.style.backgroundColor = '#28a745';
    displayName.style.border = '2px solid #218838';
    displayName.style.padding = '1.5rem';
    displayName.style.fontSize = '1.5rem';
    displayName.style.transition = 'all 0.5s ease';

    // Apply styles to the nextChoice element
    const nextChoice = document.getElementById('nextChoice');
    nextChoice.style.color = '#007bff';
    nextChoice.style.fontWeight = 'bold';
    nextChoice.style.marginTop = '2rem';
}
function getShowName(){
    document.getElementById('displayElement').innerText = document.getElementById('userInput').value;
}

function add(){
    document.getElementById('result').innerText=
    document.getElementById('num1').value + document.getElementById('num2').value;
}