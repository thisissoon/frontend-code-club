// Example 1: Types - boolean

// Creating a variable with boolean type
const isRed = true;
const isBlue = false;

// Logging to console
console.log({ isRed, isBlue });

// Example 2: Types - null

// Creating a variable with String type
let color = 'red';
// Setting the variable to null so it now has no value
color = null;

// Logging color to console
console.log({ color });

// Example 3: Types - undefined

// Creating a variable with String type
let meaningOfLife = '42';
// Setting the variable to undefined so it now has no value and does not exist
meaningOfLife = undefined;

console.log({ meaningOfLife });

// Example 4: if statement

// Creating two variables of type Object
const person1 = {
  name: 'John',
  age: 40,
  result: 75,
}

const person2 = {
  name: 'Jill',
  age: 25,
  result: 90
}

// Define a function to return true if a person is 30 or over
function isOld(person) {
  if (person.age >= 30) {
    return true;
  } else {
    return false;
  }
}

// Create two new variables which store a boolean which are
// the results of running the isOld function with each person

// Run the isOld function with john as an input
const johnIsOld = isOld(person1);
// Run the isOld function with jill as an input
const jillIsOld = isOld(person2);

// Logging the results to console
console.log({ johnIsOld, jillIsOld })

// Example 5: More complex if statement

// Creating two variables of type Object
const person1 = {
  name: 'John',
  age: 40,
  result: 45,
}

const person2 = {
  name: 'Jill',
  age: 25,
  result: 90
}

// Define a function that calculates the exam mark for a person
function examMark(person) {
  // if person's result is greater than or equal to 90
  // return "A"
  if (person.result >= 90) {
    return 'A';
  // If that check fails then if person's result is greater
  // than or equal to 80 return "B"
  } else if (person.result >= 80) {
    return 'B';
  // If that check fails then if person's result is greater
  // than or equal to 70 return "C"
  } else if (person.result >= 70) {
    return 'C';
  // If all the above checks fail return "F"
  } else {
    return 'F';
  }
}

// Create two new variables which store a string
// which is the result of running the exam mark function

// Run the examMark function with jill as an input
const johnsGrade = examMark(person1);
// One that stores Jill's mark
const jillsGrade = examMark(person2);

// Logging the results to console
console.log({ johnsGrade, jillsGrade });

