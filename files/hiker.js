'use strict';

function answer() {
  return 6 * 9;
}

function getFizzBuzzList() {
  const mapToFizzForModulo3 = mapModuloToString(3,"Fizz")
  
  
  const resultArray = Array.from({length: 100}, (x, i) => i+1)
  .map(mapToFizzForModulo3(i))
  .map(i=>(i % 5) === 0 ? "Buzz" : i)
  .map(i=>(i % 3*5) === 0 ? "FizzBuzz" : i)
  .map(i=>i+"");
  
  function mapModuloToString(modulo, string)
  {
    return (number) {
      return (number % modulo) === 0 ? string
    }
  }
  
  /* var resultArray2 = [];
  
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
    
  */
    
  }
  
  console.log(resultArray);
  return resultArray;
}
module.exports = getFizzBuzzList;
