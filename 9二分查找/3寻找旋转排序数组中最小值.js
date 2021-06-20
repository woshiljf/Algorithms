/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 154
 */
var findMin = function (nums) {

  // 理解成二分查找的变种

  if (nums.length < 2) return nums[0]

  if (nums.length == 2) return nums[0] > nums[1] ? nums[1] : nums[0]

  var left = 0
  var right = nums.length - 1
  var minValue = nums[0]
  while (left < right) {

    var mid = (left + right) >> 1
    // 这里怎么判断了，局部有序的情况
    if (nums[mid] <= minValue) {
      // 最小值赋值给minValue
      minValue = nums[mid]
      // 比较两个端点，left和right
      if (minValue >= nums[right]) {
        minValue = nums[right]
        right--
      }
      else if (minValue >= nums[left]) {
        minValue = nums[left]
        left++
      } else {
        right = mid - 1
      }

    } else if (nums[mid] >= minValue) {

      if (minValue >= nums[right]) {
        minValue = nums[right]
        right--
      }
      else if (minValue >= nums[left]) {
        minValue = nums[left]
        left++
      } else {
        right = mid - 1
      }

    } else {
      left++
      right--
    }


  }

  return minValue

};