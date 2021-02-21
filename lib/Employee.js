// creates employee class
class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email; 
    this.title = "Employee"
    // if (this.role = "Manager"){
    //   this.managerName = name;
    //   this.managerId = id;
    //   this.managerEmail = email;
    //   this.title = "Manager";
    // } else if (this.role = "Engineer") {
    //   this.engineerName = name;
    //   this.engineerId = id;
    //   this.engineerEmail = email;
    //   this.title = "Engineer";
    // } else if (this.role = "Intern") {
    //   this.internName = name;
    //   this.internId = id;
    //   this.internEmail = email;
    //   this.title = "Intern";
    // }
  }
  // returns employee name 
  getName() {
    return this.name;
  }
  // returns employee ID
  getId() {
    return this.id;
  }
  // returns employee email
  getEmail() {
    return this.email;
  }
  // reurns employee role
  getRole() {
    return this.title;
  }


}

module.exports = Employee 