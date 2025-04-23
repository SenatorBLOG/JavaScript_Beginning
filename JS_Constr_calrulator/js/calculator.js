let i = 0;
function addMaterial(){
    "use strict";
    const heightHtml = document.getElementById('height'); 
    const lengthHtml = document.getElementById('length'); 
    const widthHtml = document.getElementById('width'); 
    const materialHtml = document.getElementById('material');
    
    const height = parseFloat(heightHtml.value);
    const length = parseFloat(lengthHtml.value);
    const width = parseFloat(widthHtml.value);
    let material = parseInt(materialHtml.value);

    if (material ==1){
        materialStr = "Wood";
    }else if(material == 2){
        material = "Metal";
    }else if(material ==3){
        material = "Plastic";
    }

    if(height < 0){
        alert("Height cannot be less than 0.");
        return;
    }
    if(length < 0){
        alert("Length cannot be less than 0.");
        return;
    }
    if(width < 0){
        alert("Width cannot be less than 0.");
        return;
    }
    
    if(!document.getElementById('resultHeader')){
        const result = document.createElement('li');
        result.className = "resultClass";
        result.id = "resultHeader";
        result.innerHTML = `
            <strong>Height</strong>
            <strong>Length</strong>
            <strong>Width</strong>
            <strong>Material</strong>
            `;
        resultHtml.appendChild(result);
    }
    const row = document.createElement('li');
    row.innerHTML = `<label id="height${i}">${height}</label>
            <label id="length${i}">${length}</label>
            <label id="width${i}">${width}</label>
            <label id="material${i}">${material}</label>`;
    resultHtml.appendChild(row);
    i++;
}
function calcPrice(){
    const packs = [];
    for(let a = 0;a<i;a++){
        height[a] = document.getElementById(`height${a}`).value;
        length[a] = document.getElementById(`length${a}`).value;
        width[a] = document.getElementById(`width${a}`).value;
    }
}
