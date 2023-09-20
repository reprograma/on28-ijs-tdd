const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount('Lari', 1000, 500);
  });
  
  it('Verificar o nome do titular da conta', () => {
    expect(account.name).toBe('Lari');
});

  test('Consulta de saldo', () => {
    expect(account.checkBalance()).toBe(1000);
  });

  test('Depósito', () => {
    account.deposit(200);
    expect(account.checkBalance()).toBe(1200);
  });

  test('Saque com saldo suficiente', () => {
    account.withdraw(500);
    expect(account.checkBalance()).toBe(500);
  });

  test('Saque com saldo insuficiente e limite disponível', () => {
    account.withdraw(1500);
    expect(account.checkBalance()).toBe(-500);
  });

  test('Tentar sacar além do limite', () => {
    account.withdraw(2500);
    expect(account.checkBalance()).toBe(1000);
    //exibir uma mensagem de log: 'Saldo insuficiente para saque.'
  });

  test('Reajuste de limite para mais', () => {
    account.setOverdraftLimit(200);
    expect(account.checkBalance()).toBe(1000);
    expect(account.overdraftLimit).toBe(200);
  });

  test('Reajuste de limite para menos', () => {
    account.setOverdraftLimit(-200);
    expect(account.checkBalance()).toBe(1000);
    // exibir uma mensagem de log: 'O limite não pode ser menor que zero.'
  });

  test('Desativar limite', () => {
    account.disableOverdraftLimit();
    expect(account.checkBalance()).toBe(1000);
    expect(account.overdraftLimit).toBe(0);
  });

  test('Reajuste de limite com sucesso deve retornar undefined', () => {
    const result = account.setOverdraftLimit(200);
    expect(result).toBeUndefined();
  });

  test('Tentar sacar além do limite deve exibir mensagem de log', () => {
    const spy = jest.spyOn(console, 'log');
    account.withdraw(2500);
    expect(spy).toHaveBeenCalledWith('Saldo insuficiente para saque.');
    spy.mockRestore(); // Restaura a função console.log após o teste
  });

});
