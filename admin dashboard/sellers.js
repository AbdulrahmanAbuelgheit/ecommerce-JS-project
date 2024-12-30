"use strict";

const sellers = JSON.parse(localStorage.getItem("sellers")) || [];
const products = JSON.parse(localStorage.getItem("products")) || [];
let nextSellerId = +localStorage.getItem("nextSellerId") || 1;
const $sellerTableBody = $(".table tbody");

const customers = JSON.parse(localStorage.getItem("customers")) || [];
const allUsers = [...customers, ...sellers];

const showError = (message, target = "#error-message") => {
  $(target).removeClass("d-none").text(message).fadeIn().delay(5000).fadeOut();
};

const isValidUsername = (username) =>
  /^[a-zA-Z][a-zA-Z0-9._-]{2,19}$/.test(username);

const isValidEmail = (email) => {
  return /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z-.]+$/.test(email);
};

const isValidPhone = (phone) => {
  return /^(010|011|012|015)[0-9]{8}$/.test(phone);
};

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

  const renderSellers = (data = sellers) => {
    $sellerTableBody.empty();

    data.forEach((seller) => {
      const row = `
        <tr>
          <td>${seller.id}</td>
          <td>
            <img src="images/${seller.photo || "default.jpg"}" 
            style="width: 30px; height: 30px; border-radius: 20px;" />
            <a href='ecommerce-seller-details.html?id=${seller.id}'>${
        seller.username
      }</a>
          </td>
          <td>${seller.email}</td>
          <td>${seller.phone || "-"}</td>
          <td>${seller.storeName || "-"}</td>
          <td>${seller.storeAddress || "-"}</td>
          <td>
          <a href="#" 
            class="update-seller" 
            data-id="${seller.id}" 
            data-bs-toggle="modal"
            data-bs-target="#updateSellerModal">
            <i class="fa-solid fa-pen-to-square"></i>
          </a>
          <a href="#" class="delete-seller" data-id="${seller.id}">
            <i class="fa fa-trash"></i>
          </a>
        </td>
        </tr>
      `;
      $sellerTableBody.append(row);
    });
  };

  const addSeller = (seller) => {
    sellers.push(seller);
    localStorage.setItem("sellers", JSON.stringify(sellers));

    renderSellers();
    showNotification(`New seller is successfully added`);
  };

  const deleteSeller = (id) => {
    const index = sellers.findIndex((seller) => seller.id === id);
    if (index !== -1) {
      sellers.splice(index, 1);
      localStorage.setItem("sellers", JSON.stringify(sellers));

      const updatedProducts = products.filter(
        (product) => product.sellerid !== id
      );
      products.length = 0;
      products.push(...updatedProducts);
      localStorage.setItem("products", JSON.stringify(products));

      renderSellers();
      showNotification(`Seller with id: ${id} is successfully deleted`);
    }
  };

  $sellerTableBody.on("click", ".delete-seller", function (e) {
    e.preventDefault();
    const id = parseInt($(this).data("id"), 10);
    if (confirm("Are you sure you want to delete this seller?")) {
      deleteSeller(id);
    }
  });

  $(document).on("click", ".update-seller", function (e) {
    e.preventDefault();

    const sellerId = $(this).data("id");

    const seller = sellers.find((s) => s.id === sellerId);

    if (seller) {
      $("#updateSellerUsername").val(seller.username);
      $("#updateSellerEmail").val(seller.email);
      $("#updateSellerPhone").val(seller.phone);
      $("#updateSellerStorename").val(seller.storeName);
      $("#updateSellerStoreAddress").val(seller.storeAddress);
    }

    $("#updateSellerForm").data("id", sellerId);
  });

  $("#updateSellerForm").submit(function (e) {
    e.preventDefault();

    const sellerId = $(this).data("id");

    const username = $("#updateSellerUsername").val().trim().toLowerCase();
    const email = $("#updateSellerEmail").val().trim().toLowerCase();

    const userExists = allUsers.some(
      (user) =>
        (user.username === username || user.email === email) &&
        user.id !== sellerId
    );
    if (userExists) {
      showError(
        "Username or email already registered.",
        "#update-error-message"
      );
      return;
    }

    const phone = $("#updateSellerPhone").val().trim();

    if (!isValidUsername(username)) {
      showError(
        "Username can only contain letters, numbers, dots (.), underscores (_), hyphens (-) and less than 20 characters",
        "#update-error-message"
      );
      return;
    }

    if (!isValidEmail(email)) {
      showError("Invalid email.", "#update-error-message");
      return;
    }

    if (!isValidPhone(phone)) {
      showError("Invalid phone.", "#update-error-message");
      return;
    }

    const updatedSeller = {
      username,
      email,
      phone,
      storeName: $("#updateSellerStorename").val().trim(),
      storeAddress: $("#updateSellerStoreAddress").val().trim(),
    };

    const sellerIndex = sellers.findIndex((seller) => seller.id === sellerId);

    if (sellerIndex !== -1) {
      sellers[sellerIndex] = {
        ...sellers[sellerIndex],
        ...updatedSeller,
      };
    }

    localStorage.setItem("sellers", JSON.stringify(sellers));

    renderSellers();
    showNotification(`Seller with id: ${sellerId} is successfully updated`);

    $("#updateSellerModal").modal("hide");
  });

  $("#addSellerForm").on("submit", function (e) {
    e.preventDefault();

    const username = $("#sellerUsername").val().trim().toLowerCase();
    const email = $("#sellerEmail").val().trim().toLowerCase().toLowerCase();
    const password = $("#password").val().trim();
    const phone = $("#sellerPhone").val().trim();
    const storeName = $("#storeName").val().trim();
    const storeAddress = $("#storeAddress").val().trim();
    const errorMessage = $("#error-message");

    if (!username || !email || !phone || !password || !storeName) {
      showError("All fields are required.", "#add-error-message");
      return;
    }

    if (!isValidUsername(username)) {
      showError(
        "Username can only contain letters, numbers, dots (.), underscores (_), hyphens (-) and less than 20 characters",
        "#add-error-message"
      );
      return;
    }

    if (!isValidEmail(email)) {
      showError("Invalid email.", "#add-error-message");
      return;
    }

    if (!isValidPhone(phone)) {
      showError("Invalid phone.", "#add-error-message");
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

    const newSeller = {
      id: nextSellerId,
      username,
      email,
      password: hashedPassword,
      salt,
      storeName,
      storeAddress,
      phone,
      photo: "default.jpg",
      role: "seller",
    };

    nextSellerId++;
    localStorage.setItem("nextSellerId", nextSellerId);

    errorMessage.addClass("d-none");

    addSeller(newSeller);

    this.reset();
    $("#addSellerForm").modal("hide");
  });

  $("#sellerSearch").on("input", function () {
    const inputData = $("#sellerSearch").val();
    const regex = new RegExp(inputData, "i");

    const filteredData = sellers.filter(
      (seller) =>
        regex.test(seller.username) ||
        regex.test(seller.storeName) ||
        regex.test(seller.storeAddress) ||
        regex.test(seller.email)
    );

    if (filteredData.length > 0) renderSellers(filteredData);
    else {
      $sellerTableBody.empty();
      $sellerTableBody.append(
        "<tr><td colspan='7' class='text-center'>No records found.</td></tr>"
      );
    }
  });

  renderSellers();
});
