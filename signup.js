("use strict");

// admin creation

const admin = {
  id: 1,
  username: "Admin",
  email: "admin@furni.com",
  salt: "1d814ba26436fbf4670ac3789fcfa3aa",
  password: "12947ee9442cf12d981cde091ee151aa56f38a4cc070bb4ea613d9c91821a813",
  role: "admin",
  photo: "default.jpg",
};

localStorage.setItem("admin", JSON.stringify(admin));

let nextCustomerId = +JSON.parse(localStorage.getItem("nextCustomerId")) || 1;
let nextSellerId = +JSON.parse(localStorage.getItem("nextSellerId")) || 1;

$("#username").focus();

$("#role").change(function () {
  const role = $(this).val();
  if (role === "seller") {
    $("#sellerFields").removeClass("d-none");
    $("#storeName, #storeAddress").prop("required", true);
  } else {
    $("#sellerFields").addClass("d-none");
    $("#storeName, #storeAddress").prop("required", false);
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
    sessionStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "login.html";
  });

  const isValidUsername = (username) =>
    /^[a-zA-Z][a-zA-Z0-9._-]{2,19}$/.test(username);

  const isValidEmail = (email) =>
    /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z-.]+$/.test(email);

  $("#signupForm").submit(function (e) {
    e.preventDefault();

    const username = $("#username").val().trim().toLowerCase();
    const email = $("#email").val().trim().toLowerCase();
    const password = $("#password").val().trim();
    const confirmPassword = $("#confirmPassword").val().trim();
    const role = $("#role").val();

    const storeName = $("#storeName").val().trim();
    const storeAddress = $("#storeAddress").val().trim();

    if (!username || !email || !password || !confirmPassword || !role) {
      showError("All fields are required.");
      return;
    }

    if (!isValidUsername(username)) {
      showError(
        "Username can only contain letters, numbers, dots (.), underscores (_), hyphens (-) and less that 20 characters"
      );
      return;
    }

    // email validation
    if (!isValidEmail(email)) {
      showError("Invalid email.");
      return;
    }

    // Password validation
    if (password !== confirmPassword) {
      showError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      showError("Password must be at least 6 characters.");
      return;
    }

    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      showError(
        "Password must include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (role === "seller") {
      if (!storeName || !storeAddress) {
        showError("Please fill out all seller-specific fields.");
        return;
      }
    }

    // role validation
    if (role !== "customer" && role !== "seller") {
      showError("Invalid role selected!");
      return;
    }

    const customers = JSON.parse(localStorage.getItem("customers")) || [];
    const sellers = JSON.parse(localStorage.getItem("sellers")) || [];

    const allUsers = [...customers, ...sellers];

    const userExists = allUsers.some(
      (user) => user.username === username || user.email === email
    );

    if (userExists) {
      showError("Username or email already registered.");
      return;
    }

    $("#submit-btn").prop("disabled", true).text("Signing up...");

    const salt = CryptoJS.lib.WordArray.random(128 / 8).toString();
    const hashedPassword = CryptoJS.SHA256(password + salt).toString();

    const newUser = {
      id: role === "customer" ? nextCustomerId : nextSellerId,
      username,
      email,
      password: hashedPassword,
      salt,
      role,
      ...(role === "seller" && { storeName, storeAddress }),
      photo: "default.jpg",
    };

    if (role === "customer") {
      customers.push(newUser);
      nextCustomerId++;

      localStorage.setItem("customers", JSON.stringify(customers));
      localStorage.setItem("nextCustomerId", nextCustomerId);
    } else if (role === "seller") {
      sellers.push(newUser);
      nextSellerId++;

      localStorage.setItem("sellers", JSON.stringify(sellers));
      localStorage.setItem("nextSellerId", nextSellerId);
    }

    sessionStorage.setItem("loggedInUser", JSON.stringify(newUser));

    $("#submit-button").prop("disabled", false).text("Sign Up");

    const dashboard = {
      customer: "./customer/html/customer-dashboard.html",
      seller: "./seller dashboard/index2.html",
    };

    window.location.href = dashboard[newUser.role];
  }); // end of submit form
});

const showError = (message) => {
  $("#error-message")
    .removeClass("d-none")
    .text(message)
    .fadeIn()
    .delay(5000)
    .fadeOut();
};
