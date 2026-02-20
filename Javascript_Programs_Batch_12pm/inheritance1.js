class Animal //Parent
{
    eat()
    {
        console.log("Eating");
    }
}


class Dog extends Animal
{
    
    bark()
    {
        console.log("Barking");
    }
}

let d = new Dog();
d.bark();
d.eat();

class cat extends Animal
{
    meow()
    {
        console.log("meowing");
    }
}

let c = new cat();
c.eat();
c.meow();



