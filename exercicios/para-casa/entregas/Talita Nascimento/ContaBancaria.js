class ContaBancaria {
    constructor(nomeTitular, saldoDaConta, limiteDaConta) {
        this.nomeTitular = nomeTitular;
        this.saldoDaConta = saldoDaConta;
        this.limiteDaConta = limiteDaConta
    }
    consultarSaldo() {
        return `Saldo disponível em conta: R$${this.saldoDaConta}`
    }

    depositarDinheiroNaConta(valorDepositado) {
        this.saldoDaConta += valorDepositado
        return `Valor R$ ${valorDepositado} depositado com sucesso! Novo saldo: R$${this.saldoDaConta}`
    }

    sacarDinheiroDaConta(valorSacado) {
        let saldoDisponivel = this.saldoDaConta
        let limiteDisponivel = this.limiteDaConta
        let saqueComSaldoDisponivel = saldoDisponivel - valorSacado
        let saqueComLimiteDisponivel = (saldoDisponivel + limiteDisponivel) - valorSacado
        let saldoAposSaqueComLimiteDisponivel = saldoDisponivel - saqueComLimiteDisponivel

        if (valorSacado > saldoDisponivel && valorSacado < limiteDisponivel) {
            return `Tentativa de saque no valor de R$${valorSacado} reais.\nSaldo R$${saldoDisponivel} é insufuciente para este saque. Transação efetivada com R$${limiteDisponivel} do limite. \nSaldo atual: R$${saldoAposSaqueComLimiteDisponivel}\nLimite disponível: R$${saqueComLimiteDisponivel}`
        }
        else if (valorSacado > saldoDisponivel && valorSacado > limiteDisponivel) {
            throw new Error(`Os valores de saldo e limite são insuficientes para esta operação.`)
        }
        saldoDisponivel <= valorSacado
        return `Saque no valor de R$${valorSacado} efetuado com sucesso! Novo saldo: R$${saqueComSaldoDisponivel}`
    }

    ajustarLimiteDaConta(novoValorDeLimite) {
        let valorDeLimite = this.limiteDaConta
        let saldoDisponivel = this.saldoDaConta
        let valorMaximo = valorDeLimite + saldoDisponivel
        let valorMinimo = 0

        if (novoValorDeLimite <= valorMaximo && novoValorDeLimite > valorMinimo) {
            return `Limite ajustado para R$${novoValorDeLimite}`
        } else {
            return `Não foi possível ajustar o limite. \nLimite atual: R$${valorDeLimite} \nSaldo da conta: R$${saldoDisponivel}`
        }
    }

    desativarLimiteDaConta(novoValorDeLimite) {
        if (novoValorDeLimite == 0) {
            return `Limite desativado. Saldo e limite são insuficientes: R$${novoValorDeLimite}`
        }
    }

}

//testes locais, no console
const saldo = new ContaBancaria("talu", 500, 1000)
console.log(saldo.consultarSaldo()) //cenário: consulta (ok)
console.log(saldo.sacarDinheiroDaConta(800)) //cenário: SALDO insuficiente, LIMITE disponível E SUFICIENTE (ok)
console.log(saldo.depositarDinheiroNaConta(50)) //cenário: depósito (ok)
console.log(saldo.sacarDinheiroDaConta(200)) //cenário: saldo disponivel (ok)
console.log(saldo.ajustarLimiteDaConta(20)) //cenário: atualizar valor do limite
console.log(saldo.ajustarLimiteDaConta(15000)) //cenário: erro ao exceder o valor do limite
console.log(saldo.desativarLimiteDaConta(0)) //cenário: desativar limite da conta 
console.log(saldo.sacarDinheiroDaConta(2000)) //cenário: SALDO e LIMITE insuficientes -> cai no throw error esperado (ok)

module.exports = ContaBancaria