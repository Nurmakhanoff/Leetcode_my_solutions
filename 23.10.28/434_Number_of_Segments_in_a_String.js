/*
Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

 

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Example 2:

Input: s = "Hello"
Output: 1
 

Constraints:

0 <= s.length <= 300
s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
The only space character in s is ' '.
*/
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let ans = s.split(" ");
  let count = 0;
  for (let i=0; i<ans.length; i++){
    if(ans[i] === ""){
      continue;
    }
    else{
      count += 1;
    }
  }
  return count;
  };
