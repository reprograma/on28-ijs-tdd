class ContaDoBanco {
  constructor(nomeDoCliente, saldoInicial, limiteInicial) {
    this.nomeDoCliente = nomeDoCliente;
    this.saldo = saldoInicial;
    this.limite = limiteInicial+saldoInicial;
    this.ativo = true;
  }

  consultaSaldo() {
    return this.saldo;
  }

  deposito(quantidade) {
    if(this.ativo){
    this.saldo = this.saldo + quantidade;
    return this.consultaSaldo();
  }
  else{
    throw new Error('Conta está inativa!')
  }
}

sacar(quantidade) {
  if (!this.ativo) {
    throw new Error('Conta está inativa!');
  }else if (this.saldo >= quantidade) {
    this.saldo -= quantidade;
    return this.consultaSaldo();
  }else if (this.limite >= quantidade) {
    this.saldo -= quantidade ;
    return this.consultaSaldo();
  }else{
    throw new Error("Saldo insuficiente!")
  }
}
consultarSaldo() {
  return this.saldo;
}


  desativarConta() {
    this.ativo = false;
  }
}  


module.exports = ContaDoBanco;
