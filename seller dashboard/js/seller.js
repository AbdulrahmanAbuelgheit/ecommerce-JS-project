document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  let storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  const productSection = document.querySelector(".row");
  const currentSeller =
    JSON.parse(sessionStorage.getItem("loggedInUser")) || {};
  const sellerId = currentSeller.id;

  function displayProductsBySeller(sellerId) {
    productSection.innerHTML = "";

    storedProducts.forEach((product) => {
      if (product.sellerid === sellerId) {
        const productHTML = `
                    <div class="col-12 col-md-4 col-lg-3 mb-5 product-item" data-category="${
                      product.category
                    }" data-seller="${product.sellerid}" data-id="${
          product.id
        }">
                        <img src="${
                          product.image
                        }" class="img-fluid product-thumbnail" alt="${
          product.title
        }">
                        <h3 class="product-title">${product.title}</h3>
                        <strong class="product-price">${
                          "$" + product.price
                        }</strong>
                        <div class="product-actions">
                            <button class="icon-cross edit-icon">
                                <img src="../images/edit.svg" class="img-fluid" alt="Edit">
                            </button>
                            <button class="icon-cross delete-icon">
                                <img src="../images/delete.svg" class="img-fluid" alt="Delete">
                            </button>
                        </div>
                    </div>
                `;
        productSection.insertAdjacentHTML("beforeend", productHTML);
      }
    });

    document.querySelectorAll(".delete-icon").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation();
        const productItem = this.closest(".product-item");
        const productId = productItem.getAttribute("data-id");
        const product = storedProducts.find(
          (product) => product.id === parseInt(productId)
        );

        if (product.status === "ordered") {
          const cancleDeletePopup =
            document.getElementById("cancleDeletePopup");
          cancleDeletePopup.style.display = "flex";
          document.getElementById("ok").addEventListener("click", function () {
            cancleDeletePopup.style.display = "none";
          });
        } else {
          const confirmDeletePopup =
            document.getElementById("confirmDeletePopup");
          confirmDeletePopup.style.display = "flex";

          document
            .getElementById("confirmDelete")
            .addEventListener("click", function () {
              storedProducts = storedProducts.filter(
                (product) => product.id !== parseInt(productId)
              );
              localStorage.setItem("products", JSON.stringify(storedProducts));
              productItem.remove();
              confirmDeletePopup.style.display = "none";
            });

          document
            .getElementById("cancelDelete")
            .addEventListener("click", function () {
              confirmDeletePopup.style.display = "none";
            });
        }
      });
    });

    document.querySelectorAll(".edit-icon").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation();
        const productId = this.closest(".product-item").getAttribute("data-id");
        window.location.href = `editProduct.html?id=${productId}`;
      });
    });
  }

  displayProductsBySeller(sellerId);

  document.querySelectorAll(".product-item").forEach((item) => {
    item.addEventListener("click", function () {
      const productId = this.querySelector(".product-title").textContent;
      localStorage.setItem("selectedProduct", productId);
      window.location.href = "productDetailsSeller.html";
    });
  });
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
    console.log(1);
    sessionStorage.removeItem("loggedInUser");
    console.log(2);
    alert("You have been logged out.");
    window.location.href = "login.html";
  });
});
