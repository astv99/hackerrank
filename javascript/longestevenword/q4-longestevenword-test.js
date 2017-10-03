let { expect } = require('chai');
let longestEvenWord = require('./q4_longestevenword');

describe("the function longestEvenWord()", () => {
  describe("should return the string value", () => {
    it("'pleasant' for 'It is a pleasant day today'", () => {
      let returnedWord = longestEvenWord("It is a pleasant day today");
      expect(returnedWord).to.equal('pleasant');
    });

    it("'00' for 'hey'", () => {
      let returnedWord = longestEvenWord("hey");
      expect(returnedWord).to.equal('00');
    });

    it("'jumped' for 'The quick brown fox jumped over the lazier dog'", () => {
      let returnedWord = longestEvenWord("The quick brown fox jumped over the lazier dog");
      expect(returnedWord).to.equal('jumped');
    });
  });
});