var arr = [23, 2, 4, 6, 7],
    k = 25

var checkSubarraySum = function(nums, k) {
    var dp = new Array(nums.length)

    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(dp.length).fill(0)
    }

    for (let i = 0; i < dp.length; i++) {
        for (let j = i; j < dp.length; j++) {
            if (j == 0) {
                dp[i][j] = nums[j]
            } else {
                dp[i][j] = dp[i][j - 1] + nums[j]
            }

            if (dp[i][j] % k == 0 && k !== 0) {
                return true
            }
            if (k == 0) {
                return false
            }
        }
    }
    return false
}
var res = checkSubarraySum(arr, k)
console.log(res)