const findLongestWord = function (string) {
  const massOfWords = string.split(' ');
  let longestWord = massOfWords[0];
  let word;
  // eslint-disable-next-line
  for (word of massOfWords) {
    if (longestWord.length < word.length) {
      longestWord = word;
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
