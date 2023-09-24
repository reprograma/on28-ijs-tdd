const contaBancaria = require('./contaBancaria')

describe('Conta bancaria', () => {

    let banco
    beforeEach(() => {
        banco = new contaBancaria ("Isbeli", 500, 2000)
    })

    // consulta de Saldo em conta
    test('Consulta saldo  da conta Bancaria', () => {
        expect(banco.consultaDeSaldo()).toEqual(500)
        console.log("teste consulta banco")
    })

    // consulta de Deposito
    test('Consultar deposito da conta bancaria', () => {
        expect(banco.deposito(150)).toEqual(650)
        console.log("teste NOVO deposito")

    })

    // consulta de Saque: Saldo da conta bancaria
    test('Consultar saque da cuenta bancaria', () => {
        expect(banco.saque(100)).toEqual()
        console.log("teste Saque Saldo da conta bancaria ")

    })


    //  Mensagem de ERROR quando NÃO tenha saldo da conta bancaria
    test('Mensagem de ERROR quando NÃO tenha saldo da conta bancaria', () => {
        expect(banco.saque(100)).toThrowError()
        console.log("Saldo indisponivel para retiro ")

    })



})