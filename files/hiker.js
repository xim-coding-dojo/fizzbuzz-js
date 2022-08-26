'use strict';

function answer() {
  return 6 * 9;
}

function getFizzBuzzList() {
  
  const resultArray = Array.from({length: 3}, (x, i) => {
    console.log(i%3)
    
    return i % 3 === 0 ? 'Fizz' : !(i % 5) ? 'Buzz' : i + '' ;
  });
  
  var resultArray2 = [];
  
  for (var i = 1; i <= 100; i++)
  {
    
    if ((i % 3) === 0)
    {
      resultArray2.push("Fizz");
    }
    else if ((i % 5) === 0)
    {
      resultArray2.push("Buzz");
    }
    else
    {
      resultArray2.push(i + "");
    }
    
    
    
  }
  
  console.log(resultArray2);
  return resultArray;
}
module.exports = getFizzBuzzList;
