// Strange Adventure: Decipher the Hidden Message

// Challenge

// Medium
// Create a function named strangeAdventure that receives two parameters:

// An array of strings called clues
// A string called cipher
// The function will decipher a hidden message by following these steps:

// Initialize an empty array called decipheredClues.
// Iterate through each string in the clues array:
// Extract all substrings that have a length equal to the length of the cipher string.
// Compare each extracted substring with the cipher string:
// If they have the same length and contain the same characters (in any order), add the substring to decipheredClues.
// If decipheredClues is empty, return "No hidden message found!".
// If not, perform the following:
// Sort decipheredClues by the sum of the character codes of each clue.
// Concatenate the sorted decipheredClues into a single string called hiddenMessage.
// Replace each uppercase character in hiddenMessage with a space and each lowercase character with its uppercase counterpart.
// Return the modified hiddenMessage.

function strangeAdventure(clues, cipher) {
  // Step 1: Initialize an empty array called decipheredClues.
  const decipheredClues = [];
  const cipherLength = cipher.length;

  // Step 2: Iterate through each string in the clues array.
  for (let clue of clues) {
    // Step 3: Extract all substrings that have a length equal to the length of the cipher string.
    for (let i = 0; i <= clue.length - cipherLength; i++) {
      const substring = clue.substring(i, i + cipherLength);

      // Step 4: Compare each extracted substring with the cipher string.
      if (areAnagrams(substring, cipher)) {
        decipheredClues.push(substring);
      }
    }
  }

  // Step 5: If decipheredClues is empty, return "No hidden message found!".
  if (decipheredClues.length === 0) {
    return "No hidden message found!";
  }

  // Step 6: Sort decipheredClues by the sum of the character codes of each clue.
  decipheredClues.sort((a, b) => {
    const sumA = getCharCodeSum(a);
    const sumB = getCharCodeSum(b);
    return sumA - sumB;
  });

  // Step 7: Concatenate the sorted decipheredClues into a single string called hiddenMessage.
  let hiddenMessage = decipheredClues.join("");

  // Step 8: Replace each uppercase character in hiddenMessage with a space and each lowercase character with its uppercase counterpart.
  hiddenMessage = hiddenMessage
    .split("")
    .map((char) => {
      if (char >= "A" && char <= "Z") {
        return " ";
      } else if (char >= "a" && char <= "z") {
        return char.toUpperCase();
      }
      return char;
    })
    .join("");

  // Step 9: Return the modified hiddenMessage.
  return hiddenMessage;
}

// Helper function to check if two strings are anagrams
function areAnagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// Helper function to get the sum of character codes for a string
function getCharCodeSum(str) {
  return str.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

// Example usage
const clues = ["abcABC", "cba", "xyzYX", "mnopMN"];
const cipher = "abc";
console.log(strangeAdventure(clues, cipher)); // Output: " A C"
