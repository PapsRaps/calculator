let num1;
let num2;
let operator;

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
    setDisplay(0)
}

function setDisplay(display){
    const displayScreen = document.querySelector('p')
    displayScreen.textContent = `${display}`;
}
