/**
 * @param {number[]} nums
 * @return {boolean}
 * leetcode 473
 */
var makesquare = function(nums) {

    if (!nums.length) return false

    var sum = nums.reduce((cur, next) => cur + next, 0)
    if (sum % 4) return false
    var target = sum / 4
    var backet = [0, 0, 0, 0]
    nums.sort((a, b) => a - b)

    function dfs(i, nums, target, backet) {

        if (i >= nums.length) {
            return backet[0] == target && backet[1] == target && backet[2] == target && backet[3] == target
        }
        for (let j = 0; j < 4; j++) {

            if (backet[j] + nums[i] > target) continue

            backet[j] += nums[i]

            if (dfs(i + 1, nums, target, backet)) {
                return true
            }

            backet[j] -= nums[i]
        }
        return false
    }

    return dfs(0, nums, target, backet)


};

var f = makesquare([16, 3, 16, 12, 13, 5, 3, 1, 10, 18, 5, 16, 17, 1, 10])
console.log(f);