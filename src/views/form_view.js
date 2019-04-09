const PubSub = require('../helpers/pub_sub.js');
const FormView = function() {

};

FormView.prototype.bindEvents = () => {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.number.value);
    const inputtedNumber = event.target.number.value;
    PubSub.publish('got-number', inputtedNumber);
  });
  PubSub.subscribe('been-primed', () => {
    const formNumber = document.querySelector('#number');
    console.dir(formNumber);
    formNumber.value = '';
  //
  });
}

module.exports = FormView;
