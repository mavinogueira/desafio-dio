const Cart = require("../domain/Cart");
const Product = require("../domain/Product");

class CartService {
  constructor() {
    this.cart = new Cart();
  }

  createProduct(id, name, price) {
    return new Product({ id, name, price });
  }

  addProductToCart(id, name, price, quantity = 1) {
    const product = this.createProduct(id, name, price);
    this.cart.addProduct(product, quantity);
  }

  removeProductFromCart(productId) {
    this.cart.removeProduct(productId);
  }

  listCartItems() {
    if (this.cart.isEmpty()) {
      return "O carrinho está vazio.";
    }

    return this.cart.getItems().map(item => {
      return `
Produto: ${item.product.name}
Quantidade: ${item.quantity}
Preço unitário: R$ ${item.product.price.toFixed(2)}
Subtotal: R$ ${item.getTotal().toFixed(2)}
-----------------------------`;
    }).join("\n");
  }

  getCartTotal() {
    return this.cart.getTotal().toFixed(2);
  }
}

module.exports = CartService;
