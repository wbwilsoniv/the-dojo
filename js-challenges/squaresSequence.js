/*
DESCRIPTION:
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

// Passes Initial Tests
function squares(x, n) {
    let sqArr = [];
    if(n <= 0){
        return sqArr;
    } else {
        sqArr.push(x);
        for(let i = 1; i < n; i++){
            sqArr.push(sqArr[i - 1] ** 2);
            console.log(sqArr[i - 1], sqArr);
        }
      return sqArr;
    }
}

// Did not work
function squares(x, n) {
    let sqArr = [];
    if(x <= 0){
        return sqArr;
    } else {
        for(let i = 1; i <= n; i++){
            sqArr.push(x ^ i);
            console.log(sqArr);
        }
    }
}