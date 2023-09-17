const generateCombinations = require("./generateCombinations");

describe("Verificar função de gerar combinações", () => {
  const combinations = ["s", "o", "so", "l", "sl", "ol", "sol"];

  test("Checar combinações por tamanho ", () => {
    expect(generateCombinations("sol")).toHaveLength(7);
  });

  test("Checar combinações", () => {
    expect(generateCombinations("sol")).toEqual(combinations);
  });

  test("Verifica o retorno caso não seja uma string", () => {
    expect(generateCombinations(1234)).toEqual([]);
  });

  test("Verifica o retorno caso seja uma string vazia", () => {
    expect(generateCombinations("")).toEqual([]);
  });
});
