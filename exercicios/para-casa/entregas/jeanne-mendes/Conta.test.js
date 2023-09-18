const Conta = require('./Conta')

describe("Testar classe Conta", () =>{
    let conta;

    beforeEach(() => {
        conta = new Conta("Fabio", 100, 200);
    });

    test("Validar Consulta de Saldo", () =>{
        expect(conta.consultarSaldo()).toEqual(100)
    })

    test("Validar Alteração de Limite para mais", () =>{
        expect(conta.alterarLimite(100)).toEqual(300)
    })

    test("Validar Alteração de Limite para menos", () =>{
        expect(conta.alterarLimite(-100)).toEqual(100)
    })

    test("Validar Alteração de Limite para menos que o limite atual", () =>{
        expect(conta.alterarLimite(-250)).toEqual(0)
    })

    test("Validar Saque quando o valor é menor que saldo", () =>{
        expect(conta.sacarDinheiro(50)).toEqual(50)
    })

    test("Validar saque quando o valor é maior que o saldo e menor que o limite", () =>{
        expect(conta.sacarDinheiro(150)).toEqual(-50)
    })

    test("Validar saque quando o valor é maior que o saldo e maior que o limite", () =>{
        expect(conta.sacarDinheiro(350)).toEqual("Saque não realizado. Limite insuficiente")
    })

})