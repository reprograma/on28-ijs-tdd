class ContaBancaria {
    constructor(nome, saldo, limite) {
        this.nome = nome;
        this.saldo = saldo;
        this.limite = limite;
    }

    consultarSaldo() {
        return this.saldo
    }
    consultarLimite() {
        return this.limite
    }

    deposito(valor) {
        if (valor <= 0 || valor === null) {
            throw new error("O valor do depósito não pode ser 0 ou estar em branco")
        }
        this.saldo = this.saldo + valor
        return this.consultarSaldo()
    }

    saque(valor) {
        let limiteAtivado = this.limite > 0
        if (limiteAtivado) {
            if (valor > this.saldo && valor < this.limite) {
                valor - this.limite
            }
            if (valor > this.limite) {
                throw new Error('Limite insuficiente')
            }
            else {
                this.saldo = this.saldo - valor
            }
            return this.consultarSaldo()
        } else {
            throw new Error('Não é possível realizar movimentações com o limite desativado')
        }
    }

    aumentarLimite(valor) {
        let limiteAtivado = this.limite > 0
        if (limiteAtivado) {
            this.limite += valor
            return this.consultarLimite();
        } else {
            throw new Error('O limite não está ativado')
        }
    }

    diminuirLimite(valor) {
        let limiteAtivado = this.limite > 0
        if (limiteAtivado) {
            this.limite -= valor
            return this.consultarLimite();
        } else {
            throw new Error('O limite não está ativado')
        }
    }

    desativarLimite(valor) {
        if (valor === 0) return ('limite desativado')

        return ('limite ativado')
    }
}

const conta1 = new ContaBancaria("Beatriz", 500, 1000)

console.log(conta1)
console.log(conta1.deposito(2))
console.log(conta1)
console.log(conta1.saque(600))
console.log(conta1.consultarSaldo())
console.log(conta1.aumentarLimite(2000))
console.log(conta1.diminuirLimite(3000))
console.log(conta1.desativarLimite(0))

module.exports = ContaBancaria