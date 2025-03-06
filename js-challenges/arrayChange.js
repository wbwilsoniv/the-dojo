/*
Description:
Task
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example
For arr = [1, 1, 1], the output should be 3.

Input/Output
[input] integer array arr

Constraints:

3 ≤ inputArray.length ≤ 100,

-10000 ≤ inputArray[i] ≤ 10000.

[output] an integer

The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.

It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
*/

// Code
function arrayChange(arr) {
    const newArr = [...arr];
    console.log(newArr);
    let moves = 0;
  /*
    const check = (a,b) => b-a;
    const movesNeeded = newArr.reduce((moves,i,j) => {
      if(i - j <= 0){
        moves += (i - j) + 1
      }
      return moves
    }, 0)
    console.log(check(1,2))
    console.log(movesNeeded)
  */
  for(let i = 0; i < arr.length; i++){
    if(arr[i] - arr[i + 1] <= 0){
      moves +=  (arr[i] - arr[i + 1]) + 1;
      }
    }
  console.log(moves);
}
