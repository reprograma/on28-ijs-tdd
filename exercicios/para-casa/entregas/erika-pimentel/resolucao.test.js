const contaBancaria = require('./resolucao');

describe('contaBancaria', () => {
  let Erika;
  beforeEach(() => {
    Erika = new contaBancaria("Erika", 1000, 2000)
  })

  test("Validar consulta ao saldo", () => {
    expect(Erika.consultarSaldo(1000)).toEqual(1000)
  })

  test("Validar a função sacar", () => {
    expect(Erika.sacar(1000)).toEqual(0)
  })

  test("Validar a função sacar: se o saque for maior que o saldo e menor que o limite", () => {
    expect(Erika.sacar(1500)).toEqual(-500)
  })

  test("Validar a função sacar: se o saque for maior que o saldo + limite", () => {
    expect(() => Erika.sacar(3500)).toThrow("Saldo insuficiente")
  })

  test("Validar a função depositar", () => {
    expect(Erika.depositar(1000)).toEqual(2000)
  })

  test("Validar a função ativarLimite", () => {
    expect(Erika.ativarLimite(true)).toEqual("Limite da conta ativado com sucesso")
  })

  test("Validar a função desativarLimite", () => {
    expect(Erika.desativarLimite(true)).toEqual("Limite da conta desativado com sucesso")
  })

  test("Validar a função reajustarLimiteMais", () => {
    expect(Erika.reajustarLimiteMais(3500)).toEqual("Limite ajustado para 3500")
  })

  test("Validar a função reajustarLimiteMais: se o novo limite for menor que o limite atual", () => {
    expect(() => Erika.reajustarLimiteMais(1500)).toThrow("O novo limite deve ser maior que o limite atual")
  })

  test("Validar a função reajustarLimiteMenos", () => {
    expect(Erika.reajustarLimiteMenos(1500)).toEqual("Limite ajustado para 1500")
  })

  test("Validar a função reajustarLimiteMenos: se o novo limite for maior que o limite atual", () => {
    expect(() => Erika.reajustarLimiteMenos(3500)).toThrow("O novo limite deve ser menor que o limite atual")
  })
})