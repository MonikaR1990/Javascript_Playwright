// Interface (Base Class)
class PaymentInterface 
{
    pay(amount) {
        throw new Error("Method 'pay()' must be implemented");
    }
}

// Child Class 1
class CreditCard extends PaymentInterface {
    pay(amount) {
        console.log("Paid " + amount + " using Credit Card");
    }
}


// Child Class 2
class UPI extends PaymentInterface {
   
}

// Usage
let p1 = new CreditCard();
p1.pay(1000);

let p2 = new UPI();
p2.pay(500);