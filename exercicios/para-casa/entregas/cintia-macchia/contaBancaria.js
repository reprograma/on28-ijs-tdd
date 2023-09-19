class contaBancaria {
    constructor(nomeTitular, saldo, limite){
        this.nomeTitular = nomeTitular,
        this.saldo = saldo,
        this.limite = limite
    }

    consultarSaldo(){
        return this.saldo 
    }

    consultarSaldoTotal(saldoTotal){
       saldoTotal = this.saldo + this.limite
       return saldoTotal
    }

    fazerDeposito(deposito){
        this.saldo = this.saldo + deposito
        return this.consultarSaldo()       
    }

    fazerSaque(sacar){
        if(sacar <= this.saldo){
           // this.saldo = this.saldo - sacar
           this.saldo = this.saldo - sacar
           return this.saldo
            
        }else if(sacar <= this.saldo + this.limite ){
          
           this.saldo = this.saldo - sacar
           
        } else {
           throw new Error("Saldo Insuficiente")

        }
        return this.consultarSaldo()  
    }
    
    consultarLimite(){
        return this.limite
    }

    aumentarLimite(aumentar){
        this.limite = this.limite + aumentar
        return this.limite
    }

    reduzirLimite(reduzir){
        this.limite = this.limite - reduzir 
        return this.limite
    }

    desativarLimite(){
        this.limite = 0
        return "limite desativado"
    }   
}

module.exports = contaBancaria