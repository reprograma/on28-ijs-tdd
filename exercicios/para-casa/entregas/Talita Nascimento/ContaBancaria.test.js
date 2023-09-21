const ContaBancaria = require('./ContaBancaria')

describe("Validar os métodos da classe Conta Bancária", () => {
    let contaMockada
    beforeEach(() => {
        contaMockada = new ContaBancaria("talu", 500, 1000)
    })

    test("Validar o funcionamento do método consultar saldo da conta.", () => {
        expect(contaMockada.consultarSaldo()).toEqual("Saldo disponível em conta: R$500")
    })
    test("Validar o funcionamento do método depositar saldo da conta.", () => {
        expect(contaMockada.depositarDinheiroNaConta(50)).toEqual("Valor R$ 50 depositado com sucesso! Novo saldo: R$550")
    })
    test("Validar o funcionamento do método sacar saldo da conta, com SALDO insuficiente e LIMITE disponível.", () => {
        expect(contaMockada.sacarDinheiroDaConta(800)).toEqual("Tentativa de saque no valor de R$800 reais.\nSaldo R$500 é insufuciente para este saque. Transação efetivada com R$1000 do limite. \nSaldo atual: R$-200\nLimite disponível: R$700")
    })
    test("Validar o funcionamento do método sacar saldo da conta, com SALDO e LIMITE insuficientes.", () => {
        expect(() => {
            contaMockada.sacarDinheiroDaConta(2000)
        }).toThrow("Os valores de saldo e limite são insuficientes para esta operação.")
    })
    test("Validar o funcionamento do método sacar saldo da conta, tendo SALDO disponível.", () => {
        expect(contaMockada.sacarDinheiroDaConta(200)).toEqual("Saque no valor de R$200 efetuado com sucesso! Novo saldo: R$300")
    })
    test("Validar o funcionamento do método ajustar LIMITE da conta.", () => {
        expect(contaMockada.ajustarLimiteDaConta(20)).toEqual("Limite ajustado para R$20")
    })
    test("Validar o funcionamento do método ajustar LIMITE da conta, quando valor máximo é excedido.", () => {
        expect(contaMockada.ajustarLimiteDaConta(15000)).toEqual("Não foi possível ajustar o limite. \nLimite atual: R$1000 \nSaldo da conta: R$500")
    })
    test("Validar o funcionamento do método ajustar LIMITE da conta, quando valor máximo é excedido.", () => {
        expect(contaMockada.desativarLimiteDaConta(0)).toEqual("Limite desativado. Saldo e limite são insuficientes: R$0")
    })

})