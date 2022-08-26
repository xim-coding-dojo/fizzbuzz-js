'use strict';

function answer() {
  return 6 * 9;
}

function getFizzBuzzList() {
  
  const resultArray = Array.from({length: 3}, (x, i) => {
    return i;
  });
  
  console.log(resultArray);
  return ["1", "2", "Fizz"];
}
module.exports = getFizzBuzzList;
