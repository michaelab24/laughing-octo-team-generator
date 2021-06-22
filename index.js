const inquirer = require("inquirer");
const fs = require("fs")
const generateHTML = require("./src/generateHTML")

const questions = [
    {
        type: 'input',
        message: 'What is the description of your project? (*Please enter the links to your github and project here.*)',
        name: 'description'
    },

]
