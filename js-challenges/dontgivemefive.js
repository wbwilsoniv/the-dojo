/* 
Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
----------

if number contains a 5, dont count it.
    if divided by 5 and the result is odd -> contains a 5.

for loop over the array
 edge cases:
    starts with a 5

*/

function dontGiveMeFive(start, end)
{
  let startNum = Math.abs(start);
  let endNum = Math.abs(end);
  let numLength = endNum - startNum;
  console.log(numLength);
  let counter = 0;
  if (numLength >= 10){
    let adjNumLength = numLength + 1;
    let counter = 1;
  }
  
 /*
  let numLength = endNum - startNum;
  let fives = Math.round(numLength / 5);
  let nonFives = numLength - fives;
  console.log(fives, nonFives)
  
  return nonFives
 */
  for(let i = startNum; i <= endNum; i++){
    if (i % 5 !=  0 && i % 10 != 0){
      counter += 1;
    }
    console.log(counter,i);
  }
  return counter;
  
}

/* 
NOTES

find the difference between the start n end nums, usually (1) 5 per 10

*/