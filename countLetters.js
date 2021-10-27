//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const countLetters = function (str) {
  const outcome = {};
  str = str.replace(' ', '');
  for (let alphabet of str) {
    if (!outcome[alphabet])
      outcome[alphabet] = 1;
    else (outcome[alphabet]++);
    }
    return outcome;
  };

//Test code
console.log(countLetters("Lighthouse in the house"));

