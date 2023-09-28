const inquirer = require('inquirer');
const resourceLinks = [];

function addResourceLink() {
  inquirer.prompt({
    name: 'link',
    message: 'Please type your resource link.'
  }).then(answerObj => {
    resourceLinks.push(answerObj.link);
    showResourceMenu();
  })
}

function showResourceMenu() {
  inquirer.prompt({
    name: 'choice',
    type: 'list',
    choices: ['Add a resource', 'Move on'],
    message: 'Please select an option'
  }).then(answerObj => {
    if (answerObj.choice === 'Add a resource') {
      return addResourceLink();
    }

    console.log('Completed resource links!');
    console.log(resourceLinks);
  })
}

showResourceMenu();