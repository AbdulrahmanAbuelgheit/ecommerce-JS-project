let cuurentseller=JSON.parse(sessionStorage.getItem("loggedInUser"));

let orders=JSON.parse(localStorage.getItem("orders"));
let sellerorders=orders.filter((order)=>order.products
.find((product)=>product.seller_id==cuurentseller.id));

let products=JSON.parse(localStorage.getItem("products"));
console.log(products);

const params = new URLSearchParams(window.location.search);
const order_id= params.get("order_id");
console.log(order_id);
console.log(sellerorders);
let order=sellerorders.find((item)=>order_id==item.order_id);
console.log(order);

let sumtotal=0;
let orderproducts=order.products.filter((item)=>item.seller_id==cuurentseller.id);
let tbody=document.getElementById("product-table-body");
for(let i=0;i<orderproducts.length;i++){
    console.log(orderproducts[i].quantity);
    console.log(orderproducts[i].price);

    let total=parseInt(orderproducts[i].quantity) * parseInt(orderproducts[i].price);
    sumtotal+=total;
    let product=products.find((product)=>product.id===orderproducts[i].product_id);
    console.log(product);
    const row = `
    <tr>
      <td>
        <div class="d-flex align-items-center gap-3">
          <div class="product-box">
            <img src="${
                product.image || "https://via.placeholder.com/70"
            }" width="70" class="rounded-3" alt="">
          </div>
          <div class="product-info">
            <a href="javascript:;" class="product-title">${product.title}</a>
            <p class="mb-0 product-category">Category : ${product.category}</p>
          </div>
        </div>
      </td>
      <td>${orderproducts[i].quantity || 1}</td>
      <td>$${orderproducts[i].price.toFixed(2)}</td>
      <td>$${total.toFixed(2)}</td>
    </tr>
  `;


  tbody.innerHTML += row;
}
document.getElementById("order-number").innerText=" order : #"+order.order_id;
document.getElementById("summary-subtotal").innerText=sumtotal;
document.getElementById("summary-total").innerText=sumtotal;
document.getElementById("payment-status").innerText=order.payment_type;
document.getElementById("completed-status").innerText=order.status;
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