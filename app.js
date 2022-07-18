var inquirer = require('inquirer');
inquirer

.prompt([
      {
        type: 'input',
        name: 'project name',
        message: 'What is your project name?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('please enter your project name.');
              return false;
            }
          }
      }
    ])
    .then(answers => console.log(answers))
      
    
    .prompt([{
        type: 'input',
        name: 'project description',
        message: 'What does your project do?',
        validate: whatInput => {
            if (whatInput) {
              return true;
            } else {
              console.log('please add what your project does.');
              return false;
            }
          }
      }
    ])
    .then(answers => console.log(answers))
      
    .prompt([{
        type: 'input',
        name: 'description',
        message: 'Why did you create this project?',
        validate: whyInput => {
            if (whyInput) {
              return true;
            } else {
              console.log('please add why you made this project.');
              return false;
            }
          }
      } ])
      .then(answers => console.log(answers))
      
      .prompt([{
        type: 'input',
        name: 'description',
        message: 'What problem does this project solve?',
        validate: problemInput => {
            if (problemInput) {
              return true;
            } else {
              console.log('please add what problem this project solves.');
              return false;
            }
          }
      }
    ])
    .then(answers => console.log(answers))

    .prompt([{
        type: 'input',
        name: 'description',
        message: 'What did you learn while creating this project??',
        validate: learnInput => {
            if (learnInput) {
              return true;
            } else {
              console.log('please add something you learned.');
              return false;
            }
          }
      }
    ])
    .then(answers => console.log(answers))

      // table to contents option

      .prompt([{
        type: 'input',
        name: 'installation',
        message: 'how is this project installed?',
        validate: installInput => {
            if (installInput) {
              return true;
            } else {
              console.log('please let us know how your project can be installed.');
              return false;
            }
          }
      }
    ])
      .then(answers => console.log(answers))

      .prompt([{
        type: 'input',
        name: 'usage',
        message: 'how is your project used?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your project name!');
              return false;
            }
          }
      }
    ])
    .then(answers => console.log(answers))

    .prompt([{
        type: 'input',
        name: 'credits',
        message: 'did you recieve any help while creating this project, this includes collaborators, tutorials, or third party assests? if so plaese include links to that information.',
        validate:creditsInput => {
            if (creditsInput) {
              return true;
            } else {
              return false;
            }
          }
      }
    ])
    .then(answers => console.log(answers))

    .prompt([{
        type: 'input',
        name: 'tests',
        message: 'What are some tests for your project?',
        validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('please enter some tests.');
              return false;
            }
          }
      } ])
      .then(answers => console.log(answers))

      //liscence

      .prompt([{
        type: 'input',
        name: 'licence',
        message: 'What license would you like for this application?',
        validate: licenseInput => {
            if (licenseInput) {
              return true;
            } else {
              console.log('please select a license');
              return false;
            }
          }
      } ])
      .then(answers => console.log(answers));
  

