
let currentuser = JSON.parse(sessionStorage.getItem("loggedInUser"));
let user;
if (!currentuser) user = "guest";
else user = currentuser.id;



if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify({}));
}

function renderCart() {
  CartManager.updateCartCounter();
  const tbody = $("#cart-items");
  tbody.empty();
  const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
  const cart = allCarts[`cart_${user}`] || [];

  if (!cart || cart.length === 0) {
    $("h2.text-center.mb-4").hide();
    $("#cart-table").hide();
    $("#cart-actions").hide();
    $("#cart-totals").hide();
    $("#cart-empty").show();
    return;
  } else {
    $("h2.text-center.mb-4").show();
    $("#cart-table").show();
    $("#cart-actions").show();
    $("#cart-totals").show();
    $("#cart-empty").hide();
  }
  cart.forEach((item) => {
    const discountedPrice =
      item.price - (item.price * (item.discount || 0)) / 100;

    tbody.append(`
              <tr>
                <td><img src="${
                  item.image
                }" class="img-responsive custom-img" alt="${item.title}" /></td>
                <td>${item.title}</td>
                <td>$${discountedPrice.toFixed(2)}</td>
                <td>
                  <div class="quantity-container">
                    <button class="btn btn-outline-secondary" onclick="updateQuantity(${
                      item.id
                    }, -1)">-</button>
                    <input type="text" class="form-control" id="quantity-${
                      item.id
                    }" value="${item.quantity}" readonly />
                    <button class="btn btn-outline-secondary" onclick="updateQuantity(${
                      item.id
                    }, 1)">+</button>
                  </div>
                </td>
                <td id="total-${item.id}">$${(
      discountedPrice * item.quantity
    ).toFixed(2)}</td>
                <td><button class="remove-btn" onclick="removeItem(${
                  item.id
                })">X</button></td>
              </tr>
            `);
  });

  calculateSubtotal();
}

function updateQuantity(id, change) {
  const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
  const cartKey = `cart_${user}`;
  const cart = allCarts[cartKey] || [];
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const product = products.find((p) => p.id === id);
  if (product) {
    const item = cart.find((p) => p.id === id);
    if (item) {
      const newQuantity = item.quantity + change;

      if (newQuantity >= 1 && newQuantity <= product.count) {
        item.quantity = newQuantity;
        const discountedPrice =
          product.price - (product.price * (product.discount || 0)) / 100;

        // Update the UI for the quantity and total price
        $(`#quantity-${id}`).val(newQuantity);
        $(`#total-${id}`).text(
          `$${(discountedPrice * newQuantity).toFixed(2)}`
        );
        allCarts[cartKey] = cart;
        localStorage.setItem("cart", JSON.stringify(allCarts));
      }
    }
  }
  renderCart();
}

function calculateSubtotal() {
  const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
  const cartKey = `cart_${user}`;
  const cart = allCarts[cartKey] || [];
  let subtotal = 0;
  cart.forEach((item) => {
    const discountedPrice =
      item.price - (item.price * (item.discount || 0)) / 100;
    subtotal += discountedPrice * item.quantity;
  });
  $("#subtotal").text(`$${subtotal.toFixed(2)}`);
  $("#total").text(`$${subtotal.toFixed(2)}`);
  return subtotal;
}

function removeItem(id) {
  const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
  const cartKey = `cart_${user}`;
  let cart = allCarts[cartKey] || [];
  cart = cart.filter((p) => p.id !== id);
  allCarts[cartKey] = cart;
  localStorage.setItem("cart", JSON.stringify(allCarts));
  renderCart();
}

function proceedToCheckout() {
  if (user === "guest") {
    showWarningModal(
      "You must log in first to proceed to checkout.",
      "Login Required"
    );
    return;
  } else {
    window.location.href = "checkout.html";
  }
}
function showWarningModal(message, title = "Notification") {
  const modalBody = document.getElementById("alertModalBody");
  modalBody.innerHTML = message;
  const modalTitle = document.getElementById("alertModalLabel");
  modalTitle.textContent = title;
  const modal = new bootstrap.Modal(document.getElementById("alertModal"));
  modal.show();
}

function toggleShippingDetails() {
  const checkbox = document.getElementById("shipToDifferentAddress");
  const duplicableContent = document.getElementById("duplicableContent");
  const duplicateContainer = document.getElementById(
    "shippingDetailsDuplicate"
  );

  if (checkbox.checked) {
    // Clear any existing duplicates
    duplicateContainer.innerHTML = "";

    // Clone the duplicable content
    const duplicableContentClone = duplicableContent.cloneNode(true);

    // Add a unique class to the cloned section
    duplicableContentClone.classList.add("duplicated-section", "no-border");

    // Remove unnecessary elements in the duplicate
    const shipToDifferentAddress = duplicableContentClone.querySelector(
      "#shipToDifferentAddress"
    );
    const shipToDifferentAddressLabel = duplicableContentClone.querySelector(
      "label[for='shipToDifferentAddress']"
    );

    if (shipToDifferentAddress) {
      shipToDifferentAddress.parentNode.removeChild(shipToDifferentAddress);
    }
    if (shipToDifferentAddressLabel) {
      shipToDifferentAddressLabel.style.display = "none";
    }

    // Clear the input values in the duplicate section and make them editable
    const inputs = duplicableContentClone.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = ""; 
      input.readOnly = false; 
      input.classList.remove("pointer-disabled"); 
      input.id = `duplicate_${input.id}`; 
    });

    // Append the cloned content
    duplicateContainer.appendChild(duplicableContentClone);
  } else {
    duplicateContainer.innerHTML = "";
  }
}

function validateDuplicateFields() {
  const nameField = document.getElementById("duplicate_name");
  const addressField = document.getElementById("duplicate_address");
  const emailField = document.getElementById("duplicate_emailAddress");
  const phoneField = document.getElementById("duplicate_phone");
  const name = nameField?.value.trim() || "";
  const address = addressField?.value.trim() || "";
  const email = emailField?.value.trim() || "";
  const phone = phoneField?.value.trim() || "";

  const namePattern = /^[a-zA-Z][a-zA-Z0-9._-]{2,19}$/;
  const emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z-.]+$/;
  const phonePattern = /^(010|011|012|015)[0-9]{8}$/;

  let isValid = true;

  if (!namePattern.test(name)) {
    displayError(
      nameField,
      "Invalid name. Must start with a letter and be 3-20 characters long."
    );
    isValid = false;
  } else {
    clearError(nameField);
  }

  
  if (!address) {
    displayError(addressField, "Address is required.");
    isValid = false;
  } else {
    clearError(addressField);
  }

  if (!emailPattern.test(email)) {
    displayError(emailField, "Invalid email address.");
    isValid = false;
  } else {
    clearError(emailField);
  }

  if (!phonePattern.test(phone)) {
    displayError(
      phoneField,
      "Invalid phone number. Must start with 010, 011, 012, or 015 and be 11 digits."
    );
    isValid = false;
  } else {
    clearError(phoneField);
  }

  // Return validation status
  return isValid;
}

function displayError(field, message) {
  let errorElement = field.nextElementSibling;

  // If the error element doesn't exist, create it
  if (!errorElement || errorElement.tagName !== "SMALL") {
    errorElement = document.createElement("small");
    errorElement.className = "text-danger";
    field.parentElement.appendChild(errorElement);
  }

  errorElement.textContent = message;
}

function clearError(field) {
  const errorElement = field.nextElementSibling;
  if (errorElement && errorElement.tagName === "SMALL") {
    errorElement.textContent = "";
  }
}

function togglePaymentDescription(paymentMethodId) {
  const descriptions = document.querySelectorAll(".payment-description");
  descriptions.forEach((desc) => {
    desc.style.height = "0";
    desc.style.opacity = "0";
    desc.style.padding = "0";
    desc.style.transition =
      "height 0.3s ease, opacity 0.3s ease, padding 0.3s ease";
  });
  const selectedDescription = document.getElementById(paymentMethodId);
  selectedDescription.style.height = "auto";
  selectedDescription.style.opacity = "1";
  selectedDescription.style.padding = "10px 0";
  selectedDescription.style.transition =
    "height 0.3s ease, opacity 0.3s ease, padding 0.3s ease";
}
let obj;
function placeOrder() {
  const checkbox = document.getElementById("shipToDifferentAddress");
  const nameField = document.getElementById("duplicate_name");
  const addressField = document.getElementById("duplicate_address");
  const emailField = document.getElementById("duplicate_emailAddress");
  const phoneField = document.getElementById("duplicate_phone");

  // Get trimmed values
  const name = nameField?.value.trim() || "";
  const address = addressField?.value.trim() || "";
  const email = emailField?.value.trim() || "";
  const phone = phoneField?.value.trim() || "";
  let obj = {
    Name: currentuser.username,
    Address: currentuser.address,
    Email: currentuser.email,
    Phone: currentuser.phoneNumber,
  };
  if (checkbox.checked) {
    const isValid = validateDuplicateFields();

    if (!isValid) {
      alert("Please correct the errors before placing your order.");
      return; // Stop execution if validation fails
    } else {
      obj = { Name: name, Address: address, Email: email, Phone: phone };
    }
  }

  const allCarts = JSON.parse(localStorage.getItem("cart")) || {};
  const cartKey = `cart_${user}`;
  const cartItems = allCarts[cartKey] || [];
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  const selectedPaymentMethod = document.querySelector(
    'input[name="payment_method"]:checked'
  ).value;
  const order = {
    customerDetails: obj,
    order_id: orders.length + 1,
    user_id: user,
    products: [],
    time: new Date().toISOString(),
    status: "Pending",
    payment_type: selectedPaymentMethod,
    totalPrice: calculateSubtotal(),
    notes: document.getElementById("orderNotes").value,
  };
  const outOfStockItems = [];
  const updatedCart = [];
  let allProductsInStock = true;

  cartItems.forEach((cartItem) => {
    const product = storedProducts.find((p) => p.id === cartItem.id);

    if (product) {
      if (cartItem.quantity > product.count) {
        outOfStockItems.push({
          product_name: product.title,
          available: product.count,
          requested: cartItem.quantity,
        });
        if (product.count > 0) {
          updatedCart.push({ ...cartItem, quantity: product.count });
        }
        allProductsInStock = false;
      } else {
        updatedCart.push(cartItem);
      }
    }
  });

  if (!allProductsInStock) {
    let errorMessage = "<ul>";
    outOfStockItems.forEach((item) => {
      errorMessage += `<li>Product Name: ${item.product_name}, Requested: ${item.requested}, Available: ${item.available}</li>`;
    });
    errorMessage += "</ul>";

    // Set the modal body content dynamically
    document.getElementById("outOfStockMessage").innerHTML = errorMessage;

    // Show the modal using Bootstrap's modal method
    const outOfStockModal = new bootstrap.Modal(
      document.getElementById("outOfStockModal"),
      {
        backdrop: "static", 
        keyboard: false, 
      }
    );
    outOfStockModal.show();
    function handleModalCloseAction() {
      allCarts[cartKey] = updatedCart;
      localStorage.setItem("cart", JSON.stringify(allCarts));
      window.location.href = "cart.html";
    }
    document
      .getElementById("modalCloseButton")
      .addEventListener("click", handleModalCloseAction);
    document
      .querySelector("#outOfStockModal .btn-close")
      .addEventListener("click", handleModalCloseAction);
    CartManager.updateCartCounter();
    return; // Exit the function without placing the order
  }

  cartItems.forEach((cartItem) => {
    const product = storedProducts.find((p) => p.id === cartItem.id);
    product.sold += cartItem.quantity;
    product.count -= cartItem.quantity;
    order.products.push({
      product_id: product.id,
      title: product.title,
      image: product.image,
      price: ((100 - product.discount) / 100) * product.price,
      quantity: cartItem.quantity,
      seller_id: product.sellerid,
      seller_name:product.sellername,
      category:product.category,
      image:product.image,
      costPrice:product.costPrice


    });
  });
  localStorage.setItem("products", JSON.stringify(storedProducts));
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  allCarts[cartKey] = [];
  localStorage.setItem("cart", JSON.stringify(allCarts));
  CartManager.updateCartCounter();
  window.location.href = "thankyou.html";
}

function togglePaymentDescription(paymentMethodId) {
  $(".payment-description").css({
    height: "0",
    opacity: "0",
    padding: "0",
  });
  $(`#${paymentMethodId}`).css({
    height: "auto",
    opacity: "1",
    padding: "10px 0",
  });
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
          console.log(1);
          sessionStorage.removeItem("loggedInUser");
          console.log(2);
          alert("You have been logged out.");
          window.location.href = "login.html";
        });
    });  
