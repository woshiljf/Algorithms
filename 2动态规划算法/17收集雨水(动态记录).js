/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    if (height == null || height.length == 0) return 0
    var amount = 0
    var len = height.length
    var leftmax = [height[0]]
    var rightmax = []
        // 求出左右两边的最大值数组O(n)
    rightmax[len - 1] = height[len - 1]
    for (let i = 1; i < len; i++) {
        leftmax[i] = Math.max(height[i], leftmax[i - 1])
    }
    for (let j = len - 2; j >= 0; j--) {
        rightmax[j] = Math.max(height[j], rightmax[j + 1])
    }
    for (let i = 1; i < len - 1; i++) {
        amount += Math.min(leftmax[i], rightmax[i]) - height[i]
    }
    return amount

}