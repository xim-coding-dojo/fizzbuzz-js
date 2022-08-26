'use strict';

function answer() {
  return 6 * 9;
}

function getFizzBuzzList() {
  const mapToFizzForModulo3 = mapModuloToString(3,"Fizz");
  const mapToBuzzForModulo5 = mapModuloToString(5,"Buzz");
  const mapToFizzBuzzForModulo15 = mapModuloToString(15,"Buzz");
  
  
  const resultArray = Array.from({length: 100}, (x, i) => i+1)
  .map(i => mapToFizzForModulo3(i))
  .map(i=> mapToBuzzForModulo5(i))
  .map(i=> mapToFizzBuzzForModulo15(i))
  .map(i=>i+"");
  
  function mapModuloToString(modulo, string)
  {
    return (number) => (number % modulo) === 0 ? string : number;
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
    
  } */
  
  console.log(resultArray);
  return resultArray;
}
module.exports = getFizzBuzzList;
