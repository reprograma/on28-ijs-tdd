class ContaBancaria {
    constructor(titular, saldoAtual, limiteExtraParaSaque) {
        this.titular = titular;
        this.saldoAtual = saldoAtual;
        this.limiteExtraParaSaque = limiteExtraParaSaque;
    }

    validarLimiteExtraParaSaque(limiteExtraParaSaque) {
        if (limiteExtraParaSaque < 0) {
            throw new Error('Valor Limite Não Pode Ser Negativo');
        }
    }

    consultarSaldoAtual() {
        return this.saldoAtual;
    }

    depositarValor(valorDaOperacao) {
        return this.saldoAtual += valorDaOperacao;
    }

    retirarValor(valorDaOperacao) {

        if ((this.saldoAtual + this.limiteExtraParaSaque) < valorDaOperacao) {
            throw new Error('Saldo insuficiente');
        } else {
            this.saldoAtual -= valorDaOperacao;
        }

        return this.consultarSaldoAtual()
    }

}

module.exports = ContaBancaria