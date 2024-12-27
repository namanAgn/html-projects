let cycleId;

function cycle() {
    const themes = [setLight, setDark, setPastel, setOcean]
    
    let index = 0;
    
    cycleId = setInterval(() => {
        themes[index]();

        index = (index + 1) % themes.length;
    }, 1000);
}
function stopCycle() {
    clearInterval(cycleId)
}

const html = document.querySelector('html')

const wordDisplay = document.querySelector('.word-display')
const wordInput = document.querySelector(".word-input")

const revealButton = document.querySelector('.reveal-button')
const lightButton = document.querySelector('.light-button')
const darkButton = document.querySelector('.dark-button')
const pastelButton = document.querySelector('.pastel-button')
const oceanButton = document.querySelector('.ocean-button')
const cycleButton = document.querySelector('.cycle-button')

const changeThemesP = document.querySelector('.change-themes-p')
const hintsTakenP = document.querySelector('.hints-taken')
const wordsGuessedP = document.querySelector('.words-guessed')
const revealWordP = document.querySelector('.reveal-word-p')

function setTheme() {
    let tempTheme = localStorage.getItem('theme');

    if (tempTheme === 'dark') {
        setDark();
    } else if (tempTheme === 'light') {
        setLight();
    } else if (tempTheme === 'pastel') {
        setPastel();
    } else if (tempTheme === 'ocean') {
        setOcean();
    } else if (tempTheme === 'cycle') {
        cycle()
    } 
}

setTheme()


const words = [
    "abalone",
    "albatross",
    "aloe",
    "amaryllis",
    "ant",
    "antelope",
    "apricot",
    "artichoke",
    "bagpipe",
    "basil",
    "basilisk",
    "barracuda",
    "bean",
    "blackberry",
    "blackcurrant",
    "cabbage",
    "cactus",
    "caterpillar",
    "chili",
    "clam",
    "clownfish",
    "coconut",
    "corn",
    "crab",
    "dahlia",
    "date",
    "deer",
    "dingo",
    "dolphin",
    "eel",
    "eggplant",
    "elderberry",
    "elephant",
    "eucalyptus",
    "fennel",
    "fern",
    "fungi",
    "gazelle",
    "ginger",
    "goose",
    "grapefruit",
    "haddock",
    "hibiscus",
    "hornet",
    "horse",
    "icefish",
    "iguana",
    "ink",
    "jar",
    "jasmine",
    "jellyfish",
    "kelp",
    "kiwi",
    "lemon",
    "lemur",
    "lime",
    "lobster",
    "lychee",
    "mango",
    "marigold",
    "mantis",
    "mackerel",
    "mulberry",
    "narwhal",
    "nashi",
    "nematode",
    "nectar",
    "okapi",
    "olive",
    "otter",
    "orchid",
    "orange",
    "owl",
    "pancake",
    "papaya",
    "passion",
    "pea",
    "penguin",
    "pine",
    "plankton",
    "quail",
    "quokka",
    "quince",
    "raven",
    "red panda",
    "rhino",
    "rock",
    "sage",
    "salmon",
    "seal",
    "shark",
    "soursop",
    "soy",
    "squid",
    "star",
    "tortoise",
    "tuna",
    "viper",
    "whelk",
    "wombat",
    "yak",
    "zebra",
    "acorn",
    "amber",
    "bamboo",
    "bee",
    "bird",
    "clover",
    "cork",
    "daisy",
    "dune",
    "fern",
    "flame",
    "frog",
    "globe",
    "grain",
    "hawk",
    "jade",
    "leaf",
    "maple",
    "mint",
    "nail",
    "oak",
    "pine",
    "pond",
    "rose",
    "rush",
    "sail",
    "seal",
    "sky",
    "snow",
    "stone",
    "sun",
    "tide",
    "twig",
    "wave"
];

function setDark() {
    document.body.classList.remove('light')
    document.body.classList.remove('pastel')
    document.body.classList.remove('ocean')
    html.classList.remove('light')
    html.classList.remove('pastel')
    html.classList.remove('ocean')

    wordDisplay.classList.remove('light')
    wordDisplay.classList.remove('pastel')
    wordDisplay.classList.remove('ocean')
    wordInput.classList.remove('light')
    wordInput.classList.remove('pastel')
    wordInput.classList.remove('ocean')

    revealButton.classList.remove('light')
    revealButton.classList.remove('pastel')
    revealButton.classList.remove('ocean')
    lightButton.classList.remove('light')
    lightButton.classList.remove('pastel')
    lightButton.classList.remove('ocean')
    darkButton.classList.remove('light')
    darkButton.classList.remove('pastel')
    darkButton.classList.remove('ocean')
    pastelButton.classList.remove('light')
    pastelButton.classList.remove('pastel')
    pastelButton.classList.remove('ocean')
    oceanButton.classList.remove('light')
    oceanButton.classList.remove('pastel')
    oceanButton.classList.remove('ocean')
    cycleButton.classList.remove('light')
    cycleButton.classList.remove('pastel')
    cycleButton.classList.remove('ocean')

    changeThemesP.classList.remove('light')
    changeThemesP.classList.remove('pastel')
    changeThemesP.classList.remove('ocean')
    hintsTakenP.classList.remove('light')
    hintsTakenP.classList.remove('pastel')
    hintsTakenP.classList.remove('ocean')
    wordsGuessedP.classList.remove('light')
    wordsGuessedP.classList.remove('pastel')
    wordsGuessedP.classList.remove('ocean')
    wordsGuessedP.classList.remove('light')
    wordsGuessedP.classList.remove('pastel')
    wordsGuessedP.classList.remove('ocean')
    revealWordP.classList.remove('light')
    revealWordP.classList.remove('pastel')
    revealWordP.classList.remove('ocean')
}
function setLight() {
    document.body.classList.add('light')
    document.body.classList.remove('pastel')
    document.body.classList.remove('ocean')
    html.classList.add('light')
    html.classList.remove('pastel')
    html.classList.remove('ocean')

    wordDisplay.classList.add('light')
    wordDisplay.classList.remove('pastel')
    wordDisplay.classList.remove('ocean')
    wordInput.classList.add('light')
    wordInput.classList.remove('pastel')
    wordInput.classList.remove('ocean')

    revealButton.classList.add('light')
    revealButton.classList.remove('pastel')
    revealButton.classList.remove('ocean')
    lightButton.classList.add('light')
    lightButton.classList.remove('pastel')
    lightButton.classList.remove('ocean')
    darkButton.classList.add('light')
    darkButton.classList.remove('pastel')
    darkButton.classList.remove('ocean')
    pastelButton.classList.add('light')
    pastelButton.classList.remove('pastel')
    pastelButton.classList.remove('ocean')
    oceanButton.classList.add('light')
    oceanButton.classList.remove('pastel')
    oceanButton.classList.remove('ocean')
    cycleButton.classList.add('light')
    cycleButton.classList.remove('pastel')
    cycleButton.classList.remove('ocean')

    changeThemesP.classList.add('light')
    changeThemesP.classList.remove('pastel')
    changeThemesP.classList.remove('ocean')
    hintsTakenP.classList.add('light')
    hintsTakenP.classList.remove('pastel')
    hintsTakenP.classList.remove('ocean')
    wordsGuessedP.classList.add('light')
    wordsGuessedP.classList.remove('pastel')
    wordsGuessedP.classList.remove('ocena')
    wordsGuessedP.classList.add('light')
    wordsGuessedP.classList.remove('pastel')
    wordsGuessedP.classList.remove('ocean')
    revealWordP.classList.add('light')
    revealWordP.classList.remove('pastel')
    revealWordP.classList.remove('ocean')
}
function setPastel() {
    document.body.classList.remove('light')
    document.body.classList.remove('ocean')
    document.body.classList.add('pastel')
    html.classList.remove('light')
    html.classList.remove('ocean')
    html.classList.add('pastel')

    wordDisplay.classList.remove('light')
    wordDisplay.classList.remove('ocean')
    wordDisplay.classList.add('pastel')
    wordInput.classList.remove('light')
    wordInput.classList.remove('ocean')
    wordInput.classList.add('pastel')

    revealButton.classList.remove('light')
    revealButton.classList.remove('ocean')
    revealButton.classList.add('pastel')
    lightButton.classList.remove('light')
    lightButton.classList.remove('ocean')
    lightButton.classList.add('pastel')
    darkButton.classList.remove('light')
    darkButton.classList.remove('ocean')
    darkButton.classList.add('pastel')
    pastelButton.classList.remove('light')
    pastelButton.classList.remove('ocean')
    pastelButton.classList.add('pastel')
    oceanButton.classList.remove('light')
    oceanButton.classList.remove('ocean')
    oceanButton.classList.add('pastel')
    cycleButton.classList.remove('light')
    cycleButton.classList.add('pastel')
    cycleButton.classList.remove('ocean')

    changeThemesP.classList.remove('light')
    changeThemesP.classList.remove('ocean')
    changeThemesP.classList.add('pastel')
    hintsTakenP.classList.remove('light')
    hintsTakenP.classList.remove('ocean')
    hintsTakenP.classList.add('pastel')
    wordsGuessedP.classList.add('pastel')
    wordsGuessedP.classList.remove('light')
    wordsGuessedP.classList.remove('ocean')
    wordsGuessedP.classList.add('pastel')
    revealWordP.classList.remove('light')
    revealWordP.classList.remove('ocean')
    revealWordP.classList.add('pastel')
}
function setOcean() {
    document.body.classList.remove('light')
    document.body.classList.remove('pastel')
    document.body.classList.add('ocean')
    html.classList.remove('light')
    html.classList.remove('pastel')
    html.classList.add('ocean')

    wordDisplay.classList.remove('light')
    wordDisplay.classList.remove('pastel')
    wordDisplay.classList.add('ocean')
    wordInput.classList.remove('light')
    wordInput.classList.remove('pastel')
    wordInput.classList.add('ocean')

    revealButton.classList.remove('light')
    revealButton.classList.remove('pastel')
    revealButton.classList.add('ocean')
    lightButton.classList.remove('light')
    lightButton.classList.remove('pastel')
    lightButton.classList.add('ocean')
    darkButton.classList.remove('light')
    darkButton.classList.remove('pastel')
    darkButton.classList.add('ocean')
    pastelButton.classList.remove('light')
    pastelButton.classList.remove('pastel')
    pastelButton.classList.add('ocean')
    oceanButton.classList.remove('light')
    oceanButton.classList.remove('pastel')
    oceanButton.classList.add('ocean')
    cycleButton.classList.remove('light')
    cycleButton.classList.remove('pastel')
    cycleButton.classList.add('ocean')

    changeThemesP.classList.remove('light')
    changeThemesP.classList.remove('pastel')
    changeThemesP.classList.add('ocean')
    hintsTakenP.classList.remove('light')
    hintsTakenP.classList.remove('pastel')
    hintsTakenP.classList.add('ocean')
    wordsGuessedP.classList.remove('light')
    wordsGuessedP.classList.remove('pastel')
    wordsGuessedP.classList.add('ocean')
    wordsGuessedP.classList.remove('light')
    wordsGuessedP.classList.remove('pastel')
    wordsGuessedP.classList.add('ocean')
    revealWordP.classList.remove('light')
    revealWordP.classList.remove('pastel')
    revealWordP.classList.add('ocean')
}

let theme;

document.querySelector('.dark-button').addEventListener('click', () => {
    stopCycle()
    setDark();
    theme = 'dark';
    localStorage.setItem('theme', theme);
});

lightButton.addEventListener('click', () => {
    stopCycle()
    setLight();
    theme = 'light';
    localStorage.setItem('theme', theme);
});

pastelButton.addEventListener('click', () => {
    stopCycle()
    setPastel();
    theme = 'pastel';
    localStorage.setItem('theme', theme);
});

oceanButton.addEventListener('click', () => {
    stopCycle()
    setOcean();
    theme = 'ocean';
    localStorage.setItem('theme', theme)
})

cycleButton.addEventListener('click', () => {
    cycle();
    theme = 'cycle';
    localStorage.setItem('theme', theme)
})

function getDescription() {
    return wordsWithDescriptions[word]
}

let wordsGuessed = JSON.parse(localStorage.getItem('wordsGuessed'))
let hintsTaken = JSON.parse(localStorage.getItem('hintsTaken'))
wordsGuessedP.innerHTML = `Words Guessed: ${wordsGuessed}`
hintsTakenP.innerHTML = `Words revealed: ${hintsTaken}`

word = words[Math.floor(Math.random() * words.length)]

let wordList = word.split('')

const finalWord = wordList.sort(() => 0.5 - Math.random());

document.querySelector('.word-display').innerHTML = finalWord.join('')

const input = document.querySelector('.word-input')
input.addEventListener('input', () => {
    if (input.value === word) {
        wordsGuessed += 1
        localStorage.setItem('wordsGuessed', JSON.stringify(wordsGuessed))
        window.location.reload()
    } else if (input.value !== word) {
        return
    }
})

revealButton.addEventListener('click', () => {
    revealWordP.innerHTML = `The word was: ${word}`
    hintsTaken += 1
    localStorage.setItem('hintsTaken', JSON.stringify(hintsTaken))
});

input.focus()

