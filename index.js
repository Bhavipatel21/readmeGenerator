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
        validate:function(answers) {
            if (answers.length < 1) {
                return console.log("Project name cannot be blank, Please enter project name.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:",
        validate:function(answers) {
            if (answers.length < 1){
                return console.log("Project description cannot be blank, Please enter project description.");
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "What information will the user need in order to use the repo?",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter instructions on how to install your application :",
    },
    {

        type: "input",
        name: "dependencies",
        message: "What command should be ran to install dependencies?",
    },
    {
        type: "list",
        name: "license",
        message: "Please select license for this application :",
        choices: ['MIT', 'IBM', 'Apache', 'Eclipse', 'None'],
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines for any contributors:',
        name: 'contribution',
    },
    {
        type: "input",
        name: "gitusername",
        message: "Please enter your github username:",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email:",
        validate:function(answers) {
            if (answers.length < 1){
                return console.log("Email cannot be blank, Please enter your email.")
            }
            return true
        }
    },
]

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        [...questions]
    )
        .then((answers) => {
            try {
                const readme = generateFile(answers);
                fs.writeFileSync('sampleREADME.md', readme);
                console.log('README.md has been created!!')
            }
            catch (err) {
                console.log(err);
            }
        })
}

// Function call to initialize app
init();
