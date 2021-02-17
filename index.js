// hackerSpeak
// the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5
const hackSpeak = (str) => {
  const leet = { a: 4, b: 3, i: 1, o: 0, s: 5 };
  const translate = (letter) =>
    leet.hasOwnProperty(letter) ? leet[letter] : letter;

  return str.toLowerCase().split("").map(translate).join("");
};
console.log(hackSpeak("I like JavaScript"));

// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3
const countOccurrences = (str, char) => {
  return (str.match(new RegExp(char, "g")) || []).length;
};
console.log(countOccurrences("this is a string", "i"));
//Scrabble
