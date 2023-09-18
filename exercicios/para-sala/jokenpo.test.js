const jokenpo = require("./jokenpo");

describe("Função jokenpo", () => {
  //testes
  test("Validar empate", () => {
    expect(jokenpo("pedra", "pedra")).toEqual("Empate!");
    expect(jokenpo("tesoura", "tesoura")).toEqual("Empate!");
  });

  //checar se o primeiro jogador ganhou
  test("Validar se o jogador 1 ganhou", () => {
    expect(jokenpo("pedra", "tesoura")).toEqual("Jogador 1 venceu!");
  });

  //checar se o primeiro jogador ganhou
  test("Validar se o jogador 2 ganhou", () => {
    expect(jokenpo("tesoura", "pedra")).toEqual("Jogador 2 venceu!");
  });
});
