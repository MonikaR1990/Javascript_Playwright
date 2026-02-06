function sayHello()
{
    console.log("Hello");
}

sayHello();

function add(a, b)
{
    console.log(a+b); //30
}

add(10, 2);

function greet(name)
{
    console.log(name);
}

greet("Narmatha");


function triangle(l, b, h)
{
    console.log(l*b*h);
}

triangle(12, 10, 9);

function multiply(a, b)
{
    return a*b; 
}

console.log(multiply(10,2));



let result = multiply(10,2);
let finalResult = result*2;
console.log(finalResult);

function mul(a, b)
{
    console.log(a*b);
}

let res1 = mul(10,2);
let res2 = res1 * 2;
console.log(res2);


let subtract = function(a, b)
{
    return a- b;
}

console.log(subtract(10,5));

function greetings()
{
    return "Good Morning"
}

function displayMessage()
{
    console.log(greetings()+ " everyone");
}

displayMessage();

function calculateTotalPrice(price, quantity)
{
    return price * quantity;
}

let totalPrice = calculateTotalPrice(500, 5);
console.log("Total Amount: " + totalPrice);

function calculatePrice(price, quantity)
{
    console.log(price*quantity);
}
calculatePrice(500, 5);

function printNumber(num)
{
    console.log("Number is " + num);
}

for(let i = 1; i<=5; i++)
{
    printNumber(i);
}
