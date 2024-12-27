const Words = {
    hello: `<letter>h</letter> <letter>e</letter> <letter>l</letter> <letter>l</letter> <letter>o</letter>`,
    bye: `<letter>b</letter> <letter>y</letter> <letter>e</letter>`,
    thanks: `<letter>t</letter> <letter>h</letter> <letter>a</letter> <letter>n</letter> <letter>k</letter> <letter>s</letter>`,
    please: `<letter>p</letter> <letter>l</letter> <letter>e</letter> <letter>a</letter> <letter>s</letter> <letter>e</letter>`,
    welcome: `<letter>w</letter> <letter>e</letter> <letter>l</letter> <letter>c</letter> <letter>o</letter> <letter>m</letter> <letter>e</letter>`,
    good: `<letter>g</letter> <letter>o</letter> <letter>o</letter> <letter>d</letter>`,
    morning: `<letter>m</letter> <letter>o</letter> <letter>r</letter> <letter>n</letter> <letter>i</letter> <letter>n</letter> <letter>g</letter>`,
    night: `<letter>n</letter> <letter>i</letter> <letter>g</letter> <letter>h</letter> <letter>t</letter>`,
    friend: `<letter>f</letter> <letter>r</letter> <letter>i</letter> <letter>e</letter> <letter>n</letter> <letter>d</letter>`,
    love: `<letter>l</letter> <letter>o</letter> <letter>v</letter> <letter>e</letter>`,
    happy: `<letter>h</letter> <letter>a</letter> <letter>p</letter> <letter>p</letter> <letter>y</letter>`,
    phone: `<letter>p</letter> <letter>h</letter> <letter>o</letter> <letter>n</letter> <letter>e</letter>`,
    music: `<letter>m</letter> <letter>u</letter> <letter>s</letter> <letter>i</letter> <letter>c</letter>`,
    game: `<letter>g</letter> <letter>a</letter> <letter>m</letter> <letter>e</letter>`,
    water: `<letter>w</letter> <letter>a</letter> <letter>t</letter> <letter>e</letter> <letter>r</letter>`,
    apple: `<letter>a</letter> <letter>p</letter> <letter>p</letter> <letter>l</letter> <letter>e</letter>`,
    bread: `<letter>b</letter> <letter>r</letter> <letter>e</letter> <letter>a</letter> <letter>d</letter>`,
    chair: `<letter>c</letter> <letter>h</letter> <letter>a</letter> <letter>i</letter> <letter>r</letter>`,
    dance: `<letter>d</letter> <letter>a</letter> <letter>n</letter> <letter>c</letter> <letter>e</letter>`,
    drink: `<letter>d</letter> <letter>r</letter> <letter>i</letter> <letter>n</letter> <letter>k</letter>`,
    eagle: `<letter>e</letter> <letter>a</letter> <letter>g</letter> <letter>l</letter> <letter>e</letter>`,
    flower: `<letter>f</letter> <letter>l</letter> <letter>o</letter> <letter>w</letter> <letter>e</letter> <letter>r</letter>`,
    grapes: `<letter>g</letter> <letter>r</letter> <letter>a</letter> <letter>p</letter> <letter>e</letter> <letter>s</letter>`,
    house: `<letter>h</letter> <letter>o</letter> <letter>u</letter> <letter>s</letter> <letter>e</letter>`,
    juice: `<letter>j</letter> <letter>u</letter> <letter>i</letter> <letter>c</letter> <letter>e</letter>`,
    laugh: `<letter>l</letter> <letter>a</letter> <letter>u</letter> <letter>g</letter> <letter>h</letter>`,
    music: `<letter>m</letter> <letter>u</letter> <letter>s</letter> <letter>i</letter> <letter>c</letter>`,
    night: `<letter>n</letter> <letter>i</letter> <letter>g</letter> <letter>h</letter> <letter>t</letter>`,
    ocean: `<letter>o</letter> <letter>c</letter> <letter>e</letter> <letter>a</letter> <letter>n</letter>`,
    plant: `<letter>p</letter> <letter>l</letter> <letter>a</letter> <letter>n</letter> <letter>t</letter>`,
    queen: `<letter>q</letter> <letter>u</letter> <letter>e</letter> <letter>e</letter> <letter>n</letter>`,
    road: `<letter>r</letter> <letter>o</letter> <letter>a</letter> <letter>d</letter>`,
    snake: `<letter>s</letter> <letter>n</letter> <letter>a</letter> <letter>k</letter> <letter>e</letter>`,
    tree: `<letter>t</letter> <letter>r</letter> <letter>e</letter> <letter>e</letter>`,
    water: `<letter>w</letter> <letter>a</letter> <letter>t</letter> <letter>e</letter> <letter>r</letter>`,
    youth: `<letter>y</letter> <letter>o</letter> <letter>u</letter> <letter>t</letter> <letter>h</letter>`,
    animal: `<letter>a</letter> <letter>n</letter> <letter>i</letter> <letter>m</letter> <letter>a</letter> <letter>l</letter>`,
    baby: `<letter>b</letter> <letter>a</letter> <letter>b</letter> <letter>y</letter>`,
    cake: `<letter>c</letter> <letter>a</letter> <letter>k</letter> <letter>e</letter>`,
    dove: `<letter>d</letter> <letter>o</letter> <letter>v</letter> <letter>e</letter>`,
    elk: `<letter>e</letter> <letter>l</letter> <letter>k</letter>`,
    fish: `<letter>f</letter> <letter>i</letter> <letter>s</letter> <letter>h</letter>`,
    gate: `<letter>g</letter> <letter>a</letter> <letter>t</letter> <letter>e</letter>`,
    hero: `<letter>h</letter> <letter>e</letter> <letter>r</letter> <letter>o</letter>`,
    ice: `<letter>i</letter> <letter>c</letter> <letter>e</letter>`,
    job: `<letter>j</letter> <letter>o</letter> <letter>b</letter>`,
    kite: `<letter>k</letter> <letter>i</letter> <letter>t</letter> <letter>e</letter>`,
    log: `<letter>l</letter> <letter>o</letter> <letter>g</letter>`,
    map: `<letter>m</letter> <letter>a</letter> <letter>p</letter>`,
    note: `<letter>n</letter> <letter>o</letter> <letter>t</letter> <letter>e</letter>`,
    oak: `<letter>o</letter> <letter>a</letter> <letter>k</letter>`,
    pet: `<letter>p</letter> <letter>e</letter> <letter>t</letter>`,
    quiz: `<letter>q</letter> <letter>u</letter> <letter>i</letter> <letter>z</letter>`,
    rain: `<letter>r</letter> <letter>a</letter> <letter>i</letter> <letter>n</letter>`,
    sun: `<letter>s</letter> <letter>u</letter> <letter>n</letter>`,
    tie: `<letter>t</letter> <letter>i</letter> <letter>e</letter>`,
    urn: `<letter>u</letter> <letter>r</letter> <letter>n</letter>`,
    vet: `<letter>v</letter> <letter>e</letter> <letter>t</letter>`,
    wig: `<letter>w</letter> <letter>i</letter> <letter>g</letter>`,
    yarn: `<letter>y</letter> <letter>a</letter> <letter>r</letter> <letter>n</letter>`,
    tin: `<letter>t</letter> <letter>i</letter> <letter>n</letter>`,
    van: `<letter>v</letter> <letter>a</letter> <letter>n</letter>`,
    wax: `<letter>w</letter> <letter>a</letter> <letter>x</letter>`,
    box: `<letter>b</letter> <letter>o</letter> <letter>x</letter>`,
    yoke: `<letter>y</letter> <letter>o</letter> <letter>k</letter> <letter>e</letter>`,
};

let started = false;
let timePassed = 0;
let wordsTyped = 0;
let randomWordsArray = [];
let timePassedInterval; // Declare the interval variable here
const input = document.querySelector('.word-input');

// Function to select random words
function selectRandomWords() {
    const wordKeys = Object.keys(Words); // Get all keys (word names)
    const selectedWords = new Set(); // Use a Set to avoid duplicates
    
    while (selectedWords.size < 10) {
        const randomIndex = Math.floor(Math.random() * wordKeys.length); // Generate a random index
        selectedWords.add(wordKeys[randomIndex]); // Add the random word to the Set
    }

    randomWordsArray = Array.from(selectedWords); // Convert Set back to an array
}

// Function to display the selected random words
function displayRandomWords() {
    const wordDisplay = document.querySelector('.word-display');
    wordDisplay.innerHTML = ''; // Clear previous words

    randomWordsArray.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.innerHTML = Words[word]; // Set the HTML of the div
        wordElement.classList.add('word');
        wordDisplay.appendChild(wordElement); // Append the new word element
    });
}

// Call functions to select and display random words
selectRandomWords();
displayRandomWords();

// Focus on the input field
input.focus();

// Detect Enter key to start the game
document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !started) {
        document.querySelector('.heading').innerHTML = '';
        started = true;
        console.log(started);

        // Start the timer
        timePassedInterval = setInterval(() => {
            timePassed += 1;
            document.querySelector('.time-left-display').innerHTML = timePassed;
        }, 1000);
    }
});

// Input event listener for word typing
input.addEventListener('input', () => {
    if (started) { // Only listen if the game has started
        for (let word of randomWordsArray) {
            if (input.value.includes(word)) { // Check for exact match
                wordsTyped += 1;
                document.querySelector('.words-typed-display').innerHTML = `${wordsTyped}/${randomWordsArray.length}`;
                input.value = ''; // Clear the input
                break; // Exit loop after finding a match
            }
        }

        // Check if all words are typed
        if (wordsTyped === randomWordsArray.length) {
            clearInterval(timePassedInterval);
            let WPM = Math.round(randomWordsArray.length / (timePassed / 60));
            document.querySelector('.wpm-display').innerHTML = `WPM: ${WPM}`;
        }
    }
});
