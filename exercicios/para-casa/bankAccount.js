class BankAccount {
    constructor(name, initialBalance, overdraftLimit) {
      this.name = name;
      this.balance = initialBalance;
      this.overdraftLimit = overdraftLimit;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      const totalFunds = this.balance + this.overdraftLimit;
      if (amount <= totalFunds) {
        this.balance -= amount;
      } else {
        console.log('Saldo insuficiente para saque.');
      }
    }
  
    setOverdraftLimit(newLimit) {
      if (newLimit < 0) {
        console.log('O limite não pode ser menor que zero.');
      } else {
        this.overdraftLimit = newLimit;
      }
    }
  
    disableOverdraftLimit() {
      this.overdraftLimit = 0;
    }
  
    checkBalance() {
      return this.balance;
    }
  }
  
  module.exports = BankAccount;
  