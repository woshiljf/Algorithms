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

            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp)



};