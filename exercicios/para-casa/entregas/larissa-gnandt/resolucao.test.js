const ContaBancaria = require("./resolucao");

describe("ContaBancaria", () => {
  let conta;

  beforeEach(() => {
    conta = new ContaBancaria("Larissa", 1000, 500);
  });

  it("deve retornar o saldo correto", () => {
    expect(conta.consultarSaldo()).toEqual(1000);
  });

  it("deve permitir fazer um saque dentro do saldo disponível", () => {
    conta.realizarSaque(500);
    expect(conta.consultarSaldo()).toEqual(500);
  });

  it("deve permitir fazer um saque usando o limite", () => {
    conta.ativarLimite();
    conta.realizarSaque(1500);
    expect(conta.consultarSaldo()).toEqual(-500);
  });

  it("não deve permitir fazer um saque usando o limite quando o limite estiver desativado", () => {
    conta.desativarLimite();
    expect(() => {
      conta.realizarSaque(1500);
    }).toThrow("Saldo insuficiente");
  });

  it("não deve permitir fazer um saque acima da soma do saldo e do limite", () => {
    conta.ativarLimite();
    expect(() => {
      conta.realizarSaque(1501);
    }).toThrow("Saldo e limite insuficientes");
  });

  it("deve permitir fazer um depósito", () => {
    conta.realizarDeposito(700);
    expect(conta.consultarSaldo()).toEqual(1700);
  });

  it("não deve permitir um depósito negativo", () => {
    expect(() => {
      conta.realizarDeposito(-1);
    }).toThrow("Valor para depósito precisa ser positivo");
  });

  it("deve permitir reajustar o limite", () => {
    conta.reajustarLimite(700);
    expect(conta.limiteDaConta).toEqual(700);
  });

  it("não deve permitir um limite negativo", () => {
    expect(() => {
      conta.reajustarLimite(-1);
    }).toThrow("Valor do limite não pode ser negativo");
  });

  it("deve ativar o limite", () => {
    conta.ativarLimite();
    expect(conta.limiteAtivo).toEqual(true);
  });

  it("deve desativar o limite", () => {
    conta.desativarLimite();
    expect(conta.limiteAtivo).toEqual(false);
  });
});
