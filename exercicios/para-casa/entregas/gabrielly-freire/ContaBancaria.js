class ContaBancaria{
    constructor(nome, saldo, limite){
        this.nome = nome;
        this.saldo = saldo;
        this.limite = limite;
    }

    consultarSaldo() {
        return this.saldo;
    }

    realizarSaque(valor){
        if(valor <= (this.saldo+this.limite)){
            this.saldo-=valor;
        }else{
           throw new Error("Saldo insuficiente")
        }
        return this.consultarSaldo();
    }

    realizarDeposito(valor){
        if(valor>0){
            this.saldo+=valor
        }else{
            throw new Error("Valor inválido");
        }
        return this.consultarSaldo();
    }

    consultarLimite(){
        return this.limite;
    }

    aumentarLimite(valor){
        if(valor>0){
            this.limite += valor;
        }else{
            throw new Error("Valor inválido")
        }
        return this.consultarLimite();
    }

    diminuirLimite(valor){
        if(valor > 0 && valor <= this.limite){
            this.limite -= valor;
        }else{
            throw new Error("Valor inválido")
        }
        return this.consultarLimite();
    }

    desativarLimite(){
        this.limite = 0;
        return this.consultarLimite();
    }

}

module.exports = ContaBancaria;