const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns [5, 6] for [4 ,5 ,6 ]", () => {
    assert.deepEqual (tail([4,5,6]), [5,6]);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2 ,3 ,4]), [2, 3, 4]);
  });

});

