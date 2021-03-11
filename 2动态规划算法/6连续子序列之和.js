var arr = [23, 2, 4, 6, 7],
    k = 25

var checkSubarraySum = function(nums, k) {
    const dp = []
    dp[0] = nums[0]
    let result = dp[0]

    for (let i = 1; i < nums.length; i++) {
        dp[i] = dp[i - 1] + nums[i]
    }

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            result = dp[j] - dp[i] + nums[i]

            if ((k === 0 && result === 0) || (k !== 0 && result % k === 0)) {
                return true
            }
        }
    }

    return false
}

var res = checkSubarraySum(arr, k)
console.log(res)