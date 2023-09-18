const ContaBancaria = require('./resolucao');

describe('Checar funções da conta bancária', ()=>{

    let conta;

    beforeEach(()=>{
        conta = new ContaBancaria("Stella Luna", 1000, 200);
    })

    test('Checar a consulta de saldo', ()=> {
        expect(conta.consultarSaldo()).toEqual("Olá Stella Luna! Seu saldo é de R$1000.");
    })

    test('Checar o saque com saldo suficiente', ()=>{
        expect(()=> {conta.realizarSaque(0)}).toThrow();
        expect(conta.realizarSaque(200)).toEqual(800);
    })

    test('Checar o saque com saldo e limite insuficientes', ()=>{
        expect(()=>{conta.realizarSaque(2000)}).toThrow();
    })

    test('Checar o saque com saldo insuficiente porém com limite disponível', ()=>{
        expect(conta.realizarSaque(1200)).toEqual(-200);
    })

    test('Checar o depósito',()=>{
        expect(()=>{conta.realizarDeposito(-100)}).toThrow();
        expect(conta.realizarDeposito(500)).toEqual(1500);
    })

    test('Checar o ajuste de limite', ()=>{
        expect(()=>{conta.ajustarLimite(-200)}).toThrow();
        expect(conta.ajustarLimite(500)).toEqual(500);
        
        //testar ajustar o limite enquanto ele está desativado
        conta.alternarLimite(false);
        expect(()=>{conta.ajustarLimite(200);}).toThrow();
    })

    test('Checar ativar/desativar o limite', ()=> {
        expect(conta.alternarLimite(false)).toEqual(false);
    })

})