let cart = JSON.parse(localStorage.getItem("cart"));
const container = document.getElementById("cart");
console.log(cart)
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

  const totalElement = document.createElement("h2");
  totalElement.style.textAlign = "center";
  totalElement.innerText = `Total: $${total.toFixed(2)}`;
  container.appendChild(totalElement);
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