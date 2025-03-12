/*
Description:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
Fundamentals
*/

// Code

function XO(str) {
    let xAmt = 0;
    let oAmt = 0;
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === "o" || str.charAt(i) === "O") { oAmt++};
    if(str.charAt(i) === "x" || str.charAt(i) === "X") { xAmt++};
    console.log(xAmt, oAmt);
  }
  if(xAmt === oAmt){ 
    return true 
  } else { return false }
  
}

// Refactored Regex
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }
