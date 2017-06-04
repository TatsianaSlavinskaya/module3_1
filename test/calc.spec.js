'use strict';

var Calculator = require('../calculator');

describe('Check calculator methods', () => {
  var calculator;
  beforeAll(() => {
    calculator = new Calculator();
  });

  it('Should check add method', () => {
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.add(10, 5)).toEqual(15);
    expect(calculator.add(15, 5, 8)).toBe(28);
    expect(calculator.add(0, -1)).toBe(-1);
    expect(calculator.add(-5, -6)).toBe(-11);
    expect(calculator.add(-5, 6)).toBe(1);
  });

  it('should check multiply method', () => {
    expect(calculator.multiply(1, 1)).toBe(1);
    expect(calculator.multiply(10, 5)).toEqual(50);
    expect(calculator.multiply(15, 5, 8)).toBe(600);
    expect(calculator.multiply(0, -1)).toBe(0);
    expect(calculator.multiply(-5, -6)).toBe(30);
    expect(calculator.multiply(-5, 6)).toBe(-30);
  });

});
