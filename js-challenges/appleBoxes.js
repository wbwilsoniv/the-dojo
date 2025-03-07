/*
Description:
Task
There're k square apple boxes full of apples. If a box is of size m, then it contains m × m apples. You noticed two interesting properties about the boxes:

The smallest box is of size 1, 
the next one is of size 2,..., 
all the way up to size k.

Boxes that have an odd size contain only yellow apples. 
Boxes that have an even size contain only red apples.
Your task is to calculate the difference between the number of red apples and the number of yellow apples.

Example
For k = 5, the output should be -15

There are 1 + 3 × 3 + 5 × 5 = 35 yellow apples and 2 × 2 + 4 × 4 = 20 red apples, thus the answer is 20 - 35 = -15.

Input/Output
[input] integer k

A positive integer.

Constraints: 1 ≤ k ≤ 40

[output] an integer

The difference between the two types of apples.
*/

// Code
function appleBoxes(k) {
    let red = 0;
    let yellow = 0;
    for(let i = k; i >= 1; i--){
      if(i % 2 === 0){
        red += i * i;
      } else { 
        yellow += i * i;
      }
    }
    console.log(red, yellow);
    return red - yellow;
  }

// Refactored
const appleBoxes = k =>
    (k ** 2 + k) / (k % 2 ? -2 : 2);
