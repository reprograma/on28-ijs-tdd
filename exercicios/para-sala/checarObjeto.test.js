const { allKeys, isObject } = require("./checarObjeto");

describe("Verificar as funções de checar objeto", () => {
  const pessoa = {
    nome: "Veronica",
    sobrenome: "Paranhos",
  };

  test("Verifica se o dado recebido não é um objeto", () => {
    expect(allKeys("Veronica")).toEqual([]);
  });

  test("Verifica se o dado recebido é um objeto", () => {
    expect(allKeys(pessoa)).toEqual(["nome", "sobrenome"]);
  });

  test("Verifica se o dado recebido é um objeto", () => {
    expect(isObject(pessoa)).toEqual(true);
  });

  test("Verifica se o dado recebido não é um objeto", () => {
    expect(isObject("Veronica")).toEqual(false);
  });

  test("Verifica se o dado recebido não é um objeto", () => {
    expect(isObject(1234)).toEqual(false);
  });
});
