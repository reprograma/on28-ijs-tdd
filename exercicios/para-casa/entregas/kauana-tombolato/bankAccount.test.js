const bankAccount = require("./bankAccount")

describe("test with bankAccount", () => {
  // deposito
  let account
  beforeEach(() => {
    account = new bankAccount("Kauana", 100, 50)
  })
  test("validar deposito", () => {
    expect(account.depositar(200)).toEqual(300)
  })

  // saque
  test("validar saque", () => {
    expect(account.sacar(50)).toEqual(50)
  })

  // saque quando não tem saldo mas tem limite
  test("validar saque", () => {
    expect(() => { account.sacar(1200) }).toThrowError();
  });

  // reajustar limite
  test("validar reajuste de limite", () => {
    expect(account.reajustarLimite(100)).toEqual(100)
  })

  // desativar limite
  test("validar desativar limite", () => {
    expect(account.desativarLimite()).toEqual(0)
  })
})