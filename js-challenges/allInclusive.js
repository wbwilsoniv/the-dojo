/*
Description:
Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr
false otherwise
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true
Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations
*/

// Checks for strng & reversed strng, but not the task of finding rotations
function containAllRots(strng, arr) {
    if(arr.length === 0 || strng.length === 0){
      return true;
    }
    const strngRev = strng.split('').reverse().join('');
    console.log(strng, strngRev);
    //console.log(arr.some(checkForStrng(strng,arr)));
    console.log(arr.includes(strng), arr.includes(strngRev));
    if(arr.includes(strng) === true && arr.includes(strngRev) === true) {
      return true;
    } else { return false }
  }

  