class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  increaseSalary(amount) {
    this.salary += amount;
    console.log("Updated Salary:", this.salary);
  }
}

let emp1 = new Employee("Arun", 30000);
emp1.increaseSalary(5000);

