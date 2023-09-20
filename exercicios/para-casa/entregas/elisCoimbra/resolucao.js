/*
Exercicio Proposto: Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, 
o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é 
necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação,
 mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o 
 saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green
  - Refactor para desenvolver essa aplicação.
*/

class Conta{
    
    constructor(nome, saldo, limite, limiteAtivado){
        this.nome = nome;
        this.saldo = saldo;
        this.limite = limite;
        this.limiteAtivado = limiteAtivado;
    }

    consultarSaldo(){
        return this.saldo;
    }
    consultarLimite(){
        return this.limite;
    }
    fazerDeposito(quantidade){
        this.saldo = this.saldo+quantidade
        return this.consultarSaldo()
    }
    fazerSaque(quantidade){
        if(quantidade <= this.saldo){
            console.log('O seu saldo é suficiente')
            this.saldo = this.saldo - quantidade 
            return this.saldo;
        
        } else if((quantidade < this.saldo+ this.limite) ){
            console.log('O seu saldo não foi o suficiente, parte do seu limite foi usado')
            this.limite = this.limite - (quantidade - this.saldo)
            this.saldo = 0
            return this.saldo;
                 
        } else {
            return "O seu saldo e limite não é o suficiente para realizar o saque"     
        }  
    }
    ativacaoLimiteEspecial(bin){
        if(bin ==='sim'){
           this.limiteAtivado = true
            return "Limite especial ativado"
        }else{
            this.limiteAtivado = false 
            return "Limite especial desativado"
        }
    }
    ajustarLimite(valorDeAjuste){
        this.limite = this.limite + valorDeAjuste
        if(this.limite<0){
            this.limite =0
        }
        return this.limite 
       }

    


}

module.exports= Conta
const cliente = new Conta('elis', 20, 50, true)

console.log(cliente)
 console.log(cliente.consultarSaldo())
 console.log(cliente.fazerSaque(60))
 console.log(cliente.ajustarLimite(-15))