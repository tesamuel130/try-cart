document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemCount = document.querySelector(".cart-icon span");
  const cartItemsList = document.querySelectorAll(".cart-items");
  const cartTotal = document.querySelectorAll(".cart-total");
  const cartIcon = document.querySelectorAll(".cart-icon");
  const sidebar = document.getElementById("sidebar");

  let cartItems = [];
  let totalAmount = 0;

  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const item = {
        name: document.querySelectorAll(".cart .cart-title")[index].textContent,
        price: parseFloat(
          document.querySelectorAll(".price")[index].textContent.slice(1)
        ),
        quantity: 1,
      };

      const existingItem = cartItems.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartItems.push(item);
      }

      totalAmount += item.price;

      updateCartUI();
    });

    function updateCartUI() {
      updateCartItemsCount(cartItems.length);
      updateCartItemList();
      updateCartTotal();
    }

    function updateCartItemsCount(count) {
      cartItemsList.textContent = count;
    }

    function updateCartItemList() {
      cartItemsList.innerHTML = "";
      cartItems.forEach((item, index) => {
        const cartItem = document.createElement("div");
      });
    }
  });
});
