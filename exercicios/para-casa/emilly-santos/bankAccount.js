class BankAccount{
    constructor(name, balance, limit){
        this.name = name;
        this.balance = balance;
        this.limit = limit;
    }

    balanceOperation(){
        return this.balance
    }

    deposit(deposit){
        this.balance += deposit
        return this.balanceOperation()
    }

    limitReadjustment(newLimit){
        if (newLimit === "desativar") {
           this.limit = null
           return this.limit = "Limite da conta foi desativado";
        } else {
           return this.limit = newLimit
        }
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount
        }else if(this.limit !== null && amount <= this.limit){
            this.balance -= amount
        }else {
            return "Saldo insuficiente"
        }
        return this.balanceOperation()
    }
}

module.exports = BankAccount