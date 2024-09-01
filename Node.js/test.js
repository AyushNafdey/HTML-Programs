console.log("Hello world");
// let name = 'Ayush';
// let age = 19;

// alert("Hello!!!");
//Concatenation - older method
// console.log("My name is " + name + " and my age is " + age);

//Newer method
//console.log(`My name is ${name} and my age is ${age}`);

// const hello = `My name is ${name} and my age is ${age}`;
// console.log(hello);

// console.log(hello.substring(1, 9).toUpperCase());

//Important for databases
const str = 'India, Nagpur, Asia, Electronics'
console.log(str.split(', '));

//Array
// const fruits = new Array('apples', 'mangoes', 98, false);
const fruits = ['apples', 'mangoes', 98, false]
console.log(fruits);
console.log(fruits[0]);

fruits.unshift('strawberries');
console.log(fruits);

fruits.pop();
console.log(fruits);
console.log(Array.isArray('oranges'));

//Objects
const person = {
    firstName: 'Ayush',
    lastName: 'Nafdey',
    gender: 'male',
    age: 19,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        city: 'Nagpur',
        state: 'Maharashtra',
        country: 'India',
    }
}

// console.log(person);
// console.log(person.age);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

//Pulling things out of object "person"
const { firstName, lastName } = person;
console.log(firstName);

const{ gender, address:{ city, state}} = person;
console.log(state);

person.email = 'ayush@gmail.com';
console.log(person);

const todos = [
    {
        task1: 'Go to the market',
        isCompleted: true,
    },
    {
        task2: 'Completing the assignment',
        isCompleted: true,
    },
    {
        task3: 'Wash the dishes',
        isCompleted: false,
    }
]
console.log(todos);