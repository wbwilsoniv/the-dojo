/*
Description:
You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.

FundamentalsAlgorithmsArrays
*/

// Code - fails advanced tests
function twins(myArray){
    const sorted = [...myArray].sort();
    console.log(sorted);
    if(sorted.length % 2 != 0){
      return false;
    }
    for(i = 0; i < sorted.length; i++){
      if(sorted[i] === sorted[i+1]){
        i+=1;
        console.log("twins", i);
      } else if(sorted[i] === sorted[i + 2]){ 
        return false;
      } else { return false }
    }
    return true;
}

// Working Code

function twins(myArray){
    // If the array length is odd, it can't be all pairs
      if (myArray.length % 2 !== 0) {
        return false;
      }
      let numbers = [...myArray];
      // Create our counting box
      const numberCounts = {};
      
      // Count each number
      for (let num of numbers) {
        // This is a shorter way to add 1 to our count
        // If the number is new, it starts at 1, otherwise adds 1
        numberCounts[num] = (numberCounts[num] || 0) + 1;
        
        // If we ever see a number more than twice, return false right away
        if (numberCounts[num] > 2) {
          return false;
        }
      }
      
      // Check if all numbers appear exactly twice
      for (let count of Object.values(numberCounts)) {
        if (count !== 2) {
          return false;
        }
      }
      
      return true;
    }

// Refactored

    function twins(myArray){
        return myArray.every(x => myArray.filter(y => x == y).length == 2)
      }