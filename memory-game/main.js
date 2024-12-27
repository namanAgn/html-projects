const gameBoard = document.getElementById('gameBoard');
const statusDisplay = document.getElementById('status');
let themeSelected = false;
let cardsArray = [];
let attempts = 0;
let firstCard = null;
let secondCard = null;
let matchesFound = 0;
let wins = JSON.parse(localStorage.getItem('wins'))

// Listen for theme changes
document.querySelector('.theme-selection').addEventListener('change', (event) => {
    const selectedTheme = event.target.value;

    // If a theme is already selected, remove the current cards
    if (themeSelected) {
        removeTheme(); // Clear the current board
    }

    setTheme(selectedTheme); // Set the new theme
    themeSelected = true; // Mark that a theme is selected
});

function removeTheme() {
    // Clear current cards from the game board
    gameBoard.innerHTML = ''; // Clear the game board
}

function setTheme(theme) {
    if (theme === 'animals') {
        cardsArray = ['🐶', '🐶', '🐱', '🐱', '🦊', '🦊', '🐻', '🐻', '🐸', '🐸', '🐦', '🐦', '🦄', '🦄', '🐧', '🐧'];
    } else if (theme === 'space') {
        cardsArray = ['🪐', '🪐', '🌎', '🌎', '🚀', '🚀', '🌙', '🌙', '☄️', '☄️', '🛸', '🛸', '⭐', '⭐', '🌠', '🌠'];
    } else if (theme === 'pirate') {
        cardsArray = ['🏴‍☠️', '🏴‍☠️', '🦜', '🦜', '⚓', '⚓', '🏝', '🏝', '🗺', '🗺', '💰', '💰', '⛵', '⛵', '🏴', '🏴'];
    } else if (theme === 'sports') {
        cardsArray = ['⚽', '⚽', '🏀', '🏀', '🏈', '🏈', '🎾', '🎾', '🏐', '🏐', '🏓', '🏓', '🎳', '🎳', '🏏', '🏏'];
    } else if (theme === 'underwater') {
        cardsArray = ['🐠', '🐠', '🐬', '🐬', '🌊', '🌊', '🦀', '🦀', '🐙', '🐙', '🦈', '🦈', '🦑', '🦑', '🧜‍♀️', '🧜‍♀️'];
    } else if (theme === 'nature') {
        cardsArray = ['🌳', '🌳', '🌻', '🌻', '🍃', '🍃', '🌼', '🌼', '🌾', '🌾', '🌍', '🌍', '🌙', '🌙', '🌈', '🌈']    
    } else if (theme === 'emojis') {
        cardsArray = ['😀', '😀', '😂', '😂', '😎', '😎', '🤖', '🤖', '❤️', '❤️', '🎉', '🎉', '🌟', '🌟', '✨', '✨']
    } else if (theme === 'music') {
        cardsArray = ['🎶', '🎶', '🎵', '🎵', '🎤', '🎤', '🎧', '🎧', '🎹', '🎹', '🎸', '🎸', '🎻', '🎻', '🎺', '🎺']
    } else if (theme === 'food') {
        cardsArray = ['🍕', '🍕', '🍔', '🍔', '🍣', '🍣', '🍩', '🍩', '🌮', '🌮', '🍰', '🍰', '🍦', '🍦', '🍉', '🍉']
    }

    createCards(); // Create new cards based on the selected theme
}

function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}

// Replay button event listener
document.querySelector('.replay-button').addEventListener('click', () => {
    window.location.reload();
});

// Create and display the shuffled cards
function createCards() {
    const shuffledCards = shuffle(cardsArray);
    shuffledCards.forEach((cardValue) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = cardValue;
        card.innerHTML = cardValue;
        card.addEventListener('click', handleCardClick);
        gameBoard.appendChild(card);
    });
}

// Handle card clicks
function handleCardClick(event) {
    const clickedCard = event.target;

    // Don't allow clicking the same card twice or if already matched
    if (clickedCard === firstCard || clickedCard.classList.contains('flipped')) {
        return; // Exit if clicked card is the same or already flipped
    }

    clickedCard.classList.add('flipped');

    // Check if it's the first or second card clicked
    if (!firstCard) {
        firstCard = clickedCard; // Select the first card
    } else {
        secondCard = clickedCard; // Select the second card
        
        // Check for a match
        if (firstCard.dataset.value === secondCard.dataset.value) {
            matchesFound++;
            resetCards();
            attempts += 1;
            updateAttempts();
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                resetCards();
                attempts += 1;
                updateAttempts();
            }, 200);
        }

        // Check for a win condition
        if (matchesFound === cardsArray.length / 2) {
            statusDisplay.innerHTML = 'You win!';
            statusDisplay.classList.add('victory');
            wins += 1
            document.querySelector('.wins').innerHTML = `Wins: ${wins}`
            localStorage.setItem(JSON.parse('wins', wins))
        }
    }
}

// Reset the selected cards
function resetCards() {
    firstCard = null;
    secondCard = null;
}

// Update attempts display
function updateAttempts() {
    document.querySelector('.attempts').innerHTML = `Attempts: ${attempts}`;
}
