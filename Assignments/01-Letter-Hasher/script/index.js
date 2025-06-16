let alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Get the hash of an alphabet
function getHash(alphabet) {
  let index = alphabets.indexOf(alphabet);
  let hashIndex = alphabets.length - index - 1;
  // if (" " == alphabet) {
  //   return " ";
  // }
  // Alternatively, we can display any letter not in the 26 letter of the alphabets exactly how it is
  if (!alphabets.includes(alphabet)) {
    return alphabet;
  }

  return alphabets[hashIndex];
}
console.log("'A' is hashed as:", getHash("A"));

// Get the hash of a word
function hashfunction(word) {
  let emptyString = "";
  for (const letter of word) {
    emptyString += getHash(letter);
  }
  return emptyString;
}
console.log("'JUDE' is hashed as:", hashfunction("JUDE"));
console.log("'HOW ARE YOU?' is hashed as:", hashfunction("HOW ARE YOU?"));
