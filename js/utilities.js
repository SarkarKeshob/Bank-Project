function giveValue(input){
    return (parseFloat(input.innerText));
}

function giveHtml(inputField){
    
    return (document.getElementById(inputField));
}

function setNewValue(input1,input2){
    let newValue=(giveValue(input1))+input2;
    input1.innerText=newValue.toFixed(2);
}

function giveAlert(input){
    alert(input.value+' Is not a number. Please Insert a Valid One In The Box')
        input.value='';
}