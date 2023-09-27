const fs = require('fs');
const colors = require('colors');
const option = process.argv[2];
const studentName = process.argv[3];

// Overwrites the file, does not maintain old file
// fs.writeFile('./students.txt', 'Gabby', (err) => {
//     if (err) throw err;

//     console.log('file written successfully');
// });

if (option === 'add') {
    fs.appendFile('./students.txt', studentName + '\n', (err) => {
        if (err) throw err;
    
        console.log('file appended successfully');
    });
}

if (option === 'list') {
    fs.readFile('./students.txt', 'utf8', (err, data) => {
        if (err) throw err;
    
        // Must do this to get rid of the \r in each string of the array 
        // var names = data.trim().replace(/\r/g, '').split('\n');
        const names = data.trim().split(/\r?\n/);
    
        // names.forEach((name, index) => {
        //     console.log(name, index);
        // });

        // Loops over each item in the array and returns a NEW array
        // Allows you to mutate the original array and change each item to something else
        const changedArray = names.map(name => {
            return '- ' + name + '\n';
        });

        // Join all of the array items together into one string by empty string (can change that delimiter to anything)
        const output = changedArray.join('');

        console.log('\n---Student List---\n');
        // console.log(colors.rainbow(output));
        console.log(output.cyan);
    });
}


































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



