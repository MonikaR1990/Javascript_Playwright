//Poly = Many

//2 types of Polymorphism
// 1. Compile time Polymorphism //Doesn't support compile time polymorpshim //Method Oveloading
// 2. Runtime Polymorphism //Method Overriding


class Animal
{
    sound()
    {
        console.log("Making Sound");
    }
}

class Dog extends Animal
{
    sound()
    {
        console.log("Barking")
    }
}

class cat extends Animal
{
    sound()
    {
        console.log("Meow");
    }
}


let d = new Dog();
d.sound();


let c = new cat();
c.sound();