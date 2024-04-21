function displayCartItems() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var cartItemsContainer = document.getElementById('cartItemsContainer');

    cartItemsContainer.innerHTML = "";

    cartItems.forEach(function (item, index) {
        var itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <p class="item-name">${item.name}</p>
            <p class="item-price">$${item.price.toFixed(2)}</p>
            <button class="delete-button" onclick="deleteItem(${index})">Delete</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById("cartItemCount").textContent = cartItems.length;

    var totalPrice = cartItems.reduce(function (total, item) {
        return total + item.price;
    }, 0);
    document.querySelector(".total .price").textContent = "$" + totalPrice.toFixed(2);
}

function deleteItem(index) {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
}

function setupPayNowButton() {
    var payNowButton = document.querySelector(".checkout-btn .btn");
    payNowButton.addEventListener("click", function (event) {
        event.preventDefault();
        clearCart();
        navigateToHomePage();
    });
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
    setupPayNowButton();
};
