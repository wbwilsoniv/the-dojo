/*

Miles per gallon to kilometers per liter

Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Your answer should be accurate within 0.01 kpl.

Some useful associations relevant to this kata:

1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres
*/

// Solution
function converter (mpg) {
    let kpg = mpg/4.54609188;
    let km = kpg*1.609344;
    let kpl = Math.round(km * 100) / 100;
    return kpl;
  }

// Refactored Solution

function converter (mpg) {
    return Math.round(((mpg * 1.609344) / 4.54609188) * 100) / 100;
  }

