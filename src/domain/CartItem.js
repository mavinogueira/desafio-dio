class CartItem {
  constructor(product, quantity = 1) {
    if (!product) throw new Error("O item do carrinho precisa de um produto");
    if (quantity <= 0) {
      throw new Error("A quantidade deve ser maior que zero");
    }

    this.product = product;
    this.quantity = quantity;
  }

  increase(quantity = 1) {
    if (quantity <= 0) {
      throw new Error("A quantidade para adicionar deve ser positiva");
    }
    this.quantity += quantity;
  }

  decrease(quantity = 1) {
    if (quantity <= 0) {
      throw new Error("A quantidade para remover deve ser positiva");
    }

    this.quantity -= quantity;

    if (this.quantity <= 0) {
      throw new Error("A quantidade do item não pode ser zero ou negativa");
    }
  }

  getTotal() {
    return this.product.price * this.quantity;
  }
}

module.exports = CartItem;
