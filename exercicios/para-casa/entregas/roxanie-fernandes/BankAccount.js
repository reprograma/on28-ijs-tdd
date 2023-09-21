class BankAccount {
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

    sacarValor(valor) {
        if(valor <= this.saldo){
            this.saldo -= valor;
        } else if(valor <= this.saldo + this.limite) {
            this.saldo -= valor
            this.limite -= (valor - this.saldo)
        } else {
            throw new Error('Você não possui saldo ou limite suficiente')
        }
        return this.consultarSaldo()
    }

    depositarValor(valor) {
        this.saldo = this.saldo + valor
        return this.consultarSaldo()
    }

    ajustarLimite(novoLimite) {
        this.limite = novoLimite
        return this.consultarLimite()
    }

    desativarLimite() {
        this.limite = 0
        return this.consultarLimite()
    }
}

const conta = new BankAccount("Roxanie", 5000, 1000)

// console.log(conta);
// console.log(consultarSaldo.saldo);
// console.log(conta.saque(5500));
// console.log(conta);
// console.log(conta.deposito(200));
// console.log(conta.novoLimite(7000));
// console.log(conta.desativaLimite());


module.exports = BankAccount;