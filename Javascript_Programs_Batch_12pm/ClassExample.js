class Employee
{
    
    showDetails() //method no parameter
    {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary)
    }
    
}


let emp1 = new Employee();


emp1.name = "Bala";
emp1.salary = 200000;
emp1.showDetails();




class User //class
{
   

    
    setDetails(name, age) //method with parameter
    {
        this.name = name; //Narmatha
        this.age = age; //22

    }

    display() //method no parameter
    {
        console.log("Name: " + this.name);
        console.log("Age :" + this.age);
    }

}

let user1 = new User();

user1.setDetails("Narmatha", 22);
user1.display();








