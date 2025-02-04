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