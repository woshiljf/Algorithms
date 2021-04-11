/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 152
 */
var maxProduct = function(nums) {

    // 由于是求乘积最大，乘积不向求和，更加前一个序列之和就能得出最大
    // 可以维护两个动态规划的数组 maxDp,minDp
    var maxDp = [nums[0]],
        minDp = [nums[0]],
        res = nums[0]

    for (let i = 1; i < nums.length; i++) {

        var m = maxDp[i - 1],
            n = minDp[i - 1]

        maxDp[i] = Math.max(m * nums[i], Math.max(n * nums[i], nums[i]))

        minDp[i] = Math.min(n * nums[i], Math.min(m * nums[i], nums[i]))

        res = Math.max(maxDp[i], res);

    }


    return res



};