///////////////////
// PROBLEM DEFINITION
//////////////////
// We want to figure out who is in the next round of bake off
// So far most people have baked in one round and there are 2 people left to bake
// Each bake battle in the first round resulted in a winner and a loser
// We want to know who we is through to the next round

///////////////////
// CONSIDER / PLAN SOLUTION
//////////////////

// How would we solve this in Real life?

// Walk around the office asking everyone one by one if they won thier round, only write down winners?
// Walk around asking, write down winners column and losers column, winners column is what we want?
// Ask slack / Jaz for names and if they won? From list add winners to one list and losers to another?

// All solutions are fundamentaly the same:

// 1. we need an awareness of who works at soon / who is in the office
// 2. we need to record these peoples names and if they won
// 3. we need somewhere to record our winners
// 4. we need to go though our list of people and decide whether to add them to our winners list or not
// 5. we need to show this winners list

// Pseudocode

// 1. Create list of bakers with info like name and first round bake battle result
// 2. Create somewhere to record list of winners
// 3.1 look at first baker
// 3.2 look at first round result
// 3.3 if they won add their name to winners list
// 3.1 look at second baker
// 3.2 look at first round result
// 3.3 if they won add their name to winners list
// 3.1 look at third baker
// 3.2 look at first round result
// 3.3 if they won add their name to winners list
// 3.1 look at third baker
// 3.2 look at first round result
// 3.3 if they won add their name to winners list
// 4. Output our list of winners
