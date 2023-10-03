/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++){
        let char = ransomNote[i];
        if (!magazine.includes(char)){
            return false;
        }
        magazine = magazine.replace(char, '');
    }
    return true;
};
