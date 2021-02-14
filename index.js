// Require Inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const teamArray = [];

const teamIdArray = [];

const runAllPrompts = () =>{

 // function for manager prompts - team manager’s name, employee ID, email address, and office number
  const managerPrompts = () =>{

    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the managers name?"
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the managers ID?"
      }
      
    ])
    // add additional questions and email address, and office number, add to const manager. 
    .then(answers => {
      const manager = new Manager(answers.managerName,answers.managerID);
      teamArray.push(manager);
      teamIdArray.push(answers.managerID);
      addEmployee();
    })
  };


// function to add employee - Engineer or intern? 
const addEmployee = () => {

}
// function for engineer prompts - the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// function for intern prompts - the intern’s name, ID, email, and school, and I am taken back to the menu

// function to finish and build team - HTML is generated







};



runAllPrompts();