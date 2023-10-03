/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const guess = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    let answer = ''

    for (let i = (guess.length - 1); i >= 0; i--){
        answer += guess[i]
    }

    if (answer === guess){
        return true
    } 
    else{
        return false
    }
};
