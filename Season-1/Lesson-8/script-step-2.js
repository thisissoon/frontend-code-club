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
// 3.1 look at first baker
var firstBaker = bakers[0];
// 3.2 look at first round result
var wonFirstBattle = firstBaker.wonFirstBattle;
// 3.3 if they won add their name to winners list
if (wonFirstBattle === true) {
  winners.push(firstBaker.name);
}
// 3.1 look at second baker
var secondBaker = bakers[1];
// 3.2 look at first round result
wonFirstBattle = secondBaker.wonFirstBattle;
// 3.3 if they won add their name to winners list
if (wonFirstBattle === true) {
  winners.push(secondBaker.name);
}
// 3.1 look at third baker
var thirdBaker = bakers[2];
// 3.2 look at first round result
wonFirstBattle = thirdBaker.wonFirstBattle;
// 3.3 if they won add their name to winners list
if (wonFirstBattle === true) {
  winners.push(thirdBaker.name);
}
// 3.1 look at third baker
var forthBaker = bakers[3];
// 3.2 look at first round result
wonFirstBattle = forthBaker.wonFirstBattle;
// 3.3 if they won add their name to winners list
if (wonFirstBattle === true) {
  winners.push(forthBaker.name);
}

/////////////////
// 4. Output our list of winners
/////////////////
console.log("Winners:");
console.log(winners[0]);
console.log(winners[1]);
console.log(winners[2]);
console.log(winners[3]);
