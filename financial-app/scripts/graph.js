const ctx = document.getElementById('forecastChart').getContext('2d');
const graphSelector = document.querySelector(".graph-selection");
const timeSelector = document.querySelector(".time-selection");

let currentChart = null;

function generateGraph(chartType, data) {
    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }

    currentChart = new Chart(ctx, {
    type: chartType,
    data: data,
    options: {
        responsive: true,
        scales: {
        x: {
            ticks: { color: '#dee2e6' }, // label color
            grid: { display: false }
        },
        y: {
            ticks: { color: '#dee2e6', display: false},
            grid: { color: 'rgba(255,255,255,0.05)' }
        }
        },
        plugins: {
        legend: { display: false },
        tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: '#2d3133',
            titleColor: '#dee2e6',
            bodyColor: '#dee2e6'
        },
        },
        maintainAspectRatio: false,
    }
    });
}

const gradientIncome = ctx.createLinearGradient(0, 0, 0, 200);
gradientIncome.addColorStop(0, 'rgba(88, 129, 87, 0.8)');
gradientIncome.addColorStop(1, 'rgba(88,129,87,0)');

const gradientExpense = ctx.createLinearGradient(0, 0, 0, 200);
gradientExpense.addColorStop(0, 'rgba(255,89,94,0.8)');
gradientExpense.addColorStop(1, 'rgba(255,89,94,0)');

let defaultData =  {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
    {
        label: 'Income',
        data: [400, 600, 500, 700, 650, 800],
        borderColor: '#8ac926',
        backgroundColor: gradientIncome,
        tension: 0,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
    },
    {
        label: 'Expense',
        data: [1000, 850, 500, 600, 700, 650],
        borderColor: '#ff595e',
        backgroundColor: gradientExpense,
        tension: 0,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
    }
    ] 
}

let monthData = {
    labels: ['Week1', 'Week2', 'Week3', 'Week4'],
    datasets: [
    {
        label: 'Income',
        data: [1400, 2600, 2500, 2700],
        borderColor: '#8ac926',
        backgroundColor: gradientIncome,
        tension: 0,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
    },
    {
        label: 'Expense',
        data: [1000, 850, 1500, 1400],
        borderColor: '#ff595e',
        backgroundColor: gradientExpense,
        tension: 0,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
    }
    ] 
}

let monthsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
    {
        label: 'Income',
        data: [1400, 2600, 2500, 2700, 1650, 800],
        borderColor: '#8ac926',
        backgroundColor: gradientIncome,
        tension: 0,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
    },
    {
        label: 'Expense',
        data: [1000, 850, 1500, 1400, 1700, 1250],
        borderColor: '#ff595e',
        backgroundColor: gradientExpense,
        tension: 0,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
    }
    ] 
}

let yearData = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
    {
        label: 'Income',
        data: [1400, 2600, 2500, 2700, 1650, 800, 200, 400, 3000, 1500, 1400, 1500],
        borderColor: '#8ac926',
        backgroundColor: gradientIncome,
        tension: 0,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
    },
    {
        label: 'Expense',
        data: [1400, 2600, 2500, 2700, 1650, 1900, 1200, 1400, 3500, 7000, 1200, 1250],
        borderColor: '#ff595e',
        backgroundColor: gradientExpense,
        tension: 0,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
    }
    ] 
}

let yearsData = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
    {
        label: 'Income',
        data: [12000, 22600, 22500, 42700, 41650, 40800],
        borderColor: '#8ac926',
        backgroundColor: gradientIncome,
        tension: 0,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
    },
    {
        label: 'Expense',
        data: [31000, 28850, 11500, 51400, 61700, 61250],
        borderColor: '#ff595e',
        backgroundColor: gradientExpense,
        tension: 0,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
    }
    ] 
}

function timeSelectorUpdater() {
    if (timeSelector.value === 'week') {
        generateGraph(graphSelectorValue, defaultData)
    }
    if (timeSelector.value === 'month') {
        generateGraph(graphSelectorValue, monthData)
    }
    if (timeSelector.value === 'months') {
        generateGraph(graphSelectorValue, monthsData)
    }
    if (timeSelector.value === 'year') {
        generateGraph(graphSelectorValue, yearData)
    }
    if (timeSelector.value === 'years') {
        generateGraph(graphSelectorValue, yearsData)
    }
}

let graphSelectorValue = 'line'

graphSelector.addEventListener('change', () => {
    graphSelectorValue = graphSelector.value;

    timeSelectorUpdater();
});

timeSelector.addEventListener('change', () => {
    timeSelectorUpdater();
});

window.onload = () => generateGraph(graphSelectorValue, defaultData);

const billCategory1 = document.querySelector(".category-bill-1");
const billCategory2 = document.querySelector(".category-bill-2");
const billCategory3 = document.querySelector(".category-bill-3");
const billCategory4 = document.querySelector(".category-bill-4");

const extra1 = document.querySelector(".extra-1");
const extra2 = document.querySelector(".extra-2");
const extra3 = document.querySelector(".extra-3");
const extra4 = document.querySelector(".extra-4");

billCategory1.addEventListener('hover', () => {
    extra1.style.display = 'flex'
});