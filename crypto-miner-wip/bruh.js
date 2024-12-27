mainButton = document.querySelector('.main-button');
sellButton = document.querySelector('.sell-button');

moneyDisplay = document.querySelector('.money-display');
cryptoDisplay = document.querySelector('.crypto-display');
rateDisplay = document.querySelector('.rate-display');  

upgrade1CostDisplay = document.querySelector('upgrade-1-cost');

let crypto = 0;
let money = 0;

let rate = 0.9;

rateDisplay.innerText = `Rate: 1 Crypto = $${rate}`

mainButton.addEventListener('click', () => {
    crypto += 1;
    cryptoDisplay.innerText = `FitCoin: ${crypto}`;
});

sellButton.addEventListener('click', () => {
    money += crypto * rate;
    crypto = 0;
    cryptoDisplay.innerText = `FitCoin: ${crypto}`;
    moneyDisplay.innerText = `Money: $${money}`;
});