/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if (nums.length == 0) return 0
    if (nums.length == 1) return nums[0]
    var dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (var i = 2; i < nums.length; i++) {
        // 状态转移方程
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])

    }
    return dp[i - 1]

};