/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 153
 */
var findMin = function(nums) {


    // return Math.min(...nums)
    // 用到特性，升序数组，旋转的特
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (nums[pivot] < nums[high]) {
            high = pivot;
        } else {
            low = pivot + 1;
        }
    }
    return nums[low];




};