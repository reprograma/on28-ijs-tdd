const generateCombinations = require('./generateCombinations');

test('Gerar combinações existentes para string "sol"', () => {
  const palavra = "sal";
  const expectedCombinations = ["s", "a", "l", "sa", "sl", "al", "sal"];

  const result = generateCombinations(palavra);

  expect(result).toEqual(expectedCombinations);
});

test('Gerar combinações para string vazia', () => {
  const palavra = "";
  const expectedCombinations = [];

  const result = generateCombinations(palavra);

  expect(result).toEqual(expectedCombinations);
});

test('Gerar combinações para palavras com repetições', () => {
  const palavra = "ana";
  const expectedCombinations = ["a", "n", "a", "an", "aa", "na", "ana"];

  const result = generateCombinations(palavra);

  expect(result).toEqual(expectedCombinations);
});