// // import apiKeyDefault, { apiKey } from './uitl.js';

// // import * as util from './uitl.js';

// import apiKeyDefault, { anotherApi as diego } from './uitl.js';

// // console.log(apiKey);
// // console.log(apiKeyDefault);

// // console.log(util.default);
// // console.log(util.anotherApi);

// console.log(apiKeyDefault);
// console.log(diego);

let userMessage = 'diego is awesome at programming';
console.log(userMessage);

export default userName => 
{
    return 'diego was here';
}

const test = {
    name: 'Max',
    age: 34,
    greet() {
        console.log(this.name);
    }
}

class User {
    constructor() {

    }

    greet() {
        console.log('diego was here');
    }
}

let d = new User();

d.greet();


const hobbies = ['Swimming', 'Running', 'Losing'];

hobbies.findIndex(item => item === "Swimming");

const editedHobbies = hobbies.map(item => ({ text: item }))

hobbies.map(item => item + "!");

// Array Destructuring
const [firstName, lastName] = ['Diego', 'Salas'];

// Object Destructuring

const { name, age } = { name: 'diego', age: 23 };


// Spread Operators

const newHobbies = ["Losing"];
const test123 = [...newHobbies, ...hobbies];
