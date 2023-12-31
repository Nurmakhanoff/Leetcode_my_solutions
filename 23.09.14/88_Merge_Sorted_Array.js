/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let l = m; l < m + n; l++){
        nums1[l] = nums2[l - m];   
    }
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (nums1[i] < nums1[j]) {
                let temp = nums1[i];
                nums1[i] = nums1[j];
                nums1[j] = temp;
            }
        }
    }
    return nums1;
};
