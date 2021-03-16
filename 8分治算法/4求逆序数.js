/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    var temp = []
    return mergeSort(0, nums.length - 1, temp, nums)
};

function mergeSort(left, right, temp, nums) {
    if (left >= right) return 0
    var mid = parseInt((left + right) / 2)
        // 分治
    var res = mergeSort(left, mid, temp, nums) + mergeSort(mid + 1, right, temp, nums)
        // 分别
    var i = left,
        j = mid + 1
    for (let k = left; k <= right; k++) {
        temp[k] = nums[k]
    }
    for (let k = left; k <= right; k++) {
        // 左边的数已经弄完了，把右边的数合并就行
        if (i == mid + 1) {
            // 合并
            temp[k] = nums[j++]
        } else if (j == right + 1 || temp[i] <= temp[j]) {
            // 右边的数用完了，合并左边的数
            nums[k] = temp[i++]
        } else {
            // 右边的数小于左边的数，合并
            nums[k] = temp[j++]
            res += mid - i + 1
        }
    }
    return res
}