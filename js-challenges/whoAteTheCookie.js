/*
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.

Please leave feedback for this kata. Cheers!
*/

// Working Solution

function cookie(x){
    let culprit = "";
    if(typeof x == "string"){
      culprit = "Zach";
    } else if (typeof x == "number"){
      culprit = "Monica";
    } else {
      culprit = "the dog";
    }
    return `Who ate the last cookie? It was ${culprit}!`
  };

// Refactored

function cookie(x){
    let culprit = "";
    let tOfX = typeof x;
    tOfX == "string" ? culprit = "Zach" : tOfX == "number" ? culprit = "Monica" : culprit = "the dog"
    return `Who ate the last cookie? It was ${culprit}!`
  };