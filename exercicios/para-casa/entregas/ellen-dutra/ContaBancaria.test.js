const ContaBancaria = require('./ContaBancaria');

describe('Teste de ContaBancaria', () => {
  let conta;
  beforeEach(() => {
    conta = new ContaBancaria('Ellen', 1500, 1000);
  });

  test('Consulta o saldo', () => {
    expect(conta.consultarSaldo()).toEqual(1500);
  });

  test('Saque na conta caso haja saldo suficiente', () => {
    expect(conta.efetuarSaque(1000)).toEqual(500);
  });

  test('Saque na conta com saldo insuficiente, mas com limite disponível', () => {
    expect(conta.efetuarSaque(700)).toEqual(800);
    expect(conta.efetuarSaque(900)).toEqual(-100);
  });

  test('Não permite saque na conta sem saldo e limite suficientes', () => {
    expect(() => {
      conta.efetuarSaque(3000);
    }).toThrow();
  });

  test('Deposita valor na conta', () => {
    expect(conta.depositarValor(200)).toEqual(1700);
  });

  test('Ajusta o limite da conta, para mais ou para menos', () => {
    expect(conta.reajustarLimite(100)).toEqual(1100);
    expect(conta.reajustarLimite(-200)).toEqual(900);
  });

  test('Desativa o limite da conta', () => {
    expect(conta.desativarLimite()).toEqual(true);
  });
});
