// palindrome.js

const word1 = prompt("Enter the first word:"); // Example: RACECAR
const word2 = prompt("Enter the second word:"); // Example: RECORDER

// Function to check if the string is a palindrome
function isPalindrome(word) {
  const reversed = word.split("").reverse().join(""); // Reverse the string
  console.log(`Original: ${word}, Reversed: ${reversed}`);
  return word === reversed; // Compare original and reversed strings
}

// Log results for both words
console.log(`Is "${word1}" a palindrome? ${isPalindrome(word1)}`);
console.log(`Is "${word2}" a palindrome? ${isPalindrome(word2)}`);
