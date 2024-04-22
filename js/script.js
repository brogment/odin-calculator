
let num1 = 0;
let num2 = 0;
let operator = '';
let displayVal = '';
document.getElementById('display').textContent = displayVal;

function operate (num1, operator, num2) {
    if(operator=='+'){
        return add(num1, num2);
    } else if(operator=='-'){
        return subtrack(num1, num2);
    } else if(operator=='*'){
        return multiply(num1, num2);
    } else if(operator=='/'){
        return divide(num1, num2);
    } 
}

function add (num1, num2){
    return num1 + num2;
}
function subtrack (num1, num2){
    return num1 - num2;
}
function multiply (num1, num2){
    return num1 * num2;
}
function divide (num1, num2){
    return num1 / num2;
}

function action(str){
    if(str==='+' || str==='-' || str==='*' || str==='/'){
        if(operator){ 
            num1=operate(num1, operator, Number(displayVal))
            operator = str;
            displayVal = '';
            document.getElementById('display').textContent = num1;
        } else {

        operator = str;

        if(num1 === 0){
            num1=Number(displayVal);
        } else {num1 = operate(num1, operator, Number(displayVal))}

        displayVal = '';
        document.getElementById('display').textContent = num1;
        }
    }else if(str==='='){
        if(num1 == 0){
            num1=Number(displayVal);
        } else if(operator === ''){
            num1=Number(displayVal);
        } else {
            num1 = operate(num1, operator, Number(displayVal))
        }      
        operator = '';
        displayVal = num1;
        num1=0;
        document.getElementById('display').textContent = displayVal;     
    } else if(str === 'AC'){
        //causes bug in * and / after
        num1 = 0;
        displayVal = '';
        document.getElementById('display').textContent = num1;
        operator = '';
    } else if(str === '%'){
        displayVal = Number(displayVal) / 100
        document.getElementById('display').textContent = displayVal;
    } else if(str === '+/-'){
        displayVal = Number(displayVal) * -1;
        document.getElementById('display').textContent = displayVal;
    } else if(/^[0-9]$/.test(str) || str === '.'){
        displayVal += str;
        document.getElementById('display').textContent = displayVal;
    }
}

document.addEventListener('keydown', (e) => {
    const keyButton  = document.querySelector(`[data-key="${e.keyCode}"]`);
    keyButton.classList.add('pressed');
    action(e.key); 
});

document.addEventListener('keyup', (e) =>{
    const keyButton  = document.querySelector(`[data-key="${e.keyCode}"]`);
    keyButton.classList.remove('pressed')
});

document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('mousedown', (e) => {
        button.classList.add('pressed');
        action(e.target.innerText)
    });
    button.addEventListener('mouseup', () => {
        button.classList.remove('pressed');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('pressed');
    });
});