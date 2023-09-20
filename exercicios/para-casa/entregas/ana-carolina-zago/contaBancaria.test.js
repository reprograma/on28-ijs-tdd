const ContaBancaria = require('./contaBancaria')

describe("Conta Bancária", () => {
    let contaBancaria

    beforeEach(() => {
        contaBancaria = new ContaBancaria("Carolina", 100, 200)
    })

    test("Consultar o saldo", () => {
        expect(contaBancaria.consultarSaldo()).toEqual(100)
    })

    test("Consultar limite", () => {
        expect(contaBancaria.consultarLimite()).toEqual(200)
    })

    test("Realizar saque com valor menor que o saldo", () => {
        expect(contaBancaria.realizarSaque(99)).toEqual('Saque realizado com sucesso')
    })

    test("Realizar saque com valor igual ao saldo", () => {
        expect(contaBancaria.realizarSaque(100)).toEqual('Saque realizado com sucesso')
    })

    test("Realizar saque com valor maior que o saldo e menor que o limte", () => {
        expect(contaBancaria.realizarSaque(150)).toEqual('Saque realizado com sucesso')
    })

    test("Realizar saque com valor maior que o saldo e igual ao limite", () => {
        expect(contaBancaria.realizarSaque(200)).toEqual('Saque realizado com sucesso')
    })

    test("Não realizar saque pois o valor é maior que o saldo e maior que o limte", () => {
        expect(() => contaBancaria.realizarSaque(500)).toThrow('Saque não realizado por falta de saldo ou de limite')
    })

    test("Realizar depósito", () => {
        expect(contaBancaria.realizarDeposito(10)).toEqual(110)
    })

    test("Não realizar depósito", () => {
        expect(() => contaBancaria.realizarDeposito(0)).toThrow('O valor precisa ser maior que 0')
    })
    
})