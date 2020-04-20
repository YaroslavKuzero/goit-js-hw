const checkForSpam = function (message) {
  const mes =
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale');

  return mes;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
