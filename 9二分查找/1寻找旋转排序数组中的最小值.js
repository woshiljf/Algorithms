/**
 * @param {number[]} nums
 * @return {number}
 * leetcode 153
 */
var findMin = function (nums) {

  // 这个题目给出的条件是，数组nums中没有重复的数字
  // 可以使用局部有序的方式
  // return Math.min(...nums)
  // 用到特性，升序数组，旋转的特
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2);
    // 当中间元素nums[pivot] 小于 最右边的元素，表面，更小的元素在pivot的前面，而不是后面
    if (nums[pivot] < nums[high]) {
      // 把高位的索引调到中间pivot
      high = pivot;
    } else {
      // 中间位置大于右边的，表面最小值的应该是在右边
      low = pivot + 1;
    }
  }
  return nums[low];




};