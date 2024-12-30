"use strict";

const customers = JSON.parse(localStorage.getItem("customers")) || [];
const sellers = JSON.parse(localStorage.getItem("sellers")) || [];
const allUsers = [...customers, ...sellers];

$(function () {
  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

  if (!user) {
    window.location.href = "../../login.html";
    $("#login-item, #signup-item").removeClass("d-none");
    $("#profile-item, #logout-item").addClass("d-none");
    return;
  }
  if (user.role === "seller") {
    window.location.href = "../../seller dashboard/index2.html";
    return;
  } else if (user.role === "admin") {
    window.location.href = "../../admin dashboard/index.html";
    return;
  }

  $("#login-item, #signup-item").addClass("d-none");
  $("#profile-item, #logout-item").removeClass("d-none");

  $("#logout-button").click(function () {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  });

  $("#username").val(user.username);
  $("#email").val(user.email);
  $(".user-img").attr("src", `../images/${user.photo}`);
  $("#gender").val(user.gender);
  $("#phoneNumber").val(user.phoneNumber);
  $("#address").val(user.address);
  $("#photoSrc").val(user.photo);

  $("#updateBtn").prop("disabled", true);

  const isValidUsername = (username) =>
    /^[a-zA-Z][a-zA-Z0-9._-]{2,19}$/.test(username);

  const isValidEmail = (email) =>
    /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z-.]+$/.test(email);

  const validateInputs = () => {
    const userName = $("#username").val().trim();
    const userEmail = $("#email").val().trim();
    const phoneNumber = $("#phoneNumber").val().trim();

    $(".error-message").text("");
    let isValid = true;

    const otherUsers = allUsers.filter(
      (existingUser) => existingUser.id !== user.id
    );

    const userExists = otherUsers.some(
      (existingUser) =>
        existingUser.username === userName || existingUser.email === userEmail
    );
    if (userExists) {
      $("#userNameError").text("Username already exists");
      isValid = false;
    }

    if (!userName) {
      $("#userNameError").text("Username can NOT be empty");
      isValid = false;
    }

    if (!isValidUsername(userName)) {
      $("#usernameError").text("Invalid username");
      isValid = false;
    }

    if (!userEmail) {
      $("#emailError").text("Email can NOT be empty");
      isValid = false;
    }

    if (!isValidEmail(userEmail)) {
      $("#emailError").text("Please enter a valid email");
      isValid = false;
    }

    if (phoneNumber) {
      const phonePattern = /^(010|011|012|015)[0-9]{8}$/;
      if (!phonePattern.test(phoneNumber)) {
        $("#phoneNumberError").text("Please enter a valid phone number");
        isValid = false;
      }
    }

    $("#updateBtn").prop("disabled", !isValid);
  };

  $("#username, #email, #phoneNumber, #gender, #address, #photoSrc").on(
    "input",
    validateInputs
  );

  $("#updateBtn").on("click", function (e) {
    e.preventDefault();

    const userIndex = customers.findIndex(
      (customer) => customer.id === user.id
    );

    if (userIndex !== -1) {
      customers[userIndex].username = $("#username").val().trim();
      customers[userIndex].email = $("#email").val().trim();
      customers[userIndex].phoneNumber = $("#phoneNumber").val().trim();
      customers[userIndex].gender = $("#gender").val();
      customers[userIndex].address = $("#address").val().trim();
      customers[userIndex].photo = $("#photoSrc").val().trim();

      localStorage.setItem("customers", JSON.stringify(customers));

      sessionStorage.setItem(
        "loggedInUser",
        JSON.stringify(customers[userIndex])
      );

      $("#successMessage")
        .text("Profile updated successfully!")
        .removeClass("d-none")
        .fadeIn(500)
        .fadeOut(3000);
    }
  });

  // orders
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const userOrders = orders
    .filter((order) => order.user_id === user.id)
    .sort((order1, order2) => order1.time < order2.time);

  const renderOrders = () => {
    const $ordersList = $("#orders-list");
    if (userOrders.length !== 0) $ordersList.empty();

    userOrders.forEach((order) => {
      const orderHTML = `
        <div class="card mb-4 shadow-sm rounded-lg">
          <div class="card-header text-white ${
            order.status === "Delivered" ? "bg-success" : "bg-warning"
          }">
            <strong>${order.status}</strong> ${
        order.status === "Delivered" ? `on ${order.time.split("T")[0]}` : ""
      }
          </div>
          <div class="card-body">
            ${order.products
              .map(
                (product) => `
              <div class="d-flex align-items-start mb-3">
                <img
                  src="${product.image}"
                  alt="${product.title}"
                  class="img-fluid rounded"
                  style="width: 80px; height: 80px; object-fit: cover; margin-right: 15px;"
                />
                <div>
                  <h5 class="mb-1">${product.title}</h5>
                  <p class="mb-1 text-muted">Price: $${product.price}</p>
                  <p class="mb-0">Quantity: ${product.quantity}</p>
                </div>
              </div>
            `
              )
              .join("")}
            <div class="d-flex justify-content-between mt-3">
              <h5 class="mb-0"><strong>Total Price:</strong> $${
                order.totalPrice
              }</h5>
              <span class="badge bg-primary pt-2">Order ID: ${
                order.order_id
              }</span>
            </div>
          </div>
          <div class="card-footer text-muted text-end">
            <small>Order placed at: ${order.time.split("T")[0]}</small>
          </div>
        </div>
      `;
      $ordersList.append(orderHTML);
    });
  };

  renderOrders();
});
