// Resource Variables
let wood = parseInt(JSON.parse(localStorage.getItem('woodAmount')), 10) || 0;
let stone = parseInt(JSON.parse(localStorage.getItem('stoneAmount')), 10) || 0;
let iron = parseInt(JSON.parse(localStorage.getItem('ironAmount')), 10) || 0;
let minerals = parseInt(JSON.parse(localStorage.getItem('mineralsAmount')), 10) || 0;
let oil = parseInt(JSON.parse(localStorage.getItem('oilAmount')), 10) || 0;

let planks = parseInt(JSON.parse(localStorage.getItem('plankAmount')), 10) || 0;
let bricks = parseInt(JSON.parse(localStorage.getItem('brickAmount')), 10) || 0;
let tin = parseInt(JSON.parse(localStorage.getItem('tinAmount')), 10) || 0;
let sand = parseInt(JSON.parse(localStorage.getItem('sandAmount')), 10) || 0;
let composite_material = parseInt(JSON.parse(localStorage.getItem('compositeAmount')), 10) || 0;

let lumberMill = parseInt(JSON.parse(localStorage.getItem('lumberMillAmount')), 10) || 0;
let brickFactory = parseInt(JSON.parse(localStorage.getItem('brickFactoryAmount')), 10) || 0;
let ironMine = parseInt(JSON.parse(localStorage.getItem('ironMineAmount')), 10) || 0;
let mineralQuarry = parseInt(JSON.parse(localStorage.getItem('mineralQuarryAmount')), 10) || 0;
let oilRefinery = parseInt(JSON.parse(localStorage.getItem('oilRefineryAmount')), 10) || 0;

// Button and Display Variables
const woodButton = document.querySelector('.wood-button');
const stoneButton = document.querySelector('.stone-button');
const ironButton = document.querySelector('.iron-button');
const mineralsButton = document.querySelector('.minerals-button');
const oilButton = document.querySelector('.oil-button');

const plankCraftingButton = document.querySelector('.plank-crafting-button');
const brickCraftingButton = document.querySelector('.brick-crafting-button');
const tinCraftingButton = document.querySelector('.tin-crafting-button');
const sandCraftingButton = document.querySelector('.sand-crafting-button');
const compositeCraftingButton = document.querySelector('.composite-crafting-button');

const woodDisplay = document.querySelector('.wood-display');
const stoneDisplay = document.querySelector('.stone-display');
const ironDisplay = document.querySelector('.iron-display');
const mineralsDisplay = document.querySelector('.minerals-display');
const oilDisplay = document.querySelector('.oil-display');

const plankDisplay = document.querySelector('.plank-display');
const brickDisplay = document.querySelector('.brick-display');
const tinDisplay = document.querySelector('.tin-display');
const sandDisplay = document.querySelector('.sand-display');
const compositeDisplay = document.querySelector('.composite-display');

const plankInput = document.querySelector('.plank-input');
const brickInput = document.querySelector('.brick-input');
const tinInput = document.querySelector('.tin-input');
const sandInput = document.querySelector('.sand-input');
const compositeMaterialInput = document.querySelector('.composite-material-input');

const plankCraftingStatus = document.querySelector('.plank-crafting-status');
const brickCraftingStatus = document.querySelector('.brick-crafting-status');
const tinCraftingStatus = document.querySelector('.tin-crafting-status');
const sandCraftingStatus = document.querySelector('.sand-crafting-status');
const compositeCraftingStatus = document.querySelector('.composite-material-crafting-status');

const lumberMillInput = document.querySelector('.lumber-mill-input');
const brickFactoryInput = document.querySelector('.brick-factories-input');
const ironMineInput = document.querySelector('.iron-mine-input');
const mineralQuaryInput = document.querySelector('.mineral-quarry-input');
const cmsInput = document.querySelector('.oil-refinery-input')

const lumberMillButton = document.querySelector('.lumber-mill-building-button');
const stoneFactoryButon = document.querySelector('.brick-factory-building-button');
const ironMineButton = document.querySelector('.iron-mine-building-button');
const mineralQuarryButton = document.querySelector('.mineral-quary-building-button');
const oilRefineryButton = document.querySelector('.oil-refinery-building-button');

const lumberMillStatus = document.querySelector('.lumber-mill-building-status');
const stoneFactoryStatus = document.querySelector('.brick-factory-building-status');
const ironMineStatus = document.querySelector('.iron-mine-building-status');
const mineralQuaryStatus = document.querySelector('.mineral-quary-building-status');
const oilRefineryStatus = document.querySelector('.oil-refinery-building-status');

// Display the initial resource amounts
woodDisplay.innerHTML = `Wood: ${wood}`;
stoneDisplay.innerHTML = `Stone: ${stone}`;
ironDisplay.innerHTML = `Iron: ${iron}`;
mineralsDisplay.innerHTML = `Minerals: ${minerals}`;
oilDisplay.innerHTML = `Oil: ${oil}`;

plankDisplay.innerHTML = `Planks: ${planks}`;
brickDisplay.innerHTML = `Bricks: ${bricks}`;
tinDisplay.innerHTML = `Tin: ${tin}`;
sandDisplay.innerHTML = `Sand: ${sand}`;
compositeDisplay.innerHTML = `Composite Materials: ${composite_material}`;

// Update Amount Function
function updateAmount(value, name, displayElement, storageKey, resource) {
    resource += value;
    displayElement.innerHTML = `${name}: ${resource}`;
    localStorage.setItem(storageKey, JSON.stringify(resource));
    return resource;
}

// Event Listeners
woodButton.addEventListener('click', () => {
    wood = updateAmount(1, "Wood", woodDisplay, 'woodAmount', wood);
});

stoneButton.addEventListener('click', () => {
    stone = updateAmount(1, "Stone", stoneDisplay, 'stoneAmount', stone);
});

ironButton.addEventListener('click', () => {
    iron = updateAmount(1, "Iron", ironDisplay, 'ironAmount', iron);
});

mineralsButton.addEventListener('click', () => {
    minerals = updateAmount(1, "Minerals", mineralsDisplay, 'mineralsAmount', minerals);
});

oilButton.addEventListener('click', () => {
    oil = updateAmount(1, "Oil", oilDisplay, 'oilAmount', oil);
});

plankCraftingButton.addEventListener('click', () => {
    const plankAmount = parseInt(plankInput.value, 10);
    if (wood >= 2 * plankAmount) {
        planks += plankAmount; // Increment planks
        wood -= 2 * plankAmount; // Decrement wood
        localStorage.setItem('woodAmount', JSON.stringify(wood)); // Update local storage
        localStorage.setItem('plankAmount', JSON.stringify(planks)); // Update local storage
        plankCraftingStatus.innerHTML = `Successfully crafted ${plankAmount} planks!`;
        plankDisplay.innerHTML = `Planks: ${planks}`;
        woodDisplay.innerHTML = `Wood: ${wood}`;
    } else {
        plankCraftingStatus.innerHTML = `Insufficient materials!`;
    }
});

brickCraftingButton.addEventListener('click', () => {
    const brickAmount = parseInt(brickInput.value, 10);
    if (stone >= 3 * brickAmount && iron >= 1 * brickAmount) {
        bricks += brickAmount; // Increment bricks
        stone -= 3 * brickAmount; // Decrement stone
        iron -= 1 * brickAmount;
        localStorage.setItem('stoneAmount', JSON.stringify(stone)); // Update local storage
        localStorage.setItem('ironAmount', JSON.stringify(iron)); // Update local storage
        localStorage.setItem('brickAmount', JSON.stringify(bricks)); // Update local storage
        brickCraftingStatus.innerHTML = `Successfully crafted ${brickAmount} bricks!`;
        brickDisplay.innerHTML = `Bricks: ${bricks}`;
        stoneDisplay.innerHTML = `Stone: ${stone}`;
        ironDisplay.innerHTML = `Iron: ${iron}`;
    } else {
        brickCraftingStatus.innerHTML = `Insufficient materials!`;
    }
});

tinCraftingButton.addEventListener('click', () => {
    const tinAmount = parseInt(tinInput.value, 10);
    if (iron >= 2 * tinAmount && minerals >= 1 * tinAmount) {
        tin += tinAmount; // Increment tin
        iron -= 2 * tinAmount; // Decrement iron
        minerals -= 1 * tinAmount;
        localStorage.setItem('ironAmount', JSON.stringify(iron)); // Update local storage
        localStorage.setItem('mineralsAmount', JSON.stringify(minerals)); // Update local storage
        localStorage.setItem('tinAmount', JSON.stringify(tin)); // Update local storage
        tinCraftingStatus.innerHTML = `Successfully crafted ${tinAmount} tin!`;
        ironDisplay.innerHTML = `Iron: ${iron}`;
        mineralsDisplay.innerHTML = `Minerals: ${minerals}`;
        tinDisplay.innerHTML = `Tin: ${tin}`;
    } else {
        tinCraftingStatus.innerHTML = `Insufficient materials!`;
    } 
});

sandCraftingButton.addEventListener('click', () => {
    const sandAmount = parseInt(sandInput.value, 10);
    if (minerals >= 3 * sandAmount && stone >= 1 * sandAmount) {
        sand += sandAmount; // Increment sand
        minerals -= 3 * sandAmount; // Decrement minerals
        stone -= 1 * sandAmount;
        localStorage.setItem('stoneAmount', JSON.stringify(stone)); // Update local storage
        localStorage.setItem('mineralsAmount', JSON.stringify(minerals)); // Update local storage
        localStorage.setItem('sandAmount', JSON.stringify(sand)); // Update local storage
        sandCraftingStatus.innerHTML = `Successfully crafted ${sandAmount} sand!`;
        stoneDisplay.innerHTML = `Stone: ${stone}`;
        mineralsDisplay.innerHTML = `Minerals: ${minerals}`;
        sandDisplay.innerHTML = `Sand: ${sand}`;
    } else {
        sandCraftingStatus.innerHTML = `Insufficient materials!`;
    } 
});

compositeCraftingButton.addEventListener('click', () => {
    const compositeAmount = parseInt(compositeMaterialInput.value, 10);
    if (oil >= 3 * compositeAmount && iron >= 2 * compositeAmount && wood >= 2 * compositeAmount) {
        composite_material += compositeAmount; // Increment composite materials
        oil -= 3 * compositeAmount; // Decrement oil
        iron -= 2 * compositeAmount;
        wood -= 2 * compositeAmount;
        localStorage.setItem('compositeAmount', JSON.stringify(composite_material)); // Update local storage
        localStorage.setItem('oilAmount', JSON.stringify(oil)); // Update local storage
        localStorage.setItem('ironAmount', JSON.stringify(iron)); // Update local storage
        localStorage.setItem('woodAmount', JSON.stringify(wood)); // Update local storage
        compositeCraftingStatus.innerHTML = `Successfully crafted ${compositeAmount} composite materials!`;
        oilDisplay.innerHTML = `Oil: ${oil}`;
        ironDisplay.innerHTML = `Iron: ${iron}`;
        woodDisplay.innerHTML = `Wood: ${wood}`;
        compositeDisplay.innerHTML = `Composite Materials: ${composite_material}`;
    } else {
        compositeCraftingStatus.innerHTML = `Insufficient materials!`;
    }
});

lumberMillButton.addEventListener('click', () => {
    const lumberMillAmount = parseInt(lumberMillInput.value, 10);
    if (planks >= 25 * lumberMillAmount && composite_material >= 10 * lumberMillAmount && wood >= 10 * lumberMillAmount) {
        lumberMill += lumberMillAmount; // Increment composite materials
        composite_material -= 10 * lumberMillAmount; // Decrement oil
        planks -= 25 * lumberMillAmount;
        wood -= 10 * lumberMillAmount;
        localStorage.setItem('lumberMillAmount', JSON.stringify(lumberMill)); // Update local storage
        localStorage.setItem('compositeAmount', JSON.stringify(composite_material)); // Update local storage
        localStorage.setItem('plankAmount', JSON.stringify(plank)); // Update local storage
        localStorage.setItem('woodAmount', JSON.stringify(wood)); // Update local storage
        lumberMillStatus.innerHTML = `Successfully built ${lumberMillAmount} lumber mills!`;
        lumberMillAmount.innerHTML = `Oil: ${oil}`;
        ironDisplay.innerHTML = `Iron: ${iron}`;
        woodDisplay.innerHTML = `Wood: ${wood}`;
        compositeDisplay.innerHTML = `Composite Materials: ${composite_material}`;
    } else {
        compositeCraftingStatus.innerHTML = `Insufficient materials!`;
    }
});
