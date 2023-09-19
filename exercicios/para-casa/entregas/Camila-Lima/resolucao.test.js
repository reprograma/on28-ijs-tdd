const Cliente = require('./Resolucao')

describe("Cliente", () => {
    //validar depósito
    
    let cliente
    
    beforeEach(()=>{
        cliente = new Cliente("Maria", 700, 250)
    })

    test("validar depósito", () =>{
        expect(cliente.deposito(200)).toEqual(900)
    })

    //consultar Saldo
    test("validar consultar estoque", () =>{
        expect(cliente.consultarSaldo()).toEqual(700)
    })

    //validar Saque
    test("validar saque", () =>{
        expect(cliente.saque(10)).toEqual(690)
    })

    //validar Saque com valor não disponível
    test("validar Saque com valor não disponível", () =>{
        expect(() => {cliente.saque(1000);}).toThrow();
    })

    })