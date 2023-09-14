/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(nums[i]==nums[j]){
                majority++;
            }
            if(majority>=Math.round(nums.length/2)){
                return nums[i];
            }
        }
    }
};
