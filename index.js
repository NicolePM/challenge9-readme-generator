// TODO: Include packages needed for this application
const inquirer=require("inquirer")
const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
const mypath = require('path');

// TODO: Create an array of questions for user input
function init() {
inquirer.prompt([
    { 
      type:"input",
      message: "What is the Title for your application or project?",
      name: "title",  
         },
    { 
      type: "input",
      message: "Provide an in depth Description of your application or project?",
      name: "description",  
         },
    {
       type: "input",
       message: "How do you Install or Load your application or project?",
       name: "installation",
    },
    {
      type: "input",
      message: "What is the website of your application or project?",
      name: "website",
   },
   {
    type:"input",
    message: "Built with:",
    name: "software",
    },

    {
        type: "input",
        message: "What is the purpose of your application or project?",
        name: "usage",
    },
    {
        type:"input",
        name:"credits",
        message:"Who are your collaborators?"
    },
    {
        type:"list",
        message: "What License did you use for this application or project?",
        choices: ["MIT", "GNU", "Apache", "BSD", "None"],
        name: "license",
    },
    {
        type: "input",
        message: "How can people Contribute to your project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "Badges?",
        name: "badge"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    
    {
        type: "input",
        message: "What is your email address where users and contributors can send questions?",
        name: "email"
    },
    {
      type: "input",
      message: "Test cases developed?",
      name: "tests"
  },
  ])
  .then((response) => {
    return fs.writeFileSync(mypath.join (process.cwd(), "README.md"), generateMarkdown(response));
  });

}
init();
