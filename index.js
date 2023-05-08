// TODO: Include packages needed for this application

// calling modules to file
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
// use fs module t
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {console.error(err);return;}
        console.log('File created successfully');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    //use inquire module to prompt user and receive data
        .prompt(questions)
        .then((answers) => {
            const fileName = answers.title + ".md";
            //add badge to license
            let licenseBadge = "";
            switch (answers.license) {
                case "Apache 2.0": licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"; break;
                case "MIT": licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"; break;
                case "GNU GPLv3": licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"; break;
                case "BSD 3-Clause": licenseBadge = "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"; break;
                default:
                    licenseBadge = "";
            }
            const fileContent =
            //layout of readme with user data
                `# ${answers.title}\n\n` +
                `## Table of Contents\n\n` +
                `- [Description](#description)\n` +
                `- [Installation](#installation)\n` +
                `- [Usage](#usage)\n` +
                `- [Contribution](#contribution)\n` +
                `- [Testing](#testing)\n` +
                `- [License](#license)\n` +
                `- [Questions](#questions)\n\n` +
                `## Description<a name="description"></a>\n\n` +
                `${answers.description}\n\n` +
                `## Installation<a name="installation"></a>\n\n` +
                `${answers.installation}\n\n` +
                `## Usage<a name="usage"></a>\n\n` +
                `${answers.usage}\n\n` +
                `## Contribution<a name="contribution"></a>\n\n` +
                `${answers.contribution}\n\n` +
                `## Testing<a name="testing"></a>\n\n` +
                `${answers.testing}\n\n` +
                `## License<a name="license"></a>\n\n` +
                `${licenseBadge}\n\n` +
                `This project is licensed under the ${answers.license} license.\n\n` +
                `## Questions<a name="questions"></a>\n\n` +
                `[${answers.email}].[${answers.github}](https://github.com/${answers.github}/).\n`;
            writeToFile(fileName, fileContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();