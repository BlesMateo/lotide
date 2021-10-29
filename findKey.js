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


const findKey = (object, callback) => {
let objectKeys = Object.keys(object);

for (let key of objectKeys) {
  if (callback(object[key])) {
    return key;
  }
}
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
);