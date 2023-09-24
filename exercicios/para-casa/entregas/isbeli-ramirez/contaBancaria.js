// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta.

// É possivel fazer operações de consulta de saldo, saque e deposito. 

// No caso de saque é necesario verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, 

//mas possua limite disponivel (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. 
//Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.

// Use a abordagem Red - Green - Refactor para desenvolver essa aolicação.

// ----------------------------------------------------------------
// Conta bancaria : nomeDoTitular, saldo, limiteDeConta
// Consulta: consultaDeSaldo, consultaDeSaque,consultaDeDeposito,
// limiteDeConta: + - 0

class contaBancaria {
    constructor (nomeDoTitular, saldo, limiteDeConta){
        this.nomeDoTitular = nomeDoTitular;
        this.saldo = saldo;
        this.limiteDeConta = limiteDeConta

    }

    consultaDeSaldo(){
        console.log("Seu saldo é:")
        return this.saldo
    }
    

    deposito(dinhero) {
        this.saldo = this.saldo + dinhero
        console.log(`Foi depositado " ${dinhero} com susseso!`)

        return this.consultaDeSaldo()
    }

    saque(dinhero) {

        let valorRetiro = dinhero
        if ( valorRetiro <= (this.saldo + this.limiteDeConta)) {
            this.saldo = this.saldo - dinhero
            if (this.saldo < 0) {
                console.log("Foi usado seu limite de conta nesse retiro")
                this.limiteDeConta = this.limiteDeConta + this.saldo
                //console.log(`Seu limite  e  ${this.limiteDeConta} `)
            }
                //console.log(`Seu saldo e  ${this.saldo}`)
        } else {
            console.log("Saldo indisponivel para retiro ")
        }
    } 
}

const banco = new contaBancaria("Isbeli", 500, 2000)
    // console.log(banco.consultaDeSaldo())
    // console.log(banco.deposito(150))
    // banco.saque(35)
    // console.log(banco)

    module.exports = contaBancaria