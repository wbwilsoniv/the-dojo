/*
Description:
Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers.

Input >> Output Examples
jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number
jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(23) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(556847) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(4343456) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(89098) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(32) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1

*/

// passes basic tests, but not all.
function jumpingNumber(n){
    if(n < 10) {
      return "Jumping!!";
    }
    let jumping = false;
    let result = "";
    let nArr = Array.from(n.toString(), Number).map(Number);
    for(let i = 0; i < nArr.length; i++){
      if((nArr[i] + 1) != nArr[i+1] && (nArr[i] - 1) != nArr[i+1]) {
        jumping = false;
        return "Not!!"
        console.log(i,(nArr[i +1]));
      } else {
        jumping = true;
  
        console.log(i, nArr);
      }
    }
    jumping == true ? result = "Jumping!!" : result = "Not!!";
    return result;
  }

// Solved

function jumpingNumber(n){
    if(n < 10) {
      return "Jumping!!";
    }
    let jumping = false;
    let result = "";
    const nArr = Array.from(n.toString(), Number).map(Number);
    const checkDiff = ((a,b) => Math.abs(a - b));
    console.log(checkDiff(2,1));
    for(let i = 0; i < nArr.length - 1; i++){
      let diff = (checkDiff(nArr[i], nArr[i+1]));
      if(diff != 1) {
        jumping = false;
        return "Not!!"
      } else {
        jumping = true;
      } 
    }
    jumping == true ? result = "Jumping!!" : result = "Not!!";
    return result;
  }

// Refactored

function jumpingNumber(n){
    let arr = n.toString().split('')
    for(i=0; i < arr.length-1; i++){
      if(Math.abs(arr[i] - arr[i+1]) !== 1 ){
        return 'Not!!'
      }
    }
    return 'Jumping!!'
  }