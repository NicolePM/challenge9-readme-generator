 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseString = ""
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
   if (licenseType === "Apache") {
     licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (licenseType === "BSD") {
      licenseString ='[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
     };
  if(licenseType === "None"){
    licenseString='No License selected'
  }
  return licenseString
   };


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  1. [Title](#title)
  2. [Description](#description) 
  2. [Installation](#Installation)
  3. [Website](#website)
  4. [Built With](#software)
  5. [Usage](#usage)  
  6. [Collaborators](#credits)
  7. [License](#license)
  8. [Contributors](#contributing)
  9. [GitHub](#gitHub)
 10. [Badges] (#badge)
 11. [E-mail](#email)
 12. [Tests](#tests)

 ## Title
 ${data.title}
 ## Description
 ${data.description} 
 ## Installation
 ${data.installation}
 ## Website
 ${data.website}
 ## Built With
 ${data.software}
 ## Usage
 ${data.usage}
 ## Collaborators
 ${data.credits}
 ## License
 ${renderLicenseBadge(data.license)}
 ## Contributors
 ${data.contributing}
 ## GitHub
 ${data.github}
 ## Badges
${data.badge}
 ## E-mail
 ${data.email}
 ## Tests
 ${data.tests}`
 }
   module.exports = generateMarkdown;
 