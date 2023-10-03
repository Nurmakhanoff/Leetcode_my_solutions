// Two pointer - often used for searching pairs in already sorted array.
// [i, ... , j] - move i to the right if sum of [i],[j]<X
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let answer = 0;
    for (let j = 0; j < nums.length; j++){
        if (nums[answer] !== nums[j]){
            answer++;
            nums[answer] = nums[j];
        }
    }
    return answer+1;
}
