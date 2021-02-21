// creates employee class
class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = "Employee"
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