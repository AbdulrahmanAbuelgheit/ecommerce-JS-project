let curruser = JSON.parse(sessionStorage.getItem("loggedInUser"));
let User;
if(!curruser)
User="guest";
else
User=curruser.id;
window.CartManager = {
    userId: User, 
    get cartKey() {
        return `cart_${this.userId}`; 
    },
    cartData: {},

    initializeCart: function () {
        this.cartData = JSON.parse(localStorage.getItem("cart")) || {};
        if (!this.cartData[this.cartKey]) {
            this.cartData[this.cartKey] = [];
            localStorage.setItem("cart", JSON.stringify(this.cartData));
        }
    },

    calculateTotalQuantity: function () {
        this.cartData = JSON.parse(localStorage.getItem("cart")) || {};
        const userCart = this.cartData[this.cartKey] || [];
        return userCart.reduce((sum, product) => sum + product.quantity, 0);
    },

    updateCartCounter: function () {
        const totalQuantity = this.calculateTotalQuantity();
        const cartCounter = document.getElementById('cartCounter');
        if (cartCounter) {
            cartCounter.textContent = totalQuantity;
            cartCounter.style.display = totalQuantity > 0 ? 'flex' : 'none';
        }
    },
};
