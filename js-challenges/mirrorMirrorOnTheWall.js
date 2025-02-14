/*
DESCRIPTION:

Too long, didn't read
You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, then the next greatest, and so on...

More info
The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

Examples
[]  -->  []
[1]  -->  [1]
[2, 1]  -->  [1, 2, 1]
[1, 3, 2]  -->  [1, 2, 3, 2, 1]
[-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
[-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]
[-5, 10, 8, 10, 2, -3, 10] --> [-5, -3, 2, 8, 10, 10, 10, 10, 10, 8, 2, -3, -5]
Good luck!
*/

/*
STEPS:
    - sort array of numbers
    - find largest numbers
    - build new array that starts with smallest number
    - middle number is largest
    - second half decreases
*/

// CODE:

// Passes basic tests, but fails large number random tests. 

function mirror(data) {
    let response = [...data];
    function order(a,b){
      return a < b ? -1 : (a > b ? 1 : 0);
    }
    console.log(response);
    if(response.length <= 1){
      return response;
    }
    const sortedArr = response.sort(function(a,b){
      return a-b;
    });
    console.log(sortedArr);
    let mirrorArr = sortedArr;
    for(let i = sortedArr.length - 2; i >= 0; i--){
      mirrorArr.push(sortedArr[i]);
    }
    return mirrorArr;
  }

// Passed all tests but one
function mirror(data) {
let copyData = [...data];
const sortedData = copyData.sort((a,b) => a - b);
//const sortedArr = arr => [...arr].sort((a, b) => a - b);

console.log(sortedData);
if(sortedData.length <= 1){
  return copyData;
}
const firstHalf = [...sortedData].slice(0, (sortedData.length));
const secondHalf = [...sortedData].slice(0,(sortedData.length - 1));
const revArr = arr => {
  return [...arr].reduce((rev, x) => [x, ...rev], []);
}
const revSec = revArr(secondHalf);
console.log(firstHalf, secondHalf, revSec);
const fullArr = firstHalf.concat(revSec);
return fullArr;
}

// Works!

function mirror(data) {
    if (data.length <= 1) {
        return [...data];
    }
    
    // Create a single copy and sort it ascending
    // This is our most expensive operation, but we only do it once
    const sorted = [...data].sort((a, b) => a - b);
    
    // Calculate the result length (original length * 2 - 1)
    // This ensures we have a middle element and equal sides
    const resultLength = data.length * 2 - 1;
    
    // Create a new array with the final size we need
    // This is more efficient than concatenating arrays
    const result = new Array(resultLength);
    
    // Fill the array from both ends simultaneously
    // This is more efficient than creating separate arrays and joining them
    for (let i = 0; i < data.length; i++) {
        // Place the same number on both sides of the middle
        result[i] = sorted[i];                          // Left side
        result[resultLength - 1 - i] = sorted[i];       // Right side
    }
    
    // Place the highest number in the middle
    result[data.length - 1] = sorted[data.length - 1];
    
    return result;
}

// Refactored

function mirror(data) {
    const sort = data.slice().sort((a, b) => a - b);
    return [...sort, ...sort.reverse().slice(1)];
  }