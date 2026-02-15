class Product {
  constructor({ id, name, price }) {
    if (!id) throw new Error("O produto deve possuir um id");
    if (!name) throw new Error("O produto deve possuir um nome");
    if (price < 0) throw new Error("O preço do produto não pode ser negativo");

    this.id = id;
    this.name = name;
    this.price = price;
  }
}

module.exports = Product;
