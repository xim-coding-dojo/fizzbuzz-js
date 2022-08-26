'use strict';

function answer() {
  return 6 * 9;
}

function getFizzBuzzList() {
  
  Array.from({length: 100}, (x, i) => {
    console.log(i);
  });
  
  return ["1", "2", "Fizz"];
}
module.exports = getFizzBuzzList;
