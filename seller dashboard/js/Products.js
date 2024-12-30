//import { CartManager } from './counter.js';
document.addEventListener('DOMContentLoaded', function () {

    const products = [
        {
            id: 1,
            category: 'chairs',
            image: '../images/chair1.png',
            title: 'Elegant Office Chair',
            price: 120.00,
            costPrice: 90.00,
            description: 'This elegant office chair offers both comfort and style for your workspace.',
            count: 15,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'pending',
            color: 'white'
        },
        {
            id: 2,
            category: 'chairs',
            image: '../images/chair2.png',
            title: 'Classic Dining Chair',
            price: 90.00,
            costPrice: 70.00,
            description: 'Classic design dining chair, perfect for any traditional dining room.',
            count: 0,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'ordered',
            color: 'white'

        },
        {
            id: 3,
            category: 'chairs',
            image: '../images/chair3.png',
            title: 'Vintage Wooden Chair',
            price: 75.00,
            costPrice: 55.00,
            description: 'A vintage-inspired wooden chair to bring rustic charm to any room.',
            count: 8,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'delivered',
            color: 'green'
        },
        {
            id: 4,
            category: 'chairs',
            image: '../images/chair4.png',
            title: 'Modern Swivel Chair',
            price: 150.00,
            costPrice: 110.00,
            description: 'A modern swivel chair with ergonomic design and smooth rotation.',
            count: 10,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'pending',
            color: 'white'

        },
        {
            id: 5,
            category: 'chairs',
            image: '../images/chair5.png',
            title: 'Luxury Lounge Chair',
            price: 300.00,
            costPrice: 230.00,
            description: 'A luxury lounge chair designed for ultimate relaxation and comfort.',
            count: 5,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'ordered',
            color: 'black'

        },
        {
            id: 6,
            category: 'chairs',
            image: '../images/chair6.png',
            title: 'Outdoor Patio Chair',
            price: 60.00,
            costPrice: 45.00,
            description: 'Durable outdoor patio chair designed for all weather conditions.',
            count: 25,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'delivered',
            color: 'black'
        },
        {
            id: 7,
            category: 'chairs',
            image: '../images/chair7.png',
            title: 'Minimalist Armchair',
            price: 200.00,
            costPrice: 150.00,
            description: 'A minimalist armchair with a sleek design, perfect for modern interiors.',
            count: 7,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'pending',
            color: 'white'

        },
        {
            id: 8,
            category: 'tables',
            image: '../images/table1.png',
            title: 'Glass Coffee Table',
            price: 250.00,
            costPrice: 180.00,
            description: 'Elegant glass coffee table to complement any modern living room.',
            count: 12,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'ordered',
            color: 'white'

        },
        {
            id: 9,
            category: 'tables',
            image: '../images/table2.png',
            title: 'Wooden Dining Table',
            price: 400.00,
            costPrice: 300.00,
            description: 'A sturdy wooden dining table perfect for family meals and gatherings.',
            count: 5,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'delivered',
            color: 'brown'

        },
        {
            id: 10,
            category: 'tables',
            image: '../images/table3.png',
            title: 'Expandable Dining Table',
            price: 600.00,
            costPrice: 450.00,
            description: 'Expandable dining table ideal for large families and special events.',
            count: 3,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'pending',
            color: 'black'

        },
        {
            id: 11,
            category: 'tables',
            image: '../images/table4.png',
            title: 'Industrial Work Desk',
            price: 350.00,
            costPrice: 250.00,
            description: 'Industrial-style work desk designed for home offices or creative spaces.',
            count: 8,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'ordered',
            color: 'black'
        },
        {
            id: 12,
            category: 'tables',
            image: '../images/table5.png',
            title: 'Compact Side Table',
            price: 80.00,
            costPrice: 60.00,
            description: 'Compact side table perfect for small spaces and minimalistic designs.',
            count: 18,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'delivered',
            color: 'white'

        },
        {
            id: 13,
            category: 'tables',
            image: '../images/table6.png',
            title: 'Rustic Console Table',
            price: 220.00,
            costPrice: 170.00,
            description: 'Rustic console table designed to bring a warm, homey feel to any room.',
            count: 6,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'pending',
            color: 'brown'
        },
        {
            id: 14,
            category: 'sofas',
            image: '../images/sofa1.png',
            title: 'L-Shaped Sofa',
            price: 1200.00,
            costPrice: 900.00,
            description: 'Spacious L-shaped sofa offering both comfort and contemporary style.',
            count: 4,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'ordered',
            color: 'green'
        },
        {
            id: 15,
            category: 'sofas',
            image: '../images/sofa2.png',
            title: 'Modern Recliner Sofa',
            price: 800.00,
            costPrice: 600.00,
            description: 'Modern recliner sofa perfect for relaxing after a long day.',
            count: 5,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'delivered',
            color: 'green'
        },
        {
            id: 16,
            category: 'sofas',
            image: '../images/sofa3.png',
            title: 'Velvet Sectional Sofa',
            price: 1000.00,
            costPrice: 750.00,
            description: 'Luxurious velvet sectional sofa that fits perfectly in any living room.',
            count: 3,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'pending',
            color: 'green'
        },
        {
            id: 17,
            category: 'sofas',
            image: '../images/sofa4.png',
            title: 'Compact Loveseat',
            price: 500.00,
            costPrice: 375.00,
            description: 'A compact loveseat for small spaces with a cozy design.',
            count: 10,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'ordered',
            color: 'white'

        },
        {
            id: 18,
            category: 'sofas',
            image: '../images/sofa5.png',
            title: 'Leather Chesterfield Sofa',
            price: 1500.00,
            costPrice: 1100.00,
            description: 'A luxurious leather Chesterfield sofa, perfect for high-end living rooms.',
            count: 2,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'delivered',
            color: 'black'
        },
        {
            id: 19,
            category: 'sofas',
            image: '../images/sofa6.png',
            title: 'Fabric Sofa Bed',
            price: 700.00,
            costPrice: 500.00,
            description: 'A versatile fabric sofa that doubles as a comfortable bed.',
            count: 7,
            sold: 0,
            discount: 0,
            sellerid: 2,
            sellername: 'Abdulrahman',
            status: 'pending',
            color: 'grey'

        },
        {
            id: 20,
            category: 'sofas',
            image: '../images/sofa7.png',
            title: 'Scandinavian Sofa',
            price: 950.00,
            costPrice: 710.00,
            description: 'Scandinavian-style sofa with clean lines and a neutral color palette.',
            count: 4,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'ordered',
            color: 'grey'
        },
        {
            id: 21,
            category: 'sofas',
            image: '../images/sofa8.png',
            title: 'Large Family Sofa',
            price: 1800.00,
            costPrice: 1300.00,
            description: 'A spacious and comfortable family sofa perfect for gatherings.',
            count: 3,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'delivered',
            color: 'white'

        },
        {
            id: 22,
            category: 'sofas',
            image: '../images/sofa9.png',
            title: 'Corner Sofa Set',
            price: 2000.00,
            costPrice: 1500.00,
            description: 'A large corner sofa set for maximum seating and comfort.',
            count: 2,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'pending',
            color: 'grey'
        },
        {
            id: 23,
            category: 'accessories',
            image: '../images/acc1.png',
            title: 'Designer Wall Clock',
            price: 45.00,
            costPrice: 35.00,
            description: 'A stylish designer wall clock that enhances any room.',
            count: 30,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'ordered',
            color: 'purple'
        },
        {
            id: 24,
            category: 'accessories',
            image: '../images/acc2.png',
            title: 'Luxury Throw Pillow',
            price: 25.00,
            costPrice: 20.00,
            description: 'Add comfort and luxury to your living space with this throw pillow.',
            count: 50,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'delivered',
            color: 'brown'
        },
        {
            id: 25,
            category: 'accessories',
            image: '../images/acc3.png',
            title: 'Decorative Vase',
            price: 60.00,
            costPrice: 45.00,
            description: 'A decorative vase that adds a touch of elegance to your home decor.',
            count: 20,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'pending',
            color: 'brown'
        },
        {
            id: 26,
            category: 'accessories',
            image: '../images/acc4.png',
            title: 'Modern Rug',
            price: 150.00,
            costPrice: 110.00,
            description: 'A modern rug that complements contemporary home decor.',
            count: 12,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'ordered',
            color: 'grey'
        },
        {
            id: 27,
            category: 'lights',
            image: '../images/lights1.png',
            title: 'LED Pendant Light',
            price: 120.00,
            costPrice: 90.00,
            description: 'An energy-efficient LED pendant light with a modern design.',
            count: 10,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'delivered',
            color: 'white'

        },
        {
            id: 28,
            category: 'lights',
            image: '../images/lights2.png',
            title: 'Table Lamp',
            price: 60.00,
            costPrice: 45.00,
            description: 'A stylish table lamp that adds a warm glow to your space.',
            count: 15,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'pending',
            color: 'white'

        },
        {
            id: 29,
            category: 'lights',
            image: '../images/lights3.png',
            title: 'Ceiling Chandelier',
            price: 500.00,
            costPrice: 380.00,
            description: 'An elegant ceiling chandelier to illuminate your living room or dining area.',
            count: 5,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'ordered',
            color: 'black'
        },
        {
            id: 30,
            category: 'lights',
            image: '../images/lights4.png',
            title: 'Outdoor Solar Light',
            price: 40.00,
            costPrice: 30.00,
            description: 'Eco-friendly outdoor solar light, perfect for lighting up your garden.',
            count: 25,
            sold: 0,
            discount: 0,
            sellerid: 1,
            sellername: 'Ahmed',
            status: 'delivered',
            color: 'black'
        }
    ];
    let currentuser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const CartManager = {
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

    };
    CartManager.updateCartCounter();
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(products));
    }
    const productSection = document.querySelector('.row');
    let selectedProductId = null;

    function loadProducts(filteredProducts = null) {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        productSection.innerHTML = '';
        const productsToDisplay = filteredProducts !== null ? filteredProducts : storedProducts;
        if (productsToDisplay.length === 0) {
            noProducts(true);
            return;
        }
        else
            noProducts(false);

        productsToDisplay.forEach(product => {
            const soldOutBadge = product.count === 0 ? '<span class="sold-out-badge">Sold Out</span>' : ''

            const productHTML = `
                    <div class="col-12 col-md-4 col-lg-3 mb-5 product-item ${product.count===0 ?'sold-out' : '' } "
                    data-category="${product.category}">
                        <img src="${product.image}" class="img-fluid product-thumbnail">${soldOutBadge}
                        <h3 class="product-title">${product.title}</h3>
                        <strong class="product-price">${'$' + product.price}</strong>
                        <button class="icon-cross" data-id="${product.id}">
                            <img src="../images/cross.svg" class="img-fluid">
                        </button>
                    </div>
                `;
            productSection.insertAdjacentHTML('beforeend', productHTML);

        });
        filterEvents();/////////
        productEvents();//////////
        function noProducts(s) {
            const message = document.getElementById('no-products-message');
            if (s)
                message.style.display = 'block';
            else
                message.style.display = 'none';
        }

        function filterProducts() {
            // const storedProducts = JSON.parse(localStorage.getItem('products')) || [];/////////
            const price = document.querySelector('input[name="price"]:checked')?.dataset.price;
            const color = Array.from(document.querySelectorAll('.color-checkbox:checked')).map(c => c.dataset.color);
            const category = Array.from(document.querySelectorAll('.category-checkbox:checked')).map(c => c.dataset.category);
            let filteredProducts = [...storedProducts];////////
            if (price) {
                if (price === 'high-to-low')
                    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
                else if (price === 'low-to-high')
                    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
                else if (price === 'less-than-100')
                    filteredProducts = filteredProducts.filter(p => p.price < 100);
                else if (price === 'less-than-200')
                    filteredProducts = filteredProducts.filter(p => p.price < 200);
            }
            if (color.length > 0) {
                filteredProducts = filteredProducts.filter(p => color.includes(p.color));
            }
            if (category.length > 0) {
                filteredProducts = filteredProducts.filter(c => category.includes(c.category));
            }
            const searchQuery = document.getElementById('search')?.value.toLowerCase();
            if (searchQuery) {
                filteredProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(searchQuery));
            }
            loadProducts(filteredProducts);

        }
        function filterEvents() {
            document.querySelectorAll('input[type="radio"][name="price"]').forEach(r => {
                r.removeEventListener('change', filterProducts);
                r.addEventListener('change', filterProducts);
            });

            document.querySelectorAll('.color-checkbox, .category-checkbox').forEach(c => {
                c.removeEventListener('change', filterProducts);
                c.addEventListener('change', filterProducts);
            });
            const searchInput = document.getElementById('search');
            if (searchInput) { 
                searchInput.removeEventListener('input', filterProducts);
                searchInput.addEventListener('input', filterProducts);
            }
        }
        // document.querySelectorAll('input[type="radio"][name="price"]').forEach(r => {
        //     r.addEventListener('change', filterProducts);
        // });
        // document.querySelectorAll('.color-checkbox, .category-checkbox').forEach(c => {
        //     c.addEventListener('change', filterProducts);
        // });

        function productEvents() {
            document.querySelectorAll('.icon-cross').forEach(button => {
                button.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const productId = parseInt(this.getAttribute('data-id'));
                    selectedProductId = productId;
                    addToCart(selectedProductId, userId);
                });
            });


            document.querySelectorAll('.product-item').forEach(item => {
                item.addEventListener('click', function () {
                    productId = this.querySelector('.product-title').textContent;
                    localStorage.setItem('selectedProduct', productId);
                    window.location.href = 'productDetails.html';
                });
            });
        }
    }

    loadProducts();


    // const userId = "user12";/////
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify({}));
    }

    function addToCart(productId, currentuser_id) {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const cartData = JSON.parse(localStorage.getItem("cart")) || {};
        const cartKey = `cart_${currentuser_id}`;
        const product = products.find((product) => product.id === productId);

        if (!cartData[cartKey]) {
            cartData[cartKey] = [{ ...product, quantity: 1 }];
            localStorage.setItem("cart", JSON.stringify(cartData));
            CartManager.updateCartCounter();
            return;
        }

        let existingProduct = cartData[cartKey].find(
            (item) => item.id === productId
        );
        if (existingProduct) {
            if (existingProduct.quantity < product.count)
            existingProduct.quantity += 1;
            else{
                const NoMoreProducts = document.getElementById('NoMoreProducts');
                NoMoreProducts.style.display = 'flex';
                document.getElementById('ok').addEventListener('click', function () {
                    NoMoreProducts.style.display = 'none';
                });
                return;
            }
        }
        
        else {
            cartData[cartKey].push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cartData));
        showNotification();
        CartManager.updateCartCounter();
    }

    window.addEventListener('storage', function (e) {
        if (e.key === 'products') {
            loadProducts();
        }
    });
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
