/* 
Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.
Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
*/

// Optimized solution using higher order functions
function numberJoy(n) {
    let numbers = n.toString().split('')
    let sum = numbers.map(Number).reduce((a, c) => a + c, 0)
    let reverse = sum.toString().split('').reverse().join('')
    
    return reverse * sum == n
}


// PASSES ALL TESTS
function numberJoy(n) {
    let isHarshad = false;
    let isRev = false;
    let digitArr = n.toString().split("");
    let digitSum = 0;
    for(let i = 0; i < digitArr.length; i++){
      digitSum += (digitArr[i] * 1);
    }
    const revDigits = num => parseInt(num.toString().split('').reverse().join(''));
    if(n % digitSum === 0){
      isHarshad = true;
    } if (isHarshad){

      let productOfDigit = digitSum * revDigits(digitSum); 
      if (productOfDigit === n){
        isRev = true;
        return isRev;
      }
    }
    return isRev
}


// Solves initial tests for Harshad numbers. still needs to reverse and multiply digit sums.
function numberJoy(n) {
    let isHarshad = false;
    let is
    let digitArr = n.toString().split("");
    console.log(digitArr);
    let digitSum = 0;
    for(let i = 0; i < digitArr.length; i++){
      digitSum += (digitArr[i] * 1);
      console.log(digitSum);
    }
    if(n % digitSum === 0){
      isHarshad = true;
    }
    return isHarshad;
}