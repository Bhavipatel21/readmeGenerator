// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  let licenseBadge;
  switch(answers.license){
    case 'MIT':
    licenseBadge = "![badge](https://img.shields.io/badge/license-MIT-blueviolet)";
    break;
    case 'IBM':
    licenseBadge = "![badge](https://img.shields.io/badge/license-IBM-blueviolet)";
    break;
    case 'Apache':
    licenseBadge = "![badge](https://img.shields.io/badge/license-Apache-blueviolet)";
    break;
    case 'Eclipse':
    licenseBadge = "![badge](https://img.shields.io/badge/license-Eclipse-blueviolet)";
    break;
    case 'None':
    licenseBadge = '';
      }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  let licenseLink;

  switch(answers.license) {
    case 'MIT': 
    licenseLink = "[MIT](https://spdx.org/licenses/MIT.html)";
    break;
    case 'IBM':
    licenseLink="[IBM](https://spdx.org/licenses/IPL-1.0.html)";
    break;
    case 'Apache License':
    licenseLink = "[Apache](https://spdx.org/licenses/Apache-2.0.html)";
    break;
    case 'Eclipse':
    licenseLink = "[Eclipse](https://spdx.org/licenses/Apache-2.0.html)";
    break;
    case 'None':
    licenseLink="";
  }

 return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {

  if (answers.license === 'None') {
    return ``;
    
  }else {
    return `## License  ${renderLicenseBadge(answers)}
  Project license : click ${renderLicenseLink(answers)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers)}
  ## Description 
   ${answers.description}

  ## Installation
   ${answers.installation}
  ## Usage 
   ${answers.usage}
  ## Contributing
   ${answers.writecontribution}
   
  ## Tests
  ${answers.test}
  ${renderLicenseSection(answers)}

  ## Questions

  For any questions email me at: ${answers.email}

`;
}

module.exports = generateMarkdown;

