//Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. 
//É possível fazer operações de consulta de saldo, saque e depósito. 
//No caso de saque é necessário verificar se existe saldo suficiente para retirada, 
//caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, 
//nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. 
//Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

class contaBancaria{
  constructor(nome, saldo, limite){
    this.nome = nome;
    this.saldo = saldo;
    this.limite = limite;
    this.limiteAtivo = true;
  }

  consultarSaldo(){
    return this.saldo;
  }

  sacar(valor){
    if(valor <= this.saldo){
      this.saldo = this.saldo - valor
    }else {
      if(valor <= this.saldo + this.limite && this.limiteAtivo){
        this.saldo = this.saldo - valor
        this.limite = this.limite - valor
      }else{
        throw new Error("Saldo insuficiente")
      }
    }
    return this.consultarSaldo()
  }

  depositar(valor){
    this.saldo = this.saldo + valor
    return this.consultarSaldo()
  }

  ativarLimite() {
    this.limiteAtivo = true;
    return "Limite da conta ativado com sucesso";
  }

  desativarLimite() {
    this.limiteAtivo = false;
    return "Limite da conta desativado com sucesso";
  }

  reajustarLimiteMais(novoLimite) {
    if (novoLimite > this.limite) {
      this.limite = novoLimite;
      return `Limite ajustado para ${novoLimite}`;
    } else {
      throw new Error("O novo limite deve ser maior que o limite atual");
    }
  }

  reajustarLimiteMenos(novoLimite) {
    if (novoLimite < this.limite) {
      this.limite = novoLimite;
      return `Limite ajustado para ${novoLimite}`;
    } else {
      throw new Error("O novo limite deve ser menor que o limite atual");
    }
  }

}

const Erika = new contaBancaria("Erika", 1000, 2000)

console.log(Erika.reajustarLimiteMenos(1000))
console.log(Erika)

module.exports = contaBancaria;