let equation = '';
let output = document.querySelector('.output');

let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        addToEquation(button.innerText);
    });
});

function addToEquation(value) {
    equation += value;
    output.innerHTML = equation;
}

function deleteEquation() {
    equation = '';
    output.innerHTML = equation;
}

function solve() {
        output.innerHTML = `${equation} = ${eval(equation)}`;
}

document.querySelector('.button-C').addEventListener('click', deleteEquation);
document.querySelector('.button-EQUALS').addEventListener('click', solve);