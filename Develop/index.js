// TODO: Include packages needed for this application
const inquirer=require("inquirer")
const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
const path = require('path');

// TODO: Create an array of questions for user input

inquirer
  .prompt([
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
    type:"editor",
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
        choices: ["MIT", "GNU", "Apache", "BSD"],
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
        message: "What is your email address where users and contributors can send questions?",
        name: "email"
    },
  ])
  .then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
  });


init();
