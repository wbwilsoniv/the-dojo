/*
Description:
Given a string, you progressively need to concatenate the first character from the left and the first character from the right and "1", then the second character from the left and the second character from the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

"abcdef"  --> "af1be2cd3"
"abc!def" --> "af1be2cd3" // same result

*/

// Code

function charConcat(string){
    let str1 = string.slice(0, string.length)
    if(string.length % 2 != 0){
      str1 
    } 
    if(string.length % 2 != 0){
      let str1 = string.slice(0, Math.floor(string.length / 2));
      let str2 = string.slice(Math.ceil(string.length / 2), string.length);
      console.log(str1, str2);
      return str1, str2;
    } else {
      let str1 = string.slice(0,(string.length / 2 - 1));
      let str2 = string.slice(Math.ceil(string.length / 2), string.length);
      console.log(str1, str2);
      return str1, str2;
    }
    const str1Arr = str1.split("");
    const str2Arr = str2.split("");
    console.log(string,strArr);
  }