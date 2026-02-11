//Task 1:

let Student =
{
    name : "Malar",
    rollno : 101,
    course: "CSE",
    isActive: 1
}

console.log(Student.name);
console.log(Student["isActive"]);

//Add & Update Property

let car =
{
    brand: "Toyato",
    model: "Inova"
};

car.year = 2010;
car.model = "Fortuner";

console.log(car.brand);
console.log(car["model"]);

let user = 
{
    name: "Monika",
    greet()
    {
        console.log("Hello");
    },
    address:
    {
     city: "Madurai",
     state: "TN"
    }
};

let patients =
{
    name: "Balu",
    treatment: ["Sugar", "BP", "Cheolestral"]
}


let member =
{
    name: "Narmatha",
    age: 25,
    city: "Chennai"
}

console.log(member);

for(let key in member)
{
    console.log(key); //print key

    console.log(member[key]); //print values
}

 let users = Object.keys(member);

 console.log(users);

 let muser = Object.values(member);

 console.log(muser);

 let nuser = Object.entries(member);

 console.log(nuser);

 //Object.freeze(member);

 member.name = "Jega";

 member.state = "Tamilnadu";


 console.log(member);

 console.log(member.name);

 Object.seal(member);

 member.phone = "575757858";

 member.name = "Ayyapan";

 delete member.age;

 console.log(member);

