let money = 1000;
let time = 1;
let stocks = [
    { name: 'Stock 1', price: 10, quantity: 0 },
    { name: 'Stock 2', price: 15, quantity: 0 },
    { name: 'Stock 3', price: 20, quantity: 0 },
    { name: 'Stock 4', price: 25, quantity: 0 },
    { name: 'Stock 5', price: 30, quantity: 0 }
];

// Initialize wallet display
document.querySelector('.wallet').innerText = money.toFixed(2);

// Function to update stock display
function updateStockDisplay() {
    const stockContainer = document.querySelector('.stocks');
    stockContainer.innerHTML = ''; // Clear previous display

    stocks.forEach((stock, index) => {
        const stockElement = document.createElement('div');
        stockElement.innerHTML = `${stock.name} - Price: $${stock.price} - Quantity: ${stock.quantity}`;
        stockContainer.appendChild(stockElement);
    });
}

// Function to get a random price for each stock
function getRandomPrice() {
    stocks.forEach(stock => {
        let stockPrice = stock.price;
        const random = Math.random();
        let direction = random > 0.5 ? 'up' : 'down';

        if (direction === 'up') {
            stockPrice += Math.random() * 3; // Increase by a random amount
        } else {
            stockPrice -= Math.max(stockPrice - Math.random() * 2, 0.01); // Decrease but ensure it doesn't go below 0.01
        }

        stock.price = stockPrice.toFixed(2); // Update the price and round it to 2 decimal places
    });

    updateStockDisplay();
}

// Function to handle buying stock
function buyStock(stockIndex) {
    const stock = stocks[stockIndex];
    const stockPrice = parseFloat(stock.price); // Use the current price for buying

    const button = document.querySelector(`.buy-stock-${stockIndex}`);
    button.addEventListener('click', () => {
        if (money >= stockPrice) {
            money -= stockPrice; // Deduct the money from wallet
            stock.quantity += 1; // Increase stock quantity
            document.querySelector('.wallet').innerText = money.toFixed(2); // Update wallet display
            updateStockDisplay(); // Update stock display
            document.querySelector('.status').innerText = ''; // Clear status message
        } else {
            document.querySelector('.status').innerText = 'Not enough money to buy!';
        }
    });
}

// Function to handle selling stock
function sellStock(stockIndex) {
    const stock = stocks[stockIndex];
    const stockPrice = parseFloat(stock.price); // Use the current price for selling

    const button = document.querySelector(`.sell-stock-${stockIndex}`);
    button.addEventListener('click', () => {
        if (stock.quantity > 0) {
            stock.quantity -= 1; // Decrease stock quantity
            money += stockPrice; // Add current stock price to money
            document.querySelector('.wallet').innerText = money.toFixed(2); // Update wallet display
            updateStockDisplay(); // Update stock display
        } else {
            document.querySelector('.status').innerText = 'No stock to sell!';
        }
    });
}

// Initialize buy and sell buttons for all stocks
stocks.forEach((_, index) => {
    buyStock(index);
    sellStock(index);
});

// Set an interval to update stock prices every 2 seconds
setInterval(() => {
    getRandomPrice();
}, 2000);

// Update time every second
setInterval(() => {
    time += 1;
    document.querySelector('.time').innerText = time;
}, 1000);

// Initial update to display stock info
updateStockDisplay();
