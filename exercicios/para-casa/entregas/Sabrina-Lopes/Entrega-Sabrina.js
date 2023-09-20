//contabancaria
class ContaBancaria {
  constructor(titular, saldo = 0, limite = 0, limiteAtivo = true) {
    this.titular = titular;
    this.saldo = saldo;
    this.limite = limite;
    this.limiteAtivo = limiteAtivo;
  }

  consultarSaldo() {
    return ` Saldo de R$${this.saldo}.`;
  }

  realizarSaque(valorSaque) {
    if (valorSaque <= 0) {
      throw new Error("Saldoins.");
    }

    if (this.saldo >= valorSaque || (this.limiteAtivo && this.limite >= valorSaque - this.saldo)) {
      this.saldo -= valorSaque;
      return `Saque de R$${valorSaque} realizado. Saldo atual: R$${this.saldo}.`;
    } else {
      throw new Error("Saldo insuficiente.");
    }
  }

  realizarDeposito(valorDeposito) {
    if (valorDeposito <= 0) {
      throw new Error("O valor do depósito deve ser maior que zero.");
    }

    this.saldo += valorDeposito;
    return `Depósito de R$${valorDeposito} realizado com sucesso. Novo saldo: R$${this.saldo}.`;
  }

  ajustarLimite(novoLimite) {
    if (!this.limiteAtivo) {
      throw new Error("O valor do limite não pode ser reajustado pois o limite está desativado.");
    }
    if (novoLimite < 0) {
      throw new Error("Valor inválido");
    }

    this.limite = novoLimite;
    return `Limite ajustado para R$${novoLimite}.`;
  }

  alternarLimite(ativarLimite) {
    this.limiteAtivo = ativarLimite;
    if (ativarLimite) {
      return "Limite ativado.";
    } else {
      return "Limite desativado.";
    }
  }
}

module.exports = ContaBancaria;