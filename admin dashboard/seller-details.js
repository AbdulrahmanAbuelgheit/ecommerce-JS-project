"use strict";

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
  const urlParams = new URLSearchParams(window.location.search);
  const sellerId = +urlParams.get("id");
  const sellers = JSON.parse(localStorage.getItem("sellers")) || [];
  const seller = sellers.find((s) => s.id == sellerId);

  if (seller) {
    $("#sellerName").text(seller.username);
    $("#sellerEmail").text(`Email: ${seller.email}`);
    $("#phoneNumber").text(`Phone Number: ${seller.phone || "-"} `);
    $("#sellerStoreName").text(`Store Name: ${seller.storeName || "-"}`);
    $("#sellerStoreAddress").text(
      `Store Address: ${seller.storeAddress || "-"}`
    );
    $("#sellerPhoto").attr(
      "src",
      `../seller dashboard/images/${seller.photo}` || "images/default.jpg"
    );

    const products = JSON.parse(localStorage.getItem("products")) || [];
    const sellerProducts = products.filter(
      (product) => product.sellerid === seller.id
    );
    const productsList = $("#productsList");
    if (sellerProducts.length !== 0) productsList.empty();
    sellerProducts.forEach((product) => {
      const row = `
        <tr>
          <td class='text-center'>${product.id}</td>
          <td class='text-center'>
          <img src="../seller dashboard/images/${product.image}" 
          style="width: 30px; height: 30px; border-radius: 20px;" />
      </a>
        </td>
          <td class='text-center'>${product.title}</td>
          <td class='text-center'>${product.category}</td>
          <td class='text-center'>$${product.price}</td>
          <td class='text-center'> $${product.costPrice}</td>
          <td class='text-center'>${product.count}</td>
          <td class='text-center'>${product.sold}</td>
        </tr>
      `;
      productsList.append(row);
    });

    const sentEmails = JSON.parse(localStorage.getItem("sentEmails")) || [];
    const userEmails = sentEmails.filter((s) => s.email === seller.email);
    const sentEmailsList = $("#sentEmailsList");
    if (userEmails.length !== 0) sentEmailsList.empty();
    userEmails.forEach((email) => {
      const row = `
        <tr>
          <td>${email.subject}</td>
          <td>${email.message}</td>
          <td>${new Date(email.date).toLocaleDateString()}</td>
        </tr>
      `;
      sentEmailsList.append(row);
    });
  }

  $("#sendEmailForm").on("submit", (e) => {
    e.preventDefault();
    const subject = $("#emailSubject").val().trim();
    const message = $("#emailBody").val().trim();
    const toEmail = seller.email;

    const templateParams = {
      to_email: seller.email,
      subject,
      message,
    };

    emailjs.send("service_0u031x9", "template_yoxds3b", templateParams).then(
      function (response) {
        const sentEmails = JSON.parse(localStorage.getItem("sentEmails")) || [];
        sentEmails.push({
          subject,
          message,
          email: toEmail,
          date: new Date().toISOString(),
        });
        localStorage.setItem("sentEmails", JSON.stringify(sentEmails));
        alert("Email sent successfully!");
      },
      function (error) {
        alert("Error sending email!");
      }
    );
  });
});
