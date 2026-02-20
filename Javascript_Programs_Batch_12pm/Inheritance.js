class Person   //Parent Class //Super Class //Base Class
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    greet()
    {
        console.log("Hi I am " + this.name)
    }
}

class Employee extends Person //child
{
    constructor(name, age, salary)
    {
        super(name, age)
        this.salary = salary;
    }
    showSalary()
    {
        console.log("Salary : " + this.salary);
    }
}

let emp1 = new Employee("Narmatha", 22, 20000);
emp1.greet();
emp1.showSalary();

class Student extends Person
{
    constructor(name, age, rollno)
    {
        super(name, age);
        this.rollno = rollno;
    }

    showStudentDetails()
    {
        console.log("Student Name: " + this.name + " Age : " + this.age + " Roll No: " + this.rollno)
    }
}

let s1 = new Student("Banu", 12, 101);
s1.showStudentDetails();
s1.greet();
