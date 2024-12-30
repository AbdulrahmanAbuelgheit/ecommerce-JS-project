"use strict";

const customers = JSON.parse(localStorage.getItem("customers")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];
const $tableBody = $("table tbody");
let nextCustomerId = +localStorage.getItem("nextCustomerId") || 1;

const sellers = JSON.parse(localStorage.getItem("sellers")) || [];
const allUsers = [...customers, ...sellers];

const showError = (message, target = "#error-message") => {
  $(target).removeClass("d-none").text(message).fadeIn().delay(5000).fadeOut();
};

const isValidUsername = (username) =>
  /^[a-zA-Z][a-zA-Z0-9._-]{2,19}$/.test(username);

const isValidEmail = (email) => {
  return /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z-.]+$/.test(email);
};

$(function () {
  const currentUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || {};

  if (!currentUser || currentUser.role !== "admin") {
    window.location.href = "../login.html";
    return;
  }

  document.getElementById("username").innerText = currentUser.username;
  if (currentUser) {
    $("#logout-item").removeClass("d-none");
  } else {
    $("#profile-item, #logout-button").addClass("d-none");
  }

  $("#logout-button").click(function () {
    sessionStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "login.html";
  });

  function showNotification(message) {
    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notification-text");

    notificationText.textContent = message;

    notification.style.display = "flex";

    notification.classList.remove("fade-out");
    setTimeout(() => {
      notification.classList.add("fade-out");
    }, 3000);
  }

  const renderCustomers = (data = customers) => {
    $tableBody.empty();

    data.forEach((customer) => {
      const customerOrders = orders
        .filter((order) => order.user_id === customer.id)
        .sort((order1, order2) => order1.time < order2.time);

      const totalSpent = customerOrders.reduce(
        (sum, cur) => sum + cur.totalPrice,
        0
      );

      const lastOrder = customerOrders.sort((a, b) => b.time - a.time)[0];
      const lastOrderTime = lastOrder
        ? `${lastOrder.time.split("T")[0]} `
        : "No orders";

      const row = `<tr>
        <td>${customer.id}</td>
        <td>
          <img src="images/${customer.photo || "default.jpg"}" 
          style="width: 30px; height: 30px; border-radius: 20px;" />
          <a href='ecommerce-customer-details.html?id=${customer.id}'>${
        customer.username
      }</a>
        </td>
        <td>${customer.email}</td>
        <td>${customerOrders.length}</td>
        <td>${totalSpent}</td>
        <td>${customer.address || "-"}</td>
        <td>${lastOrderTime}</td>
        <td>
        <a href="#" 
           class="update-customer" 
           data-id="${customer.id}" 
           data-bs-toggle="modal"
           data-bs-target="#updateCustomerModal">
          <i class="fa-solid fa-pen-to-square"></i>
        </a>
        <a href="#" class="delete-customer" data-id="${customer.id}">
          <i class="fa fa-trash"></i>
        </a>
      </td>
      </tr>`;
      $tableBody.append(row);
    });
  };

  const addCustomer = (customer) => {
    customers.push(customer);
    localStorage.setItem("customers", JSON.stringify(customers));
    renderCustomers();
    showNotification(`New customer is successfully added`);
  };

  const deleteCustomer = (id) => {
    const index = customers.findIndex((customer) => customer.id === id);
    if (index !== -1) {
      customers.splice(index, 1);
      localStorage.setItem("customers", JSON.stringify(customers));

      const updatedOrders = orders.filter((order) => order.user_id !== id);
      orders.length = 0;
      orders.push(...updatedOrders);
      localStorage.setItem("orders", JSON.stringify(orders));

      renderCustomers();
      showNotification(`Customer with id: ${id} is successfully deleted`);
    }
  };

  $tableBody.on("click", ".delete-customer", function (e) {
    e.preventDefault();
    const id = parseInt($(this).data("id"), 10);
    if (confirm("Are you sure you want to delete this customer?")) {
      deleteCustomer(id);
    }
  });

  $(document).on("click", ".update-customer", function (e) {
    e.preventDefault();

    const customerId = $(this).data("id");

    const customer = customers.find((cust) => cust.id === customerId);

    if (customer) {
      $("#updateCustomerUsername").val(customer.username);
      $("#updateCustomerEmail").val(customer.email);
      $("#updateCustomerLocation").val(customer.address || "");
    }

    $("#updateCustomerForm").data("id", customerId);
  });

  $("#updateCustomerForm").submit(function (e) {
    e.preventDefault();

    const customerId = $(this).data("id");

    const username = $("#updateCustomerUsername").val().trim().toLowerCase();
    const email = $("#updateCustomerEmail").val().trim().toLowerCase();

    const userExists = allUsers.some(
      (user) =>
        (user.username === username || user.email === email) &&
        user.id !== customerId
    );

    if (userExists) {
      showError(
        "Username or email already registered.",
        "#update-error-message"
      );
      return;
    }

    if (!isValidUsername(username)) {
      showError(
        "Username can only contain letters, numbers, dots (.), underscores (_), hyphens (-) and less that 20 characters",
        "#update-error-message"
      );
      return;
    }

    if (!isValidEmail(email)) {
      showError("Invalid email.", "#update-error-message");
      return;
    }

    const updatedCustomer = {
      username,
      email,
      address: $("#updateCustomerLocation").val().trim(),
    };

    const customerIndex = customers.findIndex((cust) => cust.id === customerId);
    if (customerIndex !== -1) {
      customers[customerIndex] = {
        ...customers[customerIndex],
        ...updatedCustomer,
      };
    }

    localStorage.setItem("customers", JSON.stringify(customers));

    renderCustomers();
    showNotification(`Customer with id: ${customerId} is successfully updated`);

    $("#updateCustomerModal").modal("hide");
  });

  $("#addCustomerForm").on("submit", function (e) {
    e.preventDefault();

    const username = $("#customerUsername").val().trim().toLowerCase();
    const email = $("#customerEmail").val().trim().toLowerCase();
    const password = $("#customerPassword").val().trim();
    const location = $("#customerLocation").val().trim();

    if (!username || !email || !password) {
      showError("All fields are required.", "#add-error-message");
      return;
    }

    if (!isValidUsername(username)) {
      showError(
        "Username can only contain letters, numbers, dots (.), underscores (_), hyphens (-) and less that 20 characters",
        "#add-error-message"
      );
      return;
    }

    if (!isValidEmail(email)) {
      showError("Invalid email.", "#add-error-message");
      return;
    }

    if (password.length < 6) {
      showError(
        "Password must be at least 6 characters.",
        "#add-error-message"
      );
      return;
    }

    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      showError(
        "Password must include uppercase, lowercase, number, and special character.",
        "#add-error-message"
      );
      return;
    }

    const userExists = allUsers.some(
      (user) => user.username === username || user.email === email
    );

    if (userExists) {
      showError("Username or email already registered.", "#add-error-message");
      return;
    }

    const salt = CryptoJS.lib.WordArray.random(128 / 8).toString();
    const hashedPassword = CryptoJS.SHA256(password + salt).toString();

    const newCustomer = {
      id: nextCustomerId,
      username,
      email,
      password: hashedPassword,
      salt,
      address: location,
      role: "customer",
      photo: "default.jpg",
    };

    nextCustomerId++;
    localStorage.setItem("nextCustomerId", nextCustomerId);

    addCustomer(newCustomer);

    this.reset();
    $("#addCustomerModal").modal("hide");
  });

  $("#customerSearch").on("input", function () {
    const inputData = $("#customerSearch").val();
    const regex = new RegExp(inputData, "i");

    const filteredData = customers.filter(
      (customer) =>
        regex.test(customer.username) ||
        regex.test(customer.address) ||
        regex.test(customer.email)
    );

    if (filteredData.length > 0) renderCustomers(filteredData);
    else {
      $tableBody.empty();
      $tableBody.append(
        "<tr><td colspan='7' class='text-center'>No records found.</td></tr>"
      );
    }
  });

  renderCustomers();
});
