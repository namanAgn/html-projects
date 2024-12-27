moneyDisplay = document.querySelector('.money-display');
playerDisplay = document.querySelector('.player-display');
statusDisplay = document.querySelector('.status');
guessesDisplay = document.querySelector('.correct-guesses');

helpParas = document.querySelectorAll('.help');

tenButton = document.querySelector('.ten-dollars');
fiveButton = document.querySelector('.five-dollars');
oneButton = document.querySelector('.one-dollar');
halfDollarButton = document.querySelector('.half-dollar');
dimeButton = document.querySelector('.dime');
nickelButton = document.querySelector('.nickel');
pennyButton = document.querySelector('.penny');

let playerAmount = 0;

let guesses = JSON.parse(localStorage.getItem('guesses'));

if (guesses == 1 || guesses > 1) {
    helpParas.forEach(para => {
        para.style.display = 'none';
    })
}

guessesDisplay.innerHTML = `correct guesses <span>${guesses}</span>`

let selectedAmount = (Math.random() * 25).toFixed(2);

playerDisplay.innerText = '$0.00'

moneyDisplay.innerText = '$' + selectedAmount;

tenButton.addEventListener('click', () => {
    playerAmount += 10
    playerDisplay.innerText = '$' + playerAmount.toFixed(2)
    
    if (selectedAmount === playerAmount.toFixed(2)) {
        guesses += 1
        localStorage.setItem('guesses', JSON.stringify(guesses))
        window.location.reload()
    } else if (selectedAmount < playerAmount.toFixed(2)) {
        window.location.reload()
    }
});

fiveButton.addEventListener('click', () => {
    playerAmount += 5
    playerDisplay.innerText = '$' + playerAmount.toFixed(2)
    
    if (selectedAmount === playerAmount.toFixed(2)) {
        guesses += 1
        localStorage.setItem('guesses', JSON.stringify(guesses))
        window.location.reload()
    } else if (selectedAmount < playerAmount.toFixed(2)) {
        window.location.reload()
    }
});

oneButton.addEventListener('click', () => {
    playerAmount += 1
    playerDisplay.innerText = '$' + playerAmount.toFixed(2)
    
    if (selectedAmount === playerAmount.toFixed(2)) {
        guesses += 1
        localStorage.setItem('guesses', JSON.stringify(guesses))
        window.location.reload()
    } else if (selectedAmount < playerAmount.toFixed(2)) {
        window.location.reload()
    }
});

halfDollarButton.addEventListener('click', () => {
    playerAmount += 0.50
    playerDisplay.innerText = '$' + playerAmount.toFixed(2)

    if (selectedAmount === playerAmount.toFixed(2)) {
        guesses += 1
        localStorage.setItem('guesses', JSON.stringify(guesses))
        window.location.reload()
    } else if (selectedAmount < playerAmount.toFixed(2)) {
        window.location.reload()
    }
});

dimeButton.addEventListener('click', () => {
    playerAmount += 0.10
    playerDisplay.innerText = '$' + playerAmount.toFixed(2)
    
    if (selectedAmount === playerAmount.toFixed(2)) {
        guesses += 1
        localStorage.setItem('guesses', JSON.stringify(guesses))
        window.location.reload()
    } else if (selectedAmount < playerAmount.toFixed(2)) {
        window.location.reload()
    }
});

nickelButton.addEventListener('click', () => {
    playerAmount += 0.05
    playerDisplay.innerText = '$' + playerAmount.toFixed(2)

    if (selectedAmount === playerAmount.toFixed(2)) {
        guesses += 1
        localStorage.setItem('guesses', JSON.stringify(guesses))
        window.location.reload()
    } else if (selectedAmount < playerAmount.toFixed(2)) {
        window.location.reload()
    }
});

pennyButton.addEventListener('click', () => {
    playerAmount += 0.01 
    playerDisplay.innerText = '$' + playerAmount.toFixed(2)

    if (selectedAmount === playerAmount.toFixed(2)) {
        guesses += 1
        localStorage.setItem('guesses', JSON.stringify(guesses))
        window.location.reload()
    } else if (selectedAmount < playerAmount.toFixed(2)) {
        window.location.reload()
    }
});