let name1 = "Monika";
let name2 = "Jega";
let name3 = "Narmatha";

//let name = "Monika", "Narmatha", "Jega"; //Not able store multiple value in single array

let nameList = ["Monika", "Narmatha", "Jega",12, true];



//Array



const name = ["Monika", "Narmatha", "Jega", 12, true];

console.log(name);

let fruits = ["Mango", "Orange", "Apple", "Guva"]; //Array Literal

console.log(fruits[3]);

let animals = new Array("Dog", "Cat", "Cow"); //New KeyWord

console.log(fruits.length); //4 - count

fruits[0] = "Banana"; //Modify value

console.log(fruits);

fruits.push("Papaya");

console.log(fruits); //push end add element

fruits.unshift("Mango");

console.log(fruits); //unshift Start add element

fruits.pop();

console.log(fruits); //pop remove end element

fruits.shift();

console.log(fruits); //shift remove start element

for(let i = 0; i<fruits.length; i++)
{
    console.log(fruits[i]);
}

for(let f of fruits)
{
    console.log(f);
}

//Important method

//Indexof

console.log(fruits.indexOf("Apple"));  //Element Index
console.log(fruits.includes("Mango")); 

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(1, 3));
 //startIndex = 1; (include)
 //endIndex = 3; (exclude)

 console.log(numbers);

 console.log(numbers.splice(1,3));
 console.log(numbers);


 let a = [1, 3];

 let b = [4, 6];

 let c = a.concat(b);

 console.log(c);

 let message = ["Hello", "World", "Javascript"];
 console.log(message.join("-"));

 let num = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]; 
 let result = num.map(n => n*2); //new Array create when we map
 console.log(result);

 let result2 = num.filter(m=> m>1);
 console.log(result2);

let result3 = num.filter(m=>m%2==0);
console.log(result3);

let sum = numbers.reduce((total, n)=>total + n, 0)
console.log(sum);

let check1 = num.find(m=>m>5);
console.log(check1); //first matching value

let check2 = num.filter(m=>m>5);
console.log(check2); //all values filter

let vegs = ["Carrot", "Beans", "Onion", "Tomota"];
console.log(vegs.sort());





//fruits[2]

// Banana
// Orange
// Apple
// Guva






