document.addEventListener('DOMContentLoaded', function () {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const selectedProductTitle = localStorage.getItem('selectedProduct');
    const productDetails = products.find(product => product.title === selectedProductTitle);

    if (productDetails) {
        document.getElementById('product-details').innerHTML = `
            <div class="col-md-6">
                <img src="${productDetails.image}" alt="${productDetails.title}" class="product-details-image">
            </div>
            <div class="col-md-6">
                <h1 class="product-details-title">${productDetails.title}</h1>
                <p class="product-details-price">${'$' + productDetails.price}</p>
                <p class="product-details-description">
                    ${productDetails.description}
                </p>
                <p>Available Stock: ${productDetails.count}</p>
                <p>Color: ${productDetails.color}</p>
            </div>
        `;
    } else {
        document.getElementById('product-details').innerHTML = `
            <p>Product details not found.</p>
        `;
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
      console.log(1);
      sessionStorage.removeItem("loggedInUser");
      console.log(2);
      alert("You have been logged out.");
      window.location.href = "login.html";
    });
});