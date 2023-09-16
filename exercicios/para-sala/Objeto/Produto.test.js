const Produto = require("./Produto");

describe("Produto", () => {
	let empada;

	beforeEach(() => {
		empada = new Produto("Empada", 7, 25);
	});

	test("validar adição ao estoque", () => {
		expect(empada.adicionarAoEstoque(2)).toEqual(27);
	});

	test("consultar estoque", () => {
		expect(empada.consultarEstoque()).toEqual(25);
	});

	test("remover do estoque quando há estoque suficiente", () => {
		expect(empada.removerDoEstoque(3)).toEqual(22);
	});

	test("remover do estoque quando não há estoque suficiente", () => {
		expect(() => {
			empada.removerDoEstoque(30);
		}).toThrow(new Error("Estoque insuficiente"));
	});
});
