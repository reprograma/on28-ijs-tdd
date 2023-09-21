const BankAccount = require('./BankAccount');

describe("Contabancária", () => {
    let conta;

    beforeEach(() => {
            conta = new BankAccount ('roxanie fernandes', 5000, 1000)
    })

    test("Verifica consulta de saldo", () => {
        expect(conta.consultarSaldo()).toEqual(5000)
    })
    
    test("Realiza saque com saldo suficiente", () => {
        expect(conta.sacarValor(500)).toEqual(4500)
    })
    
    test("Realiza saque com limite", () => {
        expect(conta.sacarValor(5500)).toEqual(-500)
    })

    test("Tenta realizar saque sem saldo sufifiente", () => {
        expect(() => conta.sacarValor(8000)).toThrow('Você não possui saldo ou limite suficiente')
    })
    
    test("Realiza depósito", () => {
        expect(conta.depositarValor(200)).toEqual(5200)
    })

    test("Ajusta limite para mais (+)", () => {
        expect(conta.ajustarLimite(7000)).toEqual(7000)
    })

    test("Ajusta limite para menos (-)", () => {
        expect(conta.ajustarLimite(500)).toEqual(500)
    })

    test("Desativa limite", () => {
        expect(conta.desativarLimite()).toEqual(0)
    })
    
})


