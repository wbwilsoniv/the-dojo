/*
Description:
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!

FundamentalsRecursionAlgorithms
*/

// Works!

function reduce(fraction) {
    let numer = fraction[0];
    let denom = fraction[1];
    function reduce(num,den){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(num,den);
    return [num/gcd, den/gcd];
  }
    return reduce(numer,denom)
  }

// ES6 Refactor

const gcd = (a, b) => b ? gcd(b, a % b) : a;

const reduce = ([a, b]) => {
  let d = gcd(a, b);
  return [a / d, b / d];
};
