let products = JSON.parse(localStorage.getItem("products")) || {};

const params = new URLSearchParams(window.location.search);
const product_id = params.get("product_id");

let product = products.find((product) => (product.id = product_id));
console.log(product);

document.getElementById("product-table-body").innerText =
  "product : #" + product.id;
function showproduct(product) {
  let tr = document.createElement("tr");

  tr.innerHTML = ` <tr>
                   
                    <td>
                      <div class="d-flex align-items-center gap-3">
                        <div class="product-box">
                          <img src="${product.image}" width="70" class="rounded-3" alt="">
                        </div>
                        <div class="product-info">
                         <p>${product.title}</p>
                        </div>
                      </div>
                    </td>
                    <td>${product.category}</td>
                    <td>
                    ${product.count}
                    </td>
                    <td>$${product.price}</td>
                    
                    <td>
                    ${product.sold}
                    </td>
                    <td>${product.color}</td>
                    <td>
                      <a href="javascript:;">${product.sellerid}</a>
                    </td>
                    <td>
                      <a href="javascript:;">${product.sellername}</a>
                    </td>
                    
                    <td>
                      <div class="dropdown">
                        <button class="btn btn-sm btn-filter dropdown-toggle dropdown-toggle-nocaret"
                          type="button" data-bs-toggle="dropdown">
                          <i class="bi bi-three-dots"></i>
                        </button>
                        <ul class="dropdown-menu">                        
                          <li class="dropdown-item deleteproduct" id="${product.id}" >delete</li>
                        </ul>
                      </div>
                    </td>
                  </tr>`;

  document.getElementById("product-table-body").appendChild(tr);
}
const sentEmails = JSON.parse(localStorage.getItem("sentEmails")) || [];


let templateParams = {
  to_email:"",
  subject:"",
  message:""
};
let sellers=JSON.parse(localStorage.getItem("sellers"))||[];
 
console.log(sellers);


function sendEmail(templateParams){
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

window.addEventListener("load", function () {
  const currentUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

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

  showproduct(product);
  let deletebtn = document.getElementsByClassName("deleteproduct");
  for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", function (e) {
      let productsafter = products.filter(
        (product) => product.id != e.target.id
      );
      console.log(productsafter);
      localStorage.setItem("products", JSON.stringify(productsafter));
      
      const deletingProdSeller = sellers.find((seller) => seller.id == product.sellerid);
      if (!deletingProdSeller) return; 

      templateParams.to_email = deletingProdSeller.email;
      templateParams.subject = `Delete Product`;
      templateParams.message = `The product with ID: ${product.id} and with Title: ${product.title} deleted from Furn`;
      sendEmail(templateParams);

      window.location.href = "ecommerce-products.html";
    });
  }
});
