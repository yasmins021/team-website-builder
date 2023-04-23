
const fs = require('fs');
const Employee = require("./employee.js");

class Manager extends Employee {

    constructor(name, id, email, number) {
        super(name, id, email); 
        this.number = number;
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
    getNumber(){
        console.log(this.number);
        return this.number;
    }
    getRole(){
        console.log("Employee");
        return "Employee"
    }
}

class ManagerForm extends Manager {
    constructor(name, id, email, number){
    super(name, id, email, number);
    }

    appendmgr =  (`          
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Manager
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
      Phone: ${this.number}</p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`
    );
}
module.exports = ManagerForm;