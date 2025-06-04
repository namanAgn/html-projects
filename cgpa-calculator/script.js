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

let inputedGrades = JSON.parse(localStorage.getItem('inputedGrades')) || []
let inputedCredits = JSON.parse(localStorage.getItem('inputedCredits')) || []
let addedGrades = 0

inputedGrades.forEach((grade, index)=> {
    displayGrade(grade, inputedCredits[index], index)
})

addedGrades = inputedGrades.length

function funcAddGrade(grade, credit) {
    inputedGrades.push(grade);
    inputedCredits.push(credit);

    localStorage.setItem('inputedGrades', JSON.stringify(inputedGrades));
    localStorage.setItem('inputedCredits', JSON.stringify(inputedCredits));

    displayGrade(grade, credit, inputedGrades.length - 1);
}

function displayGrade(grade, credit, index) {
    const newRow = document.createElement('tr')

    const newSerial = document.createElement('td')
    newSerial.innerText = index + 1
    newRow.appendChild(newSerial)

    const newGrade = document.createElement('td')
    newGrade.innerText = Object.keys(grades).find(key => grades[key] === grade) || grade
    newRow.appendChild(newGrade)

    const newCredit = document.createElement('td')
    newCredit.innerText = credit
    newRow.appendChild(newCredit)

    const newDelete = document.createElement('td')
    const newDeleteButton = document.createElement('button')
    newDeleteButton.innerText = 'Delete'
    newDeleteButton.addEventListener('click', () => deleteGrade(index))
    newDelete.appendChild(newDeleteButton)
    newRow.appendChild(newDelete)

    tableBody.appendChild(newRow)
}


function deleteGrade(index) {
    inputedGrades.splice(index, 1)
    inputedCredits.splice(index, 1)

    localStorage.setItem('inputedGrades', JSON.stringify(inputedGrades))
    localStorage.setItem('inputedCredits', JSON.stringify(inputedCredits))

    tableBody.innerHTML = ''
    addedGrades = 0

    inputedGrades.forEach((grade, index) => {
        displayGrade(grade, inputedCredits[index], index)
        addedGrades++
    })
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
    funcAddGrade(grades[selector.value], creditSelector.value)
})

cgpaCalculate.addEventListener('click', () => {
    calculateCGPA()
})