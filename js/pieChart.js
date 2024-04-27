document.addEventListener('DOMContentLoaded', function () {
    const paneraData = [23442, 25562, 13414];
    const chickfilaData = [13452, 34526, 34345];
    const pandaExpressData = [87874, 32546, 45744];
    const subwayData = [38784, 54566, 67383];

    const paneraChartCtx = document.getElementById('paneraChart').getContext('2d');
    const chickfilaChartCtx = document.getElementById('chickfilaChart').getContext('2d');
    const pandaExpressChartCtx = document.getElementById('pandaExpressChart').getContext('2d');
    const subwayChartCtx = document.getElementById('subwayChart').getContext('2d');

    const paneraChart = new Chart(paneraChartCtx, {
        type: 'pie',
        data: {
            labels: ['Breakfast', 'Lunch', 'Dinner'],
            datasets: [{
                label: 'Panera Bread Sales',
                data: paneraData,
                backgroundColor: ['#657000', '#A2A371', '#C5C3A6'], 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#000000' 
                    }
                },
                title: {
                    display: true,
                    text: 'Panera Bread Sales',
                    color: '#000000', 
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                }
            }
        }
    });
    const chickfilaChart = new Chart(chickfilaChartCtx, {
        type: 'pie',
        data: {
            labels: ['Breakfast', 'Lunch', 'Dinner'],
            datasets: [{
                label: 'Chick-fil-A Sales',
                data: chickfilaData,
                backgroundColor: ['#E51636', '#E89CAE', '#F2D3D9'], 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#000000' 
                    }
                },
                title: {
                    display: true,
                    text: 'Chick-fil-A Sales',
                    color: '#000000',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                }
            }
        }
    });

    const pandaExpressChart = new Chart(pandaExpressChartCtx, {
        type: 'pie',
        data: {
            labels: ['Breakfast', 'Lunch', 'Dinner'],
            datasets: [{
                label: 'Panda Express Sales',
                data: pandaExpressData,
                backgroundColor: ['#ff0000', '#F2816F', '#FAC2BF'], 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#000000' 
                    }
                },
                title: {
                    display: true,
                    text: 'Panda Express Sales',
                    color: '#000000', 
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                }
            }
        }
    });

    const subwayChart = new Chart(subwayChartCtx, {
        type: 'pie',
        data: {
            labels: ['Breakfast', 'Lunch', 'Dinner'],
            datasets: [{
                label: 'Subway Sales',
                data: subwayData,
                backgroundColor: ['#028940', '#7FBF8D', '#C7DBC5'], 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#000000' 
                    }
                },
                title: {
                    display: true,
                    text: 'Subway Sales',
                    color: '#000000', 
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                }
            }
        }
    });
});
