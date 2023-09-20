class ContaDoBanco {
    constructor(nomeDoCliente, saldoInicial, limiteInicial) {
      this.nomeDoCliente = nomeDoCliente;
      this.saldo = saldoInicial;
      this.limite = limiteInicial+saldoInicial;
      this.ativo = true;
    }
  
    consultasaldo() {
      return this.saldo;
    }
  
    deposito(quantidade) {
      if(this.ativo){
      this.saldo = this.saldo + quantidade;
      return this.consultarSaldo();
    }
    else{
      throw new Error('Conta está inativa!')
    }
  }


  //saque
    sacar(quantidade) {
      if (!this.ativo) {
        throw new Error('Conta está inativa!');
      }
  
      if (this.saldo >= quantidade) {
        this.saldo -= quantidade;
  return this.consultasaldo();
      } else if (this.limite >= quantidade && this.ativo) {
// saque usando limite do cheque especial

        this.saldo -= quantidade ;
        return this.consultasaldo();
      } 
      else{
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
  