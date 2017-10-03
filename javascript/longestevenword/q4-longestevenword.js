// Last question

/**
 * @param {string} sentence - A string of at least one word
 * Returns the longest word that has an even number of characters
 * - the first such word in the sentence, if there are other words equal in length
 * Returns "00" if there are no words with an even number of characters
 */
let longestEvenWord = function (sentence) {
  if (sentence.length == 0) {
    return "00";
  }

  let words = sentence.split(' ');
  let word = '';
  let longestWordLength = 0;

  words.forEach(function (w) {
    if ((w.length % 2 === 0) && (w.length > longestWordLength)) {
      word = w;
      longestWordLength = w.length;
    }
  });

  if (word !== '') {
    return word;
  } else {
    return "00";
  }
}

module.exports = longestEvenWord;