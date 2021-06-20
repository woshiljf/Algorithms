/**
 * @param {number[]} nums
 * @return {string}
 * 剑指offer45, 把数组排成最小的数
 */
var minNumber = function (nums) {
  nums.sort((a, b) => {
    // 怎么排序是一个问题
    // 从小打到排序
    let item1 = a + '' + b
    let item2 = b + '' + a
    return item1 - item2

  })

  return nums.join('')


};