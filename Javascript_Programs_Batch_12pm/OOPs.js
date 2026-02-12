//OBject Oriented Programming Language

//Object
//Class
//Inheritance
//Polymorpism
//Abstraction
//Encapsulation

//Class is template or blueprint

class Student
{
    constructor(name, rollno, age)
    {
        this.name = name; //Latha
        this.rollno = rollno; //101
        this.age = age;    //22
    }

    studentDetails()
    {
        console.log("Student Information " + this.name + " - " +  this.rollno + " - " + this.age);
    }
}

let s1 = new Student("Latha", 101, 22);
s1.studentDetails();

class Employee
{
    name = "Mala";
    id = 101;

    display()
    {
        console.log(this.name +  " - " + this.id);
    }
}

let e1 = new Employee();
e1.display();
