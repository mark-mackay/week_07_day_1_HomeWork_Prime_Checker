const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const Prime = require('./models/is_prime.js');
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const formView = new FormView();
  formView.bindEvents();
  const prime = new Prime;
  prime.bindEvents();
  const resultView = new ResultView();
  resultView.bindEvents();
});
