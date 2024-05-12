// cart.js

// Function to get cart items from localStorage
function getCartItems() {
  const cartItemsString = localStorage.getItem("cartItems");
  return cartItemsString ? JSON.parse(cartItemsString) : [];
}

// Function to save cart items to localStorage
function saveCartItems(cartItems) {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Function to render cart items on the cart page
function renderCartItems() {
  const cartItems = getCartItems();
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  cartItems.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.textContent = `${item.name}: $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(cartItemElement);
  });
}

// Function to handle adding product to cart
function addToCart(name, price) {
  const cartItems = getCartItems();
  cartItems.push({ name, price });
  saveCartItems(cartItems);
}

// Event listener for "add to cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-name");
    const productPrice = parseFloat(button.getAttribute("data-price"));
    addToCart(productName, productPrice);
  });
});

// On cart page load, render cart items
if (document.getElementById("cart-items")) {
  renderCartItems();
}
