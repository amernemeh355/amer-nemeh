
function addToCart(productName, price, imageSrc) {
  
    var newItem = document.createElement("div");
    newItem.classList.add("cart-item");

    
    var productImage = document.createElement("img");
    productImage.src = imageSrc;
    productImage.alt = productName; 
    newItem.appendChild(productImage);

    
    var productDetails = document.createElement("p");
    productDetails.textContent = productName + " - " + price + "$";
    newItem.appendChild(productDetails);


    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () { removeItem(newItem, price); };
    newItem.appendChild(removeButton);


    document.getElementById("shoppingList").appendChild(newItem);


    updateTotalPrice(price);
}


function removeItem(item, price) {
    document.getElementById("shoppingList").removeChild(item);

   
    updateTotalPrice(-price);
}

function removeAllItems() {
    var shoppingList = document.getElementById("shoppingList");
    shoppingList.innerHTML = "";

 
    updateTotalPrice(0);
}


function updateTotalPrice(price) {

    var totalPriceElement = document.getElementById("totalPrice");
    var currentTotalPrice = parseFloat(totalPriceElement.textContent);

   
    var newTotalPrice = currentTotalPrice + parseFloat(price);
    totalPriceElement.textContent = newTotalPrice.toFixed(2);
}


function toggleCart() {
    var cart = document.querySelector(".shopingCar");
    cart.style.right = (cart.style.right === "-270px" || cart.style.right === "") ? "0" : "-270px";
}


function checkout() {
    var totalAmount = document.getElementById("totalPrice").textContent;
    alert("Thank you for your purchase! Total amount: $" + totalAmount);
    removeAllItems();
}
function showModal(totalAmount) {
    var modal = document.getElementById("checkoutModal");
    var modalTotalPrice = document.getElementById("modalTotalPrice");

   
    modalTotalPrice.textContent = totalAmount;

    modal.style.display = "block";
  }
  function closeModal() {
    var modal = document.getElementById("checkoutModal");
    modal.style.display = "none";
    removeAllItems();
    
  }

  
  document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });

