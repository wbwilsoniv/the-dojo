/*
Return the type of the sum of the two arguments
*/

// Working solution
function typeOfSum(a, b) {
    let sum = a + b;
    let type = typeof(sum);
    let typeStg = type.toString();
    console.log(sum, type, typeStg);
    return type;
  }

// Refactored

function typeOfSum(a, b) {
    return typeof(a + b);
  }