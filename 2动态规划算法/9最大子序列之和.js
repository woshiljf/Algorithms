/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 53
 */
var maxSubArray = function(nums) {

    if (nums.length == 1) return nums[0]

    var dp = []
    dp[0] = nums[0]
    var maxValue = dp[0]
    for (var i = 1; i < nums.length; i++) {

        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i]
        } else {
            dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])

        }
        // 记录最大值
        if (maxValue < dp[i]) maxValue = dp[i]
    }

    return maxValue


};