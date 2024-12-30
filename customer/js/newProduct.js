$(function () {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    console.log(loggedInUser.id);
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

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addProductForm').addEventListener('submit', function (event) {
        event.preventDefault(); 

        const title = document.getElementById('productTitle').value;
        const category = document.getElementById('productCategory').value;
        const image = document.getElementById('productImage').value.toLowerCase();
        const price = document.getElementById('productPrice').value;
        const quantity = document.getElementById('productQuantity').value;
        const description = document.getElementById('productDescription').value;
        const color = document.getElementById('productColor').value;
        const imgExtensions = ['.png', '.jpg', '.jpeg']; 
        const imgValid = imgExtensions.some(e => image.endsWith(e));
        if (!imgValid) {
            const NotValidImg = document.getElementById('NotValidImg');
            NotValidImg.style.display = 'flex';
                document.getElementById('ok').addEventListener('click', function () {
                    NotValidImg.style.display = 'none';
                });
            return;
            }
        
        // const sellername = JSON.parse(localStorage.getItem('user'))?.name || 'Default Seller';
        const user = JSON.parse(localStorage.getItem('products'));
        const sellername = user?.sellername || 'Default Seller';
        const newProduct = {
            id: Date.now(),  
            category: category,
            image: image,
            title: title,
            price: `${price}`, 
            count: quantity,
            sellerid: loggedInUser.id,
            description:description,
            status:'pending',
            costPrice: `${price}`,
            sold: 0,
            discount: 0,
            color:color,
            sellername: sellername
        };

        let storedProducts = JSON.parse(localStorage.getItem('products')) || [];

        storedProducts.push(newProduct);

        localStorage.setItem('products', JSON.stringify(storedProducts));
        window.location.href = 'seller.html';
    });
    
});
