/* 
DESCRIPTION:
Your task is to implement a function that calculates an election winner from a list of voter selections using an Instant Runoff Voting algorithm. If you haven't heard of IRV, here's a basic overview (slightly altered for this kata):

Each voter selects several candidates in order of preference.
The votes are tallied from the each voter's first choice.
If the first-place candidate has more than half the total votes, they win.
Otherwise, find the candidate who got the least votes and remove them from each person's voting list.
In case of a tie for least, remove all of the tying candidates.
In case of a complete tie between every candidate, return nil(Ruby)/None(Python)/undefined(JS).
Start over.
Continue until somebody has more than half the votes; they are the winner.
Your function will be given a list of voter ballots; each ballot will be a list of candidates (symbols) in descending order of preference. You should return the symbol corresponding to the winning candidate. See the default test for an example!

*/

function runoff(voters){
    //array of arrays
    // array length = number of ballots
    // 1st place must be > 50% (number of ballots / 2)
    // if no winner, remove the lowest nummber of votes
    //  - if two lowests tie -> remove both.
    // recursive function? 
    console.log(voters.length);
    let votesNeeded = voters.length / 2;
    let voteCount = "";
    const lastVotes = voters.map(vote => (voteCount.concat(vote)));
    console.log(lastVotes);
    let cleanStrings = lastVotes.split(",");
    //const stringVotes = lastVotes.forEach(vote => (vote.split(",")))
    console.log(cleanStrings);
  }