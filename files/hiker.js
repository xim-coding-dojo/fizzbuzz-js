'use strict';

function answer() {
  return 6 * 9;
}

function getFizzBuzzList() {
  const mapToFizzForModulo3 = mapModuloToString(3,"Fizz");
  const mapToBuzzForModulo5 = mapModuloToString(5,"Buzz");
  const mapToFizzBuzzForModulo15 = mapModuloToString(15,"FizzBuzz");
  const resultArray = Array.from({length: 100}, (x, i) => i+1)
  .map(mapToFizzBuzzForModulo15)
  .map(mapToBuzzForModulo5)
  .map(mapToFizzForModulo3)
  .map(i=>i+"");
  function mapModuloToString(modulo, string)
  {
    return (number) => (number % modulo) === 0 ? string : number;
  }
  console.log(resultArray);
  return resultArray;
}

module.exports = getFizzBuzzList;
