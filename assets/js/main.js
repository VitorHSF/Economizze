const ctx = document.getElementById('gastosGrafico').getContext('2d');
const expensesChart = new Chart(ctx, {
    type: 'pie',
    data: {
    labels: ['Alimentação', 'Transporte', 'Saúde', 'Lazer', 'Outros'],
    datasets: [{
        data: [500, 200, 150, 100, 250],
        backgroundColor: [
        '#fcde56', '#36e2cb', '#7ece8e', '#4ec0a0', '#999999'
        ],
    }]
    },
    options: {
    responsive: true,
    plugins: {
        title: {
        display: true,
        text: 'Despesas do mês',
        align: 'start',
        font: {
            size: 17
        },
        color: '#333'
        },
        legend: {
        position: 'bottom',
        labels: {
            color: '#333',
            font: {
            size: 14
            }
        }
        },
        tooltip: {
        callbacks: {
            label: function(context) {
            const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
            const currentValue = context.raw;
            const percentage = ((currentValue / total) * 100).toFixed(1);
            return `${context.label}: R$${currentValue} (${percentage}%)`;
            }
        }
        }
    }
    }
});