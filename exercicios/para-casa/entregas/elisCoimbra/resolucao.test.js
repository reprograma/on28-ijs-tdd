const Conta = require('./resolucao')

describe("Cliente", ()=>{
    //adicionar o estoque,
    let cliente

    beforeEach(()=>{
        cliente = new Conta("Elis", 20, 50, true)
    });
    test('Verificar Saldo da Conta',()=>{
        expect(cliente.consultarSaldo()).toEqual(20)
    });
    test('Verificar Limite da Conta',()=>{
        expect(cliente.consultarLimite()).toEqual(50)
    });
    test('Fazendo depósito',()=>{
        expect(cliente.fazerDeposito(20)).toEqual(40)
    });
    test('Fazendo Saque',()=>{
        expect(cliente.fazerSaque(10)).toEqual(10)
    });
    test('Fazendo Saque',()=>{
        expect(cliente.fazerSaque(60)).toEqual(0)
    });
    test('Fazendo Saque',()=>{
        expect(cliente.fazerSaque(80)).toMatch('O seu saldo e limite não é o suficiente para realizar o saque')
    });
    test('Ativação crédito especial',()=>{
        expect(cliente.ativacaoLimiteEspecial('sim')).toMatch("Limite especial ativado")
    });
    test('Ativação crédito especial',()=>{
        expect(cliente.ativacaoLimiteEspecial('nao')).toMatch("Limite especial desativado")
    });

    test('Acessando o limite especial',()=>{
        expect(cliente.ajustarLimite(30)).toEqual(80)
    });
    
  



});

