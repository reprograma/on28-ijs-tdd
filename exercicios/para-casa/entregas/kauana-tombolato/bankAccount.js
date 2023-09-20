//Exercicio Proposto: Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

class BankAccount {
  constructor(nome, saldo, limite) {
    this.nome = nome
    this.saldo = saldo
    this.limite = limite
  }

  consultarSaldo() {
    return this.saldo
  }

  consultarLimite() {
    return this.limite
  }

  depositar(valor) {
    this.saldo = this.saldo + valor
    return this.consultarSaldo()
  }

  sacar(valor) {
    if (valor > this.saldo) {
      if (valor > this.limite) {
        throw new Error('Saldo insuficiente')
      } else {
        this.limite = this.limite - valor
        this.saldo = this.saldo - valor
      }
    } else {
      this.saldo = this.saldo - valor
    }
    return this.consultarSaldo()
  }

  reajustarLimite(valor) {
    this.limite = valor
    return this.consultarLimite()
  }

  desativarLimite() {
    this.limite = 0
    return this.consultarLimite()
  }
}

module.exports = BankAccount