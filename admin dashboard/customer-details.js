"use strict";
$(function () {
  const currentUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || {};

  if (!currentUser || currentUser.role !== "admin") {
    window.location.href = "../login.html";
    return;
  }
  console.log(currentUser.username);
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
  const customerId = +urlParams.get("id");
  const customers = JSON.parse(localStorage.getItem("customers")) || [];
  const sellers = JSON.parse(localStorage.getItem("sellers")) || [];
  const sentEmails = JSON.parse(localStorage.getItem("sentEmails")) || [];
  const customer = customers.find((c) => c.id == customerId);
  let nextSellerId = JSON.parse(localStorage.getItem("nextSellerId")) || 1;

  if (!customer) {
    alert("Customer not found.");
    window.location.href = "ecommerce-customers.html";
    return;
  }

  if (customer) {
    $("#customerName").text(customer.username);
    $("#customerEmail").text(`Email: ${customer.email}`);
    $("#phoneNumber").text(`Phone Number: ${customer.phoneNumber || "-"} `);
    $("#customerAddress").text(`Address: ${customer.address || "-"}`);
    $("#customerPhoto").attr(
      "src",
      `images/${customer.photo}` || "images/default.jpg"
    );

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const customerOrders = orders
      .filter((order) => order.user_id === customer.id)
      .sort((order1, order2) => order1.time < order2.time);

    const ordersList = $("#ordersList");
    if (customerOrders.length !== 0) ordersList.empty();

    customerOrders.forEach((order) => {
      const row = `
        <tr>
          <td>${order.order_id}</td>
          <td>${new Date(order.time.split("T")[0]).toLocaleDateString()}</td>
          <td>${order.status}</td>
          <td>$${order.totalPrice}</td>
        </tr>
      `;
      ordersList.append(row);
    });

    const sentEmails = JSON.parse(localStorage.getItem("sentEmails")) || [];
    const userEmails = sentEmails.filter((c) => c.email === customer.email);
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

  const isAlreadySeller = sellers.find((s) => s.email === customer.email);

  if (isAlreadySeller) {
    $("#convertToSeller").prop("disabled", true).text("Already a Seller");
    return;
  }

  $("#convertToSeller").click(function () {
    if (
      confirm("Are you sure you want to convert this customer to a seller?")
    ) {
      const updatedCustomers = customers.filter(
        (user) => user.id !== customerId
      );

      const newSeller = {
        ...customer,
        id: nextSellerId++,
        role: "seller",
        storeName: "",
        storeAddress: "",
      };

      sellers.push(newSeller);

      localStorage.setItem("customers", JSON.stringify(updatedCustomers));
      localStorage.setItem("sellers", JSON.stringify(sellers));
      localStorage.setItem("nextSellerId", JSON.stringify(nextSellerId));

      $("#updateMessage")
        .text("Customer successfully converted to Seller!")
        .removeClass("d-none")
        .fadeIn(500)
        .fadeOut(3000);
      $("#convertToSeller").prop("disabled", true).text("Converted to Seller");
      window.location.href = "ecommerce-sellers.html";

      const templateParams = {
        to_email: customer.email,
        subject: "Role changed",
        message: "Dear customer, Your role has been changed to a seller. :)",
      };

      sendEmail(templateParams);
    }
  });

  $("#sendEmailForm").on("submit", (e) => {
    e.preventDefault();
    const subject = $("#emailSubject").val().trim();
    const message = $("#emailBody").val().trim();
    const toEmail = customer.email;

    const templateParams = {
      to_email: customer.email,
      subject,
      message,
    };

    sendEmail(templateParams);
  });

  const sendEmail = (templateParams) => {
    emailjs.send("service_0u031x9", "template_yoxds3b", templateParams).then(
      function (response) {
        sentEmails.push({
          subject: templateParams.subject,
          message: templateParams.message,
          email: templateParams.to_email,
          date: new Date().toISOString(),
        });
        localStorage.setItem("sentEmails", JSON.stringify(sentEmails));
        alert("Email sent successfully!");
      },
      function (error) {
        alert("Error sending email!");
      }
    );
  };
});
