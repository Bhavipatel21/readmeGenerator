// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateFile = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

  //add validation for questions which can not be left blank
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project name?",
   
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:",

    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email:",
       },
    //following questions are optional, can be left blank
    {
        type: "list",
        name: "license",
        message: "Please select license for this application :",
        choices: ['MIT', 'IBM', 'Apache', 'Eclipse', 'None'],

    },
    {

        type: "input",
        name: "dependencies",
        message: "What command should be ran to install dependencies?",
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be ran to install dependencies?",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter instructions on how to install your application :",
    },
    {
        type: "input",
        name: "gitusername",
        message: "Please enter your github username:",
    }
]

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        [...questions]
    )
        .then((answers) => {
            try {
                const readme = generateFile(answers);
                fs.writeFileSync('myREADME.md', readme);
                console.log('README.md has been created!!')
            }
            catch (err) {
                console.log(err);
            }
        })
}

// Function call to initialize app
init();
