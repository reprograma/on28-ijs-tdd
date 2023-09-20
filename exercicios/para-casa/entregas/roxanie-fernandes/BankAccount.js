// No caso de saque é necessário verificar se existe saldo 
// suficiente para retirada, caso o cliente não tenha 
// saldo suficiente para a operação, mas possua limite disponível 
// (e suficiente), o saque poderá ocorrer, nesses casos o saldo 
// do cliente ficará negativo após o saque. Além disso, 
// o limite de uma conta pode ser reajustado 
// (para mais e para menos) ou desativado.

// // Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

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

    saque(valor) {
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

    deposito(valor) {
        this.saldo = this.saldo + valor
        return this.consultarSaldo()
    }

    novoLimite(novoLimite) {
        this.limite = novoLimite
        return this.consultarLimite()
    }

    desativaLimite() {
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