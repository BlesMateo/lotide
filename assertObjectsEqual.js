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

const eqObjects = function(object1, object2) {
  const argument1 = Object.keys(object1);
  const argument2 = Object.keys(object2);
  if (argument1.length !== argument2.length) {
    return false;
  }
  for (const key of argument1) {
    const argument1Value = object1[key];
    const argument2Value = object2[key];
    if (Array.isArray(argument1Value) || Array.isArray(argument2Value)) {
      if (!eqArrays(argument1Value, argument2Value)) {
        return false;
      }
    } else if (argument1Value !== argument2Value) {
      return false;
    }
  }
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);

  if(!result) {
    console.log(console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  } else {
    console.log(console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`))
  }
};

//Test code:

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(ab, ba); // true
assertObjectsEqual(ab, abc); // false
assertObjectsEqual(cd, dc); // true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); //false

