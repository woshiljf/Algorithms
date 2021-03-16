/**
 * 
 * @param {*} nums 
 * @returns
 * leetcode 315
 * 使用查找的数据
 */

function countSmaller(nums) {

    var count = new Array(nums.length).fill(0)
    var sortArr = []
    for (let i = nums.length - 1; i >= 0; i--) {
        var index = findIndex(sortArr, nums[i])
        sortArr.splice(index, 0, nums[i])
        count[i] = index
    }
    // 二分法查找元素应该放在具体的哪个位置
    function findIndex(sortArr, target) {
        var left = 0,
            right = sortArr.length - 1

        while (left < right) {
            var mid = (left + right) >> 1
            if (sortArr[mid] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        // left >right: 循环结束，这时left 的位置的值如果小于target,返回left +1 ,target应该在sortArr中的位置
        if (sortArr[left] < target) return left + 1
        return left
    }
    return count
}