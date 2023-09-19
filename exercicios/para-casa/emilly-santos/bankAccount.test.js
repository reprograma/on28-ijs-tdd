const BankAccount = require('./bankAccount')

describe("Testes da conta bancária", () => {
    let account

    beforeEach(() => {
        account = new BankAccount("Emilly Santos", 100, 200)
    })

    test("Validar a operção de depósito", () => {
        expect(account.deposit(20)).toEqual(120)
    })

    test("Validar operação de saque quando existe saldo suficiente", () => {
        expect(account.withdraw(30)).toEqual(70)
    })

    test("Validar operação de saque quando não existe saldo suficiente", () => {
        expect(account.withdraw(130)).toEqual(-30)
    })

    test("Validar operação de saque quando não existe saldo e limite suficiente", () => {
        expect(account.withdraw(230)).toEqual("Saldo insuficiente")
    })

    test("Consultar saldo", () => {
        expect(account.balanceOperation()).toEqual(100)
    })

    test("Testa aumentar o limite", () => {
        expect(account.limitReadjustment(400)).toEqual(400)
    })

    test("Testa diminuir o limite", () => {
        expect(account.limitReadjustment(100)).toEqual(100)
    })

    test("Testa desativar o limite", () => {
        expect(account.limitReadjustment("desativar")).toEqual("Limite da conta foi desativado")
    })
})
