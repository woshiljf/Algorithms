/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * leetcode 33
 */
var search = function (nums, target) {

  // 二分查找的变种，也就是局部有序的情况下
  var len = nums.length
  if (!len) return -1
  if (len == 1) {
    return nums[0] == target ? 0 : -1
  }

  let left = 0
  let right = nums.length - 1
  while (left <= right) {

    // 基本思路不变
    let mid = (left + right) >> 1
    // 寻找某个数
    if (nums[mid] == target) return mid
    // 这里为什么要先判断左端点和中间的进行比较，如果左端点小于中间，说明左-中，是升序排列的
    if (nums[left] <= nums[mid]) {
      // 既然是升序排列，只要判断target是否在这个排列当做
      if (nums[left] <= target && target <= nums[mid]) {
        // 是的话，缩小右边的索引
        right = mid - 1
      } else {
        // 不是扩大左边索引
        left = mid + 1
      }
    } else {
      // 左边小于中间的情况，说明从中间到最右边是升序排列的
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }

    }
  }


  return -1

};