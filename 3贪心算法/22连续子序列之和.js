/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {

//     if(nums.length ==1) return nums[0]

//     var dp = []
//     dp[0] = nums[0]
//     var maxValue = dp[0]
//     for(var i =1;i<nums.length;i++) {
//         if(dp[i-1]>0) {
//             dp[i] = dp[i-1] + nums[i]
//         }else {
//             // 要去理解这个dp[i]在这里表示的含义,dp[i]表示以num[i]这个数作为结尾的最大和
//             dp[i] = Math.max(dp[i-1] + nums[i],nums[i])
//         }
//         // 记录最大值
//         if(maxValue<dp[i]) maxValue = dp[i]
//     }

//     return maxValue


// };

var maxSubArray = function(nums) {

    if (nums.length == 1) return nums[0]

    var maxValue = nums[0]
    var sum = nums[0]
    for (let i = 1; i < nums.length; i++) {

        var num = nums[i]
            // 贪心算法来解决
        if (sum < 0) {
            sum = num
            maxValue = Math.max(sum, maxValue)
        } else {
            // 累加和大于0,则一直累加
            sum += num
            maxValue = Math.max(sum, maxValue)
        }




    }

    return maxValue


};