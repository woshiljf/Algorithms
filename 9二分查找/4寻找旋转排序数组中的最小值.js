/**
 * @param {number[]} nums
 * @return {number}
 * 复杂度：最坏的情况,O(n)，最好的情况，O(nlogn)
 */
var findMin = function (nums) {

  // 理解成二分查找的变种
  // 这里主要的是，当数组中有重复元素的情况
  if (nums.length < 2) return nums[0]
  var left = 0
  var right = nums.length - 1
  while (left <= right) {
    var mid = (left + right) >> 1
    // 中间索引的元素值大于最右边的值，说明，最小值在右边，
    if (nums[mid] > nums[right]) {
      left = mid + 1
      // 中间索引的元素值大于最右边的值，说明，最小值在左边边，
    } else if (nums[mid] < nums[right]) {
      right = mid

    } else {
      // 否则，咋们用right--，一直缩小排查范围
      right--
    }

  }

  return nums[left]

};