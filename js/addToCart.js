function addToCart(itemName, itemPrice) {
    var item = {
        name: itemName,
        price: itemPrice
    };

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push(item);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateCartCount(cartItems.length);

}

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
