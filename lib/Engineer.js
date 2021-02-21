// requires/connects necessary constructor functions/modules.
const Employee = require("./Employee");

// Engineer class creation to collect GitHub profile
class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email);
    this.title = "Engineer";
    this.github = github;
  }
  getGitHub(){
    return this.github;
  }
}

module.exports = Engineer;