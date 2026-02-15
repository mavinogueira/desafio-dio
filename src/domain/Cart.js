const CartItem = require("./CartItem");

class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product, quantity = 1) {
    const existingItem = this.items.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.increase(quantity);
    } else {
      const newItem = new CartItem(product, quantity);
      this.items.push(newItem);
    }
  }

  removeProduct(productId) {
    this.items = this.items.filter(
      item => item.product.id !== productId
    );
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.getTotal(),
      0
    );
  }

  getItems() {
    return this.items;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = Cart;
