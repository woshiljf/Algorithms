/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 300
 */
var lengthOfLIS = function(nums) {

    let n = nums.length
    if (!n) return 0;
    let dp = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        //我们需要找前面比自己小的；
        for (let j = 0; j < i; j++) {
            // 当前的数，前面的数有多少个比他还小
            if (nums[i] > nums[j]) {
                // nums[i]大于nums[j],把之前的最大上升子序列的数dp[j]加上当前的nums[i]，即dp[j]+1表示之前的数到num[i]的最大上升子序列的个数
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp)



};