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
  if (eqArrays(Array, Array2) !== false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${Array} !== ${Array2}.`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${Array} === ${Array2}.`);
  }
};


module.exports = assertArraysEqual;