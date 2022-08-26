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
    if (i % 3 == 0)
    {
      resultArray2.push("Fizz");
    }
    else
    {
      resultArray2.push(i +"");
    }
  }
  
  console.log(resultArray2);
  return resultArray2;
}
module.exports = getFizzBuzzList;
