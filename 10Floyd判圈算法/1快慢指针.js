/**
 * 
 * @param {*} nums 
 * @returns 
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），
 * 
 *  可知至少存在一个重复的整数。
    假设 nums 只有 一个重复的整数，找出 这个重复的数.
 */

// 首先题目的标准是数组的元素在1-n之间，我们可以使用快慢指针的方式，来寻找重复的数字
var findDuplicate = function (nums) {
  // 
  let slow = 0, fast = 0;
  // 当slow 不等于fast
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

