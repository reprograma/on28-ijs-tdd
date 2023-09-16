const checkEvenNumber = require("./numeroPar");
describe("Validando função de número par", () => {
	test("Verificar se o número é par", () => {
		expect(checkEvenNumber(2)).toEqual("2 é um número par");
	});

	test("Verificar se o número é ímpar", () => {
		expect(checkEvenNumber(3)).toEqual("3 é um número ímpar");
	});

	test("Verificar se é um número", () => {
		expect(checkEvenNumber("hjhajh")).toEqual("hjhajh não é um número");
	});
});
