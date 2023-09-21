class ContaBancaria{
  constructor(nome, saldo, limite){
    this.nome = nome;
    this.saldo = saldo;
    this.limite = limite;
  }

  consultarSaldo(){
    return this.saldo
  }

  consultarLimite(){
    return this.limite
  }

  sacar(valor){
    if(valor > this.saldo && valor <= this.limite){
      this.saldo = this.limite - valor
    }else{
      this.saldo = this.saldo - valor
    }
    return this.consultarSaldo()
  }

  depositar(valor){
    this.saldo = this.saldo + valor
    return this.consultarSaldo()
  }

  aumentarLimite(valor){
    this.limite = this.limite + valor
    return this.consultarLimite()
  }

  diminuirLimite(valor){
    this.limite = this.limite - valor
    return this.consultarLimite()
  }

  desativarLimite(){
    this.limite = 0
    return this.consultarLimite()
  }
}

const conta = new ContaBancaria("Melina", 800, 350)

module.exports = ContaBancaria