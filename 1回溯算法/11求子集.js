/**
 * @param {number[]} nums
 * @return {number[][]}
 * leetcode 78
 */
var subsets = function(nums) {

    var result = []

    const track = function(nums, index, temp) {

        // /push每次的结果
        result.push(temp.slice())
        for (let i = index; i < nums.length; i++) {

            if (!temp.includes(nums[i])) {
                temp.push(nums[i])
            }
            // 递归
            track(nums, i + 1, temp)
                // 回溯
            temp.pop()
        }


    }
    track(nums, 0, [])
    return result



};