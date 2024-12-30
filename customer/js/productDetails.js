 //import { CartManager } from './counter.js';
let currentuser = JSON.parse(sessionStorage.getItem("loggedInUser"));
let user;
if(!currentuser)
user="guest";
else
user=currentuser.id;



/* const CartManager = {
    userId: JSON.parse(sessionStorage.getItem("loggedInUser")).id,
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

}; */


document.addEventListener('DOMContentLoaded', function () {
    CartManager.updateCartCounter();
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const selectedProductTitle = localStorage.getItem('selectedProduct');
    const productDetails = products.find(product => product.title === selectedProductTitle);

    if (productDetails) {
        document.getElementById('product-details').innerHTML = `
            <div class="col-md-6">
                <img src="${productDetails.image}" alt="${productDetails.title}" class="product-details-image">
            </div>
            <div class="col-md-6">
                <h1 class="product-details-title">${productDetails.title}</h1>
                <p class="product-details-price">${'$' + productDetails.price}</p>
                <p class="product-details-description">
                    ${productDetails.description}
                </p>
                <p>Available Stock: ${productDetails.count}</p>
                <p>Color: ${productDetails.color}</p>
                <p>Seller name: ${productDetails.sellername}</p>
                <button id="addtoCart" class="btn btn-add-to-cart "data-id="${productDetails.id}">Add to Cart</button>
            </div>
        `;
    } else {
        document.getElementById('product-details').innerHTML = `
            <p>Product details not found.</p>
        `;
    }
    const button = document.getElementById('addtoCart');
    button.addEventListener('click', function (e) {
        e.stopPropagation();
        const productId = parseInt(this.getAttribute('data-id'));
        selectedProductId = productId;
        addToCart(selectedProductId, user);

    });
    function addToCart(productId, userId) {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const cartData = JSON.parse(localStorage.getItem("cart")) || {};
        const cartKey = `cart_${userId}`;
        // const product = products.find((product) => product.id === productId);

        if (!cartData[cartKey]) {
            cartData[cartKey] = [{ ...productDetails, quantity: 1 }];
            localStorage.setItem("cart", JSON.stringify(cartData));
            CartManager.updateCartCounter();
            return;
        }

        let existingProduct = cartData[cartKey].find(
            (item) => item.id === productId
        );
        if (existingProduct) {
            if (existingProduct.quantity < existingProduct.count)
                existingProduct.quantity += 1;
            else {
                const NoMoreProducts = document.getElementById('NoMoreProducts');
                NoMoreProducts.style.display = 'flex';
                document.getElementById('ok').addEventListener('click', function () {
                    NoMoreProducts.style.display = 'none';
                });
                return;
            }
        } else {
            cartData[cartKey].push({ ...productDetails, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cartData));
        showNotification()
        CartManager.updateCartCounter();
    }
    function showNotification() {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notification-text');

        notificationText.textContent = 'Product added to cart!';

        notification.style.display = 'flex';

        notification.classList.remove('fade-out');

        setTimeout(() => {
            notification.classList.add('fade-out');
        }, 3000);
    }
});

$(function () {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        $("#login-item, #signup-item").addClass("d-none");
        $("#profile-item, #logout-item").removeClass("d-none");
    } else {
        $("#login-item, #signup-item").removeClass("d-none");
        $("#profile-item, #logout-item").addClass("d-none");
    }

    $("#logout-button").click(function () {
        console.log(1);
        sessionStorage.removeItem("loggedInUser");
        console.log(2);
        alert("You have been logged out.");
        window.location.href = "login.html";
    });
});
