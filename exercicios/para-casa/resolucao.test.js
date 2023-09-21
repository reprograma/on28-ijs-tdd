const ContaBancaria = require('./resolucao');

describe("Verificar as implementações da conta bancaria", () => {
    
    let conta 

    beforeEach(() => {
        conta = new ContaBancaria("Viviane", 150, 500);
    })

    test('Consultar saldo', () => {
        expect(conta.consultarSaldo()).toEqual(150);
    })

    test('Consulte o deposito realizado', () => {
        expect(conta.fazerDeposito(10)).toEqual("Depósito de: R$10 realizado. Novo saldo: R$160");
    })

    test('Consultar limite da conta', () => {
        expect(conta.consultarLimite()).toEqual(500);
    })

    test('Consultar o valor sacado', () => {
        expect(conta.fazerSaque(600)).toEqual("Você sacou o limite. Novo saldo: R$0, Novo limite: R$50");
    })

    test('Consultar saldo insuficiente e limite indisponível', () => {
        expect(conta.fazerSaque(2000)).toEqual('Saldo insuficiente e limite indisponível');
    })

    test('Consultar valor inválido', () => {
        expect(conta.fazerSaque(0)).toEqual('Valor inválido');
    })

    test('Consultar ajuste de limite', () => {
        expect(conta.ajustarLimite(1000)).toEqual("Limite ajustado para R$1000");
    })

    test('Consultar limite desativado', () => {
        expect(conta.desativarLimite()).toEqual('Limite desativado');
    })

    test('Consultar ajuste de limite inválido', () => {
        expect(conta.ajustarLimite(5)).toEqual('Novo limite inválido. O limite não pode ser menor que saldo atual')
    })
})









