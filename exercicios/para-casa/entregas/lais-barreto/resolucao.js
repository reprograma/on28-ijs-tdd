class ContaBancaria {
  constructor(nomeTitular, saldo, limiteConta, limiteAtivo = true) {
    this.nomeTitular = nomeTitular;
    this.saldo = saldo;
    this.limiteConta = limiteConta;
    this.limiteAtivo = limiteAtivo;
  }

  consultarSaldo() {
    return `${this.nomeTitular}, seu saldo atual é: R$${this.saldo},00`;
  }

  alterarLimite(valor) {
    if (!this.limiteAtivo) {
      return "O limite da conta está desativado. Ative o limite para ajustá-lo.";
    }
    this.limiteConta += valor;
    return `${this.nomeTitular}, o limite da sua conta foi ajustado para: R$${this.limiteConta},00`;
  }

  alternarLimite() {
    if (this.limiteAtivo) {
      this.limiteAtivo = false;
      this.limiteConta = 0;
      return `${this.nomeTitular}, o limite da sua conta foi desativado.`;
    } else {
      this.limiteAtivo = true;
      return `${this.nomeTitular}, o limite da sua conta foi ativado.`;
    }
  }

  realizarSaque(valor) {
    if (valor <= 0) {
      throw new Error("O valor do saque deve ser maior que zero");
    }
    const saldoDisponivel =
      this.saldo + (this.limiteAtivo ? this.limiteConta : 0);
    if (saldoDisponivel >= valor) {
      this.saldo -= valor;
      if (this.saldo < 0 && this.limiteAtivo) {
        this.limiteConta += this.saldo;
        this.saldo = 0;
      }
      return `${this.nomeTitular}, saque de R$${valor},00 realizado. Novo saldo: R$${this.saldo},00`;
    } else if (!this.limiteAtivo) {
      throw new Error(
        `${this.nomeTitular}, o saldo da sua conta é insuficiente e o limite está desativado.`
      );
    } else {
      throw new Error(
        `${this.nomeTitular}, o saldo e limite da sua conta são insuficientes.`
      );
    }
  }

  realizarDeposito(valor) {
    if (valor < 0) {
      throw new Error("O valor do depósito não pode ser negativo.");
    }

    this.saldo += valor;
    return `${this.nomeTitular}, depósito realizado com sucesso. Seu saldo atual é: R$${this.saldo},00`;
  }
}
module.exports = ContaBancaria;
