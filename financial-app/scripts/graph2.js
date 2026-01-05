const ctx2 = document.getElementById('budgetChart').getContext('2d');

// Budget Status Doughnut Chart
new Chart(ctx2, {
    type: "doughnut",
    data: {
        labels: ['Laptop', 'Personal', 'Insurance', 'Emergency', 'Other'],
        datasets: [{
            data: [350, 400, 500, 150, 250],
            backgroundColor: [
                '#84bc2a', // green
                '#ffaf59', // orange
                '#ffe659', // yellow
                '#59baff', // blue
                '#ff595e'  // red
            ],
            borderColor: [
                '#75a528', // darker green
                '#de974b',
                '#d2be4b',
                '#4a95cb',
                '#d14c50'
            ],
            borderWidth: 3,
            hoverOffset: 50,
        }]
    },
    options: {
        responsive: true,
        cutout: '65%', // creates the white center hole
        plugins: {
            legend: { display: false }, // hide default legend
            tooltip: {
                backgroundColor: '#2d3133',
                titleColor: '#dee2e6',
                bodyColor: '#dee2e6',
                borderWidth: 0,
            },
        },
        maintainAspectRatio: false,
    }
});
