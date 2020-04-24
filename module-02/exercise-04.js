const formatString = function (string) {
  let newString = string;

  if (string.length > 40) {
    const massOfSymbols = string.split('').slice(0, 40);
    massOfSymbols.push('...');
    newString = massOfSymbols.join('');
  }

  return newString;
};

console.log(
  formatString('Curabitur ligula sapien, tincidunt non.'),
);
// вернется оригинальная строка

console.log(
  formatString(
    'Vestibulum facilisis, purus nec pulvinar iaculis.',
  ),
);
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
