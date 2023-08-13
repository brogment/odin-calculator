
let num1 = 0;
let num2 = 0;
let operator = '';
let displayVal = '';


function operate (num1, operator, num2) {
    if(operator=='+'){
        console.log (add(num1, num2));
        document.getElementById('display').textContent = add(num1, num2);
    } else if(operator=='-'){
        console.log (subtrack(num1, num2));
    } else if(operator=='*'){
        console.log (multiply(num1, num2));
    } else if(operator=='/'){
        console.log (divide(num1, num2));
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
    
    if(e.key==='+'){
        operator = '+';
        num1 = num1 + Number(displayVal.slice(0, -1));
        displayVal = '';
        document.getElementById('display').textContent = num1;
    }

    if(e.key==='='){
        num2 = +(displayVal.slice(0, -1));
        displayVal = operate(num1, operator, num2);
        
    }

    
}

//only for press effect
function unDepressKey(e){
    const keyButton  = document.querySelector(`[data-key="${e.keyCode}"]`);
    keyButton.classList.remove('pressed');
}



window.addEventListener('keydown', depressKey);
window.addEventListener('keyup', unDepressKey);