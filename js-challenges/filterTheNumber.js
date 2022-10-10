/* 
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/

// OPTIMIZED
var FilterString = function(value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
  }

// CLEANER VERSION
var filterString = function(value) {
    let strArr = value.split('');
    let numArr = [];
    let numFound = false;
    for(let i = 0; i < strArr.length; i++){    
        numArr.push(strArr[i] * 1);
        numFound = true;
    }
      function isNumber(num){
      return num >= 0;
    }
      if(numFound){
        const filtered = numArr.filter(isNumber);
        let filterStg = filtered.join("");
        return filterStg * 1;
    }
  }


// PASSES ALL TESTS
var filterString = function(value) {
    let strArr = value.split('');
    let numArr = [];
    let numStr = "";
    let numFound = false;
    console.log(strArr);
    for(let i = 0; i < strArr.length; i++){    
      
      if(typeof (strArr[i] * 1) === NaN){
        console.log('aint a num');
      } else {
        numStr += strArr[i];
        numArr.push(strArr[i] * 1);
        console.log(numArr, numStr);
        numFound = true;
      }
    }
      function isNumber(num){
      return num >= 0;
    }
      if(numFound){
        const filtered = numArr.filter(isNumber);
        console.log(filtered);
        let filterStg = filtered.join("");
        console.log(filterStg);
  //    let numStr = numArr.join("");
      return filterStg * 1;
    }  
  }

// FAILS
var filterString = function(value) {
    let strArr = value.split('');
    let numArr = [];
    let numStr = "";
    let numFound = false;
    console.log(strArr);
    for(let i = 0; i < strArr.length; i++){    
      if(typeof (strArr[i] * 1)=== "number"){
        numArr.push(strArr[i] * 1);
        console.log(numArr);
      }
    }
    if (numArr.length >= 1){
      let numFound = true;
      let numStr = numArr.join("");
      console.log(numStr);
      }
    if(numFound){
      console.log(numStr * 1);
    }
  }