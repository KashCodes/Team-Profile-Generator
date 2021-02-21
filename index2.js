// Requirement initiators
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlTemp");
const validator = require("email-validator");

// Async functions
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

console.clear();

console.log("Team Portfolio Generator by Kashay Arbelo")

// Application primary function
async function main() {
  try {
    // Wait's to generate html until all prompts/promises have been completed/fulfilled.
    await prompt()

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
  } catch(err) {
    return console.log(err);
  }
}

// Prompts to collect user data
function prompt() {

  function managerPrompts(){
  // ensures it is starting with a blank array
  let responseDone = "";
  console.log("------------------------------------------------");
  // Gather general Manager info first
  let response = inquirer.prompt([
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
      // Add them to the 1st spot of the team array
      const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
      teamArray.push(manager);
      console.log(manager);
      main();
    } else if (response.role === "Yes") {
      const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
      teamArray.push(manager);
      console.log(manager);
      addEmployee();
    }
  }) 
  .catch (err => {
    return console.log(err);
  }) 

};
  


  function addEmployee(){
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
            endPrompts();
          });
    
      } else if (response.role === "Intern") {
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
            endPrompts();
        }); 

  
      } else if(response.role === "Manager") {
        managerPrompts();
      };
    })
  };

  function endPrompts(){
    
    responseDone = inquirer.prompt([{
      type: "list",
      name: "finish",
      message: "Would you like to continue?",
      choices:
      [
        "Yes",
        "No"
      ] 
    },])
    .then(responseDone => {
      if (responseDone.finish === "Yes") {
        main();
      } else if (responseDone.finish === "no") {
        addEmployee();
      }
    })
  };








  //   // after you have general info, it will take the employee role and trigger the next series of prompts. 
  //   let response2 = ""

  //   // prompts for engineer employe role selection 
  //   if (response.role === "Engineer") {
  //     response2 = inquirer.prompt([
  //       {
  //         type: "input",
  //         name: "engineerName",
  //         message: "What is the Engineer's name?",
  //         validate: function validateEngineerName(engineerName){
  //           return engineerName !== '';
  //         }
  //       },
  //       {
  //         type: "input",
  //         name: "engineerId",
  //         message: "Enter the Engineer's ID: ",
  //         validate: function validateEngineerId(engineerId){
  //           return engineerId !== '';
  //         }
  //       },
  //       {
  //         type: "input",
  //         name: "engineerEmail",
  //         message: "Enter the Engineer's email address: ",
  //         // Here's where the email validation occurs via email-validator
  //         validate: function validateEngineerEmail(engineerEmail){
  //           return validator.validate(engineerEmail);
  //         }
  //       },
  //       {
  //       type: "input",
  //       name: "githubInput",
  //       message: "Please enter their GitHub username: ",
  //       validate: function validateName(name) {
  //         return name !== '';
  //       },
  //       },

  //     ]);

  //   // Add them to the array
  //   const engineer = new Engineer(response2.engineerName, response2.engineerId, response2.engineerEmail, response2.githubInput);
  //   teamArray.push(engineer);
  //   console.log(engineer);

  //   } else if (response.role === "Intern") {
  //     response2 = await inquirer.prompt([
  //       {
  //         type: "input",
  //         name: "internName",
  //         message: "What is the Intern's name?",
  //         validate: function validateInternName(internName){
  //           return internName !== '';
  //         }
  //       },
  //       {
  //         type: "input",
  //         name: "internId",
  //         message: "Enter the Intern's ID: ",
  //         validate: function validateInternId(internId){
  //           return internId !== '';
  //         }
  //       },
  //       {
  //         type: "input",
  //         name: "internEmail",
  //         message: "Enter the Intern's email address: ",
  //         // Here's where the email validation occurs via email-validator
  //         validate: function validateInternEmail(internEmail){
  //           return validator.validate(internEmail);
  //         }
  //       },
  //       {
  //       type: "input",
  //       name: "schoolInput",
  //       message: "Please enter their attending school name: ",
  //       validate: function validateSchoolInput(schoolInput) {
  //         return schoolInput !== '';
  //       },
  //       },
  //     ]);

  //         // Add them to the team array
  //         const intern = new Intern(response2.internName, response2.internId, response2.internEmail, response2.schoolInput);
  //         teamArray.push(intern);
  //         console.log(intern);

  //       } else 

   
  //   } catch(err) {
  //     return console.log(err);
  //   }
  //   responseDone = await inquirer.prompt([{
  //     type: "list",
  //     name: "finish",
  //     message: "Would you like to continue?",
  //     choices:
  //     [
  //       "Yes",
  //       "No"
  //     ] 
  //   },]);

  // } while (responseDone.finish === "Yes");
  
}

// Runs application
main();