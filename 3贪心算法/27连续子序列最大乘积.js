/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 152
 */
var maxProduct = function(nums) {

    if (nums.length < 2) return nums[0]

    var imax = 1,
        imin = 0,
        ans = nums[0]

    for (let i = 0; i < nums.length; i++) {

        var num = nums[i]
        if (num < 0) {

            [imax, imin] = [imin, imax]

        }
        imax = Math.max(imax * num, num)
        imin = Math.min(imin * num, num)
        ans = Math.max(imax, ans)

    }

    return ans


};