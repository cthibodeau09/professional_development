// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide guidelines for other developers to follow when contributing to your project.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license that will best suit your project.',
        choices: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of the above'],
        validate: your_license => {
            if (your_license) {
                return true;
            } else { 
                console.log('Select a license for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide examples on how to run tests of your project'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your full email address'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    console.log("Success! You can now view your README file");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
