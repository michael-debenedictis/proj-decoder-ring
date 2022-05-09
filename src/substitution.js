// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //encoding function --------
  function encoding(input, alphabet, encode = true) {
    if (alphabet.length !== 26) { //guard clause which makes sure the alphabet argument is exactly 26 characters
      return false;
    }
    let res = ""; //declaring accumulator str
    let regex = /[a-z]/;
    for (let i in input) { //iterating through the input string
      if (regex.test(input[i])) { //checks whether the character is a space in which case it adds that to the accumulator
        const curCharacterCode = input[i].charCodeAt(0); //finding ascii character codes for the current character
        const alphIndex = curCharacterCode - 97; //lowercase alphabet start at dec code number 97 so that is subtracted from the current characters index to get the matching index in the substitution alphabet
        res += alphabet[alphIndex];
      } else { //cases where the character is not a space
        res += input[i];
      }
    }
    return res;
  }
  // --------

  //decoding function --------
  function decoding(input, alphabet, encode = true) {
    const regAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let res = ""; //accumulator string
    for (let i in input) { //iterating through the input to be decoded
      if (input[i] === " ") { //accounting for space
        res += " ";
      } else {  //cases where its a character that is not a space
        const subAlphabetIndex = alphabet.indexOf(input[i]); //getting the index for the current input character in the substitution alphabet
        res += regAlphabet[subAlphabetIndex]; //adding the matching index in the standard alphabet
      }
    }
    return res;
  }
  // --------

  // -------- substitution function
  function substitution(input, alphabet, encode = true) { 
    //setup for the guard clauses
    let checkUnique = new Set();
    for (let i in alphabet) {
      checkUnique.add(alphabet[i]);
    }
    checkUnique = [...checkUnique].join("");
    if (!alphabet || alphabet.length !== 26 || checkUnique !== alphabet) { //guard clauses to check whether the substitution album is inputted, has a length of 26 characters, and each character is unique
      return false;
    }
    //make input and alphabet lowercase
    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();
    //encoding and decoding --------
    if (encode) {
      return encoding(input, alphabet, encode);
    } else {
      return decoding(input, alphabet, encode);
    }
  }
  // --------

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
