const inquirer = require("inquirer");
const fs = require("fs")
const generateHTML = require("./src/generateHTML")


const theTeam = []


const questions = [
    {
        type: 'input',
        message: 'Please enter the following information as the manager of your team. This will include the your name, employee ID, email address, and office number.',
        name: 'manager'
    },
    {
        type: 'confirm',
        name: 'confirmNewmember',
        message: 'Would you like to add a new member to your team?',
        default: true
    },
    {
        type: 'list',
        message: 'Please select engineer or intern to add to your team.',
        choices: ['Engineer', 'Intern'],
        name: 'teamMember1',
        when: ({ confirmNewmember }) => {
            if (confirmNewmember) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter the following information for the engineer of your team. This will include the engineer’s name, ID, email, and GitHub username.',
        name: 'engineer',
        when: ({ confirmNewmember }) => {
            if (confirmNewmember) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter the following information for the intern of your team. This will include the intern’s name, ID, email, and school.',
        name: 'intern',
        when: ({ confirmNewmember }) => {
            if (confirmNewmember) {
                return true;
            } else {
                return false;
            }
        }
    }

];

function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            console.log(answers.manager)
            console.log(answers.confirmNewmember)
            console.log(answers.engineer)
            console.log(answers.confirmNewmember2)
            console.log(answers.intern)
          },
        )
}

// Function call to initialize app
init();