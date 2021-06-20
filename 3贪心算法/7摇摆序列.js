/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {

  if (nums.length < 2) return nums.length

  var temp = nums[0]
  var count = 1
  // 状态转移，上和下摆动
  var up = true
  var down = true
  for (let i = 1; i < nums.length; i++) {

    var num = nums[i]
    if (num > temp) {
      // 如果序列一直递增，更新temp 一直到最大数
      temp = num
      if (up) {
        // 只增加一次
        up = false
        count++
        down = true
      }
    }
    if (num < temp) {
      // 如果序列一直递减，更新temp一直到最小数
      temp = num
      if (down) {
        // 只递减一次
        down = false
        up = true
        count++
      }
    }

  }
  return count



};