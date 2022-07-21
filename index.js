// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const markdown = require('./utils/generateMarkdown');

// writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        let readmeContent = markdown.generateMarkdown(response)
    console.log(response);
    writeToFile('README.md', readmeContent)
    }
  )}

// Function call to initialize app
init();
