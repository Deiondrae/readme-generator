// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the name of this project? (Required)",
      validate: (title) => {
        if (title) {
          return true;
        } else {
          console.log("Please enter a title for the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of this project (Required)",
      validate: (description) => {
        if (description) {
          return true;
        } else {
          console.log("Please enter a description of the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username. (Required)",
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("Please enter your github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "If your project requires installation, please walk through the installation process (Optional)",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide instructions and examples for use. (Optional)",
    },
    {
      type: "list",
      name: "license",
      message: "What license do you want to use for your project? (Optional)",
      choices: [
        "MIT",
        "GPLv2",
        "Apache-2.0",,
        "BSD-3-Clause",
        "None",
      ],
    },
    {
      type: "input",
      name: "contribute",
      message: "Please advise on how to contribute to this project. (Optional)",
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide examples of how to run any tests you've written (Optional)",
    },
];
// write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./README.md`, data, err => {
            if (err) {
              reject(err);
              return;
            }
            resolve({
                ok: true,
                message: "Readme file Generated!"
            })
          });
    });   
};
// Function to initialize app
const init = (questions) => {
    return inquirer.prompt(questions).catch((error) => {
      if (error) {
        console.log(err);
      } 
    });
  };

// Function call to initialize app
init(questions)
.then(res => {
    return generateReadme(res);
})
.then(res => {
    writeToFile(res);
});




