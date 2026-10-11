let num1 = null;
let num2 = null;
let operator = null;
let clear = false;
let firstType = true;


function addCalc(num1, num2){
    return num1 + num2;
}

function subtractCalc(num1, num2){
    return num1 - num2;
}

function multiplyCalc(num1, num2){
    return num1 * num2;
}

function divideCalc(num1, num2){
    return num1/num2;
}

function operate(num1, num2, operator){
    switch (operator){
        case 'multiply':
            return multiplyCalc(num1, num2);
        case 'add':
            return addCalc(num1, num2);
        case 'subtract':
            return subtractCalc(num1, num2);
        case 'divide':
            return divideCalc(num1, num2);
    }
}



const clearButton = document.getElementById('C');
clearButton.addEventListener('click',clearDisplay)

function clearDisplay(){
    num1 = null;
    num2 = null;
    operator = null;
    clear = true;
    firstType = true;
    setDisplay(0)
}

function setDisplay(display){
    const displayScreen = document.querySelector('p')
    if(clear){
        displayScreen.textContent = `${display}`;
    }else if(clear === false && firstType === true){
        displayScreen.textContent = `${display}`;
        firstType = false;
    }else{
        displayScreen.textContent = `${displayScreen.textContent}${display}`;
    }
}

const numButtons = [];
for(let i=0;i<10;i++){
    const button = document.getElementById(`${i}`)
    button.addEventListener('click', () => typeNumber(i))
    numButtons.push(button)
}

function typeNumber(number){
    clear = false;
    setDisplay(number);
}