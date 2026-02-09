function add(a, b)
{
    console.log(a+b)
}

add(10,5);


let multiply = 
(a, b) => 
{
    console.log(a*b)
}

multiply(10, 2);

function greet()
{
    console.log("Hello")
}

greet();

let greets = () =>
{
    console.log("Hello")
}

greets();

const msg = () => console.log("Welome");

msg();

function Message()
{
    console.log("Welcome")
}

Message();

function square(a)
{
    return a*a;
}

console.log(square(4)); //16

const squareArea = (a) => 
    {
        return a*a;
    }


console.log(squareArea(5)); //25

const square1 = x => x*x;

console.log(square1(5));

const sum = (a,b) => 
{

    console.log(a+b)
}
sum(10,5);

const isEven = (n) => n%2 === 0;

console.log(isEven(10));

const max = (a, b) => a > b ? a : b ;


console.log(max(10, 5));

//const checkNumber = (n) => n>=0 ? "positive": "negative";

//console.log(checkNumber(-1));

function checkNumber(n)
{
    const num = n>=0 ? "positive" : "negative"
    console.log(num);
}

checkNumber(-9);







