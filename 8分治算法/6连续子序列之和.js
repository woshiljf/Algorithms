/**
 * @param {number[]} nums
 * @return {number}
 * 
//  * 动态规划法
 */
var maxSubArray = function(nums) {

    var max = nums[0]
    var dp = []
    dp.push(nums[0])

    for (let i = 1; i < nums.length; i++) {

        if (dp[i - 1] > 0) {
            // 当前一个累加和大于0，则继续累加，否则不变，或者选取最大值
            dp[i] = dp[i - 1] + nums[i]
        } else {
            dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
        }


        max = Math.max(max, dp[i])


    }

    return max






};