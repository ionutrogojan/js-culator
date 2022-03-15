operators = document.querySelectorAll('#operator');
numbers = document.querySelectorAll('#number');
resultText = document.querySelector('#result');
equationText = document.querySelector('#equation');

let numberValue, operatorValue;

let equation = '';

let x = 5;
let sum = eval('0');
console.log(sum);

for(let n = 0; n < numbers.length; n++){
    numbers[n].addEventListener('click', () => {
        numberValue = numbers[n].getAttribute('data-value');
        addToEquation(numberValue);
    });
}

for(let o = 0; o < operators.length; o++){
    operators[o].addEventListener('click', () => {
        operatorValue = operators[o].getAttribute('data-value');
        addToEquation(operatorValue);
    });
}

function textToEquation(text){
    return eval(text);
}

function addToEquation(value){
    switch(value){
        case '=':
            if(equation.length <= 0){
                equation = '0';
            }else{
                resultText.innerText = textToEquation(equation);
                equationText.innerText = equation;
                equation = textToEquation(equation);
            }
        break;
        case '<':
            if(equation.length > 1){
                equation = equation.slice(0, equation.length - 1);
            }else{
                equation = '0';
            }
            resultText.innerText = equation;
        break;
        default:
            if(equation.length >= 14) return;
            if(equation == '0'){
                equation = '';
            }
                equation += value;
            resultText.innerText = equation;
        break;
    }
}