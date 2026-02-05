//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
//console.log(5);
//syntax

//for(initialization; condition; increment/decrement)
//{
    //code
//}



for(let i = 1; i<=100; i++)
{
    console.log(i);
}

//while(condition)
//{
    //code
//}

let i = 6; 

while(i<=5)
{
    console.log(i);
    i++;
}

//do
//{
    //code
//}
//while(condition)



do
{
    console.log(i);
    i++;
}
while(i<=5)

let fruits = ["apple", "orange", "mango"]


//let fruit = "apple"

console.log(fruits);

for(let f of fruits)
{
    console.log(f); //apple //orange //mango
}

let movies = ["Jailer", "Dude", "titanic"]

for(let m of movies)
{
    console.log(m)
}

for(let i = 0; i<=movies.length; i++)
{
    console.log(movies[i]);
}


let student = 
{
    name: "Ram",
    age: "22",
    course: "Javascript"
}

for(let key in student)
{
    console.log(student[key]);
}


for(let i = 1; i<=5; i++)
{
    if(i==3)
    {
        break;
    }
    console.log(i);
}


for(let i = 1; i<=5; i++)
{
    if(i==3)
    {
        continue;
    }
    console.log(i);
}