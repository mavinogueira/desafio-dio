const readline = require("readline");
const CartService = require("../service/CartService");

function start() {
  const cartService = new CartService();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function showMenu() {
    console.log(`
========= MENU =========
1 - Adicionar produto
2 - Remover produto
3 - Listar carrinho
4 - Ver total
0 - Sair
========================
    `);

    rl.question("Escolha uma opção: ", handleMenu);
  }

  function handleMenu(option) {
    switch (option) {
      case "1":
        addProductFlow();
        break;
      case "2":
        removeProductFlow();
        break;
      case "3":
        console.log(cartService.listCartItems());
        showMenu();
        break;
      case "4":
        console.log(`Total do carrinho: R$ ${cartService.getCartTotal()}`);
        showMenu();
        break;
      case "0":
        console.log("Encerrando o sistema...");
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        showMenu();
    }
  }

  function addProductFlow() {
    rl.question("ID do produto: ", (id) => {
      rl.question("Nome do produto: ", (name) => {
        rl.question("Preço do produto: ", (price) => {
          rl.question("Quantidade: ", (quantity) => {
            cartService.addProductToCart(
              id,
              name,
              parseFloat(price),
              parseInt(quantity)
            );

            console.log("Produto adicionado com sucesso!");
            showMenu();
          });
        });
      });
    });
  }

  function removeProductFlow() {
    rl.question("ID do produto para remover: ", (id) => {
      cartService.removeProductFromCart(id);
      console.log("Produto removido com sucesso!");
      showMenu();
    });
  }

  showMenu();
}

module.exports = { start };
