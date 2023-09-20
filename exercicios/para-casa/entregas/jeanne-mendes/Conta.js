class Conta{
    constructor(nomeTitular, saldo, limiteConta){
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
        this.limiteConta = limiteConta;
    }

    consultarSaldo(){
        return this.saldo
    }

    alterarLimite(valor){
        this.limiteConta = this.limiteConta + valor;
        if (this.limiteConta < 0){
            return 0
        }
        return this.limiteConta;
    }

    sacarDinheiro(valor){
        if (valor > this.saldo){
            if(valor > this.limiteConta){
                return "Saque não realizado. Limite insuficiente";
            } else{
                this.saldo = this.saldo - valor;
            }
        } else{
            this.saldo = this.saldo - valor;
        }

        return this.saldo;
    }

    depositarDinheiro(valor){
            
        this.saldo = this.saldo + valor;
        return this.saldo;

    }

    

}

module.exports = Conta