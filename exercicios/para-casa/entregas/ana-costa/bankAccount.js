
class BankAccount {

    constructor(holderName, balance, limit){
        this.holderName = holderName;
        this.balance = balance;
        this.limit = limit;
    }

    getHolderName() {
        return { 
            message: 'Nome de proprietário da conta consultado com sucesso', 
            name: this.holderName 
        }
    };

    getBalance() {
        return {
            message: 'Saldo da conta consultado com sucesso',
            balance: parseFloat(this.balance.toFixed(2))
        }
    }

    getLimit() {
        return {
            message: 'Limite da conta consultado com sucesso',
            limit: this.formattedLimit(this.limit)
        }
    }

    getAllData(){
        return {
            message: 'Dados da conta consultados com sucesso',
            holderName: this.holderName,
            balance: parseFloat(this.balance.toFixed(2)),
            limit: this.formattedLimit(this.limit)
        }
    }

    setLimit(value) {
        if(typeof(value) !== 'number') {
            throw new Error('Digite um número válido')
        }

        this.limit = value;

        return {
            message: 'Limite da conta reajustado com sucesso',
            limit: parseFloat(this.limit.toFixed(2))
        }
    }

    disableLimit(){
        this.limit = 'disabled';

        return {
            message: 'Limite da conta desabilitado com sucesso',
            limit: this.limit
        }
    }

    withdrawal(withdrawalAmount) {
        if(typeof(withdrawalAmount) !== 'number') {
            throw new Error('Digite um número válido')
        }

       if(withdrawalAmount < 0) {
           throw new Error('Digite um valor maior do que 0.00 para realizar o saque');
        }

        if(withdrawalAmount <= this.balance){
            this.balance -= withdrawalAmount;
            return {
                message: 'Saque realizado com sucesso',
                balance: parseFloat(this.balance.toFixed(2))
            };
        } else if (this.limit !== 'disabled' && this.limit >= withdrawalAmount) {
            if(this.balance > 0) {
                const difference = withdrawalAmount - this.balance; 
                this.balance = 0;
                this.limit -= difference
                return {
                    message: 'Saque realizado com sucesso, utilizando saldo da conta disponível e limite',
                    balance: this.balance,
                    limit: this.limit
                };
            }
        } else if (this.limit !== 'disabled' && this.limit < withdrawalAmount) {
            throw new Error(`Limite suficiente.O limite atual é de ${this.formattedLimit(this.limit)}`);
        } else {
            throw new Error('Saldo insuficiente e limite desabilitado!');
        }
    }

    deposit(depositAmount) {
        if(typeof(depositAmount) !== 'number') {
            throw new Error('Digite um número válido')
        }

        if(depositAmount < 0) {
            throw new Error('Digite um valor maior do que 0.00 para realizar o deposito');
        }

        this.balance += depositAmount;

        return {
            message: `Depósito de R$${depositAmount} realizado com sucesso`,
            balance: this.balance
        }
    }

    formattedLimit(limitValue) {
        if (typeof limitValue === 'number') return parseFloat(limitValue.toFixed(2))
        return 'disabled'
    }
}

module.exports = BankAccount;