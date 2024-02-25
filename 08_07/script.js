/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const tipCalculator = (sum, percentage, currency) => {
  // let sum = 29.95;
  // let percentage = 18;
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
  Sum before tip:  ${currency} ${sum}
  Tip percentage:  ${percentage}%
  Tip:             ${currency} ${tip.toFixed(2)}
  Total:           ${currency}${total.toFixed(2)}
`);
};

tipCalculator(50, 100, "$");
