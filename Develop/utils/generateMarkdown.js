// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    [![License](https://img.shields.io/badge/License-${license}-blue.svg)]
    `;
  } else {
    return ' ';
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    
    The application is covered under the following license:
    
    ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## Contribution:
${data.contribution}

## License:
${data.license}

## Testing:
${data.testing}

## Questions:
- Github: [${data.github}](https;//github.com/${data.github})
- Email: [${data.email}](mailto:user@example.com) `;

}

module.exports = generateMarkdown;

