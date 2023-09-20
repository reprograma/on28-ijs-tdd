// Considere um objeto que represente uma conta bancária, a conta possui o nome 
// do titular, o saldo e o limite da conta. 
// É possível fazer operações de consulta de saldo, saque e depósito. 
// No caso de saque é necessário verificar se existe saldo suficiente para retirada, 
// caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível 
// (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. 
// Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.

// Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

class Cliente{
    constructor(nome, saldo, limite){
        this.nome = nome;
        this.saldo = saldo;
        this.limite = limite;
    }   

    consultarSaldo(){
        return this.saldo
    }

    
    deposito(valor){
        this.saldo = this.saldo + valor   
        return this.consultarSaldo()
    }

    ajusteLimite(deposito){
        this.limite = this.limite + deposito;
        return this.limite
    }

    saque(valor){
        let saldoLimite = this.saldo + this.limite;
        if(valor > saldoLimite ){
            throw new Error('Sem saldo disponível para saque')
        }
        else{
            this.saldo = this.saldo - valor 
        }
        return this.consultarSaldo()
    }
}

module.exports = Cliente