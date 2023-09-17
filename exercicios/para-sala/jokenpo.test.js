const jokenpo = require("./jokenpo");

describe("Validando a função jokenpo", () => {
  test("validar empate", () => {
    expect(jokenpo("pedra", "pedra")).toEqual("Empate!");
    expect(jokenpo("tesoura", "tesoura")).toEqual("Empate!");
  });

  test("validar se o jogador 1 ganhou", () => {
    expect(jokenpo("teroura", "papel")).toEqual("Jogador 1 venceu!");
  });

  test("validar se o jogador 2 ganhou", () => {
    expect(jokenpo("pedra", "papel")).toEqual("Jogador 2 venceu!");
  });
});
