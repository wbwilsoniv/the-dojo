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

// Code  - doesn't work
function vowelOne(s){
    let numStg = "";
    let lowerS = s.toLowerCase();
    const regex = /[aeiou]/gi;
    console.log(lowerS.search(regex));
    for(let i = 0; i < lowerS.length; i++){
      if(lowerS.charAt(i) == vowels){
        
        console.log(vowels)
      }
    }
    /*
    for(let i = 0; i < s.length; i++){
      if(s.charAt(i) == "a" || s.charAt(i) == "A" || s.charAt(i) == "e" || s.charAt(i) == "E" || s.charAt(i) == "i" || s.charAt(i) == "I" || s.charAt(i) == "o" || s.charAt(i) == "O" || s.charAt(i) == "u" || s.charAt(i) == "U") {
        numStg.concat("1");
        console.log(numStg);
      } else {
        numStg.concat("0");
        console.log(numStg);
      }
    }
    */
    console.log(numStg);
  }
