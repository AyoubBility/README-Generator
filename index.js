// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "gmail",
        message: "What is your gmail?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want:"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description:"
    },
    {
        type: "type",
        name: "installation",
        message: "Please provide the installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage:"
    },
    {
        type: "list",
        name: "license",
        message: "Which license will you use for your project?",
        choices: ['agpl', 'apache', 'mit', 'ISC', 'no license'],
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributing parties?"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide project tests:"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
];

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            const content = generate(answers);
            console.log(content);
            fs.writeFile("README.md", content, (err) =>
            err ? console.log(err) : console.log('Successfully created README file.')
            );
        });
}
// Function call to initialize app
init();