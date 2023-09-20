//##TODO - Exercicio Proposto: Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta.É possível fazer operações de consulta de saldo, saque e depósito.No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível(e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque.Além disso, o limite de uma conta pode ser reajustado(para mais e para menos) ou desativado.Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const ContaBancaria = require('./resolucao');

describe('Verificações de Conta bancária', () => {
    let conta;

    beforeEach(() => {
        conta = new ContaBancaria('Josie', 1000, 100);
    });

    it('Deve verificar o nome do titular da conta', () => {
        expect(conta.nomeTitular).toBe('Josie');
    });

    it('Deve verificar o saldo inicial', () => {
        expect(conta.consultarSaldo()).toBe(1000);
    });

    it('Deve verificar o deposito do valor em conta', () => {
        conta.depositar(500);
        expect(conta.consultarSaldo()).toBe(1500);
    });

    it('Deve verificar o saque com saldo suficiente', () => {
        conta.sacar(400);
        expect(conta.consultarSaldo()).toBe(600);
    });


    it('Deve verificar o saque com saldo insuficiente e limite indisponível', () => {
        const saque = () => conta.sacar(1200);
        expect(saque).toThrow('Saldo insuficiente e limite indisponível.');
        expect(conta.consultarSaldo()).toBe(1000);
        expect(conta.obterLimite()).toBe(100);
    });


    it('Deve verificar o reajuste do novo limite de conta corretamente', () => {
        conta.reajustarLimite(800);
        expect(conta.obterLimite()).toBe(800);
    });

    it('Deve verificar o lançamento de erro se o novo limite for menor que zero', () => {
        expect(() => conta.reajustarLimite(-200)).toThrow('O novo limite deve ser maior ou igual a zero');
    });

    it('Deve verificar se o cliente obteve o limite atual corretamente', () => {
        const limiteAtual = conta.obterLimite();
        expect(limiteAtual).toBe(100);
    });

    it('Deve verificar se o limite da conta foi desativado', () => {
        conta.reajustarLimite(0);
        expect(conta.obterLimite()).toBe(0);
    });

});
