// Our map function will take in two arguments:

// 1. An array to map
// 2. callback function

//The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

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


  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

}
const results1 = map(words, word => word[0]);
console.log(results1);
