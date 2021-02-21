// requires/connects necessary constructor functions/modules.
const Employee = require("./Employee");

// Intern creation
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title = "Intern";
  }
  // returns school that is input
  getSchool() {
    return this.school
  }
}

module.exports = Intern;