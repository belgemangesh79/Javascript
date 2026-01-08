function Employee(id) {
  this.empId = id;
}

Employee.prototype.company = "Topper Skills";
Employee.prototype.profile = function () {
  console.log(`Id: ${this.empId}, Company: ${this.company}`);
};

console.log(Employee.prototype);
console.log(Employee.prototype.constructor);
console.log(Employee.prototype.constructor == Employee);

const emp1 = new Employee(11);
const emp2 = new Employee(12);
const emp3 = new Employee(13);
const emp4 = new Employee(14);
const emp5 = new Employee(15);

console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);
console.log(emp5);

emp1.profile();
emp2.profile();
emp3.profile();
emp4.profile();
emp5.profile();


