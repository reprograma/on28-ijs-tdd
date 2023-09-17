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
        expect(conta.saque(500)).toEqual(4500)
    })
    
    test("Realiza saque com limite", () => {
        expect(conta.saque(5500)).toEqual(-500)
    })

    test("Tenta realizar saque sem saldo sufifiente", () => {
        expect(() => conta.saque(8000)).toThrow('Você não possui saldo ou limite suficiente')
    })
    
    test("Realiza depósito", () => {
        expect(conta.deposito(200)).toEqual(5200)
    })

    test("Ajusta limite para mais (+)", () => {
        expect(conta.novoLimite(7000)).toEqual(7000)
    })

    test("Ajusta limite para menos (-)", () => {
        expect(conta.novoLimite(500)).toEqual(500)
    })

    test("Desativa limite", () => {
        expect(conta.desativaLimite()).toEqual(0)
    })
    
})


