/* 
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

*/

// WORKS!
function sumStrings(a,b) { 
    let bigNums = false;
    let bigNumA = BigInt(a);
    let bigNumB = BigInt(b);
    if(a.length === 0){
      let numA = 0;
    };
    if(b.length === 0) {
      let numB = 0;
    }
   if(a.length >= 15){
     bigNums = true;
     console.log(bigNumA);
   }
    if(b.length >= 15){
     bigNums = true
     console.log(bigNumB);
   }
    if(bigNums){
      let bigNumSum = bigNumA + bigNumB;
      console.log(bigNumSum);
      return bigNumSum.toString();
    } else {
      let numA = a * 1;
      let numB = b * 1;
      let sumNum = numA + numB;
      console.log(sumNum);
      let sumStr = sumNum.toFixed();
      return sumStr;
    }
  }


// PASSES TESTS - Fails on large string (returns in scientific notation) 
function sumStrings(a,b) { 

    if(a.length === 0){
      let numA = 0;
    };
    if(b.length === 0) {
      let numB = 0;
    }
   
    let numA = a * 1;
    let numB = b * 1;
    let sumNum = numA + numB;
    console.log(sumNum);
    let sumStr = sumNum.toFixed();
    return sumStr;
  }

// PASSES INITIAL TESTS - Fails on ('', '5') 
function sumStrings(a,b) { 
    if(a.length === 0){
      let numA = 0;
    };
    if(b.length === 0) {
      let numB = 0;
    }
    let numA = parseInt(a, 10);
    let numB = parseInt(b, 10);
    console.log(numB);
  
    if(isNaN(numA)) {
      let numA = 0;
      console.log(numA);
    }
    let sumNum = numA + numB;
    let sumStr = sumNum.toString();
    return sumStr;
  }