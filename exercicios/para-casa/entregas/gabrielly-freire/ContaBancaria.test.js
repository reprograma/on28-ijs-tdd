const ContaBancaria = require('./ContaBancaria');

describe("Conta Bancária", () => {
	let conta;
	beforeEach(() => {
		conta = new ContaBancaria("Gabrielly", 10000, 500);
	});

	test("Consulta saldo", () => {
		expect(conta.consultarSaldo()).toEqual(10000);
	});

	test("Valida saque quando possui saldo suficiente", () => {
		expect(conta.realizarSaque(5000)).toEqual(5000);
	});

	test("Valida saque quando possui limite", () => {
		expect(conta.realizarSaque(10100)).toEqual(-100);
	});

	test("Valida saque quando não possui limite", () => {
		expect(() => {conta.realizarSaque(10600)}).toThrow("Saldo insuficiente");
	});

	test("Valida depósito com valor válido", () => {
		expect(conta.realizarDeposito(1000)).toEqual(11000);
	});

	test("Valida depósito com valor inválido", () => {
		expect(() => {conta.realizarDeposito(-1060)}).toThrow("Valor inválido");
	});

	test("Consulta limite", () => {
		expect(conta.consultarLimite()).toEqual(500);
	});

	test("Valida aumento do limite", () => {
		expect(conta.aumentarLimite(500)).toEqual(1000);
	});

	test("Valida diminuição do limite", () => {
		expect(conta.diminuirLimite(200)).toEqual(300);
	});

	test("Desativa limite", () => {
		expect(conta.desativarLimite()).toEqual(0);
	});
	
});