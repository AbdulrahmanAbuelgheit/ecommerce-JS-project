const seller = [
  {
    id: 101,
    username: "Ahmed",
    email: "seller1@furni.com",
    password: "Test@123",
    salt: "",
    role: "seller",
    photo: "default.jpg",
  },
  {
    id: 102,
    username: "Ahmed",
    email: "seller1@furni.com",
    password: "Test@123",
    salt: "",
    role: "seller",
    photo: "default.jpg",
  },
  {
    id: 103,
    username: "Ahmed",
    email: "seller1@furni.com",
    password: "Test@123",
    salt: "",
    role: "seller",
    photo: "default.jpg",
  },
];

localStorage.setItem("seller", JSON.stringify(seller));

function showachieve() {}
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

  if (!loggedInUser || loggedInUser.role !== "seller") {
    window.location.href = "customer/html/index.html";
    return;
  }
});
