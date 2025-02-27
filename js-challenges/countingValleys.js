/*
Description:
You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

s='FUFFDDFDUDFUFUF'
U=UP
F=FORWARD
D=DOWN
To represent string above

(level 1)  __
(level 0)_/  \         _(exit we are again on level 0)
(entry-1)     \_     _/
(level-2)       \/\_/
So here we passed one valley

AlgorithmsStrings

*/

// Code
function countingValleys(s) {
    let level = 0;
    let valleys = 0;
    let path = s;
    for (let i = 0; i < path.length; i++) {
      if (path[i] === 'U') {
        level++;
        if (level === 0) {
          valleys++;
        }
      } else if (path[i] === 'D') {
        level--;
      }
    }
    return valleys;
  }
