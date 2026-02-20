class BankAccount
{
    #balance = 0; //private field

    deposit(amount)
    {
        this.#balance += amount;
    }
    withdraw(amount)
    {
        this.#balance -= amount;
    }

    getBalance()
    {
        console.log(this.#balance)
    }

}

let acc = new BankAccount();
acc.deposit(1000);
acc.getBalance();
acc.withdraw(500);
acc.getBalance();