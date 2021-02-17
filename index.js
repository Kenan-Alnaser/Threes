// hackerSpeak
// the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5
const hackSpeak = (str) => {
  return str
    .toLowerCase()
    .split("")
    .map((chr) => {
      switch (chr) {
        case "a":
          return "4";
        case "e":
          return "3";
        case "i":
          return "1";
        case "o":
          return "0";
        case "s":
          return "5";
        default:
          return chr;
      }
    })
    .join("");
};
console.log(hackSpeak("I like javaScript"));

// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3

const howManyI = (str, chr) => {
  let strToArray = str.split("");
  let count = 0;
  for (let i = 0; i < strToArray.length; i++) {
    if (strToArray[i] == chr) {
      count++;
    }
  }
  return count;
};

let str = "Is there any i letters in here?";
let lowerCase = str.toLowerCase();
console.log(howManyI(lowerCase, "i"));

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 } ]

let scrabbleTiles = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
const scrabbleScore = (objArr) => {
  total = objArr.reduce((a, b) => ({ score: a.score + b.score }));
  return total;
};
console.log(scrabbleScore(scrabbleTiles));
