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

module.exports = eqArrays;