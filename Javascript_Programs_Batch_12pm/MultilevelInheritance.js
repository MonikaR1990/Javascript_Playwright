class Animal
{
    eat()
    {
        console.log("eating");
    }

    sleep()
    {
        console.log("sleeping");
    }
}

class Dog extends Animal
{
    bark()
    {
        console.log("barking")
    }
}

class puppy extends Dog
{
    play()
    {
        console.log("playing")
    }
}