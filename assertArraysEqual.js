const eqArrays = function(Array, Array2) {
  if (Array.length !== Array2.length) {
  console.log(`🛑🛑🛑 Assertion Failed: ${Array} !== ${Array2}.`);
}
  for (let i = 0; i < Array.length; i = i + 1) {
    if (Array[i] !== Array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${Array} !== ${Array2}.`);
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${Array} === ${Array2}.`); }
