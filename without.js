const without = function(Array, Array2) {
let result = [];
  for (let i = 0; i < Array.length; i = i + 1) {
    if (!Array2.includes(Array[i])) {
      result.push(Array[i]);
    }
    }
  return result;
  }
