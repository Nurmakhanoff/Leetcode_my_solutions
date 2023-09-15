/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    for(let i=0; i<nums.length; i++){
        let answer = 0;
        for(let j=0; j<nums.length; j++){
            if(nums[i]==nums[j]){
                answer++;
                if(answer>nums.length/2){
                    return nums[i];
                }
            }
        }
    }
};


// We can also sort these arrays and then pick Math.round(nums.length/2); 
// And there is also a Boyer–Moore majority vote algorithm, that is ideal for our situation. In its simplest form, the algorithm finds a majority element, if there is one: that is, an element that occurs repeatedly for more than half of the elements of the input. A version of the algorithm that makes a second pass through the data can be used to verify that the element found in the first pass really is a majority.
