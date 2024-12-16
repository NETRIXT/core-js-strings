/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 *
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 *
 * @example
 *   getStringLength('aaaaa') => 5
 *   getStringLength('b') => 1
 *   getStringLength('') => 0
 *   getStringLength() => 0
 *   getStringLength(null) => 0
 *   getStringLength(undefined) => 0
 */
/**
 * Returns the length of the given string.
 */
function getStringLength(value) {
  if (typeof value !== 'string') return 0;
  return value.length;
}

/**
 * Returns true if the value is a string, otherwise returns false.
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns the result of concatenation of two strings.
 */
function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

/**
 * Returns the first character of the given string.
 */
function getFirstChar(value) {
  return value ? value.charAt(0) : '';
}

/**
 * Removes leading and trailing whitespace characters from the string.
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value ? value.trim() : '';
}

/**
 * Removes only leading whitespace characters from the string.
 */
function removeLeadingWhitespaces(value) {
  return value ? value.trimStart() : '';
}

/**
 * Removes only trailing whitespace characters from the string.
 */
function removeTrailingWhitespaces(value) {
  return value ? value.trimEnd() : '';
}

/**
 * Returns a string that is repeated the specified number of times.
 */
function repeatString(str, times) {
  if (times <= 0) return '';
  return str.repeat(times);
}

/**
 * Remove the first occurrence of a substring from a string.
 */
function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

/**
 * Remove the last occurrence of a substring from a string.
 */
function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + value.length);
}

/**
 * Calculate the sum of character codes of the given string.
 */
function sumOfCodes(str) {
  if (!str) return 0;
  return [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

/**
 * Checks if a string starts with a specific substring.
 */
function startsWith(str, substr) {
  return str.startsWith(substr);
}

/**
 * Checks if a string ends with a specific substring.
 */
function endsWith(str, substr) {
  return str.endsWith(substr);
}

/**
 * Returns a time string in the "mm:ss" format.
 */
function formatTime(minutes, seconds) {
  const pad = (num) => String(num).padStart(2, '0');
  return `${pad(minutes)}:${pad(seconds)}`;
}

/**
 * Returns a string in reverse order.
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Returns a string with characters in alphabetical order.
 */
function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

/**
 * Checks if a given string contains a specified substring.
 */
function containsSubstring(str, substring) {
  return str.includes(substring);
}

/**
 * Returns the number of vowels in the string.
 */
function countVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  return [...str].filter((char) => vowels.includes(char)).length;
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 */
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === reverseString(cleanedStr);
}

/**
 * Find the longest word in the sentence.
 */
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ''
  );
}

/**
 * Returns the string where each word is reversed.
 */
function reverseWords(str) {
  return str
    .split(' ')
    .map((word) => reverseString(word))
    .join(' ');
}

/**
 * Inverts the case of each character in the given string.
 */
function invertCase(str) {
  return [...str]
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 */
function extractNameFromTemplate(value) {
  return value.replace('Hello, ', '').replace('!', '');
}

/**
 * Remove the first and last angle brackets from tag string.
 */
function unbracketTag(str) {
  return str.replace(/^<|>$/g, '');
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons.
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Encode specified string with ROT13 cipher.
 */
function encodeToRot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  return [...str]
    .map((char) =>
      alphabet.includes(char) ? rot13[alphabet.indexOf(char)] : char
    )
    .join('');
}

/**
 * Returns playing card id.
 */
function getCardId(value) {
  const cards = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];
  return cards.indexOf(value);
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
