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


  const without = function(Array, Array2) {
  let result = [];
    for (let i = 0; i < Array.length; i = i + 1) {
      if (!Array2.includes(Array[i])) {
        result.push(Array[i]);
      }
      }
    return result;
    }

  assertArrayEquals(without([1, 2, 3], [1])
  assertArrayEquals(without(["1", "2", "3"], [1, 2, "3"])

  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);