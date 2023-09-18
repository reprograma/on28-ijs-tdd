const generateCombinations = require("./generateCombinations");

describe("Função de gerar Combinação", () => {
  
  test("checar as combinações por tamanho", () => {
    expect(generateCombinations("dia")).toHaveLength(7);
  });
});