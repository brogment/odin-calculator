
let num1 = 0;
let num2 = 0;
let operator = '';
let displayVal = '';
document.getElementById('display').textContent = 0;

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


function depressKey(e){
    
    const keyButton  = document.querySelector(`[data-key="${e.keyCode}"]`);
    keyButton.classList.add('pressed');  

    displayVal += e.key;
    document.getElementById('display').textContent = displayVal;

    if(e.key==='+' || e.key==='-' || e.key==='*' || e.key==='/'){
        
        if(operator){ 
            num1=operate(num1, operator, Number(displayVal.slice(0, -1)))
            operator = e.key;
            displayVal = '';
            document.getElementById('display').textContent = num1;

        } else {

        operator = e.key;

        if(num1 == 0){
            num1=Number(displayVal.slice(0, -1));
        } else {num1 = operate(num1, operator, Number(displayVal.slice(0, -1)))}

        displayVal = '';
        document.getElementById('display').textContent = num1;
        }
    }

    if(e.key==='='){
        if(num1 == 0){
            num1=Number(displayVal.slice(0, -1));
        } else if(operator === ''){
            num1=Number(displayVal.slice(0, -1));
        } else {
            num1 = operate(num1, operator, Number(displayVal.slice(0, -1)))
        }
        
        operator = '';
        displayVal = num1;
        num1=0;
        document.getElementById('display').textContent = displayVal;     
    }
}

//only for press effect
function unDepressKey(e){
    const keyButton  = document.querySelector(`[data-key="${e.keyCode}"]`);
    keyButton.classList.remove('pressed');
}



window.addEventListener('keydown', depressKey);
window.addEventListener('keyup', unDepressKey);
window.addEventListener('mousedown', depressKey);
window.addEventListener('mouseup', unDepressKey);
