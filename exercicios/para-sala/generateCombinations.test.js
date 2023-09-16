const generateCombinations = require("./generateCombinations");

describe("Função de gerar combinação ", () => {
	const combinations = ["s", "o", "so", "l", "sl", "ol", "sol"];

	test("checar as combinações por tamanho", () => {
		expect(generateCombinations("sol")).toHaveLength(7);
	});

	test("chegar as combinações por array/mock", () => {
		expect(generateCombinations("sol")).toEqual(combinations);
	});
});
