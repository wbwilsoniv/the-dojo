/*
Description:
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"
*/

// Solution

function stringMerge(string1, string2, letter){
    let partOne = string1.slice(0,string1.indexOf(letter));
    let partTwo = string2.slice(string2.indexOf(letter));
    let merged = partOne.concat(partTwo); 
    console.log(partOne, partTwo, merged);
    return merged;
  }


// Refactored with template literals

const stringMerge = (string1, string2, letter) =>
    `${string1.split(letter, 1)}${string2.slice(string2.indexOf(letter))}`;