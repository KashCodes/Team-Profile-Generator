// Requirement initiators
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlTemp");
const validator = require("email-validator");

const teamArray = [];
const teamIdArray = [];
let teamString = ``;

const runAllPrompts = () =>{
 

// function for manager prompts - team manager's name, employee ID, email address, and office number
const managerPrompts = () =>{
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the Manager's name?",
      validate: function validateManagerName(managerName){
        return managerName !== '';
      }
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter the Manager's ID: ",
      validate: function validateName(managerId){
        return managerId !== '';
      }
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter the Manager's email address: ",
      // Here's where the email validation occurs via email-validator
      validate: function validateManagerEmail(managerEmail){
        return validator.validate(managerEmail);
      }
    },
    {
      type: "input",
      name: "managerOffice",
      message: "Enter the Manager's office number: ",
      // Here's where the email validation occurs via email-validator
      validate: function validateManagerOffice(managerOffice){
        return managerOffice !== '';
      }
    },
  ])
  // add additional questions and email address, and office number, add to const manager. 
  .then(response => {
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
    teamArray.push(manager);
    teamIdArray.push(answers.managerID);
    addEmployee();
  })
};


// function to add employee - Engineer or intern? 
const addEmployee = () => {
inquirer.prompt([
  {
    type: "list",
    name: "role",
    message: "Would you like to add another employee? ",
    choices: [
      "Yes",
      "No"
    ]
  }          
  ])
  .then(response => {
    if (response.role === "No") {
      buildPage();
    } else if(response.role === "Yes") {
      inquirer.prompt([
        {
          type: "list",
          name: "role",
          message: "What is the employee's role: ",
          choices: [
            "Engineer",
            "Intern",
            "Manager"
          ]
        }
      ])
      .then (response => {
        if (response.role === "Engineer") {
          engineerPrompts();
        } else if (response.role === "Intern") {
          internPrompts();
        } else if (response.role === "Manager") {
          managerPrompts();
        }
      })
    }
  })
};



// function for engineer prompts - the engineer's name, ID, email, and GitHub username, and I am taken back to the menu
const engineerPrompts = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the Engineer's name?",
      validate: function validateEngineerName(engineerName){
        return engineerName !== '';
      }
    },
    {
      type: "input",
      name: "engineerId",
      message: "Enter the Engineer's ID: ",
      validate: function validateEngineerId(engineerId){
        return engineerId !== '';
      }
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Enter the Engineer's email address: ",
      // Here's where the email validation occurs via email-validator
      validate: function validateEngineerEmail(engineerEmail){
        return validator.validate(engineerEmail);
      }
    },
    {
    type: "input",
    name: "githubInput",
    message: "Please enter their GitHub username: ",
    validate: function validateName(name) {
      return name !== '';
    },
    },

  ])
  .then (response => {
    // Add them to the array
    const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.githubInput);
    teamArray.push(engineer);
    console.log(engineer);
    addEmployee();
  });
};

// function for intern prompts - the intern's name, ID, email, and school, and I am taken back to the menu
const internPrompts = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the Intern's name?",
      validate: function validateInternName(internName){
        return internName !== '';
      }
    },
    {
      type: "input",
      name: "internId",
      message: "Enter the Intern's ID: ",
      validate: function validateInternId(internId){
        return internId !== '';
      }
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter the Intern's email address: ",
      // Here's where the email validation occurs via email-validator
      validate: function validateInternEmail(internEmail){
        return validator.validate(internEmail);
      }
    },
    {
    type: "input",
    name: "schoolInput",
    message: "Please enter their attending school name: ",
    validate: function validateSchoolInput(schoolInput) {
      return schoolInput !== '';
    },
    },
  ])
  .then(response => {

      // Add them to the team array
      const intern = new Intern(response.internName, response.internId, response.internEmail, response.schoolInput);
      teamArray.push(intern);
      console.log(intern);
      addEmployee();
  }); 
}

// function to finish and build team - HTML is generated
const buildPage = () => {
    // will continue to generate card for each employee entered in the array. 
    for(let i = 0; i <teamArray.length; i++){
      teamString = teamString + html.generateCard(teamArray[i]);
    }
    let finalHtml = html.generateHTML(teamString)

    // console.clear();
    console.table("✍️ Creating index.html file ✍️");

    writeFileAsync("./dist/index.html", finalHtml);

    // console.clear();
    console.table("Your index.html file has been created! It is located in the '(..dist/)' folder.");
    console.log("This is your Team Array");
    console.log("---------------");
    console.log(teamArray);
}




















};

managerPrompts();
runAllPrompts();