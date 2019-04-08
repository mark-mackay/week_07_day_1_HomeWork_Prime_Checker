const PubSub = require('../helpers/pub_sub.js');

const Prime = function() {

};
Prime.prototype.isPrime = (number) => {
  const half = Math.floor(number/2);
  let x = 2;
  while ((number % x !== 0) && (x <= half)) {
    x++
  }
  return `The number ${number} is ${((x <= half) || (number <=1)) ? 'not' : ''} a prime number.`;
};
Prime.prototype.bindEvents = function() {
  PubSub.subscribe('got-number', (event) => {
    const inputtedNumber = event.detail;
    const isThisPrime = this.isPrime(inputtedNumber);
    PubSub.publish('been-primed', isThisPrime);
  });
}


module.exports = Prime;
