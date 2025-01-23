/*
Description:

Write a function, factory, that takes a number as its parameter and returns another function.

The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.

Translations and comments (and upvotes) welcome!

Example
var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
fives(myArray);               //returns [5, 10, 15];

*/

// Solution

function factory(x){
    return function(arr) {
      return arr.map(num => num * x);
    };
  };

// Refactored

function factory(x){
    return array => array.map(num => num * x );
};

// ES6 Version

const factory = x => arr => arr.map(num => num * x);

/* 

Learning Notes

Key Concepts Demonstrated:

  Closures: The inner function "closes over" the multiplier variable, maintaining access to it even after the outer function has finished executing.
  Higher-Order Functions: A function that returns another function
  Functional Programming: Using map() to transform an array without mutating the original

Mental Model:

  Think of factory like a function generator. It's a function that creates custom multiplier functions on the fly. Each time you call factory with a different number, you get a new function specialized for multiplying by that specific number.
  
  Why is this useful?

  It allows you to create reusable, specialized functions dynamically
  Demonstrates the power of closures in JavaScript
  Provides a flexible way to transform arrays

Practice Questions for Deeper Understanding:

  What would happen if you called factory with 0?
  Can you modify the function to handle non-number inputs?
  How might you extend this to do other operations besides multiplication?


TAGS:
 #FunctionalProgramming #Arrays #Map
 */