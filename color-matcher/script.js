const buttons = document.querySelectorAll('.blue');
const player_buttons = document.querySelectorAll('.player-buttons');
const blue_classes = ['blue-1', 'blue-2', 'blue-3', 'blue-4'];
const green_classes = ['green-1', 'green-2', 'green-3', 'green-4']
const red_classes = ['red-1', 'red-2', 'red-3', 'red-4'];
let computer_classes = [];
let player_classes = [];
let theme;

const body = document.body;
const html = document.documentElement; // Select the <html> element
const themes_heading = document.querySelector('.themes-heading');
const heading = document.querySelector('.heading');
const information_p = document.querySelector('.information-p');
const fail_display = document.querySelector('.fails');
const win_display = document.querySelector('.wins');
const grid = document.querySelector('.grid');
const player_grid = document.querySelector('.player-grid');
const blue_theme_button = document.querySelector('.blue-theme');
const red_theme_button = document.querySelector('.red-theme');
const green_theme_button = document.querySelector('.green-theme')
const check_button = document.querySelector('.check-button');


function setRed() {
    body.classList.add('red');
    themes_heading.classList.add('red');
    heading.classList.add('red');
    information_p.classList.add('red');
    fail_display.classList.add('red');
    win_display.classList.add('red');
    grid.classList.add('red');
    player_grid.classList.add('red');
    blue_theme_button.classList.add('red');
    red_theme_button.classList.add('red');
    green_theme_button.classList.add('red');
    check_button.classList.add('red')
    html.classList.add('red'); // Add 'red' class to <html> element
    body.classList.remove('green');
    themes_heading.classList.remove('green');
    heading.classList.remove('green');
    information_p.classList.remove('green');
    fail_display.classList.remove('green');
    win_display.classList.remove('green');
    grid.classList.remove('green');
    player_grid.classList.remove('green');
    blue_theme_button.classList.remove('green');
    red_theme_button.classList.remove('green');
    green_theme_button.classList.remove('green');
    check_button.classList.remove('green')
    html.classList.remove('green'); // Ensure 'red' class is removed
}

function setGreen() {
    body.classList.add('green');
    themes_heading.classList.add('green');
    heading.classList.add('green');
    information_p.classList.add('green');
    fail_display.classList.add('green');
    win_display.classList.add('green');
    grid.classList.add('green');
    player_grid.classList.add('green');
    blue_theme_button.classList.add('green');
    red_theme_button.classList.add('green');
    green_theme_button.classList.add('green');
    check_button.classList.add('green')
    html.classList.add('green'); // Add 'red' class to <html> element
    body.classList.remove('red');
    themes_heading.classList.remove('red');
    heading.classList.remove('red');
    information_p.classList.remove('red');
    fail_display.classList.remove('red');
    win_display.classList.remove('red');
    grid.classList.remove('red');
    player_grid.classList.remove('red');
    blue_theme_button.classList.remove('red');
    red_theme_button.classList.remove('red');
    green_theme_button.classList.remove('red');
    check_button.classList.remove('red')
    html.classList.remove('red'); // Ensure 'red' class is removed
}

function setBlue() {
    body.classList.remove('red');
    themes_heading.classList.remove('red');
    heading.classList.remove('red');
    information_p.classList.remove('red');
    fail_display.classList.remove('red');
    win_display.classList.remove('red');
    grid.classList.remove('red');
    player_grid.classList.remove('red');
    blue_theme_button.classList.remove('red');
    red_theme_button.classList.remove('red');
    green_theme_button.classList.remove('red');
    check_button.classList.remove('red')
    html.classList.remove('red'); // Ensure 'red' class is removed
    body.classList.remove('green');
    themes_heading.classList.remove('green');
    heading.classList.remove('green');
    information_p.classList.remove('green');
    fail_display.classList.remove('green');
    win_display.classList.remove('green');
    grid.classList.remove('green');
    player_grid.classList.remove('green');
    blue_theme_button.classList.remove('green');
    red_theme_button.classList.remove('green');
    green_theme_button.classList.remove('green');
    check_button.classList.remove('green')
    html.classList.remove('green'); // Ensure 'red' class is removed
}

// Initialize theme from localStorage
let selectedTheme = JSON.parse(localStorage.getItem('theme')) || 'blue'; // Default to 'blue'
if (selectedTheme === 'blue') {
    setBlue();
    setColor(blue_classes);
    updatePlayerButtons();
} else if (selectedTheme === 'red') {
    setRed();
    setColor(red_classes);
    updatePlayerButtons();
} else if (selectedTheme === 'green') {
    setGreen();
    setColor(green_classes);
    updatePlayerButtons();
}

// Update the event listeners for theme buttons
blue_theme_button.addEventListener('click', () => {
    theme = 'blue';
    localStorage.setItem('theme', JSON.stringify(theme));
    setBlue();
    setColor(blue_classes);
    updatePlayerButtons();
    Reload()
});

green_theme_button.addEventListener('click', () => {
    theme = 'green';
    localStorage.setItem('theme', JSON.stringify(theme));
    setBlue();
    setColor(blue_classes);
    updatePlayerButtons();
    Reload()
});

red_theme_button.addEventListener('click', () => {
    theme = 'red';
    localStorage.setItem('theme', JSON.stringify(theme));
    setRed();
    setColor(red_classes);
    updatePlayerButtons();
    Reload()
});

// Initialize fails and wins
let fails = JSON.parse(localStorage.getItem('fails')) || 1;
let wins = JSON.parse(localStorage.getItem('wins')) || 1;
fail_display.innerHTML = `Fails: ${fails}`;
win_display.innerHTML = `Wins: ${wins}`;

function setColor(array) {
    computer_classes = []; // Reset computer classes for new game
    buttons.forEach(button => {
        // Clear existing theme classes
        blue_classes.forEach(cls => button.classList.remove(cls));
        red_classes.forEach(cls => button.classList.remove(cls));
        
        const selectedClass = array[Math.floor(Math.random() * array.length)];
        computer_classes.push(selectedClass);
        button.classList.add(selectedClass);
    });

    // Reset player buttons to default (white) for new game
    player_buttons.forEach(button => {
        blue_classes.forEach(cls => button.classList.remove(cls));
        red_classes.forEach(cls => button.classList.remove(cls));
        button.classList.add(`white`); // Reset to default 'white' class
    });
}

player_buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonClasses = Array.from(button.classList);
        const currentClass = buttonClasses.find(cls => cls.startsWith(`${selectedTheme}-`));

        if (currentClass) {
            const currentIndex = parseInt(currentClass.split('-')[1]) - 1;
            const nextIndex = (currentIndex + 1) % 4;
            console,
            button.classList.remove(currentClass);
            button.classList.add(`${selectedTheme}-${nextIndex + 1}`);
        } else {
            button.className = ''; // Clear all classes
            button.classList.add(`${selectedTheme}-1`);
        }
    });
});

// Function to update all player buttons' classes to match the current theme
function updatePlayerButtons() {
    player_buttons.forEach(button => {
        const buttonClasses = Array.from(button.classList);
        const themeClass = buttonClasses.find(cls => /^(blue|red)-\d$/.test(cls));
        if (themeClass) {
            button.classList.remove(themeClass);
            button.classList.add(`${selectedTheme}-1`); // Reset to the first class of the new theme
        }
    });
}


check_button.addEventListener('click', () => {
    checkGrid();
});

function Reload() {
    window.location.reload();
}

function checkGrid() {
    player_buttons.forEach((button) => {
        const buttonClasses = Array.from(button.classList);
        if (buttonClasses.includes(`${selectedTheme}-1`)) {
            player_classes.push(`${selectedTheme}-1`)
        } else if (buttonClasses.includes(`${selectedTheme}-2`)) {
            player_classes.push(`${selectedTheme}-2`)
        } else if (buttonClasses.includes(`${selectedTheme}-3`)) {
            player_classes.push(`${selectedTheme}-3`)
        } else if (buttonClasses.includes(`${selectedTheme}-4`)) {
            player_classes.push(`${selectedTheme}-4`)
        }
    })
    let bool = checkArrays()
    if (bool) {
        document.querySelector('.status').innerHTML = '✅'
        wins += 1;
        localStorage.setItem("wins", JSON.stringify(wins))
        setTimeout(Reload, 1000)
    } else if (!bool) {
        document.querySelector('.status').innerHTML = '❌'
        fails += 1;
        localStorage.setItem("fails", JSON.stringify(fails))
        setTimeout(Reload, 1000)
    }
}

function checkArrays() {
    if (player_classes.length !== computer_classes.length) {
        return false;
    } else {
        for (let i = 0; i < computer_classes.length; i++) {
            if (player_classes[i] !== computer_classes[i]) {
                return false; 
            }
        }
        return true;
    }
}