/*
Description:
A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

Examples
7 ==> return "Balanced"
Explanation:
middle digit(s): 7
sum of all digits to the left of the middle digit(s) -> 0
sum of all digits to the right of the middle digit(s) -> 0
0 and 0 are equal, so it's balanced.
295591 ==> return "Not Balanced"
Explanation:
middle digit(s): 55
sum of all digits to the left of the middle digit(s) -> 11
sum of all digits to the right of the middle digit(s) -> 10
11 and 10 are not equal, so it's not balanced.
959 ==> return "Balanced"
Explanation:
middle digit(s): 5
sum of all digits to the left of the middle digit(s) -> 9
sum of all digits to the right of the middle digit(s) -> 9
9 and 9 are equal, so it's balanced.
27102983 ==> return "Not Balanced"
Explanation:
middle digit(s): 02
sum of all digits to the left of the middle digit(s) -> 10
sum of all digits to the right of the middle digit(s) -> 20
10 and 20 are not equal, so it's not balanced.
*/

// WIP CODE - solves for odd numbers, but does return requested string yet

function balancedNum(number)
{
   if(number >= 0 && number < 100){
     console.log("Balanced")
     return "Balanced";
   } else {
     
     let numArr = Array.from(number.toString(), Number).map(Number);
     let lOfArr = numArr.length;
     let midNumI = 0;
     let isEven = false;
       if( lOfArr % 2 != 0) {
         midNumI = Math.floor(lOfArr / 2);
       } else {
         isEven = true;
         midNumI = lOfArr / 2;
       }
       if(isEven != true){
         let firstHalf = numArr.slice(0, midNumI);
         let secondHalf = numArr.slice(midNumI+ 1, lOfArr);
        // console.log(firstHalf, secondHalf, isEven);
         let firstSum = firstHalf.reduce((a, cv) => a + cv);
         let secSum = secondHalf.reduce((a, cv) => a + cv);
         console.log(firstSum, secSum);
         firstSum == secSum ? console.log("Balanced") : console.log("Not Balanced");
       } else {
         let firstHalf = numArr.slice(0, midNumI - 1);
         let secondHalf = numArr.slice(midNumI, lOfArr - 1)
         // console.log(firstHalf, secondHalf, isEven);
         let firstSum = firstHalf.reduce((a, cv) => a + cv);
         let secSum = secondHalf.reduce((a, cv) => a + cv);
         console.log(firstSum, secSum);
         firstSum == secSum ? console.log("Balanced") : console.log("Not Balanced");
       }
     /*
     lOfArr % 2 != 0 ? midNumI = Math.floor(lOfArr / 2) : midNumI = lOfArr / 2;
     console.log(midNumI);
     ;
     console.log(firstHalf, secondHalf);
   
     let midNumIndex1 = lOfArr / 2;
     let midNumIndex2 = midNumIndex1 - 1;
      
    
     midNumIndex % 2 == 0 ? 
    ;
     let midNum = 0;
     let firstHalf = numArr.slice(0, midNumIndex);
     let secondHalf = numArr.slice(midNumIndex, (lOfArr - 1));
   
     // const firstSum = firstHalf.reduce((a, cv) => a + cv);
     // const secSum = secondHalf.reduce((a, cv) => a + cv);
     //console.log(firstHalf, secondHalf);
    
     if(lOfArr % 2 == 0) {
       let midNumIndex = lOfArr / 2;
       let midNum = numArr[midNumIndex];
     } else {
       let midNumIndex = Math.floor(lOfArr / 2);
       let midNum = numArr[midNumIndex];
     }
     
     */
    // console.log(numArr, lOfArr, midNumIndex, midNum);
   }
  //if(numArr )
  //let balanced = true;

}