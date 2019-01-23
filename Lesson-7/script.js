// Example 1: Types - boolean
const isRed = true;
const isBlue = false;

console.log({ isRed, isBlue });

// Example 2: Types - null
let color = 'red';
color = null;

console.log({ color });

// Example 3: Types - undefined
let meaningOfLife = '42';
meaningOfLife = undefined;

console.log({ meaningOfLife });

// Example 4: if statement

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

function isOld(person) {
  if (person.age >= 30) {
    return true;
  } else {
    return false;
  }
}

const johnIsOld = isOld(person1);
const jillIsOld = isOld(person2);

console.log({ johnIsOld, jillIsOld });

// Example 5: More complex if statement

function examMark(person) {
  if (person.result >= 90) {
    return 'A';
  } else if (person.result >= 80) {
    return 'B';
  } else if (person.result >= 70) {
    return 'C';
  } else {
    return 'F';
  }
}

const johnGrade = examMark(person1);
const jillGrade = examMark(person2);

console.log({ johnGrade, jillGrade });

