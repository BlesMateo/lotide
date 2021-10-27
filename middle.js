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

  const assertArraysEqual = function(Array, Array2) {
  if (eqArrays(Array, Array2) !== false)
  console.log(`🛑🛑🛑 Assertion Failed: ${Array} !== ${Array2}.`);

  else console.log(`✅✅✅ Assertion Passed: ${Array} === ${Array2}.`); }

  const middle = function(array) {
    let result = [];
    let middleFunction = 0;
  //For arrays with one or two elements, there is no middle. Return an empty array
    if (array.length <= 2) {
      return result;
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
    } else if (array.length % 2 !== 0) {
      middleFunction = Math.ceil((array.length / 2) - 1);
      result.push(array[middleFunction]);
      return result;
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
    } else if (array.length % 2 === 0) {
      middleFunction = (array.length / 2) - 1;
      result.push(array[middleFunction]);
      middleFunction = (array.length / 2);
      result.push(array[middleFunction]);
      return result;
    }
  }

(middle([1]), []);
(middle([1,2]), []);
(middle([1,2,3]), [2]);
(middle([1,2,3,4,5]), [3]);
(middle([1,2,3,4]), [2,3]);
(middle([1,2,3,4,5,6]), [3,4]);