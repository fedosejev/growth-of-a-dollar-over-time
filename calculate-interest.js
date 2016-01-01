var INTEREST_IN_PERCENTAGE = 5;
var NUMBER_OF_YEARS = 10;

function calculateInterest(initialAmount) {
  var finalAmount = initialAmount;

  for (var counter = 0; counter < NUMBER_OF_YEARS; counter++) {
    finalAmount = (finalAmount + (finalAmount * INTEREST_IN_PERCENTAGE / 100));
  }

  return finalAmount.toFixed(2);
}

module.exports = calculateInterest;
