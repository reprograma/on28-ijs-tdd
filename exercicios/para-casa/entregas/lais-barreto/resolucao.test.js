const ContaBancaria = require("./resolucao");

describe("ContaBancaria", () => {
  let minhaConta;

  beforeEach(() => {
    minhaConta = new ContaBancaria("Laís", 2500, 3000, true);
  });

  test("Validar função de consulta de saldo", () => {
    expect(minhaConta.consultarSaldo()).toEqual(
      "Laís, seu saldo atual é: R$2500,00"
    );
  });

  test("Validar função de realizar saque", () => {
    expect(minhaConta.realizarSaque(200)).toEqual(
      "Laís, saque de R$200,00 realizado. Novo saldo: R$2300,00"
    );
  });

  test("Tentar sacar um valor negativo", () => {
    expect(() => minhaConta.realizarSaque(-200)).toThrow(
      "O valor do saque deve ser maior que zero"
    );
  });

  test("Tentar sacar mais do que o saldo e o limite disponível", () => {
    expect(() => minhaConta.realizarSaque(5600)).toThrow(
      "Laís, o saldo e limite da sua conta são insuficientes."
    );
  });

  test("Tentar sacar um valor igual ao saldo + limite disponível", () => {
    expect(minhaConta.realizarSaque(5500)).toEqual(
      "Laís, saque de R$5500,00 realizado. Novo saldo: R$0,00"
    );
  });

  test("Validar realização de depósito", () => {
    expect(minhaConta.realizarDeposito(700)).toEqual(
      "Laís, depósito realizado com sucesso. Seu saldo atual é: R$3200,00"
    );
  });

  test("Tentar depositar um valor negativo", () => {
    expect(() => minhaConta.realizarDeposito(-300)).toThrow(
      "O valor do depósito não pode ser negativo."
    );
  });

  test("Validar função de alterar limite da conta", () => {
    expect(minhaConta.alterarLimite(500)).toEqual(
      "Laís, o limite da sua conta foi ajustado para: R$3500,00"
    );
  });

  test("Tentar alterar o limite com limite desativado", () => {
    minhaConta.alternarLimite();
    expect(minhaConta.alterarLimite(500)).toEqual(
      "O limite da conta está desativado. Ative o limite para ajustá-lo."
    );
  });

  test("Ativar limite inicialmente desativado", () => {
    minhaConta.alternarLimite();
    expect(minhaConta.alternarLimite()).toEqual(
      "Laís, o limite da sua conta foi ativado."
    );
  });
});
