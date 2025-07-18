let cart = JSON.parse(localStorage.getItem("cart"));
const container = document.getElementById("cart");
// Highlight active page
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

if (cart.length === 0) {
  container.innerHTML = "<p>Your cart is empty.</p>";
} else {
  let total = 0;

  (cart || []).forEach(product => {
    console.log(product)
    const subtotal = product.price * product.quantity;
    total += subtotal;

    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
      <p>Quantity: ${product.quantity}</p>
      <p>Subtotal: $${subtotal.toFixed(2)}</p>
    `;
    container.appendChild(div);
  });

const totalSection = document.createElement("div");
totalSection.className = "total-section";

let totalSummaryHTML = `<h2>Summary</h2><div class="summary-items">`;

cart.forEach(product => {
  const subtotal = product.price * product.quantity;
  totalSummaryHTML += `
    <div class="summary-row">
      <span>${product.name} (${product.quantity} × $${product.price.toFixed(2)})</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
  `;
});

totalSummaryHTML += `</div><hr>
  <div class="summary-total">
    <strong>Total:</strong> <span>$${total.toFixed(2)}</span>
  </div>`;

totalSection.innerHTML = totalSummaryHTML;
container.after(totalSection);  // Places it after the product grid

}

 function submitPayment(event) {
    if(!localStorage.getItem("cart")){
        alert("there are no products")
        return
    }
    
    // setTimeout(() => {
    //     localStorage.removeItem("cart"); 
    //     location.href = "/success.html"
    //      console.log(event)

    // }, 2000);
   
    event.preventDefault();
        localStorage.removeItem("cart"); 
        location.href = "./success.html"
  
    
  }