const contaBancaria = require("./resolucao")

describe("Conta Bancária", () => {
    let conta
    beforeEach(() => {
        conta = new contaBancaria("Luiz", 10000, 2)
    })

    // Consulta
    test("Validar consulta do saldo", () => { expect(conta.consultarSaldoAtual()).toEqual(10000) })

    // Saque
    test("Validar erro de saldo insuficiente", () => {
        expect(() => { conta.retirarValor(11000) }).toThrow()
    })
    test("Validar saque quando saldo for suficiente.", () => {
        expect(conta.retirarValor(1000)).toEqual(9000)
    })

    // Depósito
    test("Validar atualização correta do saldo, após receber um depósito.", () => {
        expect(conta.depositarValor(1000)).toEqual(11000)
    })

    // Limite
    test("Validar se o valor limite é um número positivo", () => {
        expect(() => { conta.validarLimiteExtraParaSaque(-2)}).toThrow()
    })
})