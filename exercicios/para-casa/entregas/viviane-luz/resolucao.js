class ContaBancaria {
    constructor(nome, saldo, limite){
     this.nome = nome;
     this.saldo = saldo;
     this.limite = limite;
    }

    consultarLimite() {
        return this.limite
    }

    consultarSaldo() {
        return this.saldo;
       }

       fazerDeposito(valor) {
        
            this.saldo += valor;
            return `Depósito de: R$${valor} realizado. Novo saldo: R$${this.saldo}`; 
    }

    fazerSaque(valor) {
        if (valor > 0) {
           if(valor <= this.saldo){
            this.saldo -= valor;
            return ` Saque de valorR${valor}realizado. Novo saldo: R$${this.saldo}`; 
        } else if (valor <= this.saldo + this.limite){

            this.limite -= (valor - this.saldo);
            this.saldo = 0;
            return `Você sacou o limite. Novo saldo: R$${this.saldo}, Novo limite: R$${this.limite}`;
            } else {

                return 'Saldo insuficiente e limite indisponível';
            }
                   
        } else {
            return 'Valor inválido';
        }
    }

    ajustarLimite(novoLimite) {
        if (novoLimite >= 0 && novoLimite >= this.saldo){
            this.limite = novoLimite;
            return `Limite ajustado para R$${novoLimite}`;
        }else{
            return 'Novo limite inválido. O limite não pode ser menor que saldo atual';
        }
    }

    desativarLimite() {
        this.limite = false;
        return 'Limite desativado';
    }
}

module.exports = ContaBancaria

    const conta = new ContaBancaria("Viviane", 150, 500);

    console.log(conta.limite);
    console.log(conta.consultarSaldo());
    console.log(conta);
    console.log(conta.fazerSaque(40));
    console.log(conta.consultarSaldo());
    console.log(conta.desativarLimite());
    console.log(conta.ajustarLimite(1000));
    console.log(conta.fazerSaque(600));




    
