const ContaBancaria = require('./resolucaoGeice');

// const cliente = 'Geice Sousa'; const agencia = 1230; const conta = 789456.32; const limite = 1500.00; const saldo = 1000.00
const valor = 200.00
const valorDeAjuste = 500.00

describe('funcionamento da classe ContaBancaria', ()=>{
    let contaCliente
    beforeEach(()=>{
        contaCliente = new ContaBancaria('Geice Sousa', 1230, 789456.32, 1500.00, 1000.00)
    })

    test('verifica se é possivel consultar o saldo', ()=>{
        expect(contaCliente.verificarSaldo()).toEqual('Saldo disponível: R$ 1000')
    });
    test('verifica o limite da conta', ()=>{
        expect(contaCliente.verificarLimite()).toEqual('Limite disponível: R$ 1500')
    });
    test('verifica se pode realizar um saque', ()=>{
        expect(contaCliente.sacar(500)).toBe(`500 foi sacado. 
        O saldo atual é: R$ -500`)
    });
    test('verifica quando não há saldo ou saldo insuficiente para um saque', ()=>{
        expect(()=>{
            contaCliente.sacar().toThrow(new Error('Você não possui saldo suficiente'))
        });
    });
    test('realiza depósito', ()=>{
        expect(contaCliente.depositar(valor)).toBeTruthy()
    });
    test('falha no depósito', ()=>{
        expect(()=>{
            contaCliente.depositar()
        }).toThrow(new Error('Houve um erro inesperado, tenve novamente em instantes'))
    });
    test('ajustar limite', ()=>{
        expect(contaCliente.ajustarLimite(valorDeAjuste)).toBeTruthy()
    });
    test('erro ao ajustar limite', ()=>{
        expect(()=>{
            contaCliente.ajustarLimite(5000)
        }).toThrow(new Error('Não foi possível ajustar o limite, entre em contato com seu gerente'))
    });
})
