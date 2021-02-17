// hackerSpeak
// the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5
const hackSpeak = (
  original,
  replacements = { a: "4", e: "3", i: "1", o: "0", s: "5" }
) => {
  let userInput = original.toLowerCase();
  let leetSpeek = Object.entries(replacements).reduce(
    (acc, el) => acc.replace(el[0], el[1]),
    userInput
  );
  return leetSpeek;
};
console.log(hackSpeak("I like javaScript"));

// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3
const countOccurrences = (str, char) => {
  return [...str].filter((x) => x === char).length;
};
console.log(countOccurrences("this is a string", "i"));

//Scrabble
let letters = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

const scrabbleScore = (input) => {
  function lettersToScore(letter) {
    for (let index in letters) {
      if (
        Object.keys(letters).indexOf(
          letters[index].indexOf(letter) !== -1 ? index.toString() : "-1"
        ) !== -1
      ) {
        return parseInt(index);
      }
    }
  }
  sum = 0;
  if (input === null || input === "") {
    return 0;
  }
  input
    .toUpperCase()
    .split("")
    .forEach(function (elem) {
      sum += lettersToScore(elem);
    });
  return sum;
};
console.log(scrabbleScore("abby"));
