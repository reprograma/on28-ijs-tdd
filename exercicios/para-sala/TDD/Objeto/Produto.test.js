const Produto = require("./Produto");

describe("Produto", () => {
  let empada;
  beforeEach(() => {
    empada = new Produto("Empada", 7, 25);
  });

  test("validar  adição ao estoque", () => {
    expect(empada.adicionarAoEstoque(2)).toEqual(27);
  });
  test("validar  remover do estoque", () => {
    expect(empada.removerDoEstoque(2)).toEqual(23);
  });

  test("validar  consultar o estoque", () => {
    expect(empada.consultarEstoque()).toEqual(25);
  });

  test("validar não há saldo suficiente", () => {
    expect(() => empada.removerDoEstoque(30)).toThrow("Estoque insuficiente");
  });
});

// console.log(empada);
// console.log(empada.adicionarAoEstoque(2));
// console.log(empada);
// console.log(empada.removerDoEstoque(2));
// console.log(empada.consultarEstoque());
