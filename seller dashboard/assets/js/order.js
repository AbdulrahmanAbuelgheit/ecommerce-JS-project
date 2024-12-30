window.addEventListener("load", function () {
  const users = JSON.parse(localStorage.getItem("customers"));
  const orders = JSON.parse(localStorage.getItem("orders"));
  let cuurentseller = JSON.parse(sessionStorage.getItem("loggedInUser")) || {};
  document.getElementById("username").innerText = cuurentseller.username;

  console.log(cuurentseller);

  if (!cuurentseller || cuurentseller.role !== "seller") {
    window.location.href = "../../customer/html/index.html";
    return;
  }

  let sellerorders = orders.filter((order) =>
    order.products.find((product) => product.seller_id == cuurentseller.id)
  );

  showorders(sellerorders);
  function showorders(sellerorders) {
    document.querySelector("#ordertbody").innerHTML = "";
    for (let i = 0; i < sellerorders.length; i++) {
      let orderprice = 0;
      for (let j = 0; j < sellerorders[i].products.length; j++) {
        if (cuurentseller.id == sellerorders[i].products[j].seller_id) {
          orderprice +=
            sellerorders[i].products[j].price *
            sellerorders[i].products[j].quantity;
        }
      }
      let customer;
      for (let j = 0; j < users.length; j++) {
        if (sellerorders[i].user_id == users[j].id) {
          customer = users[j].username;
        }
      }

      const tr = document.createElement("tr");
      tr.innerHTML = `      <td>
                        <div class="">
                          <h6 class="mb-0"><a id="${
                            orders[i].order_id
                          }" href="ecommerce-order-details.html?order_id=${
        sellerorders[i].order_id
      }">${sellerorders[i].order_id}</a></h6>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex align-items-center flex-row gap-3">
                          <div class="">
                            <img src= width="35" alt="">
                          </div>
                          <div class="">
                            <h6 class="mb-0">${customer}</h6>
                            <p class="mb-0"></p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="card-lable  text-success >
                          <p class="text-success mb-0 fs-100">${orderprice}</p>
                        </div>
                      </td>
                      <td>
                        <h5 class="mb-0">${sellerorders[i].status}</h5>
                      </td>
                      <td>
                        <h5 class="mb-0">${
                          sellerorders[i].time.split("T")[0]
                        } ${sellerorders[i].time.split("T")[1].slice(1, 5)}</h5>
                      </td>
                      <td>
                      <div class="dropdown">
                        <button class="btn btn-sm btn-filter dropdown-toggle dropdown-toggle-nocaret"
                          type="button" data-bs-toggle="dropdown">
                          <i class="bi bi-three-dots"></i>
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" id="${
                            sellerorders[i].id
                          }" href="ecommerce-order-details.html?order_id=${
        sellerorders[i].order_id
      }">Show Order</a></li>
                        
                        </ul>
                      </div>
                    </td>
    `;
      document.querySelector("#ordertbody").append(tr);
    }
  }

  let search = document.getElementById("searchOrder");
  search.addEventListener("input", function () {
    let searchedid = search.value.trim();
    let searchedOrders = sellerorders.filter((order) =>
      order.order_id.toString().includes(searchedid)
    );
    showorders(searchedOrders);
  });
  cancelbtn = this.document.getElementsByClassName("cancel");

  for (let i = 0; i < cancelbtn.length; i++) {
    cancelbtn[i].addEventListener("click", function (e) {
      for (let i = 0; i < orders.length; i++) {
        if (
          orders[i].order_id == e.target.id &&
          orders[i].status == "pending"
        ) {
          let products = orders[i].products.filter(
            (product) => product.seller_id !== cuurentseller.id
          );
          if (products.length == 0) {
            let ordersafter = orders[i].filter(
              (order) => order.order_id !== orders[i].order_id
            );
            localStorage.setItem("orders", JSON.stringify(ordersafter));
          } else {
            orders[i].products = products;
            localStorage.setItem("orders", JSON.stringify(orders));
          }
        }
      }
    });
  }
});