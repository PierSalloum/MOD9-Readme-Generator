// TODO: Include packages needed for this application

const inquirer = require("inquirer")
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title for your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter a description of your project",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter any installation instructions if available",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter any usage information for your project",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Are there any contribution restrictions or guidelines for your project?",
    },
    {
        type: 'input',
        name: 'test',
        message: "Enter instructions to test the application effectively",
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use for your project?',
        choices: ['Apache 2.0', 'MIT', 'GNU GPLv3', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File created successfully!');
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            const fileName = answers.title + '.txt'; // Generate the file name
            const fileContent = `Title: ${answers.title}\nDescription: ${answers.description}\nUsage: ${answers.usage}\nContribution: ${answers.contribution}\nTesting: ${answers.test}\nLicense: ${answers.license}\nQuestions:\n ${answers.github}\n${answers.email}`; // Generate the file content
            writeToFile(fileName, fileContent); // Write the file
        })
        .catch((error) => {
            console.error(error);
        });
}


// Function call to initialize app
init();
