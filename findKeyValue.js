const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyValue = function (object, value) {
  for (const key in object) {
    if (value === object[key])
    return key
  }
}
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyValue;