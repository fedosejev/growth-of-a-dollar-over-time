var calculateInterest = require('./calculate-interest');

function getPostTax() {
  var GROSS_AMOUNT = 1;
  var TAX_IN_PERCENTAGE = 20;
  var postTaxAmount = GROSS_AMOUNT - (GROSS_AMOUNT * TAX_IN_PERCENTAGE / 100);

  return calculateInterest(postTaxAmount);
}

console.log(getPostTax());
