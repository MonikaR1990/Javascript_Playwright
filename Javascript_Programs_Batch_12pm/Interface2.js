class Payment //Create interface like a class //Interface concept using class
{
    pay()
    {
        throw new Error("Method 'pay()' must be implemented");
    }

    refund()
    {
        throw new Error("Methood 'refund()' must be implemented");
    }

}


class CreditCardPayment extends Payment
{
pay()
{
    console.log("Amount paid using Credit card")
}

 refund()
 {
    console.log("Refund amount")
 }
}

let cc1 = new CreditCardPayment()

cc1.refund();
cc1.pay();

