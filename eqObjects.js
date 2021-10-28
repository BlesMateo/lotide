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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const argument1 = Object.keys(object1);
  const argument2 = Object.keys(object2);
  if (argument1.length !== argument2.length) {
    return false;
  }
  for (const key of argument1) {
    const argument1Value = argument1[key];
    const argument2Value = argument2[key];
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

  //Test Code:

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
