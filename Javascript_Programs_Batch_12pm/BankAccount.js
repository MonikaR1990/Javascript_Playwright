class BankAccount
{
    constructor(accountHolder, balance)
    {
        this.accountHolder = accountHolder; //"Narmatha"
        this.balance = balance; //5000
    }

    depostit(amount) 
    {   
        this.balance += amount;  
        console.log("Your Balance: " + this.balance);
    }
    withdraw(amount)
    {
        this.balance -= amount;
        console.log("Your Balance: " + this.balance)
    }


}

let ba1 = new BankAccount("Narmatha", 5000);
ba1.depostit(1000);
ba1.withdraw(5000);