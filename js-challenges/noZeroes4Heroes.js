/*
Description:
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450   -> 145
960000 -> 96
1050   -> 105
-1050  -> -105
0      -> 0
Note: Zero should be left as it is.

*/

// Works to remove all zeroes, but only the last zero needs to be removed
function noBoringZeros(n) {
    let numArr = Array.from(n.toString(), Number).map(Number);
    console.log(numArr);
    const noZero = numArr.filter((num) => num != 0);
    console.log(noZero);
    const numStg = noZero.reduce((x, y) => x.toString() + y.toString());
    const result = parseInt(numStg, 10);
    return result;
  }


// Working Solution

function noBoringZeros(n) {
    // Special case: if n is 0, return 0
    if (n === 0) return 0;
    
    // Convert number to string to easily work with digits
    let numStr = Math.abs(n).toString();
    
    // Remove trailing zeros using while loop
    while (numStr.endsWith('0')) {
        numStr = numStr.slice(0, -1);
    }
    
    // Convert back to number and preserve original sign
    return Math.sign(n) * Number(numStr);
}

// Optimized Solution

function noBoringZeros(n) {
    if (n === 0) return 0;
    
    // Divide by 10 until we hit a non-zero remainder
    while (n !== 0 && n % 10 === 0) {
        n = n / 10;
    }
    
    return n;
}

// REGEX Solution

function noBoringZeros(n) {
    return Number(String(n).replace(/0+$/,''));
  }