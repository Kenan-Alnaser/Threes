// hackerSpeak
// the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5
const hackSpeak = (str) => {
  let leetCode = {
    A: "4",
    B: "b",
    C: "c",
    D: "d",
    E: "3",
    F: "f",
    G: "g",
    H: "h",
    I: "1",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "0",
    P: "p",
    Q: "q",
    R: "r",
    S: "5",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z",
    " ": " ",
  };

  let translatedStr = "";

  for (let i = 0; i < str.length; i++) {
    translatedStr += leetCode[str.charAt(i).toUpperCase()];
  }

  return translatedStr;
};

console.log(hackSpeak("I like JavaScript"));

// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3
countOccurrences = (str, char) => str.split(char).length - 1;
console.log(countOccurrences("this is a string", "i"));

//Scrabble
let points = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

const score = (word) => {
  let userInputWord = word.toUpperCase();
  let pointsTotal = 0;
  for (let i = 0; i < userInputWord.length; i++) {
    let char = userInputWord[i];
    pointsTotal += points[char];
  }
  return pointsTotal;
};
console.log(score("abby"));
