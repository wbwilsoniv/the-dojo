/*
Description:

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

ArraysFundamentals
*/

// Code - Works

function noOdds( values ){
    let copy = [...values];
    let evens = [];
    for(let i = 0; i < copy.length; i++) {
      if(copy[i] % 2 === 0) {
        evens.push(copy[i]);
        console.log(evens);
      }
    }
    return evens;
  }

// Refactor
const noOdds = values => values.filter(x => x % 2 === 0);
