// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    if (!encode) { //decoding --------
      return decoding(input, encode);
    } else { //encoding --------
      return encoding(input, encode);
    }
  }
  
  //decoding function --------
  function decoding(input, encode = true) {
    const guardClause = input.replace(" ", "");
      if (guardClause.length % 2 !== 0) { //guard clause to check and make sure the amount of numbers in the input is even
        return false;
      }
      const arrayCipher = [ //creating cipher
        ["a", "f", "l", "q", "v"],
        ["b", "g", "m", "r", "w"],
        ["c", "h", "n", "s", "x"],
        ["d", "(i/j)", "o", "t", "y"],
        ["e", "k", "p", "u", "z"],
      ];
      //reformatting input so its compatible with arrayCipher
      let copyInput = input;
      let words = input.split(" ");
      let fullArray = [];
      for (let i in words) {
        let array = [];
        for (let j in words[i]) {
          let character = words[i].slice(0, 2);
          array.push(character);
          words[i] = words[i].slice(2);
        }
        array.splice(array.length / 2);
        fullArray.push(array); // fullArray format when there are multiple words [['32', '51', '13', '13', '43'], ['25', '43', '24', '13', '41']]
      }
      //
      let wordsDecoded = [];
      for (let i in fullArray) {
          const wordDecoded = fullArray[i].reduce((res, cur) => {
          const xCoorIndex = cur[0] - 1;
          const yCoorIndex = cur[1] - 1;
          res += arrayCipher[xCoorIndex][yCoorIndex];
          return res;
        }, "");
        wordsDecoded.push(wordDecoded);
      }
      return wordsDecoded.join(" ");
  }

  //encoding function --------
  function encoding(input, encode = true) {
    const arrayCipher = [
      //creating cipher
      ["a", "f", "l", "q", "v"],
      ["b", "g", "m", "r", "w"],
      ["c", "h", "n", "s", "x"],
      ["d", "(i/j)", "o", "t", "y"],
      ["e", "k", "p", "u", "z"],
    ];
    //lowercase conversion
    input = input.toLowerCase();
    //reducing input into the encoded message
    let str = ""; //accumulator str
    for (let char in input) {
      if (input[char] === " ") { //cases where the character in the input string is a space in which case a space should be added to the accumulator string
        str += " ";
      } else if (input[char] === "i" || input[char] === "j") { //cases where the character is either i or j in which case 42 should be added to the accumulator string
        str += "42";
      } else {
        for (let i = 0; i < 5; i++) { //looping through the outer array in arrayCipher
          for (let j = 0; j < 5; j++) { //looping through the inner arrays in arrayCipher
            if (arrayCipher[i][j] === input[char]) { //when the character thats found at the index in the nested array in arrayCipher matches the current character in the input string, the matching character's code indicated by the index of i - 1 and j - 1 should be added to the accumulator string
              str += `${i + 1}${j + 1}`;
            }
          }
        }
      }
    }
    return str;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
