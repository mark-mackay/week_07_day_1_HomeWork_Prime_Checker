const PubSub = require('../helpers/pub_sub.js');
const ResultView = function(){

}
ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('been-primed', (event) => {
    const isThisPrime = event.detail;
    this.displayResult(isThisPrime);
  });
}

ResultView.prototype.displayResult = (isThisPrime) => {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = isThisPrime; 
}
module.exports = ResultView;
