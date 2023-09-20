class ContaBancaria {
  constructor(nomeTitular, saldoConta, limiteConta) {
    this.nomeTitular = nomeTitular;
    this.saldoConta = saldoConta;
    this.limiteConta = limiteConta;
  }

  consultarSaldo() {
    return this.saldoConta;
  }

  efetuarSaque(valor) {
    if (valor <= this.saldoConta) {
      this.saldoConta -= valor;
      return this.consultarSaldo();
    } else if (valor > this.saldoConta && valor < this.limiteConta) {
      this.limiteConta -= valor;
      this.saldoConta -= valor;
      return this.consultarSaldo();
    } else {
      throw new Error('Saldo e limite insuficientes');
    }
  }

  depositarValor(valor) {
    this.saldoConta += valor;
    return this.consultarSaldo();
  }

  reajustarLimite(valor) {
    this.limiteConta += valor;
    return this.limiteConta;
  }

  desativarLimite() {
    this.limiteConta = false;
    return !this.limiteConta;
  }
}

module.exports = ContaBancaria;
