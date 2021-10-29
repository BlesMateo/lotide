//It will take in two parameters as well:
//1. The array to work with
//2. The callback (which Lodash calls "predicate")

//Implement takeUntil which will keep collecting items from a provided array
//until the callback provided returns a truthy value.

//Incorporate eqArrays and assertArrayEqual

const eqArrays = function(Array, Array2) {
  if (Array.length !== Array2.length)
  return false;
  for (let i = 0; i < Array.length; i = i + 1) {
    if (Array[i] !== Array2[i]) {
      return false
    }
  }
  return true
  }

const assertArrayEqual = function(Array, Array2) {
  if (eqArrays(Array, Array2) !== false)
  console.log(`🛑🛑🛑 Assertion Failed: ${Array} !== ${Array2}.`);

  else console.log(`✅✅✅ Assertion Passed: ${Array} === ${Array2}.`); }

// Create takeUntil here
const takeUntil = function(array, callback) {
let outcome = [];
for (let value of array) {
  if (callback(value)) {
    return outcome;
  } else {
    outcome.push(value);
  }
  }
}



//Test code:

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);