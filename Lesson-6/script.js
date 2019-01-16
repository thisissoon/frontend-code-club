// Example 1: Simple function
function helloWorld() {
  console.log('Hello World!');
}

helloWorld();

// Example 2: Inputs
function hello(name) {
  console.log(`Hello ${name}!`);
}

hello('SOON_');

// Example 3: Outputs

function double(age) {
  return age * 2;
}

const doubleResult = double(2);

console.log({ doubleResult });

// Example 3: Outputs

function add(number1, number2) {
  return number1 + number2;
}

const addResult = add(5, 15);

console.log({ addResult });

// Example 4: Functions and variables

function addAge(people) {
  let age = 0;
  people.forEach(person => {
    age = age + person.age;
  });
  return age;
}

const people = [
  { name: 'John', age: 30, gender: 'Male' },
  { name: 'Jill', age: 25, gender: 'Female' }
];

const totalAge = addAge(people);

console.log({ totalAge });
