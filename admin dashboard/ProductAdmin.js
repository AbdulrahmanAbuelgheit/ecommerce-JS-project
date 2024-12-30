let products=JSON.parse(localStorage.getItem("products"))||[];
console.log(products);

function showproducts(products){
document.getElementById("productsTbody").innerHTML="";

for(let i=0;i<products.length;i++){

let tr=document.createElement("tr");
tr.innerHTML=`    <tr>
                    <td>${products[i].id}</td>
                    <td>
                      <div class="d-flex align-items-center gap-3">
                        <div class="product-box">
                          <img src="${products[i].image}" width="70" class="rounded-3" alt="">
                        </div>
                        <div class="product-info">
                         <p>${products[i].title}</p>
                        </div>
                      </div>
                    </td>
                    <td>${products[i].category}</td>
                    <td>$${products[i].price}</td>
                    <td>
                    ${products[i].count}
                    </td>
                    <td>
                    ${products[i].sold}
                    </td>
                    <td>
                      <a href="javascript:;">${products[i].sellerid}</a>
                    </td>
                    <td>
                      <a href="javascript:;">${products[i].sellername}</a>
                    </td>
                    
                    <td>
                      <div class="dropdown">
                        <button class="btn btn-sm btn-filter dropdown-toggle dropdown-toggle-nocaret"
                          type="button" data-bs-toggle="dropdown">
                          <i class="bi bi-three-dots"></i>
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="ecommerce-product-details.html?product_id=${products[i].id}">show product</a></li>
                        
                          <li class="dropdown-item deleteproduct" id="${products[i].id}" >delete</li>
                        </ul>
                      </div>
                    </td>
                  </tr>`

                  document.getElementById("productsTbody").appendChild(tr);

}

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

  showproducts(products);


  document.getElementById("productsTbody").addEventListener("click", function (e) {
    
    if (e.target && e.target.classList.contains("deleteproduct")) {
      const productId = e.target.id; 

      
      const productf = products.find((product) => product.id == productId);
      if (!productf) return; 

      console.log(productf);
      console.log(e.target.id);

     
      const deletingProdSeller = sellers.find((seller) => seller.id == productf.sellerid);
      if (!deletingProdSeller) return; 

      console.log(deletingProdSeller);

      
      templateParams.to_email = deletingProdSeller.email;
      templateParams.subject = `Delete Product`;
      templateParams.message = `The product with ID: ${productf.id} and with Title: ${productf.title} deleted from Furn`;
      sendEmail(templateParams);

      
      products = products.filter((product) => product.id != productId);
      localStorage.setItem("products", JSON.stringify(products)); 
      alert(`product with ID : ${productf.id} has deleted`);

      showproducts(products); 
    }
  });


  const search = document.getElementById("searchproduct");
  search.addEventListener("input", function () {
    const searchedname = search.value.trim();
    const searchedproducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchedname.toLowerCase())
    );
    showproducts(searchedproducts); 
  });
});





