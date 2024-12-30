("use strict");

// admin creation

const admin = {
  id: 1,
  username: "Admin",
  email: "admin@furni.com",
  password: "Test@123",
  salt: "",
  role: "admin",
  photo: "default.jpg",
};

localStorage.setItem("admin", JSON.stringify(admin));

$("#username").focus();

$("#role").change(function () {
  const role = $(this).val();
  if (role === "Seller") {
    $("#sellerFields").removeClass("d-none");
    $("#storeName, #storeAddress, #storeDescription").prop("required", true);
  } else {
    $("#sellerFields").addClass("d-none");
    $("#storeName, #storeAddress, #storeDescription").prop("required", false);
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

  $("#signupForm").submit(function (e) {
    e.preventDefault();

    const username = $("#username").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();
    const confirmPassword = $("#confirmPassword").val().trim();
    const role = $("#role").val();

    const storeName = $("#storeName").val().trim();
    const storeAddress = $("#storeAddress").val().trim();

    if (!username || !email || !password || !confirmPassword || !role) {
      showError("All fields are required.");
      return;
    }

    // email validation
    const emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z-.]+$/;
    if (!emailPattern.test(email)) {
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

    if (role === "Seller") {
      if (!storeName || !storeAddress || !storeDescription) {
        showError("Please fill out all seller-specific fields.");
        return;
      }
    }

    // role validation
    if (role !== "Customer" && role !== "Seller") {
      showError("Invalid role selected!");
      return;
    }

    const customers = JSON.parse(localStorage.getItem("customers")) || [];
    const sellers = JSON.parse(localStorage.getItem("sellers")) || [];

    const userExists = (role === "Customer" ? customers : sellers).some(
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
      id: (role === "Customer" ? customers : sellers).length + 1,
      username,
      email,
      password: hashedPassword,
      salt,
      role,
      ...(role === "Seller" && { storeName, storeAddress }),
      photo: "default.jpg",
    };

    if (role === "Customer") {
      customers.push(newUser);
      localStorage.setItem("customers", JSON.stringify(customers));
    } else if (role === "Seller") {
      sellers.push(newUser);
      localStorage.setItem("sellers", JSON.stringify(sellers));
    }

    sessionStorage.setItem("loggedInUser", JSON.stringify(newUser));

    $("#submit-button").prop("disabled", false).text("Sign Up");

    const dashboard = {
      Customer: "customer-dashboard.html",
      Seller: "seller-dashboard.html",
      Admin: "admin-dashboard.html",
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
