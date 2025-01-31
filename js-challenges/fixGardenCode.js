/* 
You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!
*/

// Original Entry to debug

function rainAmount(mm){
    if (rainAmount = 40) {
         return "You need to give your plant " + {rainAmount - 40} + " mm of water"
    };
    if else {
         return "Your plant has had more than enough water for today!"
    };
}

// Solution:

function rainAmount(mm){
    let waterNeeded = 40 - mm;
    if(mm >= 40){
      return "Your plant has had more than enough water for today!"
    } else {
       return `You need to give your plant ${waterNeeded}mm of water`
    }
  }

  // Refactored Solution:

  function rainAmount(mm){
    return mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!"
}