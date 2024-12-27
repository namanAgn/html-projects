const houseBuy = document.querySelector('.houses-buy')
const shopBuy = document.querySelector('.shop-buy')
const jobsBuy = document.querySelector('.job-buy')

const popDisplay = document.querySelector('.pop-display')

const houseUsage = document.querySelector('.house-usage')
const shopUsage = document.querySelector('.shop-usage')
const jobUsage = document.querySelector('.job-usage')

const houseDisplay = document.querySelector('.houses')
const shopDisplay = document.querySelector('.shops')
const jobDisplay = document.querySelector('.jobs')

const houseCostDisplay = document.querySelector('.house-cost')
const shopCostDisplay = document.querySelector('.shop-cost')
const jobCostDisplay = document.querySelector('.job-cost')

const houseCap = 10
const shopCap = 10
const jobsCap = 10

let houseCost = 100
let jobCost = 100
let shopCost = 100

let money = 300
let pop = 0

let houses = 0
let jobs = 0
let shops = 0

let ownedHouseCap = 0
let ownedShopCap = 0
let ownedJobCap = 0

let usedHouseCap = 0
let usedJobCap = 0
let usedShopCap = 0

function updateCapDisplay(cap, usedCap, ownedCap) {
    cap.innerText = `${usedCap}/${ownedCap}`
}
function updateOwnedDisplay(display, displayAmount) {
    display.innerText = displayAmount
}
function updatePopDisplay(amount) {
    popDisplay.innerText = pop
}
function updateHouseCost() {
    houseCost = houseCost + houseCost * 0.10
    houseCostDisplay.innerText = houseCost
}
function updateShopCost() {
    shopCost = shopCost + shopCost * 0.10
    shopCostDisplay.innerText = shopCost
}
function updateJobCost() {
    jobCost = jobCost + jobCost * 0.10
    jobCostDisplay.innerText = jobCost
}

houseBuy.addEventListener('click', () => {
    if (money - houseCost > 0) {
        houses += 1
        ownedHouseCap += houseCap
        updateCapDisplay(houseUsage, usedHouseCap, ownedHouseCap)
        updateOwnedDisplay(houseDisplay, houses)
        updateHouseCost()
    }
})

shopBuy.addEventListener('click', () => {
    shops += 1
    ownedShopCap += shopCap
    updateCapDisplay(shopUsage, usedShopCap, ownedShopCap)
    updateOwnedDisplay(shopDisplay, shops)
    updateShopCost()
})

jobsBuy.addEventListener('click', () => {
    jobs += 1
    ownedJobCap += jobsCap
    updateCapDisplay(jobUsage, usedJobCap, ownedJobCap)
    updateOwnedDisplay(jobDisplay, jobs)
    updateJobCost()
})

function addPeople() {
    if (ownedHouseCap - usedHouseCap> 1 && ownedJobCap - usedJobCap > 1 && ownedShopCap - usedShopCap> 1) {
        pop += 1
        usedHouseCap += 1
        usedShopCap += 1
        usedJobCap += 1
        updatePopDisplay(1)
    }
}

setInterval(() => {
    addPeople()
}, 300)