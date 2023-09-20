const ContaBancaria = require('./ContaBancaria')

describe("ContaBancaria", () => {

    let conta1

    beforeEach(() => {
        conta1 = new ContaBancaria("Beatriz", 500, 1000)
    })

    test("validar se depósito ocorre corretamente, aumentando o valor do saldo", () => {
        expect(conta1.deposito(2)).toEqual(502)
        expect(conta1.deposito()).not.toBeNull()
    })

    test("consultar saldo", () => {
        expect(conta1.consultarSaldo()).toEqual(500)
    })

    test("consultar limite", () => {
        expect(conta1.consultarLimite()).toEqual(1000)
    })
    
    test(" realizar saque quando há limite suficiente e ativo", () => {
        expect(conta1.saque(900)).toEqual(-400)
    })

    test("não realizar saque quando não há limite suficiente", () => {
        expect(() => {conta1.saque(2000);}).toThrow();
    })

    test("não realizar saque quando não o limite não estiver ativo", () => {
        expect(() => {conta1.limite(0);}).toThrow();
    })

    test("aumentar limite ativo", () => {
        expect(conta1.aumentarLimite(500)).toEqual(1500)
    })

    test("diminuir limite ativo", () => {
        expect(conta1.diminuirLimite(200)).toEqual(800)
    })

    test("desativar limite", () => {
        expect(conta1.desativarLimite(0)).toEqual('limite desativado')
    })
})