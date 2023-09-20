class ContaBancaria {
    constructor(nomeTitular, saldoInicial, limite) {
        this.nomeTitular = nomeTitular;
        this.saldo = saldoInicial;
        this.limite = limite;

    }

    nomeTitular() {
        return this.nomeTitular;
    }

    consultarSaldo() {
        return this.saldo;
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error('O valor do depósito deve ser maior que zero.');
        }
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new Error('O valor do saque deve ser maior que zero.');
        }

        const saldoDisponivel = this.saldo + this.limite;

        if (valor > saldoDisponivel) {
            throw new Error('Saldo insuficiente e limite indisponível.');
        }

        this.saldo = valor > this.saldo ? 0 : this.saldo - valor;
        if (valor > this.saldo) {
            this.limite -= valor - this.saldo;
        }
    }


    reajustarLimite(novoLimite) {
        if (novoLimite < 0) {
            throw new Error('O novo limite deve ser maior ou igual a zero.');
        }
        this.limite = novoLimite;
    }

    obterLimite() {
        return this.limite;
    }
}

module.exports = ContaBancaria;
