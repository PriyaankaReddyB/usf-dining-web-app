function displayCartItems() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var cartItemsContainer = document.getElementById('cartItemsContainer');

    cartItemsContainer.innerHTML = "";

    cartItems.forEach(function (item, index) {
        var itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");

        var price = parseFloat(item.price);
        var formattedPrice = '$' + price.toFixed(2);

        itemElement.innerHTML = `
            <div class="item-details">
                <p class="item-name">${item.name}</p>
                <p class="item-price">${formattedPrice}</p>
            </div>
            <button class="delete-button" onclick="deleteItem(${index})">Delete</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });


    document.getElementById("cartItemCount").textContent = cartItems.length;

    var totalPrice = cartItems.reduce(function (total, item) {
        var price = parseFloat(item.price);
        return total + price;
    }, 0);

    document.querySelector(".total .price").textContent = "$" + totalPrice.toFixed(2);

}

function deleteItem(index) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
}

function clearCart() {
    localStorage.removeItem('cartItems');
    document.getElementById('cartItemsContainer').innerHTML = "";
    document.getElementById("cartItemCount").textContent = "0";
    document.querySelector(".total .price").textContent = "$0.00";
}

function navigateToHomePage() {
    window.location.href = "index.html";
}

window.onload = function () {
    displayCartItems();
};

function setupPaymentValidation() {

    window.addEventListener('DOMContentLoaded', () => {
        const payNowBtn = document.getElementById('payNowBtn');
        const form = document.querySelector('.payment form');

        payNowBtn.addEventListener('click', validateForm);

        function validateForm(event) {
            event.preventDefault(); 

            const requiredFields = form.querySelectorAll('input[required]');
            let isValid = true;
            requiredFields.forEach(field => {
                if (field.value.trim() === '') {
                    isValid = false;
                    field.classList.add('invalid');
                } else {
                    field.classList.remove('invalid');
                }
            });

            if (isValid) {
                navigateToHomePage(); 
                clearCart();
                alert("Payment Successful");
            } else {
                alert('Please fill in all required fields.');
            }
        }
    });
}

setupPaymentValidation();


