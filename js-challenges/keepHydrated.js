/*

Description:

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
AlgorithmsMathematicsFundamentals
*/

// Works
function litres(time) {
    let lits = Math.floor(time * 0.5);
    console.log(lits);
    return lits;
  }

// Refactored
function litres(time) {
    return Math.floor(time * 0.5);
  }

// ES6 Refactor
const litres = time => Math.floor(time * 0.5);