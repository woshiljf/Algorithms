/**
 * @param {number[]} nums
 * @return {boolean}
 * leetcode 55
 */
var canJump = function(nums) {

    var n = nums.length
        // maxIndex 记录能走到的最大位置
    var maxIndex = nums[0]
        // 
    for (let i = 0; i < n; i++) {
        // 如果当前的位置小于最大的能到达的位置，让当前位置加上当前能到的位置
        // 与当前能跳到的最大位置maxIndex相比，适合更新
        if (i <= maxIndex) {
            maxIndex = Math.max(maxIndex, i + nums[i])
        }
        // 如果当前的maxindex大于等于n-1，说明跳到了
        if (maxIndex >= n - 1) return true
    }
    return false

};