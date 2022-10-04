/* 
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

*/

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