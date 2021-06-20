/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {


  let ans = []
  const track = function (nums, index, temp) {

    if (index == nums.length) {

      ans.push(temp.slice())

      return
    }
    temp.push(nums[index])

    track(nums, index + 1, temp)

    temp.pop()

    track(nums, index + 1, temp)
  }

  track(nums, 0, [])

  return ans

};