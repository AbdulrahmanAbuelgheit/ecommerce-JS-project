if (!localStorage.getItem("products")) {
  const products = [
    {
      id: 1,
      category: "chairs",
      image: "../images/chair1.png",
      title: "Elegant Office Chair",
      price: 120.0,
      costPrice: 90.0,
      description:
        "This elegant office chair offers both comfort and style for your workspace.",
      count: 15,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "pending",
      color: "white",
    },
    {
      id: 2,
      category: "chairs",
      image: "../images/chair2.png",
      title: "Classic Dining Chair",
      price: 90.0,
      costPrice: 70.0,
      description:
        "Classic design dining chair, perfect for any traditional dining room.",
      count: 0,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "ordered",
      color: "white",
    },
    {
      id: 3,
      category: "chairs",
      image: "../images/chair3.png",
      title: "Vintage Wooden Chair",
      price: 75.0,
      costPrice: 55.0,
      description:
        "A vintage-inspired wooden chair to bring rustic charm to any room.",
      count: 8,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "delivered",
      color: "green",
    },
    {
      id: 4,
      category: "chairs",
      image: "../images/chair4.png",
      title: "Modern Swivel Chair",
      price: 150.0,
      costPrice: 110.0,
      description:
        "A modern swivel chair with ergonomic design and smooth rotation.",
      count: 10,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "pending",
      color: "white",
    },
    {
      id: 5,
      category: "chairs",
      image: "../images/chair5.png",
      title: "Luxury Lounge Chair",
      price: 300.0,
      costPrice: 230.0,
      description:
        "A luxury lounge chair designed for ultimate relaxation and comfort.",
      count: 5,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "ordered",
      color: "black",
    },
    {
      id: 6,
      category: "chairs",
      image: "../images/chair6.png",
      title: "Outdoor Patio Chair",
      price: 60.0,
      costPrice: 45.0,
      description:
        "Durable outdoor patio chair designed for all weather conditions.",
      count: 25,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "delivered",
      color: "black",
    },
    {
      id: 7,
      category: "chairs",
      image: "../images/chair7.png",
      title: "Minimalist Armchair",
      price: 200.0,
      costPrice: 150.0,
      description:
        "A minimalist armchair with a sleek design, perfect for modern interiors.",
      count: 7,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "pending",
      color: "white",
    },
    {
      id: 8,
      category: "tables",
      image: "../images/table1.png",
      title: "Glass Coffee Table",
      price: 250.0,
      costPrice: 180.0,
      description:
        "Elegant glass coffee table to complement any modern living room.",
      count: 12,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "ordered",
      color: "white",
    },
    {
      id: 9,
      category: "tables",
      image: "../images/table2.png",
      title: "Wooden Dining Table",
      price: 400.0,
      costPrice: 300.0,
      description:
        "A sturdy wooden dining table perfect for family meals and gatherings.",
      count: 5,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "delivered",
      color: "brown",
    },
    {
      id: 10,
      category: "tables",
      image: "../images/table3.png",
      title: "Expandable Dining Table",
      price: 600.0,
      costPrice: 450.0,
      description:
        "Expandable dining table ideal for large families and special events.",
      count: 3,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "pending",
      color: "black",
    },
    {
      id: 11,
      category: "tables",
      image: "../images/table4.png",
      title: "Industrial Work Desk",
      price: 350.0,
      costPrice: 250.0,
      description:
        "Industrial-style work desk designed for home offices or creative spaces.",
      count: 8,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "ordered",
      color: "black",
    },
    {
      id: 12,
      category: "tables",
      image: "../images/table5.png",
      title: "Compact Side Table",
      price: 80.0,
      costPrice: 60.0,
      description:
        "Compact side table perfect for small spaces and minimalistic designs.",
      count: 18,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "delivered",
      color: "white",
    },
    {
      id: 13,
      category: "tables",
      image: "../images/table6.png",
      title: "Rustic Console Table",
      price: 220.0,
      costPrice: 170.0,
      description:
        "Rustic console table designed to bring a warm, homey feel to any room.",
      count: 6,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "pending",
      color: "brown",
    },
    {
      id: 14,
      category: "sofas",
      image: "../images/sofa1.png",
      title: "L-Shaped Sofa",
      price: 1200.0,
      costPrice: 900.0,
      description:
        "Spacious L-shaped sofa offering both comfort and contemporary style.",
      count: 4,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "ordered",
      color: "green",
    },
    {
      id: 15,
      category: "sofas",
      image: "../images/sofa2.png",
      title: "Modern Recliner Sofa",
      price: 800.0,
      costPrice: 600.0,
      description:
        "Modern recliner sofa perfect for relaxing after a long day.",
      count: 5,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "delivered",
      color: "green",
    },
    {
      id: 16,
      category: "sofas",
      image: "../images/sofa3.png",
      title: "Velvet Sectional Sofa",
      price: 1000.0,
      costPrice: 750.0,
      description:
        "Luxurious velvet sectional sofa that fits perfectly in any living room.",
      count: 3,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "pending",
      color: "green",
    },
    {
      id: 17,
      category: "sofas",
      image: "../images/sofa4.png",
      title: "Compact Loveseat",
      price: 500.0,
      costPrice: 375.0,
      description: "A compact loveseat for small spaces with a cozy design.",
      count: 10,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "ordered",
      color: "white",
    },
    {
      id: 18,
      category: "sofas",
      image: "../images/sofa5.png",
      title: "Leather Chesterfield Sofa",
      price: 1500.0,
      costPrice: 1100.0,
      description:
        "A luxurious leather Chesterfield sofa, perfect for high-end living rooms.",
      count: 2,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "delivered",
      color: "black",
    },
    {
      id: 19,
      category: "sofas",
      image: "../images/sofa6.png",
      title: "Fabric Sofa Bed",
      price: 700.0,
      costPrice: 500.0,
      description: "A versatile fabric sofa that doubles as a comfortable bed.",
      count: 7,
      sold: 0,
      discount: 0,
      sellerid: 2,
      sellername: "Abdulrahman",
      status: "pending",
      color: "grey",
    },
    {
      id: 20,
      category: "sofas",
      image: "../images/sofa7.png",
      title: "Scandinavian Sofa",
      price: 950.0,
      costPrice: 710.0,
      description:
        "Scandinavian-style sofa with clean lines and a neutral color palette.",
      count: 4,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "ordered",
      color: "grey",
    },
    {
      id: 21,
      category: "sofas",
      image: "../images/sofa8.png",
      title: "Large Family Sofa",
      price: 1800.0,
      costPrice: 1300.0,
      description:
        "A spacious and comfortable family sofa perfect for gatherings.",
      count: 3,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "delivered",
      color: "white",
    },
    {
      id: 22,
      category: "sofas",
      image: "../images/sofa9.png",
      title: "Corner Sofa Set",
      price: 2000.0,
      costPrice: 1500.0,
      description: "A large corner sofa set for maximum seating and comfort.",
      count: 2,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "pending",
      color: "grey",
    },
    {
      id: 23,
      category: "accessories",
      image: "../images/acc1.png",
      title: "Designer Wall Clock",
      price: 45.0,
      costPrice: 35.0,
      description: "A stylish designer wall clock that enhances any room.",
      count: 30,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "ordered",
      color: "purple",
    },
    {
      id: 24,
      category: "accessories",
      image: "../images/acc2.png",
      title: "Luxury Throw Pillow",
      price: 25.0,
      costPrice: 20.0,
      description:
        "Add comfort and luxury to your living space with this throw pillow.",
      count: 50,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "delivered",
      color: "brown",
    },
    {
      id: 25,
      category: "accessories",
      image: "../images/acc3.png",
      title: "Decorative Vase",
      price: 60.0,
      costPrice: 45.0,
      description:
        "A decorative vase that adds a touch of elegance to your home decor.",
      count: 20,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "pending",
      color: "brown",
    },
    {
      id: 26,
      category: "accessories",
      image: "../images/acc4.png",
      title: "Modern Rug",
      price: 150.0,
      costPrice: 110.0,
      description: "A modern rug that complements contemporary home decor.",
      count: 12,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "ordered",
      color: "grey",
    },
    {
      id: 27,
      category: "lights",
      image: "../images/lights1.png",
      title: "LED Pendant Light",
      price: 120.0,
      costPrice: 90.0,
      description:
        "An energy-efficient LED pendant light with a modern design.",
      count: 10,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "delivered",
      color: "white",
    },
    {
      id: 28,
      category: "lights",
      image: "../images/lights2.png",
      title: "Table Lamp",
      price: 60.0,
      costPrice: 45.0,
      description: "A stylish table lamp that adds a warm glow to your space.",
      count: 15,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "pending",
      color: "white",
    },
    {
      id: 29,
      category: "lights",
      image: "../images/lights3.png",
      title: "Ceiling Chandelier",
      price: 500.0,
      costPrice: 380.0,
      description:
        "An elegant ceiling chandelier to illuminate your living room or dining area.",
      count: 5,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "ordered",
      color: "black",
    },
    {
      id: 30,
      category: "lights",
      image: "../images/lights4.png",
      title: "Outdoor Solar Light",
      price: 40.0,
      costPrice: 30.0,
      description:
        "Eco-friendly outdoor solar light, perfect for lighting up your garden.",
      count: 25,
      sold: 0,
      discount: 0,
      sellerid: 1,
      sellername: "Ahmed",
      status: "delivered",
      color: "black",
    },
  ];
  localStorage.setItem("products", JSON.stringify(products));
}

let currentuser = JSON.parse(sessionStorage.getItem("loggedInUser"));
let user = currentuser ? currentuser.id : "guest";
CartManager.updateCartCounter();

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify({}));
}

let cartData = JSON.parse(localStorage.getItem("cart")) || {};
const cartKey = `cart_${user}`;
if (!cartData[cartKey]) {
  cartData[cartKey] = [];
  localStorage.setItem("cart", JSON.stringify(cartData));
}
const storedProducts = JSON.parse(localStorage.getItem("products")) || [];


if (cartData["cart_guest"]) {
  if (user !== "guest") {
    cartData["cart_guest"].forEach((guestItem) => {
      const existingItemIndex = cartData[cartKey].findIndex((cartItem) => cartItem.id === guestItem.id);
      const storedProduct = storedProducts.find((product) => product.id === guestItem.id);
      
      if (storedProduct) {
        if (existingItemIndex !== -1) {
          const existingItem = cartData[cartKey][existingItemIndex];
          existingItem.quantity = Math.min(
            existingItem.quantity + guestItem.quantity,
            storedProduct.count
          );
        } else {
          guestItem.quantity = Math.min(guestItem.quantity, storedProduct.count);
          cartData[cartKey].push(guestItem);
        }
      }
    });

    delete cartData["cart_guest"];
    localStorage.setItem("cart", JSON.stringify(cartData));
    CartManager.updateCartCounter();
  }
}

function showItem(item, typename) {
  const soldOutBadge = item.count === 0
    ? '<span class="sold-out-badge">Sold Out</span>'
    : '';

  let divItem = document.createElement("div");
  divItem.className = "col-12 col-md-4 col-lg-3 mb-5 mb-md-0";

  divItem.innerHTML = `
    <div class="product-item ${item.count === 0 ? "sold-out" : ""}" data-category="${item.category}">
      <img src="${item.image}" class="img-fluid product-thumbnail">${soldOutBadge}
      <h3 class="product-title">${item.title}</h3>
      <strong class="product-price">${"$" + item.price}</strong>
      <button class="icon-cross" data-id="${item.id}">
        <img src="../images/cross.svg" class="img-fluid">
      </button>
    </div>
  `;

  document.getElementById(typename).appendChild(divItem);
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

  let existingProduct = cartData[cartKey].find((item) => item.id === productId);
  if (existingProduct) {
    if (existingProduct.quantity < product.count) existingProduct.quantity += 1;
    else {
      const NoMoreProducts = document.getElementById("NoMoreProducts");
      NoMoreProducts.style.display = "flex";
      document.getElementById("ok").addEventListener("click", function () {
        NoMoreProducts.style.display = "none";
      });
      return;
    }
  } else {
    cartData[cartKey].push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cartData));
  showNotification();
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
    sessionStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "login.html";
  });
});

window.addEventListener("load", function () {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  for (let i = 0; i < 3; i++) {
    showItem(products[i], "rowProduct");
  }

  let productsBestSeller = [...products].sort((a, b) => b.solded - a.solded);
  for (let i = 5; i < 8; i++) {
    showItem(productsBestSeller[i], "rowbestseller");
  }

  let chairs = products.filter((a) => a.category === "chairs");
  for (let i = 0; i < 4; i++) {
    showItem(chairs[i], "rowchairs");
  }

  let sofas = products.filter((a) => a.category === "sofas");
  for (let i = 0; i < sofas.length; i++) {
    showItem(sofas[i], "rowtables");
  }

  document.querySelectorAll(".product-item").forEach((item) => {
    item.addEventListener("click", function () {
      const productId = this.querySelector(".product-title").textContent;
      localStorage.setItem("selectedProduct", productId);
      window.location.href = "productDetails.html";
    });
  });

  let addCartButtons = document.getElementsByClassName("icon-cross");
  for (let i = 0; i < addCartButtons.length; i++) {
    addCartButtons[i].addEventListener("click", function (e) {
      e.stopPropagation();
      const productId = parseInt(e.target.closest("button").dataset.id);
      addToCart(productId, user);
    });
  }
});
