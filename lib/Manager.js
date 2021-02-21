// requires/connects necessary constructor functions/modules.
const Employee = require("./Employee");

// creates manager class constructor function
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.title = "Manager";
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;