

const Employee = require("./employee.js");
const attempt4 = new Employee;
class Intern extends Employee {
// Intern is an extension of Employee class in Employee javascript folder
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getName(){
        console.log(this.name);
        return this.name;
    }
    getID(){
        console.log(this.id);
        return this.id;
    }
    getEmail(){
        console.log(this.email);
        return this.email;
    }
    getSchool(){
        console.log(this.school);
        return this.school;
    }
    getRole(){
        console.log("Intern");
        return "Intern";
    }
}
// InternForm is a class that inherits from another class called Intern, and it adds HTML code based on user input.

class InternForm extends Intern {
    constructor(name, id, email, school) {
        super(name, id, email, school); 

    }
    //Bring in input from the user and assign it to the block of HTML code underneath. Once it's ready for export, you can attach or append it to any file.
    appendint = (`          
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Intern
      </h2>
    </header>
    <div class="p-3">
    <blockquote class="blockquote text-center">
      <p class="card-body">
      ${this.name}
        <br />
      Employee ID: <br>${this.id}
      <br />
      Email: <a href="mailto:${this.email}">${this.email}</a>
      <br />
      School: ${this.school}
      </p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`);
}

module.exports = InternForm;