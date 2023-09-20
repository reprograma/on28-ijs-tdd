const ContaBancaria = require('./resolucao')


describe("Conta do Usuário", ()=> {

    let contaUsuario
    beforeEach(() => {
     contaUsuario = new ContaBancaria("Heloiza", 1000, 200)
    })
test("Validar saldo da conta", () => {
    //
    expect(contaUsuario.consultarSaldo()).toEqual(1000)
})

test("Validar saldo, após depósito  na conta", () => {
    expect(contaUsuario.depositarDinheiro(500)).toEqual(1500)
})

test("Validar saldo, após saque na conta", () => {
    expect(contaUsuario.sacarDinheiro(500)).toEqual(500)
})

test("Validar saldo, após saque na conta(retirando do limite)", () => {
    expect(contaUsuario.sacarDinheiro(1100)).toEqual(-100)
})


test("Validar  bloqueio de saque quando o valor exceder a soma do saldo+limite", () => {
    expect(() => {contaUsuario.sacarDinheiro(1400);}).toThrow();

})

test("Ajustar limite", () => {
    expect(contaUsuario.atualizarLimite(-200)).toEqual(0)
})

})
