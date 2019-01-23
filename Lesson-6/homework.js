const listOfSOON_ = [
  { name: 'John', age: 30, gender: 'Male' },
  { name: 'Jill', age: 25, gender: 'Female' }
];

const listOfPhantom = [
  { name: 'Jack', age: 40, gender: 'Male' },
  { name: 'Julliet', age: 21, gender: 'Female' }
];

/**
 * A function that return the oldest person in a list
 *
 * This is a comment to explain what the function does
 *
 * @param {Array<{ name: String, age: Number, gender: 'Male' | 'Female' }>} people
 * @returns
 */
function getOldestPerson(people) {
  // Create a space in memory to store the oldest person
  let oldestPerson;

  // If list is not empty update oldest person to first item
  // So we always have an oldest person to compare to
  if (people.length) {
    oldestPerson = people[0];
  }

  // 1. Go through the list 1 by 1 with each person
  people.forEach(function(person) {

    // 2. While checking each person we need to check if the age of the person
    //    is older than oldestPerson (compare age's) e.g 30 > 25
    const personIsOlder = person.age > oldestPerson.age;

    // 3. If the yes we update oldestPerson, if no we dont need to do anything;
    if (personIsOlder) {
      oldestPerson = person;
    }
  });

  // Return the oldest person from our function
  return oldestPerson;
}

// Get oldest person from SOON_ and save as variable
const oldestPersonAtSOON_ = getOldestPerson(listOfSOON_);

// Get oldest person from Phantom and save as variable
const oldestPersonAtPhantom = getOldestPerson(listOfPhantom);

// Console log the results of oldest person at SOON_
console.log(oldestPersonAtSOON_);

// Console log the results of oldest person at Phantom
console.log(oldestPersonAtPhantom);
