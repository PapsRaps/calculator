let num1 = null;
let num2 = null;
let operator = null;
let clear = false;
let firstType = true;
let justPressedOperator = false;
let justPressedEquals = false;
const limit = 9;


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
            return multiplyCalc(num1, num2);
        case 'add':
            return addCalc(num1, num2);
        case 'subtract':
            return subtractCalc(num1, num2);
        case 'divide':
            return divideCalc(num1, num2);
    }
}


const displayScreen = document.querySelector('p')

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
    if(num1 !== null && num2 === null) return;
    justPressedEquals = true;
    solveEquation();
}

function solveEquation(){
    clearDisplay();
    let result = operate(num1, num2, operator);
    setDisplay(result);
    num1 = result;
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
    if(display === undefined || display === NaN){
        display = 0;
    }

    display = Number(Number(display).toFixed(2))

    if(String(display).length > limit){display='MADAMI'}

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
    justPressedEquals = false;

    if(operator !== null && num2 !== null) solveEquation();;

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
    if(justPressedEquals){
        num1 = null;
        num2 = null;
        justPressedEquals = false;
    }

    if(displayScreen.textContent === '0' && number === 0){
        return;
    }else{
        if(operator !== null){
            if(num2 === null){}
            else if((num2+`${number}`).length > limit)return;
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
            if(num1 === null){}
            else if((num1+`${number}`).length > limit)return;
            if(num1 === null){
                num1 = `${number}`
            }else{
                num1 = num1 + `${number}`
            }
        }
        clear = false;
        setDisplay(number);
    }
}





document.addEventListener('keydown', keyPress)

function keyPress(event){
    console.log(event.key)
    switch(event.key){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            typeNumber(event.key);
            break;
        case '+':
            typeOperator('plus');
            break;
        case '-':
            typeOperator('minus');
            break;
        case '*':
        case 'x':
            typeOperator('times');
            break;
        case '/':
            typeOperator('divide');
            break;
        case 'Enter':
            pressEqualsButton();
            break;
        case 'Backspace':
            clearDisplay(true)
            break;
    }
}