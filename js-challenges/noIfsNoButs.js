/*
Description:
Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"
There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? :.

In fact the word if and the character ? are not allowed in your code.
*/

// Code - Works

function noIfsNoButs(a, b) {
    const val  = ((a,b) => a - b);
    let comp = "";
    let result = Math.sign(val(a,b));
    console.log(result);
    switch (result) {
        case 1:
          comp = "greater than";
          console.log(comp);
          break;
        case -1:
          comp = "smaller than";
          console.log(comp);
          break;
        case 0:
          comp = "equal to";
          console.log(comp);
  
    }
    let response = `${a} is ${comp} ${b}`;
    console.log(response)
    return response;
  }

// Refactor

function noIfsNoButs(a, b) {
    return a + " is " + ((a === b && "equal to") || ((a > b && "greater") || "smaller") + " than") + " " + b;
  }

// #Switch