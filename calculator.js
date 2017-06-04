'use strict';

class calculator {
  add() {
    var x = 0;
    for (let i = 0; i < arguments.length; i++) {
      x = x + arguments[i];
    }
    return x;
  }

  multiply() {
    var x = 1;
    for (let i = 0; i < arguments.length; i++) {
      x = x * arguments[i];
    }
    return x;
  }
}
module.exports = calculator;




