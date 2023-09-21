const Conta = require("./resolucao");

describe("Conta Bancária", () => {
	beforeEach(() => {
		conta = new Conta("André", 1500, 500, true);
		conta2 = new Conta("Maria", 1000, 500, false);
	});

	test("Confere a funcionalidade de consulta ao saldo", () => {
		expect(conta.consultaSaldo()).toBe(1500);
	});
	test("Testa a funcionalidade de depósito na conta", () => {
		conta.deposito(1000);
		expect(conta.consultaSaldo()).toBe(2500);
	});
	test("Testa a funcionalidade de saque na conta", () => {
		conta.saque(1000);
		expect(conta.consultaSaldo()).toBe(500);
	});
	test("Testa a funcionalidade de saque na conta além do saldo", () => {
		conta.saque(1700);
		expect(conta.consultaSaldo()).toBe(-200);
	});
	test("Testa a funcionalidade de saque na conta além do limite", () => {
		const resultado = conta.saque(10000);
		expect(resultado).toBe("Saldo indisponível");
		expect(conta.consultaSaldo()).toBe(1500);
	});
	test("Testa a funcionalidade de saque na conta sem limite ativo", () => {
		const resultado = conta2.saque(200);
		expect(resultado).toBe("Limite não ativo");
		expect(conta2.consultaSaldo()).toBe(1000);
	});
	test("Testa a funcionalidade de alteração de limite para mais", () => {
		conta.ajusteDoLimite(1000);
		expect(conta.consultaLimite()).toBe(1000);
	});
	test("Testa a funcionalidade de alteração de limite para menos", () => {
		conta.ajusteDoLimite(200);
		expect(conta.consultaLimite()).toBe(200);
	});
	test("Testa a funcionalidade de desativar e reativar limite", () => {
		conta.desativaLimite();
		expect(conta.ativaLimite()).toBe(false);
		conta2.desativaLimite();
		expect(conta2.ativaLimite()).toBe(true);
	});
});
