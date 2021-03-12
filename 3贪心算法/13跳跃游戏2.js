/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 45
 */
var jump = function(nums) {
    if (nums.length < 2) return 0
    var current_max = nums[0] // 当前可达到最远的位置
    var pre_max = nums[0] // 遍历各个位置过程中，可达到最远的位置
    var jumpCount = 1
    for (let i = 1; i < nums.length; i++) {
        // 当前位置i 大于当前最大的跳跃位置了，则可进行跳跃。pre
        if (i > current_max) {
            // 每次挑最大的跳，这样子，跳的次数++
            jumpCount++
            current_max = pre_max
        }

        if (pre_max < nums[i] + i) {
            // pre_max 遍历过程中，可跳跃的最大位置
            pre_max = nums[i] + i
        }
    }
    return jumpCount

};