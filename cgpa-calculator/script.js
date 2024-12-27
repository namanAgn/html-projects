const addGrade = document.querySelector('.add-grade');
const selector = document.querySelector('.grades');
const tableBody = document.querySelector('.table-body-a');
const creditSelector = document.querySelector('.credits');
const cgpaDisplay = document.querySelector('.cgpa-display');
const cgpaCalculate = document.querySelector('.cgpa-calculate');

const grades = {
    "A+": 10,
    "A": 9,
    "B+": 8,
    "B": 7,
    "C+": 6,
    "C": 5,
    "D+": 4,
    "D": 3,
    "F": 0
}

const inputedGrades = []
const inputedCredits = []
let addedGrades = 0

function funcAddGrade() {
    addedGrades += 1

    inputedGrades.push(grades[selector.value]);
    inputedCredits.push(creditSelector.value)
    
    const newRow = document.createElement('tr');
    
    const newSerial = document.createElement('td');
    newSerial.innerText = addedGrades
    newRow.appendChild(newSerial)
    
    const newGrade = document.createElement('td');
    newGrade.innerText = selector.value;
    newRow.appendChild(newGrade)

    const newCredit = document.createElement('td');
    newCredit.innerText = creditSelector.value;
    newRow.appendChild(newCredit)
    
    tableBody.appendChild(newRow)
}

function calculateCGPA() {
    let totalGradePoints = 0
    let totalCredits = 0

    for (let i = 0; i < inputedGrades.length; i++) {
        totalGradePoints += inputedGrades[i] * inputedCredits[i]
        totalCredits += Number(inputedCredits[i])
    }

    let cgpa = totalGradePoints / totalCredits
    if (!cgpa) {
        cgpaDisplay.innerText = 'Your CGPA is: 0'
    } else {
        cgpaDisplay.innerText = 'Your CGPA is: ' + cgpa.toFixed(2)
    }
}

addGrade.addEventListener('click', () => {
    funcAddGrade()
})

cgpaCalculate.addEventListener('click', () => {
    calculateCGPA()
})