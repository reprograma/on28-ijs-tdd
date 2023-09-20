const ContaBancaria = require("./resolucao");

describe("Testar as funcionalidades da conta bancária", () => {
  beforeEach(() => {
    conta = new ContaBancaria("Veronica", 500, 1000);
  });

  test("validar consultar saldo", () => {
    expect(conta.consultarSaldo()).toEqual(500);
  });

  test("validar fazer uma deposito na conta", () => {
    expect(conta.deposito(200)).toEqual(700);
  });

  test("validar fazer um saque com saldo suficiente", () => {
    expect(conta.saque(200)).toEqual(300);
  });

  test("validar fazer um saque com saldo insuficiente", () => {
    expect(conta.saque(700)).toEqual(-200);
  });

  test("validar fazer um saque com saldo insuficiente e acima do limite", () => {
    expect(conta.saque(2000)).toEqual("Saldo insuficiente");
  });

  test("validar aumentar o limite da conta", () => {
    expect(conta.aumentarLimite(200)).toEqual(1200);
  });

  test("validar diminuir o limite da conta", () => {
    expect(conta.diminuirLimite(200)).toEqual(800);
  });

  test("validar desativar o limite da conta", () => {
    expect(conta.desativarLimite(false)).toEqual("Limite da conta desativado");
  });

  test("validar reativar o limite da conta", () => {
    expect(conta.desativarLimite(true)).toEqual("Limite da conta ativado");
  });
});
