const operations = ['+', '-', 'x', '/'];

const firstNumberDisplay = document.querySelector('.number-1');
const secondNumberDisplay = document.querySelector('.number-2');
const operationDisplay = document.querySelector('.operator');

const inputField = document.querySelector('.input');
inputField.focus();

const selectedOperation = operations[Math.floor(Math.random() * operations.length)];
operationDisplay.innerText = selectedOperation;

let firstNumber;
let secondNumber;
let answer;

if (selectedOperation === '+') {
    firstNumber = Math.floor(Math.random() * 14);
    secondNumber = Math.floor(Math.random() * 21);
    answer = firstNumber + secondNumber;
} else if (selectedOperation === '-') {
    firstNumber = Math.floor(Math.random() * 8) * 2;
    secondNumber = Math.floor(Math.random() * (firstNumber + 1));
    answer = firstNumber - secondNumber;
} else if (selectedOperation === 'x') {
    firstNumber = Math.floor(Math.random() * 9);
    secondNumber = Math.floor(Math.random() * 8);
    answer = firstNumber * secondNumber;
} else if (selectedOperation === '/') {
    secondNumber = Math.floor(Math.random() * 10);
    while (secondNumber === 0) {
        secondNumber = Math.floor(Math.random() * 10);
    }
    firstNumber = secondNumber * Math.floor(Math.random() * 7);
    answer = firstNumber / secondNumber;
}

firstNumberDisplay.innerText = firstNumber;
secondNumberDisplay.innerText = secondNumber;

inputField.addEventListener('input', () => {
    if (parseInt(inputField.value, 10) === answer) {
        window.location.reload();
    }
});
