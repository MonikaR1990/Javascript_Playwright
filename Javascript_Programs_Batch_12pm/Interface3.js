//Interface using Object 

function processPayment(payment)
{
    payment.pay();   
    //payment.returned();
}


let upiPayment =
{
    returned: function()
    {
        console.log("Product returned")
    }
}

let cardPayment =
{
    pay: function()
    {
        console.log("Paid using Card")
    }
}

let cashPayment =
{
    amount: 500
}

processPayment(upiPayment);
