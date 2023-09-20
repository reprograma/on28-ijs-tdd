//Conta bancária - nome do titular, o saldo e o limite da conta
//consultar saldo, saque e depósito
//caso o cliente não tenha saldo, mas tenha limte de crédito a conta ficará negativa.
//o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.

class ContaBancaria {
  constructor(nome, saldo, limite) {
    this.nome = nome;
    this.saldo = saldo;
    this.limite = limite + saldo;
    this.limiteAtivo = true;
  }

  consultarSaldo() {
    return this.saldo;
  }

  consultarLimite() {
    return this.limite;
  }

  deposito(valor) {
    this.saldo = this.saldo + valor;
    return this.consultarSaldo();
  }

  saque(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      return this.consultarSaldo();
    } else if (this.limiteAtivo && valor <= this.limite) {
      this.saldo -= valor;
      return this.consultarSaldo();
    } else {
      return "Saldo insuficiente";
    }
  }

  aumentarLimite(valor) {
    this.limite += valor - this.saldo;
    return this.consultarLimite();
  }

  diminuirLimite(valor) {
    this.limite = this.limite - valor - this.saldo;
    return this.consultarLimite();
  }

  desativarLimite(limiteAtivo) {
    if (limiteAtivo === false) {
      return "Limite da conta desativado";
    } else {
      return "Limite da conta ativado";
    }
  }
}

module.exports = ContaBancaria;
