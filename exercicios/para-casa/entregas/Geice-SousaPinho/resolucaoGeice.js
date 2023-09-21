class ContaBancaria {
    constructor(cliente, agencia, conta, limite, saldo){
        this.cliente = cliente;
        this.agencia = agencia;
        this.conta = conta;
        this.limite = limite;
        this.saldo = saldo;
    }

    verificarSaldo(){
        return this.saldo
    }

    verificarLimite(){
        return this.limite
    }

    sacar(valor){
            if (valor <= this.saldo || valor <= this.limite){
                return valor
            }
            else{
                throw new Error('você não possui saldo suficiente')
            }
    }

    depositar(valor){
        if (valor) return valor
        else{
            throw new Error('houve um erro inesperado, tenve novamente em instantes')
        }
    }

    ajustarLimite(valor){
        let limite
        if (valor <= this.limite){
            limite = valor
            return limite
        }
        if (valor >= this.limite){
            throw new Error('não foi possível ajustar o limite, entre em contato com seu gerente')

        }
    }
}

module.exports = ContaBancaria;
