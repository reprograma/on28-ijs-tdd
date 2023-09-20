class ContaBancaria {
  constructor(titular, saldo, limite) {
    this.titular = titular;
    this.saldo = saldo;
    this.limite = limite;
  }

  consultarSaldo() {
    return this.saldo;
  }

  desativarConta(ativa) {
    if(ativa === false) {
        return this.limite = "Limite Desativado"
    }
    return this.limite
  }

  consultaLimite(){
    return this.limite
  }

  realizaSaque(valorDoSaque) {
    let limiteTotalDaConta = this.saldo + this.limite

    if(this.saldo < valorDoSaque) {
        if(limiteTotalDaConta < valorDoSaque) {
            return "Limite indisponível"
        }
        limiteTotalDaConta -= valorDoSaque

        return this.saldo -= valorDoSaque
    }
    if(this.saldo >= valorDoSaque) {
        return this.saldo -= valorDoSaque
    }
  }

  realizarDeposito(valor) {
    return this.saldo = this.saldo + valor
  }

  ajustaLimite(novoLimite) {
    if (!this.desativarConta() === "Limite Desativado") {
      this.limite = novoLimite;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = ContaBancaria