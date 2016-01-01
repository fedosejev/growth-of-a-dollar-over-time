var calculateInterest = require('./calculate-interest');

function getPreTax() {
  var GROSS_AMOUNT = 1;

  return calculateInterest(GROSS_AMOUNT);
}

console.log(getPreTax());
