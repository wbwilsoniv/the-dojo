/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// Optimized
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);



// Refactored with switch cases
function DNAStrand(dna){
    //your code here
    let res="";
    for(var i=0; i<dna.length; i++) {
      switch(dna[i]) {
        case 'A':
          res += "T";
          break;
        case 'T':
          res += "A";
          break;
        case 'G':
          res += "C";
          break;
        case 'C':
          res += "G";
          break;
      }
    }
    return res;
  }


// Passes initial tests
function DNAStrand(dna){
    let compStrand = [];
    for(let i = 0; i < dna.length; i++){
      if(dna[i] === "A"){
        compStrand.push("T");
      } else if (dna[i] === "T"){
          compStrand.push("A");
      } else if (dna[i] === "G"){
          compStrand.push("C");
      } else if (dna[i] === "C"){
          compStrand.push("G");
      }
    }
    console.log(compStrand.join(''))
   return compStrand.join('')
  }