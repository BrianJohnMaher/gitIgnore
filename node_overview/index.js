const fs = require('fs');
const inquirer = require('inquirer');
const tools = require('./lib/generate.js');

function init() {
inquirer.prompt([
    {
    name: 'title',
    message: 'Please provide your project title.'
    },
    {
    name: 'description',
    message: 'Please provide your project description.'
    },
    {
    name: 'image',
    message: 'Please provide a url to your image.'
    }
    {
    name: 'license',
    message: 'Please choose the license you woud like.',
    type: 'list',
    choices: ['MIT', 'ISC', 'GNU']
    }

]).then(tools.generateReadme);
}

function init() {
    tools.anotherFunc();
    promptUser();
}


init();











//     type: 'confirm',
//     name: 'darkMode',
//     message: 'Would you like dark mode?'
// },



// function generateHTML(answerObj) {
//     const html = `
//     <!DOCTYPE html>
//     <html>
//      <head>
//         <title>${answerObj.userTitle}</title>
//     </head>
//     <body style="background-color: ${answerObj.darkMode ? '#555' : 'white'}; color: ${answerObj.darkMode ? 'white' : '#000'}">
//         <h1>${answerObj.headerText}</h1>
//      </body>
//  </html>
//  `;


// fs.writeFile('./index.html', html.trim(), (err) => {
//      if (err) throw err;

//     console.log('File created successfully');
// });
// }






// }


// }).then(generateHTML);





// const html = `
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>${title}</title>
//     </head>
//     <body>
//         <h1>Main Header</h1>
//     </body>
// </html>
// `;

// 




// function generateReadme(answerObj) {
//     const md = `
//     # ${answerObj.title}
//     ## Description
//     ${answerObj.description}
//     ![Dev Profile Image](${answerObj.image})
//     `;

//     fs.writeFile('./README.md', md.trim(), (err) => {
//         if (err) throw err;

//         console.log('File created Successfully!');
//     });
// }




























// var students = ['brandon', 'lorchesca', 'kevin', 'ayman', 'pablo'];
// var count = 30;
// function getRandomStudent() {
//     var studentIndex = Math.floor(Math.random() * students.length);
//     var student = students[studentIndex];

//     return student;
// }

// function cycle() {
//     var interval = setInterval(function () {
//         var student = getRandomStudent();
       
//         console.clear();
//         console.log(student);

//         count --;
//         if (!count) {
//             console.clear();
//             clearInterval(interval);
//             console.log(student, 'has been chosen!');
//         }
//         }, 70);
// }

// const changed = names.map(name => {
//     return ''
// })






































// let num = 10;
// const age = 43;
// const data = {
//     name: 'JD',
//     age: 43
// };

// num++;

// data.age++;

// data =['one', 'two'];

// console.log(data);

