var readMeDataArgs = process.argv.slice(2, process.argv.length);
console.log(readMeDataArgs);

  // one argument at a time

  const printReadMeData = readMeDataArr => {
    for (let i = 0; i < readMeDataArr.length; i += 1) {
      console.log(readMeDataArr[i]);
    }
  };

  printReadMeData(readMeDataArgs);

const inquirer = require('inquirer');  

console.log(inquirer);

inquirer
  .prompt([
    {
      type: 'input',
      name: '',
      message: ''
    }
  ])
  .then(answers => console.log(answers));