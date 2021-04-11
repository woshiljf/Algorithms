/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 152
 */
var maxProduct = function(nums) {

    var a = 1;
    var max = nums[0];

    for (num of nums) {
        a = a * num;
        if (max < a) max = a;
        if (num == 0) a = 1;

    }
    a = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        a = a * nums[i];
        if (max < a) max = a;
        if (nums[i] == 0) a = 1;
    }
    return max;
};