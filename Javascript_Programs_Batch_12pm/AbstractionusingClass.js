class ATM
{
    withdraw(amount)
    {
        this.#validate(); //#validate is a private method
        console.log(amount + " withdrawn")
    }
    
    #validate()
    {
        console.log("Validating Account");
    }
}

let user1 = new ATM();
user1.withdraw(5000);


