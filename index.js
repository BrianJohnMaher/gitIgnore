const fruits = ['orange', 'apple', 'grape'];
const moreFruits = ['kiwi', 'blueberry', 'banana'];
const data = {
    name: 'JD',
    age: 43
};

// // const age = data.age;
// // const name = data.name;

// const {name, age} = data;

// console.log(name, age);

function someFunc({ age }, two, three) {
console.log(age, three);

}

someFunc({name: 'bob', age: 99}, 'another', 'third');





















// console.log([...moreFruits, 'strawberry', ...fruits,]);
// const dataCopy = { ...data };
// // const someStr = ...fruits;
// console.log(dataCopy === data);

// function someFunc(...args) {
//     console.log(args[3]);

// }

// someFunc(10, 'some str', 'another', true);


// given n number of arguments, return the sum of all given numbers
// function sum(...nums) {
   
//     let total = 0;

//     for (let num of nums) {
//         total += num;
//     }

//     return total;
// }

// const result1 = sum(3, 2, 7);
// const result2 = sum(10, 3, 11, 100, 50, 75);
// const result3 = sum(10, 3, 11, 100, 50, 75, 500, 17, 12, 3);

// console.log(result1, result2, result3);


// console.log(data['age']);

// for (let prop in data) {
//     console.log(data[prop]);
// }

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let [i, fruit] of fruits.entries()) {
//     console.log(fruit);


// }

// if (fruit === 'apple') {
//     break;
// }
// }
