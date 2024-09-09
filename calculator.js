var inputElemnt = document.querySelector('.inputs')
var resultElemnt = document.querySelector('.result')

function display(digit){
    inputElemnt.innerText += digit;
}

function calculate(){
    let exp = inputElemnt.innerText
    exp = exp.replaceAll('x','*')
    exp = exp.replaceAll('÷','/')
    exp = exp.replaceAll('+/-','(-')
    resultElemnt.innerText = parseFloat(eval(exp).toFixed(3));
}

function reset(){
    inputElemnt.innerText ='';
    resultElemnt.innerText ='';
}

function undo(){
    const exp = inputElemnt.innerText;
    inputElemnt.innerText = exp.slice(0,-1)
}

