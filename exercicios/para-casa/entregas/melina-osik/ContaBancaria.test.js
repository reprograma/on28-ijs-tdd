const ContaBancaria = require('./ContaBancaria')

describe("Conta Bancaria", () => {

  let conta
    beforeEach(() => {
      conta = new ContaBancaria("Melina", 800, 350)
    })

  test("com saldo suficiente, deve reduzir o valor do saque do total da conta", () => {
    expect(conta.sacar(25)).toEqual(775)
  })

  test("sem saldo suficiente, deve apresentar saldo negativo no valor retirado do limite", () => {
    expect(conta.sacar(900)).toEqual(-100)
  })

  test("deve acrescentar o valor do deposito no total da conta", () => {
    expect(conta.depositar(50)).toEqual(850)
  })

  test("deve aumentar o limite da conta", () => {
    expect(conta.aumentarLimite(150)).toEqual(500)
  })

  test("deve diminuir o limite da conta", () => {
    expect(conta.diminuirLimite(100)).toEqual(250)
  })

  test("deve desativar o limite da conta", () => {
    expect(conta.desativarLimite()).toEqual(0)
  })

})