const cartCreator = () => {
  class Product {
    #id;
    #name;
    #price;

    constructor(id, name, price) {
      if (typeof name !== "string" || typeof price !== "number" || price < 0) {
        console.error("Invalid input");
        return;
      }
      this.#id = id;
      this.#name = name;
      this.#price = price;
    }

    get id() {
      return this.#id;
    }

    get name() {
      return this.#name;
    }

    get price() {
      return this.#price;
    }
  }

  class ShoppingCart {
    #items = [];

    addItem(product) {
      const existingItem = this.#items.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.#items.push({ product: product, quantity: 1 });
      }
    }

    removeItem(cartItemId) {
      const itemIndex = this.#items.findIndex(
        (item) => item.product.id === cartItemId
      );
      if (itemIndex !== -1) {
        if (this.#items[itemIndex].quantity > 1) {
          this.#items[itemIndex].quantity -= 1;
        } else {
          this.#items.splice(itemIndex, 1);
        }
      }
    }

    clear() {
      this.#items = [];
    }

    get totalPrice() {
      return this.#items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    }

    get items() {
      return this.#items;
    }
  }

  const products = [
    new Product(1, "Hotdog", 50),
    new Product(2, "Nachos", 70),
    new Product(3, "Coca-Cola", 30),
    new Product(4, "Beer", 80),
    new Product(5, "Fries", 60),
  ];

  const cart = new ShoppingCart();
  const productList = document.getElementById("cart__product-list");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "cart__product-card";
    productCard.innerHTML = `
      <span>${product.name} - ${product.price} dollars</span>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    productList.append(productCard);
  });

  document.querySelectorAll(".cart__product-card button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      cart.addItem(product);
      updateCart();
    });
  });

  function updateCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cart.items.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <span>${item.product.name} - ${item.product.price} dollars (x${item.quantity})</span>
        <button data-id="${item.product.id}">Remove</button>
      `;
      cartList.append(cartItem);
    });

    document.getElementById(
      "total-price"
    ).textContent = `Total: ${cart.totalPrice} dollars`;

    document.querySelectorAll(".cart-item button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const cartItemId = parseInt(event.target.getAttribute("data-id"));
        cart.removeItem(cartItemId);
        updateCart();
      });
    });
  }

  document.getElementById("cart__clear-cart").addEventListener("click", () => {
    cart.clear();
    updateCart();
  });

  updateCart();
};

cartCreator();
