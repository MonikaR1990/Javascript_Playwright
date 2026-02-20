class BankAccount
{   #username = "Narmatha";
    #balance = 100; //private property
  
    getBalance()
    {
        return this.#balance;
    }

    getUsername()
    {
        return this.#username; //Narmatha
    }
  

}

let user1 = new BankAccount();
console.log(user1.getUsername());
console.log(user1.getBalance());

class Mobile
{
    #battery = 100;

    getBattey()
    {
        return this.#battery;
    }

}

let phone1 = new Mobile();
console.log(phone1.getBattey());

class Fan
{
    #speed = 0;

    turnOn()
    {
        this.#speed = 3;
        console.log("Fan is ON")
    }
    getSpeed()
    {
        return this.#speed;
    }
}

let fan1 = new Fan();
fan1.turnOn();
console.log(fan1.getSpeed());