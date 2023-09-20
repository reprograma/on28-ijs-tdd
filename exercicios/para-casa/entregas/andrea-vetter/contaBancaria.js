class contaBancaria {
  constructor(nome, saldo, limite, temlimite) {
    (this.nome = nome),
      (this.saldo = saldo),
      (this.limite = limite),
      (this.temLimite = temlimite);
  }

  // consulta de saldo
  consultarSaldo() {
    return this.saldo;
  }

  // depósito
  deposito(quantidade) {
    this.saldo = this.saldo + quantidade;
    return this.consultarSaldo();
  }

  // saque
  saque(quantidade) {
    if (quantidade > this.saldo + this.limite && this.temLimite) {
      throw new Error("Saldo e limite insuficientes.");
    } else if (quantidade > this.saldo && this.temLimite === false) {
      throw new Error("Saldo insuficiente. Seu limite está desabilitado.");
    } else this.saldo = this.saldo - quantidade;

    return this.consultarSaldo();
  }

  //consulta de limite
  consultarLimite() {
    if (this.temLimite) return this.limite;
    throw new Error("Limite indisponível.");
  }

  //consulta se limite é disponível
  consultarTemLimite() {
    if (this.temLimite) return "Você tem limite!";
    return "Você não tem limite disponível...";
  }

  //aumentar limite 
  aumentarLimite(quantidade) {
    if (this.temLimite) {
      this.limite = this.limite + quantidade;
      return this.limite;
    }
    throw new Error("Limite indisponível.");
  }

  //diminuir limite
  diminuirLimite(quantidade) {
    if (!this.temLimite) {
      throw new Error("Limite indisponível.");
    } else if (quantidade > this.limite && this.temLimite) {
      throw new Error("Quantidade de limite insuficiente.");
    } else this.limite = this.limite - quantidade;

    return this.consultarLimite();
  }
}

const andrea = new contaBancaria("Andrea", 5, 10, true);

console.log(andrea.consultarTemLimite());
console.log(andrea.saque(10));

module.exports = contaBancaria;
