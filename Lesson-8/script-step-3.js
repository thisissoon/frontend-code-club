// DONT REPEAT YOURSELF

// Why is this bad? mistakes, updates, readability.

// Change firstBaker etc to baker
// look at the repeating logic
// only thing changing is the index
// look at repeating pseudocode code - make it generic
// make function sortBaker with index input

// Pseudocode code:
///////////////////
// 1. Create list of bakers with info like name and first round bake battle result
//////////////////
var bakers = [
  {
    name: "Ken",
    wonFirstBattle: true
  },
  {
    name: "Ed",
    wonFirstBattle: false
  },
  {
    name: "Jack",
    wonFirstBattle: true
  },
  {
    name: "Tom",
    wonFirstBattle: false
  }
];
/////////////////
// 2. Create somewhere to record list of winners
/////////////////
var winners = [];

/////////////////
// 3. Look over bakers and add to winners if won in first round
/////////////////
// 3.1 look at baker
// 3.2 look at first round result
// 3.3 if they won add their name to winners list

function sortBaker(index) {
  // 3.1 look at baker
  var baker = bakers[index];
  // 3.2 look at first round result
  var wonFirstBattle = baker.wonFirstBattle;
  // 3.3 if they won add their name to winners list
  if (wonFirstBattle === true) {
    winners.push(baker.name);
  }
}

sortBaker(0);
sortBaker(1);
sortBaker(2);
sortBaker(3);

/////////////////
// 4. Output our list of winners
/////////////////
console.log("Winners:");
console.log(winners[0]);
console.log(winners[1]);
console.log(winners[2]);
console.log(winners[3]);
