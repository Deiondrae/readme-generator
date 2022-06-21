// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [];

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




