const ContaBancaria = require('./Entrega-Sabrina'); 

describe('ContaBancaria', () => {
  let conta;

  beforeEach(() => {
    conta = new ContaBancaria('Titular', 1000, 500, true); // Crie uma nova instância da classe antes de cada teste
  });

  it('deve consultar o saldo corretamente', () => {
    expect(conta.consultarSaldo()).toBe(' Saldo de R$1000.');
  });

  it('deve realizar um saque com saldo suficiente', () => {
    const mensagem = conta.realizarSaque(500);
    expect(mensagem).toBe('Saque de R$500 realizado. Saldo atual: R$500.');
    expect(conta.saldo).toBe(500);
  });

  it('deve realizar um saque com limite disponível', () => {
    conta.saldo = 0; 
    const mensagem = conta.realizarSaque(500);
    expect(mensagem).toBe('Saque de R$500 realizado. Saldo atual: R$-500.');
    expect(conta.saldo).toBe(-500);
  });

  it('deve lançar um erro ao tentar sacar com saldo insuficiente e limite indisponível', () => {
    conta.saldo = 0; 
    conta.limiteAtivo = false; 
     expect(() => {
      conta.realizarSaque(500);
    }).toThrow('Saldo insuficiente.');
  });

  it('deve realizar um depósito corretamente', () => {
    const mensagem = conta.realizarDeposito(200);
    expect(mensagem).toBe('Depósito de R$200 realizado com sucesso. Novo saldo: R$1200.');
    expect(conta.saldo).toBe(1200);
  });

  it('deve ajustar o limite corretamente para mais', () => {
    const mensagem = conta.ajustarLimite(600);
    expect(mensagem).toBe('Limite ajustado para R$600.');
    expect(conta.limite).toBe(600);
  });

  it('deve ajustar o limite corretamente para menos', () => {
    const mensagem = conta.ajustarLimite(200);
    expect(mensagem).toBe('Limite ajustado para R$200.');
    expect(conta.limite).toBe(200);
  });

  it('deve lançar um erro ao tentar ajustar o limite com limite inativo', () => {
    conta.alternarLimite(false);
    expect(() => {
      conta.ajustarLimite(600);
    }).toThrow('O valor do limite não pode ser reajustado pois o limite está desativado.');
  });

  it('deve alternar o limite corretamente (ativar e desativar)', () => {
    let mensagem = conta.alternarLimite(true);
    expect(mensagem).toBe('Limite ativado.');
    expect(conta.limiteAtivo).toBe(true);

    mensagem = conta.alternarLimite(false);
    expect(mensagem).toBe('Limite desativado.');
    expect(conta.limiteAtivo).toBe(false);
  });
});
