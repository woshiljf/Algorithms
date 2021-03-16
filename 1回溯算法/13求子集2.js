/**
 * @param {number[]} nums
 * @return {number[][]}
 * leetcode 90
 */
var subsetsWithDup = function(nums) {

    var result = []
        // 首先是对数组排序，这样的话，如[2,1,2,2], [2,1,2]和[1,2,2]这样重复的组合就会只出线这个：[1,2,2]
    nums.sort((a, b) => a - b)
    var s = new Set()
    const track = function(nums, index, temp) {

        if (index >= nums.length) {
            return
        }
        temp.push(nums[index])
            // 使用集合去重，如果集合中已经存在，就不再需要添加到结果数组result中了
        if (!s.has(temp.join())) {
            result.push(temp.slice())
            s.add(temp.join())
        }
        track(nums, index + 1, temp)
        temp.pop()
        track(nums, index + 1, temp)
    }


    track(nums, 0, [])
    result.unshift([])
    return result







};

var f = subsetsWithDup([1, 2, 2, 4])
console.log(f);