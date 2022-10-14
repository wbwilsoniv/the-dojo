/*
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.
*/

// Optimized
const search = (budget, prices) => prices.filter(price => price <= budget).sort((a,b) => a - b).toString();


// Refactored to use ES6 syntax for sort function
function search(budget, prices) {
    const withinBudget = prices.filter(price => price <= budget);
    const sortedPrices = withinBudget.sort((a,b) => (a - b))
    return sortedPrices.toString();
}

// Passes Tests
function search(budget, prices) {
  const withinBudget = prices.filter(price => price <= budget);
  withinBudget.sort(function (a,b) {return a - b});
  console.log(withinBudget);
  return withinBudget.toString();
}

// Almost sorts array
function search(budget, prices) {
    const withinBudget = prices.filter(price => price <= budget);
    let sortedPrices = [];
    if(withinBudget.length > 0){
      for(i = 0; i <= withinBudget.length-1; i++){
        if(withinBudget[i] >= withinBudget[0]){
          sortedPrices.push(withinBudget[i]);
          console.log(sortedPrices);
        } else {sortedPrices.unshift(withinBudget[i])}
      }
    }
    /*for(i = 0; i < pricesSorted.length; i++){
      if(pricesSorted[i] <= budget){
        withinBudget.push(pricesSorted[i]);
      }
      console.log(withinBudget);
    }
    */
   /* if(withinBudget.length > 0){
    for(i = 0;i < withinBudget.length; i++){
      if(withinBudget[i] >= withinBudget[0]){
        pricesSorted.push(withinBudget[i])
        console.log(pricesSorted);
      } else {pricesSorted.unshift(withinBudget[i])}
    }
      }
      */
    console.log(sortedPrices.toString());
    return sortedPrices.toString();
  }

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