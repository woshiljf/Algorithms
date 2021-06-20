/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

  // 由于是求乘积最大，乘积不向求和，更加前一个序列之和就能得出最大
  // 可以维护两个动态规划的数组 maxDp,minDp
  // 一点的原因就是成绩最小与最小，可以获得最大值
  // 维护两个最大数组maxDp,minDp

  var maxDp = new Array(nums.length).fill(1)
  var minDp = new Array(nums.length).fill(1)
  var res = nums[0]
  maxDp[0] = nums[0]
  minDp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {

    var max = maxDp[i - 1], min = minDp[i - 1]

    maxDp[i] = Math.max(max * nums[i], Math.max(nums[i], min * nums[i]))
    minDp[i] = Math.min(min * nums[i], Math.min(nums[i], max * nums[i]))
    // 最大值和res比较
    res = Math.max(maxDp[i], res)
  }

  return res


};