'use strict';

const getFizzBuzzList = require('./hiker');

/* describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });
});
*/

describe('fizzbuzz', () => {
    const fizzBuzzArrayDump = ["1", "2", "Fizz", "Buzz"];
    const fizzBuzzArray = getFizzBuzzList();
  it('to get first', () => {
    expect(fizzBuzzArray[0]).toEqual(fizzBuzzArrayDump[0]);
  });
  it('to get Fizz', () => {
    expect(fizzBuzzArray[2]).toEqual(fizzBuzzArrayDump[2]);
  });
  it('to get Buzz', () => {
    expect(fizzBuzzArray[4]).toEqual(fizzBuzzArrayDump[3]);
  });
});
