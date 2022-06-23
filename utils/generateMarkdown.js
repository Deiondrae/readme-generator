// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `https://img.shields.io/badge/License-${license}-blue.svg`;
  }
  return ""; 
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `https://opensource.org/licenses/${license}`
  }
  return "";
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${data.title}
  ${renderLicenseBadge(license)}
  ${renderLicenseSection(data.license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
    ${data.description}

    ## Table of Contents
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contribution](#Contribution)
    - [Tests](#Tests)
    
    ## Installation
    ${data.intallation}

    ## Usage
    ${data.usage}

    ## License
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}

    ## How to contribute
    ${data.contribute}

    ## Tests
    ${data.tests}
`}

module.exports = generateMarkdown;
