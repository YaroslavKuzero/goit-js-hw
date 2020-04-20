const findLongestWord = function (string) {
  const massOfWords = string.split(' ');
  console.log(massOfWords);
  let longestWord = massOfWords[0];
  for (let i = 1; i < massOfWords.length; i += 1) {
    if (longestWord.length < massOfWords[i].length) {
      longestWord = massOfWords[i];
    }
  }
  return longestWord;
};

console.log(
  findLongestWord(
    'The quick brown fox jumped over the lazy dog',
  ),
); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
// ```
