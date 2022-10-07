/* 
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/




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