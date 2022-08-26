'use strict';

function answer() {
  return 6 * 9;
}

function getFizzBuzzList() {
  
  const resultArray = Array.from({length: 3}, (x, i) => {
    return i;
  });
  
  var resultArray2 = [];
  
  for (var i = 1; i <= 100; i++)
  {
    resultArray2.push(i);
  }
  
  console.log(resultArray);
  return resultArray2;
}
module.exports = getFizzBuzzList;
