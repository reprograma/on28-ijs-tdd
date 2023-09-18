// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.

// Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.
class Resolucao {
  constructor(titular, saldo, limite) {
    this.titular = titular;
    this.saldo = saldo;
    this.limite = limite;
  }

  consultarSaldo() {
    return this.saldo;
  }

  adicionarAoSaldo(quantidade) {
    this.saldo = this.saldo + quantidade;
    return this.consultarSaldo();
  }

  removerDoSaldo(quantidade) {
    if (quantidade > this.saldo) {
      throw new Error("Saldo insuficiente");
    } else {
      this.saldo = this.saldo - quantidade;
    }
    return this.consultarSaldo();
  }
}

const resolucao = new Resolucao(7, 25);

console.log(resolucao);
 console.log(resolucao.adicionarAoSaldo(2));
console.log(resolucao.removerDoSaldo(2));
console.log(resolucao.consultarSaldo());

module.exports = Resolucao;
