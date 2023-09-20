class contaBancaria {
    constructor(titular, saldo, limite) {
        this.titular = titular;
        this.saldo = saldo;
        this.limite = limite;
    }

    // consulta de saldo
    consultarSaldo() {
        return this.saldo
    }

    // consulta de limite
    consultarLimite() {
        return this.limite
    }

    // consulta de saque
    realizarSaque(valor) {
        if(valor <= this.saldo && valor <= this.limite){
            return "Saque realizado com sucesso"
        }else if(valor > this.saldo || valor <= this.limite) {
            return "Saque realizado com sucesso"
        }else {
            throw new Error('Saque não realizado por falta de saldo ou de limite')
        }
    }

    // consulta de depósito
    realizarDeposito(valor) {
        if(valor <= 0){
            throw new Error('O valor precisa ser maior que 0')
        }
        
        return this.saldo = valor + this.saldo
    }
}

module.exports = contaBancaria
