const script = require('./script');

//calculator functions
//addition
test('adds 1 + 2 to equal 3', () => expect(script.add(1, 2)).toBe(3));

test('add negative numbers', () => expect(script.add(-1, -2)).toBe(-3));

//subtraction
test('subtract 5 from 8', () => expect(script.subtract(8, 5)).toBe(3));

//division
test('divide 25 by 5', () => expect(script.divide(25, 5)).toBe(5));

//multiplication
test('multiple 4 and 5', () => expect(script.multiply(4, 5)).toBe(20));


//string functions
test('capitalize string', () => expect(script.capitalizeString('garage')).toBe('Garage'));

test('reverse string', () => expect(script.reverseString('garage')).toBe('egarag'));

//caeser cipher
test('encode string', () => expect(script.caeser('this works', 1)).toBe('uijt xpslt'));

//array analysis
test('find average, min, max, and length of an array', () => expect(script.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
  average: 4,
  min: 1,
  max: 8,
  length: 6
}));