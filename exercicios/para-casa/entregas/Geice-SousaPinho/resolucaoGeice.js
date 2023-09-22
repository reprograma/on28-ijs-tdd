class ContaBancaria {
    constructor(cliente, agencia, conta, limite, saldo){
        this.cliente = cliente;
        this.agencia = agencia;
        this.conta = conta;
        this.limite = limite;
        this.saldo = saldo;
    }

    verificarSaldo(){
        return `Saldo disponível: R$ ${this.saldo}`
    }

    verificarLimite(){
        return `Limite disponível: R$ ${this.limite}`
    }

    sacar(valor){
            if (valor <= this.saldo || valor <= this.limite){
                return `${valor} foi sacado. \n O saldo atual é: R$ ${valor + (- this.saldo)}`
            }
            else{
                throw new Error('Você não possui saldo suficiente')
            }
    }

    depositar(valor){
        if (valor) return `${valor} foi depositado. \n O saldo atual é: R$ ${valor + this.saldo}`
        else{
            throw new Error('Houve um erro inesperado, tenve novamente em instantes')
        }
    }

    ajustarLimite(valor){
        let novoLimite
        if (valor <= this.limite){
            novoLimite = valor + (- this.limite)
            return `Limite ajustado com sucesso! Limite disponível: R$${novoLimite}`
        }
        if (valor >= this.limite){
            throw new Error('Não foi possível ajustar o limite, entre em contato com seu gerente')

        }
    }
}

module.exports = ContaBancaria;
