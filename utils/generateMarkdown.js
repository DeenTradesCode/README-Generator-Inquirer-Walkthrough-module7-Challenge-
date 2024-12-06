// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `![Licence](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license || license === 'None') {
      return '';
    }
  
    const licenseLinks = {
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'MIT': 'https://opensource.org/licenses/MIT',
      'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
      'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
};
return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License
  This project is licensed under the ${license} license.  
  For more information, click [here](${renderLicenseLink(license)}).
  `;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  For any questions, please contact me:
  - GitHub: [${data.github}](https://github.com/DeenTradesCode${data.github})
  - Email: ${data.email}
`;
}

export { generateMarkdown };
