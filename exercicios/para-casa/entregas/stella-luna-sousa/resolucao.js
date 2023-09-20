class ContaBancaria {

    constructor(titular, saldo, limite, limiteAtivo = true) {
        this.titular = titular;
        this.saldo = saldo;
        this.limite = limite;
        this.limiteAtivo = limiteAtivo;
    }

    consultarSaldo = () => `Olá ${this.titular}! Seu saldo é de R$${this.saldo}.`;

    realizarSaque(valorSaque) {
        if(valorSaque <= 0) throw new Error("O valor do saque deve ser maior que zero.");

        if(this.saldo >= valorSaque || this.limiteAtivo && this.limite >= (valorSaque - this.saldo)) return this.saldo -= valorSaque;
        else throw new Error("Saldo insuficiente."); 
    }

    realizarDeposito(valorDeposito) {
        if(valorDeposito <= 0) throw new Error("O valor do depósito deve ser maior que zero.");
        return this.saldo += valorDeposito;
    }

    ajustarLimite(novoLimite) {
        if(!this.limiteAtivo) throw new Error("O valor do limite não pode ser reajustado pois o limite está desativado.");
        if(novoLimite < 0) throw new Error("O limite não pode ser menor que zero.");

        return this.limite = novoLimite;
    }

    //desativa ou ativa o limite
    alternarLimite = (valor) => this.limiteAtivo = valor;

}

module.exports = ContaBancaria;