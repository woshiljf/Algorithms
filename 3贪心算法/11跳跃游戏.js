/**
 * @param {number[]} nums
 * @return {boolean}
 * leetcode 55
 */
var canJump = function(nums) {
    var indexArr = []
        // 首先计算每个点达到的最大位置
    for (let i = 0; i < nums.length; i++) {
        // 当前位置i+nums[i]
        indexArr.push(i + nums[i])
    }
    var jump = 0
    var max_index = indexArr[0]

    while (jump < indexArr.length && jump <= max_index) {

        // 更新能走到的最大的位置，如果最大的位置都达不到终点，其余的点也到不了
        if (max_index < indexArr[jump]) max_index = indexArr[jump]

        jump++
    }

    // 如果jump==indexarr，表示达到最后的位置
    if (jump == indexArr.length) return true

    return false

};