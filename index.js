// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `title`,
        message: `What is the title of your project?`,
    },
    {
        type: `input`,
        name: `description`,
        message: 'Please provide a brief description of your project',
    },

    {
        type: `input`,
        name: `motivation`,
        message: 'What was your motivation for creating this project?',
    },

    {
        type: `input`,
        name: `problems this project solves`,
        message: `What problem does this project solve?`,
    },


    {
        type: 'input',
        name: 'What i learned',
        message: 'What did you Learn from this assigment?.',
    },

    {
        type: 'input',
    name: 'usage',
    message: 'To use the Inquirer package, you must first?',
    choices: ['install the package', 'import the package', 'initialize the package'],
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Provide the contribution guidelines to this:',
      },


      {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for this assigment',
      },


    {
        type: `input`,
        name: `installation instructions`,
        message: `To install the Inquirer package, which following command would you run?`,
        choices: ['npm install inquirer@9.0.0', 'npm install inquirer', 'npm install inquirer@latest'],
    },

    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party assets, or tutorials used (e.g., links or names):',
      },
      
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },

{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
    
      {
     type: 'input',
     name: 'email',
     message: 'What is your email address?',
      },


];
function generateREADME(answers) {
    return `
    ${answers.title}

## Description
${answers.description}

### Motivation
${answers.motivation}

### Problem Solved
${answers.problem}

### What I Learned
${answers.learned}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## Questions
If you have any questions, please contact me:
- GitHub: [${answers.github}](https://github.com/DeenTradesCode${answers.github})
- Email: ${answers.email}
`;
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => 
        err
    ? console.error('Error writing to file:', err)
    : console.log('README.md has been successfully generated!')
);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      // Log user inputs for confirmation
      console.log("\n=== Your Inputs ===");
      console.log(`Project Title: ${answers.title}`);
      console.log(`GitHub Username: ${answers.github}`);
      console.log(`Email Address: ${answers.email}`);
      console.log("====================\n");
  
      // Generate and write README file
      const content = generateREADME(answers);
      writeToFile('README.md', content);
    });
  }
// Function call to initialize app
init();
