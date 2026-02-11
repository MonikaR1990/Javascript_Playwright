let person = 
{
    name: "Kalai",
    age: 30,
    city: "Chennai",
    isWorking: true
}

let Student =
{
    name: "Meena",
    rollno: 101,
    school: "ABC School",
    isPresent: true
}

console.log(Student["school"]);
//Object Literal

let age = 12; //literal way of assigning value to the object


let car = 
{
    brand: "Honda",
    model: "abc",
    price: 12345677
}

let bus = new Object(); //New Keyword based object creation
bus.no = "119G",
bus.depot = "Velacherry" 

function Students(name, rollno)
{
    this.name = name;
    this.rollno = rollno;
}

let s1 = new Students("Anu", 110);
console.log(s1);

let s2 = new Students("Neena", 112);
let s3 = new Students("Leela", 178);
console.log(s2);
console.log(s3);


class Employee
{
    constructor(name, id)
    {
        this.name = name;
        this.id = id;
    }
}

let e1 = new Employee("Mala", 234);
let e2 = new Employee("Bala", 786);
let e3 = new Employee("Sona", 897);

class Mobile
{
    constructor(model, brand, capacity, price)
    {
        this.model = model;
        this.brand = brand;
        this.capacity = capacity;
        this.price = price;
    }
}

let m1 = new Mobile("zeuis", "vivo", "12BH", 28000);


let persons =
{
    name: "Leela",
    age: 12,
    
    greet()
    {
        console.log("Hello");
    }
    
};

let user = Object.create(persons); //inherit
user.greet();
console.log(user.name);

let staff = Object.create(persons);
staff.greet();
console.log(staff.name);

console.log(staff.name); //Dot Notation
console.log(staff.age);

let key = "city";
console.log([key]);


let personData = 
{
    name: "latha",
    age: 12,
    id: 2312,
    city: "Mumbai"
} 

personData.gender = "Female"; //add properites
personData.eduction = "BE"

personData.age = 21; //update properies

console.log(personData.age);
console.log(personData.gender);

delete personData.city;


console.log(personData.city);

let employees =
{
    ename: "Ravi",
    address:
    {
        city: "Mumbai",
        State: "Maharastra",
    }

};

console.log(employees.address);
console.log(employees.address.city);

let StudentsMarks =
{
    name: "Babu",
    marks: [80, 50, 89, 45, 67]
};