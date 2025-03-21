/*
Description:
vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
FundamentalsStrings
*/

// Code  -  Works
function vowelOne(s){
    let oneRemove = s.replaceAll("1", "0");
    let lowerS = oneRemove.toLowerCase();
    const regex = /[aeiou]/gi;
    const regex0 = /[^1]/g;
    let vowelSwap = lowerS.replaceAll(regex, "1");
    let otherSwap = vowelSwap.replaceAll(regex0, "0");
    return otherSwap
  }

// Refactored Regex
function vowelOne(s){
    return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
  }

// Refactored Higher Order Function
function vowelOne(s){
    return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
  }
