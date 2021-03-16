/**
 * @param {number[]} nums
 * @return {number}
 * 暴力解决法
 */
var maxSubArray = function(nums) {

    if (nums.length < 2) return nums[0]

    var maxSum = -Infinity
    for (let i = 0; i < nums.length; i++) {
        var temp = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (temp > maxSum) {
                maxSum = temp
            }
            temp += nums[j]
        }
        if (temp > maxSum) {
            maxSum = temp
        }
    }


    return maxSum

};