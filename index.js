'use strict';

//Реализовать класс RangeValidator. Обьекты, созданные им должны обладать следующими свойcтвами:
//from(число) 5
//to(число) 50

//Реализовать геттеры и сеттеры для обоих свойств.
//Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
//Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает это же число, если оно входит в диапазон. И кинет ошибку, если не входит.

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get from() {
    return this.from;
  }

  get to() {
    return this.to;
  }

  get range() {
    return [this.from, this.to];
  }

  set from(fromNum) {
    if (typeof fromnum !== 'number' || isNan(fromNum)) {
      throw new TypeError("not a number");
    }
    if (fromNum > this.to ) {
      throw new RangeError;
    }
    this.from = fromNum;
  }

  set to(toNum) {
    if (typeof toNum !== 'number' || isNan(toNum)) {
      throw new TypeError("not a number");
    }
    if (toNum < this.from) {
      throw new RangeError;
    }
    this.to = toNum;
  }
  

  validate(data) {
    if (typeof data !== 'number' || isNaN(data)) {
      throw new TypeError;
    }
    if (data < this.from || data > this.to) {
      throw new RangeError;
    } 
    return data;
  }
} 

const rangeNum = new RangeValidator(5, 50);