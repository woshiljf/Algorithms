function reversePairs(arr) {

    var len = arr.length
    if (len < 2) return 0

    var copy = arr.slice()

    var temp = []

    return mergerArr(copy, 0, len - 1, temp)


}

function mergerArr(nums, left, right, temp) {

    if (left == right) return 0

    var mid = parseInt((left + right) / 2)
    var leftcount = mergerArr(nums, left, mid, temp)
    var rightcount = mergerArr(nums, mid + 1, right, temp)

    if (nums[mid] <= nums[mid + 1]) {
        return leftcount + rightcount
    }

    var countMount = mergerAndCount(nums, left, mid, right, temp)
    return leftcount + rightcount + countMount

}

function mergerAndCount(nums, left, mid, right, temp) {

    for (let i = left; i <= right; i++) {
        temp[i] = nums[i]
    }
    var i = left
    var j = mid + 1
    var count = 0
    for (let k = left; k <= right; k++) {

        if (i == mid + 1) {
            // 左边的数组已经弄完了，把右边的数放进去合并的数组就行
            nums[k] = temp[j]
            j++
        } else if (j == right + 1) {
            // 右边的数已经用完了，左边的数还有，把左边的数放进合并的数组
            nums[k] = temp[i]
            i++
        } else if (temp[i] <= temp[j]) {
            // 左边的数小于右边的数，没有逆序数
            nums[k] = temp[i]
            i++
        } else {
            // 左边的数大于右边的数，有逆序数，逆序数的个数等于左边的数（这里的数不是说全部左边的数，而是左边指针i指向，剩余后面的数）
            nums[k] = temp[j]
            j++
            count += mid - i + 1
        }
    }

    return count

}

var res = reversePairs([7, 5, 6, 4])
console.log(res);