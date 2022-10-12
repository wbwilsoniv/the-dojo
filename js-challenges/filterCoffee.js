/*
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.
*/

// Kinda sorts the array, but not accurately.
function search(budget, prices) {
    let withinBudget = [];
    let pricesSorted = prices.sort();
    console.log(pricesSorted);
    for(i = 0; i < pricesSorted.length; i++){
      if(pricesSorted[i] <= budget){
        withinBudget.push(pricesSorted[i]);
      }
      console.log(withinBudget);
    }
    return withinBudget.toString();
  }

// Returns nonsorted array of prices within budget
function search(budget, prices) {
    let withinBudget = [];
  // return array of prices that are within budget
    for(i = 0; i < prices.length; i++){
      if(prices[i] <= budget){
        withinBudget.push(prices[i]);
      }
      console.log(withinBudget);
    }
  }