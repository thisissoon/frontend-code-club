// refactor again

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

function sortBaker(baker) {
  if (baker.wonFirstBattle) {
    winners.push(baker);
  }
}

bakers.forEach(sortBaker);

/////////////////
// 4. Output our list of winners
/////////////////
console.log("Winners:");
winners.forEach(winner => console.log(winner.name));
