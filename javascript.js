let num1 = null;
let num2 = null;
let operator = null;
let clear = false;
let firstType = true;
let justPressedOperator = false;


function addCalc(num1, num2){
    return Number(num1) + Number(num2);
}

function subtractCalc(num1, num2){
    return Number(num1) - Number(num2);
}

function multiplyCalc(num1, num2){
    return Number(num1) * Number(num2);
}

function divideCalc(num1, num2){
    return Number(num1)/Number(num2);
}

function operate(num1, num2, operator){
    switch (operator){
        case 'multiply':
            setDisplay(multiplyCalc(num1, num2));
            break;
        case 'add':
            setDisplay(addCalc(num1, num2));
            break;
        case 'subtract':
            setDisplay(subtractCalc(num1, num2));
            break;
        case 'divide':
            setDisplay(divideCalc(num1, num2));
            break;
    }
}



const clearButton = document.getElementById('C');
clearButton.addEventListener('click',() => clearDisplay(true))


const numButtons = [];
for(let i=0;i<10;i++){
    const button = document.getElementById(`${i}`)
    button.addEventListener('click', () => typeNumber(i))
    numButtons.push(button)
}

const plusButton = document.getElementById(`+`)
const minusButton = document.getElementById(`-`)
const timesButton = document.getElementById(`x`)
const divideButton = document.getElementById(`÷`)
plusButton.addEventListener('click', () => typeOperator('plus'))
minusButton.addEventListener('click', () => typeOperator('minus'))
timesButton.addEventListener('click', () => typeOperator('times'))
divideButton.addEventListener('click', () => typeOperator('divide'))

const equalsButton = document.getElementById('=')
equalsButton.addEventListener('click', () => pressEqualsButton())


function pressEqualsButton(){
    clearDisplay();
    operate(num1, num2, operator);
    num1 = null;
    num2 = null;
    operator = null;
}

function clearDisplay(buttonPress){
    if(buttonPress){
        num1 = null;
        num2 = null;
        operator = null;
    }
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

function typeOperator(currentOperator){
    justPressedOperator = true;
    switch (currentOperator){
        case 'plus':
            operator = 'add'
            break;
        case 'minus':
            operator = 'subtract'
            break;
        case 'times':
            operator = 'multiply'
            break;
        case 'divide':
            operator = 'divide'
            break;
    }

}

function typeNumber(number){
    if(operator !== null){
        if(justPressedOperator){
            clearDisplay();
            justPressedOperator = false;
        }
        if(num2 === null){
            num2 = `${number}`
        }else{
            num2 = num2 + `${number}`
        }
    }else{
        if(num1 === null){
            num1 = `${number}`
        }else{
            num1 = num1 + `${number}`
        }
    }
    clear = false;
    setDisplay(number);
}