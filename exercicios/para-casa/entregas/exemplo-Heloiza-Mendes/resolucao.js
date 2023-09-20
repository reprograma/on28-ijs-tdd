/* Exercicio Proposto: Considere um objeto que represente uma conta bancária, 
a conta possui o nome do titular, o saldo e o limite da conta. 
 
É possível fazer operações   de consulta de saldo, saque e depósito. 
 
No caso de saque é necessário verificar  se existe saldo suficiente para retirada, caso o cliente não tenha 
saldo suficiente para a operação, mas possua limite disponível (e suficiente), 
o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. 
 
Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.
 
Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

- Subir suas alterações (git add, git commit e git push) para a sua branch que vc criou 
com o seu nome
- Abrir o seu Pull Request no Github
- Anexar o link do seu Pull Request na parte de “Meu exercício“ dentro do seu cartão do Trello
*/


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

    depositarDinheiro(quantidade) {
        this.saldo = this.saldo + quantidade
        return this.consultarSaldo()
    }

    sacarDinheiro(quantidade) {
        if (quantidade <= this.saldo) {
            //tirar do saldo
            this.saldo = this.saldo - quantidade;
            return this.consultarSaldo();

        }

        else if (quantidade <= (this.limite + this.saldo)) {
            this.saldo = this.saldo - quantidade
            console.log("Você utilizou o limite e seu saldo ficou negativo")
            return this.consultarSaldo();

        } else {
            throw new Error("Não foi possível sacar : 'Saldo insuficiente e limite indisponível")
        }

    }

    atualizarLimite(quantidade) {
        this.limite = this.limite + quantidade
        return this.consultarLimite()
    }
}





const contaUsuario = new ContaBancaria("Heloiza", 1000, 200)
console.log("1 Mostrar dados da conta bancaria do usuário: ", contaUsuario)
console.log("2 Mostrar saldo  da conta bancaria do usuário: ", contaUsuario.consultarSaldo())
console.log("9, Consultar limite ", contaUsuario.consultarLimite())
console.log("3 Depositar R$ 500,00 e mostrar saldo atual: ", contaUsuario.depositarDinheiro(500))
console.log("4 Mostrar saldo  da conta bancaria do usuário: ", contaUsuario.consultarSaldo())
console.log("5 Retirar R$ 1000,00  da conta bancaria do usuário e mostrar saldo atual: ", contaUsuario.sacarDinheiro(1000))
console.log("6 Mostrar saldo  da conta bancaria do usuário: ", contaUsuario.consultarSaldo())
console.log("7, Retirei R$ 600,00 (500,00 da conta e R$ 100,00 do limite, mostrar saldo negativo : -100)  da conta  mostrar saldo atual: ", contaUsuario.sacarDinheiro(600))
// console.log("8, Saquei acima do (limite + saldo)", contaUsuario.sacarDinheiro(800)) 

// console.log("9, Consultar limite ", contaUsuario.atualizarLimite(200))
console.log("9, Consultar limite ", contaUsuario.atualizarLimite(-200))

module.exports = ContaBancaria