/*
Description:
SpeedCode #2 - Array Madness

Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

Get your timer out. Are you ready? Ready, get set, GO!!!
*/

//Working Solution

function arrayMadness(a, b) {
    let aSum = 0;
    let bSum = 0;
    function squares(n) {
      let aSq = n * n;
      console.log(aSq)
      aSum += aSq;
      console.log(aSq, aSum);
    };
     
  const aSum1 = a.forEach(squares);
    console.log(aSum1);
    function cubes(m) {
      let bCube = m * m * m;
      bSum += bCube;
      console.log(bCube, bSum);
    };
    
  const bSum1 = b.forEach(cubes);
    
     console.log(aSum,bSum, typeof(aSum), typeof(bSum));
    if(aSum > bSum) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  };

  // Refactored Solution

  function arrayMadness(a, b) {
    let aSum = 0;
    let bSum = 0;
    
    const squares = (n) => {
      let aSq = n*n;
      aSum += aSq;
    };
     
    const aSum1 = a.forEach(squares);
  
    const cubes = (m) => {
      let bCube = m*m*m;
      bSum += bCube;
    };
    
    const bSum1 = b.forEach(cubes);
    
    const isAbigger = aSum > bSum ? true : false;
  
    return isAbigger;
  
  };