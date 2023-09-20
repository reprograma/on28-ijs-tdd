const contaBancaria = require("./contaBancaria");

describe("Conta bancária com limite disponível", () => {
  let andrea;

  beforeEach(() => {
    andrea = new contaBancaria("Andrea", 5, 10, true);
  });

  // fazer depósito,
  test("validar se o depósito ocorre corretamente", () => {
    expect(andrea.deposito(2)).toEqual(7);
  });

  // consultar saldo,
  test("consultar saldo", () => {
    expect(andrea.consultarSaldo()).toEqual(5);
  });

  // consultar limite,
  test("consultar limite", () => {
    expect(andrea.consultarLimite()).toEqual(10);
  });

  // aumentar limite se há limite disponível,
  test("aumentar limite se há limite disponível", () => {
    expect(andrea.aumentarLimite(10)).toEqual(20);
  });

  // diminuir limite se há limite suficiente,
  test("diminuir limite se há limite suficiente", () => {
    expect(andrea.diminuirLimite(5)).toEqual(5);
  });

  // diminuir limite se NÃO há limite suficiente,
  test("diminuir limite se NÃO há limite suficiente", () => {
    expect(() => {
      andrea.diminuirLimite(100);
    }).toThrow(new Error("Quantidade de limite insuficiente."));
  });

  // consultar se há limite,
  test("consultar se há limite", () => {
    expect(andrea.consultarTemLimite()).toEqual("Você tem limite!");
  });

  // remover do saldo quando há saldo e limite suficiente,
  test("remover do saldo quando há saldo e limite suficiente", () => {
    expect(andrea.saque(10)).toEqual(-5);
    expect(andrea.consultarLimite()).toEqual(10);
  });

  // remover do saldo quando NÃO há saldo e limite suficiente,
  test("remover do saldo quando NÃO há saldo e limite suficiente", () => {
    expect(() => {
      andrea.saque(100);
    }).toThrow(new Error("Saldo e limite insuficientes."));
  });
});

describe("Conta bancária com limite indisponível", () => {
  let andrea;

  beforeEach(() => {
    andrea = new contaBancaria("Andrea", 5, 10, false);
  });

  // fazer depósito,
  test("validar se o depósito ocorre corretamente", () => {
    expect(andrea.deposito(2)).toEqual(7);
  });

  // consultar saldo,
  test("consultar saldo", () => {
    expect(andrea.consultarSaldo()).toEqual(5);
  });

  // consultar limite,
  test("consultar limite", () => {
    expect(() => {
      andrea.consultarLimite();
    }).toThrow(new Error("Limite indisponível."));
  });

  // aumentar limite se NÃO há limite disponível,
  test("aumentar limite se NÃO há limite disponível", () => {
    expect(() => {
      andrea.aumentarLimite(10);
    }).toThrow(new Error("Limite indisponível."));
  });

 // diminuir limite se NÃO há limite disponível,
  test("diminuir limite se NÃO há limite disponível", () => {
    expect(() => {
      andrea.diminuirLimite(100);
    }).toThrow(new Error("Limite indisponível."));
  });

  // consultar se há limite,
  test("consultar se há limite", () => {
    expect(andrea.consultarTemLimite()).toEqual(
      "Você não tem limite disponível..."
    );
  });

  //remover do saldo quando há saldo suficiente e não há limite disponível,
  test("remover do saldo quando há saldo suficiente e NÃO há limite disponível", () => {
    expect(andrea.saque(5)).toEqual(0);
    expect(andrea.consultarTemLimite()).toEqual(
      "Você não tem limite disponível..."
    );
  });

  //remover do saldo quando NÃO há saldo suficiente e NÃO há limite disponível
  test("remover do saldo quando NÃO há saldo suficiente e NÃO há limite disponível", () => {
    expect(() => {
      andrea.saque(100);
    }).toThrow(new Error("Saldo insuficiente. Seu limite está desabilitado."));
    expect(andrea.consultarTemLimite()).toEqual(
      "Você não tem limite disponível..."
    );
  });
});
