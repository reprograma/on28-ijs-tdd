const jokenpo = require("./jokenpo");

describe("Testa a função jokenpo", () => {
	test("Valida empate", () => {
		expect(jokenpo("pedra", "pedra")).toEqual("Empate!");
		expect(jokenpo("papel", "papel")).toEqual("Empate!");
		expect(jokenpo("tesoura", "tesoura")).toEqual("Empate!");
	});

    test("Valida vencedor como jogador 1", () => {
		expect(jokenpo("papel", "pedra")).toEqual("Jogador 1 venceu!");
		expect(jokenpo("tesoura", "papel")).toEqual("Jogador 1 venceu!");
		expect(jokenpo("pedra", "tesoura")).toEqual("Jogador 1 venceu!");
	});

	test("Valida vencedor como jogador 2", () => {
		expect(jokenpo("pedra", "papel")).toEqual("Jogador 2 venceu!");
		expect(jokenpo("papel", "tesoura")).toEqual("Jogador 2 venceu!");
		expect(jokenpo("tesoura", "pedra")).toEqual("Jogador 2 venceu!");
	});

});
