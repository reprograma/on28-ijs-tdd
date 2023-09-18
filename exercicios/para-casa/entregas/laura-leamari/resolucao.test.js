const ContaBancaria = require('./resolucao');

describe('Validando dados da conta bancária', () => {

  // Antes de cada teste, recrie uma nova conta bancária
  beforeEach(() => {
    return conta = new ContaBancaria("Laura Leamari", 2570, 1000);
  });

  test('Deve consultar o saldo corretamente', () => {
    expect(conta.consultarSaldo()).toEqual(2570);
  });

  test('Deve realizar um depósito com sucesso', () => {
    conta.realizarDeposito(500);
    expect(conta.consultarSaldo()).toEqual(3070);
  });

  test('Deve realizar um saque com saldo suficiente', () => {
    conta.realizaSaque(1500);
    expect(conta.consultarSaldo()).toEqual(1070);
  });

  test('Deve realizar um saque usando o limite', () => {
    conta.realizaSaque(4000);
    expect(conta.consultarSaldo()).toEqual(2570);
    expect(conta.consultaLimite()).toEqual(1000);
  });

  test('não deve permitir saque com limite indisponível', () => {
    const resultado = conta.realizaSaque(4001);
    expect(resultado).toEqual("Limite indisponível");
  });

  test('Deve realizar um saque deixando a conta negativa', () => {
    conta.realizaSaque(3435);
    expect(conta.consultarSaldo()).toEqual(-865);
  });

  test('Deve ajustar o limite com sucesso', () => {
    conta.ajustaLimite(2000);
    expect(conta.consultaLimite()).toEqual(1000);
  });

  test('não deve ajustar o limite com conta desativada', () => {
    conta.desativarConta(false);
    const resultado = conta.ajustaLimite(2000);
    expect(resultado).toEqual(false);
  });

  test('Deve desativar a conta com sucesso', () => {
    conta.desativarConta(false);
    expect(conta.consultaLimite()).toEqual("Limite Desativado");
  });
});
