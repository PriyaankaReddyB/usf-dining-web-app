let salesChart;
function updateCartCount() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    document.getElementById('cart-count').textContent = cartItems.length;
}

updateCartCount();
window.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
        updateCartCount();
    }
});

function generateSalesChart() {
    const labels = [];
    const data = [];

    restaurantData.menu.forEach(item => {
        labels.push(item.name);
        data.push(item.dailySalesPrice);
    });

    const ctx = document.getElementById('salesChart').getContext('2d');
    salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Daily Sales',
                data: data,
                backgroundColor: restaurantData.logo_color,
                borderColor: restaurantData.logo_color,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
window.addEventListener("DOMContentLoaded", function () {
    generateSalesChart();
    averageSalesChart();
});

function addToCart(itemName, itemPrice) {
    var item = {
        name: itemName,
        price: itemPrice
    };

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    
    cartItems.push(item);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateCartCount();

}

function updateSalesChart() {
    if (salesChart) {
        salesChart.destroy();
    }

    const labels = [];
    const data = [];
    const quantities = {}; 

    restaurantData.menu.forEach((item, index) => {
        let label = item.name || `Item ${index + 1}`;
        labels.push(label);

        let cartItems = JSON.parse(localStorage.getItem('cartItems'));
        let quantity = 0;
        let salesPrice = 0;

        if (cartItems) {
            cartItems.forEach(cartItem => {
                if (cartItem.name === label) {
                    quantity++;
                    let price = parseFloat(cartItem.price.replace("$", ""));
                    salesPrice += price;
                }
            });
        }

        salesPrice += item.dailySalesPrice;

        data.push(salesPrice);
        quantities[label] = quantity; 
    });

    const ctx = document.getElementById('salesChart').getContext('2d');
    salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Daily Sales Amount($) of each item',
                data: data,
                backgroundColor: restaurantData.logo_color,
                borderColor: restaurantData.logo_color,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
}

function averageSalesChart() {
    var ctx = document.getElementById('averageSales').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line', 
        data: {
            datasets: [{
                label: 'Avg Sales Per Day',
                data: [
                    { x: 'Chick-Fil-A', y: 5438 },
                    { x: 'Panera', y: 3645 },
                    { x: 'Panda Express', y: 2344 },
                    { x: 'Subway', y: 3435 }
                ],
                backgroundColor: 'black', 
                pointRadius: 8 
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'category', 
                    labels: ['Chick-Fil-A', 'Panera', 'Panda Express', 'Subway']
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

