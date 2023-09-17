const Produto = require("./Produto");
//testar: adicionar ao estoque, consulta de estoque, remover do estoque
describe("Produto", () => {
  let empada;
  beforeEach(() => {
    empada = new Produto("Empada", 7, 25);
  });
  test("validar adição ao estoque", () => {
    expect(empada.adicionarAoEstoque(2)).toEqual(27);
  });

  test("validar consulta o estoque", () => {
    expect(empada.consultarEstoque()).toEqual(25);
  });

  test("validar remoção de produto ao estoque quando há estoque suficiente", () => {
    expect(empada.removerDoEstoque(2)).toEqual(23);
  });

  test("validar remoção de produto ao estoque quando NÃO há estoque suficiente", () => {
    expect(() => {
      empada.removerDoEstoque(30);
    }).toThrow();
  });
});
