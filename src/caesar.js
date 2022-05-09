// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    // guard clauses for the misuse of the shift argument
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // make input all lowercase and an array in order to run reduce
    input = input.toLowerCase().split("");
    //switching shift if decoding
    if (!encode) {
      shift *= -1;
    }
    //encoding and decoding
    const inputDecoded = input.reduce((res, cur) => {
      const regex = /[a-z]/;
      if (!regex.test(cur)) {
        res += cur;
      } else {
        const curCharacterCode = cur.charCodeAt(0);
        let codeShifted;
        if (curCharacterCode + shift > 122) {
          codeShifted = curCharacterCode - 26 + shift;
        } else if (curCharacterCode + shift < 97) {
          codeShifted = curCharacterCode + 26 + shift;
        } else {
          codeShifted = curCharacterCode + shift;
        }
        res += String.fromCharCode(codeShifted);
      }
      return res;
    }, "");
    return inputDecoded;
  }

  return {
    caesar,
  };
})();
// --------

module.exports = { caesar: caesarModule.caesar };
